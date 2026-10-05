import type { ReactNode } from "react";
import { Ambient } from "./Ambient";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  /** Words in *asterisks* render italic with the gold underline. */
  title: string;
  body?: ReactNode;
  children?: ReactNode;
  background?: string;
};

/**
 * Consistent, calm opening for every inner page: generous space, a slow
 * ambient wash, and a single clear statement before anything else is asked of
 * the visitor.
 */
export function PageHero({ eyebrow, title, body, children, background }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {background && (
        <div className="absolute inset-0 -z-20">
          <img src={background} alt="" aria-hidden="true" className="h-full w-full object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ivory/94 via-ivory/82 to-ivory" />
        </div>
      )}
      <Ambient />

      <div className="shell relative">
        <div className="max-w-3xl">
          <Reveal variant="fade">
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
              {eyebrow}
            </p>
          </Reveal>

          <Reveal variant="blur" delay={120}>
            <h1 className="display text-[2.4rem] leading-[1.08] sm:text-[3.1rem] md:text-[3.6rem]">
              <Emphasised title={title} />
            </h1>
          </Reveal>

          {body && (
            <Reveal variant="up" delay={260}>
              <div className="mt-7 max-w-2xl text-[1.08rem] leading-[1.8] text-muted md:text-[1.18rem]">
                {body}
              </div>
            </Reveal>
          )}

          {children && (
            <Reveal variant="up" delay={360}>
              <div className="mt-9">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

/** Renders *emphasised* words in italic serif. */
function Emphasised({ title }: { title: string }) {
  const parts = title.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("*") && part.endsWith("*") && part.length > 2 ? (
          <em key={index} className="em-italic em-underline">
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

export default PageHero;
