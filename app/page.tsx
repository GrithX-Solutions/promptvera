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
    card: "summary",
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
    title: "Poetry Prompt Generator",
    description: "Generate poem ideas with imagery, emotional tension, poetic form, perspective, and craft constraints.",
    href: "/poetry-prompt-generator",
    icon: "⌁",
  },
  {
    title: "Sora 2 Prompt Generator",
    description: "Build structured video prompts with shot, movement, lighting, audio, and output controls.",
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
              Each PromptVera generator is built around a distinct search intent and workflow,
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
          <h2>A free AI prompt generator for different workflows</h2>
          <p>
            PromptVera is not one oversized AI prompt generator that adds the same boilerplate
            to every request. Use the <Link href="/prompt-enhancer">AI Prompt Enhancer</Link> when
            a rough instruction needs clearer goals and constraints, or the{" "}
            <Link href="/prompt-improver">Prompt Improver</Link> when you already have a working
            prompt that needs tighter structure.
          </p>
          <p>
            Model-specific tasks have their own builders for{" "}
            <Link href="/chatgpt-prompt-generator">ChatGPT</Link>,{" "}
            <Link href="/gemini-prompt-generator">Gemini</Link>,{" "}
            <Link href="/claude-prompt-generator">Claude</Link>, and{" "}
            <Link href="/grok-prompt-generator">Grok</Link>. Visual and media workflows can start
            with the <Link href="/ai-image-prompt-generator">AI Image Prompt Generator</Link>,{" "}
            <Link href="/sora-2-prompt-generator">Sora 2 Prompt Generator</Link>, or{" "}
            <Link href="/suno-prompt-generator">Suno Prompt Generator</Link>.
          </p>

          <h2>Creative generators for writing, stories, and ideas</h2>
          <p>
            PromptVera also covers creative planning that does not need a paid AI call. Generate
            drawing and writing ideas, character directions, story prompts, structured plots, and
            book names directly in the browser. For longer fiction planning, start with the{" "}
            <Link href="/story-plot-generator">Story Plot Generator</Link>; when the manuscript or
            concept needs a name, use the <Link href="/book-title-generator">Book Title Generator</Link>.
          </p>

          <h2>How PromptVera improves prompt quality</h2>
          <p>
            Better prompting usually comes from clearer intent rather than more words. The tools
            separate the task, context, constraints, tone, format, visual direction, music
            structure, or narrative requirements so you can see what the prompt is actually asking
            the model to do.
          </p>
          <p>
            The generated result remains editable. Copy it into the AI or creative workflow you
            use, remove anything that does not matter, and keep the instructions that materially
            change the output. That approach produces reusable prompts without pretending that one
            formula is optimal for every model or task.
          </p>
        </div>
      </section>
    </>
  );
}
