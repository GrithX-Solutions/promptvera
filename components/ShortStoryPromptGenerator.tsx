"use client";

import { useState } from "react";

const genres = [
  "Any genre",
  "Contemporary",
  "Mystery",
  "Fantasy",
  "Science fiction",
  "Horror",
  "Romance",
  "Adventure",
  "Historical",
  "Speculative",
];

const protagonists = [
  "a person who is trying to return something they should never have received",
  "someone who is excellent at their job but hiding one basic mistake",
  "a newcomer who notices a pattern everyone else treats as normal",
  "two people who need the same thing for incompatible reasons",
  "a character who has one hour to reverse a decision",
  "someone revisiting a place where they once made an important promise",
  "a careful planner forced to rely on a stranger",
  "a character whose ordinary routine is interrupted by an impossible request",
];

const goals = [
  "recover an item before its absence is noticed",
  "convince someone to change a decision without revealing the real reason",
  "finish one practical task before an unexpected deadline",
  "find out why a familiar person is behaving differently",
  "keep a promise that has become inconvenient",
  "leave a place without causing a second problem",
  "protect someone who does not know they are in danger",
  "prove that a small detail everyone ignored actually matters",
];

const obstacles = [
  "the easiest solution would betray someone else's trust",
  "the person who can help wants something the protagonist cannot easily give",
  "every new clue makes the original explanation less believable",
  "the protagonist's strongest skill creates a new problem",
  "time is running out for a reason nobody expected",
  "the apparent antagonist is also the only reliable source of information",
  "a misunderstanding has already shaped everyone's decisions",
  "the protagonist must choose between being believed and being honest",
];

const settings = [
  "a nearly empty train station just before the last departure",
  "a neighborhood during a temporary power outage",
  "a small hotel preparing for a storm",
  "a crowded public event where two people are trying not to be noticed",
  "an isolated workplace at the end of a long shift",
  "a town preparing for a tradition nobody questions anymore",
  "a quiet apartment building where one door is always locked",
  "a roadside stop far from the protagonist's intended destination",
];

const twists = [
  "The missing information was deliberately hidden for a compassionate reason.",
  "The protagonist gets what they wanted and immediately realizes the cost.",
  "Two apparently separate problems turn out to have the same cause.",
  "The person believed to be least involved has been shaping events from the beginning.",
  "The deadline matters, but not for the reason the protagonist assumed.",
  "The protagonist has misunderstood who actually needs help.",
  "An early throwaway detail becomes the simplest explanation for everything.",
  "The final choice solves the external problem but changes an important relationship.",
];

const openings = [
  "Open with the protagonist discovering that an ordinary object is in the wrong place.",
  "Start in the middle of a conversation where one person already knows more than the reader.",
  "Begin immediately after the protagonist has made a small mistake.",
  "Open with a routine action that fails in an unusual way.",
  "Start with a decision that seems minor but cannot be taken back.",
];

const povRules: Record<string, string> = {
  "First person": "Use first person and keep the narration limited to what the narrator notices, remembers, or assumes.",
  "Third person close": "Use close third person centered on one protagonist. Keep interior access limited to that character.",
  "Third person objective": "Use an external third-person viewpoint. Reveal emotion primarily through action, dialogue, and observable detail.",
};

const lengthRules: Record<string, string> = {
  Flash: "Aim for flash fiction: one decisive scene, minimal backstory, and a strong final turn.",
  Short: "Aim for a compact short story with a clear setup, escalation, choice, and ending.",
  Extended: "Allow room for multiple scenes, but keep one central conflict and one main character arc.",
};

function pick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function ShortStoryPromptGenerator() {
  const [genre, setGenre] = useState("Any genre");
  const [theme, setTheme] = useState("");
  const [pov, setPov] = useState("Third person close");
  const [length, setLength] = useState("Short");
  const [includeTwist, setIncludeTwist] = useState(true);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    const chosenGenre = genre === "Any genre" ? pick(genres.slice(1)) : genre;

    const blocks = [
      `Genre: ${chosenGenre}`,
      theme.trim() ? `Theme to weave in: ${theme.trim()}.` : "",
      `Protagonist: ${pick(protagonists)}.`,
      `Immediate goal: ${pick(goals)}.`,
      `Main obstacle: ${pick(obstacles)}.`,
      `Setting: ${pick(settings)}.`,
      `Opening direction: ${pick(openings)}`,
      `Point of view: ${povRules[pov]}`,
      `Length: ${lengthRules[length]}`,
      includeTwist ? `Possible turn: ${pick(twists)}` : "",
      "Keep the story centered on one meaningful change. Let character choices cause the ending rather than relying only on coincidence.",
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
    setGenre("Any genre");
    setTheme("");
    setPov("Third person close");
    setLength("Short");
    setIncludeTwist(true);
    setOutput("");
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Generate a short story idea</h2>
            <p>Choose a genre, point of view, and length—or keep the genre random for a fresh premise.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="story-theme">Optional theme</label>
            <input
              className="input"
              id="story-theme"
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              placeholder="Examples: trust, memory, ambition, home, technology"
            />
          </div>

          <div className="field">
            <label htmlFor="story-genre">Genre</label>
            <select
              className="select"
              id="story-genre"
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
            >
              {genres.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="story-pov">Point of view</label>
            <select
              className="select"
              id="story-pov"
              value={pov}
              onChange={(event) => setPov(event.target.value)}
            >
              {Object.keys(povRules).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="story-length">Story length</label>
            <select
              className="select"
              id="story-length"
              value={length}
              onChange={(event) => setLength(event.target.value)}
            >
              {Object.keys(lengthRules).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field full">
            <label className="checkbox-row" htmlFor="story-twist">
              <input
                id="story-twist"
                type="checkbox"
                checked={includeTwist}
                onChange={(event) => setIncludeTwist(event.target.checked)}
              />
              <span>Add a possible story turn without locking the ending</span>
            </label>
          </div>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate}>
            Generate story prompt
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your short story prompt</h2>
            <p>Use the structure as a starting point, then replace any element that does not fit your voice.</p>
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
          {output || "Your short story writing prompt will appear here."}
        </div>
      </section>
    </div>
  );
}
