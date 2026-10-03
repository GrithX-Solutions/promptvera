# PromptVera Content Re-Audit — 2026-10-03

## Scope

Reviewed the live user-facing content architecture and page source for:
- homepage,
- AI prompt tools,
- model-specific prompt tools,
- image/video/music prompt tools,
- creative-writing and idea generators,
- About,
- Contact,
- Privacy Policy,
- Terms of Use.

Competitive benchmarking used current Ubersuggest US SERPs for representative primary queries and current public competitor/first-party documentation where applicable.

## Status definitions

- **RED — rewrite/expand:** material semantic, competitive, or information-gain gap.
- **AMBER — strong base, line-edit/coverage pass required:** structure and intent are good, but the page still needs a final hard-rule pass for active voice, native English, repetition, and competitor parity.
- **GREEN — non-SEO utility/legal page is clear:** maintain factual and editorial accuracy; competitor benchmarking is not required.

No page should be considered permanently done. Model-specific pages require rechecking when first-party guidance changes.

## P0 remediation — RED

| Page | Main gap | Required improvement |
| --- | --- | --- |
| / | Targets "AI prompt generator" broadly but does not yet explain the core prompt-generator job as directly or completely as the strongest results | Add answer-first definition, selection guidance, concise examples, use cases, and FAQ without turning the homepage into a long article |
| /prompt-enhancer | Clear but limited information gain | Add before/after example, prompt anatomy, common failure patterns, when enhancement is unnecessary, and stronger distinction from improver |
| /prompt-improver | Useful checklist but overlaps conceptually with enhancer | Add diagnostic workflow, before/after example, conflict/ambiguity cleanup, preservation rules, and sharper intent separation |
| /ai-image-prompt-generator | Thin compared with current leading image-prompt pages | Add prompt anatomy, concrete example, use cases, common mistakes, iteration guidance, model-agnostic caveats, and deeper FAQs |
| /sora-2-prompt-generator | Current copy is materially shallower than current Sora-focused competitors and first-party video prompting guidance | Add shot anatomy, action beats, camera/framing, lighting/palette, audio/dialogue, iteration, reference/continuity guidance, API-vs-prompt caveat where relevant, examples, and stronger FAQs |
| /suno-prompt-generator | Tool and copy are much shallower than current specialist Suno builders; current Suno model/workflow guidance has evolved | Add current workflow context, style/genre vs mood, instrumentation, vocals/lyrics, structure, production, controlled iteration, model/version caveats, examples, rights caveat, and stronger FAQs |
| /nano-banana-prompt-generator | Page presents a generic editing workflow while current Nano Banana documentation covers generation, editing, multi-input, and iterative visual workflows | Expand generation vs editing guidance, preservation, reference inputs, iterative edits, text/layout use cases, examples, current-model caveats, and first-party source link |

## P1 remediation — AMBER

These pages have a strong structural and semantic base. They need a final hard-rule line edit and competitor-parity check before the sitewide content gate is considered complete.

| Page | Current strengths | Remaining gate |
| --- | --- | --- |
| /chatgpt-prompt-generator | Strong answer-first structure, current OpenAI source, task/context/source/output guidance | Active-voice/native-English line edit; add one compact worked example if it improves SERP parity |
| /gemini-prompt-generator | Strong multimodal, parameter, verbosity, long-context coverage with first-party source | Line edit; verify wording against current Gemini docs |
| /claude-prompt-generator | Clear task/context/examples/XML differentiation and first-party source | Line edit; verify current Anthropic guidance |
| /grok-prompt-generator | Strong source-of-truth, evidence, and action-boundary differentiation | Line edit; recheck current xAI guidance |
| /drawing-prompt-generator | Strong use cases, category guidance, comparison, practice ideas | Line edit; competitor parity check |
| /random-prompt-generator | Strong intent separation, category guidance, use cases, practice ideas | Add/select examples if needed to match current SERP information gain; line edit |
| /random-theme-generator | Clear intent separation and multiple use cases | Line edit; ensure examples remain concrete and non-repetitive |
| /journal-prompt-generator | Good user guidance, category/depth explanation, safety boundary | Line edit; competitor parity check |
| /poetry-prompt-generator | Strong craft semantics: image, tension, form, perspective | Line edit; competitor parity check |
| /fanfic-prompt-generator | Strong fandom/canon/trope/pairing differentiation | Line edit; maintain general-audience boundary |
| /oc-prompt-generator | Strong character-building semantics and artist/writer use cases | Line edit; competitor parity check |
| /short-story-prompt-generator | Strong short-fiction mechanics and scope guidance | Line edit; competitor parity check |
| /story-plot-generator | Strong narrative-spine coverage and clear comparison pages | Line edit; consider one compact generated-plot example |
| /horror-story-plot-generator | Strong threat-rule/escalation/reveal/cost semantics | Line edit; competitor parity check |
| /book-title-generator | Strong fiction/nonfiction split, keyword use, evaluation checklist | Line edit; consider concrete title-pattern examples without implying availability |

