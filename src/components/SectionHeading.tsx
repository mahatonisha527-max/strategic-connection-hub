import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Tag = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="eyebrow flex items-center gap-3 text-muted-foreground">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          {eyebrow}
        </p>
      ) : null}
      <Tag className="mt-5 text-[2.1rem] leading-[1.1] sm:text-[2.6rem] md:text-[3.1rem]">
        {title}
      </Tag>
      {intro ? (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
