import { Link } from "@tanstack/react-router";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p
              className="text-2xl text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Raveclue
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow text-muted-foreground">Site</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/" className="text-foreground transition-colors hover:text-accent">Home</Link></li>
              <li><Link to="/about" className="text-foreground transition-colors hover:text-accent">About</Link></li>
              <li><Link to="/services" className="text-foreground transition-colors hover:text-accent">Services</Link></li>
              <li><Link to="/contact" className="text-foreground transition-colors hover:text-accent">Contact</Link></li>
              <li><Link to="/privacy" className="text-foreground transition-colors hover:text-accent">Privacy</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-muted-foreground">Context</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {site.ownershipDisclosure}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{site.domain}</p>
          <p>Considered introductions, not volume outreach.</p>
        </div>
      </div>
    </footer>
  );
}
