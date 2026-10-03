import type { Metadata } from "next";
import Link from "next/link";
import { PromptBuilder } from "@/components/PromptBuilder";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Sora 2 Prompt Generator – Legacy Video Prompt Builder";
const description =
  "Legacy Sora 2 prompt generator for structured video shot briefs. OpenAI discontinued Sora in 2026; use this tool to study and adapt scene, camera, motion, lighting, audio, and continuity prompts.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/sora-2-prompt-generator" });

export default function Sora2PromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd name="PromptVera Sora 2 Prompt Generator" description={description} path="/sora-2-prompt-generator" />
      <div className="breadcrumb"><Link href="/">PromptVera</Link> / Sora 2 Prompt Generator</div>

      <header className="tool-hero">
        <span className="eyebrow">Legacy Sora 2 prompt structure</span>
        <h1>Sora 2 Prompt <span className="gradient-text">Generator</span></h1>
        <p>
          Build a structured video shot brief with scene, action, framing, camera movement,
          lighting, sound, format, and continuity instructions.
        </p>
      </header>

      <div className="callout">
        <strong>Sora 2 is discontinued.</strong>
        <p>
          OpenAI discontinued the Sora web and app experiences on April 26, 2026, and
          discontinued the Sora API on September 24, 2026. PromptVera keeps this page as a
          legacy prompt-planning resource because the shot-brief techniques remain useful
          when studying or adapting structured prompts for other video-generation workflows.{" "}
          <a
            href="https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation"
            target="_blank"
            rel="noreferrer"
          >
            Read OpenAI&apos;s discontinuation notice
          </a>.
        </p>
      </div>

      <div className="callout">
        <strong>Historical planning controls, not live Sora settings.</strong>
        <p>
          The fields below are PromptVera&apos;s reusable shot-planning structure based on
          the archived Sora 2 prompting framework. They do not represent a current OpenAI
          Sora product or API control panel.
        </p>
      </div>

      <PromptBuilder toolId="sora-2" />

      <article className="content-wrap prose">
        <h2>What is a Sora 2 prompt generator?</h2>
        <p>
          A Sora 2 prompt generator organizes a video idea as a shot brief. Instead of
          compressing everything into one vague sentence, it separates the visible scene,
          subject action, framing, camera movement, lighting, sound, output format, and
          continuity requirements.
        </p>
        <p>
          Sora 2 itself is no longer available through OpenAI&apos;s former web, app, or API
          experiences. PromptVera generates text only. Use this page to study the legacy Sora
          prompt structure or adapt the resulting brief to a current video model after checking
          that model&apos;s own syntax, controls, and limitations.
        </p>

        <h2>What the archived OpenAI Sora 2 prompting guide emphasized</h2>
        <p>
          OpenAI still hosts an{" "}
          <a
            href="https://developers.openai.com/cookbook/examples/sora/sora2_prompting_guide"
            target="_blank"
            rel="noreferrer"
          >
            archived Sora 2 prompting guide
          </a>{" "}
          and explicitly warns that it may reference outdated models or APIs. The guide treated
          a useful video prompt like a cinematography brief: define framing, subject action,
          movement, depth, lighting, palette, timing, and audio with enough specificity to
          control the shot.
        </p>
        <p>
          Those principles describe prompt composition rather than current product availability,
          so they remain useful as a historical framework. Do not rely on the archived endpoint,
          duration, resolution, reference-image, or model instructions as current OpenAI API
          documentation.
        </p>

        <h2>Video prompt anatomy: build one coherent shot</h2>
        <ol>
          <li><strong>Subject and environment:</strong> identify what the viewer sees and where the action happens.</li>
          <li><strong>Framing:</strong> choose the shot size and viewing angle that support the scene.</li>
          <li><strong>Subject action:</strong> describe one plausible action or a short sequence of beats.</li>
          <li><strong>Camera movement:</strong> use a single clear motion unless the shot genuinely requires more.</li>
          <li><strong>Lighting and palette:</strong> describe the light source, contrast, time of day, and a small set of color anchors.</li>
          <li><strong>Timing:</strong> use the action-beats field to place key actions or pauses in a clear order that can fit the intended clip.</li>
          <li><strong>Audio or dialogue:</strong> keep spoken lines and sound cues concise enough for the scene.</li>
          <li><strong>Continuity:</strong> repeat identity, wardrobe, environment, and motion details that must remain stable.</li>
        </ol>

        <h2>Sora 2 prompt example</h2>
        <div className="example-box">
          <strong>Loose idea</strong>
          <p>A cyclist stops at a rainy intersection at night.</p>
          <strong>Structured shot brief</strong>
          <p>
            Nighttime commercial street after rain. Medium-wide, low-angle tracking shot of a
            cyclist in a yellow rain shell moving left to right. The cyclist pedals three times,
            brakes at the crosswalk, then pauses as a bus passes in the background. Camera tracks
            smoothly and stops with the rider. Wet asphalt reflects amber storefront light and
            cool blue signage. Keep the yellow shell, black bicycle, travel direction, and street
            layout consistent. Sound: light rain, tire hiss, distant traffic; no dialogue.
          </p>
        </div>
        <p>
          The example uses observable action beats, one camera move, stable visual anchors, and
          a short soundscape instead of relying on the word “cinematic.”
        </p>

        <h2>How to make a video prompt easier to follow</h2>
        <h3>Use concrete action beats</h3>
        <p>
          “A person moves quickly” leaves timing open. Describe a small sequence such as walking
          to a window, pausing, and opening the curtain. Physical beats make the intended motion
          easier to visualize and revise.
        </p>

        <h3>Keep camera movement plausible</h3>
        <p>
          A tracking move, orbit, crane move, handheld shot, or static frame creates a distinct
          result. Avoid stacking several incompatible camera moves into a short scene.
        </p>

        <h3>Anchor lighting with sources and colors</h3>
        <p>
          “Bright room” gives little direction. Describe the source and quality of the light, then
          add a few stable palette anchors when visual continuity matters.
        </p>

        <h3>Write dialogue for the available screen time</h3>
        <p>
          Long speeches compete with visual action. Keep dialogue short, identify the speaker,
          and make sure the line can plausibly fit inside the intended scene.
        </p>

        <h2>Adapt this prompt structure to current video tools</h2>
        <p>
          The scene-planning logic is portable, but model capabilities are not. Before using the
          result elsewhere, check whether the target video service supports reference images,
          multiple shots, dialogue, native audio, negative instructions, aspect-ratio controls,
          camera syntax, or duration settings. Remove Sora-specific assumptions and keep the
          visual brief that still applies.
        </p>
        <p>
          If you need a still-image concept before planning motion, use the{" "}
          <Link href="/ai-image-prompt-generator">AI Image Prompt Generator</Link>. It focuses on
          subject, composition, style, lighting, camera, and output framing without video timing.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Can I still use Sora 2?</summary>
            <p>No through the former OpenAI Sora product or API. OpenAI says the web and app experiences ended on April 26, 2026, and the API ended on September 24, 2026.</p>
          </details>
          <details>
            <summary>Why keep a Sora 2 prompt generator after discontinuation?</summary>
            <p>The page preserves a useful historical video-prompt structure for research, prompt study, and adaptation to current video tools. PromptVera does not imply that Sora 2 remains available.</p>
          </details>
          <details>
            <summary>Are the controls on this page current OpenAI Sora settings?</summary>
            <p>
              No. They are PromptVera planning fields derived from the archived Sora 2
              prompting framework. OpenAI&apos;s former Sora product and API have been discontinued.
            </p>
          </details>
          <details>
            <summary>Does PromptVera generate video?</summary>
            <p>No. PromptVera only structures the text brief.</p>
          </details>
          <details>
            <summary>Can I use the generated prompt with another video model?</summary>
            <p>You can adapt the scene, action, framing, lighting, audio, and continuity sections, but verify the target model&apos;s current capabilities and supported controls first.</p>
          </details>
          <details>
            <summary>Is OpenAI&apos;s Sora 2 prompting guide still current?</summary>
            <p>No. OpenAI labels the guide as archived and warns that it may reference outdated models or APIs. Use it as historical prompting guidance, not current product documentation.</p>
          </details>
        </div>
      </article>
    </div>
  );
}
