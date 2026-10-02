import { siteConfig } from "@/lib/site";

export function SiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description:
          "PromptVera is an independent website offering free, browser-based AI prompt generators and creative idea tools without requiring an account.",
        email: siteConfig.contactEmail,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: siteConfig.contactEmail,
          availableLanguage: ["en"],
        },
        knowsAbout: [
          "AI prompting",
          "prompt engineering",
          "generative AI",
          "AI image prompting",
          "AI video prompting",
          "AI music prompting",
          "creative writing prompts",
          "story planning",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en",
        publisher: { "@id": `${siteConfig.url}/#organization` },
        about: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
