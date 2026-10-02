import type { Metadata } from "next";
import Link from "next/link";
import { PoetryPromptGenerator } from "@/components/PoetryPromptGenerator";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Poetry Prompt Generator – Free Poem Ideas";
const description =
  "Free poetry prompt generator for poem ideas, forms, imagery, moods, perspectives, and craft constraints. Generate a fresh poetry writing prompt instantly.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/poetry-prompt-generator" });

export default function PoetryPromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd
        name="PromptVera Poetry Prompt Generator"
        description={description}
        path="/poetry-prompt-generator"
      />

      <div className="breadcrumb">
        <Link href="/">PromptVera</Link> / Poetry Prompt Generator
      </div>

      <header className="tool-hero">
        <span className="eyebrow">Free poetry writing tool</span>
        <h1>
          Poetry Prompt <span className="gradient-text">Generator</span>
        </h1>
        <p>
          Generate poem prompts with a subject, central image, emotional tension,
          poetic form, mood, perspective, and craft challenge—without needing an account.
        </p>
      </header>

      <PoetryPromptGenerator />

      <article className="content-wrap prose">
        <h2>What is a poetry prompt generator?</h2>
        <p>
          A poetry prompt generator gives you a starting condition for a poem rather
          than writing the poem for you. A useful prompt does more than name a topic.
          It creates friction: an image to notice, an emotional tension to explore,
          a point of view, and a craft decision that can push the draft somewhere
          you may not have reached on your own.
        </p>
        <p>
          PromptVera combines those elements into one poetry writing prompt. You can
          keep every instruction, ignore the parts that do not fit, or regenerate
          until one detail creates momentum. The goal is not to make every poem look
          the same. It is to help you get past the empty-page decision of what to
          write about and how to begin.
        </p>

        <h2>How to get more from a poem prompt</h2>

        <h3>Begin with the image, not the explanation</h3>
        <p>
          Abstract themes such as loss, belonging, distance, or hope become more
          interesting when the poem has something concrete to hold onto. A porch
          light at dawn, handwriting on an old label, rain darkening stone, or shoes
          beside a door can carry meaning without the speaker naming that meaning
          immediately.
        </p>

        <h3>Use emotional tension instead of a single emotion</h3>
        <p>
          Poems often gain energy when two feelings exist at the same time. Relief
          mixed with guilt, affection mixed with resentment, or hope that feels
          premature creates more room for discovery than simply instructing yourself
          to write a “sad poem” or a “happy poem.”
        </p>

        <h3>Treat form as a creative constraint</h3>
        <p>
          The generator can suggest free verse, a short haiku-style poem, a
          sonnet-style structure, an ode, a prose poem, spoken word, or a narrative
          poem. These are starting frameworks rather than automatic guarantees of
          formal mastery. If you choose a strict traditional form, review its actual
          meter, rhyme, line, or stanza requirements while revising your draft.
        </p>

        <h2>Poetry prompts vs. a random prompt generator</h2>
        <p>
          The <Link href="/random-prompt-generator">Random Prompt Generator</Link> is
          designed for broad writing, story, character, journal, dialogue, and
          ideation prompts. This page is narrower. Its random combinations are built
          around poetic craft: image, compression, perspective, emotional tension,
          form, and a turn in thought.
        </p>
        <p>
          If you want a visual idea to sketch rather than a poem to write, use the{" "}
          <Link href="/drawing-prompt-generator">Drawing Prompt Generator</Link>. Keeping
          these tools separate makes the output more relevant and avoids treating every
          creative task as the same kind of prompt.
        </p>

        <h2>Ways to practice with poetry prompts</h2>
        <ul>
          <li>Write the same prompt once in free verse and once in a fixed or semi-fixed form.</li>
          <li>Keep the central image but change the speaker from first person to second person.</li>
          <li>Draft quickly, then remove every line that explains what an image already shows.</li>
          <li>Write two endings: one that resolves the tension and one that leaves it open.</li>
          <li>Regenerate until you find one constraint you resist, then use that constraint on purpose.</li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is this poetry prompt generator free?</summary>
            <p>Yes. It is free to use and does not require an account.</p>
          </details>
          <details>
            <summary>Can I use it as a poem prompt generator?</summary>
            <p>
              Yes. “Poetry prompt generator” and “poem prompt generator” describe the
              same core intent here: getting a structured idea for a poem you will write.
            </p>
          </details>
          <details>
            <summary>Does PromptVera write the poem for me?</summary>
            <p>
              No. This tool generates the writing prompt and craft constraints. The poem
              itself remains yours to draft and revise.
            </p>
          </details>
          <details>
            <summary>Does the tool use an AI API?</summary>
            <p>
              No. The current generator combines curated prompt elements in the browser,
              so each click does not require a paid AI request.
            </p>
          </details>
        </div>
      </article>
    </div>
  );
}
