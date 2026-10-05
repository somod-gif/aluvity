import Section, { Eyebrow } from "./Section";
import Reveal from "./Reveal";

const PILLARS = [
  {
    title: "Guidance, not diagnosis",
    body: "Aluvity explains, organises, and navigates. It never presents itself as a doctor, and never delivers a medical diagnosis.",
  },
  {
    title: "Clinicians stay in charge",
    body: "Every clinical decision is made by a licensed healthcare professional. AI supports the process — it doesn’t replace judgement.",
  },
  {
    title: "Plain language by default",
    body: "Health information is only useful when it’s understood. Everything Aluvity says is written to be read by real people.",
  },
];

/**
 * Trust & safety — the guardrails that shape how Aluvity behaves.
 */
export default function TrustSection() {
  return (
    <Section tone="mist" ariaLabelledBy="trust-heading">
      <div className="py-16 sm:py-24">
        <Reveal className="max-w-3xl">
          <Eyebrow>Trust & safety</Eyebrow>
          <h2
            id="trust-heading"
            className="mt-4 text-[30px] leading-[38px] font-bold tracking-tight text-indigo-brand sm:text-[40px] sm:leading-[48px]"
          >
            Clear boundaries make better care.
          </h2>
          <p className="mt-5 text-[17px] leading-[28px] text-ink/80">
            Aluvity is designed around what it should never overstep — because
            trust in healthcare depends on knowing exactly who is responsible
            for what.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 90}>
              <article className="h-full rounded-2xl border border-ink/10 bg-white p-6">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-brand text-white"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 1.5L15 4v4.5c0 3.6-2.5 6.6-6 7.9-3.5-1.3-6-4.3-6-7.9V4l6-2.5z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.3 9l1.9 1.9L11.8 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="mt-4 text-[19px] leading-7 font-bold text-indigo-brand">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[24px] text-ink/75">
                  {pillar.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <p className="mt-10 max-w-3xl text-[14px] leading-[22px] text-ink/60">
            In an emergency, call your local emergency number. Aluvity is not
            an emergency service and is not a substitute for professional
            medical advice, diagnosis, or treatment.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
