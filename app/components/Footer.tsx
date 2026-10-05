import Logo from "./Logo";

const NAV = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Care", href: "#care" },
  { label: "For Clinicians", href: "#for-clinicians" },
  { label: "About", href: "#about" },
  { label: "Get Started", href: "#get-started" },
];

const LEGAL = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Accessibility", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo height={30} alt="Aluvity" />
            <p className="mt-4 max-w-xs text-[15px] leading-[24px] text-ink/70">
              Better access. Smarter connections. Healthier tomorrows.
            </p>
            <p className="mt-4 flex items-center gap-2 text-[14px] font-medium leading-[22px] text-indigo-brand">
              <span
                aria-hidden="true"
                className="inline-block h-2 w-2 rounded-full bg-teal-brand"
              />
              AI-assisted guidance. Human-led care.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[13px] font-semibold tracking-[0.08em] text-ink/50 uppercase">
              Explore
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] leading-6 text-ink/80 transition-colors hover:text-indigo-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="text-[13px] font-semibold tracking-[0.08em] text-ink/50 uppercase">
              Company
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {LEGAL.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] leading-6 text-ink/80 transition-colors hover:text-indigo-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-ink/10 pt-8">
          <p className="max-w-3xl text-[13px] leading-[21px] text-ink/55">
            <strong className="font-semibold text-ink/70">Medical disclaimer:</strong>{" "}
            Aluvity provides general health information and navigation
            guidance for educational purposes only. It is not a medical
            device, does not provide medical diagnoses, and is not a substitute
            for professional medical advice, diagnosis, or treatment. Always
            seek the advice of a qualified healthcare provider with any
            questions regarding a medical condition. In an emergency, call
            your local emergency number.
          </p>
          <p className="mt-5 text-[13px] leading-[21px] text-ink/50">
            © {new Date().getFullYear()} Aluvity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
