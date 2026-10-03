"use client";

import { useState } from "react";
import { enhancePrompt } from "@/lib/prompt-engine";

type Props = {
  mode?: "enhance" | "improve";
};

export function PromptEnhancer({ mode = "enhance" }: Props) {
  const [input, setInput] = useState("");
  const [goal, setGoal] = useState("Create the best practical result for this request");
  const [model, setModel] = useState("General AI");
  const [detail, setDetail] = useState("Balanced");
  const [problems, setProblems] = useState("");
  const [preserve, setPreserve] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    setOutput(enhancePrompt(input, { goal, model, detail, problems, preserve }, mode));
    setCopied(false);
  }

  async function copyOutput() {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function reset() {
    setInput("");
    setProblems("");
    setPreserve("");
    setOutput("");
    setCopied(false);
  }

  return (
    <div className="tool-shell">
      <section className="tool-panel">
        <div className="tool-panel-head">
          <div>
            <h2>{mode === "improve" ? "Improve your prompt" : "Enhance your prompt"}</h2>
            <p>Enter the rough instruction. PromptVera structures it locally in your browser.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="prompt-input">{mode === "improve" ? "Your existing prompt" : "Your rough prompt"}</label>
            <textarea
              className="textarea"
              id="prompt-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Example: Write a landing page for my cybersecurity consulting service..."
            />
          </div>

          <div className="field full">
            <label htmlFor="goal">Goal</label>
            <input
              className="input"
              id="goal"
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="model">Target model</label>
            <select className="select" id="model" value={model} onChange={(event) => setModel(event.target.value)}>
              <option>General AI</option>
              <option>ChatGPT</option>
              <option>Claude</option>
              <option>Gemini</option>
              <option>Sora</option>
              <option>Nano Banana</option>
              <option>Midjourney</option>
              <option>Suno</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="detail">Detail level</label>
            <select className="select" id="detail" value={detail} onChange={(event) => setDetail(event.target.value)}>
              <option>Concise</option>
              <option>Balanced</option>
              <option>Detailed</option>
            </select>
          </div>

          {mode === "improve" && (
            <>
              <div className="field full">
                <label htmlFor="prompt-problems">Problems to fix (optional)</label>
                <textarea
                  className="textarea"
                  id="prompt-problems"
                  value={problems}
                  onChange={(event) => setProblems(event.target.value)}
                  placeholder={"Examples:\nRemove repeated instructions\nResolve the short-vs-detailed conflict\nMake the evidence requirement testable"}
                />
              </div>
              <div className="field full">
                <label htmlFor="prompt-preserve">What must be preserved? (optional)</label>
                <textarea
                  className="textarea"
                  id="prompt-preserve"
                  value={preserve}
                  onChange={(event) => setPreserve(event.target.value)}
                  placeholder={"Examples:\nKeep product names and pricing unchanged\nPreserve the requested JSON fields\nDo not change the original objective"}
                />
              </div>
            </>
          )}
        </div>

        <div className="tool-actions">
          <button className="button" type="button" onClick={generate} disabled={!input.trim()}>
            {mode === "improve" ? "Improve prompt" : "Enhance prompt"}
          </button>
          <button className="button secondary" type="button" onClick={reset}>Reset</button>
        </div>
      </section>

      <section className="tool-panel" aria-live="polite">
        <div className="tool-panel-head">
          <div>
            <h2>{mode === "improve" ? "Improved prompt" : "Enhanced prompt"}</h2>
            <p>Review it before using it in another AI service.</p>
          </div>
          <div className="output-toolbar">
            {copied && <span className="status">Copied</span>}
            <button className="button secondary small" type="button" onClick={copyOutput} disabled={!output}>
              Copy
            </button>
          </div>
        </div>
        <div className={output ? "output" : "output empty"}>
          {output || "Your improved prompt will appear here."}
        </div>
      </section>
    </div>
  );
}
