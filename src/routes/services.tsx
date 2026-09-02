import { createFileRoute } from "@tanstack/react-router";
import { site, absoluteUrl } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaLink } from "@/components/CtaLink";

const title = "Services — Introductions, Discovery & Partnership Connections";
const description =
  "Raveclue services: strategic introductions, capability discovery, opportunity matching and partnership connections — each made on the basis of genuine fit.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/services") },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services") }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-editorial py-24 md:py-32">
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="Services"
              title="Capabilities, described plainly."
              intro="Four related ways of working, all with the same purpose: putting a business in front of the counterpart that is genuinely relevant to it."
            />
          </Reveal>
        </div>
      </section>

      <section className="container-editorial py-16 md:py-24">
        <div className="space-y-0">
          {site.services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <article className="grid gap-8 border-t border-border py-14 md:grid-cols-[1fr_1.1fr] md:gap-16">
                <div>
                  <p className="eyebrow text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-5 text-[1.9rem] leading-tight md:text-[2.4rem]">
                    {s.name}
                  </h2>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-foreground md:text-lg">
                    {s.description}
                  </p>
                  <dl className="mt-8 space-y-5">
                    <div className="rule-thin pt-5">
                      <dt className="eyebrow text-muted-foreground">Who it suits</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.audience}
                      </dd>
                    </div>
                    <div className="rule-thin pt-5">
                      <dt className="eyebrow text-muted-foreground">What it gives you</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.value}
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-8">
                    <CtaLink to="/contact" variant="quiet">
                      Discuss this
                    </CtaLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-paper">
        <div className="container-editorial py-20 md:py-28">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <h2 className="text-[1.9rem] leading-tight md:text-[2.6rem]">
                Not sure which of these fits? Describe the situation instead.
              </h2>
              <div className="md:text-right">
                <CtaLink to="/contact">Start a Conversation</CtaLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
