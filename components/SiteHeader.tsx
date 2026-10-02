import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="PromptVera home">
          <span className="brand-mark" aria-hidden="true">PV</span>
          <span>PromptVera</span>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          <Link href="/#tools">Tools</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/prompt-enhancer">Prompt Enhancer</Link>
        </nav>
      </div>
    </header>
  );
}
