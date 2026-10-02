"use client";

import { useState } from "react";

const dynamics = [
  "rivals forced to cooperate",
  "friends who realize they have been keeping the same secret",
  "mentor and student whose roles unexpectedly reverse",
  "two characters reconnecting after a long absence",
  "allies who disagree about the right way to solve the same problem",
  "two characters pretending not to care about the same outcome",
  "reluctant partners assigned the same responsibility",
  "siblings or found-family members dealing with a difficult change",
];

const tropes = [
  "canon divergence",
  "missing scene",
  "alternate universe",
  "hurt/comfort",
  "found family",
  "forced proximity",
  "identity reveal",
  "second chance",
  "misunderstanding with consequences",
  "unexpected teamwork",
];

const settings = [
  "during a quiet period immediately after a major canon event",
  "in an unfamiliar town where nobody knows their history",
  "during a routine mission that becomes unexpectedly personal",
  "at a celebration one character does not want to attend",
  "in a temporary safe house with limited privacy",
  "during travel between two important locations",
  "in an alternate timeline where one key decision happened differently",
  "during an ordinary day when a small detail breaks the normal routine",
];

const conflicts = [
  "One character knows something that would change the other's decision but hesitates to say it.",
  "A simple shared task exposes an unresolved disagreement.",
  "Both characters want the same outcome for completely different reasons.",
  "A past promise conflicts with what the characters need now.",
  "A third person's request forces the characters to confront an issue they have avoided.",
  "The characters discover that one of their assumptions about canon events was incomplete.",
  "A practical problem becomes harder because neither character wants to admit what they actually need.",
];

const hooks = [
  "Open with a line of dialogue that makes sense only after the scene develops.",
  "Begin with one character noticing a small behavior change in the other.",
  "Start in the middle of an ordinary task rather than with exposition.",
  "Open immediately after something important happened off-page.",
  "Begin with a minor inconvenience that reveals the larger emotional problem.",
];

const endings = [
  "End with a small choice that changes the relationship without fully resolving everything.",
  "End on an object or gesture that carries more meaning than it did at the beginning.",
  "Let the immediate problem be solved while the emotional question remains open.",
  "End with one character finally saying the simplest version of what they have been avoiding.",
  "Let the characters reach the same decision for different reasons.",
];

const tones = [
  "Warm",
  "Angsty",
  "Funny",
  "Bittersweet",
  "Tense",
  "Hopeful",
  "Quiet",
  "Adventure-focused",
];

function pick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function FanficPromptGenerator() {
  const [fandom, setFandom] = useState("");
  const [characters, setCharacters] = useState("");
  const [relationship, setRelationship] = useState("Any dynamic");
  const [trope, setTrope] = useState("Any trope");
  const [tone, setTone] = useState("Any tone");
  const [canonLevel, setCanonLevel] = useState("Canon-adjacent");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    const chosenDynamic =
      relationship === "Any dynamic" ? pick(dynamics) : relationship;
    const chosenTrope = trope === "Any trope" ? pick(tropes) : trope;
    const chosenTone = tone === "Any tone" ? pick(tones) : tone;

    const canonRule =
      canonLevel === "Canon-compliant"
        ? "Keep major canon events intact and place the scene around or between them."
        : canonLevel === "Canon-divergent"
          ? "Choose one clear canon event or decision to change, then follow the consequences consistently."
          : canonLevel === "Alternate universe"
            ? "Reimagine the characters in a different setting while preserving the personality traits and relationship tensions that make them recognizable."
            : "Stay close to canon, but allow small invented scenes or circumstances that do not require rewriting the entire source story.";

    const blocks = [
      fandom.trim() ? `Fandom / source world: ${fandom.trim()}` : "",
      characters.trim() ? `Characters: ${characters.trim()}` : "",
      `Relationship dynamic: ${chosenDynamic}.`,
      `Trope: ${chosenTrope}.`,
      `Tone: ${chosenTone}.`,
      `Canon approach: ${canonRule}`,
      `Setting: ${pick(settings)}.`,
      `Core conflict: ${pick(conflicts)}`,
      `Opening hook: ${pick(hooks)}`,
      `Ending direction: ${pick(endings)}`,
      "Keep the characters' motivations internally consistent. Use canon details only where you know them; do not invent specific source facts just to make the prompt sound authoritative.",
    ].filter(Boolean);

    setOutput(blocks.join("\n\n"));
    setCopied(false);
  }

  async function copyOutput() {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function reset() {
    setFandom("");
    setCharacters("");
    setRelationship("Any dynamic");
    setTrope("Any trope");
    setTone("Any tone");
    setCanonLevel("Canon-adjacent");
    setOutput("");
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Generate a fanfic idea</h2>
            <p>Add your fandom or characters, then combine them with a trope, dynamic, tone, and canon approach.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="fanfic-fandom">Fandom or source world (optional)</label>
            <input
              className="input"
              id="fanfic-fandom"
              value={fandom}
              onChange={(event) => setFandom(event.target.value)}
              placeholder="Example: a fantasy series, superhero universe, game, anime, or your own fandom"
            />
          </div>

          <div className="field full">
            <label htmlFor="fanfic-characters">Characters or pairing (optional)</label>
            <input
              className="input"
              id="fanfic-characters"
              value={characters}
              onChange={(event) => setCharacters(event.target.value)}
              placeholder="Example: Character A & Character B, an OTP, a team, or found-family group"
            />
          </div>

          <div className="field">
            <label htmlFor="fanfic-dynamic">Relationship dynamic</label>
            <select
              className="select"
              id="fanfic-dynamic"
              value={relationship}
              onChange={(event) => setRelationship(event.target.value)}
            >
              <option>Any dynamic</option>
              {dynamics.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="fanfic-trope">Trope</label>
            <select
              className="select"
              id="fanfic-trope"
              value={trope}
              onChange={(event) => setTrope(event.target.value)}
            >
              <option>Any trope</option>
              {tropes.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="fanfic-tone">Tone</label>
            <select
              className="select"
              id="fanfic-tone"
              value={tone}
              onChange={(event) => setTone(event.target.value)}
            >
              <option>Any tone</option>
              {tones.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="fanfic-canon">Canon approach</label>
            <select
              className="select"
              id="fanfic-canon"
              value={canonLevel}
              onChange={(event) => setCanonLevel(event.target.value)}
            >
              <option>Canon-compliant</option>
              <option>Canon-adjacent</option>
              <option>Canon-divergent</option>
              <option>Alternate universe</option>
            </select>
          </div>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate}>
            Generate fanfic prompt
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your fanfic prompt</h2>
            <p>Keep the parts that fit your fandom knowledge and replace anything that conflicts with canon.</p>
          </div>
          <div className="output-toolbar">
            {copied && <span className="status">Copied</span>}
            <button className="button secondary small" type="button" onClick={copyOutput} disabled={!output}>
              Copy
            </button>
          </div>
        </div>
        <div className={output ? "output" : "output empty"}>
          {output || "Your fanfiction prompt will appear here."}
        </div>
      </section>
    </div>
  );
}
