import type { Metadata } from "next";
import Link from "next/link";
import { PromptEnhancer } from "@/components/PromptEnhancer";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "AI Prompt Enhancer – Free Prompt Enhancement Tool";
const description =
  "Free AI prompt enhancer for turning rough instructions into clearer prompts with goals, context, constraints, examples, and usable output requirements.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/prompt-enhancer" });

export default function PromptEnhancerPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd name="PromptVera AI Prompt Enhancer" description={description} path="/prompt-enhancer" />
      <div className="breadcrumb"><Link href="/">PromptVera</Link> / Prompt Enhancer</div>

      <header className="tool-hero">
        <span className="eyebrow">Free AI prompt enhancer</span>
        <h1>AI Prompt <span className="gradient-text">Enhancer</span></h1>
        <p>
          Turn a short or vague instruction into a clearer prompt with an explicit task,
          useful context, constraints, and output direction.
        </p>
      </header>

      <PromptEnhancer />

      <article className="content-wrap prose">
        <h2>What does an AI prompt enhancer do?</h2>
        <p>
          An AI prompt enhancer adds useful structure to an instruction you already have.
          It clarifies the task, the result you want, the context that changes the answer,
          the constraints the model should follow, and the format you expect back.
          Good prompt enhancement removes ambiguity instead of simply making a prompt longer.
        </p>
        <p>
          PromptVera builds that structure in your browser. The current enhancer does not
          send your text to a paid third-party AI API, and you do not need an account to use it.
          You can edit every generated section before you use the prompt elsewhere.
        </p>

        <h2>When should you enhance a prompt?</h2>
        <p>
          Enhance a prompt when the model understands the topic but keeps missing the job.
          Common signs include generic answers, ignored constraints, inconsistent formatting,
          or responses that require the same correction every time.
        </p>
        <ul>
          <li><strong>The answer is too generic:</strong> clarify the audience, goal, and decision the output should support.</li>
          <li><strong>The model ignores requirements:</strong> separate must-follow constraints from preferences.</li>
          <li><strong>The response has the wrong shape:</strong> specify the format, length, sections, fields, or level of detail.</li>
          <li><strong>The task depends on context:</strong> add only the background, definitions, or source material that changes the answer.</li>
          <li><strong>You repeat the task often:</strong> turn the request into a stable template with clear placeholders.</li>
        </ul>

        <h2>The five parts of a stronger prompt</h2>
        <ol>
          <li><strong>Task:</strong> state the action clearly: compare, summarize, rewrite, plan, debug, extract, classify, or create.</li>
          <li><strong>Context:</strong> add information the model needs to make the right decision.</li>
          <li><strong>Constraints:</strong> identify boundaries such as scope, length, exclusions, required sources, or approval limits.</li>
          <li><strong>Quality criteria:</strong> explain what a useful result must include or avoid.</li>
          <li><strong>Output format:</strong> request the structure you will actually use, such as a table, draft, checklist, JSON object, or concise explanation.</li>
        </ol>
        <p>
          Not every prompt needs all five parts. Use the smallest amount of structure that removes
          meaningful uncertainty.
        </p>

        <h2>Prompt enhancement example</h2>
        <div className="example-box">
          <strong>Rough prompt</strong>
          <p>Write copy for my cybersecurity service.</p>
          <strong>Stronger direction</strong>
          <p>
            Write homepage copy for a managed cybersecurity service aimed at small IT teams.
            Focus on continuous monitoring, incident response, and clear escalation. Use a calm,
            technical tone. Avoid fear-based claims and unsupported security guarantees. Return a
            headline, short value proposition, three benefit sections, and one call to action.
          </p>
        </div>
        <p>
          The stronger version does not add decorative language. It gives the model a target
          audience, scope, tone, claim boundary, and usable deliverable.
        </p>

        <h2>Common prompt problems an enhancer should fix</h2>
        <h3>Vague success criteria</h3>
        <p>
          Words such as “better,” “professional,” or “high quality” leave too much room for
          interpretation. Replace them with criteria you can check.
        </p>

        <h3>Conflicting instructions</h3>
        <p>
          A prompt cannot be both “extremely detailed” and “under 100 words” without a clear
          priority. Resolve conflicts before adding more instructions.
        </p>

        <h3>Too much irrelevant context</h3>
        <p>
          Background helps only when it changes the answer. Remove history, examples, and
          requirements that do not affect the task.
        </p>

        <h3>Formatting before thinking</h3>
        <p>
          A rigid output schema cannot rescue an unclear objective. Clarify the job first, then
          define the format.
        </p>

        <h2>When a short prompt is already enough</h2>
        <p>
          Do not enhance a prompt just because it is short. “Translate this paragraph into Spanish”
          may already express the complete task if the text and target language are clear.
          Extra roles, adjectives, and formatting can make simple work harder to review.
        </p>

        <h2>Prompt Enhancer vs. Prompt Improver</h2>
        <p>
          Use this <strong>Prompt Enhancer</strong> when your starting instruction lacks structure
          or important detail. Use the{" "}
          <Link href="/prompt-improver">AI Prompt Improver</Link> when you already have a developed
          prompt and want to remove ambiguity, repetition, conflicts, or weak output requirements
          without changing its core intent.
        </p>

        <h2>Use a model-specific generator when the workflow matters</h2>
        <p>
          A portable prompt works well for many tasks, but some workflows benefit from model-specific
          controls. PromptVera also provides dedicated generators for{" "}
          <Link href="/chatgpt-prompt-generator">ChatGPT</Link>,{" "}
          <Link href="/gemini-prompt-generator">Gemini</Link>,{" "}
          <Link href="/claude-prompt-generator">Claude</Link>, and{" "}
          <Link href="/grok-prompt-generator">Grok</Link>.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is the PromptVera AI prompt enhancer free?</summary>
            <p>Yes. The current browser-based enhancer is free and does not require an account.</p>
          </details>
          <details>
            <summary>Does PromptVera send my prompt to ChatGPT or another AI model?</summary>
            <p>No. The current enhancer uses browser-side prompt-structuring rules. You choose where to use the finished prompt.</p>
          </details>
          <details>
            <summary>Does a longer prompt produce a better answer?</summary>
            <p>No. Length only helps when the added words supply useful context, constraints, examples, or output requirements.</p>
          </details>
          <details>
            <summary>Can I use the enhanced prompt with different AI models?</summary>
            <p>Yes. The output uses readable, model-agnostic sections that you can edit for the assistant or workflow you use.</p>
          </details>
          <details>
            <summary>Should I keep every section the enhancer adds?</summary>
            <p>No. Remove anything that does not affect the task. A concise prompt with the right information is usually easier to test and reuse.</p>
          </details>
        </div>
      </article>
    </div>
  );
}
