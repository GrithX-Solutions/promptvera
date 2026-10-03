#!/usr/bin/env bash
set -Eeuo pipefail

WORKSPACE=/srv/zt-workspaces/promptvera
STATE_DIR=/var/lib/promptvera
STATE_FILE="$STATE_DIR/last-deployed-sha"
LOCK_FILE="$STATE_DIR/deploy.lock"
IMAGE_REPO=promptvera-web
CURRENT_TAG="$IMAGE_REPO:latest"
ROLLBACK_TAG="$IMAGE_REPO:rollback"
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

restore_previous() {
  local previous_image_id="$1"

  [ -n "$previous_image_id" ] || {
    echo "error: no previous PromptVera image is available for automatic rollback" >&2
    return 1
  }

  echo "Restoring PromptVera previous healthy image."
  docker image tag "$previous_image_id" "$CURRENT_TAG"

  if ! "${COMPOSE[@]}" up     -d     --no-build     --force-recreate     --remove-orphans; then
    return 1
  fi

  if ! wait_for_health; then
    docker logs --tail 100 "$CONTAINER" || true
    return 1
  fi

  return 0
}

"${COMPOSE[@]}" config >/dev/null

previous_image_id="$(container_image_id)"
old_rollback_image_id="$(image_id_for_tag "$ROLLBACK_TAG")"

# Pin the currently healthy production image before Compose rebuilds or
# recreates the service. Once the old container is removed, an untagged image
# can disappear before we get a chance to retain it for rollback.
if [ -n "$previous_image_id" ]; then
  docker image rm "$ROLLBACK_TAG" >/dev/null 2>&1 || true
  docker image tag "$previous_image_id" "$ROLLBACK_TAG"
fi

if ! "${COMPOSE[@]}" up -d --build --remove-orphans; then
  candidate_image_id="$(image_id_for_tag "$CURRENT_TAG")"
  echo "error: PromptVera candidate deployment failed; attempting rollback" >&2
  if restore_previous "$previous_image_id"; then
    remove_image_unless_retained "$candidate_image_id" "$previous_image_id" "$old_rollback_image_id"
  else
    echo "error: automatic rollback also failed" >&2
  fi
  exit 1
fi

candidate_image_id="$(container_image_id)"

if ! wait_for_health; then
  docker logs --tail 100 "$CONTAINER" || true
  echo "error: PromptVera candidate failed health validation; attempting rollback" >&2
  if restore_previous "$previous_image_id"; then
    remove_image_unless_retained "$candidate_image_id" "$previous_image_id" "$old_rollback_image_id"
  else
    echo "error: automatic rollback also failed" >&2
  fi
  exit 1
fi

current_image_id="$(container_image_id)"

if [ -n "$previous_image_id" ] && [ "$current_image_id" != "$previous_image_id" ]; then
  remove_image_unless_retained "$old_rollback_image_id" "$current_image_id" "$previous_image_id"
fi

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
