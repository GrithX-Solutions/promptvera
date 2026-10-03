# PromptVera Project State

Last verified: 2026-10-03

## Objective

Build sustainable US-first organic traffic from the current PromptVera tool set using one canonical intent per URL, verified keyword demand, current SERPs, strong semantic coverage, and useful browser-side tools while keeping the production release path safe.

## Source / deploy SHA

- GitHub `main`: `16a01a2fd9eb099500794f3f66a2a781f3c2fb90` (PR #39 squash merge).
- Deployed application source remains `0f172725109d78e43bd3c444833e7da9dd3fa393` (PR #34 merge).
- P0 and P1 SEO implementations are merged in GitHub but are **not deployed**.
- Production deployment remains BLOCKED until the registered deploy task is VERIFIED to match the repo-controlled candidate-image release flow.

## Last completed task

- PR #36 established the canonical sitewide keyword + semantic map in `docs/seo-keyword-semantic-map-2026-10-03.md`.
- PR #37 completed the 12-page P0 existing-URL implementation.
- PR #39 completed the 6-page P1 existing-URL implementation.
- No new indexed URL was created in either implementation batch.
- Prompt Improver now has explicit `Problems to fix` and `What must be preserved?` controls, giving it a functional workflow distinct from Prompt Enhancer.
- Nano Banana now has explicit reference-image-role and text/layout controls that match current Gemini image workflows.
- Grok, Journal, OC, and Short Story pages gained targeted semantic coverage and clearer internal workflow routing without keyword-stuffed rewrites.
- PromptVera remains deterministic/browser-side for these tools; no paid AI API, auth, database, or background infrastructure was added.

## Tests / evidence

### P1 implementation

- PR #39 verified head before merge: `9441c0284662f32eaf716d2fd0a29be249d327ab`.
- GitHub Actions CI run #50: **PASS**.
- Shell syntax validation: **PASS**.
- TypeScript typecheck: **PASS**.
- Production build: **PASS**.
- PR #39 changed 9 files: the 6 P1 page files plus `components/PromptEnhancer.tsx`, `lib/prompt-engine.ts`, and `lib/tool-configs.ts`.
- Current Google Gemini image-generation documentation was rechecked for Nano Banana family naming, Nano Banana 2, multimodal reference inputs, conversational editing, and text rendering.
- Current xAI documentation was rechecked for Grok 4.7 and Grok Bot guidance on result-first prompting, source of truth, approval boundaries, and reviewable evidence.

### P0 implementation

- PR #37 verified head before merge: `b91938ea3bf7a33b9b10f8f5f678527735e7da5c`.
- GitHub Actions CI run #48: **PASS** for shell syntax, typecheck, and production build.
- PR #37 changed 14 files: 12 P0 pages plus shared prompt config/engine files.
- OpenAI prompting and Suno model/rights claims were rechecked against first-party sources before merge.

### SEO research baseline

- Ubersuggest: authenticated Tier 3.
- PromptVera Ubersuggest project: active with US/UK/CA/AU tracking.
- US rank tracking through 2026-10-02: 83 tracked terms, 0 top-100 rankings.
- Ubersuggest domain baseline: DA 2, 15 backlinks, 14 referring domains, estimated US organic traffic/keywords currently 0.
- Current US keyword metrics and Google SERP analysis were completed for all current primary search-intent pages.
- Search Console property `sc-domain:promptvera.com` returned 0 Search Analytics rows for 2026-09-03 through 2026-10-03; first-party query/click/CTR evidence remains **UNKNOWN**, not a failure signal.

### Production / release evidence

- Current public runtime was previously VERIFIED `running` / `healthy`.
- External homepage HTTP 200 was previously VERIFIED.
- Current and rollback image IDs were previously VERIFIED distinct.
- IndexNow previously returned HTTP 200 for 26 URLs.

## Deployment / indexing status

- Public runtime: last VERIFIED healthy from the prior release task.
- Deployed application SHA: `0f172725109d78e43bd3c444833e7da9dd3fa393`.
- Current merged SEO implementation SHA: `16a01a2fd9eb099500794f3f66a2a781f3c2fb90`.
- P0/P1 deployment status: **BLOCKED / NOT DEPLOYED**.
- Search Console performance rows: **UNKNOWN / not yet available**.
- Registered standard deploy task remains BLOCKED until its observed execution behavior is aligned with versioned `ops/promptvera-deploy.sh`.

## Blockers

### SEO measurement

First-party GSC performance optimization is BLOCKED by lack of Search Analytics rows. Until Google supplies impressions/clicks/query data, prioritization must use validated demand, current SERPs, page utility, and Ubersuggest rank tracking without pretending first-party ranking evidence exists.

### Release engineering

The registered operator-defined `deploy` task must not be used for another production release yet. Its observed behavior previously diverged from the merged candidate-image flow and lost the previous-image reference during a release attempt.

## Risks

- Do not create new pages from keyword volume alone or split same-intent variants into thin URLs.
- Do not force grammatically awkward keyword variants into visible copy.
- Keep Drawing/Art intent distinct from AI Image intent.
- Keep Random Theme scoped to creative themes rather than UI/code-theme intent.
- Keep Prompt Enhancer and Prompt Improver functionally and semantically distinct.
- Model-specific pages require current first-party verification before factual changes.
- GitHub main is newer than production; do not describe PR #37 or PR #39 changes as live until a controlled production deployment is VERIFIED.
- Do not use the registered production deploy task until its operator profile is aligned with repo-controlled release logic.

## Work in progress

P0 and P1 implementation work is complete in GitHub. The remaining planned current-URL SEO implementation is the P2 freshness/maintenance batch:
- homepage / broad AI Prompt Generator intent
- Gemini Prompt Generator
- Claude Prompt Generator
- Sora 2 Prompt Generator

P2 work must preserve the homepage as a routing hub, avoid over-optimizing broad difficult head terms, and reverify current first-party model/product facts before edits.

## Affected files

P1 PR #39:
- `app/prompt-improver/page.tsx`
- `app/grok-prompt-generator/page.tsx`
- `app/nano-banana-prompt-generator/page.tsx`
- `app/journal-prompt-generator/page.tsx`
- `app/oc-prompt-generator/page.tsx`
- `app/short-story-prompt-generator/page.tsx`
- `components/PromptEnhancer.tsx`
- `lib/prompt-engine.ts`
- `lib/tool-configs.ts`

State:
- `PROJECT_STATE.md`

## NEXT ACTION

Implement the P2 freshness/maintenance batch from `docs/seo-keyword-semantic-map-2026-10-03.md` on a non-protected branch. Reverify current OpenAI/Google/Anthropic/Sora first-party guidance as applicable, preserve canonical intent separation, run GitHub Actions typecheck/build, and merge through PR. Do not deploy until the registered deploy task is VERIFIED safe and aligned with the repo-controlled candidate-image flow.
