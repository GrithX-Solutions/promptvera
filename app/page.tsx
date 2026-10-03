import type { Metadata } from "next";
import Link from "next/link";
import { ToolCard } from "@/components/ToolCard";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Free AI Prompt Generator & Creative Tools | PromptVera",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: "Free AI Prompt Generator & Creative Tools | PromptVera",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Prompt Generator & Creative Tools | PromptVera",
    description: siteConfig.description,
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
    description: "Explore the legacy Sora 2 shot-prompt structure for scene, movement, lighting, audio, and continuity planning.",
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
    description: "Create precise image-generation and image-editing prompts with preservation and composition instructions.",
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
    description: "Refine weak prompts into concise, goal-oriented instructions with better context and output criteria.",
    href: "/prompt-improver",
    icon: "↗",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-inner">
          <span className="eyebrow">Free • No login • Browser-based</span>
          <h1>
            Free AI Prompt Generator
            <br />
            <span className="gradient-text">& Creative Tools</span>
          </h1>
          <p className="hero-copy">
            Build clearer AI prompts and creative ideas for ChatGPT, Gemini, Claude, Grok,
            images, video, music, writing, stories, characters, and more—without an account.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/prompt-enhancer">Enhance a prompt</Link>
            <Link className="button secondary" href="#tools">Browse all tools</Link>
          </div>
          <div className="trust-row" aria-label="PromptVera benefits">
            <span>No sign-up</span>
            <span>No prompt history sent to us</span>
            <span>Works in your browser</span>
          </div>
        </div>
      </section>

      <section className="section" id="tools">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">Free prompt generators</span>
            <h2>Choose the job, not a generic template.</h2>
            <p>
              Each PromptVera generator targets a distinct task and workflow,
              from AI prompt improvement to image, video, music, writing, and story planning.
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
          <h2>What is PromptVera?</h2>
          <p>
            PromptVera is a free collection of prompt generators and creative idea tools
            that runs in your browser. Use it to turn rough instructions into clearer AI
            prompts, build model-specific prompt structures, plan image and music prompts,
            or generate writing and story ideas without creating an account.
          </p>

          <h2>What does an AI prompt generator do?</h2>
          <p>
            An AI prompt generator helps turn an idea into an instruction that is easier
            for an AI model to follow. A useful prompt makes the task explicit, includes
            only the context that changes the answer, separates hard constraints from
            preferences, and defines the result you want back.
          </p>
          <p>
            PromptVera does not assume that every task needs a long prompt. The right
            structure depends on the job. A simple translation may need only one clear
            sentence, while a research, coding, image, video, or music workflow may need
            source material, evidence requirements, visual direction, or output controls.
          </p>

          <h2>How to choose the right PromptVera tool</h2>
          <ul>
            <li><strong>You have a vague instruction:</strong> start with the <Link href="/prompt-enhancer">AI Prompt Enhancer</Link>.</li>
            <li><strong>You already have a detailed prompt:</strong> use the <Link href="/prompt-improver">Prompt Improver</Link> to remove ambiguity, repetition, or conflicting requirements.</li>
            <li><strong>You are prompting a specific assistant:</strong> use the dedicated generators for <Link href="/chatgpt-prompt-generator">ChatGPT</Link>, <Link href="/gemini-prompt-generator">Gemini</Link>, <Link href="/claude-prompt-generator">Claude</Link>, or <Link href="/grok-prompt-generator">Grok</Link>.</li>
            <li><strong>You need a visual or music brief:</strong> use the <Link href="/ai-image-prompt-generator">AI Image Prompt Generator</Link>, <Link href="/nano-banana-prompt-generator">Nano Banana Prompt Generator</Link>, or <Link href="/suno-prompt-generator">Suno Prompt Generator</Link>.</li>
            <li><strong>You need an idea rather than an AI instruction:</strong> choose a writing, drawing, character, theme, plot, poetry, journal, or book-title generator.</li>
          </ul>

          <h2>AI prompt example: from vague request to usable brief</h2>
          <div className="example-box">
            <strong>Rough request</strong>
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

          <h2>Why PromptVera uses focused generators</h2>
          <p>
            Different tasks expose different decisions. Image prompting may need composition,
            lighting, camera, and preservation rules. Music prompting may need genre, tempo,
            vocals, instrumentation, and arrangement. Story planning needs characters,
            conflict, turning points, and resolution. PromptVera keeps those workflows
            separate instead of forcing every request through one generic form.
          </p>

          <h2>Creative generators for writing, stories, and ideas</h2>
          <p>
            Not every creative task needs an AI-model prompt. Use the <Link href="/random-prompt-generator">Random Prompt Generator</Link> for broad creative starts, the <Link href="/drawing-prompt-generator">Drawing Prompt Generator</Link> for visual practice, the <Link href="/story-plot-generator">Story Plot Generator</Link> for a narrative spine, or the <Link href="/book-title-generator">Book Title Generator</Link> when the concept already exists and naming is the main problem.
          </p>

          <h2>Frequently asked questions</h2>
          <div className="faq">
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
