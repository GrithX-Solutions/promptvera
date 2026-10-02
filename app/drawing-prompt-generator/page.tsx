import type { Metadata } from "next";
import Link from "next/link";
import { DrawingPromptGenerator } from "@/components/DrawingPromptGenerator";
import { ToolJsonLd } from "@/components/ToolJsonLd";

const title = "Drawing Prompt Generator – Random Art Ideas";
const description =
  "Free drawing prompt generator for random art ideas, sketch challenges, characters, creatures, environments, objects, and creative scenes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/drawing-prompt-generator" },
};

export default function DrawingPromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd
        name="PromptVera Drawing Prompt Generator"
        description={description}
        path="/drawing-prompt-generator"
      />

      <div className="breadcrumb"><Link href="/">PromptVera</Link> / Drawing Prompt Generator</div>

      <header className="tool-hero">
        <span className="eyebrow">Free creative prompt tool</span>
        <h1>Drawing & Art Prompt <span className="gradient-text">Generator</span></h1>
        <p>
          Generate random drawing prompts for sketching, illustration practice, art challenges, or
          creative image ideas. Choose a category, mood, medium, and complexity—or keep them random.
        </p>
      </header>

      <DrawingPromptGenerator />

      <article className="content-wrap prose">
        <h2>What is a drawing prompt generator?</h2>
        <p>
          A drawing prompt generator gives you a concrete idea to draw when a blank page is the
          hardest part of starting. Instead of returning a single generic noun, PromptVera combines
          a subject, action, setting, mood, composition direction, and optional creative challenge.
          The result is specific enough to start sketching but open enough for you to make the idea
          your own.
        </p>
        <p>
          This page also works as an art prompt generator for illustrators, students, hobbyists, and
          anyone practicing visual storytelling. You can use the same prompt for a pencil sketch,
          ink drawing, watercolor study, digital painting, or as creative direction for an image
          generation workflow.
        </p>

        <h2>How to use random art prompts effectively</h2>
        <h3>Start with the simplest version</h3>
        <p>
          If you are warming up, choose <strong>Quick sketch</strong>. Focus on the main silhouette,
          gesture, or composition rather than trying to finish every texture. A short drawing session
          is often more useful when the goal is consistency rather than a portfolio piece.
        </p>

        <h3>Add constraints when ideas feel too broad</h3>
        <p>
          Creative constraints reduce decision fatigue. Selecting a category such as Character,
          Creature, Environment, Object, or Scene narrows the problem. Mood and medium then give the
          idea a visual direction without dictating exactly how the final drawing must look.
        </p>

        <h3>Use the optional theme field as an anchor</h3>
        <p>
          Enter a theme such as “autumn,” “space travel,” “folklore,” or “old technology” when you
          want the random prompt to connect to a subject you are already studying. The theme remains
          a loose requirement, so the generated scene still introduces an unexpected combination.
        </p>

        <h2>Drawing prompts vs. AI image prompts</h2>
        <p>
          A drawing prompt is primarily an idea-generation tool. It can include composition and mood,
          but it does not need the camera, rendering, lighting, and output instructions commonly used
          in AI image prompts. If you need a structured prompt specifically for an image model, use
          the <Link href="/ai-image-prompt-generator">AI Image Prompt Generator</Link>. If you want a
          visual challenge for sketching or illustration, this drawing prompt generator is the
          better fit.
        </p>

        <h2>Ways to turn one prompt into a practice session</h2>
        <ul>
          <li>Draw the same idea once as a two-minute thumbnail and again as a detailed study.</li>
          <li>Keep the subject but change the mood from peaceful to eerie.</li>
          <li>Redraw the composition from a high, low, or close viewpoint.</li>
          <li>Use the same prompt in two different media and compare what changes.</li>
          <li>Generate three prompts and combine one element from each into a new scene.</li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is this drawing prompt generator free?</summary>
            <p>Yes. The tool is free to use and does not require an account.</p>
          </details>
          <details>
            <summary>Can I use the prompts for an art challenge?</summary>
            <p>Yes. You can generate a new idea for daily sketching, classroom exercises, art challenges, or personal practice.</p>
          </details>
          <details>
            <summary>Does the tool generate artwork?</summary>
            <p>No. It generates the creative prompt only. You decide whether to draw it yourself or adapt it for another creative tool.</p>
          </details>
          <details>
            <summary>Can I use these ideas with AI image generators?</summary>
            <p>Yes, but you may want to add model-specific visual instructions. PromptVera's AI Image Prompt Generator is designed for that purpose.</p>
          </details>
        </div>
      </article>
    </div>
  );
}
