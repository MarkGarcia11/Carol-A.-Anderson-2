import { PROCESS } from "../brand/content";
import { useSectionProgress } from "../hooks/useMotion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * Carol's approach as a four-step journey. The connecting line fills as the
 * visitor scrolls (scroll-driven animation), and each step settles into place
 * as it is reached. On mobile the line runs down the left; on desktop it runs
 * through the centre.
 */
export function Journey() {
  const { ref, progress } = useSectionProgress<HTMLOListElement>();
  const reduced =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section id="approach" className="section relative scroll-mt-28 overflow-hidden bg-cream">
      <div className="shell relative">
        <SectionHeading
          align="center"
          eyebrow="Carol's approach"
          title="What the work actually looks like"
          body="Four ordinary steps, taken one at a time. Nothing here asks you to be further along than you are today."
        />

        <ol ref={ref} className="relative mx-auto mt-14 max-w-4xl md:mt-20">
          {/* The track */}
          <div
            aria-hidden="true"
            className="absolute left-[1.4rem] top-2 bottom-2 w-px bg-evergreen/12 md:left-1/2 md:-translate-x-1/2"
          >
            <div
              className="w-full origin-top bg-gradient-to-b from-gold via-honey to-gold"
              style={{ height: `${(reduced ? 1 : progress) * 100}%`, transition: "height 0.2s linear" }}
            />
          </div>

          {PROCESS.map((step, index) => (
            <li
              key={step.step}
              className="relative pb-12 pl-14 last:pb-0 md:grid md:grid-cols-2 md:gap-12 md:pl-0"
            >
              {/* Node */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-ivory shadow-sm md:left-1/2 md:-translate-x-1/2"
              >
                <span
                  className="block h-2.5 w-2.5 rounded-full bg-gold transition-transform duration-700"
                  style={{
                    transitionTimingFunction: "var(--ease-soft)",
                    transform: `scale(${reduced ? 1 : 0.5 + progress * 1.4})`,
                  }}
                />
              </span>

              {/* Card — alternating sides on desktop */}
              <Reveal
                as="div"
                variant={index % 2 === 0 ? "right" : "left"}
                delay={60}
                className={
                  index % 2 === 0
                    ? "md:col-start-1 md:pr-4 md:text-right"
                    : "md:col-start-2 md:row-start-1 md:pl-4"
                }
              >
                <p className="font-serif text-[2.6rem] leading-none text-gold/35 md:text-[3.2rem]">
                  {step.step}
                </p>
                <h3 className="display mt-2 text-[1.45rem] text-evergreen md:text-[1.7rem]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-charcoal/85 md:text-[1.05rem]">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Journey;
