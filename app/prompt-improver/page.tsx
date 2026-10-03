import type { Metadata } from "next";
import Link from "next/link";
import { PromptEnhancer } from "@/components/PromptEnhancer";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "AI Prompt Improver – Free Prompt Optimization Tool";
const description =
  "Free AI prompt improver for refining existing prompts, removing ambiguity and conflicts, and strengthening context, constraints, and output requirements.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/prompt-improver" });

export default function PromptImproverPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd name="PromptVera AI Prompt Improver" description={description} path="/prompt-improver" />
      <div className="breadcrumb"><Link href="/">PromptVera</Link> / Prompt Improver</div>

      <header className="tool-hero">
        <span className="eyebrow">Free AI prompt improver</span>
        <h1>AI Prompt <span className="gradient-text">Improver</span></h1>
        <p>
          Refine an existing prompt without changing its core intent. Remove ambiguity,
          tighten constraints, and make the expected output easier to follow.
        </p>
      </header>

      <PromptEnhancer mode="improve" />

      <article className="content-wrap prose">
        <h2>What is an AI prompt improver?</h2>
        <p>
          An AI prompt improver diagnoses a prompt that already contains a real task and
          makes that task easier to execute consistently. It can clarify vague wording,
          separate requirements from preferences, remove duplicated instructions, resolve
          conflicts, and make the requested output more testable.
        </p>
        <p>
          PromptVera keeps the original intent at the center of the rewrite. The current
          tool runs in your browser and does not send your prompt to a paid third-party AI
          API. You can now name the specific problems you want fixed and list facts, wording,
          fields, constraints, or goals that the rewrite must preserve. Review the result
          before you use it and keep only the changes that support your actual goal.
        </p>

        <h2>How to diagnose a weak prompt before rewriting it</h2>
        <ol>
          <li><strong>Find the main task.</strong> You should be able to state the required action in one clear sentence.</li>
          <li><strong>Mark essential context.</strong> Keep facts, definitions, source material, and assumptions that change the answer.</li>
          <li><strong>Separate hard constraints.</strong> Distinguish requirements from optional preferences.</li>
          <li><strong>Look for contradictions.</strong> Decide which instruction wins when two requirements compete.</li>
          <li><strong>Define the output.</strong> Ask for a result you can inspect, reuse, or validate.</li>
          <li><strong>Delete repetition.</strong> Repeating the same instruction with different adjectives rarely improves control.</li>
        </ol>

        <h2>Prompt improvement example</h2>
        <div className="example-box">
          <strong>Before</strong>
          <p>
            Analyze our landing page. Be very detailed but keep it short. Give me everything that
            is wrong and make it professional. Focus on SEO, conversions, design, copy, speed, and
            user experience. Do not change anything important.
          </p>
          <strong>After</strong>
          <p>
            Audit the landing page for five areas: search intent, copy clarity, conversion friction,
            UX/accessibility, and performance. For each area, identify the three highest-impact
            issues, explain the evidence, and recommend a specific change. Preserve the current offer,
            pricing, and brand positioning. Finish with a prioritized action list of no more than
            ten items.
          </p>
        </div>
        <p>
          The improved version resolves the “detailed but short” conflict, defines what “important”
          means, and turns a vague request for “everything” into a reviewable priority list.
        </p>

        <h2>What should a prompt improver preserve?</h2>
        <p>
          Improvement should not silently change the job. Preserve the user&apos;s objective, source
          material, non-negotiable constraints, intended audience, and important domain terminology.
          Rewrite the structure around those elements rather than replacing them with generic prompt
          engineering language.
        </p>

        <h2>Common fixes that improve prompt reliability</h2>
        <h3>Replace vague adjectives with observable criteria</h3>
        <p>
          Instead of “make it professional,” specify the audience, tone, evidence standard, format,
          or action the output should support.
        </p>

        <h3>Turn hidden priorities into explicit priorities</h3>
        <p>
          If accuracy matters more than speed, or preserving a source matters more than rewriting
          style, say so. The model should not have to infer which requirement wins.
        </p>

        <h3>Remove instructions that do not change the result</h3>
        <p>
          Long role descriptions and repeated reminders can bury the actual task. Keep instructions
          that materially affect content, reasoning, evidence, safety, or output.
        </p>

        <h3>Ask for evidence instead of confidence</h3>
        <p>
          When verification matters, request citations, calculations, source references, changed
          values, or assumptions you can check. Do not rely on wording such as “be accurate.”
        </p>

        <h2>Use the preserve and problems fields as a change contract</h2>
        <p>
          If a prompt already contains important wording or a fragile output schema, put those
          non-negotiable elements in <strong>What must be preserved?</strong>. Use
          <strong> Problems to fix</strong> for known defects such as duplicated rules,
          contradictory length requirements, vague evidence standards, or unclear priorities.
          This gives the improver a clearer boundary than asking it to “optimize everything.”
        </p>

        <h2>Prompt Improver vs. Prompt Enhancer</h2>
        <p>
          Use the <strong>Prompt Improver</strong> when the prompt already has substance and needs
          cleanup or stronger control. Use the{" "}
          <Link href="/prompt-enhancer">AI Prompt Enhancer</Link> when you start with a short idea
          that still needs task structure, context, constraints, and output direction.
        </p>

        <h2>When should you leave a prompt alone?</h2>
        <p>
          Keep a prompt simple when the task is already unambiguous and the model consistently
          returns the result you need. Optimization should remove friction, not add ceremony.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is this AI prompt improver free?</summary>
            <p>Yes. The current tool is free and does not require an account.</p>
          </details>
          <details>
            <summary>Does PromptVera change the purpose of my prompt?</summary>
            <p>The tool aims to preserve the core task while improving clarity and structure. Review the result because only you can confirm that every requirement still matches your intent.</p>
          </details>
          <details>
            <summary>Does the prompt improver call an AI model?</summary>
            <p>No. The current version uses deterministic browser-side rules to restructure the prompt.</p>
          </details>
          <details>
            <summary>Can I use it for coding, research, writing, or business prompts?</summary>
            <p>Yes. The improvement framework is task-agnostic, but you should retain the technical terms and source requirements that matter in your domain.</p>
          </details>
          <details>
            <summary>Should an improved prompt always be longer?</summary>
            <p>No. A better prompt may be shorter if it removes repetition, resolves conflicts, and keeps only instructions that affect the result.</p>
          </details>
          <details>
            <summary>Can I use this as a prompt optimizer?</summary>
            <p>
              Yes, when “optimizer” means improving an existing prompt&apos;s clarity, priorities,
              constraints, and output requirements. PromptVera keeps that intent on this page rather
              than creating a separate near-duplicate optimizer tool.
            </p>
          </details>
        </div>
      </article>
    </div>
  );
}
