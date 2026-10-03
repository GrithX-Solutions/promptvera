import type { ToolId } from "@/lib/tool-configs";

export type EnhanceOptions = {
  goal: string;
  model: string;
  detail: string;
  problems?: string;
  preserve?: string;
};

function clean(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function line(label: string, value?: string) {
  return value?.trim() ? `${label}: ${clean(value)}` : "";
}

export function enhancePrompt(
  input: string,
  options: EnhanceOptions,
  mode: "enhance" | "improve" = "enhance",
) {
  const task = clean(input);
  if (!task) return "";

  const detailRule =
    options.detail === "Concise"
      ? "Keep the response focused and remove unnecessary explanation."
      : options.detail === "Detailed"
        ? "Include useful detail, reasoning where appropriate, and concrete specifics."
        : "Use enough detail to complete the task well without padding.";

  const modelRule =
    options.model === "General AI"
      ? "Write the prompt so it works well with a capable general-purpose AI assistant."
      : `Optimize the instruction structure for ${options.model}, while keeping the wording portable where possible.`;

  const opener =
    mode === "improve"
      ? "Rewrite and improve the following instruction before completing it."
      : "Complete the following task using the structured instructions below.";

  return [
    opener,
    "",
    `TASK\n${task}`,
    "",
    `GOAL\n${options.goal}`,
    mode === "improve" && options.problems?.trim()
      ? `KNOWN PROBLEMS TO FIX\n${options.problems.trim()}`
      : "",
    mode === "improve" && options.preserve?.trim()
      ? `PRESERVE\n${options.preserve.trim()}`
      : "",
    "",
    "INSTRUCTIONS",
    `- ${modelRule}`,
    `- ${detailRule}`,
    mode === "improve"
      ? "- Fix ambiguity, repetition, and conflicting instructions without changing the core task."
      : "- Resolve ambiguity by using the most reasonable interpretation of the request.",
    mode === "improve" && options.preserve?.trim()
      ? "- Treat the PRESERVE section as non-negotiable unless it conflicts with an explicit higher-priority instruction."
      : "",
    "- Be specific, practical, and internally consistent.",
    "- Do not invent facts that the task requires to be verified.",
    "",
    "OUTPUT",
    "- Start with the requested result rather than a long preamble.",
    "- Use clear structure only where it improves readability.",
    "- Preserve explicit constraints from the original request.",
  ].join("\n");
}

export function buildToolPrompt(toolId: ToolId, idea: string, values: Record<string, string>) {
  const subject = clean(idea);
  if (!subject) return "";

  switch (toolId) {
    case "sora-2":
      return [
        "Create a polished AI video using the following direction:",
        "",
        line("Scene and action", subject),
        line("Shot", values.shot),
        line("Camera movement", values.camera),
        line("Visual style", values.style),
        line("Lighting", values.lighting),
        line("Action beats / timing", values.timing),
        line("Audio", values.audio),
        line("Frame", values.format),
        "",
        "Continuity requirements: keep subject identity, wardrobe, environment, scale, direction of motion, and lighting consistent across the shot. Use physically coherent movement and natural timing. Avoid sudden object changes, duplicated subjects, warped anatomy, illegible text, and unintended camera jumps.",
      ]
        .filter(Boolean)
        .join("\n");

    case "suno":
      return [
        "Create a complete song concept with the following musical direction:",
        "",
        line("Core theme", subject),
        line("Genre", values.genre),
        line("Mood", values.mood),
        line("Tempo", values.tempo),
        line("Vocals", values.vocals),
        line("Instrumentation", values.instruments),
        line("Production direction", values.production),
        line("Arrangement", values.structure),
        line("Avoid or exclude", values.exclude),
        "",
        "General guidance: use a coherent sonic palette, a memorable central motif, clear section contrast, and a mix that supports the vocal or lead element. Avoid abrupt genre shifts unless the concept explicitly calls for them.",
      ]
        .filter(Boolean)
        .join("\n");

    case "nano-banana":
      return [
        `${values.mode || "Generate a new image"} using the following art direction:`,
        "",
        line("Primary request", subject),
        line("Visual style", values.style),
        line("Composition", values.composition),
        line("Lighting", values.lighting),
        line("Preserve exactly", values.preserve),
        line("Reference image roles", values.references),
        line("Text / layout requirements", values.layout),
        line("Aspect ratio", values.format),
        "",
        "Quality constraints: preserve intentional identity and geometry, keep edges and textures clean, maintain realistic perspective and lighting relationships, and avoid accidental text changes, duplicated objects, warped proportions, or unrelated additions.",
      ]
        .filter(Boolean)
        .join("\n");

    case "ai-image":
      return [
        "Generate an image with the following direction:",
        "",
        line("Subject and scene", subject),
        line("Visual style", values.style),
        line("Composition", values.composition),
        line("Camera / lens", values.lens),
        line("Lighting", values.lighting),
        line("Color palette", values.palette),
        line("Important details", values.details),
        line("Avoid", values.avoid),
        line("Aspect ratio", values.format),
        "",
        "Quality constraints: coherent perspective, intentional composition, believable materials and textures, clean subject boundaries, natural lighting, and no unintended duplicate elements, malformed anatomy, random text, watermarks, or visual artifacts.",
      ]
        .filter(Boolean)
        .join("\n");
  }
}
