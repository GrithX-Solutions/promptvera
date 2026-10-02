"use client";

import { useState } from "react";

const taskGuidance: Record<string, string[]> = {
  General: [
    "Complete the requested task directly.",
    "Use only assumptions that are necessary, and label important assumptions.",
    "Do not invent facts that are not supported by the provided context.",
  ],
  Writing: [
    "Preserve the intended meaning and factual claims.",
    "Match the requested audience, tone, and level of formality.",
    "Return the finished writing before any optional commentary.",
  ],
  Research: [
    "Separate source-supported facts from interpretation.",
    "Use current sources when freshness matters.",
    "Flag uncertainty, conflicting evidence, or missing information.",
  ],
  Analysis: [
    "Compare relevant factors consistently.",
    "Show the evidence or calculations needed to support the conclusion.",
    "Avoid false precision when the inputs are uncertain.",
  ],
  Coding: [
    "Prefer the smallest maintainable solution that satisfies the request.",
    "Check edge cases, integration assumptions, and error handling.",
    "Return working code first unless the user asks for explanation first.",
  ],
  Planning: [
    "Turn the goal into concrete steps, dependencies, and completion checks.",
    "Prioritize actions by impact and sequencing rather than by length.",
    "Call out decisions that require user input.",
  ],
};

const formats: Record<string, string> = {
  "Natural response": "Use the clearest natural structure for the task.",
  "Structured Markdown": "Use concise Markdown headings and bullets where they improve scanability.",
  "Step-by-step plan": "Return an ordered plan with actions, dependencies, and completion checks.",
  Table: "Use a compact table for the main comparison, followed by only the explanation needed.",
  JSON: "Return valid JSON only, with no Markdown wrapper or prose outside the JSON.",
  "Code + notes": "Return the working code first, then brief implementation notes and setup requirements.",
};

const tones = [
  "Neutral",
  "Professional",
  "Friendly",
  "Concise",
  "Persuasive",
  "Technical",
  "Conversational",
];

const interactionModes: Record<string, string> = {
  "Answer now":
    "If a minor detail is missing, make a reasonable assumption and label it. Ask a question only if the missing information would materially change the result.",
  "Ask if essential":
    "If an essential detail is missing, ask one focused clarifying question before completing the task. Otherwise answer directly.",
  "Give options":
    "When there are multiple valid directions, present 2–3 meaningfully different options and explain the trade-off briefly.",
};

