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
            PromptVera gives you focused prompt generators for today&apos;s AI tools—without accounts, subscriptions, or unnecessary complexity.
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
            <h2>Choose the job, not a generic chatbot.</h2>
            <p>
              Each PromptVera tool is designed around a specific prompt structure, so the output is useful before you paste it into your AI model.
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
              <p>Different AI tasks need different prompt structures. We do not force everything through one generic template.</p>
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
    </>
  );
}
