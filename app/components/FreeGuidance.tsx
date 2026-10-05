import Section, { Eyebrow } from "./Section";
import Reveal from "./Reveal";
import Button from "./Button";

const POINTS = [
  {
    title: "Plain language, always",
    body: "Every explanation is written to be understood — no jargon, no medical dictionary required.",
  },
  {
    title: "Personalised to your concern",
    body: "Aluvity focuses on what you’ve shared, so guidance reflects your situation rather than a generic page.",
  },
  {
    title: "Transparent about uncertainty",
    body: "You’ll always see what’s known, what isn’t, and when it’s worth speaking to a professional.",
  },
];

/**
 * Free guidance — the everyday starting point for anyone with a health
 * question.
 */
export default function FreeGuidance() {
  return (
    <Section id="care" tone="mist" ariaLabelledBy="guidance-heading">
      <div className="py-16 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Free guidance</Eyebrow>
            <h2
              id="guidance-heading"
              className="mt-4 text-[30px] leading-[38px] font-bold tracking-tight text-indigo-brand sm:text-[40px] sm:leading-[48px]"
            >
              Understand what you’re feeling — before you decide what to do.
            </h2>
            <p className="mt-5 text-[17px] leading-[28px] text-ink/80">
              Aluvity’s guidance is free to use and available whenever a
              concern surfaces. It’s the calm, credible first step between
              “something feels off” and knowing your options.
            </p>
            <div className="mt-7">
              <Button href="#get-started">Ask a question</Button>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            {POINTS.map((point, index) => (
              <Reveal key={point.title} delay={index * 90}>
                <article className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-6">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-brand/15 text-teal-brand"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6.5L4.8 9.2L10 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[18px] leading-7 font-bold text-indigo-brand">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-[24px] text-ink/75">
                      {point.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
