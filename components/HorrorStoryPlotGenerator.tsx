"use client";

import { useState } from "react";

const horrorTypes = [
  "Any horror style",
  "Psychological horror",
  "Supernatural horror",
  "Gothic horror",
  "Folk horror",
  "Cosmic horror",
  "Survival horror",
  "Creature horror",
  "Mystery horror",
];

const fearSources = [
  "a familiar place behaving according to rules nobody remembers creating",
  "a person receiving messages that appear to come from their future self",
  "a community protecting a tradition whose original purpose has been forgotten",
  "an object that reveals something different to each person who uses it",
  "a safe routine that begins producing one impossible exception every night",
  "a missing person whose belongings keep returning to places they never visited",
  "a building where one room changes location after dark",
  "a trusted authority figure quietly preparing for an event nobody else believes is coming",
];

const protagonists = [
  "a skeptical newcomer who wants a practical explanation",
  "a caretaker responsible for people who cannot easily leave",
  "an archivist who notices that older records contradict the present",
  "a person returning home after years away",
  "a worker on the final shift before a place closes permanently",
  "a sibling trying to reconstruct what happened to a missing family member",
  "a local expert who knows the rules but not where they came from",
  "a character who has already survived one unexplained event and does not want to be believed again",
];

const escalationRules = [
  "Each attempt to prove the threat is real makes the protagonist look less credible.",
  "The threat first affects objects, then routines, then relationships.",
  "A rule that seemed superstitious turns out to work—but only temporarily.",
  "The protagonist learns that avoiding the danger requires causing a different kind of harm.",
  "Evidence accumulates in a pattern that can be understood only after one detail is removed.",
  "The threat becomes more dangerous when characters try to name or document it.",
  "The safest location is gradually revealed to be the center of the problem.",
  "The protagonist discovers that someone else has been following the same pattern for much longer.",
];

const reveals = [
  "The apparent monster is only a symptom of the real threat.",
  "The protagonist has been using the wrong timeline for a key event.",
  "The person who seemed to understand the danger has been protecting everyone from a different outcome.",
  "The threat is real, but one widely accepted rule about it is false.",
  "The missing evidence was removed by someone trying to help.",
  "The protagonist has encountered the phenomenon before but misremembered the context.",
  "The community knows more than it admits, but not enough to control what is happening.",
];

const costs = [
  "Escape requires giving up information the protagonist desperately wanted.",
  "Survival means breaking a promise to someone important.",
  "Stopping the immediate danger makes the larger mystery harder to solve.",
  "The protagonist can save one person only by leaving another relationship permanently changed.",
  "The safe choice protects the group but destroys the protagonist's credibility.",
  "The truth can be exposed, but doing so may recreate the conditions that caused the threat.",
];

const endings: Record<string, string> = {
  "Ambiguous":
    "Resolve the immediate danger but leave one concrete detail that supports a second interpretation.",
  "Bleak":
    "Let the protagonist understand the truth too late to fully avoid its consequences.",
  "Hopeful":
    "Allow survival through a meaningful character choice, while preserving a believable cost.",
  "Twist":
    "Reframe an earlier detail at the end without contradicting the established rules.",
};

function pick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function HorrorStoryPlotGenerator() {
  const [style, setStyle] = useState("Any horror style");
  const [setting, setSetting] = useState("");
  const [theme, setTheme] = useState("");
  const [ending, setEnding] = useState("Ambiguous");
  const [intensity, setIntensity] = useState("Tense");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    const chosenStyle =
      style === "Any horror style" ? pick(horrorTypes.slice(1)) : style;

    const intensityRule =
      intensity === "Mild"
        ? "Keep the fear atmospheric and suspense-driven; avoid graphic detail."
        : intensity === "Tense"
          ? "Build sustained tension through uncertainty, consequences, and escalating danger without relying on gore."
          : "Use high-stakes danger and stronger disturbing imagery, but keep the plot focused on suspense and consequence rather than graphic gore.";

    const blocks = [
      `Horror style: ${chosenStyle}`,
      setting.trim() ? `Setting: ${setting.trim()}` : "",
      theme.trim() ? `Theme to explore: ${theme.trim()}` : "",
      `Protagonist: ${pick(protagonists)}.`,
      `Core fear: ${pick(fearSources)}.`,
      `Escalation rule: ${pick(escalationRules)}`,
      `Possible reveal: ${pick(reveals)}`,
      `Survival cost: ${pick(costs)}`,
      `Ending direction: ${endings[ending]}`,
      `Intensity: ${intensityRule}`,
      "Keep the threat internally consistent. Establish at least one rule early enough that later escalation feels earned, and let character choices—not random coincidence—drive the final consequence.",
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
    setStyle("Any horror style");
    setSetting("");
    setTheme("");
    setEnding("Ambiguous");
    setIntensity("Tense");
    setOutput("");
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Generate a horror story plot</h2>
            <p>Choose a horror style and ending direction, then build a plot around a threat, escalation rule, reveal, and cost.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="horror-style">Horror style</label>
            <select
              className="select"
              id="horror-style"
              value={style}
              onChange={(event) => setStyle(event.target.value)}
            >
              {horrorTypes.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="horror-ending">Ending type</label>
            <select
              className="select"
              id="horror-ending"
              value={ending}
              onChange={(event) => setEnding(event.target.value)}
            >
              {Object.keys(endings).map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="horror-intensity">Intensity</label>
            <select
              className="select"
              id="horror-intensity"
              value={intensity}
              onChange={(event) => setIntensity(event.target.value)}
            >
              <option>Mild</option>
              <option>Tense</option>
              <option>Dark</option>
            </select>
          </div>

          <div className="field full">
            <label htmlFor="horror-setting">Optional setting</label>
            <input
              className="input"
              id="horror-setting"
              value={setting}
              onChange={(event) => setSetting(event.target.value)}
              placeholder="Examples: coastal village, hospital night shift, remote research station"
            />
          </div>

          <div className="field full">
            <label htmlFor="horror-theme">Optional theme</label>
            <input
              className="input"
              id="horror-theme"
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              placeholder="Examples: grief, memory, isolation, guilt, trust"
            />
          </div>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate}>
            Generate horror plot
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your horror plot</h2>
            <p>Keep the core fear and escalation rule consistent; replace any element that does not fit your story.</p>
          </div>
          <div className="output-toolbar">
            {copied && <span className="status">Copied</span>}
            <button className="button secondary small" type="button" onClick={copyOutput} disabled={!output}>
              Copy
            </button>
          </div>
        </div>

        <div className={output ? "output" : "output empty"}>
          {output || "Your horror story plot will appear here."}
        </div>
      </section>
    </div>
  );
}
