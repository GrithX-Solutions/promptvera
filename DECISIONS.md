# PromptVera Decisions

## 2026-10-03 — Release only completed GitHub tasks

Production deployment happens only after the complete task is implemented on a branch, tested, reviewed through a pull request, merged to `main`, and project state is synchronized. Small intermediate changes are not deployed independently.

Reason: deploying partial fixes creates unnecessary production churn, weakens rollback confidence, and makes GitHub cease to be the authoritative release record.

## 2026-10-03 — Candidate-image deployment model

PromptVera production releases build a separate `promptvera-web:candidate` image. A successful build is promoted to `promptvera-web:latest` only during the controlled deployment step. The previously current image is retained as `promptvera-web:rollback`.

Compose must consume the explicit `promptvera-web:latest` image for no-build recreation. Deploy and rollback tag rotations must use named Docker image references rather than a container's internal image/config digest.

Reason: the previous `docker compose up --build` flow could replace or clean up the old image before the deploy script retained it, causing a healthy release to finish with a failed rollback-retention step.
