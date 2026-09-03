import { createFileRoute } from "@tanstack/react-router";
import { site, absoluteUrl } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaLink } from "@/components/CtaLink";

const title = "Raveclue";
const description =
  "Raveclue makes strategic business connections: considered introductions between organisations whose needs and capabilities genuinely fit.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            background:
              "radial-gradient(120% 90% at 82% 0%, var(--paper) 0%, transparent 62%)",
          }}
        />
        <div className="container-editorial relative py-24 md:py-36">
          <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-muted-foreground">
                <span aria-hidden="true" className="h-px w-10 bg-accent" />
                Strategic business connections
              </p>
              <h1 className="mt-8 text-[2.6rem] leading-[1.05] sm:text-[3.6rem] md:text-[4.6rem] lg:text-[5.1rem]">
                The right business,
                <br />
                <span className="text-accent italic">at the right moment</span>
                <br />
                is rarely found by accident.
              </h1>
              <p className="mt-9 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Raveclue works quietly between organisations — understanding what a
                business actually needs, considering who genuinely fits it, and making
                the introduction that gives a relationship somewhere to begin.
              </p>
              <div className="mt-11 flex flex-wrap items-center gap-6">
                <CtaLink to="/contact">Start a Conversation</CtaLink>
                <CtaLink to="/services" variant="quiet">
                  See what we do
                </CtaLink>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <figure className="border-l border-border pl-8">
                <blockquote className="text-xl leading-snug text-foreground md:text-2xl">
                  Introductions are not a volume exercise. They are a judgement about
                  fit — and judgement takes attention.
                </blockquote>
                <figcaption className="eyebrow mt-6 text-muted-foreground">
                  Our operating view
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The business need */}
      <section className="container-editorial py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="The business need"
            title="Finding the right counterpart takes far longer than it should."
            intro="Most organisations already know what they need. What they lack is a reliable way to reach the specific business, provider or partner who is genuinely relevant to it."
          />
        </Reveal>
        <div className="mt-16 grid gap-y-10 md:grid-cols-2 md:gap-x-20">
          {[
            {
              h: "Searching is indirect",
              p: "Directories, vendor lists and cold outreach return availability, not suitability. The work of judging relevance is left entirely to the buyer.",
            },
            {
              h: "Timing rarely aligns",
              p: "A capable counterpart may exist without being reachable at the moment the need or the opportunity is live.",
            },
            {
              h: "Context is missing",
              p: "Introductions made without context begin from zero, and both sides spend the first conversations working out whether there was ever a fit.",
            },
            {
              h: "Volume crowds out relevance",
              p: "The more outreach a business receives, the less signal each message carries. Genuine opportunities get lost among the noise.",
            },
          ].map((item, i) => (
            <Reveal key={item.h} delay={i * 90}>
              <div className="rule-thin pt-7">
                <h3 className="text-xl md:text-2xl">{item.h}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.p}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-border bg-paper">
        <div className="container-editorial py-24 md:py-32">
          <Reveal>
            <SectionHeading eyebrow="What Raveclue does" title="Four ways a connection gets made." />
          </Reveal>
          <div className="mt-16 space-y-0">
            {site.services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <article className="grid gap-6 border-t border-border py-10 md:grid-cols-[8rem_1fr_1fr] md:gap-12">
                  <p className="eyebrow text-accent">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-2xl md:text-[1.75rem]">{s.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {s.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12">
              <CtaLink to="/services" variant="outline">
                Explore services
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="container-editorial py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="A short, deliberate path from need to relationship."
          />
        </Reveal>
        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {site.process.map((p, i) => (
            <Reveal key={p.step} delay={i * 100}>
              <li className="list-none border-t border-border pt-7">
                <p
                  className="text-4xl text-accent-soft"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.step}
                </p>
                <h3 className="mt-5 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Who it helps */}
      <section className="border-y border-border">
        <div className="container-editorial py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Who it helps"
                title="Built for people who decide."
                intro="Raveclue is useful where a specific need, capability or opportunity sits with someone who can act on it."
              />
            </Reveal>
            <Reveal delay={140}>
              <dl className="grid gap-0 sm:grid-cols-2">
                {site.audiences.map((a) => (
                  <div key={a.name} className="border-t border-border py-6 sm:pr-8">
                    <dt className="text-base font-medium text-foreground">{a.name}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {a.need}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why this approach */}
      <section className="container-editorial py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Why this approach"
            title="Fewer introductions. Considered properly."
            intro="These are principles rather than performance claims — the way Raveclue chooses to work."
          />
        </Reveal>
        <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {site.principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div>
                <h3 className="text-xl md:text-2xl">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Editorial statement */}
      <section className="bg-ink text-ink-foreground">
        <div className="container-editorial py-28 md:py-40">
          <Reveal>
            <p className="eyebrow text-accent-soft">The Raveclue view</p>
            <p
              className="mt-10 max-w-4xl text-[2.2rem] leading-[1.12] sm:text-[3rem] md:text-[4rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A clue is only useful if it leads somewhere.{" "}
              <span className="italic text-accent-soft">
                So is an introduction.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-editorial py-24 md:py-32">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <div>
              <h2 className="text-[2rem] leading-tight sm:text-[2.6rem] md:text-[3.1rem]">
                If there is a need, a capability or an opportunity worth placing well,
                start there.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                Tell us what you are looking for. If there is a relevant connection to
                make, we will say so — and if there is not, we will say that too.
              </p>
            </div>
            <div className="md:text-right">
              <CtaLink to="/contact">Start a Conversation</CtaLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
