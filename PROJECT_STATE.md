# PromptVera Project State

Last verified: 2026-10-03

## Objective

Keep the completed content release healthy in production while restoring a reliable, repo-aligned standard deployment path before the next production release.

## Source / deploy SHA

- Deployed application source: `0f172725109d78e43bd3c444833e7da9dd3fa393` (PR #34 merge).
- Production workspace was verified clean on `main` with `HEAD == origin/main == 0f172725109d78e43bd3c444833e7da9dd3fa393` before deployment.
- This state-only follow-up may make GitHub `main` newer than the deployed application SHA without changing the public runtime.

## Last completed task

- PR #30 content-quality remediation remains the current public content surface.
- PR #32 and PR #34 merged the repo-controlled deploy/rollback safety design.
- The 2026-10-03 production release attempt exposed a mismatch between the registered operator deploy task behavior and the versioned repo deploy script.
- Production safety was recovered without a second production deployment: the current container was kept running, and a distinct tested rollback image was reconstructed from the known-good PR #30 source.

## Tests / evidence

- PR #34 CI run #43: PASS.
- Production workspace before deploy: clean `main`, exact SHA `0f172725109d78e43bd3c444833e7da9dd3fa393`.
- Registered deploy task action `a1c04c81cab24c9789da7b6526a06121`: FAILED with return code 1 after container recreation; Docker reported `No such image: sha256:3084abc6c999c9235680194c60e1933b0d7439fd2035a9947ecf3f8a7db21bdf`.
- Current production container: VERIFIED `running` / `healthy`.
- External `https://promptvera.com/`: VERIFIED HTTP 200 from the production host.
- Current image `promptvera-web:latest`: `sha256:d9989fa5843556022d9f11bda197b24dcfb07db65bc7efdfa89c18c6195fda50`.
- Reconstructed rollback source: merged PR #30 commit `05b4f80ce2647cb1f08afcfba1a4103bab3b6c9d`; PR #30 CI run #36: PASS.
- Rollback image `promptvera-web:rollback`: `sha256:f1156bef74dbf007fd46839c7b505c3bed6387352849b373c75a29d7ed824a42`.
- Rollback image isolated probe: VERIFIED HTTP 200.
- Current and rollback image IDs are VERIFIED distinct.
- IndexNow: VERIFIED HTTP 200, 26 URLs submitted.
- `/var/lib/promptvera/last-deployed-sha` write to `0f172725109d78e43bd3c444833e7da9dd3fa393` returned success. Direct readback verification was BLOCKED by connector safety, so readback remains UNKNOWN.

## Deployment / indexing status

- Public runtime: VERIFIED healthy.
- Deployed application SHA: VERIFIED `0f172725109d78e43bd3c444833e7da9dd3fa393`.
- Rollback availability: VERIFIED; one distinct tested rollback image is retained.
- IndexNow submission: VERIFIED successful.
- Registered standard deploy task: BLOCKED for the next release until its execution behavior is aligned with the repo-controlled release script.

## Blockers

The registered operator-defined `deploy` task must not be used for another production release yet.

Observed task output used Docker Compose build behavior and failed while retaining the previous image. That behavior does not match the merged `ops/promptvera-deploy.sh`, which builds an isolated candidate image and delays rollback rotation until after candidate health validation. The task's hidden operator argv is not exposed, so the exact registry-side implementation remains PARTIALLY VERIFIED rather than fully root-caused.

## Risks

- Reusing the current registered deploy task can again lose the previous rollback image.
- A healthy runtime does not make a failed release procedure acceptable; release automation must preserve rollback safety before the next deployment.
- Do not redeploy this state-only documentation update.

## Work in progress

No public application change is in progress. Production is healthy and protected by a tested rollback image. The remaining work is operator-side deployment-profile alignment with the versioned repo release logic.

## Affected files

- `PROJECT_STATE.md`
- `DECISIONS.md`

## NEXT ACTION

Align the registered PromptVera `deploy` task with the merged repo-controlled `ops/promptvera-deploy.sh` candidate-image flow, verify that task behavior before the next release, and do not run another production deployment until that alignment is VERIFIED.
