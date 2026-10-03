# PromptVera Project State

Last verified: 2026-10-03

## Objective

Build sustainable US-first organic traffic from the current PromptVera tool set using one canonical intent per URL, verified keyword demand, current SERPs, strong semantic coverage, and useful browser-side tools while keeping the production release path safe.

## Source / deploy SHA

- Completed application/SEO implementation source: `5729899e68274993c32abe27278ac8cbc652edc2` (PR #41 squash merge).
- This state-only follow-up may make GitHub `main` newer without changing the public application code.
- Deployed application source remains `0f172725109d78e43bd3c444833e7da9dd3fa393` (PR #34 merge).
- P0, P1, and P2 SEO implementations are merged in GitHub but are **not deployed**.

## Last completed task

- PR #36 established the canonical sitewide keyword + semantic map in `docs/seo-keyword-semantic-map-2026-10-03.md`.
- PR #37 completed the 12-page P0 existing-URL implementation.
- PR #39 completed the 6-page P1 existing-URL implementation.
- PR #41 completed the P2 freshness/maintenance batch for the homepage, Gemini, Claude, and the Sora 2 legacy resource.
- No new indexed URL was created in P0, P1, or P2.
- Prompt Improver now has explicit `Problems to fix` and `What must be preserved?` controls.
- AI Image, Suno, Nano Banana, Claude, and the legacy Sora shot planner gained utility-level controls that match their validated intents rather than copy-only keyword expansion.
- Homepage remains a broad routing hub and now labels the Sora tool as a legacy study resource instead of implying a current active video product.
- PromptVera remains deterministic/browser-side for these tools; no paid AI API, auth, database, or background infrastructure was added.

## Tests / evidence

### P2 implementation

- PR #41 verified head before merge: `dc34885e826bdb6762921e8e3183a84155290681`.
- GitHub Actions CI run #52: **PASS**.
- Shell syntax validation: **PASS**.
- TypeScript typecheck: **PASS**.
- Production build: **PASS**.
- PR #41 changed 7 files: homepage, Gemini page, Claude page/component, Sora page, `lib/tool-configs.ts`, and `lib/prompt-engine.ts`.
- Google Gemini prompt-design guidance was rechecked on 2026-10-03 for direct instructions, consistent structure, multimodal references, verbosity, and long-context ordering.
- Anthropic Claude prompting best practices were rechecked on 2026-10-03 for clear instructions, structured examples, XML organization, and long-context ordering.
- OpenAI Sora discontinuation documentation was rechecked on 2026-10-03: web/app discontinued 2026-04-26; API discontinued 2026-09-24.
- OpenAI's Sora 2 prompting guide remains explicitly archived/outdated and is used only as a historical shot-planning reference.

### P1 implementation

- PR #39 verified head before merge: `9441c0284662f32eaf716d2fd0a29be249d327ab`.
- GitHub Actions CI run #50: **PASS** for shell syntax, typecheck, and production build.
- PR #39 changed 9 files covering all six P1 pages plus shared prompt UI/engine/config.

### P0 implementation

- PR #37 verified head before merge: `b91938ea3bf7a33b9b10f8f5f678527735e7da5c`.
- GitHub Actions CI run #48: **PASS** for shell syntax, typecheck, and production build.
- PR #37 changed 14 files covering all 12 P0 pages plus shared prompt config/engine.

### SEO research baseline

- Ubersuggest: authenticated Tier 3.
- PromptVera Ubersuggest project: active with US/UK/CA/AU tracking.
- US rank tracking through 2026-10-02: 83 tracked terms, 0 top-100 rankings.
- Ubersuggest domain baseline: DA 2, 15 backlinks, 14 referring domains, estimated US organic traffic/keywords currently 0.
- Current US keyword metrics and Google SERP analysis were completed for all current primary search-intent pages.
- Search Console property `sc-domain:promptvera.com` returned 0 Search Analytics rows for 2026-09-03 through 2026-10-03; first-party query/click/CTR evidence remains **UNKNOWN**, not a failure signal.

### Production / release evidence

- Docker runtime health check on 2026-10-03: **VERIFIED healthy** — 22/22 containers running, no unhealthy, stopped, or unstable containers.
- PromptVera registered `health` task action `429ecb1f88ee44bc9780048ed8d55cc4`: **PASS**, stdout `state=running health=healthy`.
- The PromptVera production workspace reported branch `seo/p0-semantic-implementation` during that health task, so it is not currently aligned to the merged application source.
- Registered workspace tasks currently expose `deploy`, `health`, and `rollback`.
- The registered `deploy` task description says it deploys clean main with health validation and retains one rollback image, but description text is not execution proof. A previous deploy execution diverged from the repo-controlled candidate-image flow, so deployment safety remains **BLOCKED** until behavior is verified.

## Deployment / indexing status

- Public runtime: **VERIFIED running / healthy** on 2026-10-03.
- Deployed application SHA: `0f172725109d78e43bd3c444833e7da9dd3fa393`.
- Completed merged SEO application SHA: `5729899e68274993c32abe27278ac8cbc652edc2`.
- P0/P1/P2 deployment status: **BLOCKED / NOT DEPLOYED**.
- Search Console performance rows: **UNKNOWN / not yet available**.
- IndexNow previously returned HTTP 200 for 26 URLs; the newly merged content has not been submitted because it is not deployed.

## Blockers

### SEO measurement

First-party GSC performance optimization is BLOCKED by lack of Search Analytics rows. Until Google supplies impressions/clicks/query data, prioritization must use validated demand, current SERPs, page utility, and Ubersuggest rank tracking without pretending first-party ranking evidence exists.

### Release engineering

Production workspace alignment and deploy-task execution safety are both BLOCKED:

- workspace is currently on `seo/p0-semantic-implementation`, not merged `main`;
- previous protected-main checkout/sync attempts through the connector were blocked;
- the registered deploy task's description now sounds correct, but its prior observed execution did not match the versioned `ops/promptvera-deploy.sh` candidate-image flow;
- do not run another production deployment until both workspace/main alignment and deploy behavior are VERIFIED.

## Risks

- Do not create new pages from keyword volume alone or split same-intent variants into thin URLs.
- Do not force grammatically awkward keyword variants into visible copy.
- Keep Drawing/Art intent distinct from AI Image intent.
- Keep Random Theme scoped to creative themes rather than UI/code-theme intent.
- Keep Prompt Enhancer and Prompt Improver functionally and semantically distinct.
- Keep Sora 2 explicitly historical; do not imply current OpenAI product/API availability.
- Model-specific pages require current first-party verification before factual changes.
- GitHub is materially newer than production; do not describe P0/P1/P2 changes as live until a controlled production deployment is VERIFIED.
- Do not use the registered production deploy task based only on its current description.

## Work in progress

The planned current-URL SEO implementation (P0 + P1 + P2) is complete in GitHub.

No additional content batch should be started before the release path is made safe, because the current public site still serves the pre-SEO application source.

## Affected files

P2 PR #41:
- `app/page.tsx`
- `app/gemini-prompt-generator/page.tsx`
- `app/claude-prompt-generator/page.tsx`
- `app/sora-2-prompt-generator/page.tsx`
- `components/ClaudePromptGenerator.tsx`
- `lib/tool-configs.ts`
- `lib/prompt-engine.ts`

State:
- `PROJECT_STATE.md`

## NEXT ACTION

Align the production workspace to clean merged `main` using an operator-supported protected-branch method, verify that the registered `deploy` task actually executes the repo-controlled candidate-image release behavior and preserves the existing rollback image until candidate health passes, then perform exactly one controlled deployment of the completed P0/P1/P2 application batch. After deployment, verify deployed SHA, container health, current/rollback image IDs, live HTTP/content, IndexNow submission, and Search Console/indexing status before starting any new SEO page work.
