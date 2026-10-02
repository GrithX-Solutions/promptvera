import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
  status?: "live" | "new";
};

export function ToolCard({
  title,
  description,
  href,
  icon,
  status = "live",
}: ToolCardProps) {
  return (
    <Link className="tool-card" href={href}>
      <div className="tool-card-top">
        <span className="tool-icon" aria-hidden="true">{icon}</span>
        <span className={status === "live" ? "badge live" : "badge"}>{status}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="tool-card-action">Open free tool →</span>
    </Link>
  );
}
