import type { Metadata } from "next";
import Link from "next/link";
import { PromptEnhancer } from "@/components/PromptEnhancer";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const title = "AI Prompt Enhancer – Free Prompt Enhancement Tool";
const description =
  "Free AI prompt enhancer for turning rough instructions into clearer prompts with goals, context, constraints, and output direction for major AI workflows.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/prompt-enhancer" },
};

export default function PromptEnhancerPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd name="PromptVera AI Prompt Enhancer" description={description} path="/prompt-enhancer" />
      <div className="breadcrumb"><Link href="/">PromptVera</Link> / Prompt Enhancer</div>
      <header className="tool-hero">
        <span className="eyebrow">Free AI prompt enhancer</span>
        <h1>AI Prompt <span className="gradient-text">Enhancer</span></h1>
        <p>
          Turn a short or vague instruction into a clearer prompt with an explicit task, goal, constraints, and output direction.
        </p>
      </header>

      <PromptEnhancer />

      <article className="content-wrap prose">
        <h2>What does an AI prompt enhancer do?</h2>
        <p>
          An AI prompt enhancer restructures the instruction you already have. It does not need to
          replace your idea or make the prompt artificially long. A useful enhancement clarifies
          what the model should do, why the result is needed, which constraints matter, and what a
          good output should look like.
        </p>
        <p>
          PromptVera&apos;s current prompt enhancement logic runs in your browser. You can use the
          free prompt enhancer without creating an account or sending the prompt to a separate paid
          AI API just to rewrite it.
        </p>

        <h2>When should you enhance an AI prompt?</h2>
        <ul>
          <li><strong>The result is too generic:</strong> add a goal and practical output requirements.</li>
          <li><strong>The model ignores constraints:</strong> separate requirements from the main task.</li>
          <li><strong>The answer is too long or too short:</strong> specify the desired level of detail.</li>
          <li><strong>You reuse the same request:</strong> turn it into a stable prompt template before repeating it.</li>
        </ul>

        <div className="example-box">
          <strong>Rough prompt:</strong>
          <p>Write copy for my cybersecurity service.</p>
          <strong>Better direction:</strong>
          <p>
            Define the audience, commercial goal, differentiators, tone, required sections, and any
            claims that must be verified before asking the model for the final copy.
          </p>
        </div>

        <h2>Prompt enhancer vs. prompt improver</h2>
        <p>
          Use this AI prompt enhancer when the starting request is brief, vague, or missing useful
          structure. If the prompt is already detailed and you mainly want to tighten its wording,
          remove conflicts, or preserve the existing intent, use the{" "}
          <Link href="/prompt-improver">AI Prompt Improver</Link> instead.
        </p>

        <h2>Use the enhanced prompt with the right model</h2>
        <p>
          The enhanced output is portable, but model-specific workflows can benefit from additional
          controls. PromptVera also provides dedicated generators for{" "}
          <Link href="/chatgpt-prompt-generator">ChatGPT</Link>,{" "}
          <Link href="/gemini-prompt-generator">Gemini</Link>,{" "}
          <Link href="/claude-prompt-generator">Claude</Link>, and{" "}
          <Link href="/grok-prompt-generator">Grok</Link>.
        </p>

        <h2>Longer prompts are not automatically better</h2>
        <p>
          Extra wording only helps when it removes ambiguity or adds useful context. PromptVera keeps
          the original task visible and adds structure around it. Review the generated prompt and
          remove any instruction that does not match your real objective.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is the PromptVera AI prompt enhancer free?</summary>
            <p>Yes. The current browser-based enhancer is free and does not require an account.</p>
          </details>
          <details>
            <summary>Does PromptVera call ChatGPT to improve my prompt?</summary>
            <p>No. The current version uses local prompt-structuring rules rather than sending your text to a paid third-party AI API.</p>
          </details>
          <details>
            <summary>Can I use the enhanced prompt with different AI models?</summary>
            <p>Yes. The generated structure is intentionally readable and portable so you can edit it for the model and workflow you use.</p>
          </details>
        </div>
      </article>
    </div>
  );
}
