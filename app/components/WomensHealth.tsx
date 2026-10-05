import Section, { Eyebrow } from "./Section";
import Reveal from "./Reveal";

const TOPICS = [
  {
    title: "Menstrual health",
    body: "Cycles, irregularities, and symptoms — explained in language that makes sense.",
  },
  {
    title: "Hormonal health",
    body: "Understand how hormones shape how you feel, and when it’s worth exploring further.",
  },
  {
    title: "Everyday concerns",
    body: "The questions that are easy to dismiss but hard to ignore — with clear next steps.",
  },
];

/**
 * Women's health — Aluvity's starting point, not its boundary.
 */
export default function WomensHealth() {
  return (
    <Section ariaLabelledBy="womens-heading">
      <div className="py-16 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Women’s health, addressed directly</Eyebrow>
            <h2
              id="womens-heading"
              className="mt-4 text-[30px] leading-[38px] font-bold tracking-tight text-indigo-brand sm:text-[40px] sm:leading-[48px]"
            >
              Starting where care is often hardest to find.
            </h2>
            <p className="mt-5 text-[17px] leading-[28px] text-ink/80">
              Menstrual and hormonal health is where Aluvity begins — an area
              where questions are common, answers are often vague, and people
              are frequently told to simply wait and see. It’s a starting
              point, not a boundary: as Aluvity grows, so does the range of
              concerns it can help you navigate.
            </p>
          </Reveal>

          <div className="flex flex-col gap-4">
            {TOPICS.map((topic, index) => (
              <Reveal key={topic.title} delay={index * 90}>
                <article className="rounded-2xl border border-ink/10 bg-mist p-6">
                  <h3 className="text-[18px] leading-7 font-bold text-indigo-brand">
                    {topic.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-[24px] text-ink/75">
                    {topic.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
