import type { Metadata } from "next";
import Link from "next/link";
import { PromptBuilder } from "@/components/PromptBuilder";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "AI Image Prompt Generator – Free Visual Prompt Builder";
const description =
  "Free AI image prompt generator that turns a text idea into a structured visual prompt with subject, composition, style, camera, lighting, palette, constraints, and output controls.";

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
          Expand a visual idea into a structured image prompt with deliberate subject,
          composition, style, camera, lighting, detail, and output direction.
        </p>
      </header>

      <PromptBuilder toolId="ai-image" />

      <article className="content-wrap prose">
        <h2>What is an AI image prompt generator?</h2>
        <p>
          An AI image prompt generator turns a rough visual idea into a clearer creative brief.
          It separates what should appear in the image from how the image should look: subject,
          environment, composition, perspective, lighting, style, camera or lens cues, detail,
          and output requirements.
        </p>
        <p>
          PromptVera generates prompt text rather than images. The tool remains model-agnostic so
          you can edit the result for the image service you use. Different models interpret the same
          wording differently, so treat the generated prompt as a strong starting brief, not a
          guarantee of one exact composition.
        </p>

        <h2>Text-to-prompt, not image-to-prompt</h2>
        <p>
          This tool starts from an idea you type. It does not upload or analyze an existing image.
          Some tools called image prompt generators work in the opposite direction by analyzing
          an existing image. PromptVera&apos;s tool is for planning a new image from text: describe
          the idea first, then refine palette, composition, lighting, important details,
          exclusions, and aspect ratio in the prompt itself.
        </p>

        <h2>AI image prompt anatomy</h2>
        <ol>
          <li><strong>Subject:</strong> name the main person, object, creature, product, or scene.</li>
          <li><strong>Action and setting:</strong> describe what happens and where it happens.</li>
          <li><strong>Composition:</strong> decide framing, viewpoint, subject placement, and visual hierarchy.</li>
          <li><strong>Style:</strong> define the visual language, medium, era, or rendering approach.</li>
          <li><strong>Lighting and color:</strong> set mood with light quality, direction, contrast, and palette.</li>
          <li><strong>Camera and lens:</strong> use photographic cues only when they support the look you want.</li>
          <li><strong>Constraints:</strong> use the details and avoid fields for elements that must stay consistent or should not appear.</li>
          <li><strong>Output:</strong> add aspect ratio or other format requirements when the target service supports them.</li>
        </ol>

        <h2>AI image prompt example</h2>
        <div className="example-box">
          <strong>Basic idea</strong>
          <p>A coffee shop at night.</p>
          <strong>Structured prompt</strong>
          <p>
            A small corner coffee shop after closing, seen through a rain-covered window. One warm
            pendant light illuminates empty wooden tables while the street outside reflects cool
            blue signage. Medium-wide composition at eye level, subtle foreground raindrops,
            cinematic photography, natural reflections, restrained amber-and-blue palette,
            realistic texture, 16:9 frame.
          </p>
        </div>
        <p>
          The structured version tells the model what matters most: setting, viewpoint, lighting,
          palette, style, depth, and frame. It avoids stacking unrelated style words.
        </p>

        <h2>How to write a better image prompt</h2>
        <h3>Describe the subject before the aesthetic</h3>
        <p>
          “Cinematic, beautiful, highly detailed” does not explain what belongs in the frame.
          Establish the subject, action, environment, and focal point first. Add style after the
          scene makes sense.
        </p>

        <h3>Use composition to control attention</h3>
        <p>
          A close-up emphasizes expression or detail. A wide shot emphasizes environment. A low
          angle changes perceived scale, while an overhead view emphasizes layout. Choose one
          composition that supports the purpose of the image.
        </p>

        <h3>Use camera language only when it helps</h3>
        <p>
          Lens and depth-of-field cues can help with photographic images, but they add little to many
          vector, diagram, flat-illustration, or abstract requests. Avoid combining incompatible
          focal lengths or several camera moves in one still-image prompt.
        </p>

        <h3>Separate lighting from style</h3>
        <p>
          Style describes the visual treatment; lighting describes how the scene receives light.
          Keeping those decisions separate makes it easier to revise one without accidentally
          changing the other.
        </p>

        <h2>Use cases for structured image prompts</h2>
        <ul>
          <li><strong>Product concepts:</strong> control background, angle, lighting, materials, and brand-safe constraints.</li>
          <li><strong>Editorial illustrations:</strong> define metaphor, composition, mood, and medium without over-directing every detail.</li>
          <li><strong>Character concepts:</strong> keep identity cues, wardrobe, silhouette, and environment consistent across iterations.</li>
          <li><strong>Social and marketing visuals:</strong> reserve negative space for copy and specify the intended aspect ratio.</li>
          <li><strong>Storyboards and mood frames:</strong> align viewpoint, palette, time of day, and recurring visual details.</li>
        </ul>

        <h2>Common AI image prompt mistakes</h2>
        <ul>
          <li>Adding many style adjectives without a clear subject or scene.</li>
          <li>Mixing contradictory lighting, camera, or composition instructions.</li>
          <li>Using famous style references when a direct description of the visual qualities would be clearer.</li>
          <li>Expecting exact text, logos, hands, layouts, or identity consistency without checking the target model&apos;s capabilities.</li>
          <li>Changing several variables at once when an iteration fails, which makes it hard to learn what improved the result.</li>
        </ul>

        <h2>Iterate one variable at a time</h2>
        <p>
          When the first image misses the target, identify the largest mismatch. Change the framing,
          lighting, subject description, style, or constraint that caused the problem and test again.
          Controlled iteration teaches you which words materially affect the model instead of turning
          each revision into a completely new prompt.
        </p>

        <h2>AI image prompts vs. image-editing prompts</h2>
        <p>
          This page focuses on model-agnostic image generation. When you need an edit that must
          preserve identity, product geometry, labels, layout, or other reference details, use the{" "}
          <Link href="/nano-banana-prompt-generator">Nano Banana Prompt Generator</Link>.
          If you want a creative subject to draw yourself, use the{" "}
          <Link href="/drawing-prompt-generator">Drawing Prompt Generator</Link>.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Which AI image model should I use with this prompt?</summary>
            <p>The output is model-agnostic. Edit model-specific parameters or syntax after you choose the image service you want to use.</p>
          </details>
          <details>
            <summary>Does a longer image prompt guarantee a better image?</summary>
            <p>No. Useful specificity matters more than length. Remove instructions that do not change the image you actually need.</p>
          </details>
          <details>
            <summary>Should I include camera and lens terms?</summary>
            <p>Use them when you want a photographic look or a specific perspective. They are optional for illustration, graphic design, diagrams, and many other visual styles.</p>
          </details>
          <details>
            <summary>Can I use the prompt for product images?</summary>
            <p>Yes. Define the product, angle, background, lighting, materials, and the details that must remain accurate. Review generated branding and labels carefully.</p>
          </details>
          <details>
            <summary>Does PromptVera generate the image?</summary>
            <p>No. PromptVera creates the text brief. You copy and adapt that prompt for the image-generation tool you choose.</p>
          </details>
          <details>
            <summary>Can I upload an image and extract its prompt?</summary>
            <p>No. This page is a text-to-prompt builder. It starts from your written image idea rather than analyzing an uploaded reference image.</p>
          </details>
        </div>
      </article>
    </div>
  );
}
