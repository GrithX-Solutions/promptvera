"use client";

import { useState } from "react";

const categories: Record<string, string[]> = {
  "Self-reflection": [
    "What belief about yourself has changed most in the last year, and what changed it?",
    "Which part of your current routine feels most intentional, and which part feels automatic?",
    "What are you giving too much attention to right now?",
    "Where are your actions and stated priorities most out of sync?",
    "What recent moment revealed something useful about how you respond under pressure?",
  ],
  Gratitude: [
    "What ordinary part of your day would you miss if it disappeared tomorrow?",
    "Who made something easier for you recently without making a big deal about it?",
    "What small convenience or comfort have you stopped noticing?",
    "Which recent experience felt better because of someone else's effort?",
    "What part of your environment quietly supports you every day?",
  ],
  Goals: [
    "Which goal would still matter if nobody else knew you achieved it?",
    "What is the smallest action that would make your main goal easier to continue tomorrow?",
    "Which goal are you maintaining because it still matters, and which one only because you already started?",
    "What obstacle keeps repeating because the plan has not changed?",
    "What would meaningful progress look like over the next seven days rather than the next year?",
  ],
  Relationships: [
    "Which relationship has changed because one of you changed your expectations?",
    "What do you appreciate about someone that you rarely say directly?",
    "Where are you expecting someone to understand something you have not clearly communicated?",
    "What boundary or agreement has made a relationship easier to maintain?",
    "Which conversation are you postponing because you are trying to predict the other person's response?",
  ],
  Creativity: [
    "What idea have you dismissed too quickly because it seemed impractical?",
    "Which recent problem could become a creative constraint instead of an obstacle?",
    "What would you make if the result did not need to be useful, impressive, or publishable?",
    "Which unfinished project still contains one idea worth keeping?",
    "What familiar subject could you explore from the opposite perspective?",
  ],
  "Daily reset": [
    "What took more energy today than it deserved?",
    "What went better today than you expected?",
    "Which unfinished task actually needs attention tomorrow, and which can wait?",
    "What did you learn today that should change how you approach tomorrow?",
    "What is one thing you can stop carrying into the next day?",
  ],
};

const followUps = [
  "What evidence supports your first answer?",
  "What part of this is within your control?",
  "What would someone who disagrees with you notice?",
  "What are you assuming without checking?",
  "What has changed since the last time you thought about this?",
  "What would the smallest useful next step be?",
  "What detail are you most tempted to avoid writing about?",
];

const styles = {
  "Quick check-in": "Answer in 3–5 sentences. Keep it specific and concrete.",
  "Balanced reflection": "Write one focused paragraph, then add one sentence about what you want to remember.",
  "Deep reflection": "Explore the prompt in depth, include at least one example, and end by identifying what changed in your thinking.",
};

function pick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function JournalPromptGenerator() {
  const [category, setCategory] = useState("Any");
  const [style, setStyle] = useState("Balanced reflection");
  const [theme, setTheme] = useState("");
  const [includeFollowUp, setIncludeFollowUp] = useState(true);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    const chosenCategory =
      category === "Any" ? pick(Object.keys(categories)) : category;
    const prompt = pick(categories[chosenCategory]);

    const blocks = [
      `Journal prompt: ${prompt}`,
      theme.trim() ? `Optional theme to connect: ${theme.trim()}.` : "",
      `Reflection depth: ${styles[style as keyof typeof styles]}`,
      includeFollowUp ? `Follow-up question: ${pick(followUps)}` : "",
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
    setCategory("Any");
    setStyle("Balanced reflection");
    setTheme("");
    setIncludeFollowUp(true);
    setOutput("");
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Generate a journal prompt</h2>
            <p>Choose a reflection area, or leave it on Any for a random prompt.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="journal-theme">Optional theme</label>
            <input
              className="input"
              id="journal-theme"
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              placeholder="Examples: work, change, family, confidence, routines"
            />
          </div>

          <div className="field">
            <label htmlFor="journal-category">Category</label>
            <select
              className="select"
              id="journal-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option>Any</option>
              {Object.keys(categories).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="journal-style">Reflection depth</label>
            <select
              className="select"
              id="journal-style"
              value={style}
              onChange={(event) => setStyle(event.target.value)}
            >
              {Object.keys(styles).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field full">
            <label className="checkbox-row" htmlFor="journal-follow-up">
              <input
                id="journal-follow-up"
                type="checkbox"
                checked={includeFollowUp}
                onChange={(event) => setIncludeFollowUp(event.target.checked)}
              />
              <span>Add a follow-up question that pushes the reflection one step further</span>
            </label>
          </div>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate}>
            Generate journal prompt
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your journal prompt</h2>
            <p>Write from the first useful answer rather than searching for a perfect one.</p>
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
          {output || "Your journaling prompt will appear here."}
        </div>
      </section>
    </div>
  );
}
