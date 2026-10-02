import type { Metadata } from "next";
import Link from "next/link";
import { PromptEnhancer } from "@/components/PromptEnhancer";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const title = "Free Prompt Improver";
const description =
  "Improve weak AI prompts into clearer, goal-oriented instructions with better context, constraints, and output requirements.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/prompt-improver" },
};

export default function PromptImproverPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd name="PromptVera Prompt Improver" description={description} path="/prompt-improver" />
      <div className="breadcrumb"><Link href="/">PromptVera</Link> / Prompt Improver</div>
      <header className="tool-hero">
        <span className="eyebrow">Free prompt tool</span>
        <h1>Prompt <span className="gradient-text">Improver</span></h1>
        <p>
          Refine an existing instruction without changing its core intent. Add clearer objectives, practical constraints, and output expectations.
        </p>
      </header>

      <PromptEnhancer mode="improve" />

      <article className="content-wrap prose">
        <h2>Improve the instruction, not just the wording</h2>
        <p>
          Prompt quality usually improves when the request contains a clear task, relevant context, boundaries, and a usable definition of the desired result. Simply adding adjectives such as “professional,” “detailed,” or “high quality” is rarely enough.
        </p>
        <p>
          Use this tool when you already know what you want but your prompt produces inconsistent responses. The output is designed to be a stronger working draft that you can shorten or customize before using it.
        </p>

        <h2>Prompt improver vs. prompt enhancer</h2>
        <p>
          The two tools intentionally overlap because people search for both terms. The improver emphasizes preserving an existing instruction while tightening it; the enhancer is oriented toward turning a rough idea into a more explicit task structure. Neither page should be treated as a magic formula for every model.
        </p>

        <h2>A practical improvement checklist</h2>
        <ul>
          <li>State the actual task in one unambiguous sentence.</li>
          <li>Add context that changes how the task should be completed.</li>
          <li>Separate must-follow constraints from preferences.</li>
          <li>Describe the expected output without over-formatting it.</li>
          <li>Remove instructions that conflict with each other.</li>
        </ul>
      </article>
    </div>
  );
}
