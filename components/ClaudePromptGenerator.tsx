"use client";

import { useState } from "react";

const taskGuidance: Record<string, string[]> = {
  General: [
    "Complete the task directly and preserve all explicit user constraints.",
    "If an important detail is genuinely missing, identify it rather than inventing facts.",
  ],
  "Research & synthesis": [
    "Separate source-supported facts from interpretation or inference.",
    "Organize the synthesis around the user's decision or question rather than source order.",
    "Call out material uncertainty, conflicts, or missing evidence.",
  ],
  "Writing & editing": [
    "Preserve the intended meaning, audience, and factual claims.",
    "Match the requested tone without adding unsupported claims or unnecessary filler.",
    "Return the finished writing first unless commentary is explicitly requested.",
  ],
  Coding: [
    "Prefer a minimal, maintainable solution that satisfies the stated constraints.",
    "Check edge cases, error handling, and integration assumptions before presenting the final code.",
    "Explain only the implementation decisions that materially affect use or maintenance.",
  ],
  Analysis: [
    "Break the problem into relevant factors and compare them consistently.",
    "Distinguish observations, assumptions, calculations, and conclusions.",
    "Do not manufacture precision when the available information is uncertain.",
  ],
  Planning: [
    "Turn the goal into concrete steps, dependencies, and decision points.",
    "Prioritize the smallest sequence that can produce a useful result.",
    "Make constraints, risks, and completion criteria explicit.",
  ],
};

const roles: Record<string, string> = {
  General: "a precise, practical assistant",
  "Research & synthesis": "a careful research analyst",
  "Writing & editing": "an experienced editor and writer",
  Coding: "a senior software engineer",
  Analysis: "a rigorous analytical consultant",
  Planning: "a pragmatic project planner",
};

const formatRules: Record<string, string> = {
  "Natural response": "Use the clearest natural structure for the task. Do not over-format the answer.",
  "Structured Markdown": "Use concise Markdown headings and bullets only where they improve scanability.",
  "Step-by-step plan": "Return an ordered implementation plan with concrete actions, dependencies, and completion checks.",
  "Table": "Use a compact table for the main comparison, then add only the explanation needed to interpret it.",
  JSON: "Return valid JSON only. Do not wrap it in Markdown fences or add prose outside the JSON.",
  "Code + notes": "Return the working code first, followed by brief implementation notes and any required setup steps.",
};

