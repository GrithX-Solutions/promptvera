# PromptVera Project State

Last verified: 2026-10-03

## Objective

Build sustainable US-first organic traffic from the current PromptVera tool set using one canonical intent per URL, verified keyword demand, current SERPs, strong semantic coverage, and useful browser-side tools while keeping the production release path safe.

## Source / deploy SHA

- GitHub `main` before the current SEO research branch: `9b1858471809f53181d37dc8e5bb96f9e5fabec3`.
- Deployed application source remains `0f172725109d78e43bd3c444833e7da9dd3fa393` (PR #34 merge).
- The current SEO keyword/semantic mapping task is documentation/research only and must not trigger a production deployment.

## Last completed task

- Production release recovery/state documentation merged in PR #35.
- Production remains healthy with a distinct tested rollback image.
- Sitewide content-quality remediation from PR #30 remains the current public content surface.
- A fresh sitewide keyword + semantic research pass has now established canonical intent ownership, current US demand metrics, SERP patterns, competitor gaps, and implementation priorities for the existing search-intent pages.

## Tests / evidence

Production/release evidence:
- Current public runtime was VERIFIED `running` / `healthy` after the release recovery.
- External homepage HTTP 200 was VERIFIED.
- Current and rollback image IDs were VERIFIED distinct.
- IndexNow previously returned HTTP 200 for 26 URLs.

SEO research evidence:
- Ubersuggest: authenticated Tier 3.
- PromptVera Ubersuggest project: active with US/UK/CA/AU tracking.
- US rank tracking through 2026-10-02: 83 tracked terms, 0 top-100 rankings.
- Ubersuggest domain baseline: DA 2, 15 backlinks, 14 referring domains, estimated US organic traffic/keywords currently 0.
- Current US keyword metrics and Google SERP analysis completed for all current primary search-intent pages.
- Search Console property `sc-domain:promptvera.com` returned 0 Search Analytics rows for 2026-09-03 through 2026-10-03; first-party query/click/CTR evidence is therefore UNKNOWN, not treated as failure.
- Representative current competitors were reviewed for model-specific prompts, Sora, Suno, creative randomizers, journal prompts, and book titles.
- Canonical research deliverable: `docs/seo-keyword-semantic-map-2026-10-03.md`.

## Deployment / indexing status

- Public runtime: VERIFIED healthy from the prior release task.
- Deployed application SHA: `0f172725109d78e43bd3c444833e7da9dd3fa393`.
- Current SEO research task: documentation only; no deploy required.
- Search Console performance rows: UNKNOWN / not yet available.
- Registered standard deploy task remains BLOCKED for future releases until its execution behavior is aligned with the repo-controlled release script.

## Blockers

### SEO

No blocker prevents the research/map task from completing.

First-party GSC performance optimization is BLOCKED by lack of Search Analytics rows. Until Google supplies impressions/clicks/query data, prioritization must use validated demand, live SERPs, page utility, and Ubersuggest rank tracking without pretending GSC data exists.

### Release engineering

The registered operator-defined `deploy` task must not be used for another production release yet. Its observed behavior previously diverged from the merged `ops/promptvera-deploy.sh` candidate-image flow.

## Risks

- Do not create new pages from keyword volume alone.
- Do not split keyword variants with the same intent into thin URLs.
- Do not force grammatically awkward variants into visible copy.
- Do not use generic high-volume terms whose SERP intent is mixed without qualification.
- Model-specific pages require current first-party verification before factual changes.
- A future SEO implementation must be completed, tested, reviewed, and merged as one GitHub task before any production deployment.

## Work in progress

The research phase is complete for the current URL set. The next work is an implementation pass beginning with the highest-priority existing pages from the canonical keyword/semantic map, without creating new URLs.

## Affected files

- `docs/seo-keyword-semantic-map-2026-10-03.md`
- `PROJECT_STATE.md`

## NEXT ACTION

Implement the first P0 SEO/content optimization batch from `docs/seo-keyword-semantic-map-2026-10-03.md` on a non-protected branch, starting with the highest-opportunity existing URLs, run content/semantic/cannibalization checks plus TypeScript/build CI, merge through PR, and do not deploy until the complete implementation batch is merged and the registered deploy task is safe.
