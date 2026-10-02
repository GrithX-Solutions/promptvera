import type { Metadata } from "next";
import Link from "next/link";
import { PromptEnhancer } from "@/components/PromptEnhancer";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const title = "AI Prompt Improver – Free Prompt Optimization Tool";
const description =
  "Free AI prompt improver for refining existing prompts with clearer context, constraints, goals, and output requirements while preserving the core intent.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/prompt-improver" },
};

export default function PromptImproverPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd name="PromptVera AI Prompt Improver" description={description} path="/prompt-improver" />
      <div className="breadcrumb"><Link href="/">PromptVera</Link> / Prompt Improver</div>
      <header className="tool-hero">
        <span className="eyebrow">Free AI prompt improver</span>
        <h1>AI Prompt <span className="gradient-text">Improver</span></h1>
        <p>
          Refine an existing instruction without changing its core intent. Add clearer objectives, practical constraints, and output expectations.
        </p>
      </header>

      <PromptEnhancer mode="improve" />

      <article className="content-wrap prose">
        <h2>Improve the instruction, not just the wording</h2>
        <p>
          Prompt quality usually improves when the request contains a clear task, relevant context,
          boundaries, and a usable definition of the desired result. Simply adding adjectives such
          as “professional,” “detailed,” or “high quality” is rarely enough.
        </p>
        <p>
          Use this AI prompt improver when you already know what you want but the prompt produces
          inconsistent responses. The output is designed to preserve the original intent while
          making the request easier to follow and easier for you to review.
        </p>

        <h2>Prompt improver vs. AI prompt enhancer</h2>
        <p>
          These tools serve related but distinct jobs. The improver starts from an existing working
          prompt and emphasizes refinement. The{" "}
          <Link href="/prompt-enhancer">AI Prompt Enhancer</Link> is better when a short idea needs
          a fuller task structure with explicit goals, context, constraints, and output direction.
          Keeping those intents separate reduces unnecessary rewriting.
        </p>

        <h2>A practical prompt optimization checklist</h2>
        <ul>
          <li>State the actual task in one unambiguous sentence.</li>
          <li>Add context only when it changes how the task should be completed.</li>
          <li>Separate must-follow constraints from preferences.</li>
          <li>Describe the expected output without over-formatting it.</li>
          <li>Remove instructions that conflict with each other.</li>
          <li>Keep important source material distinguishable from your instructions.</li>
        </ul>

        <h2>When a model-specific prompt generator is a better fit</h2>
        <p>
          General prompt optimization is useful when the instruction should remain portable. If the
          task depends on a specific model workflow, use a dedicated generator such as the{" "}
          <Link href="/chatgpt-prompt-generator">ChatGPT Prompt Generator</Link>,{" "}
          <Link href="/claude-prompt-generator">Claude Prompt Generator</Link>, or{" "}
          <Link href="/gemini-prompt-generator">Gemini Prompt Generator</Link>.
        </p>
      </article>
    </div>
  );
}
