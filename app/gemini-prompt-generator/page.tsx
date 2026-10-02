import type { Metadata } from "next";
import Link from "next/link";
import { GeminiPromptGenerator } from "@/components/GeminiPromptGenerator";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const title = "Gemini Prompt Generator – Free Prompts";
const description =
  "Free Gemini prompt generator for clear tasks, context, multimodal inputs, parameters, constraints, examples, verbosity, and structured output.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/gemini-prompt-generator" },
};

export default function GeminiPromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd
        name="PromptVera Gemini Prompt Generator"
        description={description}
        path="/gemini-prompt-generator"
      />

      <div className="breadcrumb">
        <Link href="/">PromptVera</Link> / Gemini Prompt Generator
      </div>

      <header className="tool-hero">
        <span className="eyebrow">Free Gemini prompt tool</span>
        <h1>
          Gemini Prompt <span className="gradient-text">Generator</span>
        </h1>
        <p>
          Turn a rough request into a clearer Gemini prompt with explicit context,
          input modality, defined parameters, constraints, verbosity, examples, and output format.
        </p>
      </header>

      <GeminiPromptGenerator />

      <article className="content-wrap prose">
        <h2>What does a Gemini prompt generator do?</h2>
        <p>
          A Gemini prompt generator helps organize a request before you send it to
          Gemini. Rather than making every prompt longer, the goal is to make the
          important pieces unambiguous: the task, context, input type, definitions,
          constraints, audience, output format, and level of detail.
        </p>
        <p>
          PromptVera builds that structure in your browser. It does not send your input
          to Gemini or another paid AI API. You can review the generated prompt, remove
          anything unnecessary, and paste the final version into Gemini.
        </p>

        <h2>What current Google Gemini prompting guidance emphasizes</h2>
        <p>
          Google&apos;s current Gemini prompting documentation recommends clear and
          specific instructions, consistent structure, explicit definitions for
          ambiguous parameters, and direct control over output verbosity. It also
          recommends clearly referencing each relevant input when working with text,
          images, audio, or video.
        </p>
        <p>
          For large context windows, Google recommends placing the long context before
          the specific question or task and using a clear transition into the request.
          This generator includes an optional long-context mode for that workflow.
        </p>

        <h2>How to build a stronger Gemini prompt</h2>

        <h3>State the result directly</h3>
        <p>
          Start with the action you need Gemini to perform: compare, summarize,
          classify, analyze, rewrite, plan, debug, or create. Avoid unnecessary
          persuasive wording when a precise instruction will do.
        </p>

        <h3>Define ambiguous terms and parameters</h3>
        <p>
          If words such as “qualified,” “high quality,” “fast,” or “successful” have a
          specific meaning in your task, define them. Explicit definitions reduce the
          amount of interpretation Gemini has to do before producing the result.
        </p>

        <h3>Reference multimodal inputs clearly</h3>
        <p>
          When your task includes images, audio, video, or mixed inputs, tell Gemini
          what each input is for. For example, specify whether an image should be
          described, compared with another image, used as evidence, or treated only as
          a style reference.
        </p>

        <h3>Control verbosity and output format</h3>
        <p>
          If you want a concise answer, detailed analysis, JSON, code, a table, or an
          ordered plan, make that requirement explicit. A testable output requirement
          is easier to follow than a vague request for a “better” response.
        </p>

        <h3>Iterate instead of overloading one prompt</h3>
        <p>
          Complex tasks can often be split into smaller steps. If a response reveals a
          missing definition or an unclear assumption, refine the next prompt rather
          than adding every possible instruction to the first one.
        </p>

        <h2>Gemini Prompt Generator vs. Prompt Enhancer</h2>
        <p>
          The <Link href="/prompt-enhancer">Prompt Enhancer</Link> creates a portable
          prompt structure that can work across several AI assistants. This Gemini
          Prompt Generator is narrower: it adds controls for multimodal inputs,
          long-context ordering, explicit parameters, and output verbosity that align
          with current Gemini prompting guidance.
        </p>
        <p>
          PromptVera is an independent utility site and is not affiliated with or
          endorsed by Google. Gemini and related product names belong to their
          respective owner.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is this Gemini prompt generator free?</summary>
            <p>Yes. The current tool is free and does not require an account.</p>
          </details>
          <details>
            <summary>Does PromptVera send my prompt to Gemini?</summary>
            <p>No. The tool structures the prompt in your browser. You choose whether to paste it into Gemini afterward.</p>
          </details>
          <details>
            <summary>Can I use it for image, audio, or video prompts?</summary>
            <p>
              Yes. Use the Input type control to tell the generated prompt which
              modalities matter and make the task explicitly reference them.
            </p>
          </details>
          <details>
            <summary>When should I use long-context mode?</summary>
            <p>
              Use it when the task depends on a large document, transcript, dataset, or
              other long context. The generator places the context before the task so
              the request follows the material it refers to.
            </p>
          </details>
        </div>
      </article>
    </div>
  );
}
