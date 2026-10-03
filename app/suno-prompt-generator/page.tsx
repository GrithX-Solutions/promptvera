import type { Metadata } from "next";
import Link from "next/link";
import { PromptBuilder } from "@/components/PromptBuilder";
import { ToolJsonLd } from "@/components/ToolJsonLd";
import { toolMetadata } from "@/lib/metadata";

const title = "Suno Prompt Generator – Free AI Music Prompt Builder";
const description =
  "Free Suno prompt generator for structured music prompts with genre, mood, tempo, vocals, instrumentation, arrangement, production direction, exclusions, and iteration guidance.";

export const metadata: Metadata = toolMetadata({ title, description, path: "/suno-prompt-generator" });

export default function SunoPromptGeneratorPage() {
  return (
    <div className="shell tool-page">
      <ToolJsonLd name="PromptVera Suno Prompt Generator" description={description} path="/suno-prompt-generator" />
      <div className="breadcrumb"><Link href="/">PromptVera</Link> / Suno Prompt Generator</div>

      <header className="tool-hero">
        <span className="eyebrow">Free Suno music prompt tool</span>
        <h1>Suno Prompt <span className="gradient-text">Generator</span></h1>
        <p>
          Turn a song concept into a clearer music brief with genre, mood, tempo, vocals,
          instrumentation, arrangement, production direction, and optional exclusions you
          want the result to avoid.
        </p>
      </header>

      <PromptBuilder toolId="suno" />

      <article className="content-wrap prose">
        <h2>What is a Suno prompt generator?</h2>
        <p>
          A Suno prompt generator helps you describe the music you want to hear before you create
          it in Suno. Instead of stopping at a topic such as “a song about starting over,” a useful
          prompt can define genre, mood, rhythmic feel, tempo, vocal character, instrumentation,
          arrangement, and production choices.
        </p>
        <p>
          PromptVera generates prompt text only. It does not call Suno, create music, manage credits,
          or reproduce Suno&apos;s editing tools. Use the output as a creative brief, then adapt it to
          the current Suno creation mode and model you choose.
        </p>

        <h2>Current Suno context: the v6 model family</h2>
        <p>
          Suno introduced its{" "}
          <a href="https://www.suno.com/release-notes/introducing-v6" target="_blank" rel="noreferrer">
            v6 family
          </a>{" "}
          on September 9, 2026. Suno currently describes v6 as its flagship model, v6-wild as a
          more experimental variant, and v6-mini as a faster option available across plans.
          Suno also says the v6 family understands richer musical instructions and can work with
          several kinds of creative input.
        </p>
        <p>
          Model capabilities and plan access can change. PromptVera therefore focuses on the
          musical brief rather than embedding a fixed model-specific recipe that may become stale.
        </p>

        <h2>What should a strong Suno prompt describe?</h2>
        <ol>
          <li><strong>Musical direction:</strong> name the genre, subgenre, era, or combination that defines the musical vocabulary.</li>
          <li><strong>Mood and energy:</strong> describe the emotional result separately from the genre.</li>
          <li><strong>Tempo and groove:</strong> set a BPM range or describe the rhythmic feel when timing matters.</li>
          <li><strong>Vocals:</strong> specify instrumental, vocal type, delivery, harmonies, or other vocal characteristics.</li>
          <li><strong>Instrumentation:</strong> name the few instruments that should shape the track.</li>
          <li><strong>Structure:</strong> describe verse, chorus, bridge, build, drop, outro, or another arrangement only when it matters.</li>
          <li><strong>Production:</strong> add texture, space, dynamics, mix character, or recording aesthetic.</li>
          <li><strong>Exclusions:</strong> name a small number of sounds or directions to avoid when they would otherwise pull the track off course.</li>
          <li><strong>Subject or lyrical direction:</strong> explain the theme without forcing every lyric unless you plan to supply your own words.</li>
        </ol>

        <h2>Suno prompt example</h2>
        <div className="example-box">
          <strong>Basic idea</strong>
          <p>An emotional electronic song about leaving home.</p>
          <strong>Structured music brief</strong>
          <p>
            Melodic electronic pop with a restrained, bittersweet mood. 108 BPM, steady four-on-the-floor
            pulse, warm analog synth pads, clean sub bass, crisp drums, and a simple piano motif.
            Intimate lead vocal with light stacked harmonies in the chorus. Start sparse, build through
            the pre-chorus, open into a wider chorus, then finish with a quieter piano-and-pad outro.
            Lyrical theme: leaving a familiar place by choice and realizing the loss only after departure.
            Polished but not overly bright production; leave space around the vocal.
          </p>
        </div>

        <h2>Genre and mood solve different problems</h2>
        <p>
          Genre tells Suno what musical language to draw from. Mood tells it how that language should
          feel. A synth-pop track can sound euphoric, tense, nostalgic, playful, or detached. Keeping
          those controls separate produces more deliberate combinations.
        </p>

        <h2>Use instrumentation as a priority list</h2>
        <p>
          Name the instruments that define the track rather than listing every sound that could appear.
          A small set of strong anchors—such as piano, muted guitar, tight drums, and a warm synth
          bed—gives the arrangement a clearer center.
        </p>

        <h2>Decide whether you need Simple or Custom mode</h2>
        <p>
          Suno&apos;s current help documentation says{" "}
          <a href="https://help.suno.com/en/articles/2462273" target="_blank" rel="noreferrer">
            Simple mode
          </a>{" "}
          can start from a plain-language description and can include genre, instrumentation, and
          structure. Suno&apos;s{" "}
          <a href="https://help.suno.com/en/articles/2415873" target="_blank" rel="noreferrer">
            Custom mode
          </a>{" "}
          gives you more control, including a field for your own lyrics. Use PromptVera&apos;s output
          as a planning aid and place each part into the Suno workflow that matches your goal.
        </p>

        <h2>Improve results with controlled iteration</h2>
        <p>
          When a generation misses the target, change the most important mismatch first. If the
          arrangement feels wrong, revise the structure. If the sound feels too polished, change
          production language. If the vocal dominates the track, adjust the vocal direction or
          instrumentation. If one recurring element keeps appearing, add one precise exclusion
          rather than a long negative list. Keeping most variables stable makes each comparison
          more informative.
        </p>
        <p>
          Suno&apos;s current v6 workflow also supports broader creation and editing features that go
          beyond a single text prompt. PromptVera does not try to reproduce those tools; it helps you
          prepare the musical decisions behind the request.
        </p>

        <h2>Commercial use and copyright depend on Suno&apos;s current terms</h2>
        <p>
          A prompt generator cannot determine your ownership, license, or copyright status.
          Suno&apos;s current help pages distinguish between free-plan and paid-plan usage and also
          note that commercial-use rights do not automatically guarantee copyright protection.
          Check{" "}
          <a href="https://help.suno.com/en/articles/9601665" target="_blank" rel="noreferrer">
            Suno&apos;s current rights guidance
          </a>{" "}
          and the applicable terms before you monetize or distribute a track.
        </p>

        <h2>Related prompt generators</h2>
        <p>
          If your project also needs visual direction, use the{" "}
          <Link href="/ai-image-prompt-generator">AI Image Prompt Generator</Link> for still-image
          concepts. If you need a general instruction rather than a music brief, start with the{" "}
          <Link href="/prompt-enhancer">AI Prompt Enhancer</Link>.
        </p>

        <h2>Frequently asked questions</h2>
        <div className="faq">
          <details>
            <summary>Does PromptVera create music?</summary>
            <p>No. PromptVera creates the text brief. Suno or another music-generation service handles the actual audio generation.</p>
          </details>
          <details>
            <summary>What is the current Suno model?</summary>
            <p>Suno introduced the v6 family on September 9, 2026. Its current help center lists v6, v6-wild, and v6-mini, with plan access differing by model.</p>
          </details>
          <details>
            <summary>Can I make instrumental prompts?</summary>
            <p>Yes. Select the instrumental direction in the PromptVera tool and focus on genre, groove, instrumentation, structure, and production.</p>
          </details>
          <details>
            <summary>Can I use my own lyrics in Suno?</summary>
            <p>Yes. Suno&apos;s current Custom mode documentation includes a field for user-provided lyrics. PromptVera does not upload or store those lyrics for Suno.</p>
          </details>
          <details>
            <summary>Does a Suno prompt need a BPM?</summary>
            <p>No. Use a BPM when precise tempo matters; otherwise a rhythmic description such as slow half-time, driving mid-tempo, or fast breakbeat may communicate the feel more naturally.</p>
          </details>
          <details>
            <summary>Can I commercially use a song made from this prompt?</summary>
            <p>PromptVera cannot grant usage rights. Check Suno&apos;s current plan terms, commercial-use guidance, and the law that applies to your work before monetizing or distributing a generated track.</p>
          </details>
        </div>
      </article>
    </div>
  );
}
