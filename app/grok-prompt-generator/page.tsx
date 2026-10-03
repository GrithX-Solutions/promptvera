import type { Metadata } from "next";
import Link from "next/link";
import { GrokPromptGenerator } from "@/components/GrokPromptGenerator";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Grok Prompt Generator – Free Structured Prompts";
const description =
  "Free Grok prompt generator for clearer research, coding, analysis, planning, and writing prompts with context, source-of-truth, evidence, and approval boundaries.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/grok-prompt-generator" });

export default function GrokPromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd
        name="PromptVera Grok Prompt Generator"
        description={description}
        path="/grok-prompt-generator"
      />

      <div className="breadcrumb">
        <Link href="/">PromptVera</Link> / Grok Prompt Generator
      </div>

      <header className="tool-hero">
        <span className="eyebrow">Free Grok prompt tool</span>
        <h1>Grok Prompt <span className="gradient-text">Generator</span></h1>
        <p>
          Turn a rough request into a clearer Grok prompt with an explicit result,
          context, source-of-truth, constraints, evidence requirements, and action boundaries.
        </p>
      </header>

      <GrokPromptGenerator />

      <article className="content-wrap prose">
        <h2>What does a Grok prompt generator do?</h2>
        <p>
          A Grok prompt generator, sometimes searched as a Grok AI prompt generator,
          helps organize the job before you send it to Grok. Instead of adding decorative
          instructions, this tool separates the result you
          need from the context, source material, constraints, output format, and any
          action that should require your approval.
        </p>
        <p>
          PromptVera generates that structure in your browser. It does not call xAI or
          another paid AI API. You can review the prompt, remove anything unnecessary,
          and paste the final version into Grok.
        </p>

        <h2>Why this structure fits current Grok workflows</h2>
        <p>
          <a
            href="https://docs.x.ai/grok-bot/chat-and-collaboration"
            target="_blank"
            rel="noreferrer"
          >
            Current xAI guidance for Grok-based bots
          </a>{" "}
          recommends leading with the result you need, linking or naming the source of truth,
          stating what the bot may change versus what requires approval, and asking for evidence
          when work needs to be independently reviewed.{" "}
          <a
            href="https://docs.x.ai/developers/grok-4-7"
            target="_blank"
            rel="noreferrer"
          >
            Grok 4.7
          </a>{" "}
          is also positioned for coding, agentic tasks, and knowledge work, so clear boundaries
          and explicit output requirements are especially useful for multi-step jobs.
        </p>

        <h2>How to write a stronger Grok prompt</h2>
        <h3>Lead with the outcome</h3>
        <p>
          Start with the result you want: a comparison, fixed bug, research brief,
          migration plan, rewritten draft, or structured dataset. Avoid spending the
          first paragraph describing process if the real goal can be stated directly.
        </p>

        <h3>Name the source of truth</h3>
        <p>
          If Grok should rely on a specific document, URL, repository, dataset, or
          policy, say so explicitly. This reduces ambiguity and gives the result a
          clearer evidentiary basis.
        </p>

        <h3>Define action boundaries for agentic work</h3>
        <p>
          If Grok can inspect, draft, edit, send, publish, delete, or make external
          changes, state which actions are allowed and which need approval. A prompt
          that distinguishes analysis from execution is easier to review and safer to
          reuse in tool-enabled workflows.
        </p>

        <h3>Ask for evidence when verification matters</h3>
        <p>
          For research or consequential work, request source links, exact file names,
          timestamps, changed values, screenshots, or a concise action log where
          relevant. This makes the result easier to audit instead of relying only on a
          polished explanation.
        </p>

        <h2>Grok prompt example for tool-enabled work</h2>
        <div className="example-box">
          <strong>Rough request</strong>
          <p>Check the repository and prepare the release.</p>
          <strong>Structured Grok prompt</strong>
          <p>
            Inspect the current repository and use the main branch plus the release checklist as
            the source of truth. Identify changes since the last release, failing checks, and any
            migration or configuration risk. Draft release notes and a deployment checklist.
            Do not merge, deploy, publish, delete, or change production. Include file names,
            check results, and unresolved blockers so another engineer can verify the work.
          </p>
        </div>
        <p>
          This version separates inspection from execution and makes the source, evidence, and
          approval boundary explicit.
        </p>

        <h2>Grok prompt generator vs. a generic Prompt Enhancer</h2>
        <p>
          The <Link href="/prompt-enhancer">Prompt Enhancer</Link> creates a portable
          structure for many AI assistants. This Grok Prompt Generator is narrower:
          it emphasizes result-first instructions, source-of-truth, evidence, and
          action boundaries that fit current Grok and Grok-bot workflows.
        </p>
        <p>
          PromptVera is an independent utility site and is not affiliated with or
          endorsed by xAI. Grok and related product names belong to their respective owners.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is this Grok prompt generator free?</summary>
            <p>Yes. The current tool is free and does not require an account.</p>
          </details>
          <details>
            <summary>Does PromptVera send my prompt to Grok?</summary>
            <p>No. The tool builds the prompt in your browser. You decide whether to paste it into Grok afterward.</p>
          </details>
          <details>
            <summary>Can I use it for Grok research or coding tasks?</summary>
            <p>Yes. The generator includes task modes for research, coding, analysis, planning, writing, and general work.</p>
          </details>
          <details>
            <summary>Does Grok always need an action boundary?</summary>
            <p>No. It matters mainly when tools, files, publishing, external systems, or other actions are involved. For a simple question, you can leave that field empty.</p>
          </details>
        </div>
      </article>
    </div>
  );
}
