# PromptVera

**Domain:** https://promptvera.com  
**Tagline:** Better Prompts. Better AI Results.

PromptVera is an AdSense-first, no-login utility site for free AI prompt generators and prompt enhancement tools.

## Initial product surface

- Prompt Enhancer
- Prompt Improver
- Sora 2 Prompt Generator
- Suno Prompt Generator
- Nano Banana Prompt Generator
- AI Image Prompt Generator

The first release intentionally uses deterministic browser-side prompt logic. No database, authentication system, or paid AI API is required for the core tools.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Plain CSS
- Static/server-rendered content with small client components for tools

Node.js 20.9+ is required.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Production build:

```bash
npm run typecheck
npm run build
npm start
```

## SEO foundation

The app includes:

- Per-page metadata and canonical URLs
- XML sitemap
- robots.txt
- WebApplication structured data on tool pages
- Internal tool linking
- Original explanatory content on every launch tool page
- Responsive, dependency-light UI

## Pre-production checklist

Before connecting the registered domain to production:

- [ ] Configure DNS and SSL for `promptvera.com`
- [ ] Decide whether `www.promptvera.com` redirects to the apex domain
- [ ] Create and test a working PromptVera contact mailbox
- [ ] Add a Contact page after the mailbox is live
- [ ] Add Google Search Console
- [ ] Add analytics only after updating the privacy policy with the actual provider
- [ ] Submit `/sitemap.xml` in Search Console
- [ ] Verify canonical URLs on the production hostname
- [ ] Test Core Web Vitals on mobile
- [ ] Add a Google-certified consent platform before serving ads where required
- [ ] Add AdSense and `ads.txt` only after the content/tool experience is production-ready

## Product rule

Do not create thin near-duplicate pages only to capture keyword variants. New pages should either provide a distinct tool/workflow or materially distinct supporting value.
