#!/usr/bin/env bash
set -Eeuo pipefail

WORKSPACE=/srv/zt-workspaces/promptvera
STATE_DIR=/var/lib/promptvera
STATE_FILE="$STATE_DIR/last-deployed-sha"
LOCK_FILE="$STATE_DIR/deploy.lock"
IMAGE_REPO=promptvera-web
CURRENT_TAG="$IMAGE_REPO:latest"
ROLLBACK_TAG="$IMAGE_REPO:rollback"
CANDIDATE_TAG="$IMAGE_REPO:candidate"
PREVIOUS_STAGING_TAG="$IMAGE_REPO:previous-staging"
CONTAINER=promptvera_caddy
COMPOSE=(docker compose -p promptvera -f docker-compose.production.yml)

install -d -m 0755 "$STATE_DIR"
command -v flock >/dev/null 2>&1 || {
  echo "error: flock is required for serialized PromptVera deploy/rollback operations" >&2
  exit 69
}
exec 9>"$LOCK_FILE"
flock -x 9

cd "$WORKSPACE"

[ "$(git branch --show-current)" = "main" ]
[ -z "$(git status --porcelain)" ]

CURRENT="$(git rev-parse HEAD)"
PREVIOUS="$(cat "$STATE_FILE" 2>/dev/null || true)"

wait_for_health() {
  local status=""

  for _ in $(seq 1 45); do
    status="$(docker inspect -f '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' "$CONTAINER" 2>/dev/null || true)"
    if [ "$status" = "healthy" ]; then
      return 0
    fi
    sleep 2
  done

  return 1
}

image_id_for_tag() {
  docker image inspect "$1" -f '{{.Id}}' 2>/dev/null || true
}

container_image_id() {
  docker inspect -f '{{.Image}}' "$CONTAINER" 2>/dev/null || true
}

remove_image_unless_retained() {
  local image_id="${1:-}"
  shift || true

  [ -n "$image_id" ] || return 0

  local retained=""
  for retained in "$@"; do
    if [ -n "$retained" ] && [ "$image_id" = "$retained" ]; then
      return 0
    fi
  done

  docker image rm "$image_id" >/dev/null 2>&1 || true
}

cleanup_candidate_tag() {
  docker image rm "$CANDIDATE_TAG" >/dev/null 2>&1 || true
}

cleanup_previous_staging_tag() {
  docker image rm "$PREVIOUS_STAGING_TAG" >/dev/null 2>&1 || true
}

restore_previous() {
  local previous_image_id="$1"

  [ -n "$previous_image_id" ] || {
    echo "error: no previous PromptVera image is available for automatic rollback" >&2
    return 1
  }

  echo "Restoring PromptVera previous healthy image."
  docker image tag "$previous_image_id" "$CURRENT_TAG"

  if ! "${COMPOSE[@]}" up -d --no-build --force-recreate --remove-orphans; then
    return 1
  fi

  if ! wait_for_health; then
    docker logs --tail 100 "$CONTAINER" || true
    return 1
  fi

  return 0
}

rotate_rollback_to_previous() {
  local previous_image_id="$1"

  [ -n "$previous_image_id" ] || return 0

  # The previous production image stays pinned under PREVIOUS_STAGING_TAG
  # throughout candidate deployment and health validation. Only after the
  # candidate is healthy do we replace the retained rollback release.
  docker image tag "$PREVIOUS_STAGING_TAG" "$ROLLBACK_TAG"
  cleanup_previous_staging_tag
}

"${COMPOSE[@]}" config >/dev/null

previous_image_id="$(container_image_id)"
old_rollback_image_id="$(image_id_for_tag "$ROLLBACK_TAG")"

# Keep both the running production image and the existing rollback image
# addressable while the candidate is built, started, and health-checked.
cleanup_previous_staging_tag
if [ -n "$previous_image_id" ]; then
  docker image tag "$previous_image_id" "$PREVIOUS_STAGING_TAG"
fi

# Build under an isolated candidate tag. A failed build cannot mutate the
# image tag consumed by the running production container.
cleanup_candidate_tag
if ! docker build -t "$CANDIDATE_TAG" -f Dockerfile .; then
  echo "error: PromptVera candidate image build failed; production was not changed" >&2
  cleanup_candidate_tag
  cleanup_previous_staging_tag
  exit 1
fi

candidate_image_id="$(image_id_for_tag "$CANDIDATE_TAG")"
if [ -z "$candidate_image_id" ]; then
  echo "error: PromptVera candidate image was not created" >&2
  cleanup_candidate_tag
  cleanup_previous_staging_tag
  exit 1
fi

# Promote the built candidate to the explicit Compose image tag, then recreate
# the service without allowing Compose to build or retag anything itself.
docker image tag "$candidate_image_id" "$CURRENT_TAG"

if ! "${COMPOSE[@]}" up -d --no-build --force-recreate --remove-orphans; then
  echo "error: PromptVera candidate deployment failed; attempting rollback" >&2
  if restore_previous "$previous_image_id"; then
    cleanup_candidate_tag
    cleanup_previous_staging_tag
    remove_image_unless_retained "$candidate_image_id" "$previous_image_id" "$old_rollback_image_id"
  else
    echo "error: automatic rollback also failed" >&2
  fi
  exit 1
fi

if ! wait_for_health; then
  docker logs --tail 100 "$CONTAINER" || true
  echo "error: PromptVera candidate failed health validation; attempting rollback" >&2
  if restore_previous "$previous_image_id"; then
    cleanup_candidate_tag
    cleanup_previous_staging_tag
    remove_image_unless_retained "$candidate_image_id" "$previous_image_id" "$old_rollback_image_id"
  else
    echo "error: automatic rollback also failed" >&2
  fi
  exit 1
fi

current_image_id="$(container_image_id)"

if [ -n "$previous_image_id" ] && [ "$current_image_id" != "$previous_image_id" ]; then
  rotate_rollback_to_previous "$previous_image_id"
  remove_image_unless_retained "$old_rollback_image_id" "$current_image_id" "$previous_image_id"
else
  cleanup_previous_staging_tag
fi

cleanup_candidate_tag

submit_all=0
indexnow_ok=1
urls=()

if [ -z "$PREVIOUS" ] || ! git cat-file -e "$PREVIOUS^{commit}" 2>/dev/null || ! git merge-base --is-ancestor "$PREVIOUS" "$CURRENT"; then
  submit_all=1
else
  while IFS= read -r path; do
    case "$path" in
      app/page.tsx)
        urls+=("https://promptvera.com")
        ;;
      app/*/page.tsx)
        route="${path#app/}"
        route="${route%/page.tsx}"
        urls+=("https://promptvera.com/$route")
        ;;
      app/layout.tsx|app/globals.css|components/*|lib/*)
        submit_all=1
        ;;
    esac
  done < <(git diff --name-only "$PREVIOUS" "$CURRENT")
fi

if [ "$submit_all" -eq 1 ]; then
  if ! python3 scripts/indexnow_submit.py; then
    echo "warning: IndexNow submission failed; deployment remains healthy" >&2
    indexnow_ok=0
  fi
elif [ "${#urls[@]}" -gt 0 ]; then
  if ! python3 scripts/indexnow_submit.py "${urls[@]}"; then
    echo "warning: IndexNow submission failed; deployment remains healthy" >&2
    indexnow_ok=0
  fi
fi

if [ "$indexnow_ok" -eq 1 ]; then
  printf '%s\n' "$CURRENT" > "$STATE_FILE"
  chmod 0644 "$STATE_FILE"
fi
