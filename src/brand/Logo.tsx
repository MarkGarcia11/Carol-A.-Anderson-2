/**
 * Brand mark for Carol A. Anderson, MS, LMFT.
 *
 * The mark is a quiet metaphor for the work: two separate paths (the two
 * outer strokes) travel down and meet at a single point — "two paths become
 * one" — and from that meeting point a single stem rises with two leaves.
 * Two people, meeting, and something new growing between them.
 *
 * Drawn entirely with vector strokes so it stays crisp at every size and can
 * be animated by drawing the stroke (stroke-dashoffset) in the loader.
 */

type LogoProps = {
  /** Rendered pixel size of the square mark. */
  size?: number;
  className?: string;
  /** Colour of the strokes. Defaults to champagne gold. */
  color?: string;
  /** When true the leaves fill in (used after the stroke draw completes). */
  showLeaves?: boolean;
  /** Adds pathLength normalisation so dash animations are resolution-safe. */
  animated?: boolean;
  title?: string;
};

export function LogoMark({
  size = 48,
  className = "",
  color = "var(--color-gold)",
  showLeaves = true,
  animated = false,
  title = "Carol A. Anderson, MS, LMFT monogram",
}: LogoProps) {
  const pl = animated ? { pathLength: 100 } : {};

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      role="img"
      aria-label={title}
      style={{ overflow: "visible", ...(animated ? { ["--len" as string]: 100 } : {}) }}
    >
      {/* Soft enclosing circle — the "room" you are welcomed into */}
      <circle
        cx="32"
        cy="32"
        r="25.5"
        stroke={color}
        strokeWidth="1.3"
        opacity="0.75"
        {...pl}
      />

      {/* Left path */}
      <path
        d="M15.5 28.5C19 39 25.2 44.6 32 44.6"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        {...pl}
      />

      {/* Right path */}
      <path
        d="M48.5 28.5C45 39 38.8 44.6 32 44.6"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        {...pl}
      />

      {/* The single line that continues upward from where the two meet */}
      <path
        d="M32 44.6C32 38.5 32 31.5 32 23.5"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        {...pl}
      />

      {/* Two leaves — new growth */}
      {showLeaves && (
        <g fill={color} opacity="0.9">
          <path d="M32 31.2C28.7 29.2 26.7 26.3 26.6 22.8C29.6 23.7 31.6 26.6 32 31.2Z" />
          <path d="M32 31.2C35.3 29.2 37.3 26.3 37.4 22.8C34.4 23.7 32.4 26.6 32 31.2Z" />
        </g>
      )}
    </svg>
  );
}

type LockupProps = {
  /** Size of the mark in pixels. */
  markSize?: number;
  className?: string;
  /** "light" for dark backgrounds (footer), "dark" for ivory backgrounds. */
  tone?: "dark" | "light";
  showTagline?: boolean;
};

/** Horizontal logo lock-up: mark + name + credential line. */
export function LogoLockup({
  markSize = 46,
  className = "",
  tone = "dark",
  showTagline = false,
}: LockupProps) {
  const nameColor = tone === "dark" ? "text-evergreen" : "text-ivory";
  const subColor = tone === "dark" ? "text-muted" : "text-ivory/70";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark size={markSize} className="shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[1.35rem] md:text-[1.5rem] font-medium tracking-[0.06em] ${nameColor}`}
        >
          Carol A. Anderson
        </span>
        <span
          className={`mt-1 text-[0.62rem] md:text-[0.68rem] font-sans font-medium uppercase tracking-[0.32em] ${subColor}`}
        >
          MS, LMFT
        </span>
        {showTagline && (
          <span className={`mt-1.5 text-[0.7rem] font-sans italic ${subColor}`}>
            Marriage &amp; Family Therapist · Fresno, CA
          </span>
        )}
      </span>
    </span>
  );
}

export default LogoMark;
