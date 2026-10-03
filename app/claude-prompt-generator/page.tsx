import type { Metadata } from "next";
import Link from "next/link";
import { ClaudePromptGenerator } from "@/components/ClaudePromptGenerator";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Claude Prompt Generator – Free Structured Prompts";
const description =
  "Free Claude prompt generator for clear, structured prompts with role, context, task, constraints, examples, XML sections, and output requirements.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/claude-prompt-generator" });

export default function ClaudePromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd
        name="PromptVera Claude Prompt Generator"
        description={description}
        path="/claude-prompt-generator"
      />

      <div className="breadcrumb">
        <Link href="/">PromptVera</Link> / Claude Prompt Generator
      </div>

      <header className="tool-hero">
        <span className="eyebrow">Free Claude prompt tool</span>
        <h1>
          Claude Prompt <span className="gradient-text">Generator</span>
        </h1>
        <p>
          Turn a rough task into a clearer Claude prompt with explicit context,
          requirements, output format, optional examples, and structured XML sections.
        </p>
      </header>

      <ClaudePromptGenerator />

      <article className="content-wrap prose">
        <h2>What does a Claude prompt generator do?</h2>
        <p>
          A Claude prompt generator helps organize the instruction before you send it
          to Claude. It does not need to make every request longer. The useful part is
          separating the task from the context, constraints, output requirements, and
          any example that should influence the result.
        </p>
        <p>
          PromptVera&apos;s generator is browser-side and deterministic. It does not call
          Claude or another paid AI API to rewrite your input. The output is a structured
          prompt that you can review, shorten, and paste into the Claude interface or
          another workflow where you use Claude.
        </p>

        <h2>Why structure matters when prompting Claude</h2>
        <p>
          <a
            href="https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
            target="_blank"
            rel="noreferrer"
          >
            Anthropic&apos;s current prompting documentation
          </a>{" "}
          emphasizes clear and direct instructions, explicit output requirements, and relevant examples. It also
          recommends XML tags as a way to separate instructions, context, examples,
          and variable input when a prompt becomes complex. The XML option in this tool
          follows that organizational pattern; it is not a requirement for every short
          Claude prompt.
        </p>
        <p>
          For simple questions, a direct sentence may be enough. Use additional fields
          only when they change how the task should be completed. Unnecessary roles,
          excessive formatting, and repeated instructions can make a prompt harder to
          review rather than better.
        </p>

        <h2>How to build a stronger Claude prompt</h2>

        <h3>State the task explicitly</h3>
        <p>
          Start with the actual action you want: compare, rewrite, debug, synthesize,
          plan, extract, explain, or create. Avoid hiding the main request inside a long
          background paragraph. The generator keeps the task in its own section so it
          stays visible.
        </p>

        <h3>Add context that changes the answer</h3>
        <p>
          Useful context includes definitions, current state, source material,
          constraints, business rules, or assumptions Claude would not otherwise know.
          You can usually remove context that does not affect the answer.
        </p>

        <h3>Make the output requirement testable</h3>
        <p>
          If you need JSON, a table, working code, a short answer, or an ordered plan,
          say so. A concrete output requirement is easier to follow than vague wording
          such as “make it professional” or “give me a high-quality answer.”
        </p>

        <h3>Use examples when the pattern matters</h3>
        <p>
          Examples are valuable when you need Claude to match a specific structure,
          tone, transformation, or edge case. A relevant example can communicate the
          target more clearly than several paragraphs of abstract instruction. For
          repeated production workflows, test multiple representative examples rather
          than assuming one example covers every input.
        </p>

        <h2>Claude prompt example</h2>
        <div className="example-box">
          <strong>Rough request</strong>
          <p>Review this migration plan.</p>
          <strong>Structured Claude prompt</strong>
          <p>
            Review the migration plan below for missing prerequisites, sequencing risks, rollback
            gaps, and assumptions that need evidence. Preserve the stated business constraints.
            Return four sections: blocking issues, non-blocking risks, unanswered questions, and a
            revised execution order. Do not invent system details that are not present in the plan;
            label any inference explicitly.
          </p>
        </div>
        <p>
          The improved request gives Claude a review scope, preservation rule, evidence boundary,
          and output structure without adding unnecessary role-play.
        </p>

        <h2>Claude prompt generator vs. Prompt Enhancer</h2>
        <p>
          The <Link href="/prompt-enhancer">Prompt Enhancer</Link> creates a portable,
          general-purpose structure that can work across several AI assistants. This
          Claude Prompt Generator is narrower: it emphasizes the organization patterns
          documented for Claude, including explicit sections and optional XML tags.
        </p>
        <p>
          PromptVera is an independent utility site and is not affiliated with or
          endorsed by Anthropic. Claude and related product names belong to their
          respective owners.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is this Claude prompt generator free?</summary>
            <p>Yes. The current tool is free and does not require an account.</p>
          </details>
          <details>
            <summary>Does PromptVera send my prompt to Claude?</summary>
            <p>
              No. This version structures the prompt in your browser. You choose whether
              to copy the result into Claude afterward.
            </p>
          </details>
          <details>
            <summary>Do Claude prompts have to use XML tags?</summary>
            <p>
              No. XML is useful for separating parts of more complex prompts, but a
              short task can often be written clearly without it. The XML option is
              enabled by default here because this generator creates multi-part prompts.
            </p>
          </details>
          <details>
            <summary>Should I always give Claude a role?</summary>
            <p>
              No. A role can focus behavior for a specific use case, but it should be
              relevant to the task. The generator provides a task-based default and lets
              you replace or omit it when another instruction is more appropriate.
            </p>
          </details>
        </div>
      </article>
    </div>
  );
}
