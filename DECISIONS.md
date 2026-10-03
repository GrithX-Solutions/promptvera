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
