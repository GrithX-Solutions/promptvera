"use client";

import { useState } from "react";

const taskGuidance: Record<string, string[]> = {
  General: [
    "Complete the task directly and keep the response focused on the requested result.",
    "Use the provided context as the primary basis for the answer.",
    "Do not invent unsupported details.",
  ],
  Research: [
    "Separate sourced facts from interpretation or inference.",
    "Use current information when freshness matters.",
    "Flag uncertainty, conflicts, or missing evidence.",
  ],
  Writing: [
    "Preserve the intended meaning and factual claims.",
    "Match the requested audience and tone.",
    "Return finished writing before optional commentary.",
  ],
  Analysis: [
    "Compare the relevant factors consistently.",
    "State assumptions that materially affect the conclusion.",
    "Avoid false precision when inputs are uncertain.",
  ],
  Coding: [
    "Prefer a minimal, maintainable solution.",
    "Check edge cases, integration assumptions, and error handling.",
    "Return working code first unless explanation is explicitly requested first.",
  ],
  Planning: [
    "Break the goal into concrete steps and dependencies.",
    "Identify blockers, decisions, and completion criteria.",
    "Prioritize the sequence that produces useful progress fastest.",
  ],
};

const formats: Record<string, string> = {
  "Natural response": "Use the clearest natural structure for the task.",
  "Structured Markdown": "Use concise Markdown headings and bullets where they improve scanability.",
  "Step-by-step plan": "Return an ordered plan with actions, dependencies, and completion checks.",
  Table: "Use a compact table for the main comparison, followed by only the explanation needed.",
  JSON: "Return valid JSON only, with no Markdown wrapper or prose outside the JSON.",
  "Code + notes": "Return working code first, then brief setup and implementation notes.",
};

const modalities = [
  "Text only",
  "Text + image",
  "Text + audio",
  "Text + video",
  "Mixed inputs",
];

const verbosityRules: Record<string, string> = {
  Concise: "Keep the answer concise and omit nonessential explanation.",
  Balanced: "Use enough detail to make the answer complete and usable without padding.",
  Detailed: "Provide a thorough answer with the details needed to execute or verify the result.",
};

