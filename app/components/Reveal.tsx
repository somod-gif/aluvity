"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in ms before the entrance animation starts. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header" | "footer";
};

/**
 * Fades content in with a slight upward drift when it enters the viewport.
 * Falls back to static content when the user prefers reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const nodeRef = useRef<HTMLElement | null>(null);

  // Callback ref accepts any element type, so the polymorphic `Tag` below
  // always gets a compatible ref without unsafe casts.
  const setRef = (node: HTMLElement | null) => {
    nodeRef.current = node;
  };

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={setRef}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
