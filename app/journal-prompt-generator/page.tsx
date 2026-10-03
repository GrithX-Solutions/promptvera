import type { Metadata } from "next";
import Link from "next/link";
import { JournalPromptGenerator } from "@/components/JournalPromptGenerator";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Journal Prompt Generator – Free Daily Prompts";
const description =
  "Free journal prompt generator for self-reflection, gratitude, goals, relationships, creativity, and daily check-ins. Generate a focused journaling prompt instantly.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/journal-prompt-generator" });

export default function JournalPromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd
        name="PromptVera Journal Prompt Generator"
        description={description}
        path="/journal-prompt-generator"
      />

      <div className="breadcrumb">
        <Link href="/">PromptVera</Link> / Journal Prompt Generator
      </div>

      <header className="tool-hero">
        <span className="eyebrow">Free journaling prompt tool</span>
        <h1>
          Journal Prompt <span className="gradient-text">Generator</span>
        </h1>
        <p>
          Generate focused journaling prompts for self-reflection, gratitude, goals,
          relationships, creativity, or a simple daily reset—without an account.
        </p>
      </header>

      <JournalPromptGenerator />

      <article className="content-wrap prose">
        <h2>What is a journal prompt generator?</h2>
        <p>
          A journal prompt generator gives you a specific question to respond to when
          you want to write but do not want to spend the first few minutes deciding
          what the entry should be about. PromptVera focuses on practical reflection
          areas such as priorities, routines, gratitude, goals, relationships,
          creativity, and what happened during the day.
        </p>
        <p>
          The prompt is meant to start your thinking, not decide what your answer
          should be. You can use the generated question exactly as written, connect it
          to an optional theme, or regenerate until you find a question that feels
          relevant enough to explore.
        </p>

        <h2>How to use a journaling prompt effectively</h2>

        <h3>Answer the specific question before widening the topic</h3>
        <p>
          A focused entry is usually easier to begin than a broad instruction such as
          “write about your life.” Start by answering the generated question directly.
          Once you have something concrete on the page, follow the connections that
          feel useful rather than trying to cover everything at once.
        </p>

        <h3>Use examples instead of only conclusions</h3>
        <p>
          If your first answer is “I need better boundaries,” “I am making progress,”
          or “I am grateful for my team,” add one real example. Specific events,
          conversations, decisions, and behaviors make a journal entry easier to
          review later and help distinguish a passing impression from a repeated
          pattern.
        </p>

        <h3>Choose the reflection depth that fits the time available</h3>
        <p>
          Quick Check-in is useful when you only have a few minutes. Balanced
          Reflection gives the idea enough space to develop without becoming a long
          exercise. Deep Reflection is better when you want to examine an assumption,
          include examples, and notice whether your thinking changes while writing.
        </p>

        <h2>Journal prompt example</h2>
        <div className="example-box">
          <strong>Category</strong>
          <p>Goals · Balanced Reflection</p>
          <strong>Prompt</strong>
          <p>
            Which goal received most of your attention this week, and what evidence shows that
            attention moved it forward? Name one task that felt productive but did not meaningfully
            support the goal. What would you protect or remove from next week&apos;s schedule based
            on that difference?
          </p>
        </div>
        <p>
          The prompt starts with observable behavior before asking for a conclusion, which makes
          the reflection easier to review later.
        </p>

        <h2>Journal prompts vs. random writing prompts</h2>
        <p>
          The <Link href="/random-prompt-generator">Random Prompt Generator</Link> supports
          broad creative ideation, including stories, characters, dialogue,
          journaling, and creative challenges. This page is narrower: we create every prompt
          specifically for personal reflection and journaling.
        </p>
        <p>
          That difference matters because the two tools solve different writing jobs. A story prompt
          needs characters, tension, or a premise; a journal prompt should help you
          examine your own experience, decisions, priorities, or observations without
          turning the entry into fiction. If you want a broad motif before deciding what
          to reflect on, use the <Link href="/random-theme-generator">Random Theme Generator</Link>.
          If you want to turn an image or feeling into a poem instead of a personal reflection,
          use the <Link href="/poetry-prompt-generator">Poetry Prompt Generator</Link>.
        </p>

        <h2>Useful ways to build a journaling habit</h2>
        <ul>
          <li>Use one prompt at the same time each day for a week and compare the answers.</li>
          <li>Keep entries short enough that the habit is easy to repeat.</li>
          <li>Return to a previous prompt after a month and notice what changed.</li>
          <li>Use the optional theme field when you want several entries around one area of life or work.</li>
          <li>Skip any question that does not feel useful; journaling does not require answering every prompt.</li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is this journal prompt generator free?</summary>
            <p>Yes. The current tool is free to use and does not require an account.</p>
          </details>
          <details>
            <summary>Can I use it for a daily journal prompt?</summary>
            <p>
              Yes. Choose Daily reset for a short end-of-day reflection, or leave the
              category on Any to get a different type of prompt each time.
            </p>
          </details>
          <details>
            <summary>Can I use it as a random journal prompt generator?</summary>
            <p>
              Yes. Leave Category on Any when you want the tool to choose among reflection,
              gratitude, goals, relationships, creativity, and daily-reset prompts for you.
            </p>
          </details>
          <details>
            <summary>Does the tool use an AI API?</summary>
            <p>
              No. The current generator combines curated prompts and follow-up
              questions in your browser, so each use does not require a paid AI call.
            </p>
          </details>
          <details>
            <summary>Is this a therapy or mental-health tool?</summary>
            <p>
              No. PromptVera provides general journaling questions for reflection and
              writing. It does not provide diagnosis, treatment, crisis support, or
              professional mental-health advice.
            </p>
          </details>
        </div>
      </article>
    </div>
  );
}