## Utility/entity pages

| Page | Status | Notes |
| --- | --- | --- |
| /about | AMBER | Good entity clarity. Update the content-standard section to point to the new hard gate and remove avoidable passive constructions. |
| /contact | GREEN/AMBER | Clear and useful. Final line edit only. |
| /privacy-policy | GREEN with legal exception | Clear current disclosure. Maintain accuracy as analytics/ads change. Passive voice allowed only where it improves legal precision. |
| /terms | GREEN with legal exception | Clear current terms. Maintain legal precision; do not SEO-expand. |

## Competitive findings

### General/random prompt tools

Current ranking competitors do more than define the tool. Strong pages combine:
- concrete example outputs,
- use cases by blocker or workflow,
- explanation of what makes a useful prompt,
- multiple related tools,
- deeper FAQs,
- and clear differentiation.

PromptVera's stronger creative pages already follow much of this pattern. The homepage and the two general prompt-improvement pages need more information gain.

### AI image prompts

Current ranking pages commonly include:
- example input/output prompts,
- how-to steps,
- why/when to use the tool,
- user segments/use cases,
- and deeper FAQs.

PromptVera currently explains subject, composition, camera, and lighting well, but the page needs a worked example, iteration guidance, practical use cases, and broader troubleshooting.

### Sora 2

Current first-party prompting guidance and leading Sora pages cover:
- shot structure,
- subject/action/environment,
- framing and camera movement,
- lighting/palette,
- temporal progression,
- concise action beats,
- dialogue/audio,
- continuity/reference control,
- iteration,
- and technical settings that are separate from prose prompts.

PromptVera covers scene, camera, movement, lighting, audio, and continuity, but not with enough depth to beat the strongest current pages.

### Suno

Current specialist competitors provide much deeper workflow support around:
- genre/style,
- tempo/rhythm,
- instrumentation,
- vocals/lyrics,
- structure/arrangement,
- production,
- prompt revision,
- presets/history/export,
- model/version caveats,
- and privacy/rights questions.

PromptVera does not need to copy feature bloat, but its content should explain the important musical decisions and iteration process more completely.

### Nano Banana

Current Google documentation describes Nano Banana as native Gemini image-generation/editing capability with conversational and multimodal workflows. PromptVera's page is currently too narrowly framed around preservation-style editing and should explain generation, editing, references, iterative changes, and when preservation constraints matter.

## Editorial observations

Across the site:
- The tone is generally professional and natural.
- Headings are usually descriptive and skimmable.
- Most search-intent pages contain useful comparison sections and FAQs.
- Repetition appears around recurring claims such as "free," "no account," "browser-side," and "does not use a paid AI API." These facts are important, but the wording should vary naturally and appear only where useful.
- Avoidable passive constructions remain, especially phrases such as "is designed to," "is built around," "is intended to," and similar template language.
- Several pages use accurate but slightly template-like sentence rhythms. The line-edit phase should make the site sound written page-by-page rather than generated from one editorial mold.

## Remediation order

1. Homepage
2. Prompt Enhancer
3. Prompt Improver
4. AI Image Prompt Generator
5. Sora 2 Prompt Generator
6. Suno Prompt Generator
7. Nano Banana Prompt Generator
8. Model-specific prompt pages
9. Creative/writing pages
10. About/Contact
11. Legal copy accuracy check

This order prioritizes the pages with the largest combination of traffic opportunity, AI-discovery relevance, and competitive content gap.
