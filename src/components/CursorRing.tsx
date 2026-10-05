import { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks/useMotion";

const INTERACTIVE =
  'a, button, input, textarea, select, label, [role="button"], [data-cursor="grow"]';

/**
 * A tiny gold cursor ring that trails the pointer and softens/enlarges over
 * interactive elements. Desktop-only: hidden on touch devices and whenever the
 * visitor prefers reduced motion.
 */
export function CursorRing() {
  const ringRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const ring = ringRef.current;
    if (!ring) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;
    let visible = false;

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!visible) {
        visible = true;
        ring.style.opacity = "1";
      }
      const interactive = (event.target as Element | null)?.closest?.(INTERACTIVE);
      ring.dataset.active = interactive ? "true" : "false";
    };

    const onLeave = () => {
      visible = false;
      ring.style.opacity = "0";
    };

    const tick = () => {
      // Gentle lerp so the ring lags softly behind the cursor
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={ringRef}
      className="cursor-ring"
      aria-hidden="true"
      style={{ opacity: 0 }}
    />
  );
}

export default CursorRing;
