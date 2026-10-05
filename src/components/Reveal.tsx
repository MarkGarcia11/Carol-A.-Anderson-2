import { createElement, type CSSProperties, type ElementType, type ReactNode } from "react";
import { useInView } from "../hooks/useMotion";
import { cx } from "../utils/cx";

export type RevealVariant =
  | "up"
  | "down"
  | "left"
  | "right"
  | "blur"
  | "scale"
  | "fade"
  | "wipe"
  | "wipe-left"
  | "wipe-arch";

type RevealProps = {
  children: ReactNode;
  /** HTML tag to render. Defaults to a div. */
  as?: ElementType;
  variant?: RevealVariant;
  /** Stagger delay in milliseconds. */
  delay?: number;
  className?: string;
  /** IntersectionObserver threshold override. */
  threshold?: number;
  style?: CSSProperties;
  id?: string;
};

/**
 * Wraps content in a scroll-triggered reveal. The heavy lifting is done in CSS
 * (see `[data-reveal]` in index.css) so only transform/opacity/clip-path are
 * animated — cheap enough to stay at 60fps on a phone.
 */
export function Reveal({
  children,
  as = "div",
  variant = "up",
  delay = 0,
  className,
  threshold,
  style,
  id,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>({ threshold });

  return createElement(
    as,
    {
      ref,
      id,
      className: cx(className, inView && "is-visible"),
      "data-reveal": variant,
      style: { ...style, "--reveal-delay": `${delay}ms` } as CSSProperties,
    },
    children,
  );
}

export default Reveal;
