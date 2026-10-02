"use client";

import { useState } from "react";

const genres = [
  "Any genre",
  "Fantasy",
  "Romance",
  "Mystery",
  "Thriller",
  "Science fiction",
  "Adventure",
  "Historical",
  "Contemporary",
  "Drama",
];

const scopes = ["Short story", "Novella", "Novel", "Screenplay"];
const structures = ["Three-act", "Five-act", "Seven-point", "Hero's journey"];
const tones = ["Balanced", "Hopeful", "Dark", "Suspenseful", "Bittersweet", "Comedic"];

const protagonists = [
  "a capable professional whose usual methods stop working",
  "an outsider who wants acceptance without losing their independence",
  "a reluctant leader responsible for people with conflicting needs",
  "a talented beginner hiding one costly mistake",
  "a person returning to a place they deliberately left behind",
  "a loyal friend forced to choose between a promise and the truth",
  "an ambitious rival who discovers that winning has a hidden cost",
  "a caretaker whose private goal conflicts with their public duty",
];

const goals = [
  "recover something important before it permanently changes hands",
  "prove a claim that almost nobody is willing to investigate",
  "protect a person whose own choices keep increasing the risk",
  "reach a place or deadline before a competing group does",
  "repair a relationship without revealing the full reason it broke",
  "expose a system that benefits from keeping one fact hidden",
  "finish a difficult mission while preserving an important principle",
  "solve a disappearance that becomes more personal with every clue",
];

const obstacles = [
  "the obvious solution would create a second problem with larger consequences",
  "the person with the most useful information has a reason to mislead them",
  "success depends on cooperating with someone pursuing a different outcome",
  "every gain costs time, trust, or access somewhere else",
  "a rule everyone accepts turns out to protect the wrong thing",
  "the protagonist's strongest skill also reinforces their central blind spot",
  "the conflict changes faster than the protagonist can rely on old assumptions",
  "a private obligation keeps colliding with the public goal",
];

const stakes = [
  "failure would permanently damage the protagonist's most important relationship",
  "failure would leave a community dependent on a system that cannot be trusted",
  "success achieved the wrong way would cost the protagonist the thing they were trying to protect",
  "delay would make the original goal possible only at a much higher personal cost",
  "the protagonist risks becoming responsible for the same harm they oppose",
  "the choice will decide whether the protagonist can return to their old life at all",
];

const incidents = [
  "An ordinary task produces evidence that should not exist.",
  "A trusted person makes a request that contradicts everything they previously wanted.",
  "The protagonist receives an opportunity that solves one problem while creating a larger obligation.",
  "A routine failure reveals that somebody has been quietly preparing for the same crisis.",
  "A stranger arrives with proof that the protagonist's private assumption is wrong.",
  "An important object, message, or record surfaces in the least useful place.",
];

const complications = [
  "A first attempt works, but it exposes the protagonist to a new opponent.",
  "A useful ally agrees to help only if the protagonist accepts a conflicting condition.",
  "New evidence weakens the original explanation while strengthening the stakes.",
  "The protagonist solves a practical problem and accidentally worsens a relationship.",
  "A deadline moves forward after somebody else acts on incomplete information.",
  "The safest route becomes unavailable, forcing a choice between speed and trust.",
  "A secondary character pursues the same goal for a reason the protagonist cannot support.",
  "The protagonist learns that one apparent setback was deliberately engineered.",
];

const midpoints = [
  "The protagonist discovers that the goal is still achievable, but not for the reason they believed.",
  "A partial victory reveals that the central conflict is larger and more personal than expected.",
  "The protagonist gains leverage but loses the ability to remain neutral.",
  "New information turns a trusted ally into a source of uncertainty without proving betrayal.",
  "The story's central question changes from 'Can this be done?' to 'What will doing it cost?'",
];

