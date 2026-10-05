import Image from "next/image";

type LogoVariant = "horizontal" | "stacked" | "symbol";
type LogoTone = "color" | "reversed" | "white" | "black";

const SOURCE: Record<LogoVariant, string> = {
  horizontal: "aluvity-horizontal",
  stacked: "aluvity-stacked",
  symbol: "aluvity-symbol",
};

const DIMENSIONS: Record<LogoVariant, { width: number; height: number }> = {
  horizontal: { width: 2660, height: 591 },
  stacked: { width: 1306, height: 1418 },
  symbol: { width: 799, height: 591 },
};

type LogoProps = {
  variant?: LogoVariant;
  tone?: LogoTone;
  /** Rendered height in pixels — width follows the artwork aspect ratio. */
  height?: number;
  alt?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Renders the supplied Aluvity artwork from `public/logo-kit` exactly as
 * provided — never redrawn, recoloured, stretched, or rotated.
 */
export default function Logo({
  variant = "horizontal",
  tone = "color",
  height = 32,
  alt = "Aluvity",
  priority = false,
  className = "",
}: LogoProps) {
  const { width, height: baseHeight } = DIMENSIONS[variant];
  const renderedWidth = Math.round((height * width) / baseHeight);

  return (
    <Image
      src={`/logo-kit/svg/${SOURCE[variant]}-${tone}.svg`}
      alt={alt}
      width={renderedWidth}
      height={height}
      priority={priority}
      className={className}
      style={{ height, width: "auto" }}
    />
  );
}
