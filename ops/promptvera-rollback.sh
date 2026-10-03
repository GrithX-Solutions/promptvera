#!/usr/bin/env bash
set -Eeuo pipefail

WORKSPACE=/srv/zt-workspaces/promptvera
STATE_DIR=/var/lib/promptvera
LOCK_FILE="$STATE_DIR/deploy.lock"
IMAGE_REPO=promptvera-web
CURRENT_TAG="$IMAGE_REPO:latest"
ROLLBACK_TAG="$IMAGE_REPO:rollback"
SWAP_TAG="$IMAGE_REPO:rollback-swap"
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

image_id_for_tag() {
  docker image inspect "$1" -f '{{.Id}}' 2>/dev/null || true
}

"${COMPOSE[@]}" config >/dev/null

if ! docker image inspect "$CURRENT_TAG" >/dev/null 2>&1; then
  echo "error: current PromptVera image tag is unavailable" >&2
  exit 1
fi

if ! docker image inspect "$ROLLBACK_TAG" >/dev/null 2>&1; then
  echo "error: no PromptVera rollback image is available" >&2
  exit 1
fi

if ! docker inspect "$CONTAINER" >/dev/null 2>&1; then
  echo "error: PromptVera production container is not running" >&2
  exit 1
fi

current_image_id="$(image_id_for_tag "$CURRENT_TAG")"
rollback_image_id="$(image_id_for_tag "$ROLLBACK_TAG")"

if [ "$current_image_id" = "$rollback_image_id" ]; then
  echo "PromptVera current and rollback tags already reference the same image."
  exit 0
fi

# Pin the current release before moving latest to the retained rollback image.
docker image rm "$SWAP_TAG" >/dev/null 2>&1 || true
docker image tag "$CURRENT_TAG" "$SWAP_TAG"
docker image tag "$ROLLBACK_TAG" "$CURRENT_TAG"

if ! "${COMPOSE[@]}" up -d --no-build --force-recreate --remove-orphans || ! wait_for_health; then
  echo "error: rollback image failed health validation; restoring previous current image" >&2
  docker image tag "$SWAP_TAG" "$CURRENT_TAG"
  "${COMPOSE[@]}" up -d --no-build --force-recreate --remove-orphans || true
  wait_for_health || true
  docker image rm "$SWAP_TAG" >/dev/null 2>&1 || true
  exit 1
fi

# Successful rollback becomes the new current. Retain the release we rolled
# away from as the single reverse/forward image without creating an untagged gap.
docker image tag "$SWAP_TAG" "$ROLLBACK_TAG"
docker image rm "$SWAP_TAG" >/dev/null 2>&1 || true

echo "PromptVera rollback completed; exactly one reverse image remains retained."
