import type { Metadata } from "next";
import Link from "next/link";
import { ChatGPTPromptGenerator } from "@/components/ChatGPTPromptGenerator";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "ChatGPT Prompt Generator – Free Structured Prompts";
const description =
  "Free ChatGPT prompt generator for clear tasks, context, source material, audience, constraints, examples, tone, and output format. No signup required.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/chatgpt-prompt-generator" });

export default function ChatGPTPromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd
        name="PromptVera ChatGPT Prompt Generator"
        description={description}
        path="/chatgpt-prompt-generator"
      />

      <div className="breadcrumb">
        <Link href="/">PromptVera</Link> / ChatGPT Prompt Generator
      </div>

      <header className="tool-hero">
        <span className="eyebrow">Free ChatGPT prompt tool</span>
        <h1>
          ChatGPT Prompt <span className="gradient-text">Generator</span>
        </h1>
        <p>
          Turn a rough request into a clearer ChatGPT prompt with an explicit task,
          context, source material, constraints, tone, output format, and optional example.
        </p>
      </header>

      <ChatGPTPromptGenerator />

      <article className="content-wrap prose">
        <h2>What does a ChatGPT prompt generator do?</h2>
        <p>
          A ChatGPT prompt generator helps organize a request before you send it to
          ChatGPT. The goal is not to make every prompt longer. It is to make the
          important parts easier to see: the task, relevant context, source material,
          constraints, audience, tone, and the format you actually want back.
        </p>
        <p>
          PromptVera builds that structure in your browser. It does not send your input
          to ChatGPT or another paid AI API. You can review the generated prompt, remove
          anything that is unnecessary, and paste the final version into ChatGPT.
        </p>

        <h2>What current OpenAI prompting guidance emphasizes</h2>
        <p>
          <a
            href="https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt"
            target="_blank"
            rel="noreferrer"
          >
            OpenAI&apos;s current ChatGPT guidance
          </a>{" "}
          recommends being clear and specific, supplying enough context, stating the tone or style when it matters, and
          refining prompts iteratively based on the response. OpenAI also recommends
          breaking complex work into focused requests when that makes the task easier
          to complete accurately.
        </p>
        <p>
          For longer source material, OpenAI&apos;s prompt-engineering guidance also
          recommends separating instructions from context clearly. This generator uses
          labeled sections and quotation delimiters for source material and examples so
          the task is easier to review before you submit it.
        </p>

        <h2>How to build a better ChatGPT prompt</h2>

        <h3>State the actual task first</h3>
        <p>
          Start with the action you need: compare, rewrite, debug, summarize, plan,
          extract, explain, or create. A clear task is more useful than several lines
          of generic role-playing instructions that do not change the result.
        </p>

        <h3>Add only context that changes the answer</h3>
        <p>
          Useful context includes the current situation, definitions, business rules,
          relevant constraints, or background ChatGPT would not otherwise know.
          You can usually remove context that does not affect the output.
        </p>

        <h3>Separate source material from instructions</h3>
        <p>
          If the task depends on text, notes, research, or data you provide, keep that
          material in its own section. This makes it clearer what ChatGPT should use as
          evidence and what is an instruction about how to handle that evidence.
        </p>

        <h3>Make the requested output testable</h3>
        <p>
          If you need JSON, a table, working code, a step-by-step plan, or a concise
          answer, say so. Specific output requirements are easier to follow and review
          than vague requests such as “make it better” or “make it professional.”
        </p>

        <h3>Use iteration instead of trying to write one perfect prompt</h3>
        <p>
          A first response can reveal missing context or an unclear constraint. Adjust
          the request based on what you learn. For complicated work, several focused
          follow-up prompts can be more effective than forcing every instruction into
          one very large prompt.
        </p>

        <h2>ChatGPT prompt example</h2>
        <div className="example-box">
          <strong>Rough request</strong>
          <p>Summarize this customer feedback.</p>
          <strong>Structured ChatGPT prompt</strong>
          <p>
            Summarize the customer feedback below for the product team. Separate recurring
            complaints, feature requests, positive signals, and one-off comments. Use only the
            supplied feedback as evidence. For each recurring theme, include the number of
            comments that support it and one short representative quote. Finish with the three
            highest-priority product questions the team should investigate next.
          </p>
        </div>
        <p>
          This version defines the audience, evidence boundary, grouping logic, and final
          deliverable instead of asking ChatGPT for a generic summary.
        </p>

        <h2>ChatGPT Prompt Generator vs. Prompt Enhancer</h2>
        <p>
          The <Link href="/prompt-enhancer">Prompt Enhancer</Link> is a portable,
          general-purpose tool that can improve prompts for different AI systems. This
          ChatGPT Prompt Generator focuses on ChatGPT-specific user workflows:
          source material, interaction style, audience, tone, structured output, and
          iterative refinement.
        </p>
        <p>
          PromptVera is an independent utility site and is not affiliated with or
          endorsed by OpenAI. ChatGPT and related product names belong to their
          respective owners.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is this ChatGPT prompt generator free?</summary>
            <p>Yes. The current tool is free and does not require an account.</p>
          </details>
          <details>
            <summary>Does PromptVera send my prompt to ChatGPT?</summary>
            <p>
              No. The tool structures your prompt in the browser. You choose whether
              to paste the result into ChatGPT afterward.
            </p>
          </details>
          <details>
            <summary>Do I need to make every ChatGPT prompt long?</summary>
            <p>
              No. Short prompts can work well when the task is simple. Add context,
              examples, and constraints only when they materially change the result.
            </p>
          </details>
          <details>
            <summary>Should I ask ChatGPT to show its chain of thought?</summary>
            <p>
              No. If you need transparency, ask for concise reasoning, evidence,
              calculations, assumptions, or verification steps that help you review
              the answer rather than requesting hidden internal reasoning.
            </p>
          </details>
        </div>
      </article>
    </div>
  );
}
