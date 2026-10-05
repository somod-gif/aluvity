import Section, { Eyebrow } from "./Section";
import Reveal from "./Reveal";

const STEPS = [
  {
    title: "Share your concern",
    body: "Describe what you’re experiencing in your own words. No medical vocabulary required.",
  },
  {
    title: "Understand it in plain language",
    body: "Aluvity breaks down possible causes and considerations so you can see the full picture clearly.",
  },
  {
    title: "See your next steps",
    body: "Get a clear view of sensible next steps — self-care, monitoring, or professional support.",
  },
  {
    title: "Connect with care",
    body: "When your situation calls for it, Aluvity helps you reach a licensed clinician who can help.",
  },
];

/**
 * "How it works" — the four-step path from concern to care.
 */
export default function CareJourney() {
  return (
    <Section id="how-it-works" ariaLabelledBy="journey-heading">
      <div className="py-16 sm:py-24">
        <Reveal className="max-w-3xl">
          <Eyebrow>How it works</Eyebrow>
          <h2
            id="journey-heading"
            className="mt-4 text-[30px] leading-[38px] font-bold tracking-tight text-indigo-brand sm:text-[40px] sm:leading-[48px]"
          >
            A clear path from concern to care.
          </h2>
          <p className="mt-5 text-[17px] leading-[28px] text-ink/80">
            Four simple steps, designed to keep you moving — and to keep a
            human in the loop whenever your health is on the line.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 80} as="li">
              <article className="relative h-full rounded-2xl border border-ink/10 bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-brand text-[15px] font-bold text-white">
                    {index + 1}
                  </span>
                  {index < STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden text-teal-brand sm:inline lg:hidden xl:inline"
                    >
                      →
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-[18px] leading-7 font-bold text-indigo-brand">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[24px] text-ink/75">
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <p className="mt-8 flex items-start gap-2.5 text-[14px] leading-[22px] text-ink/60">
            <span
              aria-hidden="true"
              className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-brand"
            />
            Aluvity provides guidance and navigation. It does not diagnose
            conditions, prescribe treatment, or replace professional medical
            advice.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