function linesFromText(value: string) {
  return value
    .split(/\n|;/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function ClaudePromptGenerator() {
  const [task, setTask] = useState("");
  const [taskType, setTaskType] = useState("General");
  const [role, setRole] = useState("");
  const [context, setContext] = useState("");
  const [audience, setAudience] = useState("");
  const [constraints, setConstraints] = useState("");
  const [example, setExample] = useState("");
  const [format, setFormat] = useState("Natural response");
  const [detail, setDetail] = useState("Balanced");
  const [xml, setXml] = useState(true);
  const [longContext, setLongContext] = useState(false);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    if (!task.trim()) return;

    const chosenRole = role.trim() || roles[taskType];
    const customConstraints = linesFromText(constraints);
    const detailRule =
      detail === "Concise"
        ? "Keep the answer concise and remove nonessential explanation."
        : detail === "Detailed"
          ? "Include the detail needed to make the result complete, concrete, and usable."
          : "Use enough detail to complete the task well without padding.";

    const requirements = [
      ...taskGuidance[taskType],
      detailRule,
      ...customConstraints,
    ];

    if (xml) {
      const contextBlock = context.trim()
        ? `<context>\n${escapeXml(context.trim())}\n</context>`
        : "";
      const taskBlock = `<task>\n${escapeXml(task.trim())}\n</task>`;
      const blocks = [
        `<role>\n${escapeXml(chosenRole)}\n</role>`,
        longContext ? contextBlock : taskBlock,
        audience.trim()
          ? `<audience>\n${escapeXml(audience.trim())}\n</audience>`
          : "",
        longContext ? taskBlock : contextBlock,
        `<requirements>\n${requirements
          .map((item) => `- ${escapeXml(item)}`)
          .join("\n")}\n</requirements>`,
        `<output_format>\n${escapeXml(formatRules[format])}\n</output_format>`,
        example.trim()
          ? `<examples>\n${escapeXml(example.trim())}\n</examples>`
          : "",
        `<success_criteria>\n- The response directly completes the requested task.\n- Explicit constraints are followed consistently.\n- Unsupported facts are not invented.\n- The output is ready to use or review without unnecessary preamble.\n</success_criteria>`,
      ].filter(Boolean);

      setOutput(blocks.join("\n\n"));
    } else {
      const contextBlock = context.trim() ? `CONTEXT\n${context.trim()}` : "";
      const taskBlock = `TASK\n${task.trim()}`;
      const blocks = [
        `ROLE\n${chosenRole}`,
        longContext ? contextBlock : taskBlock,
        audience.trim() ? `AUDIENCE\n${audience.trim()}` : "",
        longContext ? taskBlock : contextBlock,
        `REQUIREMENTS\n${requirements.map((item) => `- ${item}`).join("\n")}`,
        `OUTPUT FORMAT\n${formatRules[format]}`,
        example.trim() ? `REFERENCE EXAMPLE\n${example.trim()}` : "",
        "SUCCESS CRITERIA\n- Directly complete the task.\n- Follow explicit constraints.\n- Do not invent unsupported facts.\n- Return a usable result without unnecessary preamble.",
      ].filter(Boolean);

      setOutput(blocks.join("\n\n"));
    }

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
    setRole("");
    setContext("");
    setAudience("");
    setConstraints("");
    setExample("");
    setFormat("Natural response");
    setDetail("Balanced");
    setXml(true);
    setLongContext(false);
    setOutput("");
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Build a structured Claude prompt</h2>
            <p>Start with the task, then add only the context and constraints that actually change the result.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="claude-task">What should Claude do?</label>
            <textarea
              className="textarea"
              id="claude-task"
              value={task}
              onChange={(event) => setTask(event.target.value)}
              placeholder="Example: Compare these three onboarding flows and recommend the clearest sequence for a first-time user..."
            />
          </div>

          <div className="field">
            <label htmlFor="claude-type">Task type</label>
            <select
              className="select"
              id="claude-type"
              value={taskType}
              onChange={(event) => setTaskType(event.target.value)}
            >
              {Object.keys(taskGuidance).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="claude-format">Output format</label>
            <select
              className="select"
              id="claude-format"
              value={format}
              onChange={(event) => setFormat(event.target.value)}
            >
              {Object.keys(formatRules).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="claude-detail">Detail level</label>
            <select
              className="select"
              id="claude-detail"
              value={detail}
              onChange={(event) => setDetail(event.target.value)}
            >
              <option>Concise</option>
              <option>Balanced</option>
              <option>Detailed</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="claude-role">Role (optional)</label>
            <input
              className="input"
              id="claude-role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              placeholder={roles[taskType]}
            />
          </div>

          <div className="field full">
            <label htmlFor="claude-context">Context (optional)</label>
            <textarea
              className="textarea"
              id="claude-context"
              value={context}
              onChange={(event) => setContext(event.target.value)}
              placeholder="Add background, source material, business rules, current state, or definitions Claude needs to interpret the task correctly."
            />
          </div>

          <div className="field full">
            <label htmlFor="claude-audience">Audience (optional)</label>
            <input
              className="input"
              id="claude-audience"
              value={audience}
              onChange={(event) => setAudience(event.target.value)}
              placeholder="Example: technical founders evaluating a hosting migration"
            />
          </div>

          <div className="field full">
            <label htmlFor="claude-constraints">Extra constraints (optional)</label>
            <textarea
              className="textarea"
              id="claude-constraints"
              value={constraints}
              onChange={(event) => setConstraints(event.target.value)}
              placeholder={"One constraint per line, for example:\nDo not exceed 500 words\nUse only the supplied sources\nKeep existing function names unchanged"}
            />
          </div>

          <div className="field full">
            <label htmlFor="claude-example">Reference example(s) (optional)</label>
            <textarea
              className="textarea"
              id="claude-example"
              value={example}
              onChange={(event) => setExample(event.target.value)}
              placeholder="Paste one or more relevant examples of the style, structure, or transformation you want Claude to follow."
            />
          </div>

          <div className="field full">
            <label className="checkbox-row" htmlFor="claude-long-context">
              <input
                id="claude-long-context"
                type="checkbox"
                checked={longContext}
                onChange={(event) => setLongContext(event.target.checked)}
              />
              <span>Long-context mode: place long context before the task and query</span>
            </label>
          </div>

          <div className="field full">
            <label className="checkbox-row" htmlFor="claude-xml">
              <input
                id="claude-xml"
                type="checkbox"
                checked={xml}
                onChange={(event) => setXml(event.target.checked)}
              />
              <span>Use XML sections to separate role, context, task, requirements, and output format</span>
            </label>
          </div>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate} disabled={!task.trim()}>
            Generate Claude prompt
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your Claude prompt</h2>
            <p>Review the generated structure, remove anything unnecessary, then paste it into Claude.</p>
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
          {output || "Your structured Claude prompt will appear here."}
        </div>
      </section>
    </div>
  );
}
