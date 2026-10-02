import type { Metadata } from "next";
import Link from "next/link";
import { BookTitleGenerator } from "@/components/BookTitleGenerator";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Book Title Generator – Free Book Name Ideas";
const description =
  "Free book title generator for fiction and nonfiction. Create book name ideas by genre, tone, style, theme, topic, or your own keywords.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/book-title-generator" });

export default function BookTitleGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd
        name="PromptVera Book Title Generator"
        description={description}
        path="/book-title-generator"
      />

      <div className="breadcrumb">
        <Link href="/">PromptVera</Link> / Book Title Generator
      </div>

      <header className="tool-hero">
        <span className="eyebrow">Free book naming tool</span>
        <h1>
          Book Title <span className="gradient-text">Generator</span>
        </h1>
        <p>
          Generate book title ideas for fiction or nonfiction using genre,
          tone, title style, themes, topics, and your own keywords.
        </p>
      </header>

      <BookTitleGenerator />

      <article className="content-wrap prose">
        <h2>What is a book title generator?</h2>
        <p>
          A book title generator creates naming directions you can evaluate,
          combine, and refine before publishing or drafting. A useful title
          should fit the book&apos;s genre, tone, subject, and reader expectation
          rather than simply joining random dramatic words.
        </p>
        <p>
          PromptVera&apos;s free book title generator supports fiction and
          nonfiction separately. You can choose a genre or category, control
          the tone and title style, and optionally supply a keyword, theme,
          topic, place, object, or concept that should influence the results.
        </p>

        <h2>Generate book titles using your own keywords</h2>
        <p>
          If you already know the central image or topic of the book, enter it
          in the keyword field. The generator will use that idea as an anchor
          rather than replacing it with an unrelated concept. This is useful
          when you need a book title generator using keywords or a book title
          generator with keywords, a working title for a manuscript, or several
          variations around the same theme.
        </p>

        <h2>Fiction title ideas by genre</h2>
        <p>
          Genre changes what a title is expected to signal. Fantasy titles
          often suggest place, myth, power, or lineage. Mystery and thriller
          titles benefit from tension, secrecy, or unanswered questions.
          Romance titles can foreground relationship, circumstance, or
          emotional contrast, while horror titles often work through unease
          and implication rather than explicit description.
        </p>
        <p>
          The genre selector therefore changes the vocabulary used by the
          generator instead of adding the genre name to every result. Use the
          mixed title style for variety or choose a shorter, more evocative,
          classic, or descriptive direction.
        </p>

        <h2>Nonfiction book title ideas</h2>
        <p>
          Nonfiction titles have a different job: they often need to identify a
          promise, problem, audience, or subject quickly. Select a category such
          as business, self-development, productivity, technology, creativity,
          health, history, or memoir and add your core topic when you have one.
        </p>
        <p>
          Some generated options use a title and subtitle structure. Treat the
          subtitle as editable positioning: it should clarify the practical
          value of the book without making claims the manuscript cannot support.
        </p>

        <h2>Book Title Generator vs. Story Plot Generator</h2>
        <p>
          Use the <Link href="/story-plot-generator">Story Plot Generator</Link>{" "}
          when you still need the narrative itself: protagonist, goal,
          complications, turning points, climax, and resolution. Use this page
          when the concept already exists and the naming problem is the main
          task.
        </p>

        <h2>How to choose from generated book names</h2>
        <ul>
          <li>Read the title aloud and check whether it is easy to remember.</li>
          <li>Make sure the wording matches the book&apos;s actual genre and tone.</li>
          <li>Search bookstores and the web for confusingly similar titles before publishing.</li>
          <li>Test whether the title still makes sense without cover art or a subtitle.</li>
          <li>Keep a shortlist and revisit it after the manuscript or positioning becomes clearer.</li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is this book title generator free?</summary>
            <p>Yes. The current tool is free and does not require an account.</p>
          </details>
          <details>
            <summary>Can I generate fantasy or romance book titles?</summary>
            <p>
              Yes. Fiction genres include fantasy, romance, mystery, thriller,
              horror, science fiction, adventure, historical, literary, and
              children&apos;s fiction.
            </p>
          </details>
          <details>
            <summary>Can I use my own keyword in the title ideas?</summary>
            <p>
              Yes. Add a theme, topic, place, object, or keyword and the
              generator will use it as an anchor in part of the title set.
            </p>
          </details>
          <details>
            <summary>Does the generator check whether a title is already used?</summary>
            <p>
              No. Generated titles are brainstorming suggestions. Before
              publishing, check bookstores, search engines, relevant trademark
              databases where appropriate, and your publishing platform for
              potentially confusing existing uses.
            </p>
          </details>
          <details>
            <summary>Does this tool use an AI API?</summary>
            <p>
              No. The current version combines curated title structures and
              genre-aware vocabulary directly in your browser.
            </p>
          </details>
        </div>
      </article>
    </div>
  );
}
