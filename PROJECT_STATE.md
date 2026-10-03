# PromptVera Project State

Last verified: 2026-10-03T10:13Z

## Objective

Complete the content-quality release and make the production deployment/rollback path reliable before the next production deployment.

## Source / deploy SHA

- GitHub `main`: `f3d4303708ca87829792b32481e365afb873f7a8`
- Active work branch: `fix/atomic-candidate-deploy`
- Work branch HEAD: `7f09b5bc6b9aaba01e52e3f3f51f595a39683924`
- Production content from PR #30 is currently serving and the container is healthy.
- The latest deployment task returned failure after recreation because of Docker image-tag retention behavior. Production health remained green, but rollback retention is not yet verified/restored.

## Last completed task

- PR #30 content remediation merged and its GitHub CI passed.
- Production build for that content passed and the resulting site is currently healthy.
- PR #31 attempted a narrow rollback-retention fix, passed CI, and merged, but production verification showed the approach was insufficient.
- Replacement deployment design is implemented on `fix/atomic-candidate-deploy` and opened as PR #33.

## Tests / evidence

- PR #30 CI: PASS.
- PR #31 CI: PASS.
- Production container health after the failed deploy attempts: PASS.
- Production Compose config validation for the replacement design: PASS.
- Replacement design scope: `docker-compose.production.yml`, `ops/promptvera-deploy.sh`, `ops/promptvera-rollback.sh`.
- PR #33 CI: pending.

## Deployment / indexing status

- Content remediation is live and healthy.
- Deployment task status for the last two attempts: FAILED after container recreation because rollback image retention/tagging failed.
- Rollback image availability: not yet restored/verified.
- IndexNow state for the content release is not considered verified because the deploy task exited before its final state/update stage.

## Blockers

- PR #33 must pass CI and merge before any further production deployment.
- A successful post-merge deployment must verify both `promptvera-web:latest` and `promptvera-web:rollback` exist and the container is healthy.

## Risks

- Deploying before PR #33 is merged would repeat the exact workflow problem this fix is intended to eliminate.
- A production deploy without a retained rollback image violates the project release policy.

## Work in progress

PR #33 changes deployment to build a separate candidate image, promote it to `latest` only after the build succeeds, rotate the prior `latest` to `rollback`, and make rollback use named image tags instead of container image/config digests.

## Affected files

- `docker-compose.production.yml`
- `ops/promptvera-deploy.sh`
- `ops/promptvera-rollback.sh`
- `PROJECT_STATE.md`
- `DECISIONS.md`

## NEXT ACTION

Run PR #33 CI to completion; if green, merge it to `main`, then perform one controlled production deployment and verify health plus current/rollback image retention.
