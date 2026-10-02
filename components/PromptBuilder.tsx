"use client";

import { useMemo, useState } from "react";
import { buildToolPrompt } from "@/lib/prompt-engine";
import { toolConfigs, type ToolId } from "@/lib/tool-configs";

export function PromptBuilder({ toolId }: { toolId: ToolId }) {
  const config = toolConfigs[toolId];

  const defaults = useMemo(
    () =>
      Object.fromEntries(
        config.fields.map((field) => [field.key, field.defaultValue ?? ""]),
      ) as Record<string, string>,
    [config.fields],
  );

  const [idea, setIdea] = useState("");
  const [values, setValues] = useState<Record<string, string>>(defaults);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function update(key: string, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function generate() {
    setOutput(buildToolPrompt(toolId, idea, values));
    setCopied(false);
  }

  async function copyOutput() {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function reset() {
    setIdea("");
    setValues(defaults);
    setOutput("");
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>Build your prompt</h2>
            <p>No login and no paid AI API required.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor={`${toolId}-idea`}>{config.inputLabel}</label>
            <textarea
              className="textarea"
              id={`${toolId}-idea`}
              value={idea}
              onChange={(event) => setIdea(event.target.value)}
              placeholder={config.inputPlaceholder}
            />
          </div>

          {config.fields.map((field) => (
            <div className={field.full ? "field full" : "field"} key={field.key}>
              <label htmlFor={`${toolId}-${field.key}`}>
                {field.label}
                {field.help && <span className="field-help"> — {field.help}</span>}
              </label>
              {field.type === "select" ? (
                <select
                  className="select"
                  id={`${toolId}-${field.key}`}
                  value={values[field.key] ?? ""}
                  onChange={(event) => update(field.key, event.target.value)}
                >
                  {field.options?.map((option) => <option key={option}>{option}</option>)}
                </select>
              ) : (
                <input
                  className="input"
                  id={`${toolId}-${field.key}`}
                  value={values[field.key] ?? ""}
                  onChange={(event) => update(field.key, event.target.value)}
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate} disabled={!idea.trim()}>
            Generate prompt
          </button>
          <button className="button secondary" type="button" onClick={reset}>Reset</button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>Generated prompt</h2>
            <p>Copy it, edit it, then paste it into your target AI tool.</p>
          </div>
          <div className="output-toolbar">
            {copied && <span className="status">Copied</span>}
            <button className="button secondary small" type="button" onClick={copyOutput} disabled={!output}>Copy</button>
          </div>
        </div>
        <div className={output ? "output" : "output empty"}>
          {output || "Your structured prompt will appear here."}
        </div>
      </section>
    </div>
  );
}
