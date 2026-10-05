import Section, { Eyebrow } from "./Section";
import Reveal from "./Reveal";
import Button from "./Button";

/**
 * Partner ecosystem — for clinics, insurers, and health platforms.
 */
export default function PartnerEcosystem() {
  return (
    <Section id="for-clinicians" ariaLabelledBy="partners-heading">
      <div className="py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Partner ecosystem</Eyebrow>
            <h2
              id="partners-heading"
              className="mt-4 text-[30px] leading-[38px] font-bold tracking-tight text-indigo-brand sm:text-[40px] sm:leading-[48px]"
            >
              Built to work with the care that already exists.
            </h2>
            <p className="mt-5 text-[17px] leading-[28px] text-ink/80">
              Aluvity connects people to clinicians, clinics, insurers, and
              health platforms — helping partners meet patients earlier, with
              clearer context and fewer delays.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#get-started">Partner with Aluvity</Button>
              <Button href="#get-started" variant="outline">
                Talk to our team
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Clinics & providers",
                  body: "Receive better-prepared patients and clearer context before the first visit.",
                },
                {
                  title: "Insurers",
                  body: "Guide members to the right level of care earlier in their journey.",
                },
                {
                  title: "Health platforms",
                  body: "Add plain-language guidance to the experiences your members already use.",
                },
                {
                  title: "Employers & benefits",
                  body: "Offer an accessible first stop for everyday health concerns.",
                },
              ].map((item, index) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-ink/10 bg-mist p-5"
                  style={
                    index === 0
                      ? { backgroundColor: "#ffffff", borderColor: "rgba(0,181,171,0.5)" }
                      : undefined
                  }
                >
                  <h3 className="text-[17px] leading-6 font-bold text-indigo-brand">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-[24px] text-ink/75">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
