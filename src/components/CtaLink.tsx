import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "quiet";

const styles: Record<Variant, string> = {
  solid:
    "bg-primary text-primary-foreground hover:bg-accent border border-transparent",
  outline:
    "border border-border text-foreground hover:border-accent hover:text-accent bg-transparent",
  quiet:
    "border-b border-accent/40 text-foreground hover:border-accent hover:text-accent px-0 py-0 rounded-none",
};

export function CtaLink({
  to,
  children,
  variant = "solid",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    variant === "quiet"
      ? "inline-flex items-center gap-2 text-sm font-medium transition-colors"
      : "inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-colors";

  return (
    <Link to={to} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      <span aria-hidden="true">&#8594;</span>
    </Link>
  );
}
