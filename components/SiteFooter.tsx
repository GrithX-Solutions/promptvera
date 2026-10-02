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
            Free, focused prompt tools that help you turn rough ideas into clearer instructions for modern AI models.
          </p>
        </div>
        <div className="footer-col">
          <h3>Tools</h3>
          <Link href="/prompt-enhancer">Prompt Enhancer</Link>
          <Link href="/sora-2-prompt-generator">Sora 2 Generator</Link>
          <Link href="/suno-prompt-generator">Suno Generator</Link>
          <Link href="/nano-banana-prompt-generator">Nano Banana Generator</Link>
        </div>
        <div className="footer-col">
          <h3>PromptVera</h3>
          <Link href="/about">About</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        © {new Date().getFullYear()} {siteConfig.name}. Free AI prompt tools.
      </div>
    </footer>
  );
}
