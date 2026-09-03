import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { site, absoluteUrl } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const title = "Contact Raveclue — Start a Conversation";
const description =
  "Tell Raveclue what you are looking for: a need, a capability, an opportunity or a potential connection. Conversation first, no obligation.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/contact") },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
  component: Contact,
});

const fieldClass =
  "mt-2 w-full rounded-sm border border-input bg-paper px-4 py-3 text-base text-foreground transition-colors placeholder:text-muted-foreground/70 focus-visible:border-accent disabled:cursor-not-allowed disabled:opacity-70";

function Contact() {
  const configured = site.contact.formIntegrationConfigured;
  const [status, setStatus] = useState<string | null>(null);

  return (
    <>
      <section className="border-b border-border">
        <div className="container-editorial py-24 md:py-32">
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="Contact"
              title="Start a conversation."
              intro="Describe the need, the capability or the opportunity. If there is a relevant connection to be made, we will tell you — and if there is not, we will say so."
            />
          </Reveal>
        </div>
      </section>

      <section className="container-editorial py-16 md:py-24">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                setStatus(
                  "This form is not connected to a delivery destination yet, so nothing was sent. Message delivery needs to be configured before the form can be used.",
                );
              }}
              className="max-w-xl"
            >
              <h2 className="eyebrow text-muted-foreground">Enquiry details</h2>

              <div className="mt-8 space-y-7">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    disabled={!configured}
                    className={fieldClass}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    disabled={!configured}
                    className={fieldClass}
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    disabled={!configured}
                    className={fieldClass}
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label htmlFor="looking-for" className="text-sm font-medium text-foreground">
                    What are you looking for?
                  </label>
                  <select
                    id="looking-for"
                    name="looking-for"
                    disabled={!configured}
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Select the closest option
                    </option>
                    {site.services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.name}
                      </option>
                    ))}
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    disabled={!configured}
                    className={fieldClass}
                    placeholder="The need, opportunity or connection you have in mind."
                    aria-describedby="message-help"
                  />
                  <p id="message-help" className="mt-2 text-xs text-muted-foreground">
                    Please avoid sharing confidential details in a first message.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={!configured}
                className="mt-10 inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
              >
                Send enquiry <span aria-hidden="true">&#8594;</span>
              </button>

              <p aria-live="polite" className="mt-6 text-sm text-muted-foreground">
                {status}
              </p>
            </form>
          </Reveal>

          <Reveal delay={140}>
            <aside className="space-y-10">
              <div className="border border-border bg-paper p-7">
                <h2 className="eyebrow text-accent">Integration required</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  This form is intentionally disabled: no email destination, inbox or
                  backend has been configured for {site.domain}, and it would be
                  dishonest to imply that a submission is received. Once an approved
                  destination and an anti-spam control are in place, the form can be
                  enabled by setting the contact configuration for this site.
                </p>
              </div>

              <div className="rule-thin pt-7">
                <h2 className="eyebrow text-muted-foreground">Contact channel</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {site.contact.email
                    ? site.contact.email
                    : "No contact address has been approved for this domain yet. A published address will appear here once confirmed."}
                </p>
              </div>

              <div className="rule-thin pt-7">
                <h2 className="eyebrow text-muted-foreground">Your information</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Enquiry details are handled confidentially and used solely to respond to your request.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
