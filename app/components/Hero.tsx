import type { ReactNode } from "react";
import Button from "./Button";
import Reveal from "./Reveal";

function JourneyCard({
  label,
  children,
  accent = false,
}: {
  label: string;
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border bg-white p-4 shadow-[0_1px_2px_rgba(17,17,17,0.04)] sm:p-5 ${
        accent ? "border-teal-brand/50" : "border-ink/10"
      }`}
    >
      <p className="text-[13px] font-semibold leading-5 tracking-[0.06em] text-indigo-brand uppercase">
        {label}
      </p>
      <p className="mt-1.5 text-[15px] leading-[24px] text-ink">{children}</p>
    </div>
  );
}

/** Soft curved connector between the stacked journey cards. */
function CurvedConnector() {
  return (
    <svg
      viewBox="0 0 40 36"
      width="40"
      height="36"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M12 2 C12 16, 28 20, 28 34"
        stroke="#00B5AB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />
      <circle cx="28" cy="34" r="3" fill="#00B5AB" />
    </svg>
  );
}

const STEPS = ["Concern", "Guidance", "Care", "Clinician"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* Gentle arcs echoing the logo's curves — decorative only. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-40 h-[520px] w-[520px] text-indigo-brand/[0.06]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[440px] w-[440px] text-teal-brand/15"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M6 150 C60 150, 90 40, 194 40" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 178 C74 178, 110 68, 194 68" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="mx-auto w-full max-w-6xl px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24 lg:px-10 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <p className="text-[14px] font-semibold leading-[22px] tracking-[0.08em] text-indigo-brand uppercase">
              AI-assisted healthcare navigation
            </p>
            <h1 className="mt-4 max-w-xl text-[40px] leading-[48px] font-extrabold tracking-tight text-indigo-brand sm:text-[52px] sm:leading-[60px]">
              From concern to care, in plain language.
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-[28px] text-ink/80 sm:text-[18px] sm:leading-[30px]">
              Aluvity helps you understand your health concerns, find the right
              next step, and connect with licensed healthcare professionals when
              you need care.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#get-started">Get Started</Button>
              <Button href="#how-it-works" variant="outline">
                How it works
              </Button>
            </div>
            <p className="mt-7 flex items-center gap-2.5 text-[14px] font-medium leading-[22px] text-ink/70">
              <span
                aria-hidden="true"
                className="inline-block h-2 w-2 rounded-full bg-teal-brand"
              />
              AI-assisted guidance. Human-led care.
            </p>
          </Reveal>

          {/* Hero product visual — the concern → guidance → care journey. */}
          <Reveal delay={120} className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-4 h-24 w-24 rounded-full border border-teal-brand/40 sm:h-32 sm:w-32"
            />
            <div className="relative rounded-[28px] border border-ink/10 bg-mist p-4 shadow-[0_20px_60px_-30px_rgba(53,25,81,0.35)] sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <p className="text-[13px] font-semibold tracking-[0.06em] text-ink/60 uppercase">
                  Your journey
                </p>
                <ol className="flex flex-wrap items-center gap-1.5 text-[12px] font-semibold text-indigo-brand">
                  {STEPS.map((step, index) => (
                    <li key={step} className="flex items-center gap-1.5">
                      {index > 0 && (
                        <span aria-hidden="true" className="text-teal-brand">
                          →
                        </span>
                      )}
                      <span className="rounded-full bg-white px-2.5 py-1 ring-1 ring-ink/10">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-5 flex flex-col">
                <JourneyCard label="Your concern">
                  <span className="text-ink/70 italic">
                    “I’ve been experiencing irregular periods.”
                  </span>
                </JourneyCard>
                <div className="flex justify-center py-1">
                  <CurvedConnector />
                </div>
                <JourneyCard label="Aluvity guidance">
                  Here are some possible next steps to help you understand what
                  may be going on — and what kind of care could help.
                </JourneyCard>
                <div className="flex justify-center py-1">
                  <CurvedConnector />
                </div>
                <JourneyCard label="Care" accent>
                  Connect with a licensed clinician who reviews your case and
                  guides your next step.
                </JourneyCard>
              </div>

              <p className="mt-4 flex items-center gap-2 text-[13px] leading-5 text-ink/60">
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full bg-teal-brand"
                />
                Guidance and navigation — not a medical diagnosis.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

