"use client";

import { useState } from "react";

type PromptSet = {
  starters: string[];
  goals: string[];
  twists: string[];
};

const promptSets: Record<string, PromptSet> = {
  Writing: {
    starters: [
      "Write about a place that changes depending on who enters it",
      "Write about a promise that becomes harder to keep each day",
      "Write about two strangers who recognize the same unusual object",
      "Write about someone receiving instructions meant for another person",
      "Write about a small mistake that creates an unexpectedly good result",
    ],
    goals: [
      "focus on one concrete sensory detail in every paragraph",
      "reveal the central problem indirectly before naming it",
      "make the setting influence the character's next decision",
      "let the final line change how the opening is understood",
      "show the main emotion through behavior rather than explanation",
    ],
    twists: [
      "The person who seems most informed is confidently wrong.",
      "An ordinary object becomes the most important evidence.",
      "The apparent deadline is not the real deadline.",
      "The character succeeds, but not in the way they expected.",
      "A background detail from the beginning becomes essential at the end.",
    ],
  },
  Story: {
    starters: [
      "A town holds a yearly ceremony that nobody remembers starting",
      "A delivery arrives at a house that has been empty for decades",
      "A team reaches its destination and discovers someone has been waiting for them",
      "A family tradition suddenly produces a result everyone thought was impossible",
      "A traveler finds a map that only shows places after they disappear",
    ],
    goals: [
      "give the protagonist a practical goal before introducing the larger mystery",
      "create one meaningful choice with two believable consequences",
      "use the environment to increase pressure without relying on a villain",
      "plant an early clue that becomes obvious only in hindsight",
      "keep the conflict personal even if the setting is large or unusual",
    ],
    twists: [
      "The solution creates a new responsibility instead of ending the problem.",
      "The person asking for help has misunderstood what they need.",
      "The safest option turns out to carry the greatest long-term cost.",
      "The missing piece was visible from the beginning.",
      "The antagonist's warning is accurate for a reason nobody expected.",
    ],
  },
  Character: {
    starters: [
      "Create a character who is excellent at solving other people's problems but avoids their own",
      "Create a character whose profession conflicts with a private superstition",
      "Create a character who is trusted for a skill they secretly dislike using",
      "Create a character who keeps detailed records of something everyone else ignores",
      "Create a character preparing for an event they have misunderstood",
    ],
    goals: [
      "give them one visible habit that hints at a deeper motive",
      "define a strength that becomes a liability under pressure",
      "include one relationship that changes how they behave",
      "give them a short-term want and a different long-term need",
      "make their most useful skill come from an inconvenient past experience",
    ],
    twists: [
      "Their strongest belief was learned from someone they no longer trust.",
      "They are protecting a person who does not know they need protection.",
      "Their reputation is accurate, but for the wrong reason.",
      "They possess exactly what they need but refuse to use it.",
      "The flaw they want to eliminate is also what makes them effective.",
    ],
  },
  Journal: {
    starters: [
      "Describe a recent moment that felt insignificant at first but stayed in your mind",
      "Write about a routine you follow without remembering why it started",
      "Describe a decision that became easier only after you stopped trying to optimize it",
      "Write about something you have changed your mind about in the last year",
      "Describe a place where your behavior changes automatically",
    ],
    goals: [
      "separate what happened from the meaning you gave it",
      "identify one assumption you were making at the time",
      "name one detail you would notice differently now",
      "compare your immediate reaction with your current interpretation",
      "finish by writing one question you still cannot answer",
    ],
    twists: [
      "Write one paragraph from the perspective of your future self.",
      "Describe the same event without using emotion words.",
      "Identify one benefit hidden inside the inconvenience.",
      "Write the advice you would give a friend in the same situation.",
      "End with the smallest next action you could realistically take.",
    ],
  },
  Conversation: {
    starters: [
      "Two coworkers realize they have been solving different versions of the same problem",
      "An old friend asks a simple question that is difficult to answer honestly",
      "Two people negotiate over an object that matters to each of them for different reasons",
      "A mentor and student disagree about whether a mistake should be corrected",
      "Two strangers are forced to coordinate without sharing the same assumptions",
    ],
    goals: [
      "give each speaker a clear objective that is not stated directly",
      "let one line carry two different meanings for the speakers",
      "use interruption or silence to reveal tension",
      "change the power dynamic at least once during the exchange",
      "avoid exposition that both characters would already know",
    ],
    twists: [
      "One speaker knows the conversation is being overheard.",
      "Both people are telling the truth but describing different facts.",
      "The person with less authority has more useful information.",
      "A misunderstanding solves one problem while creating another.",
      "The conversation ends before either person says what they planned to say.",
    ],
  },
  "Creative Challenge": {
    starters: [
      "Create something useful from three unrelated ideas",
      "Explain a familiar concept without using its most common vocabulary",
      "Design a solution for a problem while removing the most obvious resource",
      "Turn a boring everyday process into the premise for a creative project",
      "Take an ordinary object and invent a second purpose for it",
    ],
    goals: [
      "make the result understandable without a long explanation",
      "use one constraint as a source of creativity rather than an obstacle",
      "produce at least three directions before choosing one",
      "keep the core idea simple enough to explain in one sentence",
      "include one practical detail that makes the idea feel usable",
    ],
    twists: [
      "The final idea must work for both a beginner and an expert.",
      "Remove the feature you originally thought was essential.",
      "Combine the safest idea with the strangest idea.",
      "Make the result useful in a context it was not designed for.",
      "Solve the problem using less information instead of more.",
    ],
  },
};