function cleanLines(value: string) {
  return value
    .split(/\n|;/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function GeminiPromptGenerator() {
  const [task, setTask] = useState("");
  const [taskType, setTaskType] = useState("General");
  const [context, setContext] = useState("");
  const [parameters, setParameters] = useState("");
  const [audience, setAudience] = useState("");
  const [constraints, setConstraints] = useState("");
  const [example, setExample] = useState("");
  const [modality, setModality] = useState("Text only");
  const [format, setFormat] = useState("Natural response");
  const [verbosity, setVerbosity] = useState("Balanced");
  const [longContext, setLongContext] = useState(false);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    if (!task.trim()) return;

    const requirements = [
      ...taskGuidance[taskType],
      verbosityRules[verbosity],
      ...cleanLines(constraints),
    ];

    const contextBlock = context.trim()
      ? `CONTEXT\n${context.trim()}`
      : "";

    const taskBlock = `TASK\n${task.trim()}`;

    const blocks = [
      longContext ? contextBlock : taskBlock,
      longContext ? taskBlock : contextBlock,
      audience.trim() ? `AUDIENCE\n${audience.trim()}` : "",
      `INPUT MODALITY\n${modality}. Refer explicitly to each provided input that matters to the task.`,
      parameters.trim()
        ? `DEFINED TERMS / PARAMETERS\n${parameters.trim()}`
        : "",
      `REQUIREMENTS\n${requirements.map((item) => `- ${item}`).join("\n")}`,
      `OUTPUT FORMAT\n${formats[format]}`,
      example.trim()
        ? `REFERENCE EXAMPLE\nUse this as a pattern for structure or style, not as a source of facts unless I explicitly say otherwise.\n\n${example.trim()}`
        : "",
      "FINAL CHECK\nBefore answering, verify that the response follows the task, uses the relevant context, respects every explicit constraint, and matches the requested output format and verbosity.",
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
    setTask("");
    setTaskType("General");
    setContext("");
    setParameters("");
    setAudience("");
    setConstraints("");
    setExample("");
    setModality("Text only");
    setFormat("Natural response");
    setVerbosity("Balanced");
    setLongContext(false);
    setOutput("");
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Build a Gemini-focused prompt</h2>
            <p>Define the task, context, parameters, input type, and output requirements that materially affect the result.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="gemini-task">What should Gemini do?</label>
            <textarea
              className="textarea"
              id="gemini-task"
              value={task}
              onChange={(event) => setTask(event.target.value)}
              placeholder="Example: Compare these product screenshots and summarize the most important UX differences..."
            />
          </div>

          <div className="field">
            <label htmlFor="gemini-type">Task type</label>
            <select
              className="select"
              id="gemini-type"
              value={taskType}
              onChange={(event) => setTaskType(event.target.value)}
            >
              {Object.keys(taskGuidance).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="gemini-modality">Input type</label>
            <select
              className="select"
              id="gemini-modality"
              value={modality}
              onChange={(event) => setModality(event.target.value)}
            >
              {modalities.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="gemini-format">Output format</label>
            <select
              className="select"
              id="gemini-format"
              value={format}
              onChange={(event) => setFormat(event.target.value)}
            >
              {Object.keys(formats).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="gemini-verbosity">Verbosity</label>
            <select
              className="select"
              id="gemini-verbosity"
              value={verbosity}
              onChange={(event) => setVerbosity(event.target.value)}
            >
              {Object.keys(verbosityRules).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field full">
            <label htmlFor="gemini-context">Context (optional)</label>
            <textarea
              className="textarea"
              id="gemini-context"
              value={context}
              onChange={(event) => setContext(event.target.value)}
              placeholder="Add the document, situation, data, background, or reference material Gemini needs to interpret the task."
            />
          </div>

          <div className="field full">
            <label htmlFor="gemini-parameters">Definitions or parameters (optional)</label>
            <textarea
              className="textarea"
              id="gemini-parameters"
              value={parameters}
              onChange={(event) => setParameters(event.target.value)}
              placeholder={"Define ambiguous terms or values, for example:\nQualified lead = company with 20+ employees\nSuccess = under 2 seconds load time"}
            />
          </div>

          <div className="field full">
            <label htmlFor="gemini-audience">Audience (optional)</label>
            <input
              className="input"
              id="gemini-audience"
              value={audience}
              onChange={(event) => setAudience(event.target.value)}
              placeholder="Example: technical founders with limited SEO experience"
            />
          </div>

          <div className="field full">
            <label htmlFor="gemini-constraints">Extra constraints (optional)</label>
            <textarea
              className="textarea"
              id="gemini-constraints"
              value={constraints}
              onChange={(event) => setConstraints(event.target.value)}
              placeholder={"One constraint per line, for example:\nUse only the attached material\nKeep the answer under 500 words\nDo not change the data schema"}
            />
          </div>

          <div className="field full">
            <label htmlFor="gemini-example">Reference example (optional)</label>
            <textarea
              className="textarea"
              id="gemini-example"
              value={example}
              onChange={(event) => setExample(event.target.value)}
              placeholder="Paste a short example of the style, structure, or kind of output you want."
            />
          </div>

          <div className="field full">
            <label className="checkbox-row" htmlFor="gemini-long-context">
              <input
                id="gemini-long-context"
                type="checkbox"
                checked={longContext}
                onChange={(event) => setLongContext(event.target.checked)}
              />
              <span>Long-context mode: place the context first and the task immediately after it</span>
            </label>
          </div>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate} disabled={!task.trim()}>
            Generate Gemini prompt
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your Gemini prompt</h2>
            <p>Review the structure, remove anything unnecessary, then paste it into Gemini.</p>
          </div>
          <div className="output-toolbar">
            {copied && <span className="status">Copied</span>}
            <button className="button secondary small" type="button" onClick={copyOutput} disabled={!output}>
              Copy
            </button>
          </div>
        </div>

        <div className={output ? "output" : "output empty"}>
          {output || "Your structured Gemini prompt will appear here."}
        </div>
      </section>
    </div>
  );
}
