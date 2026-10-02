import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About PromptVera and its approach to free AI prompt tools.",
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
    </div>
  );
}
