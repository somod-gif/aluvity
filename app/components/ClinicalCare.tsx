import Section, { Eyebrow } from "./Section";
import Reveal from "./Reveal";
import Button from "./Button";

/**
 * Clinical care — the point where a licensed clinician takes over.
 * Delivered on an indigo surface for emphasis.
 */
export default function ClinicalCare() {
  return (
    <Section tone="indigo" ariaLabelledBy="clinical-heading">
      <div className="py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow tone="light">Clinical care</Eyebrow>
            <h2
              id="clinical-heading"
              className="mt-4 text-[30px] leading-[38px] font-bold tracking-tight text-white sm:text-[40px] sm:leading-[48px]"
            >
              When you need care, you’re connected to a clinician — not just
              an answer.
            </h2>
            <p className="mt-5 text-[17px] leading-[28px] text-white/75">
              Some concerns deserve more than guidance. Aluvity helps you reach
              licensed healthcare professionals who review your case, make the
              clinical decisions, and guide your care from there.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#get-started" variant="teal">
                Connect with a clinician
              </Button>
              <Button href="#for-clinicians" variant="outlineLight">
                I’m a clinician
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="flex flex-col gap-4">
              {[
                {
                  title: "Human-led decisions",
                  body: "Clinicians — not AI — make every clinical decision about your care.",
                },
                {
                  title: "Context arrives with you",
                  body: "The guidance you explored helps your clinician start from a shared understanding.",
                },
                {
                  title: "Care that continues",
                  body: "Follow-up and next steps stay with the professional supporting you.",
                },
              ].map((item, index) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/15 bg-white/[0.06] p-6"
                  style={
                    index ? undefined : { borderColor: "rgba(0,181,171,0.5)" }
                  }
                >
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-teal-brand"
                    />
                    <div>
                      <h3 className="text-[18px] leading-7 font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-[24px] text-white/70">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
