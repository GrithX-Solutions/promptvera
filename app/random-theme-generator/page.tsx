import type { Metadata } from "next";
import Link from "next/link";
import { RandomThemeGenerator } from "@/components/RandomThemeGenerator";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Random Theme Generator – Free Theme Ideas";
const description =
  "Free random theme generator for writing, stories, art, design, games, projects, events, and creative challenges. Generate random themes instantly.";

export const metadata: Metadata = toolMetadata({
  title,
  description,
  path: "/random-theme-generator",
});

export default function RandomThemeGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd
        name="PromptVera Random Theme Generator"
        description={description}
        path="/random-theme-generator"
      />

      <div className="breadcrumb">
        <Link href="/">PromptVera</Link> / Random Theme Generator
      </div>

      <header className="tool-hero">
        <span className="eyebrow">Free random theme picker</span>
        <h1>
          Random Theme <span className="gradient-text">Generator</span>
        </h1>
        <p>
          Generate random themes for writing, stories, art, design, games,
          projects, events, or general creative brainstorming.
        </p>
      </header>

      <RandomThemeGenerator />

      <article className="content-wrap prose">
        <h2>What is a random theme generator?</h2>
        <p>
          A random theme generator gives you a broad creative direction without
          writing the whole idea for you. A theme can be conceptual, emotional,
          visual, or practical: transformation, hidden patterns, future nostalgia,
          a midnight garden, or cooperation under changing rules.
        </p>
        <p>
          PromptVera&apos;s theme generator is intentionally different from a full
          prompt generator. It produces short theme ideas you can apply to a story,
          artwork, design brief, game jam, classroom activity, event, or personal
          project.
        </p>

        <h2>Creative themes, not website or UI themes</h2>
        <p>
          The phrase “theme generator” can also refer to color schemes, code themes, or website
          styling. This page does not generate CSS, UI themes, or game-specific theme lists. It
          focuses on creative themes you can apply to writing, art, design exploration, projects,
          events, and general brainstorming.
        </p>

        <h2>Generate random themes by use case</h2>
        <h3>Writing and story themes</h3>
        <p>
          Writing themes focus on underlying ideas such as identity, trust,
          belonging, memory, responsibility, change, and consequence. They are
          broad enough to support many plots instead of forcing a specific
          character or scene.
        </p>

        <h3>Art and design themes</h3>
        <p>
          Art themes lean toward visual concepts, contrasts, materials,
          atmosphere, composition, and creative direction. Use them for drawing
          challenges, illustration exercises, mood boards, or design exploration.
        </p>

        <h3>Game, project, and event themes</h3>
        <p>
          Game and project themes introduce constraints, systems, collaboration,
          exploration, or trade-offs. Event themes are more concrete and can help
          with parties, workshops, team activities, or themed creative sessions.
        </p>

        <h2>Random theme example</h2>
        <div className="example-box">
          <strong>Generated theme</strong>
          <p>Borrowed Time</p>
          <strong>Ways to interpret it</strong>
          <p>
            A story could explore a deadline nobody can extend. An illustration could show
            temporary ownership through fading marks or borrowed objects. A game jam could turn
            time itself into a resource players trade. The theme gives direction without fixing
            the medium or final idea.
          </p>
        </div>

        <h2>Random Theme Generator vs. Random Prompt Generator</h2>
        <p>
          Use this page when you want only a theme. The{" "}
          <Link href="/random-prompt-generator">Random Prompt Generator</Link>{" "}
          produces a fuller creative instruction with a premise, focus, tone, and
          twist. Keeping the two tools separate makes the output easier to reuse
          and keeps two different creative jobs from getting mixed together.
        </p>

        <h2>Random themes for drawing and visual work</h2>
        <p>
          If you want a broad theme such as “future nostalgia” or “quiet chaos,”
          start here. If you want a concrete subject, setting, mood, medium, and
          drawing challenge, use the{" "}
          <Link href="/drawing-prompt-generator">Drawing Prompt Generator</Link>.
          A theme establishes direction; a drawing prompt tells you more
          specifically what to create. For a theme you want to turn into a full narrative,
          continue with the <Link href="/story-plot-generator">Story Plot Generator</Link>.
          For a theme that should become a poem, use the{" "}
          <Link href="/poetry-prompt-generator">Poetry Prompt Generator</Link>.
        </p>

        <h2>Ways to develop one generated theme</h2>
        <ul>
          <li>Combine two themes and look for the tension between them.</li>
          <li>Apply the same theme to a story, image, and project to compare interpretations.</li>
          <li>Choose one theme and list five completely different ways it could appear.</li>
          <li>Use the theme as a constraint instead of a topic: ask what it changes about the work.</li>
          <li>Generate ten themes, shortlist three, then pick the one with the clearest creative tension.</li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is this random theme generator free?</summary>
            <p>Yes. The current tool is free and does not require an account.</p>
          </details>
          <details>
            <summary>Can I use it as a story theme generator?</summary>
            <p>
              Yes. Choose Writing &amp; Story for themes that support
              fiction, narrative exercises, and story planning.
            </p>
          </details>
          <details>
            <summary>Can I generate themes for art?</summary>
            <p>
              Yes. Choose Art &amp; Design for visual and conceptual directions
              suitable for drawing, illustration, design, and creative challenges.
            </p>
          </details>
          <details>
            <summary>Does the tool use an AI API?</summary>
            <p>
              No. The current version selects from curated theme sets directly in
              your browser.
            </p>
          </details>
        </div>
      </article>
    </div>
  );
}
