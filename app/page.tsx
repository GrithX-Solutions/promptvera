import Link from "next/link";
import { ToolCard } from "@/components/ToolCard";

const tools = [
  {
    title: "Prompt Enhancer",
    description: "Turn a rough instruction into a clearer, structured prompt for text, image, video, or music workflows.",
    href: "/prompt-enhancer",
    icon: "✦",
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
          <span className="eyebrow">Free • No login • Fast</span>
          <h1>
            Better prompts.
            <br />
            <span className="gradient-text">Better AI results.</span>
          </h1>
          <p className="hero-copy">
            PromptVera gives you focused AI and creative prompt generators—without accounts, subscriptions, or unnecessary complexity.
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
            <span className="eyebrow">Prompt tools</span>
            <h2>Choose the job, not a generic generator.</h2>
            <p>
              Each PromptVera tool is designed around a specific workflow, so the output is useful before you move into your AI or creative process.
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
              <p>The first release uses browser-side prompt logic and does not require an account or a paid AI API.</p>
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
          <h2>How PromptVera helps you write better prompts</h2>
          <p>
            PromptVera turns a vague idea into a prompt that is easier to review, edit, and reuse.
            Instead of adding random detail, each tool asks for the information that matters to the
            task: the goal, context, constraints, format, visual direction, music structure, or
            creative challenge.
          </p>
          <p>
            The result is still your prompt. You can copy it into the AI service or creative workflow
            you use, remove anything you do not need, and iterate from there. PromptVera does not
            require an account for the launch tools, and the core prompt-building logic runs in the browser.
          </p>
          <h3>Start with the job you need done</h3>
          <p>
            Use Prompt Enhancer or Prompt Improver for general AI instructions. Use model-specific
            tools such as the Claude or Grok Prompt Generator when a platform benefits from its own
            prompting structure, and use the creative generators for journaling, fanfiction, video,
            music, images, drawing, writing, or poetry.
          </p>
        </div>
      </section>
    </>
  );
}
