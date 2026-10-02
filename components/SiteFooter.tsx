import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true">PV</span>
            <span>PromptVera</span>
          </Link>
          <p className="footer-copy">
            Free AI prompt generators and creative tools for clearer prompts, images, video, music, writing, stories, and characters.
          </p>
        </div>

        <div className="footer-col">
          <h3>AI prompt tools</h3>
          <Link href="/prompt-enhancer">Prompt Enhancer</Link>
          <Link href="/prompt-improver">Prompt Improver</Link>
          <Link href="/chatgpt-prompt-generator">ChatGPT Generator</Link>
          <Link href="/gemini-prompt-generator">Gemini Generator</Link>
          <Link href="/claude-prompt-generator">Claude Generator</Link>
          <Link href="/grok-prompt-generator">Grok Generator</Link>
        </div>

        <div className="footer-col">
          <h3>Media & creative</h3>
          <Link href="/ai-image-prompt-generator">AI Image Generator</Link>
          <Link href="/nano-banana-prompt-generator">Nano Banana Generator</Link>
          <Link href="/sora-2-prompt-generator">Sora 2 Generator</Link>
          <Link href="/suno-prompt-generator">Suno Generator</Link>
          <Link href="/drawing-prompt-generator">Drawing Prompts</Link>
          <Link href="/random-prompt-generator">Random Prompts</Link>
          <Link href="/journal-prompt-generator">Journal Prompts</Link>
          <Link href="/poetry-prompt-generator">Poetry Prompts</Link>
        </div>

        <div className="footer-col">
          <h3>Story & characters</h3>
          <Link href="/story-plot-generator">Story Plot Generator</Link>
          <Link href="/book-title-generator">Book Title Generator</Link>
          <Link href="/horror-story-plot-generator">Horror Plot Generator</Link>
          <Link href="/short-story-prompt-generator">Short Story Prompts</Link>
          <Link href="/fanfic-prompt-generator">Fanfic Prompts</Link>
          <Link href="/oc-prompt-generator">OC Generator</Link>
        </div>

        <div className="footer-col">
          <h3>PromptVera</h3>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        © {new Date().getFullYear()} {siteConfig.name}. Free AI and creative prompt tools.
      </div>
    </footer>
  );
}
