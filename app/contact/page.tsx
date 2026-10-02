import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Support for PromptVera Tools",
  description:
    "Contact PromptVera for tool feedback, bug reports, privacy requests, business inquiries, and general questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="shell simple-page prose">
      <span className="eyebrow">Contact PromptVera</span>
      <h1>Questions, feedback, or a tool issue?</h1>
      <p>
        PromptVera is built around small, practical AI prompt tools. If something is unclear,
        a tool is not behaving as expected, or you have a relevant business or privacy inquiry,
        email us and include enough detail for us to understand the request.
      </p>

      <div className="callout">
        <strong>Email</strong>
        <p>
          <a href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
        </p>
      </div>

      <h2>What you can contact us about</h2>
      <ul>
        <li>Bug reports or broken tool behavior</li>
        <li>Feedback about prompt quality or missing controls</li>
        <li>Privacy or data questions</li>
        <li>Accessibility issues</li>
        <li>Business or partnership inquiries relevant to PromptVera</li>
      </ul>

      <h2>For faster troubleshooting</h2>
      <p>
        If you are reporting a bug, include the page URL, what you expected to happen, what
        happened instead, and your browser/device when relevant. Please do not email passwords,
        API keys, private keys, or other sensitive credentials.
      </p>

      <h2>Third-party AI products</h2>
      <p>
        PromptVera is an independent utility site. We cannot provide account support for third-party
        AI services referenced by our tools. For billing, account access, or service-specific
        problems, contact the relevant provider directly.
      </p>

      <h2>Helpful feedback for prompt tools</h2>
      <p>
        If the generated prompt is technically valid but not useful for your workflow, tell us which
        tool you used, the type of task you were trying to complete, and which control or instruction
        was missing. That context is more useful than sending private prompt content and helps us
        improve the structure of the tool without collecting sensitive information.
      </p>

      <h2>Security and privacy reports</h2>
      <p>
        If you believe a PromptVera page exposes data unexpectedly or has a security issue, describe
        the affected URL and the behavior you observed. Do not send passwords, authentication tokens,
        private keys, or unnecessary personal data as part of a report.
      </p>
    </div>
  );
}
