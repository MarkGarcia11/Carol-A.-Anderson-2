import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cx } from "../utils/cx";

type SectionHeadingProps = {
  eyebrow?: string;
  /** Words wrapped in *asterisks* render italic with the gold underline. */
  title: string;
  body?: ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Renders as h1 (page hero) or h2 (section). */
  as?: "h1" | "h2";
  id?: string;
};

/**
 * Section heading with a small eyebrow, an optional italic emphasis, and an
 * alternating slide-in direction so headings never feel templated.
 */
export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  className,
  as = "h2",
  id,
}: SectionHeadingProps) {
  const Heading = as;
  const centered = align === "center";

  return (
    <div
      className={cx(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal variant="fade" delay={80}>
          <p className="eyebrow mb-4">{eyebrow}</p>
        </Reveal>
      )}

      <Reveal variant="blur" delay={140}>
        <Heading
          id={id}
          className={cx(
            "display text-[2.1rem] leading-[1.1] sm:text-[2.6rem] md:text-[3.1rem]",
            centered && "mx-auto",
          )}
        >
          <EmphasisText text={title} />
        </Heading>
      </Reveal>

      {body && (
        <Reveal variant="up" delay={260}>
          <div
            className={cx(
              "mt-6 text-[1.05rem] leading-[1.75] text-muted md:text-[1.15rem]",
              centered && "mx-auto",
            )}
          >
            {body}
          </div>
        </Reveal>
      )}
    </div>
  );
}

/**
 * Renders *emphasised* words in italic serif with a champagne-gold underline
 * that draws itself in once the heading has landed.
 */
export function EmphasisText({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
          return (
            <em key={index} className="em-italic em-underline">
              {part.slice(1, -1)}
            </em>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export default SectionHeading;
