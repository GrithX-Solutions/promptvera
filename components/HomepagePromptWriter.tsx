"use client";

import { useState } from "react";
import { buildUniversalPrompt } from "@/lib/prompt-engine";

type Fields = {
  context: string;
  audience: string;
  constraints: string;
  outputFormat: string;
  tone: string;
  example: string;
  avoid: string;
};

const emptyFields: Fields = {
  context: "",
  audience: "",
  constraints: "",
  outputFormat: "",
  tone: "",
  example: "",
  avoid: "",
};

export function HomepagePromptWriter() {
  const [task, setTask] = useState("");
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function writePrompt() {
    setOutput(buildUniversalPrompt(task, fields));
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
    setFields(emptyFields);
    setOutput("");
    setCopied(false);
  }

  const suggestions = [
    !fields.context.trim()
      ? "Add context or source material when background facts should control the answer."
      : "",
    !fields.constraints.trim()
      ? "Add non-negotiable constraints when the result must preserve rules, scope, or exclusions."
      : "",
    !fields.outputFormat.trim()
      ? "Specify the output format if you need a table, checklist, JSON object, draft, code patch, or another reusable structure."
      : "",
  ].filter(Boolean);

  return (
    <div className="tool-shell home-prompt-tool" id="prompt-writer">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Write a prompt from your goal</h2>
            <p>PromptVera structures the text locally in your browser. No login and no paid AI API call.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="home-prompt-task">What should AI do?</label>
            <textarea
              className="textarea"
              id="home-prompt-task"
              value={task}
              onChange={(event) => setTask(event.target.value)}
              placeholder="Example: Compare three project-management tools for a 20-person remote software team and recommend one."
            />
          </div>

          <details className="advanced-fields field full">
            <summary>Add context, constraints, and output details <span>optional</span></summary>
            <div className="field-grid advanced-field-grid">
              <div className="field full">
                <label htmlFor="home-prompt-context">Context or source material</label>
                <textarea
                  className="textarea compact"
                  id="home-prompt-context"
                  value={fields.context}
                  onChange={(event) => update("context", event.target.value)}
                  placeholder="Facts, notes, definitions, source text, business rules, or other background the answer should use."
                />
              </div>

              <div className="field">
                <label htmlFor="home-prompt-audience">Audience</label>
                <input
                  className="input"
                  id="home-prompt-audience"
                  value={fields.audience}
                  onChange={(event) => update("audience", event.target.value)}
                  placeholder="Example: non-technical founders"
                />
              </div>

              <div className="field">
                <label htmlFor="home-prompt-tone">Tone or style</label>
                <input
                  className="input"
                  id="home-prompt-tone"
                  value={fields.tone}
                  onChange={(event) => update("tone", event.target.value)}
                  placeholder="Example: concise and professional"
                />
              </div>

              <div className="field full">
                <label htmlFor="home-prompt-constraints">Constraints or must-preserve rules</label>
                <textarea
                  className="textarea compact"
                  id="home-prompt-constraints"
                  value={fields.constraints}
                  onChange={(event) => update("constraints", event.target.value)}
                  placeholder="Example: use only the supplied data; keep the recommendation under $30/user/month; do not change the pricing assumptions."
                />
              </div>

              <div className="field full">
                <label htmlFor="home-prompt-format">Output format</label>
                <input
                  className="input"
                  id="home-prompt-format"
                  value={fields.outputFormat}
                  onChange={(event) => update("outputFormat", event.target.value)}
                  placeholder="Example: comparison table followed by a five-bullet recommendation"
                />
              </div>

              <div className="field full">
                <label htmlFor="home-prompt-example">Example or reference</label>
                <textarea
                  className="textarea compact"
                  id="home-prompt-example"
                  value={fields.example}
                  onChange={(event) => update("example", event.target.value)}
                  placeholder="Optional example of the structure, style, or result you want."
                />
              </div>

              <div className="field full">
                <label htmlFor="home-prompt-avoid">Things to avoid</label>
                <input
                  className="input"
                  id="home-prompt-avoid"
                  value={fields.avoid}
                  onChange={(event) => update("avoid", event.target.value)}
                  placeholder="Example: no invented statistics, no sales language, no long preamble"
                />
              </div>
            </div>
          </details>
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={writePrompt} disabled={!task.trim()}>
            Write my prompt
          </button>
          <button className="button secondary" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Your structured prompt</h2>
            <p>Review the wording, edit anything that matters, then paste it into the AI assistant you choose.</p>
          </div>
          <div className="output-toolbar">
            {copied && <span className="status">Copied</span>}
            <button className="button secondary small" type="button" onClick={copyOutput} disabled={!output}>
              Copy
            </button>
          </div>
        </div>

        <div className={output ? "output" : "output empty"}>
          {output || "Your prompt will appear here after you describe the task."}
        </div>

        {output && suggestions.length > 0 && (
          <div className="prompt-suggestions">
            <strong>Optional details that may improve the result</strong>
            <ul>
              {suggestions.map((suggestion) => <li key={suggestion}>{suggestion}</li>)}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
