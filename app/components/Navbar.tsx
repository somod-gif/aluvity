"use client";

import { useEffect, useId, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";

const LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Care", href: "#care" },
  { label: "For Clinicians", href: "#for-clinicians" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  // Close the mobile menu with Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
        {/* Primary horizontal logo — minimum clear space around it. */}
        <a
          href="#top"
          aria-label="Aluvity — back to top"
          className="rounded-lg p-1 -m-1"
        >
          <Logo height={30} priority alt="Aluvity" />
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium leading-6 text-ink/80 transition-colors hover:text-indigo-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#get-started"
            className="rounded-full px-4 py-2 text-[15px] font-medium leading-6 text-ink transition-colors hover:text-indigo-brand"
          >
            Sign in
          </a>
          <Button href="#get-started" className="px-5 py-2.5">
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-indigo-brand transition-colors hover:bg-mist lg:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id={menuId}
        hidden={!open}
        className="border-t border-ink/5 bg-white lg:hidden"
      >
        <nav
          aria-label="Mobile"
          className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-[16px] font-medium text-ink transition-colors hover:bg-mist"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-3 border-t border-ink/5 pt-4">
            <Button
              href="#get-started"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Sign in
            </Button>
            <Button
              href="#get-started"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
