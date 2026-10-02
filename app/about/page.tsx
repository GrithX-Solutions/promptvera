import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Free AI Prompt Tools",
  description:
    "Learn how PromptVera builds focused, free AI prompt tools for clearer image, video, music, and general-purpose AI instructions.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="shell simple-page prose">
      <span className="eyebrow">About PromptVera</span>
      <h1>Small tools for clearer AI instructions.</h1>
      <p>
        PromptVera is a free utility site for building, improving, and structuring prompts. The project focuses on specific tasks—such as video, music, and image prompting—instead of pretending one prompt template fits every model and workflow.
      </p>
      <h2>How the first version works</h2>
      <p>
        The launch version uses deterministic browser-side prompt logic. It does not require an account and does not need a paid AI API to turn your selections into a structured prompt.
      </p>
      <h2>What PromptVera is not</h2>
      <p>
        PromptVera is not an official product of OpenAI, Google, Suno, or other model providers referenced by descriptive tool names. Product and model names belong to their respective owners.
      </p>
      <h2>Our content standard</h2>
      <p>
        Tool pages are intended to explain the underlying prompting decisions, provide useful controls, and give users an editable output. We avoid publishing large numbers of near-identical pages that exist only to target search queries.
      </p>
      <h2>Why we build focused prompt generators</h2>
      <p>
        Prompting requirements change with the job. A video prompt may need shot framing, movement,
        continuity, timing, and audio direction, while a music prompt benefits from genre, tempo,
        instrumentation, vocals, and arrangement. A useful tool should surface those differences
        instead of hiding them behind one generic input box.
      </p>
      <h2>How we evaluate a PromptVera tool</h2>
      <p>
        A tool should solve a distinct prompting problem, make the important choices understandable,
        and produce text that remains easy to edit. We also prefer lightweight implementations where
        they are enough for the task. The first release therefore avoids account creation, a prompt
        history database, and paid AI processing for features that can work reliably in the browser.
      </p>
      <h2>Independent and model-aware</h2>
      <p>
        PromptVera may reference popular AI products so users can find the right workflow, but those
        references do not make PromptVera an official client or partner of those providers. We aim to
        keep instructions practical while making it clear when a tool is model-specific and when its
        output is intentionally model-agnostic.
      </p>
    </div>
  );
}
