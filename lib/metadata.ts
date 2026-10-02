import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type ToolMetadataArgs = {
  title: string;
  description: string;
  path: string;
};

export function toolMetadata({
  title,
  description,
  path,
}: ToolMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`;
  const socialTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      url,
      title: socialTitle,
      description,
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
    },
  };
}
