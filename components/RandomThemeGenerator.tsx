"use client";

import { useState } from "react";

const themePools: Record<string, string[]> = {
  "Writing & Story": [
    "A promise that changes meaning",
    "Belonging in the wrong place",
    "The cost of knowing the truth",
    "Second chances with conditions",
    "A tradition nobody questions",
    "Memory versus evidence",
    "Trust after a small betrayal",
    "Freedom that creates responsibility",
    "The fear of becoming predictable",
    "Home as a moving target",
    "A victory that solves the wrong problem",
    "The difference between justice and revenge",
    "Growing apart without becoming enemies",
    "What people inherit besides possessions",
    "A secret that protects the wrong person",
    "Choosing what to preserve",
    "Identity shaped by other people's expectations",
    "Ambition after success",
    "The consequences of being believed",
    "Kindness with an unintended cost",
  ],
  "Art & Design": [
    "Soft machinery",
    "Nature reclaiming geometry",
    "Future nostalgia",
    "Beautiful imperfections",
    "Light inside ordinary objects",
    "Modern folklore",
    "Quiet chaos",
    "Objects with secret lives",
    "Organic symmetry",
    "Weather as a character",
    "Fragments and reconstruction",
    "Tiny worlds in large spaces",
    "The color of memory",
    "Impossible architecture",
    "Everyday rituals",
    "Old materials, new functions",
    "Movement frozen mid-action",
    "Patterns found in accidents",
    "The space between things",
    "Technology made gentle",
  ],
  "Games & Projects": [
    "Limited resources, changing rules",
    "Cooperation with hidden incentives",
    "A map that cannot be trusted",
    "Progress through sacrifice",
    "One tool, many unintended uses",
    "A system that learns from failure",
    "Competing definitions of success",
    "The environment as the opponent",
    "Information as a scarce resource",
    "A peaceful task under growing pressure",
    "Building while something else disappears",
    "Rules that evolve with the player",
    "Repair instead of replacement",
    "Exploration with irreversible choices",
    "A world built around one unusual constraint",
    "Success that changes the objective",
    "Roles that swap unexpectedly",
    "A project shaped by community choices",
    "A small action with system-wide effects",
    "Balancing speed, safety, and quality",
  ],
  "Events & Parties": [
    "Midnight garden",
    "Retro future",
    "Around the world",
    "Hidden library",
    "Neon arcade",
    "Coastal sunset",
    "Celestial night",
    "Vintage cinema",
    "Botanical studio",
    "Winter lights",
    "Desert dusk",
    "Modern masquerade",
    "Color-block celebration",
    "Campfire stories",
    "Old-school game night",
    "Tropical minimalism",
    "Black and white contrast",
    "Street-market evening",
    "Moon and stars",
    "Creative workshop",
  ],
  General: [
    "Transformation",
    "Discovery",
    "Contrast",
    "Connection",
    "Resilience",
    "Curiosity",
    "Balance",
    "Reinvention",
    "Hidden patterns",
    "Unexpected collaboration",
    "Small beginnings",
    "Changing perspective",
    "Useful constraints",
    "Ordinary things seen differently",
    "The value of repair",
    "Cycles and seasons",
    "Signals and noise",
    "Boundaries",
    "Movement and stillness",
    "Past ideas in new contexts",
  ],
};

const counts = [1, 5, 10];

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function RandomThemeGenerator() {
  const [category, setCategory] = useState("Any");
  const [count, setCount] = useState(5);
  const [themes, setThemes] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  function generate() {
    const pool =
      category === "Any"
        ? Object.values(themePools).flat()
        : themePools[category];

    setThemes(shuffle(pool).slice(0, count));
    setCopied(false);
  }

  async function copyThemes() {
    if (!themes.length) return;
    await navigator.clipboard.writeText(
      themes.map((theme, index) => `${index + 1}. ${theme}`).join("\n"),
    );
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function reset() {
    setCategory("Any");
    setCount(5);
    setThemes([]);
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Generate random themes</h2>
            <p>Choose a use case or keep it broad, then generate one or several theme ideas.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="theme-category">Theme category</label>
            <select
              className="select"
              id="theme-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option>Any</option>
              {Object.keys(themePools).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="theme-count">Number of themes</label>
            <select
              className="select"
              id="theme-count"
              value={count}
              onChange={(event) => setCount(Number(event.target.value))}
            >
              {counts.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate}>
            Generate themes
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your random themes</h2>
            <p>Use one as-is, combine two, or generate again for a different direction.</p>
          </div>
          <div className="output-toolbar">
            {copied && <span className="status">Copied</span>}
            <button
              className="button secondary small"
              type="button"
              onClick={copyThemes}
              disabled={!themes.length}
            >
              Copy
            </button>
          </div>
        </div>

        {themes.length ? (
          <ol className="output">
            {themes.map((theme) => <li key={theme}>{theme}</li>)}
          </ol>
        ) : (
          <div className="output empty">Your random theme ideas will appear here.</div>
        )}
      </section>
    </div>
  );
}
