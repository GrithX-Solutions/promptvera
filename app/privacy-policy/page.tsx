import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy for PromptVera Tools",
  description:
    "Read how PromptVera handles prompt inputs, browser storage, analytics, advertising, third-party services, and privacy requests.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="shell simple-page prose">
      <h1>Privacy Policy</h1>
      <p><strong>Effective date:</strong> October 2, 2026</p>
      <p>
        PromptVera is designed to minimize the personal information required to use its core prompt tools. The launch version does not require account registration.
      </p>

      <h2>Prompt inputs</h2>
      <p>
        The initial prompt generators operate with browser-side logic. Prompt text entered into these tools is not intentionally transmitted to a PromptVera AI-processing service. You should still avoid entering passwords, access tokens, private keys, health records, financial credentials, or other sensitive information into any web tool.
      </p>

      <h2>Technical and analytics data</h2>
      <p>
        When analytics, advertising, security, or performance services are enabled, they may process standard technical information such as IP-derived location, device and browser information, page visits, referrer data, cookie identifiers, and interaction events. This policy will be updated with the specific providers used before those services are enabled in production.
      </p>

      <h2>Advertising</h2>
      <p>
        PromptVera is intended to be supported by advertising. Advertising systems may use cookies or similar technologies where permitted. Consent controls will be implemented where required before personalized advertising is enabled.
      </p>

      <h2>Local browser storage</h2>
      <p>
        PromptVera may use browser storage for convenience features such as remembering non-sensitive interface preferences. Clearing site data in your browser removes locally stored values.
      </p>

      <h2>Third-party services</h2>
      <p>
        PromptVera links to or references third-party AI products. Their privacy practices apply when you leave PromptVera or paste generated prompts into those services.
      </p>

      <h2>Privacy contact</h2>
      <p>
        For privacy questions or requests related to PromptVera, email{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        Please do not include passwords, API keys, private keys, or unrelated sensitive credentials.
      </p>

      <h2>Changes</h2>
      <p>
        This policy may change as analytics, advertising, or additional tool features are introduced. Material changes will be reflected on this page with an updated effective date.
      </p>
    </div>
  );
}
