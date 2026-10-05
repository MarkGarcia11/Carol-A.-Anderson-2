import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
};

/** Shared, calm layout for the two legal pages. */
export function LegalPage({ eyebrow, title, intro, updated, children }: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} body={intro} />

      <section className="section">
        <div className="shell">
          <div className="mx-auto max-w-3xl">
            <Reveal variant="fade">
              <p className="mb-10 text-[0.85rem] uppercase tracking-[0.16em] text-muted">
                {updated}
              </p>
            </Reveal>
            <div className="space-y-10">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <Reveal as="section" variant="up">
      <h2 className="display text-[1.55rem] text-evergreen md:text-[1.8rem]">{heading}</h2>
      <div className="mt-4 space-y-4 text-[1.02rem] leading-[1.8] text-charcoal/85">{children}</div>
    </Reveal>
  );
}

export default LegalPage;
