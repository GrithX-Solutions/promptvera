import type { Metadata } from "next";
import Link from "next/link";
import { StoryPlotGenerator } from "@/components/StoryPlotGenerator";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Story Plot Generator – Free Plot Ideas";
const description =
  "Free story plot generator for novels, short stories, and scripts. Build a structured plot with a protagonist, conflict, turning points, climax, and resolution.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/story-plot-generator" });

export default function StoryPlotGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd
        name="PromptVera Story Plot Generator"
        description={description}
        path="/story-plot-generator"
      />

      <div className="breadcrumb">
        <Link href="/">PromptVera</Link> / Story Plot Generator
      </div>

      <header className="tool-hero">
        <span className="eyebrow">Free story planning tool</span>
        <h1>
          Story Plot <span className="gradient-text">Generator</span>
        </h1>
        <p>
          Turn a premise—or a blank page—into a structured story arc with a
          protagonist, goal, conflict, turning points, climax, and resolution.
        </p>
      </header>

      <StoryPlotGenerator />

      <article className="content-wrap prose">
        <h2>What is a story plot generator?</h2>
        <p>
          A story plot generator helps you move from an idea to a sequence of
          connected events. Instead of returning only a one-line premise, this
          tool builds a narrative spine: who wants something, what blocks them,
          what raises the stakes, where the story changes direction, and how the
          central conflict can resolve.
        </p>
        <p>
          PromptVera&apos;s plot story generator is designed for planning rather
          than prose writing. You can use the outline for a short story, novella,
          novel, screenplay, game narrative, or as a starting point for your own
          beat sheet. Leave the optional premise open when you want to use it as a
          random story plot generator and explore an unexpected combination.
        </p>

        <h2>How to build a stronger story plot</h2>

        <h3>Start with a goal that can fail</h3>
        <p>
          A protagonist needs a concrete objective. The plot becomes easier to
          shape when readers can tell what success looks like and what the
          character risks by failing, delaying, or choosing the wrong method.
        </p>

        <h3>Use complications that change the problem</h3>
        <p>
          Repeating the same obstacle at a larger scale creates motion without
          development. Strong complications remove options, expose new
          information, create conflicting obligations, or force the protagonist
          to revise an earlier assumption.
        </p>

        <h3>Let the midpoint alter the strategy</h3>
        <p>
          A useful midpoint is more than another event. It changes how the
          protagonist understands the conflict. After it, the character should
          make different decisions because the story now means something
          different than it did at the beginning.
        </p>

        <h3>Make the climax resolve the central choice</h3>
        <p>
          The climax works best when it tests the goal, flaw, relationship, or
          belief that has driven the story. The final outcome should come from a
          character decision shaped by earlier events rather than an unrelated
          coincidence.
        </p>

        <h2>Story Plot Generator vs. Short Story Prompt Generator</h2>
        <p>
          The <Link href="/short-story-prompt-generator">Short Story Prompt Generator</Link>{" "}
          is designed to give you a compact fiction prompt with a protagonist,
          setting, obstacle, point of view, and optional twist. This Story Plot
          Generator goes further into structure by mapping turning points from
          the inciting incident through the climax and resolution.
        </p>

        <h2>Story Plot Generator vs. Horror Story Plot Generator</h2>
        <p>
          This page works across genres. Use the{" "}
          <Link href="/horror-story-plot-generator">Horror Story Plot Generator</Link>{" "}
          when you specifically need fear source, threat rules, escalation,
          reveal, survival cost, and a horror-focused ending.
        </p>

        <h2>Can I use this as a novel or book plot generator?</h2>
        <p>
          Yes. Choose the novel scope and treat each generated beat as a planning
          checkpoint rather than a complete chapter outline. For longer fiction,
          you can expand every major complication into several scenes, add
          subplots, and give secondary characters their own goals that intersect
          with the central conflict.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is this story plot generator free?</summary>
            <p>Yes. The current tool is free and does not require an account.</p>
          </details>
          <details>
            <summary>Can I generate plots for different genres?</summary>
            <p>
              Yes. You can select fantasy, romance, mystery, thriller, science
              fiction, adventure, historical, contemporary, drama, or let the
              tool choose a direction.
            </p>
          </details>
          <details>
            <summary>Can I use it for a novel?</summary>
            <p>
              Yes. Select Novel as the story scope, then expand the generated
              turning points into scenes, chapters, and subplots.
            </p>
          </details>
          <details>
            <summary>Does this tool use an AI API?</summary>
            <p>
              No. The current version combines curated story-structure elements
              in your browser, so each generation does not require a paid AI
              request.
            </p>
          </details>
        </div>
      </article>
    </div>
  );
}
