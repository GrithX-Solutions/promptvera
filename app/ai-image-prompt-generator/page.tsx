import type { Metadata } from "next";
import Link from "next/link";
import { PromptBuilder } from "@/components/PromptBuilder";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "AI Image Prompt Generator";
const description =
  "Free AI image prompt generator with subject, style, composition, camera, lens, lighting, detail, and aspect-ratio controls.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/ai-image-prompt-generator" });

export default function AiImagePromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd name="PromptVera AI Image Prompt Generator" description={description} path="/ai-image-prompt-generator" />
      <div className="breadcrumb"><Link href="/">PromptVera</Link> / AI Image Prompt Generator</div>
      <header className="tool-hero">
        <span className="eyebrow">Free image prompt tool</span>
        <h1>AI Image Prompt <span className="gradient-text">Generator</span></h1>
        <p>
          Expand a visual idea into a cleaner image prompt with deliberate style, composition, camera, lighting, detail, and output format.
        </p>
      </header>

      <PromptBuilder toolId="ai-image" />

      <article className="content-wrap prose">
        <h2>What makes an AI image prompt useful?</h2>
        <p>
          A good image prompt gives the model a clear visual hierarchy. Start with the subject and
          scene, then add the visual treatment. Camera and lens language can help when you want a
          photographic look, but it is optional for illustration, vector work, or abstract compositions.
        </p>
        <p>
          You can also use this as a free image prompt generator when you already have a rough
          visual concept and want to turn it into a more deliberate subject, composition, lighting,
          style, and output brief.
        </p>

        <h3>Subject before style</h3>
        <p>
          “Cinematic, beautiful, detailed” is not a complete visual request. First establish what is
          actually in the frame, where it is, and what the viewer should notice. Style should support
          that subject rather than replace it.
        </p>

        <h3>Composition controls attention</h3>
        <p>
          Wide framing creates context, close-ups prioritize detail, and centered symmetry creates a
          different visual rhythm from a rule-of-thirds layout. Pick a composition that matches the
          purpose of the image.
        </p>

        <h3>Do not over-specify camera language</h3>
        <p>
          Lens terms can be helpful for photorealistic generations, but stacking several focal
          lengths or incompatible shot descriptions creates noise. One clear camera direction is
          usually enough.
        </p>

        <h2>Related image and creative prompt tools</h2>
        <p>
          For image-editing instructions with explicit preservation rules, use the{" "}
          <Link href="/nano-banana-prompt-generator">Nano Banana Prompt Generator</Link>. If you
          need an idea to draw rather than an AI image prompt, the{" "}
          <Link href="/drawing-prompt-generator">Drawing Prompt Generator</Link> produces art
          directions without requiring an image model.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Which AI image model should I use with this prompt?</summary>
            <p>The output is intentionally model-agnostic. You can edit it for the image model or service you use.</p>
          </details>
          <details>
            <summary>Does a longer image prompt guarantee a better image?</summary>
            <p>No. Useful specificity matters more than length. Remove details that do not affect the image you actually need.</p>
          </details>
        </div>
      </article>
    </div>
  );
}