const crises = [
  "The protagonist can protect the goal or protect a key relationship, but the old plan cannot do both.",
  "The last reliable source of help disappears just as the antagonist gains an advantage.",
  "The protagonist's earlier shortcut creates a consequence that must be faced before the final move.",
  "The evidence needed to win also exposes a truth the protagonist wanted to keep private.",
  "The protagonist is offered an easy victory that would repeat the very behavior they have opposed.",
];

const climaxes = [
  "The protagonist commits to a risky plan that uses what they learned instead of returning to their original method.",
  "The final confrontation forces the protagonist to choose which cost they are actually willing to pay.",
  "The protagonist wins access to the truth but must decide how much of it should be used.",
  "The protagonist turns an earlier weakness into leverage by accepting its consequence openly.",
  "The protagonist rejects the easiest solution and creates a narrower path that preserves the story's central value.",
];

const resolutions = [
  "Resolve the main conflict, then show one concrete consequence that proves the protagonist cannot simply return to the beginning.",
  "Give the protagonist a meaningful gain alongside a smaller loss that keeps the ending earned rather than perfect.",
  "Close the external goal while leaving the protagonist with a changed relationship to the theme.",
  "Let the final image echo an early detail, but change its meaning because of the protagonist's choices.",
  "End with the immediate problem settled and one believable future responsibility created by that solution.",
];

const genreLenses: Record<string, string> = {
  "Any genre": "Keep the genre flexible and let character decisions define the story.",
  Fantasy: "Make the world rules, culture, or magic system affect what choices are possible.",
  Romance: "Tie the external plot to trust, vulnerability, compatibility, and mutual choice.",
  Mystery: "Plant interpretable clues early and make the solution follow from evidence already present.",
  Thriller: "Use deadlines, pursuit, reversals, and limited information to maintain pressure.",
  "Science fiction": "Let one speculative rule create social or personal consequences instead of acting as decoration.",
  Adventure: "Build progress through locations, obstacles, alliances, and costly decisions.",
  Historical: "Make period constraints materially affect status, travel, information, and available choices.",
  Contemporary: "Ground the conflict in recognizable institutions, relationships, and practical consequences.",
  Drama: "Let competing needs and relationships create pressure even when no clear villain exists.",
};

const structureNotes: Record<string, string> = {
  "Three-act": "Shape the outline as setup, confrontation, and resolution, with the midpoint changing the protagonist's strategy.",
  "Five-act": "Use setup, rising action, turning point, falling pressure, and resolution, letting each section alter the next.",
  "Seven-point": "Treat the inciting incident, two pinch points, midpoint, crisis, climax, and resolution as connected decision points.",
  "Hero's journey": "Use departure, trials, transformation, and return as a flexible character arc rather than a mandatory checklist.",
};

const scopeNotes: Record<string, string> = {
  "Short story": "Keep the cast tight and let each major beat do more than one job.",
  Novella: "Allow one meaningful subplot, but keep it tied directly to the central conflict.",
  Novel: "Expand each major beat into several scenes and allow secondary goals to cross the main plot.",
  Screenplay: "Prioritize visible decisions, scene-level reversals, and externalized conflict.",
};

function pick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function pickDifferent(items: string[], first: string): string {
  const filtered = items.filter((item) => item !== first);
  return pick(filtered);
}

