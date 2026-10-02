"use client";

import { useState } from "react";

const archetypes = [
  "Any archetype",
  "Reluctant leader",
  "Inventor",
  "Outsider",
  "Caretaker",
  "Rival",
  "Explorer",
  "Scholar",
  "Performer",
  "Survivor",
  "Idealist",
];

const genres = [
  "Any setting",
  "Modern",
  "Fantasy",
  "Science fiction",
  "Urban fantasy",
  "Historical",
  "Post-apocalyptic",
  "School / academy",
  "Mystery",
  "Adventure",
];

const personalityPairs = [
  "patient but stubborn",
  "charming but unreliable",
  "quiet but intensely competitive",
  "generous but defensive",
  "curious but risk-averse",
  "confident in public but uncertain in private",
  "disciplined but secretly impulsive",
  "skeptical but deeply loyal",
  "optimistic but poor at reading danger",
  "observant but reluctant to speak up",
];

const motivations = [
  "prove they can succeed without relying on the person everyone expects them to need",
  "protect a place or community that once protected them",
  "understand why a past event does not match the official story",
  "build a life that looks nothing like the one planned for them",
  "repair a mistake without revealing how serious it really was",
  "earn recognition for work that has always been credited to someone else",
  "keep one promise even when every practical reason says to abandon it",
  "find the person who taught them an important skill and then disappeared",
];

const flaws = [
  "They confuse preparation with control and struggle when plans change.",
  "They avoid asking for help until the problem is much larger.",
  "They assume competence should speak for itself and communicate too little.",
  "They forgive others more easily than they forgive themselves.",
  "They treat every disagreement as something that must be solved immediately.",
  "They are excellent at noticing patterns but poor at questioning their first interpretation.",
  "They hide uncertainty behind humor or competence.",
  "They are loyal to people long after the relationship stops being healthy.",
];

const relationshipHooks = [
  "Someone close to them wants the same outcome but disagrees completely about the method.",
  "A former rival now knows them better than their current allies do.",
  "A younger or less experienced character trusts them more than they trust themselves.",
  "They owe a favor to someone whose values make them uncomfortable.",
  "A family member or found-family figure remembers a version of them they are trying to outgrow.",
  "Their closest ally benefits if they fail, even though the ally does not want them to.",
];

const visualDetails = [
  "one practical item they always carry because of a past experience",
  "a color or material choice that contradicts their public image",
  "clothing adapted for their actual work rather than pure decoration",
  "one visible repair, modification, or reused object that suggests history",
  "a silhouette that reflects posture and habits, not only fashion",
  "one deliberately maintained detail and one detail they consistently neglect",
];

const scenePrompts = [
  "Show them making a small decision that reveals a larger value conflict.",
  "Put them in a situation where their strongest skill is not the skill the moment requires.",
  "Introduce them through another character noticing what they routinely hide.",
  "Give them a task they can easily complete, but only by breaking a personal rule.",
  "Let an ordinary interaction expose the difference between how they see themselves and how others see them.",
];

function pick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function OCPromptGenerator() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("Any setting");
  const [archetype, setArchetype] = useState("Any archetype");
  const [ageRole, setAgeRole] = useState("");
  const [visualFocus, setVisualFocus] = useState(true);
  const [storyFocus, setStoryFocus] = useState(true);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    const chosenGenre = genre === "Any setting" ? pick(genres.slice(1)) : genre;
    const chosenArchetype =
      archetype === "Any archetype" ? pick(archetypes.slice(1)) : archetype;

    const blocks = [
      name.trim() ? `Character name: ${name.trim()}` : "",
      `Setting / genre: ${chosenGenre}`,
      `Core archetype: ${chosenArchetype}`,
      ageRole.trim() ? `Age, role, or occupation: ${ageRole.trim()}` : "",
      `Personality contrast: ${pick(personalityPairs)}.`,
      `Primary motivation: They want to ${pick(motivations)}.`,
      `Meaningful flaw: ${pick(flaws)}`,
      storyFocus ? `Relationship hook: ${pick(relationshipHooks)}` : "",
      visualFocus ? `Visual design cue: Build the design around ${pick(visualDetails)}.` : "",
      storyFocus ? `Scene test: ${pick(scenePrompts)}` : "",
      "Keep the character internally consistent. Avoid adding traits only to make them seem unusual; connect important traits to choices, history, relationships, or the setting.",
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
    setName("");
    setGenre("Any setting");
    setArchetype("Any archetype");
    setAgeRole("");
    setVisualFocus(true);
    setStoryFocus(true);
    setOutput("");
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Generate an original character prompt</h2>
            <p>Build an OC from a setting, archetype, personality contrast, motivation, flaw, relationships, and optional visual cues.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="oc-name">Character name (optional)</label>
            <input
              className="input"
              id="oc-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Leave blank if you want to name the character later"
            />
          </div>

          <div className="field">
            <label htmlFor="oc-genre">Setting / genre</label>
            <select
              className="select"
              id="oc-genre"
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
            >
              {genres.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="oc-archetype">Archetype</label>
            <select
              className="select"
              id="oc-archetype"
              value={archetype}
              onChange={(event) => setArchetype(event.target.value)}
            >
              {archetypes.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field full">
            <label htmlFor="oc-role">Age, role, or occupation (optional)</label>
            <input
              className="input"
              id="oc-role"
              value={ageRole}
              onChange={(event) => setAgeRole(event.target.value)}
              placeholder="Examples: university student, retired pilot, apprentice mage, medic"
            />
          </div>

          <div className="field full">
            <label className="checkbox-row" htmlFor="oc-story">
              <input
                id="oc-story"
                type="checkbox"
                checked={storyFocus}
                onChange={(event) => setStoryFocus(event.target.checked)}
              />
              <span>Add relationship and scene-development hooks for writing</span>
            </label>
          </div>

          <div className="field full">
            <label className="checkbox-row" htmlFor="oc-visual">
              <input
                id="oc-visual"
                type="checkbox"
                checked={visualFocus}
                onChange={(event) => setVisualFocus(event.target.checked)}
              />
              <span>Add a visual design cue for drawing or character concept art</span>
            </label>
          </div>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate}>
            Generate OC prompt
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your OC prompt</h2>
            <p>Keep the parts that create useful tension or identity and replace anything that does not fit your character.</p>
          </div>
          <div className="output-toolbar">
            {copied && <span className="status">Copied</span>}
            <button className="button secondary small" type="button" onClick={copyOutput} disabled={!output}>
              Copy
            </button>
          </div>
        </div>

        <div className={output ? "output" : "output empty"}>
          {output || "Your original character prompt will appear here."}
        </div>
      </section>
    </div>
  );
}
