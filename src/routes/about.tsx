import { createFileRoute } from "@tanstack/react-router";
import { site, absoluteUrl } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaLink } from "@/components/CtaLink";

const title = "About Raveclue — A Deliberate Approach to Connections";
const description =
  "Raveclue focuses on strategic business connections: understanding a need, judging genuine fit, and making introductions that are worth both parties' time.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/about") },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-editorial py-24 md:py-32">
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="About"
              title="A small practice built around one question: who is this genuinely right for?"
              intro={site.positioning}
            />
          </Reveal>
        </div>
      </section>

      <section className="container-editorial py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="eyebrow text-muted-foreground">What Raveclue is</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Raveclue is a business-introductions practice. It works with organisations
                that have a defined need, capability or opportunity, and connects them
                directly with counterparts for whom that thing is actually relevant.
              </p>
              <p>
                It is deliberately not a marketplace, a directory or an outreach service.
                Nothing is broadcast, and no introduction is made simply because it is
                possible. The work is closer to judgement than to distribution.
              </p>
              <p>
                Once an introduction is made, the relationship belongs to the two parties.
                They negotiate, decide and take it forward on their own terms.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-paper">
        <div className="container-editorial py-20 md:py-28">
          <Reveal>
            <SectionHeading eyebrow="Approach" title="How relationships are treated." />
          </Reveal>
          <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {[
              {
                h: "Understand before suggesting",
                p: "A requirement is rarely only what it first appears to be. The conversation comes before any name is put forward.",
              },
              {
                h: "Relevance is the filter",
                p: "If a connection does not clearly serve both sides, it is not worth making. Saying nothing is often the right answer.",
              },
              {
                h: "Discretion by default",
                p: "Needs, opportunities and conversations are treated as private unless a party chooses otherwise.",
              },
              {
                h: "Introductions, not intermediation",
                p: "Raveclue opens the door. It does not sit between the parties once they are talking.",
              },
            ].map((item, i) => (
              <Reveal key={item.h} delay={i * 90}>
                <div className="border-t border-border pt-7">
                  <h3 className="text-xl md:text-2xl">{item.h}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.p}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="eyebrow text-muted-foreground">Why relevance matters</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Volume is easy to produce and expensive to absorb. Every irrelevant
                approach costs the recipient attention, and it makes the next genuine one
                harder to hear.
              </p>
              <p>
                Working the other way round — fewer introductions, each one considered —
                keeps the signal intact. It also means a connection can be judged on
                whether it should exist, rather than on how quickly it can be produced.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-editorial py-16 md:py-20">
          <Reveal>
            <h2 className="eyebrow text-muted-foreground">Relationship disclosure</h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {site.ownershipDisclosure} Raveclue is presented under its own name, with its
              own site and its own focus; nothing here is intended to imply that it is
              unconnected to that wider work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        <Reveal>
          <div className="rule-thin pt-12">
            <h2 className="max-w-2xl text-[1.9rem] leading-tight md:text-[2.6rem]">
              If something you are working on needs the right counterpart, that is the
              conversation to have.
            </h2>
            <div className="mt-9">
              <CtaLink to="/contact">Start a Conversation</CtaLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
