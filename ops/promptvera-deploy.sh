#!/usr/bin/env bash
set -Eeuo pipefail

WORKSPACE=/srv/zt-workspaces/promptvera
STATE_DIR=/var/lib/promptvera
STATE_FILE="$STATE_DIR/last-deployed-sha"
IMAGE_REPO=promptvera-web
CURRENT_TAG="$IMAGE_REPO:latest"
ROLLBACK_TAG="$IMAGE_REPO:rollback"
CONTAINER=promptvera_caddy
COMPOSE=(docker compose -p promptvera -f docker-compose.production.yml)

install -d -m 0755 "$STATE_DIR"
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

prune_project_dangling() {
  if ! docker image prune     --force     --filter "label=com.docker.compose.project=promptvera"     >/dev/null; then
    echo "warning: PromptVera dangling-image cleanup failed" >&2
  fi
}

restore_rollback() {
  if ! docker image inspect "$ROLLBACK_TAG" >/dev/null 2>&1; then
    echo "error: no PromptVera rollback image is available" >&2
    return 1
  fi

  echo "Restoring PromptVera last-known-good image."
  docker image tag "$ROLLBACK_TAG" "$CURRENT_TAG"

  if ! "${COMPOSE[@]}" up     -d     --no-build     --force-recreate     --remove-orphans; then
    return 1
  fi

  if ! wait_for_health; then
    docker logs --tail 100 "$CONTAINER" || true
    return 1
  fi

  prune_project_dangling
  return 0
}

"${COMPOSE[@]}" config >/dev/null

previous_image_id="$(docker inspect -f '{{.Image}}' "$CONTAINER" 2>/dev/null || true)"
if [ -n "$previous_image_id" ]; then
  docker image rm "$ROLLBACK_TAG" >/dev/null 2>&1 || true
  docker image tag "$previous_image_id" "$ROLLBACK_TAG"
fi

if ! "${COMPOSE[@]}" up -d --build --remove-orphans; then
  echo "error: PromptVera candidate deployment failed; attempting rollback" >&2
  restore_rollback || echo "error: automatic rollback also failed" >&2
  exit 1
fi

if ! wait_for_health; then
  docker logs --tail 100 "$CONTAINER" || true
  echo "error: PromptVera candidate failed health validation; attempting rollback" >&2
  restore_rollback || echo "error: automatic rollback also failed" >&2
  exit 1
fi

current_image_id="$(docker inspect -f '{{.Image}}' "$CONTAINER")"
if [ -n "$previous_image_id" ] && [ "$current_image_id" = "$previous_image_id" ]; then
  docker image rm "$ROLLBACK_TAG" >/dev/null 2>&1 || true
fi

prune_project_dangling

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
