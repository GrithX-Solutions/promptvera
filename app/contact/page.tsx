import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
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
    </div>
  );
}
