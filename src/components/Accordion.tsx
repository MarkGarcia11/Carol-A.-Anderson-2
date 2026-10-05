import { useId, useState } from "react";
import { cx } from "../utils/cx";

export type AccordionItem = {
  question: string;
  answer: string[];
};

/**
 * Accessible FAQ accordion. Opens and closes with a smooth grid-row transition
 * (so the height animates without any JS measuring), supports keyboard use, and
 * keeps only one panel open at a time so the page never feels noisy.
 */
export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={cx("divide-y divide-gold/20", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question} className="py-1">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-5 rounded-2xl px-2 py-5 text-left transition-colors duration-300 hover:bg-cream/60"
              >
                <span className="font-serif text-[1.2rem] leading-snug text-evergreen md:text-[1.4rem]">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={cx(
                    "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                    isOpen
                      ? "border-gold bg-gold text-evergreen"
                      : "border-evergreen/20 text-evergreen",
                  )}
                  style={{ transitionTimingFunction: "var(--ease-soft)" }}
                >
                  <span className="absolute h-[1.6px] w-3.5 rounded-full bg-current" />
                  <span
                    className={cx(
                      "absolute h-[1.6px] w-3.5 rotate-90 rounded-full bg-current transition-transform duration-500",
                      isOpen && "rotate-0 scale-0",
                    )}
                    style={{ transitionTimingFunction: "var(--ease-soft)" }}
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="acc-panel px-2"
              data-open={isOpen ? "true" : "false"}
            >
              <div>
                <div className="space-y-4 pb-6 pr-2 text-[1rem] leading-[1.75] text-charcoal/90 md:pr-12">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
