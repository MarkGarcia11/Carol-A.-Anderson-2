import { PRACTICE } from "../brand/content";
import { Ambient } from "./Ambient";
import { ConsultationForm } from "./ConsultationForm";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * The single most important section on the site: the free 15-minute
 * consultation, with the form and the phone number side by side so nobody has
 * to hunt for the easier option.
 */
export function CtaBanner() {
  return (
    <section id="first-step" className="section relative scroll-mt-28 overflow-hidden bg-evergreen">
      <Ambient className="opacity-30" />

      <div className="shell relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Left — the offer */}
          <div>
            <SectionHeading
              as="h2"
              eyebrow="Your first step is simple"
              title="Fifteen minutes. No cost. No *obligation*."
              className="[&_h2]:!text-ivory [&_.eyebrow]:!text-honey [&_p]:!text-ivory/75"
            />

            <Reveal variant="up" delay={220}>
              <p className="mt-6 text-[1.05rem] leading-[1.8] text-ivory/80 md:text-[1.15rem]">
                You have probably been carrying this for a while already. Fifteen minutes is
                not much to ask of yourself, and it is completely free — a chance to hear my
                voice, ask your questions, and decide whether this feels right.
              </p>
            </Reveal>

            <Reveal variant="up" delay={320}>
              <ul className="mt-8 space-y-4">
                {[
                  "A real conversation with me, not an intake line",
                  "You ask the questions — cost, method, fit, anything",
                  "No pressure to book anything, ever",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-ivory/85">
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-honey/60"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E9B949" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-[1rem] leading-relaxed md:text-[1.05rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="up" delay={420}>
              <div className="mt-10 rounded-2xl border border-honey/30 bg-evergreen-soft/50 p-6">
                <p className="text-[0.8rem] uppercase tracking-[0.2em] text-honey">
                  Prefer to talk first?
                </p>
                <a
                  href={PRACTICE.phoneHref}
                  className="mt-3 inline-block font-serif text-[2rem] text-ivory transition-colors duration-300 hover:text-honey md:text-[2.4rem]"
                >
                  {PRACTICE.phoneDisplay}
                </a>
                <p className="mt-2 text-[0.92rem] text-ivory/60">
                  If I am with someone, leave a message — I will call you back myself.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — the form */}
          <Reveal variant="wipe-left" delay={200}>
            <ConsultationForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
