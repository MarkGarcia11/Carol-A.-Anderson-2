import type { ReactNode } from "react";
import { useReducedMotion, useSectionProgress } from "../hooks/useMotion";

/**
 * A gentle vertical parallax drift driven by the element's own scroll
 * position. Only transform is animated, and it switches off entirely under
 * `prefers-reduced-motion`.
 */
export function Parallax({
  children,
  strength = 34,
  className = "",
}: {
  children: ReactNode;
  /** Maximum travel in pixels. */
  strength?: number;
  className?: string;
}) {
  const { ref, progress } = useSectionProgress<HTMLDivElement>();
  const reduced = useReducedMotion();
  const offset = reduced ? 0 : (progress - 0.5) * strength;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(0, ${offset.toFixed(2)}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

export default Parallax;
