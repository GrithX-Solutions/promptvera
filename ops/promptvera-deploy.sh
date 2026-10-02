#!/usr/bin/env bash
set -euo pipefail

WORKSPACE=/srv/zt-workspaces/promptvera
STATE_DIR=/var/lib/promptvera
STATE_FILE="$STATE_DIR/last-deployed-sha"

install -d -m 0755 "$STATE_DIR"
cd "$WORKSPACE"

[ "$(git branch --show-current)" = "main" ]
[ -z "$(git status --porcelain)" ]

CURRENT="$(git rev-parse HEAD)"
PREVIOUS="$(cat "$STATE_FILE" 2>/dev/null || true)"

docker compose -p promptvera -f docker-compose.production.yml config >/dev/null
docker compose -p promptvera -f docker-compose.production.yml up -d --build --remove-orphans

healthy=0
for _ in $(seq 1 45); do
  status="$(docker inspect -f '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' promptvera_caddy 2>/dev/null || true)"
  if [ "$status" = "healthy" ]; then
    healthy=1
    break
  fi
  sleep 2
done

if [ "$healthy" -ne 1 ]; then
  docker logs --tail 100 promptvera_caddy || true
  exit 1
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
