import type { Metadata } from "next";
import Link from "next/link";
import { PromptBuilder } from "@/components/PromptBuilder";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const title = "Sora 2 Prompt Generator";
const description =
  "Free Sora 2 prompt generator for structured AI video prompts with scene, shot type, camera movement, lighting, audio, format, and continuity instructions.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sora-2-prompt-generator" },
};

export default function Sora2PromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd name="PromptVera Sora 2 Prompt Generator" description={description} path="/sora-2-prompt-generator" />
      <div className="breadcrumb"><Link href="/">PromptVera</Link> / Sora 2 Prompt Generator</div>
      <header className="tool-hero">
        <span className="eyebrow">AI video prompt tool</span>
        <h1>Sora 2 Prompt <span className="gradient-text">Generator</span></h1>
        <p>
          Build a video prompt around the scene you actually want, then add camera, movement, lighting, sound, frame, and continuity instructions.
        </p>
      </header>

      <PromptBuilder toolId="sora-2" />

      <article className="content-wrap prose">
        <h2>How to write a stronger Sora video prompt</h2>
        <p>
          Start with the visible event: who or what is in the scene, where it happens, and what
          changes during the shot. Then describe camera behavior separately. Mixing every visual
          detail into one sentence makes it harder to see whether your prompt contains contradictory instructions.
        </p>

        <h3>1. Define the scene and action</h3>
        <p>
          Describe the subject, setting, and movement in concrete terms. “A car in a city” leaves
          many decisions open; “a silver electric coupe drives through a rain-soaked commercial
          district at night” establishes a clearer visual target.
        </p>

        <h3>2. Add shot and movement language</h3>
        <p>
          Use camera direction only when it serves the scene. A tracking shot, orbit, crane move, or
          static composition creates a different visual result. Avoid stacking incompatible camera
          moves into a short clip.
        </p>

        <h3>3. Protect continuity</h3>
        <p>
          Video generations can become inconsistent when the prompt changes subject details from one
          phrase to another. The generator adds a continuity section to remind the model to keep
          identity, environment, lighting, direction of motion, and scale coherent.
        </p>

        <div className="callout">
          <strong>Tip:</strong> Treat the generated prompt as a shot brief. Remove any field that is irrelevant rather than forcing every control into every video.
        </div>

        <h2>Related visual prompt tools</h2>
        <p>
          Need a still-image brief first? Use the{" "}
          <Link href="/ai-image-prompt-generator">AI Image Prompt Generator</Link> for composition,
          lighting, lens, and style controls. For image-editing prompts with preservation constraints,
          use the <Link href="/nano-banana-prompt-generator">Nano Banana Prompt Generator</Link>.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Does this tool generate the video?</summary>
            <p>No. PromptVera generates the text prompt. You copy the result into the video-generation service you choose.</p>
          </details>
          <details>
            <summary>Can I create vertical Sora prompts?</summary>
            <p>Yes. Choose the 9:16 vertical option in the output-format field.</p>
          </details>
        </div>
      </article>
    </div>
  );
}
