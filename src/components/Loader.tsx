import { useEffect, useState } from "react";
import { LogoMark } from "../brand/Logo";
import { PRACTICE } from "../brand/content";

type LoaderProps = {
  /** Called once the intro has finished so the app can reveal itself. */
  onFinish: () => void;
};

/**
 * The opening breath of the site. The logo draws itself stroke by stroke, the
 * wordmark rises, a thin gold line fills — then the whole thing lifts away.
 *
 * Everything underneath is already rendered and readable, so the loader never
 * delays access to content, and it is skipped entirely for returning visitors
 * in the same session.
 */
export function Loader({ onFinish }: LoaderProps) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLeaving(true), 2150);
    const doneTimer = window.setTimeout(() => onFinish(), 2850);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
    };
  }, [onFinish]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ivory"
      style={{
        opacity: leaving ? 0 : 1,
        transform: leaving ? "scale(1.04)" : "scale(1)",
        transition: "opacity 0.7s var(--ease-soft), transform 0.7s var(--ease-soft)",
        pointerEvents: leaving ? "none" : "auto",
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <AmbientWash />

      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="loader-mark">
          <LogoMark size={104} animated color="var(--color-gold)" />
        </div>

        <div className="loader-word mt-7">
          <p className="font-serif text-[2rem] leading-none tracking-[0.05em] text-evergreen sm:text-[2.5rem]">
            Carol A. Anderson
          </p>
          <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.42em] text-muted sm:text-[0.78rem]">
            MS, LMFT
          </p>
        </div>

        <div className="mt-9 h-[2px] w-44 overflow-hidden rounded-full bg-gold/20 sm:w-56">
          <div className="loader-bar h-full w-full rounded-full bg-gradient-to-r from-gold to-honey" />
        </div>

        <p className="mt-6 max-w-xs text-sm italic leading-relaxed text-muted">
          {PRACTICE.cityLine} · A calm space to begin
        </p>
      </div>
    </div>
  );
}

/** Soft, slow warmth behind the mark so the loader never feels stark. */
function AmbientWash() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span
        className="blob"
        style={{
          width: "30rem",
          height: "30rem",
          top: "-8rem",
          left: "50%",
          marginLeft: "-15rem",
          background: "radial-gradient(circle, rgba(233,185,73,0.35), transparent 70%)",
          ["--drift-duration" as string]: "22s",
        }}
      />
      <span
        className="blob"
        style={{
          width: "26rem",
          height: "26rem",
          bottom: "-9rem",
          right: "-6rem",
          background: "radial-gradient(circle, rgba(232,185,165,0.32), transparent 70%)",
          ["--drift-duration" as string]: "26s",
          ["--drift-delay" as string]: "-8s",
        }}
      />
    </div>
  );
}

export default Loader;
