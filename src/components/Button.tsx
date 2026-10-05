import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "../hooks/useMotion";
import { cx } from "../utils/cx";

type Variant = "primary" | "gold" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Show the small arrow that slides forward on hover. */
  arrow?: boolean;
  /** Adds the barely-perceptible breathing pulse (used on the hero CTA). */
  breathe?: boolean;
  /** Stretch to full width on small screens. */
  block?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};

type ButtonProps = BaseProps & {
  /** Internal route — renders a react-router Link. */
  to?: string;
  /** External URL — renders a plain anchor. */
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  "aria-label"?: string;
};

const VARIANT_CLASS: Record<Variant, string> = {
  primary: "btn-primary",
  gold: "btn-gold",
  ghost: "btn-ghost",
};

/** Max distance the button drifts toward the cursor, in pixels. */
const MAGNET_STRENGTH = 7;

/**
 * The site's primary interactive element: a soft magnetic hover, a warm gold
 * glow, an arrow that slides forward, and a gentle ripple on click.
 *
 * The magnetic translation lives on an outer wrapper and the hover lift lives
 * on the button itself, so the two never fight over the transform property.
 */
export function Button({
  children,
  variant = "primary",
  className,
  arrow = false,
  breathe = false,
  block = false,
  onClick,
  to,
  href,
  type = "button",
  disabled,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const canMagnet =
    !reducedMotion &&
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(pointer: fine)").matches;

  const handleMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (!canMagnet || !wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const relX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const relY = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      setOffset({
        x: Math.max(-1, Math.min(1, relX)) * MAGNET_STRENGTH,
        y: Math.max(-1, Math.min(1, relY)) * MAGNET_STRENGTH * 0.6,
      });
    },
    [canMagnet],
  );

  const reset = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  /** Gentle ripple that grows from the click point. */
  const handleClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const target = event.currentTarget;
      if (!reducedMotion) {
        const rect = target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const ripple = document.createElement("span");
        ripple.className = "btn-ripple";
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
        target.appendChild(ripple);
        window.setTimeout(() => ripple.remove(), 800);
      }
      onClick?.(event);
    },
    [onClick, reducedMotion],
  );

  useEffect(() => {
    if (!canMagnet) reset();
  }, [canMagnet, reset]);

  const classes = cx(
    "btn",
    VARIANT_CLASS[variant],
    breathe && !reducedMotion && "breathe",
    block && "w-full",
    className,
  );

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <svg
          className="btn-arrow relative z-10"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      )}
    </>
  );

  return (
    <span
      ref={wrapperRef}
      className={cx("inline-flex", block && "w-full")}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: "transform 0.5s var(--ease-soft)",
        willChange: "transform",
      }}
    >
      {to ? (
        <Link
          to={to}
          className={classes}
          aria-label={ariaLabel}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          onClick={handleClick}
        >
          {inner}
        </Link>
      ) : href ? (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          onClick={handleClick}
        >
          {inner}
        </a>
      ) : (
        <button
          type={type}
          className={classes}
          disabled={disabled}
          aria-label={ariaLabel}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          onClick={handleClick}
        >
          {inner}
        </button>
      )}
    </span>
  );
}

export default Button;
