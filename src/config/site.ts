export type ServiceItem = {
  slug: string;
  name: string;
  description: string;
  audience: string;
  value: string;
};

export type SiteConfig = {
  siteUrl: string;
  domain: string;
  siteName: string;
  tagline: string;
  positioning: string;
  primaryCta: { label: string; href: string };
  services: ServiceItem[];
  audiences: Array<{ name: string; need: string }>;
  process: Array<{ step: string; title: string; description: string }>;
  principles: Array<{ title: string; description: string }>;
  ownershipDisclosure: string;
  contact: {
    formIntegrationConfigured: boolean;
    email?: string;
  };
  seo: { defaultDescription: string };
};

export const site: SiteConfig = {
  siteUrl: "https://raveclue.com",
  domain: "raveclue.com",
  siteName: "Raveclue",
  tagline: "Strategic business connections, made deliberately.",
  positioning:
    "Raveclue works on strategic business connections: understanding a need or an opportunity, considering who it genuinely fits, and making the introduction that gives a relationship somewhere to begin.",
  primaryCta: { label: "Start a Conversation", href: "/contact" },
  services: [
    {
      slug: "strategic-introductions",
      name: "Strategic Introductions",
      description:
        "Direct introductions between two parties whose needs and capabilities line up. One considered conversation rather than a list of names to work through.",
      audience: "Owners, operators and decision makers who need the right conversation, not more outreach.",
      value: "Relevance decided before an introduction is made.",
    },
    {
      slug: "capability-discovery",
      name: "Capability Discovery",
      description:
        "Where a requirement is clear but the right counterpart is not, Raveclue works through what is actually needed and who is aligned with it.",
      audience: "Buyers and growing companies sourcing capability for a next stage.",
      value: "Less searching, and a shorter path to a relevant provider.",
    },
    {
      slug: "opportunity-matching",
      name: "Opportunity Matching",
      description:
        "A stated opportunity is matched against businesses it plausibly suits — considered against fit, timing and intent rather than availability.",
      audience: "Organisations holding an opportunity and looking for the right counterpart for it.",
      value: "Opportunities placed where they can realistically go somewhere.",
    },
    {
      slug: "partnership-connections",
      name: "Partnership Connections",
      description:
        "Connections between businesses that can create value together, made with the long term in mind rather than a single transaction.",
      audience: "Partnership, business development and channel teams building alliance pipelines.",
      value: "Introductions framed around durable fit.",
    },
  ],
  audiences: [
    { name: "Business owners", need: "Partners who can support the next stage of growth." },
    { name: "Service providers", need: "Aligned clients and channel relationships." },
    { name: "Solution providers", need: "Serious buyers with a relevant need." },
    { name: "Growing companies", need: "Capability their next stage depends on." },
    { name: "Partnership teams", need: "Alliance conversations worth having." },
    { name: "Enterprise buyers", need: "Relevant providers instead of a vendor list." },
  ],
  process: [
    {
      step: "01",
      title: "Share the need or opportunity",
      description:
        "A short conversation about the requirement, the challenge or the opportunity — and what a good outcome would actually look like.",
    },
    {
      step: "02",
      title: "Consider the fit",
      description:
        "Raveclue works through who is genuinely relevant, weighing capability, intent and timing before anything is proposed.",
    },
    {
      step: "03",
      title: "Make the introduction",
      description:
        "When there is a real fit, both parties are introduced directly, with the context each side needs to begin properly.",
    },
    {
      step: "04",
      title: "Take it forward",
      description:
        "From there the relationship belongs to the parties. They set the terms, the pace and the outcome themselves.",
    },
  ],
  principles: [
    {
      title: "Relevance before volume",
      description:
        "A small number of well-considered introductions is more useful than a wide list of possibilities. Fewer, better conversations is the intent.",
    },
    {
      title: "Deliberate, not automated",
      description:
        "Every connection is a judgement, not a match score. Nothing is sent in bulk and nothing is introduced for the sake of activity.",
    },
    {
      title: "Relationship-led",
      description:
        "Introductions are the beginning of a relationship, not the end of a process. The value sits in what the two parties build afterwards.",
    },
    {
      title: "Long-term thinking",
      description:
        "Connections are considered for where they could lead, not only for what closes next. Discretion is part of that.",
    },
  ],
  ownershipDisclosure:
    "Raveclue operates as part of the wider Orlint ecosystem of business-introduction work, with its own focus and its own point of view.",
  contact: {
    formIntegrationConfigured: false,
  },
  seo: {
    defaultDescription:
      "Raveclue makes strategic business connections — considered introductions between organisations whose needs and capabilities genuinely fit.",
  },
};

export const absoluteUrl = (path: string) =>
  `${site.siteUrl}${path === "/" ? "" : path}`;
