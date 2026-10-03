import type { Metadata } from "next";
import Link from "next/link";
import { OCPromptGenerator } from "@/components/OCPromptGenerator";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "OC Prompt Generator – Original Character Ideas";
const description =
  "Free OC prompt generator for original character ideas with archetype, personality, motivation, flaw, relationships, story hooks, and visual design cues.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/oc-prompt-generator" });

export default function OCPromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd
        name="PromptVera OC Prompt Generator"
        description={description}
        path="/oc-prompt-generator"
      />

      <div className="breadcrumb">
        <Link href="/">PromptVera</Link> / OC Prompt Generator
      </div>

      <header className="tool-hero">
        <span className="eyebrow">Free original character idea tool</span>
        <h1>
          OC Prompt <span className="gradient-text">Generator</span>
        </h1>
        <p>
          Generate an original character concept with a setting, archetype,
          personality contrast, motivation, flaw, relationship hook, scene test,
          and optional visual design direction.
        </p>
      </header>

      <OCPromptGenerator />

      <article className="content-wrap prose">
        <h2>What is an OC prompt generator?</h2>
        <p>
          An OC prompt generator helps you create an original character without reducing the concept to a random list of traits. “OC” is the common shorthand for original character. A useful
          character concept connects personality, motivation, flaws, relationships,
          setting, and visual choices so the character can actually make decisions
          inside a story or creative project.
        </p>
        <p>
          PromptVera&apos;s generator can support both writers and artists. You can use
          the story-focused options for relationship and scene ideas, the visual option
          for design direction, or both when you want the character concept to work on
          the page and in artwork.
        </p>

        <h2>How to build a stronger original character</h2>

        <h3>Use a personality contrast instead of a trait list</h3>
        <p>
          “Brave, smart, kind” does not tell you how a character behaves when those
          qualities conflict. A contrast such as “patient but stubborn” or “confident
          in public but uncertain in private” creates decisions, inconsistencies, and
          room for development.
        </p>

        <h3>Give the character a motivation that can create choices</h3>
        <p>
          A motivation becomes useful when it can compete with another value. Wanting
          recognition, protecting a community, keeping a promise, or repairing a past
          mistake can all create situations where the character must choose what matters
          most rather than simply pursue a goal without cost.
        </p>

        <h3>Make flaws affect behavior</h3>
        <p>
          A flaw should change what the character does. Avoiding help, communicating
          too little, misreading disagreement, or staying loyal for too long can create
          consequences. That is more useful for writing than adding a weakness that
          never influences the plot or relationships.
        </p>

        <h3>Connect visual design to history or function</h3>
        <p>
          Character design becomes more specific when an object, repair, material,
          silhouette, or clothing choice suggests how the character lives. Practical
          design details can communicate occupation, habits, priorities, and history
          without requiring a paragraph of exposition.
        </p>

        <h2>OC prompt example</h2>
        <div className="example-box">
          <strong>Original character concept</strong>
          <p>
            A city archivist who is patient with damaged records but impatient with people.
            Their main goal is to restore a missing neighborhood history before redevelopment
            begins. Their flaw is refusing help because they equate dependence with losing
            control. Visual cue: repaired satchel, ink-stained cuffs, and a set of mismatched
            brass keys collected from demolished buildings. Scene test: a resident offers the
            one document they need, but only if the archivist admits why the project is personal.
          </p>
        </div>
        <p>
          The concept connects motivation, flaw, visual design, and a decision point so the
          character can drive a story instead of existing as a trait list.
        </p>

        <h2>OC Prompt Generator vs. Drawing Prompt Generator</h2>
        <p>
          The <Link href="/drawing-prompt-generator">Drawing Prompt Generator</Link>
          creates broader art and drawing ideas. This OC generator is centered on one
          original character and connects visual choices to personality, motivation,
          role, relationships, and story behavior.
        </p>

        <h2>OC Prompt Generator vs. Fanfic Prompt Generator</h2>
        <p>
          The <Link href="/fanfic-prompt-generator">Fanfic Prompt Generator</Link>
          assumes you are working with an existing fandom, canon, pairing, or known
          character. An OC prompt starts from a new character concept. You can later
          adapt that character to an original world or, where appropriate, use them in
          a fandom project.
        </p>

        <h2>Ways to develop one OC prompt</h2>
        <ul>
          <li>Write one scene where the character&apos;s motivation and flaw point toward opposite choices.</li>
          <li>Change the setting while keeping the same personality and see which traits still make sense.</li>
          <li>Design one object the character owns and explain why they would repair it instead of replace it.</li>
          <li>Create a second character whose goal is compatible but whose method is not.</li>
          <li>Remove any trait that never affects a decision, relationship, visual choice, or consequence.</li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>What does OC mean?</summary>
            <p>
              OC commonly means “original character”: a character created by you rather
              than a pre-existing character from a published story, game, show, or other work.
            </p>
          </details>
          <details>
            <summary>Is this OC prompt generator free?</summary>
            <p>Yes. The current generator is free and does not require an account.</p>
          </details>
          <details>
            <summary>Can artists use this generator?</summary>
            <p>
              Yes. Enable the visual design option to add a character-design cue for drawing, illustration, or concept development.
            </p>
          </details>
          <details>
            <summary>Does it use an AI API?</summary>
            <p>
              No. The current tool combines curated character-building elements in your
              browser and does not require a paid AI request for each generation.
            </p>
          </details>
        </div>
      </article>
    </div>
  );
}
