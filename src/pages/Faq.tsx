import { FAQS } from "../brand/content";
import { Accordion, type AccordionItem } from "../components/Accordion";
import { Button } from "../components/Button";
import { CtaBanner } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { useSeo } from "../hooks/useSeo";

/** Groups the FAQ content into calm, readable sections. */
const GROUPS: { title: string; blurb: string; questions: string[] }[] = [
  {
    title: "About the work",
    blurb: "What Imago and EMDR actually are, in plain language.",
    questions: ["What is Imago therapy?", "What is EMDR?"],
  },
  {
    title: "Getting started",
    blurb: "The practical questions people ask before their first session.",
    questions: [
      "How does the free 15-minute consultation work?",
      "I have never been to therapy before. What actually happens?",
      "What if my partner does not want to come?",
      "How do I know if you are the right therapist for me?",
    ],
  },
  {
    title: "The practical bits",
    blurb: "Money, insurance, time and where we meet.",
    questions: [
      "Do you take insurance?",
      "Do you offer virtual sessions?",
      "How long are sessions, and how often will we meet?",
      "Is what I say confidential?",
    ],
  },
];

function toItems(questions: string[]): AccordionItem[] {
  return questions
    .map((question) => ({ question, answer: FAQS[question as keyof typeof FAQS] }))
    .filter((item): item is AccordionItem => Boolean(item.answer));
}

export default function Faq() {
  useSeo({
    title: "Frequently Asked Questions — Therapy in Fresno, CA",
    description:
      "Plain-language answers about Imago therapy, EMDR, the free 15-minute consultation, insurance, virtual sessions, session length and confidentiality.",
    path: "/faq",
  });

  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="The things people *actually* want to ask"
        body="You are not the first person to wonder about any of this. Here are honest answers, written the way I would say them out loud."
      />

      <section className="section">
        <div className="shell space-y-16">
          {GROUPS.map((group) => (
            <div key={group.title} className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <Reveal variant="left" className="lg:sticky lg:top-28 lg:self-start">
                <h2 className="display text-[1.9rem] leading-tight text-evergreen md:text-[2.2rem]">
                  {group.title}
                </h2>
                <p className="mt-3 text-[1rem] leading-[1.75] text-muted">{group.blurb}</p>
              </Reveal>

              <Reveal variant="up" delay={120}>
                <Accordion items={toItems(group.questions)} />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Not answered? ---------------------------------------------------- */}
      <section className="section bg-cream">
        <div className="shell">
          <Reveal variant="blur" className="mx-auto max-w-2xl text-center">
            <h2 className="display text-[1.9rem] text-evergreen md:text-[2.3rem]">
              Still wondering about something?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[1.05rem] leading-[1.8] text-muted">
              Ask me. There is no such thing as a silly question in my office, and the free
              fifteen minutes exist precisely so that you can ask yours.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Button to="/contact" variant="primary" arrow>
                Book your free consultation
              </Button>
              <Button to="/fees" variant="ghost">
                See fees &amp; insurance
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
