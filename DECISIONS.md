# PromptVera Decisions

## 2026-10-03 — Release only completed GitHub tasks

Production deployment happens only after the complete task is implemented on a branch, tested, reviewed through a pull request, merged to `main`, and the GitHub source of truth is coherent. Small intermediate changes are not deployed independently.

Reason: partial deployments create unnecessary production churn, weaken rollback confidence, and make it harder to correlate production state with the repository.

## 2026-10-03 — Candidate-image deployment model

PromptVera production releases build a separate `promptvera-web:candidate` image. The current production image remains pinned while the candidate is built, started, and health-checked. The existing rollback image remains unchanged during candidate validation.

Only after the candidate passes health validation does deployment rotate the immediately previous production image into `promptvera-web:rollback`. Compose consumes the explicit `promptvera-web:latest` tag for no-build recreation.

Reason: this prevents build/recreation from consuming or deleting the only recoverable image before the candidate proves healthy.

## 2026-10-03 — Named-tag rollback swaps

Manual rollback uses named Docker image tags rather than a container's internal image/config digest. Before switching `latest` to `rollback`, the current release is pinned under a temporary swap tag. If rollback health validation succeeds, that prior current release becomes the new rollback image. If validation fails, the prior current release is restored.

Tag replacement is performed by retagging the named reference directly instead of deleting the destination tag first.

Reason: named-tag swaps keep both sides of the rollback transition addressable and avoid an unnecessary untagged failure window.

## 2026-10-03 — Operator deploy profiles must match repo-controlled release logic

A registered production `deploy` task is eligible for use only when its observed behavior matches the versioned release logic in `ops/promptvera-deploy.sh`. If the operator-defined task diverges from the repo script, the task is BLOCKED for future releases until alignment is verified.

Emergency recovery may use explicit, auditable host actions only to restore production health or rollback safety; it must not be treated as a substitute for fixing the standard release path.

Reason: the 2026-10-03 release attempt showed that a repo-correct deployment script does not protect production if the registered operator task executes different build/rotation behavior.


## 2026-10-04 — Homepage owns universal prompt-writing intent

The canonical homepage `/` owns the broad **Prompt Writer / AI Prompt Generator** job: the user has a goal or brief and needs a first structured, model-neutral AI prompt.

Do not create a separate `/prompt-writer` or `/ai-prompt-generator` URL for keyword variants unless future research proves a materially distinct user task and product workflow.

Intent boundaries:
- Homepage: create a new prompt from a goal or brief.
- `/prompt-enhancer`: expand/clarify an existing rough prompt without changing its core intent.
- `/prompt-improver`: diagnose and repair an existing developed prompt.
- Model-specific pages: provider-specific prompt guidance and controls.

The homepage flagship remains deterministic/browser-side unless evidence justifies a different architecture. It must not be marketed as calling an AI model when it does not.

Reason: deep research found `prompt writer` to be the strongest relative homepage opportunity while broad prompt-generation variants share the same user task. Consolidating that intent on `/` avoids cannibalization and gives the homepage a real utility instead of a directory-only experience.
