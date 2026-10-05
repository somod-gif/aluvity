import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "teal" | "outline" | "outlineLight";
type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold leading-6 min-h-11 transition-colors duration-200";

const VARIANTS: Record<Variant, string> = {
  // Light backgrounds — high-contrast indigo (never teal text on white).
  primary:
    "bg-indigo-brand text-white hover:bg-[#452366] active:bg-[#2b1342]",
  secondary:
    "bg-white text-ink border border-ink/15 hover:border-ink/40 hover:bg-mist",
  // Dark / indigo backgrounds — teal carries the interaction.
  teal: "bg-teal-brand text-[#062a28] hover:bg-[#00c9be] active:bg-[#00a199]",
  outline:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/50 hover:bg-mist",
  outlineLight:
    "bg-transparent text-white border border-white/30 hover:border-white/70 hover:bg-white/10",
};

type ButtonProps = CommonProps &
  Partial<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">> &
  Partial<
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">
  > & { href?: string };

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
