# PromptVera

**Live site:** https://promptvera.com  
**Tagline:** Better Prompts. Better AI Results.

PromptVera is an independent, no-login collection of free AI prompt generators and creative idea tools. The current tools use deterministic browser-side logic, so the core experience does not require a database, user account, or paid AI API request.

## Live tool surface

### AI prompt tools

- AI Prompt Enhancer
- AI Prompt Improver
- ChatGPT Prompt Generator
- Gemini Prompt Generator
- Claude Prompt Generator
- Grok Prompt Generator

### Image, video, and music

- AI Image Prompt Generator
- Nano Banana Prompt Generator
- Sora 2 Prompt Generator
- Suno Prompt Generator

### Writing, stories, and creative ideas

- Drawing Prompt Generator
- Random Prompt Generator
- Random Theme Generator
- Journal Prompt Generator
- Poetry Prompt Generator
- Fanfic Prompt Generator
- OC Prompt Generator
- Short Story Prompt Generator
- Story Plot Generator
- Horror Story Plot Generator
- Book Title Generator

## Product principles

- Each indexed tool should solve a distinct user task or search intent.
- Do not create thin near-duplicate pages just to capture keyword variants.
- Generated output should remain editable and understandable.
- Browser-side generation is preferred when it can solve the task reliably.
- Model and product names are descriptive references; PromptVera is not an official product of the AI providers named by individual tools.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Plain CSS
- Static export served by Caddy
- Small client components for interactive tools

Node.js 20.9+ is required.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Validation:

```bash
npm run typecheck
npm run build
```

## Search and discovery foundation

The production site includes:

- Per-page titles, descriptions, canonical URLs, Open Graph, and Twitter metadata
- XML sitemap and crawlable robots.txt
- Explicit OAI-SearchBot and GPTBot access
- Organization and WebSite structured data
- WebApplication and Breadcrumb structured data on tool pages
- Answer-first explanatory sections and FAQs where useful
- Contextual and sitewide internal linking
- First-party documentation links on model-specific guidance pages
- `/llms.txt` as a supplemental machine-readable site guide for systems that use it
- IndexNow submission during the registered production deployment flow
- Responsive UI, keyboard focus states, and skip-to-content navigation

`llms.txt` is supplemental only. Google Search does not require it and does not treat it as a ranking signal.

## Privacy model

The current generators build prompt text in the browser. PromptVera does not require account creation or a prompt-history database for these tools. Review the live privacy policy for the current production disclosures.

## SEO/content rule

Search demand can inform what gets built, but a new URL should exist only when the tool or content has materially distinct user value. Related keyword variants should normally be consolidated into the strongest matching page instead of being split into thin landing pages.
