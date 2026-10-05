import { LogoMark } from "../brand/Logo";

type PortraitPlaceholderProps = {
  /** Short label, defaults to the standard instruction. */
  label?: string;
  className?: string;
};

/**
 * Deliberate, elegant placeholder for Carol's portrait.
 *
 * Swap this component out for an <ArchImage> once Carol supplies a real photo:
 *   <ArchImage src="images/carol-portrait.jpg" alt="Carol A. Anderson, LMFT"
 *              shape="arch" ratio="aspect-[4/5]" priority />
 */
export function PortraitPlaceholder({
  label = "Replace with Carol's real photo",
  className = "",
}: PortraitPlaceholderProps) {
  return (
    <div
      className={`arch relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-cream via-ivory to-blush-soft px-6 text-center ${className}`}
      role="img"
      aria-label="Portrait placeholder — Carol's photograph will appear here"
    >
      {/* Gold dashed guide so the crop is obvious */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 rounded-[inherit] border border-dashed border-gold/45"
      />

      <LogoMark size={62} color="var(--color-gold)" />

      <p className="mt-6 font-serif text-[1.6rem] leading-tight text-evergreen">
        Carol A. Anderson
      </p>
      <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-muted">
        MS, LMFT
      </p>

      <span className="mt-7 inline-block rounded-full border border-gold/50 bg-ivory/70 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-evergreen">
        {label}
      </span>
    </div>
  );
}

export default PortraitPlaceholder;
