import type { Metadata } from "next";
import Link from "next/link";
import { FanficPromptGenerator } from "@/components/FanficPromptGenerator";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Fanfic Prompt Generator – Free Fanfiction Ideas";
const description =
  "Free fanfic prompt generator for fandom stories, pairings, OTP ideas, tropes, canon divergence, alternate universes, conflict, and tone.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/fanfic-prompt-generator" });

export default function FanficPromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd
        name="PromptVera Fanfic Prompt Generator"
        description={description}
        path="/fanfic-prompt-generator"
      />

      <div className="breadcrumb">
        <Link href="/">PromptVera</Link> / Fanfic Prompt Generator
      </div>

      <header className="tool-hero">
        <span className="eyebrow">Free fanfiction idea tool</span>
        <h1>Fanfic Prompt <span className="gradient-text">Generator</span></h1>
        <p>
          Generate fanfiction ideas with a relationship dynamic, trope, tone,
          canon approach, setting, conflict, opening hook, and ending direction.
        </p>
      </header>

      <FanficPromptGenerator />

      <article className="content-wrap prose">
        <h2>What is a fanfic prompt generator?</h2>
        <p>
          A fanfic prompt generator gives you a story situation that can be adapted to
          characters and a fictional world you already know. Unlike a generic story
          prompt, fanfiction usually starts with existing characterization,
          relationships, canon events, or recognizable world rules. The prompt should
          create a new situation without pretending to know source details you have not
          supplied.
        </p>
        <p>
          PromptVera lets you enter the fandom, characters, pairing, or group yourself.
          The generator then adds a relationship dynamic, trope, tone, canon approach,
          setting, conflict, opening hook, and ending direction. That makes the output
          useful as a starting point while leaving canon-specific decisions with you.
        </p>

        <h2>How to use fanfiction prompts without losing the characters</h2>
        <h3>Start from motivation, not only the trope</h3>
        <p>
          Tropes such as forced proximity, found family, hurt/comfort, canon divergence,
          or an alternate universe can create a useful setup, but the story becomes more
          convincing when the characters still want, fear, avoid, and misunderstand
          things in ways that fit them. Use the generated conflict as pressure on the
          characters rather than as a replacement for characterization.
        </p>

        <h3>Choose how closely the story should follow canon</h3>
        <p>
          Canon-compliant prompts fit around established events. Canon-adjacent prompts
          allow invented scenes without changing the larger source story. Canon-divergent
          prompts change one known event or decision and follow the consequences.
          Alternate-universe prompts move the characters into a different setting while
          preserving the traits and relationship tensions that make them recognizable.
        </p>

        <h3>Use pairing or OTP prompts as relationship prompts</h3>
        <p>
          If you are using the page as an OTP prompt generator, or your idea centers on
          another pairing, enter the characters in the pairing field and choose a
          relationship dynamic. The generator is intentionally
          general-audience and focuses on story, emotion, conflict, humor, comfort,
          adventure, and relationship development rather than explicit sexual content.
        </p>

        <h2>Fanfic prompt example</h2>
        <div className="example-box">
          <strong>Setup</strong>
          <p>Canon-divergent · Rivals · Hurt/comfort · Tense</p>
          <strong>Generated direction</strong>
          <p>
            After a mission goes wrong, Character A hides an injury because admitting it would
            force them to leave the team. Character B notices the change in their fighting style
            and confronts them in private. The scene should begin as an argument about trust and
            end with both characters realizing they have been protecting different versions of
            the same secret.
          </p>
        </div>
        <p>
          The setup adds pressure to the relationship while leaving fandom-specific history,
          dialogue, and canon details for you to supply.
        </p>

        <h2>Fanfic prompt generator vs. random story prompts</h2>
        <p>
          The <Link href="/random-prompt-generator">Random Prompt Generator</Link> can
          create broad writing and story ideas without relying on an existing fictional
          world. This fanfic generator is narrower: it assumes you are adapting known
          characters or a fandom and gives you controls for canon relationship, tropes,
          pairings, and character dynamics.
        </p>
        <p>
          If you want an original short-fiction premise with no fandom context, the
          random generator is usually the better starting point. Keeping those intents
          separate avoids turning both pages into the same story idea tool.
        </p>
        <p>
          For a new character with no existing canon, use the{" "}
          <Link href="/oc-prompt-generator">OC Prompt Generator</Link>. If you already have
          the fandom setup but need a full sequence of turning points, use the{" "}
          <Link href="/story-plot-generator">Story Plot Generator</Link> to expand the premise
          into a broader narrative spine.
        </p>

        <h2>Ways to develop one fanfic prompt</h2>
        <ul>
          <li>Write the scene from each character&apos;s point of view and compare what changes.</li>
          <li>Keep the conflict but switch from canon-adjacent to canon-divergent.</li>
          <li>Use the opening hook for a one-shot, then expand only if the scene creates a larger consequence.</li>
          <li>Replace the generated trope while keeping the same relationship dynamic.</li>
          <li>Check every canon-specific assumption against the source before building the plot around it.</li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is this fanfic prompt generator free?</summary>
            <p>Yes. The current generator is free and does not require an account.</p>
          </details>
          <details>
            <summary>Can I use it as a fanfiction prompt generator?</summary>
            <p>Yes. “Fanfic prompt generator” and “fanfiction prompt generator” describe the same core tool here.</p>
          </details>
          <details>
            <summary>Can I generate OTP prompts?</summary>
            <p>Yes. Enter the pairing or characters and select a relationship dynamic. The tool focuses on general-audience relationship and story prompts.</p>
          </details>
          <details>
            <summary>Can I generate AU or trope ideas?</summary>
            <p>
              Yes. Use the canon approach and trope controls to explore alternate universes,
              canon divergence, relationship tropes, and other fandom-aware starting points.
            </p>
          </details>
          <details>
            <summary>Does PromptVera know the canon of every fandom?</summary>
            <p>No. The browser-side generator does not look up fandom lore. You provide the fandom and characters, and you should correct any generated idea that conflicts with canon.</p>
          </details>
        </div>
      </article>
    </div>
  );
}
