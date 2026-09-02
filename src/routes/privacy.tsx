import { createFileRoute } from "@tanstack/react-router";
import { site, absoluteUrl } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const title = "Privacy — Raveclue";
const description =
  "How Raveclue intends to handle information shared through this website. This page contains placeholder structure pending approved legal copy.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/privacy") },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/privacy") }],
  }),
  component: Privacy,
});

const sections = [
  {
    h: "Information this site collects",
    p: "The website itself does not require an account and does not ask for personal information to browse. The contact form is currently disabled and has no delivery destination, so no enquiry data is transmitted or stored by it.",
  },
  {
    h: "Information you choose to share",
    p: "If the contact form is enabled in future, it is intended to collect a name, work email, company, the nature of the enquiry and a message — used only to respond to that enquiry and to consider whether a relevant introduction can be made.",
  },
  {
    h: "Sharing with third parties",
    p: "Introductions inherently involve sharing context between two parties. The intention is that nothing identifying is shared with another organisation without the enquirer's agreement. Specific processors, hosting providers and analytics tools must be listed here once confirmed.",
  },
  {
    h: "Cookies and analytics",
    p: "No analytics, advertising or tracking scripts are installed on this site at present. If any are added, this section must describe them and any consent mechanism before they are enabled.",
  },
  {
    h: "Retention",
    p: "Retention periods have not been set for this domain. Approved retention terms must be inserted here before any enquiry data is collected.",
  },
  {
    h: "Your rights",
    p: "Applicable data-protection rights depend on the controlling legal entity and jurisdiction, neither of which is stated on this site. The rights, the relevant legal basis and the supervisory authority must be added by the responsible owner.",
  },
  {
    h: "Controller and contact",
    p: "The legal entity acting as data controller and the contact route for privacy requests have not been supplied for this domain and are deliberately not stated here.",
  },
];

function Privacy() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-editorial py-24 md:py-32">
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="Privacy"
              title="How information is handled."
              intro={`This page sets out the intended structure of a privacy notice for ${site.domain}.`}
            />
          </Reveal>
        </div>
      </section>

      <section className="container-editorial py-16 md:py-24">
        <Reveal>
          <div className="max-w-3xl border border-accent/40 bg-paper p-7">
            <h2 className="eyebrow text-accent">Placeholder copy — requires replacement</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The text below is placeholder content describing intent only. It is not a
              legal notice, has not been reviewed, and makes no legal or jurisdictional
              claim. It must be replaced with approved privacy copy — including the
              controlling entity, legal basis, retention periods and rights — before this
              site is treated as published.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 max-w-3xl space-y-0">
          {sections.map((s, i) => (
            <Reveal key={s.h} delay={i * 60}>
              <section className="border-t border-border py-9">
                <h2 className="text-xl md:text-2xl">{s.h}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.p}
                </p>
              </section>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
