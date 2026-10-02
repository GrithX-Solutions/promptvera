import type { Metadata } from "next";
import Link from "next/link";
import { PromptBuilder } from "@/components/PromptBuilder";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Nano Banana Prompt Generator";
const description =
  "Free Nano Banana prompt generator for precise image-generation and image-editing instructions with composition, lighting, preservation, and aspect-ratio controls.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/nano-banana-prompt-generator" });

export default function NanoBananaPromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd name="PromptVera Nano Banana Prompt Generator" description={description} path="/nano-banana-prompt-generator" />
      <div className="breadcrumb"><Link href="/">PromptVera</Link> / Nano Banana Prompt Generator</div>
      <header className="tool-hero">
        <span className="eyebrow">AI image prompt tool</span>
        <h1>Nano Banana Prompt <span className="gradient-text">Generator</span></h1>
        <p>
          Structure an image-generation or editing request with clearer composition, lighting, preservation, and quality constraints.
        </p>
      </header>

      <PromptBuilder toolId="nano-banana" />

      <article className="content-wrap prose">
        <h2>What is a Nano Banana prompt generator?</h2>
        <p>
          A Nano Banana prompt generator helps structure image-generation or image-editing
          instructions, especially when the task needs explicit preservation rules. It
          separates the requested change from details that should remain stable, such as
          identity, product geometry, logos, labels, clothing, layout, or proportions.
        </p>

        <h2>Prompt image edits like an editor, not a caption writer</h2>
        <p>
          Image-editing prompts are strongest when they separate what should change from what must
          remain untouched. If a product photo needs a new background but the logo, proportions,
          packaging text, and product shape must stay the same, say that explicitly.
        </p>

        <h3>State the edit first</h3>
        <p>
          Begin with the actual transformation: replace the background, restyle the lighting, remove
          an object, or generate a new composition. Avoid burying the requested change at the end of
          a long aesthetic description.
        </p>

        <h3>Use preservation instructions carefully</h3>
        <p>
          Preservation fields are most useful for identity-sensitive details such as faces, logos,
          labels, product geometry, clothing, or layout. Do not mark everything as immutable, because
          the model still needs room to perform the requested edit.
        </p>

        <h3>Describe composition and lighting separately</h3>
        <p>
          Composition controls where the subject sits and how the frame is organized. Lighting
          controls the visual treatment. Keeping these separate makes the prompt easier to review and modify.
        </p>

        <h2>Nano Banana vs. a general AI image prompt generator</h2>
        <p>
          Use this page when edit instructions and preservation constraints are central to the task.
          For model-agnostic image generation with subject, style, composition, camera, lens, and
          lighting controls, use the{" "}
          <Link href="/ai-image-prompt-generator">AI Image Prompt Generator</Link>.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Does PromptVera upload my image?</summary>
            <p>No. This tool currently generates prompt text only; it does not upload or process an image.</p>
          </details>
          <details>
            <summary>Can I use this for ecommerce product images?</summary>
            <p>Yes. Product work benefits from explicit preservation rules for geometry, branding, labels, and proportions.</p>
          </details>
        </div>
      </article>
    </div>
  );
}