const tones = ["Any tone", "Funny", "Mysterious", "Reflective", "Dramatic", "Wholesome", "Tense"];
const depths = ["Quick", "Balanced", "Deep"];

function pick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function RandomPromptGenerator() {
  const [category, setCategory] = useState("Any");
  const [tone, setTone] = useState("Any tone");
  const [depth, setDepth] = useState("Balanced");
  const [theme, setTheme] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    const chosenCategory =
      category === "Any" ? pick(Object.keys(promptSets)) : category;
    const set = promptSets[chosenCategory];
    const chosenTone = tone === "Any tone" ? pick(tones.slice(1)) : tone;
    const depthRule =
      depth === "Quick"
        ? "Keep the response compact: aim for one strong idea or a short scene."
        : depth === "Deep"
          ? "Explore the idea in depth: include motivation, consequences, and at least one meaningful change."
          : "Develop the idea enough to create direction, but leave room for your own interpretation.";

    const lines = [
      `Category: ${chosenCategory}`,
      `Prompt: ${pick(set.starters)}.`,
      theme.trim() ? `Theme to weave in: ${theme.trim()}.` : "",
      `Tone: ${chosenTone}.`,
      `Focus: ${pick(set.goals)}.`,
      `Twist: ${pick(set.twists)}`,
      `Depth: ${depthRule}`,
    ]
      .filter(Boolean)
      .join("\n");

    setOutput(lines);
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
    setTone("Any tone");
    setDepth("Balanced");
    setTheme("");
    setOutput("");
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Generate a random prompt</h2>
            <p>Choose a direction, or leave the controls open for a complete surprise.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="random-theme">Optional theme</label>
            <input
              className="input"
              id="random-theme"
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              placeholder="Examples: winter, friendship, technology, travel, change"
            />
          </div>

          <div className="field">
            <label htmlFor="random-category">Category</label>
            <select
              className="select"
              id="random-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option>Any</option>
              {Object.keys(promptSets).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="random-tone">Tone</label>
            <select
              className="select"
              id="random-tone"
              value={tone}
              onChange={(event) => setTone(event.target.value)}
            >
              {tones.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="random-depth">Depth</label>
            <select
              className="select"
              id="random-depth"
              value={depth}
              onChange={(event) => setDepth(event.target.value)}
            >
              {depths.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate}>
            Generate random prompt
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your prompt</h2>
            <p>Generate again for a new combination, or copy this version and adapt it.</p>
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
          {output || "Your random creative prompt will appear here."}
        </div>
      </section>
    </div>
  );
}
