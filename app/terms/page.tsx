import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "PromptVera terms of use.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="shell simple-page prose">
      <h1>Terms of Use</h1>
      <p><strong>Effective date:</strong> October 2, 2026</p>
      <p>
        By using PromptVera, you agree to use the site and generated prompt text lawfully and responsibly. The tools are provided for convenience and do not guarantee a particular output from any third-party AI system.
      </p>

      <h2>No affiliation or endorsement</h2>
      <p>
        PromptVera is an independent utility site. References to AI models, services, and product names are descriptive and do not imply sponsorship, affiliation, or endorsement by their owners.
      </p>

      <h2>Your responsibility</h2>
      <p>
        You are responsible for reviewing generated prompts before use, complying with the rules of the AI service where you use them, and verifying any factual, legal, financial, medical, or professional information produced by third-party systems.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Do not use PromptVera to facilitate unlawful activity, abuse services, infringe rights, distribute malware, expose credentials, or interfere with the availability or security of the website.
      </p>

      <h2>Availability</h2>
      <p>
        Tools may change, be corrected, or be removed as AI products and prompting patterns evolve. PromptVera may also limit automated traffic that negatively affects site performance or availability.
      </p>

      <h2>Disclaimer</h2>
      <p>
        PromptVera is provided on an “as is” and “as available” basis to the extent permitted by applicable law. Generated prompt text is a starting point, not a guarantee of accuracy, suitability, or third-party model performance.
      </p>
    </div>
  );
}
