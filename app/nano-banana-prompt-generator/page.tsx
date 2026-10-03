import type { Metadata } from "next";
import Link from "next/link";
import { PromptBuilder } from "@/components/PromptBuilder";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Nano Banana Prompt Generator – Image Generation & Editing";
const description =
  "Free Nano Banana prompt generator for Gemini image generation and editing prompts with subject, composition, references, preservation rules, lighting, layout, and iterative changes.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/nano-banana-prompt-generator" });

export default function NanoBananaPromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd name="PromptVera Nano Banana Prompt Generator" description={description} path="/nano-banana-prompt-generator" />
      <div className="breadcrumb"><Link href="/">PromptVera</Link> / Nano Banana Prompt Generator</div>

      <header className="tool-hero">
        <span className="eyebrow">Gemini image prompt tool</span>
        <h1>Nano Banana Prompt <span className="gradient-text">Generator</span></h1>
        <p>
          Structure image-generation or image-editing instructions with clearer subject,
          composition, references, preservation rules, lighting, and output constraints.
        </p>
      </header>

      <PromptBuilder toolId="nano-banana" />

      <article className="content-wrap prose">
        <h2>What is a Nano Banana prompt generator?</h2>
        <p>
          A Nano Banana prompt generator helps you plan instructions for Google&apos;s Gemini-native
          image generation and editing workflows. It can clarify what you want to create, what you
          want to change, which reference details matter, and what should remain untouched during
          an edit.
        </p>
        <p>
          Google currently uses{" "}
          <a
            href="https://ai.google.dev/gemini-api/docs/image-generation"
            target="_blank"
            rel="noreferrer"
          >
            Nano Banana
          </a>{" "}
          as the name for Gemini&apos;s native image-generation capabilities across a family of image
          models. The current documentation covers text-to-image generation, image editing,
          multimodal reference inputs, and iterative conversational changes. PromptVera generates
          prompt text only; it does not upload or process your image.
        </p>

        <h2>Use different prompt structures for generation and editing</h2>
        <h3>For a new image, define the visual target</h3>
        <p>
          Describe the subject, setting, composition, lighting, style, text or layout requirements,
          and any reference cues that should shape the result. Start with what the image needs to
          communicate before adding aesthetic detail.
        </p>

        <h3>For an edit, define the change and the preservation rules</h3>
        <p>
          State the requested transformation first, then list the details that must remain stable.
          If you want a new background behind a product, for example, preserve the product&apos;s
          shape, label text, logo placement, proportions, material, and camera angle only when those
          details truly need to stay fixed.
        </p>

        <h2>Nano Banana editing prompt anatomy</h2>
        <ol>
          <li><strong>Requested change:</strong> describe the exact transformation.</li>
          <li><strong>Target area:</strong> identify which subject, region, object, or text should change.</li>
          <li><strong>Preserve:</strong> list identity, geometry, branding, layout, clothing, or other details that must remain stable.</li>
          <li><strong>Composition:</strong> define framing, subject position, negative space, or crop.</li>
          <li><strong>Lighting and color:</strong> explain the visual treatment separately from the edit itself.</li>
          <li><strong>Reference priority:</strong> explain what each supplied reference should influence when several inputs are involved.</li>
          <li><strong>Output constraint:</strong> state aspect ratio, text/layout needs, or other requirements that the target Gemini image model supports.</li>
        </ol>

        <h2>Nano Banana prompt example: product image edit</h2>
        <div className="example-box">
          <strong>Loose request</strong>
          <p>Make this bottle photo look premium.</p>
          <strong>Structured edit brief</strong>
          <p>
            Keep the bottle shape, cap, logo, label text, label placement, and camera angle unchanged.
            Replace the plain background with a dark charcoal studio surface and soft gradient backdrop.
            Add a narrow warm rim light on the right edge and a larger diffused key light from the left.
            Keep reflections physically plausible and preserve the original bottle color. Leave clean
            negative space on the upper left for campaign copy. Do not add new text, logos, props, or
            packaging elements.
          </p>
        </div>

        <h2>Nano Banana prompt example: generate a new image</h2>
        <div className="example-box">
          <strong>Concept</strong>
          <p>A small bookstore poster with readable event information.</p>
          <strong>Structured generation brief</strong>
          <p>
            Create a vertical poster for an independent bookstore evening event. Warm editorial
            illustration of stacked books under a reading lamp, deep navy background, cream and muted
            orange palette, generous margins, and clear visual hierarchy. Reserve the top third for the
            title “Night Reading Club” and the lower section for “Friday · 7 PM”. Keep the typography
            simple, high-contrast, and easy to read. 4:5 portrait composition.
          </p>
        </div>

        <h2>Use reference images with a clear job</h2>
        <p>
          When a workflow accepts multiple inputs, tell the model what each reference contributes.
          One image might define the subject identity, another the product angle, and another the
          lighting or visual mood. Clear reference roles reduce the chance that unrelated details
          blend together.
        </p>

        <h2>Make iterative edits instead of rewriting everything</h2>
        <p>
          Conversational image editing works best when each revision has a clear purpose. If the
          composition is correct but the background is wrong, change the background while preserving
          the rest. If the text layout needs work, revise the text placement without changing the
          subject. Smaller revisions make it easier to identify which instruction caused the change.
        </p>

        <h2>Preserve only what truly needs protection</h2>
        <p>
          Long preservation lists can make an edit unnecessarily rigid. Protect identity-sensitive
          details such as faces, product geometry, logos, labels, clothing, or established layout
          when the task depends on them. Give the model room to change everything else required by
          the requested transformation.
        </p>

        <h2>Nano Banana vs. a general AI image prompt generator</h2>
        <p>
          Use this page when you specifically want a Gemini/Nano Banana generation or editing brief,
          especially when references and preservation constraints matter. For a model-agnostic visual
          brief, use the{" "}
          <Link href="/ai-image-prompt-generator">AI Image Prompt Generator</Link>.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is Nano Banana one model?</summary>
            <p>Google currently uses Nano Banana as the name for a family of Gemini-native image capabilities and models. Check Google&apos;s current image-generation documentation for the model options available when you create the image.</p>
          </details>
          <details>
            <summary>Does PromptVera upload my image?</summary>
            <p>No. This tool generates prompt text only. It does not upload, store, or edit your image.</p>
          </details>
          <details>
            <summary>Can I use this for ecommerce product images?</summary>
            <p>Yes. Product editing benefits from clear preservation rules for geometry, branding, labels, materials, proportions, and camera angle.</p>
          </details>
          <details>
            <summary>Can Nano Banana prompts include multiple reference images?</summary>
            <p>Current Gemini image documentation supports multimodal reference workflows on appropriate models. When you use references, define what each one should influence and verify the limits of the model you selected.</p>
          </details>
          <details>
            <summary>Can I ask for text inside an image?</summary>
            <p>Current Nano Banana documentation includes image models with text-rendering capabilities, but you should still proofread generated text and verify critical brand, legal, pricing, or product information before publishing.</p>
          </details>
        </div>
      </article>
    </div>
  );
}
