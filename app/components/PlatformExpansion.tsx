import Section, { Eyebrow } from "./Section";
import Reveal from "./Reveal";

const PATHWAYS = [
  { title: "Fertility & family planning", body: "Understand your options with clear, unbiased context." },
  { title: "Perimenopause & menopause", body: "Make sense of shifting symptoms and sensible next steps." },
  { title: "Metabolic & chronic health", body: "Navigate long-term conditions with structured guidance." },
  { title: "Mental wellbeing", body: "Connect emotional and physical health in one conversation." },
];

/**
 * Platform expansion — future care pathways, each clearly labelled as
 * upcoming rather than available today.
 */
export default function PlatformExpansion() {
  return (
    <Section tone="mist" ariaLabelledBy="expansion-heading">
      <div className="py-16 sm:py-24">
        <Reveal className="max-w-3xl">
          <Eyebrow>Where Aluvity is heading</Eyebrow>
          <h2
            id="expansion-heading"
            className="mt-4 text-[30px] leading-[38px] font-bold tracking-tight text-indigo-brand sm:text-[40px] sm:leading-[48px]"
          >
            One platform, expanding care pathways.
          </h2>
          <p className="mt-5 text-[17px] leading-[28px] text-ink/80">
            Aluvity is being built to grow alongside the people it serves —
            extending from today’s starting point into broader areas of
            health, each with the same standard of clarity and care.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {PATHWAYS.map((pathway, index) => (
            <Reveal key={pathway.title} delay={index * 80} as="li">
              <article className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-teal-brand/12 px-3 py-1 text-[12px] font-semibold tracking-[0.04em] text-indigo-brand">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full bg-teal-brand"
                  />
                  Coming as Aluvity grows
                </span>
                <h3 className="mt-4 text-[19px] leading-7 font-bold text-indigo-brand">
                  {pathway.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[24px] text-ink/75">
                  {pathway.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