function cleanLines(value: string) {
  return value
    .split(/\n|;/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function ChatGPTPromptGenerator() {
  const [task, setTask] = useState("");
  const [taskType, setTaskType] = useState("General");
  const [context, setContext] = useState("");
  const [sourceMaterial, setSourceMaterial] = useState("");
  const [audience, setAudience] = useState("");
  const [constraints, setConstraints] = useState("");
  const [example, setExample] = useState("");
  const [format, setFormat] = useState("Natural response");
  const [tone, setTone] = useState("Neutral");
  const [interaction, setInteraction] = useState("Answer now");
  const [verification, setVerification] = useState(true);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    if (!task.trim()) return;

    const requirements = [
      ...taskGuidance[taskType],
      ...cleanLines(constraints),
    ];

    const blocks = [
      `TASK\n${task.trim()}`,
      context.trim() ? `CONTEXT\n${context.trim()}` : "",
      audience.trim() ? `AUDIENCE\n${audience.trim()}` : "",
      sourceMaterial.trim()
        ? `SOURCE MATERIAL\nUse the material below as the requested basis for the task. Do not silently replace unsupported details with outside assumptions.\n\n"""\n${sourceMaterial.trim()}\n"""`
        : "",
      `REQUIREMENTS\n${requirements.map((item) => `- ${item}`).join("\n")}`,
      `TONE\n${tone}`,
      `OUTPUT FORMAT\n${formats[format]}`,
      `INTERACTION\n${interactionModes[interaction]}`,
      example.trim()
        ? `REFERENCE EXAMPLE\nUse this only as a pattern for style or structure unless I explicitly say its facts should be reused.\n\n"""\n${example.trim()}\n"""`
        : "",
      verification
        ? "FINAL CHECK\nBefore responding, confirm that you completed the actual task, followed every explicit constraint, did not invent unsupported facts, and used the requested output format."
        : "",
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
    setSourceMaterial("");
    setAudience("");
    setConstraints("");
    setExample("");
    setFormat("Natural response");
    setTone("Neutral");
    setInteraction("Answer now");
    setVerification(true);
    setOutput("");
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Build a clearer ChatGPT prompt</h2>
            <p>Start with the task, then add only the context, source material, and constraints that change the answer.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="chatgpt-task">What should ChatGPT do?</label>
            <textarea
              className="textarea"
              id="chatgpt-task"
              value={task}
              onChange={(event) => setTask(event.target.value)}
              placeholder="Example: Compare these three pricing pages and recommend the clearest structure for a first-time buyer..."
            />
          </div>

          <div className="field">
            <label htmlFor="chatgpt-type">Task type</label>
            <select
              className="select"
              id="chatgpt-type"
              value={taskType}
              onChange={(event) => setTaskType(event.target.value)}
            >
              {Object.keys(taskGuidance).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="chatgpt-format">Output format</label>
            <select
              className="select"
              id="chatgpt-format"
              value={format}
              onChange={(event) => setFormat(event.target.value)}
            >
              {Object.keys(formats).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="chatgpt-tone">Tone</label>
            <select
              className="select"
              id="chatgpt-tone"
              value={tone}
              onChange={(event) => setTone(event.target.value)}
            >
              {tones.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="chatgpt-interaction">Interaction style</label>
            <select
              className="select"
              id="chatgpt-interaction"
              value={interaction}
              onChange={(event) => setInteraction(event.target.value)}
            >
              {Object.keys(interactionModes).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field full">
            <label htmlFor="chatgpt-context">Context (optional)</label>
            <textarea
              className="textarea"
              id="chatgpt-context"
              value={context}
              onChange={(event) => setContext(event.target.value)}
              placeholder="Add background, current state, definitions, business rules, or other context needed to interpret the task."
            />
          </div>

          <div className="field full">
            <label htmlFor="chatgpt-source">Source material (optional)</label>
            <textarea
              className="textarea"
              id="chatgpt-source"
              value={sourceMaterial}
              onChange={(event) => setSourceMaterial(event.target.value)}
              placeholder="Paste the text, notes, data, or source excerpt ChatGPT should work from."
            />
          </div>

          <div className="field full">
            <label htmlFor="chatgpt-audience">Audience (optional)</label>
            <input
              className="input"
              id="chatgpt-audience"
              value={audience}
              onChange={(event) => setAudience(event.target.value)}
              placeholder="Example: non-technical small-business owners"
            />
          </div>

          <div className="field full">
            <label htmlFor="chatgpt-constraints">Extra constraints (optional)</label>
            <textarea
              className="textarea"
              id="chatgpt-constraints"
              value={constraints}
              onChange={(event) => setConstraints(event.target.value)}
              placeholder={"One constraint per line, for example:\nKeep it under 600 words\nUse only the supplied source material\nDo not change existing function names"}
            />
          </div>

          <div className="field full">
            <label htmlFor="chatgpt-example">Reference example (optional)</label>
            <textarea
              className="textarea"
              id="chatgpt-example"
              value={example}
              onChange={(event) => setExample(event.target.value)}
              placeholder="Paste a short example of the style, format, or pattern you want the response to follow."
            />
          </div>

          <div className="field full">
            <label className="checkbox-row" htmlFor="chatgpt-check">
              <input
                id="chatgpt-check"
                type="checkbox"
                checked={verification}
                onChange={(event) => setVerification(event.target.checked)}
              />
              <span>Add a final self-check for task completion, constraints, unsupported facts, and output format</span>
            </label>
          </div>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate} disabled={!task.trim()}>
            Generate ChatGPT prompt
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your ChatGPT prompt</h2>
            <p>Review the generated structure, remove anything unnecessary, then paste it into ChatGPT.</p>
          </div>
          <div className="output-toolbar">
            {copied && <span className="status">Copied</span>}
            <button className="button secondary small" type="button" onClick={copyOutput} disabled={!output}>
              Copy
            </button>
          </div>
        </div>

        <div className={output ? "output" : "output empty"}>
          {output || "Your structured ChatGPT prompt will appear here."}
        </div>
      </section>
    </div>
  );
}
