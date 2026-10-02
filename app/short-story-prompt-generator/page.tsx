import type { Metadata } from "next";
import Link from "next/link";
import { ShortStoryPromptGenerator } from "@/components/ShortStoryPromptGenerator";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Short Story Prompt Generator – Free Story Ideas";
const description =
  "Free short story prompt generator with genre, protagonist, goal, obstacle, setting, point of view, length, and optional story twist.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/short-story-prompt-generator" });

export default function ShortStoryPromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd
        name="PromptVera Short Story Prompt Generator"
        description={description}
        path="/short-story-prompt-generator"
      />

      <div className="breadcrumb">
        <Link href="/">PromptVera</Link> / Short Story Prompt Generator
      </div>

      <header className="tool-hero">
        <span className="eyebrow">Free short fiction idea tool</span>
        <h1>
          Short Story Prompt <span className="gradient-text">Generator</span>
        </h1>
        <p>
          Generate a focused short-fiction premise with a protagonist, immediate goal,
          obstacle, setting, point of view, length target, and optional story turn.
        </p>
      </header>

      <ShortStoryPromptGenerator />

      <article className="content-wrap prose">
        <h2>What is a short story prompt generator?</h2>
        <p>
          A short story prompt generator gives you enough structure to begin a piece of
          fiction without deciding the entire plot for you. A useful short-story idea
          usually needs more than a topic: it needs a character who wants something,
          an obstacle that creates pressure, a setting that affects the action, and a
          choice that can change the situation.
        </p>
        <p>
          PromptVera combines those elements into one compact premise. You can choose a
          genre, point of view, and approximate length, add an optional theme, and
          decide whether the generator should include a possible turn. The result is
          designed for drafting rather than for automatically writing the story.
        </p>

        <h2>How to turn a story prompt into a complete short story</h2>

        <h3>Give the protagonist one immediate goal</h3>
        <p>
          Short fiction benefits from focus. A character may have a complicated life,
          but the story usually becomes easier to shape when one immediate goal drives
          the scene: recover something, persuade someone, reach a place, hide a mistake,
          keep a promise, or make a decision before time runs out.
        </p>

        <h3>Make the obstacle force a choice</h3>
        <p>
          An obstacle is more useful when it cannot be solved by simply trying harder.
          A deadline, conflicting loyalty, incomplete information, or a cost attached
          to the obvious solution creates a decision. That decision gives the ending a
          connection to character rather than leaving the resolution to coincidence.
        </p>

        <h3>Use setting as part of the problem</h3>
        <p>
          A train station before the last departure, a neighborhood during a power
          outage, or a small hotel preparing for a storm changes what characters can
          do. Treat the setting as a source of limits, opportunities, and sensory
          detail instead of only as background decoration.
        </p>

        <h3>Match the premise to the length</h3>
        <p>
          Flash fiction works best when the story can turn on one decisive moment.
          A standard short story can support a clearer escalation and change. A longer
          short story may contain several scenes, but it still benefits from one main
          conflict and one central character arc.
        </p>

        <h2>Short story prompts vs. random writing prompts</h2>
        <p>
          The <Link href="/random-prompt-generator">Random Prompt Generator</Link> is
          intentionally broad and can generate writing, character, journal,
          conversation, and creative-challenge ideas. This page is specifically for
          short fiction, so every generated result includes story mechanics such as a
          protagonist, goal, obstacle, opening direction, point of view, and length.
        </p>
        <p>
          For stories based on existing characters or fictional worlds, use the{" "}
          <Link href="/fanfic-prompt-generator">Fanfic Prompt Generator</Link>. That
          tool adds fandom-specific controls such as canon approach, relationship
          dynamics, pairings, and tropes.
        </p>

        <h2>Ways to develop one short story prompt</h2>
        <ul>
          <li>Write the opening scene without planning the ending, then identify the strongest unresolved choice.</li>
          <li>Keep the protagonist and goal but regenerate the obstacle to test a different kind of pressure.</li>
          <li>Write the same premise in first person and close third person to compare narrative distance.</li>
          <li>Remove the suggested twist if the story already contains a more natural turn.</li>
          <li>After drafting, check whether the ending follows from a character decision made earlier in the story.</li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is this short story prompt generator free?</summary>
            <p>Yes. The current tool is free and does not require an account.</p>
          </details>
          <details>
            <summary>Can I use it for flash fiction?</summary>
            <p>
              Yes. Choose Flash as the length target to get a prompt framed around one
              decisive scene with minimal backstory.
            </p>
          </details>
          <details>
            <summary>Does the generator write the story for me?</summary>
            <p>
              No. It generates the premise and craft constraints. You write and revise
              the story itself.
            </p>
          </details>
          <details>
            <summary>Does it use an AI API?</summary>
            <p>
              No. The current generator combines curated story elements in your browser,
              so each click does not require a paid AI request.
            </p>
          </details>
        </div>
      </article>
    </div>
  );
}
