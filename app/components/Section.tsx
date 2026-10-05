import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Solid indigo surface for high-impact sections. */
  tone?: "white" | "mist" | "indigo";
  ariaLabelledBy?: string;
};

/**
 * Consistent page gutter + max-width for every landing page section.
 */
export default function Section({
  id,
  children,
  className = "",
  tone = "white",
  ariaLabelledBy,
}: SectionProps) {
  const background =
    tone === "indigo"
      ? "bg-indigo-brand text-white"
      : tone === "mist"
        ? "bg-mist"
        : "bg-white";

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`${background} ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`text-[14px] font-semibold leading-[22px] tracking-[0.08em] uppercase ${
        tone === "light" ? "text-teal-brand" : "text-indigo-brand"
      }`}
    >
      {children}
    </p>
  );
}
