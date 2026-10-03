# PromptVera Project State

Last verified: 2026-10-03

## Objective

Build sustainable US-first organic traffic from the current PromptVera tool set using one canonical intent per URL, verified keyword demand, current SERPs, strong semantic coverage, and useful browser-side tools while keeping the production release path safe.

## Source / deploy SHA

- GitHub `main`: `efb962e6083efd7c9fcb93a68972126a014eb418` (PR #37 squash merge).
- Deployed application source remains `0f172725109d78e43bd3c444833e7da9dd3fa393` (PR #34 merge).
- The P0 SEO implementation is merged in GitHub but is **not deployed**.
- Production deployment remains blocked until the registered deploy task is verified to match the repo-controlled candidate-image release flow.

## Last completed task

- Sitewide keyword + semantic research was completed in PR #36 and remains canonical in `docs/seo-keyword-semantic-map-2026-10-03.md`.
- PR #37 implemented the first P0 SEO/content batch across all 12 P0 canonical pages without creating new URLs.
- The P0 implementation sharpened intent ownership, natural secondary-term coverage, mixed-intent disambiguation, FAQ/PAA coverage, and contextual internal links.
- AI Image Prompt Generator gained explicit color-palette and avoid controls.
- Suno Prompt Generator gained explicit production-direction and exclusion controls.
- PromptVera remains deterministic/browser-side for these tools; no paid AI API, auth, database, or background infrastructure was added.

## Tests / evidence

### P0 implementation

- PR #37 latest verified head before merge: `b91938ea3bf7a33b9b10f8f5f678527735e7da5c`.
- GitHub Actions CI run #48: **PASS**.
- CI shell syntax validation: **PASS**.
- CI TypeScript typecheck: **PASS**.
- CI production build: **PASS**.
- Changed files in PR #37: 14 total — 12 P0 page files plus `lib/tool-configs.ts` and `lib/prompt-engine.ts`.
- No new indexed URL was created.
- OpenAI prompt-guidance claims were rechecked against current first-party OpenAI Help Center guidance on 2026-10-03.
- Suno v6/model/rights claims were rechecked against current first-party Suno release notes/help guidance on 2026-10-03.
- Direct server-side `npm` validation was BLOCKED because the connector reported the host executable unavailable; this was not treated as a code failure. GitHub Actions CI is the verified build/typecheck evidence.

### SEO research baseline

- Ubersuggest: authenticated Tier 3.
- PromptVera Ubersuggest project: active with US/UK/CA/AU tracking.
- US rank tracking through 2026-10-02: 83 tracked terms, 0 top-100 rankings.
- Ubersuggest domain baseline: DA 2, 15 backlinks, 14 referring domains, estimated US organic traffic/keywords currently 0.
- Current US keyword metrics and Google SERP analysis were completed for all current primary search-intent pages.
- Search Console property `sc-domain:promptvera.com` returned 0 Search Analytics rows for 2026-09-03 through 2026-10-03; first-party query/click/CTR evidence remains UNKNOWN, not a failure signal.
- Canonical research deliverable: `docs/seo-keyword-semantic-map-2026-10-03.md`.

### Production / release evidence

- Current public runtime was previously VERIFIED `running` / `healthy`.
- External homepage HTTP 200 was previously VERIFIED.
- Current and rollback image IDs were previously VERIFIED distinct.
- IndexNow previously returned HTTP 200 for 26 URLs.

## Deployment / indexing status

- Public runtime: last VERIFIED healthy from the prior release task.
- Deployed application SHA: `0f172725109d78e43bd3c444833e7da9dd3fa393`.
- P0 SEO implementation SHA on GitHub main: `efb962e6083efd7c9fcb93a68972126a014eb418`.
- P0 SEO implementation deployment status: **BLOCKED / NOT DEPLOYED**.
- Search Console performance rows: UNKNOWN / not yet available.
- Registered standard deploy task remains BLOCKED until its observed execution behavior is aligned with the versioned `ops/promptvera-deploy.sh`.

## Blockers

### SEO measurement

First-party GSC performance optimization is BLOCKED by lack of Search Analytics rows. Until Google supplies impressions/clicks/query data, prioritization must use validated demand, current SERPs, page utility, and Ubersuggest rank tracking without pretending first-party ranking evidence exists.

### Release engineering

The registered operator-defined `deploy` task must not be used for another production release yet. Its observed behavior previously diverged from the merged `ops/promptvera-deploy.sh` candidate-image flow and lost the previous-image reference during a release attempt.

## Risks

- Do not create new pages from keyword volume alone.
- Do not split keyword variants with the same intent into thin URLs.
- Do not force grammatically awkward variants into visible copy.
- Do not let Drawing/Art intent cannibalize AI Image intent.
- Keep the Random Theme page explicitly scoped to creative themes rather than UI/code-theme intent.
- Model-specific pages require current first-party verification before factual changes.
- GitHub main is newer than production; do not describe PR #37 changes as live until a controlled production deployment is VERIFIED.
- Do not use the registered production deploy task until its operator profile is aligned with the repo-controlled release logic.

## Work in progress

No P0 code work remains. The merged P0 implementation is waiting behind the release-engineering blocker and has not been deployed.

The next SEO implementation phase is the P1 existing-page batch:
- Prompt Improver
- Grok Prompt Generator
- Nano Banana Prompt Generator
- Journal Prompt Generator
- OC Prompt Generator
- Short Story Prompt Generator

No new URL should be created as part of that batch unless fresh research proves a distinct intent and material product value.

## Affected files

PR #37:
- `app/book-title-generator/page.tsx`
- `app/drawing-prompt-generator/page.tsx`
- `app/random-theme-generator/page.tsx`
- `app/chatgpt-prompt-generator/page.tsx`
- `app/random-prompt-generator/page.tsx`
- `app/story-plot-generator/page.tsx`
- `app/prompt-enhancer/page.tsx`
- `app/ai-image-prompt-generator/page.tsx`
- `app/suno-prompt-generator/page.tsx`
- `app/poetry-prompt-generator/page.tsx`
- `app/fanfic-prompt-generator/page.tsx`
- `app/horror-story-plot-generator/page.tsx`
- `lib/tool-configs.ts`
- `lib/prompt-engine.ts`

State:
- `PROJECT_STATE.md`

## NEXT ACTION

Begin the P1 existing-page SEO/content implementation from `docs/seo-keyword-semantic-map-2026-10-03.md` on a non-protected branch, reverify current model-specific first-party guidance where applicable, run GitHub Actions typecheck/build, and merge through PR. Do not deploy P0 or P1 until the registered deploy task is VERIFIED safe and aligned with the repo-controlled candidate-image flow.
