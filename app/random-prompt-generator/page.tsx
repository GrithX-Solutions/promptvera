import type { Metadata } from "next";
import Link from "next/link";
import { RandomPromptGenerator } from "@/components/RandomPromptGenerator";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Random Prompt Generator – Free Creative Ideas";
const description =
  "Free random prompt generator for writing, stories, characters, journaling, conversations, and creative challenges. No signup required.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/random-prompt-generator" });

export default function RandomPromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd
        name="PromptVera Random Prompt Generator"
        description={description}
        path="/random-prompt-generator"
      />

      <div className="breadcrumb">
        <Link href="/">PromptVera</Link> / Random Prompt Generator
      </div>

      <header className="tool-hero">
        <span className="eyebrow">Free creative idea generator</span>
        <h1>
          Random Prompt <span className="gradient-text">Generator</span>
        </h1>
        <p>
          Generate random prompts for writing, stories, characters, journaling,
          conversations, and creative challenges. Pick a category or let the tool
          surprise you.
        </p>
      </header>

      <RandomPromptGenerator />

      <article className="content-wrap prose">
        <h2>What is a random prompt generator?</h2>
        <p>
          A random prompt generator gives you a starting point when you want to create
          something but do not want to spend the first part of the session deciding what
          the idea should be. PromptVera combines a premise, a focus, a tone, and a twist
          so the result has enough structure to be useful without deciding the entire
          outcome for you.
        </p>
        <p>
          The tool is intentionally broader than a single-purpose writing prompt list.
          You can use it for short fiction, character exercises, reflective journaling,
          dialogue practice, brainstorming, or a small creative challenge. If you leave
          the category on <strong>Any</strong>, each click can move into a different kind
          of prompt.
        </p>

        <h2>How to use random prompts without getting generic results</h2>
        <h3>Give the randomness one anchor</h3>
        <p>
          Random ideas become more useful when one part of the problem is fixed. Add an
          optional theme such as “winter,” “friendship,” “old technology,” or “starting
          over.” The generator will still provide an unexpected premise and twist, but
          the theme gives the result a direction you already care about.
        </p>

        <h3>Choose a category when you know the kind of practice you want</h3>
        <p>
          Use <strong>Writing</strong> for open-ended prose, <strong>Story</strong> for
          plot-driven ideas, <strong>Character</strong> for personality and motivation
          exercises, <strong>Journal</strong> for reflection, <strong>Conversation</strong>
          for dialogue, and <strong>Creative Challenge</strong> for broader ideation.
          Keeping these modes in one tool avoids creating several nearly identical pages
          that differ only by a label.
        </p>

        <h3>Use tone and depth as constraints</h3>
        <p>
          A tone changes how the same premise can be interpreted. A reflective prompt may
          produce a very different direction from a tense or funny one. Depth controls
          how much development the prompt asks for: use Quick for warm-ups, Balanced for
          normal practice, and Deep when you want consequences, motivation, and change.
        </p>

        <h2>Random prompt example</h2>
        <div className="example-box">
          <strong>Category</strong>
          <p>Story · Reflective · Balanced</p>
          <strong>Generated direction</strong>
          <p>
            A night-shift bus driver realizes one passenger has ridden the same circular route
            every evening for a month without ever getting off. Write the first conversation
            between them. Focus on what each person avoids saying, and end the scene with one
            ordinary detail that changes the driver&apos;s understanding of the passenger.
          </p>
        </div>
        <p>
          The example gives you a premise, relationship, tone, and turning point without deciding
          the whole story for you.
        </p>

        <h2>Random prompt generator vs. dedicated prompt tools</h2>
        <p>
          This tool is for idea generation. It is different from the{" "}
          <Link href="/prompt-enhancer">Prompt Enhancer</Link>, which restructures an
          instruction you already have, and the{" "}
          <Link href="/drawing-prompt-generator">Drawing Prompt Generator</Link>, which
          targets visual art and sketching ideas. If you only need a broad creative direction
          rather than a complete prompt, use the{" "}
          <Link href="/random-theme-generator">Random Theme Generator</Link>. Keeping those
          jobs separate makes each tool more useful and keeps the outputs focused on what
          you are actually trying to create.
        </p>
        <p>
          When a random idea needs a complete narrative spine, move it into the{" "}
          <Link href="/story-plot-generator">Story Plot Generator</Link>. For fandom,
          pairing, trope, or alternate-universe ideas, use the{" "}
          <Link href="/fanfic-prompt-generator">Fanfic Prompt Generator</Link>. For poetry-specific
          craft constraints, use the <Link href="/poetry-prompt-generator">Poetry Prompt Generator</Link>.
        </p>

        <h2>Ways to use one generated prompt</h2>
        <ul>
          <li>Write for ten minutes without editing, then keep only the strongest idea.</li>
          <li>Generate the same category again and combine the two prompts.</li>
          <li>Keep the premise but replace the generated twist with your own.</li>
          <li>Use the prompt as a group exercise and compare how different people interpret it.</li>
          <li>Return to the same prompt later with a different tone or depth setting.</li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is the random prompt generator free?</summary>
            <p>Yes. It is free to use and does not require an account.</p>
          </details>
          <details>
            <summary>Does it use an AI API?</summary>
            <p>
              No. The current version combines curated prompt elements in your browser,
              so the generator does not need a paid AI request for each click.
            </p>
          </details>
          <details>
            <summary>Can I use it as a random writing prompt generator?</summary>
            <p>
              Yes. Choose Writing or Story when you want prompts specifically for prose,
              fiction, scenes, or creative writing practice.
            </p>
          </details>
          <details>
            <summary>Can I use the prompts for commercial work?</summary>
            <p>
              Use the generated prompt text as a starting point. You remain
              responsible for reviewing your final work and any third-party service rules
              that apply to how you use it.
            </p>
          </details>
        </div>
      </article>
    </div>
  );
}
