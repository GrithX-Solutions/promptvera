# PromptVera Content Quality Gate

_Last updated: 2026-10-03_

This standard is a release gate for every user-facing PromptVera page. A page is not content-complete until it passes every applicable rule below.

## Hard rules

### 1. Semantic optimization

Every search-intent page must satisfy the full topic, not just repeat the primary keyword.

Required:
- Match one clear primary user intent.
- Use the primary topic naturally in the H1, introduction, and relevant subheadings where it improves clarity.
- Cover the entities, concepts, decisions, use cases, constraints, and questions a user needs to complete the task.
- Include natural synonyms and closely related terminology only where they fit the meaning.
- Answer important questions directly before adding explanation.
- Use internal links only when they help the user move to a genuinely related next task.
- Link to first-party documentation when a page gives model-specific guidance that can change over time.
- Do not create thin pages for keyword variants that share the same intent.
- Do not stuff keywords, repeat definitions, or add filler to reach a word count.

Semantic coverage is judged against:
1. current user intent,
2. current first-party product/documentation guidance where applicable,
3. the useful topic coverage found across the leading organic competitors.

### 2. Skimmability

A user must be able to understand the page structure without reading every paragraph.

Required:
- One clear H1.
- Descriptive H2s that map to distinct user questions or decisions.
- H3s only when they clarify a larger H2 section.
- Short paragraphs; split dense blocks before they become visually tiring.
- Lists for steps, checks, options, examples, or comparisons when a list is easier to scan than prose.
- Place the tool or main action near the top of a tool page.
- Put the direct answer near the start of explanatory sections.
- Avoid repeated section patterns that make every page feel templated.

### 3. Better than the relevant top competitors

Before a search-intent page is approved, compare it with the current top organic results for its primary query.

The page must:
- Match the useful information the strongest competitors provide when that information serves the same intent.
- Add genuine information gain instead of paraphrasing competitor copy.
- Explain PromptVera's distinct workflow or decision model.
- Include examples, use cases, caveats, comparisons, or practical guidance when competitors use them effectively and they help the user.
- Remove competitor topics that are irrelevant to PromptVera's tool or would mislead the user.
- Never copy competitor wording, structure, proprietary data, examples, or claims.

"Better" means more useful, clearer, more accurate, easier to act on, and more complete for the target intent. It does not mean longer.

### 4. Easy to read

PromptVera targets general web users, creators, marketers, developers, and AI-tool users. Copy must be understandable on the first read.

Required:
- Prefer familiar words over jargon when both are accurate.
- Explain necessary technical terms in plain language.
- Keep sentences focused on one main idea.
- Avoid inflated language, vague superlatives, and unnecessary modifiers.
- Avoid long introductions before the user gets the answer.
- Prefer concrete examples over abstract claims.
- Do not sacrifice technical accuracy for simplicity.

Editorial target:
- Native-quality, neutral US English suitable for a global audience.
- Prefer concise sentences and paragraphs.
- Break up any sentence that becomes difficult to parse in one read.

### 5. Native-language quality

All English copy must read as if written originally by a fluent native English editor.

Required:
- Use natural English word order and collocations.
- Avoid translation-like phrasing.
- Keep terminology consistent across the site.
- Use US English spelling unless a quoted product term requires otherwise.
- Preserve official product/model capitalization.
- Do not use awkward SEO phrases merely because they match a keyword exactly.

A keyword may be grammatically awkward. The page should express the intent naturally rather than forcing the exact phrase into unnatural prose.

### 6. Zero known grammar or punctuation errors

No page ships with a known grammar, spelling, capitalization, agreement, or punctuation error.

Required:
- Proofread headings, body copy, metadata, UI labels, FAQs, examples, and callouts.
- Use consistent apostrophes, quotation marks, hyphenation, capitalization, and list punctuation.
- Check subject-verb agreement and pronoun references.
- Remove fragments unless they are deliberate UI labels.
- Fix spacing and punctuation around inline links and JSX text.

### 7. Active voice by default

Write sentences in active voice unless passive voice is materially clearer, legally necessary, or the actor is genuinely unknown or irrelevant.

Required:
- Prefer "PromptVera builds the prompt in your browser" over "The prompt is built in your browser."
- Prefer "You can edit the result" over "The result can be edited."
- Rewrite avoidable constructions such as "is designed to," "is intended to," "is built around," and "is provided" when a direct active sentence works.
- Legal and policy pages may use limited passive voice where it improves precision.

For normal marketing, educational, and tool copy, avoid passive voice whenever an active construction is natural.

## Additional factual-quality rules

These rules apply because semantic quality is useless if the page is inaccurate.

- Do not claim PromptVera uses AI when the current tool uses deterministic browser-side logic.
- Do not claim guaranteed model behavior, rankings, output quality, availability, ownership, or commercial rights.
- Distinguish PromptVera behavior from the behavior of third-party models.
- Model-specific guidance must use current first-party documentation where available.
- Time-sensitive claims must be rechecked before a major content refresh.
- If first-party guidance is archived, deprecated, ambiguous, or version-specific, state the limitation or avoid the claim.
- Do not invent usage statistics, user counts, ratings, partnerships, or testimonials.

## Required content-review workflow

For every new or materially revised search-intent page:

1. Confirm the page's primary intent and target query.
2. Check current Ubersuggest SERP results for the primary query.
3. Review the strongest relevant organic competitors, not only the highest-DA domains.
4. Review current first-party product documentation where the page is model-specific.
5. Build a semantic coverage outline before rewriting.
6. Draft for usefulness and clarity, not word count.
7. Run a line edit for native English, grammar, punctuation, repetition, and active voice.
8. Check skimmability on desktop and mobile.
9. Check internal links and external source links.
10. Confirm metadata accurately describes the page.
11. Re-read the page from the user's task perspective.
12. Mark the page complete only when all applicable hard rules pass.

## Page-type exceptions

### Legal pages

Privacy Policy and Terms of Use prioritize legal clarity and factual accuracy over competitor comparison or SEO breadth. They still must pass:
- skimmability,
- native English,
- grammar and punctuation,
- readability,
- active voice where it does not reduce legal precision.

### Contact/support pages

Contact pages do not need competitor benchmarking. They must be direct, easy to scan, complete, and grammatically clean.

### About page

The About page must use the same canonical entity facts as the homepage, structured data, directory profiles, and discovery documentation.

## Definition of done

A content page is done only when:
- every applicable hard rule passes,
- no material competitor coverage gap remains for the target intent,
- no factual claim lacks support,
- the page adds distinct user value,
- and the page still reads naturally after SEO optimization.

If any of those conditions fails, the page remains in remediation.
