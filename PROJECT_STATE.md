# PromptVera Project State

Last verified: 2026-10-04

## Objective

Build sustainable US-first organic traffic from the current PromptVera tool set using one canonical intent per URL, verified keyword demand, current SERPs, strong semantic coverage, useful browser-side tools, and a release path that preserves one tested rollback image.

## Source / deploy SHA

- GitHub `main` at the homepage flagship deployment: `3621e26b7832fe717d82561ea1f52a0f403bee4b` (PR #49 squash merge).
- Production state file `/var/lib/promptvera/last-deployed-sha`: **VERIFIED** `3621e26b7832fe717d82561ea1f52a0f403bee4b`.
- P0, P1, P2, and the homepage Prompt Writer / AI Prompt Generator implementation are **DEPLOYED / VERIFIED LIVE**.

## Last completed task

- PR #36 established the canonical sitewide keyword + semantic map in `docs/seo-keyword-semantic-map-2026-10-03.md`.
- PR #37 completed the 12-page P0 existing-URL implementation.
- PR #39 completed the 6-page P1 existing-URL implementation.
- PR #41 completed the P2 freshness/maintenance batch for the homepage, Gemini, Claude, and the Sora 2 legacy resource.
- PR #42 closed the pre-deploy SEO implementation state.
- PR #43 recorded that the stale production worktree's complete local P0 diff was byte-for-byte identical to merged PR #37, with no unique unpublished application change found. Production workspace was then safely aligned from that stale feature branch to clean current `main` without reset/force. The pre-alignment local edits were preserved in Git stash `promptvera-pre-main-sync-2026-10-03`.
- The registered PromptVera deploy and rollback task wrappers were found stale and unsafe relative to the merged repo scripts. Their prior versions were preserved, then both root-owned wrappers were replaced with the reviewed repo-controlled scripts before deployment.
- Exactly one controlled production deploy was executed after all release gates passed.
- The complete current-URL P0/P1/P2 SEO batch is live.
- PR #48 completed the homepage-specific deep keyword/SERP/competitor research and selected `prompt writer` as the flagship phrase with `AI prompt generator` as the commercial co-target. It explicitly rejected creating a separate `/prompt-writer` or `/ai-prompt-generator` URL.
- PR #49 implemented the homepage as a functioning browser-side Prompt Writer / AI Prompt Generator: goal-first input, optional context/audience/constraints/output/tone/example/avoid controls, one structured output, missing-detail suggestions, copy/reset actions, clear Enhancer/Improver boundaries, homepage WebApplication schema, metadata, semantic content, and internal links.
- Exactly one controlled production deployment was executed for PR #49 after GitHub CI and release preflight passed.

## Tests / evidence

### Homepage flagship implementation

- Research artifact: `docs/homepage-flagship-keyword-research-2026-10-04.md`.
- PR #49 verified head before merge: `4b743faf39f1691b25ac6a4c8456b572aeae7a6b`.
- GitHub Actions CI run #60: **PASS**.
- CI shell syntax validation: **PASS**.
- CI TypeScript typecheck: **PASS**.
- CI production build: **PASS**.
- Current first-party prompting guidance was rechecked before merge: OpenAI emphasizes clear/specific instructions, necessary context, tone/style, and iteration; Google Gemini documents clear/specific instructions and iterative prompt refinement; xAI current docs confirm Grok remains an active assistant/product.
- No new indexed URL, paid AI API, auth, DB, background service, or heavy dependency was added.
- `AGENTS.md` is **NOT FOUND** on current GitHub main; no repo-local agent file was available to apply.

### SEO implementation

P2:
- PR #41 verified head: `dc34885e826bdb6762921e8e3183a84155290681`.
- GitHub Actions CI run #52: **PASS**.
- Shell syntax, TypeScript typecheck, production build: **PASS**.

P1:
- PR #39 verified head: `9441c0284662f32eaf716d2fd0a29be249d327ab`.
- GitHub Actions CI run #50: **PASS** for shell syntax, typecheck, and production build.

P0:
- PR #37 verified head: `b91938ea3bf7a33b9b10f8f5f678527735e7da5c`.
- GitHub Actions CI run #48: **PASS** for shell syntax, typecheck, and production build.

No new indexed URL was created by P0/P1/P2.

### Release-path alignment

Actual root-managed workspace registry was inspected and **VERIFIED**:
- deploy task argv: `/usr/local/sbin/promptvera-deploy`
- rollback task argv: `/usr/local/sbin/promptvera-rollback`
- both tasks require a clean worktree and allow protected `main`.

The previously installed root wrappers were **FAILED against the required safety design**:
- old deploy wrapper used `docker compose up --build` and unsafe rollback-tag rotation;
- old rollback wrapper used the older delete/re-tag transition.

Prior wrappers were preserved as:
- `/usr/local/sbin/promptvera-deploy.pre-869ff0b8`
- `/usr/local/sbin/promptvera-rollback.pre-b33caa0c`

After alignment:
- root deploy SHA-256: `869ff0b8538c345e750121fe77d3e5f1edc855611b73ce35b8b00dff0266847c`
- repo `ops/promptvera-deploy.sh` SHA-256: same value — **VERIFIED byte-identical**
- root rollback SHA-256: `b33caa0c16430a7fc7f95760ec29bc9ca1097d29b6f9e951dc12cc8d1bf7adec`
- repo `ops/promptvera-rollback.sh` SHA-256: same value — **VERIFIED byte-identical**
- `bash -n` for both installed wrappers: **PASS**
- production workspace before deploy: clean `main`, `HEAD == origin/main == 09e5b1c...`.

### Production deployment

Registered deploy task action: `60094176abd74e93a18b73ebfb04e62c`
- task source: root-owned workspace registry
- branch: `main`
- return code: **0**
- candidate image build: **PASS**
- Next.js production build inside candidate: **PASS**
- TypeScript stage inside build: **PASS**
- static generation: **33/33 pages PASS**
- container recreate/start: **PASS**
- IndexNow: **HTTP 200, 26 URLs submitted**

Post-deploy:
- registered health task: **PASS**, `state=running health=healthy`
- production workspace: **VERIFIED clean main**, SHA `09e5b1c...`
- running/current image `promptvera-web:latest`: `sha256:d8d8e33dee1b621c6fba5ce83ea7584c76dde926ec998db243ec872f03f8acb3`
- retained rollback image `promptvera-web:rollback`: `sha256:d9989fa5843556022d9f11bda197b24dcfb07db65bc7efdfa89c18c6195fda50`
- running container image equals `latest`: **VERIFIED**
- rollback is distinct from current and is the immediately previous production image: **VERIFIED**
- public `https://promptvera.com/`: **HTTP 200**
- live AI Image page exposes the new P0 metadata/content and utility controls: **VERIFIED**
- live Sora 2 page explicitly identifies itself as a legacy/discontinued-resource workflow: **VERIFIED**
- production state file readback matches deployed Git SHA: **VERIFIED**

## SEO research baseline

- Ubersuggest: authenticated Tier 3.
- PromptVera project tracks US/UK/CA/AU.
- US rank tracking through 2026-10-02: 83 tracked terms, 0 top-100 rankings.
- Ubersuggest domain baseline: DA 2, 15 backlinks, 14 referring domains, estimated US organic traffic/keywords 0 at research time.
- US keyword metrics, current SERP patterns, competitor gaps, canonical intent ownership, cannibalization rules, entities, questions, and internal-link targets are recorded in `docs/seo-keyword-semantic-map-2026-10-03.md`.
- Search Console property `sc-domain:promptvera.com` returned 0 Search Analytics rows for 2026-09-03 through 2026-10-03 before deployment. First-party impressions/clicks/CTR/query ownership therefore remain **UNKNOWN**, not a failure signal.

## Deployment / indexing status

- Public runtime: **VERIFIED running / healthy**.
- Deployed workspace/source SHA: **VERIFIED** `3621e26b7832fe717d82561ea1f52a0f403bee4b`.
- P0/P1/P2 SEO + homepage flagship deployment: **VERIFIED LIVE**.
- Current image `promptvera-web:latest`: `sha256:9d45e6436fcf20d5fe5129d6e93c237bd6815b814fadfdb377616d297b22587c`.
- Immediately previous production image retained as `promptvera-web:rollback`: `sha256:d8d8e33dee1b621c6fba5ce83ea7584c76dde926ec998db243ec872f03f8acb3`.
- Running container image equals current `latest`: **VERIFIED**.
- Homepage flagship deploy action: `9cd4f00284f1455887c7b000ca3744b1` — **VERIFIED return code 0**.
- Candidate build: **PASS**; Next.js production build + TypeScript: **PASS**; static generation: **33/33 PASS**.
- IndexNow submission for the homepage flagship deployment: **VERIFIED HTTP 200 / 26 URLs**.
- Public homepage HTML after deploy: **VERIFIED** new title/meta, canonical, H1 “Free AI Prompt Writer & Prompt Generator”, live prompt-writer form, Prompt Enhancer/Improver intent links, and homepage WebApplication JSON-LD.
- Live sitemap remains **VERIFIED 26 URLs**.
- Live `sitemap.xml`: **VERIFIED** 26 URLs, matching the 26 public page routes in the current app.
- Live `robots.txt`: **VERIFIED** `Allow: /` for general crawlers and declares `https://promptvera.com/sitemap.xml`.
- Ubersuggest latest site audit: **VERIFIED** 26/26 URLs successful (HTTP 200), 0 blocked, 0 broken, 0 redirected, overall score 100, `page_allowed` issue count 0.
- Search Console sitemap record for `https://promptvera.com/sitemap.xml`: **VERIFIED 26 submitted URLs, 0 errors, 0 warnings**. Last submitted: 2026-10-03T13:11:27Z. Last downloaded: 2026-10-03T13:42:25Z. The previous stale 12-URL snapshot is resolved.
- Search Console connector's `indexed` sitemap field is deprecated and currently returns 0; do **not** interpret that as 0 pages indexed.
- Individual Google index status remains **UNKNOWN** because the connected Windsor Search Console integration is read-only and does not expose sitemap resubmission or URL Inspection actions.
- Fresh Search Console Search Analytics pull on 2026-10-04 now returns first performance rows for 2026-10-03: 4 impressions across 4 query/page pairs and 0 clicks. This confirms Google has begun surfacing PromptVera pages in search results. The sample is too small to treat current positions as stable ranking evidence.
- The prior Google Search Console URL Inspection "Temporary processing error" under Discovery → Sitemaps did not correspond to a site-side crawl blocker. On 2026-10-04, Search Console refreshed the sitemap record to 26 submitted URLs with 0 errors and 0 warnings.
- Googlebot-specific live fetch on 2026-10-03 returned the same current 26-URL sitemap as a normal request, HTTP 200, `text/xml`, with current `Last-Modified`; this rules out a known alternate/stale sitemap response to Googlebot.

## Blockers

### SEO measurement

Google Search Console now has first Search Analytics rows. As of the 2026-10-04 fresh-data pull, four query/page pairs from 2026-10-03 have one impression each and zero clicks. This is **PARTIALLY VERIFIED early discovery**, not enough data to evaluate CTR or stable rankings.

The live site is technically crawl/index eligible and Search Console has now recorded the current 26-URL sitemap snapshot. Per-URL URL Inspection remains **BLOCKED in the current connected toolchain** because the available Search Console connector is read-only.

There is no evidence yet supporting a ranking or traffic gain claim.

### Release engineering

The prior deploy-path blocker is **RESOLVED / VERIFIED** for the currently registered task:
- registry binding identified;
- root deploy/rollback wrappers synchronized to reviewed repo scripts;
- hashes match exactly;
- shell syntax passes;
- one real registered deploy completed successfully while preserving the immediately previous production image as rollback.

Any future wrapper change must be reverified before deployment.

## Risks

- Do not create new pages from keyword volume alone or split same-intent variants into thin URLs.
- Do not force grammatically awkward keyword variants into visible copy.
- Keep Drawing/Art intent distinct from AI Image intent.
- Keep Random Theme scoped to creative themes rather than UI/code-theme intent.
- Keep Prompt Enhancer and Prompt Improver functionally and semantically distinct.
- Keep Sora 2 explicitly historical; do not imply current OpenAI product/API availability.
- Model-specific pages require current first-party verification before factual changes.
- Do not claim SEO success from deployment alone; GSC/rank evidence is still pending.
- The homepage canonically owns broad new-prompt creation intent. Do not create a separate `/prompt-writer` or `/ai-prompt-generator` URL unless future SERP/product evidence proves a materially distinct user task.
- Keep homepage “create from a goal” behavior distinct from Prompt Enhancer (“expand an existing rough prompt”) and Prompt Improver (“diagnose/fix a developed prompt”).
- Root production wrappers are operator-managed artifacts outside Git. Their exact hashes must continue to match the intended repo scripts before future releases.

## Work in progress

The homepage flagship Prompt Writer / AI Prompt Generator implementation is complete, merged, deployed, and runtime-verified. Research basis: `docs/homepage-flagship-keyword-research-2026-10-04.md`.

The planned current-URL SEO implementation (P0 + P1 + P2) is also complete, merged, deployed, and runtime-verified.

No new search-intent page is authorized by the current evidence. The next phase is measurement: collect Search Console query/page data and Ubersuggest rank movement for the homepage flagship cluster before another material homepage rewrite.

## Affected files / runtime artifacts

Application work is merged in PRs #37, #39, #41, and #49.

Homepage flagship files:
- `app/page.tsx`
- `components/HomepagePromptWriter.tsx`
- `lib/prompt-engine.ts`
- `app/globals.css`
- `lib/site.ts`
- `README.md`

Runtime alignment:
- `/usr/local/sbin/promptvera-deploy`
- `/usr/local/sbin/promptvera-rollback`

Preserved operator rollback copies:
- `/usr/local/sbin/promptvera-deploy.pre-869ff0b8`
- `/usr/local/sbin/promptvera-rollback.pre-b33caa0c`

State:
- `PROJECT_STATE.md`

## NEXT ACTION

Measure the live homepage flagship cluster before another material rewrite: monitor Search Console for `prompt writer`, `AI prompt generator`, `prompt writer generator`, `prompt creator`, and related query/page impressions, CTR, and average position; compare Ubersuggest rank tracking against the pre-flagship baseline; then optimize only where first-party evidence shows a discovery, position, or CTR gap.