export function StoryPlotGenerator() {
  const [genre, setGenre] = useState("Any genre");
  const [scope, setScope] = useState("Novel");
  const [structure, setStructure] = useState("Three-act");
  const [tone, setTone] = useState("Balanced");
  const [premise, setPremise] = useState("");
  const [theme, setTheme] = useState("");
  const [includeTwist, setIncludeTwist] = useState(true);
  const [includeSubplot, setIncludeSubplot] = useState(true);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    const protagonist = pick(protagonists);
    const goal = pick(goals);
    const obstacle = pick(obstacles);
    const firstComplication = pick(complications);
    const secondComplication = pickDifferent(complications, firstComplication);

    const corePremise = premise.trim()
      ? premise.trim()
      : `${protagonist} must ${goal}, but ${obstacle}.`;

    const blocks = [
      `Story scope: ${scope}`,
      `Genre: ${genre}`,
      `Structure: ${structure}`,
      `Tone: ${tone}`,
      "",
      `Core premise: ${corePremise}`,
      `Protagonist: ${protagonist}.`,
      `Central goal: ${goal}.`,
      `Main opposition: ${obstacle}.`,
      `Stakes: ${pick(stakes)}.`,
      theme.trim() ? `Theme thread: ${theme.trim()}.` : "",
      "",
      `Inciting incident: ${pick(incidents)}`,
      `Rising complication 1: ${firstComplication}`,
      `Rising complication 2: ${secondComplication}`,
      `Midpoint shift: ${pick(midpoints)}`,
      includeSubplot
        ? "Subplot direction: Give a secondary character a goal that initially appears separate, then make one of their choices complicate the protagonist's main objective."
        : "",
      includeTwist
        ? "Twist direction: Reinterpret an established motive, clue, or relationship without introducing a new rule at the last minute."
        : "",
      `Crisis: ${pick(crises)}`,
      `Climax: ${pick(climaxes)}`,
      `Resolution: ${pick(resolutions)}`,
      "",
      `Genre lens: ${genreLenses[genre]}`,
      `Structure note: ${structureNotes[structure]}`,
      `Scope note: ${scopeNotes[scope]}`,
      "Continuity check: Make every major turn follow from an earlier choice, clue, relationship, or rule. Remove any beat that only exists to force the plot forward.",
    ].filter((block) => block !== "");

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
    setScope("Novel");
    setStructure("Three-act");
    setTone("Balanced");
    setPremise("");
    setTheme("");
    setIncludeTwist(true);
    setIncludeSubplot(true);
    setOutput("");
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Generate a story plot</h2>
            <p>
              Choose the scope, genre, and structure, then generate a complete
              narrative spine from inciting incident to resolution.
            </p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="plot-genre">Genre</label>
            <select
              className="select"
              id="plot-genre"
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
            >
              {genres.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="plot-scope">Story scope</label>
            <select
              className="select"
              id="plot-scope"
              value={scope}
              onChange={(event) => setScope(event.target.value)}
            >
              {scopes.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="plot-structure">Plot structure</label>
            <select
              className="select"
              id="plot-structure"
              value={structure}
              onChange={(event) => setStructure(event.target.value)}
            >
              {structures.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="plot-tone">Tone</label>
            <select
              className="select"
              id="plot-tone"
              value={tone}
              onChange={(event) => setTone(event.target.value)}
            >
              {tones.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field full">
            <label htmlFor="plot-premise">Optional story premise</label>
            <input
              className="input"
              id="plot-premise"
              value={premise}
              onChange={(event) => setPremise(event.target.value)}
              placeholder="Example: A cartographer discovers a road that appears only on maps drawn from memory"
            />
          </div>

          <div className="field full">
            <label htmlFor="plot-theme">Optional theme</label>
            <input
              className="input"
              id="plot-theme"
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              placeholder="Examples: ambition, belonging, trust, grief, responsibility"
            />
          </div>

          <div className="field">
            <label>
              <input
                type="checkbox"
                checked={includeTwist}
                onChange={(event) => setIncludeTwist(event.target.checked)}
              />{" "}
              Include twist direction
            </label>
          </div>

          <div className="field">
            <label>
              <input
                type="checkbox"
                checked={includeSubplot}
                onChange={(event) => setIncludeSubplot(event.target.checked)}
              />{" "}
              Include subplot direction
            </label>
          </div>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate}>
            Generate story plot
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your story plot</h2>
            <p>
              Treat the beats as planning checkpoints. Replace any element that
              does not fit your characters or world.
            </p>
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
          {output || "Your structured story plot will appear here."}
        </div>
      </section>
    </div>
  );
}
