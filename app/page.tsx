import type { Metadata } from "next";
import Link from "next/link";
import { HomepagePromptWriter } from "@/components/HomepagePromptWriter";
import { ToolCard } from "@/components/ToolCard";
import { siteConfig } from "@/lib/site";

const homepageDescription =
  "Write a structured AI prompt from any goal with PromptVera's free browser-based prompt writer and prompt generator. No login or paid AI API call.";

export const metadata: Metadata = {
  title: {
    absolute: "Free AI Prompt Writer & Prompt Generator | PromptVera",
  },
  description: homepageDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: "Free AI Prompt Writer & Prompt Generator | PromptVera",
    description: homepageDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Prompt Writer & Prompt Generator | PromptVera",
    description: homepageDescription,
  },
};

const homepageToolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${siteConfig.url}/#prompt-writer`,
  name: "PromptVera AI Prompt Writer & Prompt Generator",
  description: homepageDescription,
  url: siteConfig.url,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  inLanguage: "en",
  isAccessibleForFree: true,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  publisher: { "@id": `${siteConfig.url}/#organization` },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const tools = [
  {
    title: "Prompt Enhancer",
    description: "Turn a rough instruction into a clearer, structured prompt for text, image, video, or music workflows.",
    href: "/prompt-enhancer",
    icon: "✦",
  },
  {
    title: "ChatGPT Prompt Generator",
    description: "Build clearer ChatGPT prompts with task, context, source material, audience, constraints, tone, examples, and output format.",
    href: "/chatgpt-prompt-generator",
    icon: "C",
  },
  {
    title: "Gemini Prompt Generator",
    description: "Build Gemini-focused prompts with multimodal input guidance, explicit parameters, long-context ordering, verbosity, and output controls.",
    href: "/gemini-prompt-generator",
    icon: "G",
  },
  {
    title: "Claude Prompt Generator",
    description: "Build Claude-focused prompts with explicit context, constraints, output requirements, examples, and optional XML structure.",
    href: "/claude-prompt-generator",
    icon: "C",
  },
  {
    title: "Grok Prompt Generator",
    description: "Build Grok-focused prompts with result-first instructions, source-of-truth, evidence requirements, and action boundaries.",
    href: "/grok-prompt-generator",
    icon: "G",
  },
  {
    title: "Journal Prompt Generator",
    description: "Generate focused journal prompts for self-reflection, gratitude, goals, relationships, creativity, and daily check-ins.",
    href: "/journal-prompt-generator",
    icon: "J",
  },
  {
    title: "Fanfic Prompt Generator",
    description: "Generate fanfiction ideas with pairings, tropes, canon divergence, alternate universes, conflict, tone, and character dynamics.",
    href: "/fanfic-prompt-generator",
    icon: "F",
  },
  {
    title: "OC Prompt Generator",
    description: "Generate original character ideas with archetype, personality contrast, motivation, flaw, relationships, story hooks, and visual design cues.",
    href: "/oc-prompt-generator",
    icon: "O",
  },
  {
    title: "Story Plot Generator",
    description: "Generate structured plots with a protagonist, goal, conflict, turning points, climax, resolution, genre, and story scope.",
    href: "/story-plot-generator",
    icon: "P",
  },
  {
    title: "Book Title Generator",
    description: "Generate fiction and nonfiction book title ideas by genre, tone, title style, theme, topic, and your own keywords.",
    href: "/book-title-generator",
    icon: "B",
  },
  {
    title: "Horror Story Plot Generator",
    description: "Generate horror plots with a protagonist, core fear, escalation rule, reveal, survival cost, intensity, and ending direction.",
    href: "/horror-story-plot-generator",
    icon: "H",
  },
  {
    title: "Short Story Prompt Generator",
    description: "Generate focused short-fiction ideas with genre, protagonist, goal, obstacle, setting, point of view, length, and optional twist.",
    href: "/short-story-prompt-generator",
    icon: "S",
  },
  {
    title: "Drawing Prompt Generator",
    description: "Generate random drawing and art ideas with subjects, settings, moods, media, and creative challenges.",
    href: "/drawing-prompt-generator",
    icon: "✎",
  },
  {
    title: "Random Prompt Generator",
    description: "Generate random writing, story, character, journal, conversation, and creative challenge prompts.",
    href: "/random-prompt-generator",
    icon: "⟳",
  },
  {
    title: "Random Theme Generator",
    description: "Generate random themes for writing, stories, art, design, games, projects, events, and creative challenges.",
    href: "/random-theme-generator",
    icon: "◇",
  },
  {
    title: "Poetry Prompt Generator",
    description: "Generate poem ideas with imagery, emotional tension, poetic form, perspective, and craft constraints.",
    href: "/poetry-prompt-generator",
    icon: "⌁",
  },
  {
    title: "Sora 2 Prompt Generator",
    description: "Study the legacy Sora 2 shot-prompt structure for scene, movement, timing, lighting, audio, and continuity planning.",
    href: "/sora-2-prompt-generator",
    icon: "▶",
  },
  {
    title: "Suno Prompt Generator",
    description: "Create detailed music prompts with genre, mood, tempo, vocals, instrumentation, and arrangement.",
    href: "/suno-prompt-generator",
    icon: "♫",
  },
  {
    title: "Nano Banana Prompt Generator",
    description: "Create Gemini image-generation and editing briefs with reference roles, preservation, layout, composition, and lighting controls.",
    href: "/nano-banana-prompt-generator",
    icon: "◈",
  },
  {
    title: "AI Image Prompt Generator",
    description: "Build polished image prompts with subject, composition, lighting, lens, style, and constraints.",
    href: "/ai-image-prompt-generator",
    icon: "▣",
  },
  {
    title: "Prompt Improver",
    description: "Diagnose an existing prompt, name the problems to fix, preserve non-negotiable requirements, and tighten its structure.",
    href: "/prompt-improver",
    icon: "↗",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageToolSchema) }}
      />

      <section className="hero">
        <div className="shell hero-inner">
          <span className="eyebrow">Free • No login • Browser-based</span>
          <h1>
            Free AI Prompt Writer
            <br />
            <span className="gradient-text">& Prompt Generator</span>
          </h1>
          <p className="hero-copy">
            Turn a goal or brief into one structured prompt for ChatGPT, Gemini, Claude, Grok,
            and other AI assistants. PromptVera builds the prompt locally in your browser.
          </p>

          <HomepagePromptWriter />

          <div className="hero-intent-links" aria-label="Related prompt workflows">
            <strong>Already have a prompt?</strong>
            <Link href="/prompt-enhancer">Enhance a rough prompt</Link>
            <Link href="/prompt-improver">Diagnose and improve a detailed prompt</Link>
            <Link href="#tools">Browse specialized generators</Link>
          </div>

          <div className="trust-row" aria-label="PromptVera benefits">
            <span>No sign-up</span>
            <span>No prompt history sent to us</span>
            <span>No paid AI API call</span>
          </div>
        </div>
      </section>

      <section className="section" id="tools">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">Free prompt generators</span>
            <h2>Use the flagship writer first, then choose a specialist when the job changes.</h2>
            <p>
              The homepage writes a general-purpose AI prompt from a goal. These focused generators
              handle different jobs such as model-specific prompting, prompt repair, image and music
              briefs, creative writing, story planning, and the clearly labeled legacy Sora study tool.
            </p>
          </div>
          <div className="tool-grid">
            {tools.map((tool) => (
              <ToolCard key={tool.href} {...tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell feature-band">
          <div className="feature-grid">
            <div className="feature">
              <h3>Purpose-built</h3>
              <p>Different tasks need different prompt structures. We do not force everything through one generic template.</p>
            </div>
            <div className="feature">
              <h3>Private by default</h3>
              <p>The current tools use browser-side logic and do not require an account or a paid AI API.</p>
            </div>
            <div className="feature">
              <h3>Made for iteration</h3>
              <p>Generate, copy, adjust, and try again quickly. The tool stays out of the way of your actual workflow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell content-wrap prose">
          <h2>What is an AI prompt writer?</h2>
          <p>
            An AI prompt writer turns a goal or brief into a structured instruction for an AI
            assistant. A useful prompt makes the task explicit, adds only the context that changes
            the answer, separates hard constraints from preferences, and defines the output you
            actually want to use.
          </p>
          <p>
            PromptVera&apos;s homepage prompt writer is model-neutral. It does not call ChatGPT,
            Claude, Gemini, Grok, or another paid AI API. The browser-side tool organizes the text
            you provide and gives you one editable prompt to copy into the assistant you choose.
          </p>

          <h2>How this prompt generator works</h2>
          <ol>
            <li><strong>Describe the job:</strong> state what you want the AI assistant to do.</li>
            <li><strong>Add only useful details:</strong> provide source material, audience, constraints, tone, an example, or an output format when they matter.</li>
            <li><strong>Review the structured prompt:</strong> PromptVera preserves your supplied information and adds quality rules that discourage unsupported invention.</li>
            <li><strong>Fill genuine gaps:</strong> optional suggestions highlight missing context, constraints, or output requirements instead of silently inventing them.</li>
            <li><strong>Copy and iterate:</strong> use the result in your chosen AI assistant, then refine the prompt based on the answer you receive.</li>
          </ol>
          <p>
            Longer is not automatically better. A simple task may need one sentence; a research,
            coding, analysis, or business workflow may need source material, constraints, evidence
            rules, or a specific output structure.
          </p>

          <h2>Prompt Writer vs. Prompt Enhancer vs. Prompt Improver</h2>
          <ul>
            <li><strong>You have a goal but no real prompt yet:</strong> use the homepage <a href="#prompt-writer">AI Prompt Writer</a> to create a structured first draft.</li>
            <li><strong>You already wrote a rough instruction:</strong> use the <Link href="/prompt-enhancer">Prompt Enhancer</Link> to add useful structure and detail without changing the core intent.</li>
            <li><strong>You already have a developed prompt with problems:</strong> use the <Link href="/prompt-improver">Prompt Improver</Link> to diagnose ambiguity, repetition, missing requirements, or conflicts.</li>
            <li><strong>You need provider-specific guidance:</strong> use the dedicated generators for <Link href="/chatgpt-prompt-generator">ChatGPT</Link>, <Link href="/gemini-prompt-generator">Gemini</Link>, <Link href="/claude-prompt-generator">Claude</Link>, or <Link href="/grok-prompt-generator">Grok</Link>.</li>
            <li><strong>You need a visual or music brief:</strong> use the <Link href="/ai-image-prompt-generator">AI Image Prompt Generator</Link>, <Link href="/nano-banana-prompt-generator">Nano Banana Prompt Generator</Link>, or <Link href="/suno-prompt-generator">Suno Prompt Generator</Link>.</li>
          </ul>

          <h2>Prompt writer example: from goal to usable brief</h2>
          <div className="example-box">
            <strong>Goal</strong>
            <p>Analyze my landing page and tell me how to improve it.</p>
            <strong>Clearer prompt</strong>
            <p>
              Audit this landing page for search intent, copy clarity, conversion friction,
              accessibility, and performance. For each area, identify the three highest-impact
              issues, explain the evidence, and recommend a specific change. Preserve the current
              offer and pricing. Finish with a prioritized action list of no more than ten items.
            </p>
          </div>
          <p>
            The second prompt does not rely on decorative phrases such as “act like an expert.”
            It defines the review areas, evidence standard, preservation rules, and deliverable.
          </p>

          <h2>What makes a good AI prompt?</h2>
          <h3>A clear task</h3>
          <p>
            Start with the action you need: summarize, compare, extract, debug, classify,
            plan, rewrite, or create. The model should not have to search a long paragraph
            to find the actual job.
          </p>

          <h3>Relevant context</h3>
          <p>
            Add definitions, source material, business rules, audience information, or
            background only when they change the answer. More context is not automatically
            better context.
          </p>

          <h3>Explicit constraints</h3>
          <p>
            State the limits the output must respect, such as scope, length, exclusions,
            required sources, format, or actions that need approval.
          </p>

          <h3>A usable output requirement</h3>
          <p>
            Ask for the structure you plan to use: a table, draft, checklist, JSON object,
            code patch, ranked action list, or concise explanation. Concrete output criteria
            make the result easier to review.
          </p>

          <h2>Why model-neutral and model-specific prompts are separate</h2>
          <p>
            The homepage writer uses a portable structure for capable general-purpose AI assistants.
            Provider-specific tools stay separate because model capabilities and prompting guidance
            can differ. Image prompting may need composition, lighting, camera, and preservation
            rules; music prompting may need genre, tempo, vocals, instrumentation, and arrangement.
            Keeping those workflows separate prevents one generic template from swallowing distinct
            search intents or user tasks.
          </p>

          <h2>Creative generators for writing, stories, and ideas</h2>
          <p>
            Not every creative task needs an AI-model prompt. Use the <Link href="/random-prompt-generator">Random Prompt Generator</Link> for broad creative starts, the <Link href="/drawing-prompt-generator">Drawing Prompt Generator</Link> for visual practice, the <Link href="/story-plot-generator">Story Plot Generator</Link> for a narrative spine, or the <Link href="/book-title-generator">Book Title Generator</Link> when the concept already exists and naming is the main problem.
          </p>

          <h2>Privacy and browser-side processing</h2>
          <p>
            The current homepage writer is deterministic browser-side software. It does not send
            your brief to a paid AI API, does not require an account, and does not maintain a
            server-side prompt history. You control where the generated text goes after you copy it.
          </p>

          <h2>Frequently asked questions</h2>
          <div className="faq">
            <details>
              <summary>What is the difference between a prompt writer and a prompt enhancer?</summary>
              <p>A prompt writer starts from your goal and creates a first structured prompt. A prompt enhancer starts from text you already wrote and expands or clarifies it while preserving the original intent.</p>
            </details>
            <details>
              <summary>Is PromptVera free?</summary>
              <p>Yes. The current tools are free to use and do not require an account.</p>
            </details>
            <details>
              <summary>Does PromptVera send my prompts to ChatGPT or another paid AI API?</summary>
              <p>No. The current core tools use browser-side deterministic logic to build or combine prompt text. You choose where to use the result afterward.</p>
            </details>
            <details>
              <summary>Do longer prompts work better?</summary>
              <p>No. Add information only when it changes how the model should complete the task. Clear, relevant instructions matter more than length.</p>
            </details>
            <details>
              <summary>Can I use PromptVera prompts with different AI models?</summary>
              <p>Many PromptVera outputs are portable, but model capabilities differ. Use a model-specific generator or adjust syntax and controls when the target service has its own requirements.</p>
            </details>
            <details>
              <summary>Does PromptVera generate AI images, video, or music?</summary>
              <p>No. PromptVera currently generates prompt text and creative planning outputs. It does not host the third-party generation models referenced by individual tools.</p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
