"use client";

import { useState } from "react";

const subjects: Record<string, string[]> = {
  Character: [
    "a retired astronaut who now repairs bicycles",
    "a young botanist carrying an oversized field journal",
    "a masked courier delivering a mysterious package",
    "an elderly magician learning a modern hobby",
    "a street musician performing for an unusual audience",
  ],
  Creature: [
    "a tiny dragon nesting inside a teacup",
    "a long-legged forest creature collecting fallen stars",
    "a mechanical bird with handmade feathers",
    "a sleepy sea monster near a quiet fishing village",
    "a fox-like creature wearing an explorer's satchel",
  ],
  Environment: [
    "a greenhouse built inside an abandoned train station",
    "a cliffside town connected by rope bridges",
    "a hidden library beneath a flooded city",
    "a mountain market opening before sunrise",
    "an observatory surrounded by giant wildflowers",
  ],
  Object: [
    "an antique camera redesigned for a distant future",
    "a weathered backpack filled with impossible tools",
    "a ceremonial mask made from recycled electronics",
    "a pocket watch that contains a miniature landscape",
    "a desk lamp designed for an underwater studio",
  ],
  Scene: [
    "two rivals forced to share shelter during a storm",
    "a night market closing while the first snow begins",
    "an artist painting a mural as the city wakes up",
    "a rescue team entering a silent underground station",
    "a traveler discovering a doorway in an ordinary alley",
  ],
};

const settings = [
  "inside a narrow workshop filled with hanging tools",
  "on a windy rooftop just before sunset",
  "beside a quiet lake under heavy clouds",
  "in a crowded old-town street after rain",
  "inside a bright studio with strong window light",
  "at the edge of a forest where the trees suddenly stop",
  "in a small room lit by one unusual light source",
];

const actions = [
  "while trying to solve a small but visible problem",
  "caught in the middle of an unexpected task",
  "interacting with an object that changes the scene",
  "moments before making an important decision",
  "while another character or creature watches from a distance",
  "during a quiet pause after something dramatic happened",
];

const compositions = [
  "Use a strong foreground, clear focal point, and simple background shapes.",
  "Frame the subject off-center and use the environment to guide the eye back toward it.",
  "Use a close viewpoint with one large shape dominating the composition.",
  "Use a wide composition with the subject small enough to make the setting feel important.",
  "Build the scene around a clear silhouette and readable negative space.",
];

const challenges = [
  "Include one storytelling detail that explains what happened just before this moment.",
  "Limit the design to three major shapes before adding smaller details.",
  "Add one surprising prop without making the composition cluttered.",
  "Show the mood through posture, lighting, and environment rather than text.",
  "Create a clear contrast between something old and something new.",
];

const moods = ["Cozy", "Eerie", "Adventurous", "Surreal", "Peaceful", "Dramatic"];
const media = ["Any medium", "Pencil sketch", "Ink drawing", "Watercolor", "Digital painting", "Marker illustration"];

function pick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function DrawingPromptGenerator() {
  const [theme, setTheme] = useState("");
  const [category, setCategory] = useState("Any");
  const [mood, setMood] = useState("Any mood");
  const [medium, setMedium] = useState("Any medium");
  const [complexity, setComplexity] = useState("Balanced");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    const chosenCategory =
      category === "Any" ? pick(Object.keys(subjects)) : category;
    const chosenMood = mood === "Any mood" ? pick(moods) : mood;
    const chosenSubject = pick(subjects[chosenCategory]);
    const themeLine = theme.trim()
      ? `Theme to incorporate: ${theme.trim()}.`
      : "";
    const detailRule =
      complexity === "Quick sketch"
        ? "Keep the idea simple enough for a 10–20 minute sketch."
        : complexity === "Detailed"
          ? "Add secondary details, material variation, and environmental storytelling."
          : "Use enough detail to make the idea specific without overloading the scene.";

    const result = [
      `Drawing prompt: Draw ${chosenSubject} ${pick(actions)} ${pick(settings)}.`,
      `Mood: ${chosenMood}.`,
      medium !== "Any medium" ? `Suggested medium: ${medium}.` : "",
      themeLine,
      pick(compositions),
      detailRule,
      `Creative challenge: ${pick(challenges)}`,
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

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Generate a drawing idea</h2>
            <p>Choose a few constraints or leave them random for a surprise prompt.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="drawing-theme">Optional theme or subject</label>
            <input
              className="input"
              id="drawing-theme"
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              placeholder="Examples: space, autumn, cats, architecture, folklore"
            />
          </div>

          <div className="field">
            <label htmlFor="drawing-category">Prompt category</label>
            <select className="select" id="drawing-category" value={category} onChange={(event) => setCategory(event.target.value)}>
              <option>Any</option>
              {Object.keys(subjects).map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="drawing-mood">Mood</label>
            <select className="select" id="drawing-mood" value={mood} onChange={(event) => setMood(event.target.value)}>
              <option>Any mood</option>
              {moods.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="drawing-medium">Medium</label>
            <select className="select" id="drawing-medium" value={medium} onChange={(event) => setMedium(event.target.value)}>
              {media.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="drawing-complexity">Complexity</label>
            <select className="select" id="drawing-complexity" value={complexity} onChange={(event) => setComplexity(event.target.value)}>
              <option>Quick sketch</option>
              <option>Balanced</option>
              <option>Detailed</option>
            </select>
          </div>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate}>Generate drawing prompt</button>
          <button
            className="button secondary"
            type="button"
            onClick={() => {
              setTheme("");
              setCategory("Any");
              setMood("Any mood");
              setMedium("Any medium");
              setComplexity("Balanced");
              setOutput("");
              setCopied(false);
            }}
          >
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your art prompt</h2>
            <p>Generate again for a new combination, or copy the idea and adapt it.</p>
          </div>
          <div className="output-toolbar">
            {copied && <span className="status">Copied</span>}
            <button className="button secondary small" type="button" onClick={copyOutput} disabled={!output}>Copy</button>
          </div>
        </div>
        <div className={output ? "output" : "output empty"}>
          {output || "Your random drawing prompt will appear here."}
        </div>
      </section>
    </div>
  );
}
