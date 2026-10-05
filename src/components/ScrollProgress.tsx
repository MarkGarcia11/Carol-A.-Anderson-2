import { useScrollState } from "../hooks/useMotion";

/**
 * The thin champagne-gold line at the very top of the viewport that fills as
 * the visitor reads. Pure transform, so it costs nothing to animate.
 */
export function ScrollProgress() {
  const { progress } = useScrollState();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-gold via-honey to-blush"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}

export default ScrollProgress;
