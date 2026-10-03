import type { Metadata } from "next";
import Link from "next/link";
import { HorrorStoryPlotGenerator } from "@/components/HorrorStoryPlotGenerator";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Horror Story Plot Generator – Free Ideas";
const description =
  "Free horror story plot generator with horror style, protagonist, core fear, escalation, reveal, survival cost, intensity, and ending direction.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/horror-story-plot-generator" });

export default function HorrorStoryPlotGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd
        name="PromptVera Horror Story Plot Generator"
        description={description}
        path="/horror-story-plot-generator"
      />

      <div className="breadcrumb">
        <Link href="/">PromptVera</Link> / Horror Story Plot Generator
      </div>

      <header className="tool-hero">
        <span className="eyebrow">Free horror story idea tool</span>
        <h1>
          Horror Story Plot <span className="gradient-text">Generator</span>
        </h1>
        <p>
          Generate a horror plot with a protagonist, core fear, escalation rule,
          reveal, survival cost, intensity, and ending direction.
        </p>
      </header>

      <HorrorStoryPlotGenerator />

      <article className="content-wrap prose">
        <h2>What is a horror story plot generator?</h2>
        <p>
          A horror story plot generator gives you a structured source of fear rather
          than only a random scary image. A useful horror premise needs a threat,
          rules that shape how the threat behaves, escalation that increases pressure,
          and a cost attached to survival or discovery.
        </p>
        <p>
          PromptVera combines those elements into a plot framework you can adapt for
          short fiction, a longer story, or a writing exercise. You can choose a horror
          style, intensity, and ending direction, then optionally add your own setting
          or theme.
        </p>

        <h2>How to make a horror plot feel coherent</h2>

        <h3>Give the threat rules</h3>
        <p>
          Horror becomes easier to believe when the danger follows a pattern, even if
          the characters do not understand that pattern at first. A rule can limit when
          the threat appears, what makes it stronger, what temporarily stops it, or what
          evidence it leaves behind.
        </p>

        <h3>Escalate consequences, not just volume</h3>
        <p>
          A story does not become more frightening simply because each scene is louder
          or more violent. Escalation works when the protagonist loses options, evidence
          becomes harder to interpret, relationships become less reliable, or the cost
          of the safest choice increases.
        </p>

        <h3>Make the reveal change what earlier scenes mean</h3>
        <p>
          A reveal is strongest when it reframes something already established. It can
          expose a false rule, a hidden motive, an incomplete timeline, or the real
          purpose behind a tradition. The reveal should deepen the existing plot rather
          than replace it with an unrelated explanation.
        </p>

        <h3>Attach a cost to survival</h3>
        <p>
          Horror endings often become more memorable when surviving, escaping, or
          learning the truth requires a sacrifice. The cost can be social, emotional,
          practical, or moral; it does not need to depend on graphic violence.
        </p>

        <h2>Horror plot example</h2>
        <div className="example-box">
          <strong>Setup</strong>
          <p>Folk horror · Moderate intensity · Ambiguous ending</p>
          <strong>Plot direction</strong>
          <p>
            A surveyor arrives in a mountain village to map a road that residents refuse to name.
            Rule: every time the road is measured, one landmark moves closer to the village.
            Escalation begins when the surveyor&apos;s own field notes contain measurements they have
            not taken yet. The reveal suggests an earlier survey created the road rather than
            recording it. To stop the final approach, the surveyor must destroy the only map that
            could prove what happened. The ending leaves one copied coordinate in a government archive.
          </p>
        </div>
        <p>
          The fear comes from a rule, escalating evidence, a reveal that reframes earlier events,
          and a survival cost—not simply from adding a frightening creature.
        </p>

        <h2>Horror plot generator vs. Short Story Prompt Generator</h2>
        <p>
          The <Link href="/short-story-prompt-generator">Short Story Prompt Generator</Link>
          can create premises across many genres. This horror generator is narrower:
          it focuses specifically on threat logic, fear, escalation, reveal, survival
          cost, and horror-ending structure.
        </p>

        <h2>Horror plot generator vs. random writing prompts</h2>
        <p>
          The <Link href="/random-prompt-generator">Random Prompt Generator</Link>
          creates broad writing and creative ideas. Use this horror tool when you want
          the result to behave like a plot framework rather than a single scene,
          sentence, or topic.
        </p>

        <h2>Ways to develop one horror plot</h2>
        <ul>
          <li>Write the threat&apos;s rules privately before the protagonist understands them.</li>
          <li>Identify the first moment when a rational explanation stops being sufficient.</li>
          <li>Give the protagonist one choice that appears safe but makes the later problem worse.</li>
          <li>Plant one ordinary detail early that becomes meaningful after the reveal.</li>
          <li>Check whether the ending follows from established rules and character decisions.</li>
        </ul>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Is this horror story plot generator free?</summary>
            <p>Yes. The current tool is free and does not require an account.</p>
          </details>
          <details>
            <summary>Can I use it for supernatural or psychological horror?</summary>
            <p>
              Yes. The style selector includes psychological, supernatural, gothic,
              folk, cosmic, survival, creature, and mystery-horror directions.
            </p>
          </details>
          <details>
            <summary>Does it generate graphic gore?</summary>
            <p>
              The generator focuses on suspense, threat rules, consequences,
              and atmosphere rather than graphic gore. You can choose a darker intensity,
              but the plot structure remains the focus.
            </p>
          </details>
          <details>
            <summary>Does it use an AI API?</summary>
            <p>
              No. The current tool combines curated horror-story elements in your
              browser and does not require a paid AI request for each generation.
            </p>
          </details>
        </div>
      </article>
    </div>
  );
}
