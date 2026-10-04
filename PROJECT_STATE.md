# PromptVera Project State

Last verified: 2026-10-03

## Objective

Build sustainable US-first organic traffic from the current PromptVera tool set using one canonical intent per URL, verified keyword demand, current SERPs, strong semantic coverage, useful browser-side tools, and a release path that preserves one tested rollback image.

## Source / deploy SHA

- GitHub `main` at deployment: `09e5b1c01df4d116cd3b68cdc87b4557df98489c`.
- Completed application/SEO implementation source: `5729899e68274993c32abe27278ac8cbc652edc2` (PR #41); later commits through `09e5b1c...` are project-state documentation.
- Production state file `/var/lib/promptvera/last-deployed-sha`: **VERIFIED** `09e5b1c01df4d116cd3b68cdc87b4557df98489c`.
- P0, P1, and P2 SEO implementations are now **DEPLOYED / VERIFIED LIVE**.

## Last completed task

- PR #36 established the canonical sitewide keyword + semantic map in `docs/seo-keyword-semantic-map-2026-10-03.md`.
- PR #37 completed the 12-page P0 existing-URL implementation.
- PR #39 completed the 6-page P1 existing-URL implementation.
- PR #41 completed the P2 freshness/maintenance batch for the homepage, Gemini, Claude, and the Sora 2 legacy resource.
- PR #42 closed the pre-deploy SEO implementation state.
- PR #43 recorded that the stale production worktree's complete local P0 diff was byte-for-byte identical to merged PR #37, with no unique unpublished application change found. Production workspace was then safely aligned from that stale feature branch to clean current `main` without reset/force. The pre-alignment local edits were preserved in Git stash `promptvera-pre-main-sync-2026-10-03`.
- The registered PromptVera deploy and rollback task wrappers were found stale and unsafe relative to the merged repo scripts. Their prior versions were preserved, then both root-owned wrappers were replaced with the reviewed repo-controlled scripts before deployment.
- Exactly one controlled production deploy was executed after all release gates passed.
- The complete current-URL P0/P1/P2 SEO batch is now live.

## Tests / evidence

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
- Deployed workspace/source SHA: **VERIFIED** `09e5b1c01df4d116cd3b68cdc87b4557df98489c`.
- P0/P1/P2 SEO deployment: **VERIFIED LIVE**.
- One immediately previous production image is retained under `promptvera-web:rollback`: **VERIFIED**.
- IndexNow submission for the completed deployment: **VERIFIED HTTP 200 / 26 URLs**.
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
- Root production wrappers are operator-managed artifacts outside Git. Their exact hashes must continue to match the intended repo scripts before future releases.

## Work in progress

The planned current-URL SEO implementation (P0 + P1 + P2) is complete, merged, deployed, and runtime-verified.

No new search-intent page is authorized by the current evidence. The next phase is measurement and evidence collection rather than immediate page expansion.

## Affected files / runtime artifacts

Application work is already merged in PRs #37, #39, and #41.

Runtime alignment:
- `/usr/local/sbin/promptvera-deploy`
- `/usr/local/sbin/promptvera-rollback`

Preserved operator rollback copies:
- `/usr/local/sbin/promptvera-deploy.pre-869ff0b8`
- `/usr/local/sbin/promptvera-rollback.pre-b33caa0c`

State:
- `PROJECT_STATE.md`

## NEXT ACTION

Continue measurement rather than changing pages immediately: recheck Search Analytics and Ubersuggest rank tracking against the 2026-10-02 baseline after more data accumulates, then prioritize pages with sustained impressions but weak CTR/position or no discovery. Use an account surface with URL Inspection only if page-level indexing diagnosis becomes necessary.
