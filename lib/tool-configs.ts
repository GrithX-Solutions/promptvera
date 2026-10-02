export type ToolId = "sora-2" | "suno" | "nano-banana" | "ai-image";

export type PromptField = {
  key: string;
  label: string;
  type: "text" | "select";
  placeholder?: string;
  help?: string;
  options?: string[];
  defaultValue?: string;
  full?: boolean;
};

export type ToolConfig = {
  id: ToolId;
  title: string;
  shortDescription: string;
  inputLabel: string;
  inputPlaceholder: string;
  fields: PromptField[];
};

export const toolConfigs: Record<ToolId, ToolConfig> = {
  "sora-2": {
    id: "sora-2",
    title: "Sora 2 Prompt Generator",
    shortDescription:
      "Build a production-style video prompt with scene, camera, movement, lighting, audio, and delivery details.",
    inputLabel: "What should happen in the video?",
    inputPlaceholder: "A futuristic electric car drives through rainy Tokyo at night...",
    fields: [
      {
        key: "shot",
        label: "Shot type",
        type: "select",
        options: ["Wide establishing shot", "Medium shot", "Close-up", "Drone shot", "POV shot"],
        defaultValue: "Wide establishing shot",
      },
      {
        key: "camera",
        label: "Camera movement",
        type: "select",
        options: ["Slow dolly forward", "Tracking shot", "Orbit", "Static tripod", "Handheld", "Crane movement"],
        defaultValue: "Tracking shot",
      },
      {
        key: "style",
        label: "Visual style",
        type: "select",
        options: ["Cinematic realism", "Commercial", "Documentary", "Anime", "Retro film", "Minimal studio"],
        defaultValue: "Cinematic realism",
      },
      {
        key: "lighting",
        label: "Lighting",
        type: "select",
        options: ["Natural daylight", "Golden hour", "Neon night", "Soft studio", "High contrast", "Low-key moody"],
        defaultValue: "Neon night",
      },
      {
        key: "audio",
        label: "Audio direction",
        type: "text",
        placeholder: "Rain ambience, subtle tire noise, no dialogue",
        full: true,
      },
      {
        key: "format",
        label: "Output format",
        type: "select",
        options: ["16:9 landscape", "9:16 vertical", "1:1 square"],
        defaultValue: "16:9 landscape",
      },
    ],
  },
  suno: {
    id: "suno",
    title: "Suno Prompt Generator",
    shortDescription:
      "Turn a song idea into a structured music prompt with genre, mood, tempo, vocals, instrumentation, and arrangement.",
    inputLabel: "Describe the song you want",
    inputPlaceholder: "An uplifting song about rebuilding after a difficult year...",
    fields: [
      {
        key: "genre",
        label: "Genre",
        type: "select",
        options: ["Pop", "Indie rock", "Hip-hop", "R&B", "Electronic", "Cinematic", "Acoustic", "Lo-fi"],
        defaultValue: "Pop",
      },
      {
        key: "mood",
        label: "Mood",
        type: "select",
        options: ["Uplifting", "Melancholic", "Dark", "Energetic", "Dreamy", "Romantic", "Epic", "Relaxed"],
        defaultValue: "Uplifting",
      },
      {
        key: "tempo",
        label: "Tempo",
        type: "select",
        options: ["Slow (60–80 BPM)", "Mid-tempo (90–110 BPM)", "Upbeat (115–135 BPM)", "Fast (140+ BPM)"],
        defaultValue: "Mid-tempo (90–110 BPM)",
      },
      {
        key: "vocals",
        label: "Vocals",
        type: "select",
        options: ["Female lead", "Male lead", "Duet", "Choir", "Instrumental", "Soft layered vocals"],
        defaultValue: "Female lead",
      },
      {
        key: "instruments",
        label: "Key instruments",
        type: "text",
        placeholder: "Warm piano, clean electric guitar, punchy drums",
        full: true,
      },
      {
        key: "structure",
        label: "Arrangement",
        type: "select",
        options: ["Verse / Chorus / Verse / Chorus / Bridge / Chorus", "Intro / Verse / Pre-chorus / Chorus / Drop", "Minimal loop progression", "Cinematic build and climax"],
        defaultValue: "Verse / Chorus / Verse / Chorus / Bridge / Chorus",
        full: true,
      },
    ],
  },
  "nano-banana": {
    id: "nano-banana",
    title: "Nano Banana Prompt Generator",
    shortDescription:
      "Create precise image generation or image-editing instructions with composition, preservation, lighting, and output controls.",
    inputLabel: "What image should be created or edited?",
    inputPlaceholder: "Turn this casual product photo into a premium ecommerce hero image...",
    fields: [
      {
        key: "mode",
        label: "Task",
        type: "select",
        options: ["Generate a new image", "Edit an existing image", "Restyle an image", "Replace or remove an object"],
        defaultValue: "Generate a new image",
      },
      {
        key: "style",
        label: "Style",
        type: "select",
        options: ["Photorealistic", "Premium commercial", "Editorial", "3D render", "Illustration", "Minimal product"],
        defaultValue: "Photorealistic",
      },
      {
        key: "composition",
        label: "Composition",
        type: "select",
        options: ["Centered subject", "Rule of thirds", "Close-up detail", "Wide environmental", "Top-down flat lay"],
        defaultValue: "Centered subject",
      },
      {
        key: "lighting",
        label: "Lighting",
        type: "select",
        options: ["Soft studio", "Natural window light", "Golden hour", "Dramatic rim light", "Bright ecommerce"],
        defaultValue: "Soft studio",
      },
      {
        key: "preserve",
        label: "What must stay unchanged?",
        type: "text",
        placeholder: "Keep the logo, product shape, proportions, and label text unchanged",
        full: true,
      },
      {
        key: "format",
        label: "Aspect ratio",
        type: "select",
        options: ["1:1", "4:5", "16:9", "9:16", "3:2"],
        defaultValue: "1:1",
      },
    ],
  },
  "ai-image": {
    id: "ai-image",
    title: "AI Image Prompt Generator",
    shortDescription:
      "Build a detailed image prompt using subject, composition, lighting, camera language, visual style, and constraints.",
    inputLabel: "Describe the image idea",
    inputPlaceholder: "A modern glass cabin in a snowy pine forest at dawn...",
    fields: [
      {
        key: "style",
        label: "Style",
        type: "select",
        options: ["Photorealistic", "Cinematic", "Editorial photography", "Digital illustration", "3D render", "Minimal vector"],
        defaultValue: "Photorealistic",
      },
      {
        key: "composition",
        label: "Composition",
        type: "select",
        options: ["Wide establishing", "Medium framing", "Close-up", "Centered symmetry", "Rule of thirds", "Top-down"],
        defaultValue: "Wide establishing",
      },
      {
        key: "lens",
        label: "Camera / lens",
        type: "select",
        options: ["24mm wide-angle", "35mm documentary", "50mm natural", "85mm portrait", "Macro lens", "No camera language"],
        defaultValue: "35mm documentary",
      },
      {
        key: "lighting",
        label: "Lighting",
        type: "select",
        options: ["Soft natural", "Golden hour", "Blue hour", "Studio softbox", "High contrast", "Volumetric"],
        defaultValue: "Soft natural",
      },
      {
        key: "details",
        label: "Important details",
        type: "text",
        placeholder: "Visible snow texture, warm interior light, no people",
        full: true,
      },
      {
        key: "format",
        label: "Aspect ratio",
        type: "select",
        options: ["1:1", "4:5", "16:9", "9:16", "3:2"],
        defaultValue: "16:9",
      },
    ],
  },
};
