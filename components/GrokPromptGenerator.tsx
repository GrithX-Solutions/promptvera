"use client";

import { useState } from "react";

const taskDefaults: Record<string, string[]> = {
  General: [
    "Lead with the result I asked for.",
    "Separate verified facts from assumptions or inference.",
    "Do not invent missing details.",
  ],
  Research: [
    "Use current sources where freshness matters.",
    "Include direct source links or citations for important claims.",
    "Separate findings, interpretation, and unresolved questions.",
  ],
  Coding: [
    "Inspect the relevant context before proposing changes.",
    "Prefer the smallest maintainable solution that satisfies the task.",
    "Call out assumptions, edge cases, and anything that still needs verification.",
  ],
  Analysis: [
    "Compare the relevant factors consistently.",
    "Show the evidence behind the conclusion.",
    "Avoid false precision where the inputs are uncertain.",
  ],
  Planning: [
    "Turn the goal into concrete steps and dependencies.",
    "State what can be done immediately and what requires approval or external input.",
    "End with clear completion criteria.",
  ],
  Writing: [
    "Preserve the intended meaning and factual claims.",
    "Match the requested audience and tone.",
    "Return the finished writing without unnecessary preamble.",
  ],
};

const outputFormats: Record<string, string> = {
  "Natural response": "Use the clearest natural structure for the task.",
  "Structured Markdown": "Use concise Markdown headings and bullets where they improve scanability.",
  "Action plan": "Return an ordered action plan with dependencies, risks, and completion checks.",
  Table: "Use a compact table for the main comparison, followed by only the explanation needed.",
  JSON: "Return valid JSON only, with no Markdown wrapper or prose outside the JSON.",
  "Code + notes": "Return working code first, then brief setup or implementation notes.",
};

function cleanLines(value: string) {
  return value
    .split(/\n|;/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function GrokPromptGenerator() {
  const [goal, setGoal] = useState("");
  const [taskType, setTaskType] = useState("General");
  const [context, setContext] = useState("");
  const [source, setSource] = useState("");
  const [constraints, setConstraints] = useState("");
  const [format, setFormat] = useState("Natural response");
  const [evidence, setEvidence] = useState(true);
  const [approvalBoundary, setApprovalBoundary] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    if (!goal.trim()) return;

    const requirements = [
      ...taskDefaults[taskType],
      ...cleanLines(constraints),
    ];

    const blocks = [
      `RESULT NEEDED\n${goal.trim()}`,
      context.trim() ? `CONTEXT\n${context.trim()}` : "",
      source.trim()
        ? `SOURCE OF TRUTH\nUse this source or material as authoritative unless I explicitly say otherwise:\n${source.trim()}`
        : "",
      `TASK RULES\n${requirements.map((item) => `- ${item}`).join("\n")}`,
      approvalBoundary.trim()
        ? `ACTION BOUNDARY\n${approvalBoundary.trim()}\nDo not cross this boundary without explicit approval.`
        : "",
      `OUTPUT FORMAT\n${outputFormats[format]}`,
      evidence
        ? "EVIDENCE\nFor consequential claims or completed actions, include the evidence needed to independently review the result: source links, exact files/values, timestamps, or a concise action log where relevant."
        : "",
      "FINAL CHECK\nBefore answering, verify that the response directly satisfies the requested result, respects every explicit constraint, and clearly marks anything you could not verify.",
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
    setGoal("");
    setTaskType("General");
    setContext("");
    setSource("");
    setConstraints("");
    setFormat("Natural response");
    setEvidence(true);
    setApprovalBoundary("");
    setOutput("");
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Build a Grok-focused prompt</h2>
            <p>Lead with the result, then add only the context, evidence, and boundaries that change how Grok should work.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="grok-goal">What result do you need?</label>
            <textarea
              className="textarea"
              id="grok-goal"
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
              placeholder="Example: Compare these three tools and recommend which one fits a small support team..."
            />
          </div>

          <div className="field">
            <label htmlFor="grok-type">Task type</label>
            <select className="select" id="grok-type" value={taskType} onChange={(event) => setTaskType(event.target.value)}>
              {Object.keys(taskDefaults).map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="grok-format">Output format</label>
            <select className="select" id="grok-format" value={format} onChange={(event) => setFormat(event.target.value)}>
              {Object.keys(outputFormats).map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>

          <div className="field full">
            <label htmlFor="grok-context">Context (optional)</label>
            <textarea
              className="textarea"
              id="grok-context"
              value={context}
              onChange={(event) => setContext(event.target.value)}
              placeholder="Add the background Grok needs to interpret the task correctly."
            />
          </div>

          <div className="field full">
            <label htmlFor="grok-source">Source of truth (optional)</label>
            <textarea
              className="textarea"
              id="grok-source"
              value={source}
              onChange={(event) => setSource(event.target.value)}
              placeholder="Paste a URL, document note, repo path, dataset description, or other source Grok should treat as authoritative."
            />
          </div>

          <div className="field full">
            <label htmlFor="grok-constraints">Extra constraints (optional)</label>
            <textarea
              className="textarea"
              id="grok-constraints"
              value={constraints}
              onChange={(event) => setConstraints(event.target.value)}
              placeholder={"One per line, for example:\nUse only information from 2026\nKeep the answer under 600 words\nDo not modify production files"}
            />
          </div>

          <div className="field full">
            <label htmlFor="grok-boundary">Action / approval boundary (optional)</label>
            <input
              className="input"
              id="grok-boundary"
              value={approvalBoundary}
              onChange={(event) => setApprovalBoundary(event.target.value)}
              placeholder="Example: You may inspect and draft changes, but do not publish or delete anything."
            />
          </div>

          <div className="field full">
            <label className="checkbox-row" htmlFor="grok-evidence">
              <input
                id="grok-evidence"
                type="checkbox"
                checked={evidence}
                onChange={(event) => setEvidence(event.target.checked)}
              />
              <span>Ask Grok to include reviewable evidence for important claims or actions</span>
            </label>
          </div>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate} disabled={!goal.trim()}>
            Generate Grok prompt
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your Grok prompt</h2>
            <p>Review the structure, remove anything unnecessary, then paste it into Grok.</p>
          </div>
          <div className="output-toolbar">
            {copied && <span className="status">Copied</span>}
            <button className="button secondary small" type="button" onClick={copyOutput} disabled={!output}>
              Copy
            </button>
          </div>
        </div>
        <div className={output ? "output" : "output empty"}>
          {output || "Your structured Grok prompt will appear here."}
        </div>
      </section>
    </div>
  );
}
