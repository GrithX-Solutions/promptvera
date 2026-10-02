"use client";

import { useState } from "react";

const seeds = [
  "an object kept long after the person connected to it is gone",
  "the first quiet hour after a crowded celebration",
  "a familiar street seen after many years away",
  "something ordinary that suddenly feels temporary",
  "a conversation remembered differently by two people",
  "a room being emptied before a move",
  "a small kindness witnessed but never acknowledged",
  "the moment before weather changes",
  "a photograph with one detail nobody noticed at the time",
  "a routine that continues after its original reason disappears",
];

const images = [
  "condensation sliding down a cold glass",
  "a single porch light at dawn",
  "dust visible in a shaft of window light",
  "rain darkening stone one patch at a time",
  "a receipt folded into a pocket",
  "a kettle beginning to whistle in another room",
  "shoes left beside a closed door",
  "a bus window reflecting two scenes at once",
  "a plant leaning toward weak winter light",
  "handwriting fading on an old label",
];

const tensions = [
  "relief mixed with guilt",
  "nostalgia interrupted by embarrassment",
  "hope that feels slightly premature",
  "affection mixed with resentment",
  "certainty beginning to weaken",
  "grief beside an unexpectedly ordinary task",
  "pride complicated by loneliness",
  "calm that may actually be avoidance",
];

const turns = [
  "Let one repeated image mean something different by the final lines.",
  "End on a concrete object rather than an explanation.",
  "Introduce one contradiction without resolving it completely.",
  "Shift the scale from something very small to something much larger.",
  "Let the speaker realize they misunderstood one detail.",
  "Use the final image to quietly challenge the opening assumption.",
];

const forms: Record<string, string> = {
  "Free verse":
    "Use free verse. Let line breaks and stanza changes follow shifts in image, thought, or pressure rather than a fixed rhyme scheme.",
  "Haiku-style":
    "Use a very short haiku-style form built around a concrete image, a moment of attention, and a small turn. A strict syllable count is optional.",
  "Sonnet-style":
    "Use a 14-line sonnet-style structure with a clear turn in thought. Meter and rhyme may be regular or loosely adapted.",
  Ode:
    "Write an ode that gives sustained attention to one subject and discovers why it matters through specific detail.",
  "Prose poem":
    "Write as a prose poem in a compact paragraph or two, using poetic compression, image, rhythm, and associative movement without line breaks.",
  "Spoken word":
    "Write for spoken delivery. Use rhythmic phrasing, repetition, contrast, and lines that gain force when read aloud.",
  "Narrative poem":
    "Build the poem around a small event with a before, during, and after while keeping the language compressed and image-driven.",
};

const perspectives = [
  "First person",
  "Second person",
  "Third person close",
  "First person plural",
  "Object as speaker",
  "Unspecified speaker",
];

const moods = [
  "Reflective",
  "Tender",
  "Uneasy",
  "Hopeful",
  "Melancholic",
  "Playful",
  "Defiant",
  "Quiet",
];

function pick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function PoetryPromptGenerator() {
  const [theme, setTheme] = useState("");
  const [form, setForm] = useState("Any form");
  const [mood, setMood] = useState("Any mood");
  const [perspective, setPerspective] = useState("Any perspective");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    const chosenForm =
      form === "Any form" ? pick(Object.keys(forms)) : form;
    const chosenMood = mood === "Any mood" ? pick(moods) : mood;
    const chosenPerspective =
      perspective === "Any perspective" ? pick(perspectives) : perspective;

    const result = [
      `Poetry prompt: Write about ${pick(seeds)}.`,
      theme.trim() ? `Theme to weave in: ${theme.trim()}.` : "",
      `Central image: ${pick(images)}.`,
      `Emotional tension: ${pick(tensions)}.`,
      `Mood: ${chosenMood}.`,
      `Perspective: ${chosenPerspective}.`,
      `Form: ${forms[chosenForm]}`,
      `Craft challenge: ${pick(turns)}`,
      "Avoid explaining the theme directly; let image, sound, action, and contrast carry the meaning.",
    ]
      .filter(Boolean)
      .join("\n");

    setOutput(result);
    setCopied(false);
  }

  async function copyOutput() {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function reset() {
    setTheme("");
    setForm("Any form");
    setMood("Any mood");
    setPerspective("Any perspective");
    setOutput("");
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Generate a poetry prompt</h2>
            <p>Choose a few craft constraints or leave them random for a fresh combination.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="poetry-theme">Optional theme or subject</label>
            <input
              className="input"
              id="poetry-theme"
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              placeholder="Examples: home, distance, memory, technology, winter"
            />
          </div>

          <div className="field">
            <label htmlFor="poetry-form">Poetic form</label>
            <select
              className="select"
              id="poetry-form"
              value={form}
              onChange={(event) => setForm(event.target.value)}
            >
              <option>Any form</option>
              {Object.keys(forms).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="poetry-mood">Mood</label>
            <select
              className="select"
              id="poetry-mood"
              value={mood}
              onChange={(event) => setMood(event.target.value)}
            >
              <option>Any mood</option>
              {moods.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="poetry-perspective">Perspective</label>
            <select
              className="select"
              id="poetry-perspective"
              value={perspective}
              onChange={(event) => setPerspective(event.target.value)}
            >
              <option>Any perspective</option>
              {perspectives.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate}>
            Generate poetry prompt
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your poetry prompt</h2>
            <p>Use it as written, regenerate one, or keep only the constraint that interests you.</p>
          </div>
          <div className="output-toolbar">
            {copied && <span className="status">Copied</span>}
            <button
              className="button secondary small"
              type="button"
              onClick={copyOutput}
              disabled={!output}
            >
              Copy
            </button>
          </div>
        </div>

        <div className={output ? "output" : "output empty"}>
          {output || "Your poetry writing prompt will appear here."}
        </div>
      </section>
    </div>
  );
}
