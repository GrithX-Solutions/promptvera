#!/usr/bin/env bash
set -Eeuo pipefail

WORKSPACE=/srv/zt-workspaces/promptvera
STATE_DIR=/var/lib/promptvera
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

"${COMPOSE[@]}" config >/dev/null

if ! docker image inspect "$ROLLBACK_TAG" >/dev/null 2>&1; then
  echo "error: no PromptVera rollback image is available" >&2
  exit 1
fi

current_image_id="$(docker inspect -f '{{.Image}}' "$CONTAINER" 2>/dev/null || true)"
if [ -z "$current_image_id" ]; then
  echo "error: PromptVera production container is not running" >&2
  exit 1
fi

rollback_image_id="$(docker image inspect "$ROLLBACK_TAG" -f '{{.Id}}')"
if [ "$current_image_id" = "$rollback_image_id" ]; then
  echo "PromptVera is already running the retained rollback image."
  exit 0
fi

docker image tag "$ROLLBACK_TAG" "$CURRENT_TAG"

if ! "${COMPOSE[@]}" up   -d   --no-build   --force-recreate   --remove-orphans || ! wait_for_health; then
  echo "error: rollback image failed health validation; restoring previous current image" >&2
  docker image tag "$current_image_id" "$CURRENT_TAG"
  "${COMPOSE[@]}" up     -d     --no-build     --force-recreate     --remove-orphans || true
  wait_for_health || true
  exit 1
fi

docker image rm "$ROLLBACK_TAG" >/dev/null 2>&1 || true
docker image tag "$current_image_id" "$ROLLBACK_TAG"

echo "PromptVera rollback completed; exactly one reverse image remains retained."
