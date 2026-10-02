import type { Metadata } from "next";
import Link from "next/link";
import { PromptBuilder } from "@/components/PromptBuilder";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Suno Prompt Generator";
const description =
  "Free Suno prompt generator for structured AI music prompts with genre, mood, tempo, vocals, instrumentation, arrangement, and production direction.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/suno-prompt-generator" });

export default function SunoPromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd name="PromptVera Suno Prompt Generator" description={description} path="/suno-prompt-generator" />
      <div className="breadcrumb"><Link href="/">PromptVera</Link> / Suno Prompt Generator</div>
      <header className="tool-hero">
        <span className="eyebrow">AI music prompt tool</span>
        <h1>Suno Prompt <span className="gradient-text">Generator</span></h1>
        <p>
          Turn a song concept into a structured music brief with genre, emotional direction, tempo, vocals, instrumentation, and arrangement.
        </p>
      </header>

      <PromptBuilder toolId="suno" />

      <article className="content-wrap prose">
        <h2>What is a Suno prompt generator?</h2>
        <p>
          A Suno prompt generator turns a song concept into a clearer music brief by
          separating genre, mood, tempo, vocal direction, instrumentation, arrangement,
          and production cues. PromptVera generates prompt text only and does not create
          or host the finished music.
        </p>

        <h2>Build a Suno AI prompt around musical decisions</h2>
        <p>
          A useful Suno AI prompt generator should help you communicate more than a topic. “Make a
          song about success” says what the lyrics may discuss but very little about the sound. Genre, mood,
          tempo, vocal character, instrumentation, and song structure give the model a more coherent musical direction.
        </p>

        <h3>Genre and mood are different controls</h3>
        <p>
          Genre describes the musical vocabulary; mood describes the emotional result. An indie-rock
          track can be euphoric, restrained, nostalgic, or dark. Keeping those decisions separate
          gives you more deliberate combinations.
        </p>

        <h3>Use instrumentation to shape the production</h3>
        <p>
          Name the instruments that matter rather than listing everything that could appear. A prompt
          built around warm piano, clean electric guitar, tight drums, and a restrained synth bed is
          more focused than a long list of unrelated sounds.
        </p>

        <h3>Specify structure when arrangement matters</h3>
        <p>
          If you need a conventional verse and chorus or a build into an electronic drop, say so. If
          structure is not important, keep the prompt simpler and let the generation explore.
        </p>

        <h2>Related prompt generators</h2>
        <p>
          If your project also needs video direction, the{" "}
          <Link href="/sora-2-prompt-generator">Sora 2 Prompt Generator</Link> structures scene,
          camera, motion, lighting, audio, and continuity instructions. For a general instruction
          that is still vague, start with the <Link href="/prompt-enhancer">AI Prompt Enhancer</Link>.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Does PromptVera create or host music?</summary>
            <p>No. This page only builds the prompt text you can use in a compatible music-generation workflow.</p>
          </details>
          <details>
            <summary>Can I make instrumental prompts?</summary>
            <p>Yes. Select “Instrumental” under vocals and describe the main instruments you want to lead the arrangement.</p>
          </details>
        </div>
      </article>
    </div>
  );
}
