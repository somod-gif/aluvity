import Section from "./Section";
import Reveal from "./Reveal";
import Button from "./Button";

/**
 * Final call to action — indigo surface, teal primary button.
 */
export default function FinalCTA() {
  return (
    <Section id="get-started" tone="indigo" ariaLabelledBy="cta-heading">
      <div className="py-16 sm:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[14px] font-semibold leading-[22px] tracking-[0.08em] text-teal-brand uppercase">
            Get started
          </p>
          <h2
            id="cta-heading"
            className="mt-4 text-[32px] leading-[40px] font-extrabold tracking-tight text-white sm:text-[44px] sm:leading-[52px]"
          >
            Your concern deserves a clear next step.
          </h2>
          <p className="mt-5 text-[17px] leading-[28px] text-white/75 sm:text-[18px] sm:leading-[30px]">
            Start with a question in your own words. Aluvity will help you
            understand what’s going on — and where to go from here.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="#top" variant="teal">
              Get Started
            </Button>
            <Button href="#how-it-works" variant="outlineLight">
              See how it works
            </Button>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2.5 text-[14px] leading-[22px] text-white/60">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-teal-brand"
            />
            AI-assisted guidance. Human-led care.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
