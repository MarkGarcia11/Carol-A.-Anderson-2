import { Button } from "../components/Button";
import { ArchImage } from "../components/ArchImage";
import { CtaBanner } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { useSeo } from "../hooks/useSeo";

const PATTERNS = [
  "You keep meeting the same person in a different body.",
  "You are independent to a fault, and then you lose yourself completely the moment someone is interested.",
  "You are the one who understands everyone — and nobody seems to want to understand you.",
  "You have a list of what you want, and none of it is what you actually need.",
  "You are tired. Not desperate, just quietly tired of starting over.",
];

const WORK = [
  {
    title: "Name your pattern without shame",
    body: "There is a shape to who you choose. Naming it is not an accusation — it is the beginning of being able to choose something else.",
  },
  {
    title: "Separate what you want from what you were taught to want",
    body: "A great deal of what we call a type is really a family recipe. We will work out which parts are yours and which parts were handed to you.",
  },
  {
    title: "Finish the unfinished business",
    body: "Old grief, old rejection, old unfairness — when it stays unfinished, it quietly chooses your partners for you. EMDR can help move what talking alone has not.",
  },
  {
    title: "Become the partner you are looking for",
    body: "The hardest and most hopeful part. Lasting love tends to grow in people who have something of their own — and who can hold another person without disappearing.",
  },
];

export default function Singles() {
  useSeo({
    title: "Singles Therapy & Dating in Fresno, CA — Imago for Singles",
    description:
      "Imago-based therapy and workshops for singles in Fresno, California with Carol A. Anderson, MS, LMFT — Certified Singles Workshop Presenter. Understand your pattern and choose differently.",
    path: "/singles",
  });

  return (
    <>
      <PageHero
        eyebrow="Singles' therapy & workshops"
        title="If you keep choosing the same person in a different body, the problem is not your *luck*."
        body="It is your pattern. And a pattern is something we can actually look at — kindly, honestly, and without a single lecture about lowering your standards."
        background="images/singles-window.jpg"
      >
        <div className="flex flex-col gap-3.5 sm:flex-row">
          <Button to="/contact" variant="primary" arrow>
            Book a free 15-minute consultation
          </Button>
          <Button to="/workshops" variant="ghost">
            See the singles workshop
          </Button>
        </div>
      </PageHero>

      {/* Pattern ---------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Does any of this sound like you?"
                title="You are not broken. You are *repeating*."
                body="Almost everyone I work with recognises themselves in at least two of these. That recognition is not a verdict — it is the first useful thing that has happened in a while."
              />

              <ul className="mt-9 space-y-4">
                {PATTERNS.map((line, index) => (
                  <Reveal
                    as="li"
                    key={line}
                    variant="up"
                    delay={index * 80}
                    className="flex items-start gap-4 rounded-2xl border border-evergreen/10 bg-ivory-soft/60 px-5 py-4"
                  >
                    <span aria-hidden="true" className="mt-1 font-serif text-[1.1rem] text-gold">
                      &mdash;
                    </span>
                    <span className="text-[1.02rem] leading-[1.7] text-charcoal/85">{line}</span>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal variant="wipe-arch" delay={140}>
              <ArchImage
                src="images/office-room-4.jpg"
                alt="A bright, quiet therapy room with tall windows, prepared for a session"
                shape="arch"
                ratio="aspect-[4/5]"
                className="mx-auto max-w-md"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* The work --------------------------------------------------------- */}
      <section className="section bg-cream">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="What we would work on"
            title="Four *honest* conversations"
            body="This is not a marketing funnel and there is nothing to buy. It is simply the work, in the order it usually needs to happen."
          />

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {WORK.map((item, index) => (
              <Reveal
                as="div"
                key={item.title}
                variant="up"
                delay={index * 110}
                className="card card-hover flex gap-5 p-7"
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-[2.2rem] leading-none text-gold/40"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="display text-[1.45rem] text-evergreen">{item.title}</h3>
                  <p className="mt-3 text-[1rem] leading-[1.75] text-charcoal/85">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade" delay={220} className="mt-12">
            <p className="mx-auto max-w-2xl text-center text-[0.98rem] italic leading-relaxed text-muted">
              The singles&rsquo; work is drawn from the Imago tradition. The book behind it is{" "}
              <em>Keeping the Love You Find</em>, by Harville Hendryx and Helen LaKelly Hunt — a
              companion to their couple&rsquo;s book, <em>Getting the Love You Want</em>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who it's for ----------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Who this is for"
                title="People who are done *swiping* and ready to look inward"
                body="It does not matter whether you are 28 or 68. The questions are surprisingly similar."
              />
              <Reveal variant="up" delay={180} className="mt-8 space-y-4">
                {[
                  "You are single and would rather not be — but not at any cost.",
                  "You are recently out of a long relationship and do not trust your own judgement yet.",
                  "You are content on your own and quietly curious about what a real partnership would ask of you.",
                  "You are dating after 60 and finding that the terrain has changed entirely.",
                ].map((item) => (
                  <p key={item} className="flex items-start gap-3.5 text-[1.02rem] leading-[1.75] text-charcoal/85">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </p>
                ))}
              </Reveal>
            </div>

            <Reveal variant="wipe-left" delay={160}>
              <ArchImage
                src="images/older-couple.jpg"
                alt="An older couple sitting close together on a bench in warm afternoon light"
                ratio="aspect-[4/3]"
              />
              <p className="mt-5 text-[0.95rem] italic leading-relaxed text-muted">
                I work with a great many people in their sixties, seventies and beyond. Love does not
                have an expiry date, and neither does the willingness to be understood.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
