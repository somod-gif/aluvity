import Section, { Eyebrow } from "./Section";
import Reveal from "./Reveal";

/**
 * The problem — why health navigation fails people today.
 */
export default function ProblemSection() {
  return (
    <Section id="about" tone="mist" ariaLabelledBy="problem-heading">
      <div className="py-16 sm:py-24">
        <Reveal className="max-w-3xl">
          <Eyebrow>Why Aluvity exists</Eyebrow>
          <h2
            id="problem-heading"
            className="mt-4 text-[30px] leading-[38px] font-bold tracking-tight text-indigo-brand sm:text-[40px] sm:leading-[48px]"
          >
            Health questions rarely start in a clinic. They start as a worry.
          </h2>
          <p className="mt-5 text-[17px] leading-[28px] text-ink/80">
            Most people spend days or weeks searching, second-guessing, and
            postponing — unsure whether what they’re feeling deserves attention,
            and unsure where to turn. Aluvity turns that uncertainty into a
            clear, understandable path forward.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Too much noise",
              body: "Search results and forums scatter your concern across contradictions, ads, and worst-case scenarios.",
            },
            {
              title: "Too little clarity",
              body: "It’s hard to know what actually matters for your situation — and what kind of care, if any, you need.",
            },
            {
              title: "Too late to start",
              body: "By the time people reach a clinician, they’ve delayed the one step that could have helped most.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="h-full rounded-2xl border border-ink/10 bg-white p-6">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mist text-[15px] font-bold text-indigo-brand"
                >
                  {index + 1}
                </span>
                <h3 className="mt-4 text-[19px] leading-7 font-bold text-indigo-brand">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[24px] text-ink/75">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
