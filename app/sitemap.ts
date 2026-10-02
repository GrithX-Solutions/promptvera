import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "",
  "/prompt-enhancer",
  "/prompt-improver",
  "/chatgpt-prompt-generator",
  "/gemini-prompt-generator",
  "/claude-prompt-generator",
  "/grok-prompt-generator",
  "/journal-prompt-generator",
  "/fanfic-prompt-generator",
  "/oc-prompt-generator",
  "/story-plot-generator",
  "/book-title-generator",
  "/horror-story-plot-generator",
  "/short-story-prompt-generator",
  "/drawing-prompt-generator",
  "/random-prompt-generator",
  "/poetry-prompt-generator",
  "/sora-2-prompt-generator",
  "/suno-prompt-generator",
  "/nano-banana-prompt-generator",
  "/ai-image-prompt-generator",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
  }));
}
