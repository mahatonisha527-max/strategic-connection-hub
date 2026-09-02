import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { site } from "@/config/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-6 py-5 md:px-12">
        <Link
          to="/"
          className="font-display text-xl tracking-[-0.02em] text-foreground"
          aria-label={`${site.siteName} — home`}
        >
          <span style={{ fontFamily: "var(--font-display)" }}>Raveclue</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-sm border border-border px-5 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.2em] transition-colors hover:border-accent hover:text-accent"
          >
            Start a Conversation
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="rounded-sm border border-border px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-border bg-paper md:hidden"
        >
          <ul className="flex flex-col px-6 py-2">
            {links.map((l) => (
              <li key={l.to} className="border-b border-border last:border-0">
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-sm tracking-wide text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
