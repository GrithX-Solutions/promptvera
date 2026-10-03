# PromptVera Project State

Last verified: 2026-10-03

## Objective

Complete the content-quality release and restore a reliable production deployment/rollback path before the next production deployment.

## Source / deploy SHA

- GitHub `main`: `07312179e435ec90f06883d7cf1e628de40596cf` after PR #32.
- Production content from PR #30 is currently serving and the production container was verified healthy after the content release incident.
- Deployment/rollback hardening is being completed in the current release-safety task before any further production deployment.

## Last completed task

- PR #30: sitewide content-quality remediation merged; CI passed.
- PR #31: first rollback-retention fix merged; CI passed, but post-merge review identified a retention flaw.
- PR #32: atomic candidate deployment and delayed rollback rotation merged; CI passed.
- The remaining GitHub-side release work is to harden the manual rollback wrapper and record canonical release decisions/state.

## Tests / evidence

- PR #30 CI: PASS.
- PR #31 CI: PASS.
- PR #32 CI: PASS, including shell syntax, TypeScript checks, and production build.
- Production container health after the content release incident: PASS.
- The next deployment must verify both `promptvera-web:latest` and `promptvera-web:rollback` after health validation.

## Deployment / indexing status

- Content remediation: LIVE and healthy.
- Next code deployment: BLOCKED until the current release-safety PR is merged.
- Rollback retention after the next deployment: UNKNOWN until verified in production.
- IndexNow completion for the content release: not treated as verified because the earlier deploy process exited before its final state/update stage.

## Blockers

- Merge the release-safety PR.
- Then perform one controlled deployment from clean merged `main`.
- Verify container health, current image tag, rollback image tag, and release state before declaring the task done.

## Risks

- Deploying partial changes independently creates unnecessary production churn and weakens rollback confidence.
- Production must not be advanced unless a distinct retained rollback image is available after successful health validation.

## Work in progress

The release-safety task completes the deploy/rollback model: candidate images are built separately, production uses an explicit `latest` tag, the existing rollback remains untouched while a candidate is being validated, and manual rollback swaps named image tags while preserving one reverse image.

## Affected files

- `docker-compose.production.yml`
- `ops/promptvera-deploy.sh`
- `ops/promptvera-rollback.sh`
- `PROJECT_STATE.md`
- `DECISIONS.md`

## NEXT ACTION

After this GitHub task is fully merged and CI is green, perform one controlled production deployment from merged `main`, verify health plus current/rollback image retention, then update this state with the deployed SHA and verification evidence.
