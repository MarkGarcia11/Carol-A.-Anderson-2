import { PRACTICE } from "../brand/content";
import { ArchImage } from "../components/ArchImage";
import { Button } from "../components/Button";
import { CtaBanner } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { useSeo } from "../hooks/useSeo";

const FAMILIAR = [
  "We keep having the same argument, and neither of us knows how to get out of it.",
  "We are polite with each other, and that politeness feels like a wall.",
  "One of us has stopped trying, and the other has stopped hoping.",
  "We love each other, but we have forgotten how to be on the same team.",
  "Something happened — an affair, a loss, a betrayal — and we do not know if it can be repaired.",
];

const SESSION = [
  {
    title: "We slow everything down",
    body: "Most couples arrive talking at 100 miles an hour. My first job is to slow the conversation enough that you can both actually hear each other — which usually means interrupting the interrupters.",
  },
  {
    title: "We find the pattern, not the culprit",
    body: "There is almost always a dance you are both doing. Once you can see it from the outside, you stop blaming each other for the steps and start choosing different ones.",
  },
  {
    title: "We go underneath",
    body: "Anger is usually the second feeling. Underneath it is usually fear, or loneliness, or the old childhood belief that you are too much or not enough. That is where the real conversation lives.",
  },
  {
    title: "You practise, right there",
    body: "You will not just talk about communicating — you will do it, in the room, with me guiding. Then you do it again at home, badly, and we fix it together next week.",
  },
];

export default function CouplesTherapy() {
  useSeo({
    title: "Couples Therapy in Fresno, CA — Imago Relationship Therapy",
    description:
      "Imago couples therapy in Fresno, California with Carol A. Anderson, MS, LMFT — Certified Imago Advanced Clinician with 40+ years of experience. Free 15-minute consultation.",
    path: "/couples-therapy",
  });

  return (
    <>
      <PageHero
        eyebrow="Couples therapy & workshops"
        title="You are not roommates. You are two people who have forgotten how to *reach* each other."
        body="Most couples do not come to me because they stopped loving each other. They come because they cannot find the way back in. That is a very different problem — and a much more solvable one."
        background="images/couple-walking.jpg"
      >
        <div className="flex flex-col gap-3.5 sm:flex-row">
          <Button to="/contact" variant="primary" arrow>
            Book a free 15-minute consultation
          </Button>
          <Button to="/workshops" variant="ghost">
            See the couples workshop
          </Button>
        </div>
      </PageHero>

      {/* Familiar --------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <SectionHeading
                as="h2"
                eyebrow="If this sounds familiar"
                title="You are in more company than you *think*."
                body="Every one of these sentences has been said in my office, by people who went on to do genuinely good work together."
              />

              <ul className="mt-9 space-y-4">
                {FAMILIAR.map((line, index) => (
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
                src="images/office-room-1.jpg"
                alt="Two armchairs facing each other in a sunlit therapy room in Fresno"
                shape="arch"
                ratio="aspect-[4/5]"
                className="mx-auto max-w-md"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* What is Imago ---------------------------------------------------- */}
      <section className="section bg-cream">
        <div className="shell">
          <SectionHeading
            as="h2"
            eyebrow="The method"
            title="Imago Relationship Therapy"
            body="I am a Certified Imago Therapist — Advanced Clinician, and a presenter for both the couples and the singles workshops. I have been doing this work since 1994."
          />

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {[
              {
                heading: "You chose each other for a reason",
                body: "Imago's central insight is that we are unconsciously drawn to a partner who will help us finish our unfinished growing — someone who carries both the qualities we adore and the exact habits that drive us mad. That is not a mistake. It is the assignment.",
              },
              {
                heading: "The fight is a cover story",
                body: "Underneath most recurring conflict is an old, familiar wound: I am not prioritized. I am not safe. I am not enough. Imago helps you name that wound out loud — usually for the first time — and lets your partner finally hear it.",
              },
              {
                heading: "Connection is a skill",
                body: "The method gives you structured dialogues: one partner speaks, the other mirrors back what they heard, and the speaker confirms they were understood. It feels awkward for about ten minutes. Then it feels like water.",
              },
            ].map((card, index) => (
              <Reveal
                as="div"
                key={card.heading}
                variant="up"
                delay={index * 120}
                className="card card-hover p-7"
              >
                <h3 className="display text-[1.5rem] text-evergreen">{card.heading}</h3>
                <p className="mt-4 text-[1rem] leading-[1.75] text-charcoal/85">{card.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade" delay={200} className="mt-10">
            <p className="mx-auto max-w-2xl text-center text-[0.95rem] italic leading-relaxed text-muted">
              Imago was developed by Harville Hendryx and Helen LaKelly Hunt. The couple&rsquo;s book
              behind the method is <em>Getting the Love You Want</em>; the companion book for people
              who are not yet in a relationship is <em>Keeping the Love You Find</em>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* A session -------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal variant="wipe" delay={100}>
              <ArchImage
                src="images/office-room-3.jpg"
                alt="A calm therapy room in Fresno with a sofa and armchairs arranged for a couples session"
                shape="arch"
                ratio="aspect-[4/5]"
                className="mx-auto max-w-md"
              />
            </Reveal>

            <div>
              <SectionHeading
                as="h2"
                eyebrow="What a session looks like"
                title="Fifty minutes, and nobody keeps *score*."
                body="There is no referee in my office. I am not on either of your sides — I am on the side of the thing between you."
              />

              <ol className="mt-10 space-y-8">
                {SESSION.map((step, index) => (
                  <Reveal as="li" key={step.title} variant="up" delay={index * 100} className="flex gap-5">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 font-serif text-[1.05rem] text-gold"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="display text-[1.35rem] text-evergreen">{step.title}</h3>
                      <p className="mt-2 text-[1rem] leading-[1.75] text-charcoal/85">{step.body}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Practicalities --------------------------------------------------- */}
      <section className="section bg-cream">
        <div className="shell">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Length",
                body: "Couples sessions are 50 minutes. A 90-minute session is optional but suggested — most couples find an hour is not long enough to finish one real conversation.",
              },
              {
                title: "Cost",
                body: "Couples sessions are $135. Sliding-scale openings are available; please ask rather than assume it is out of reach.",
              },
              {
                title: "Where",
                body: "Mostly in person at my office on North Willow Avenue in Fresno. Virtual couples sessions are possible when that serves you better.",
              },
            ].map((item, index) => (
              <Reveal
                as="div"
                key={item.title}
                variant="up"
                delay={index * 110}
                className="card p-7"
              >
                <h3 className="display text-[1.4rem] text-evergreen">{item.title}</h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-charcoal/85">{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade" delay={220} className="mt-12 text-center">
            <Button to="/fees" variant="ghost" arrow>
              See fees, insurance &amp; the sliding scale
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Honest note ------------------------------------------------------ */}
      <section className="section">
        <div className="shell">
          <Reveal
            variant="blur"
            className="mx-auto max-w-3xl rounded-softer border border-sage/50 bg-sage-soft/30 p-8 md:p-11"
          >
            <h2 className="display text-[1.7rem] text-evergreen md:text-[2rem]">
              One honest thing before you book
            </h2>
            <p className="mt-4 text-[1.05rem] leading-[1.8] text-charcoal/85">
              Couples therapy is not the right tool for every relationship. If there is ongoing
              violence or coercion, therapy can make things less safe, and I will tell you so
              plainly and help you find the right support instead. If your relationship is simply
              tired, stuck, or quietly heartbroken — that is exactly what this room is for.
            </p>
            <p className="mt-4 text-[1.05rem] leading-[1.8] text-charcoal/85">
              And if you are the only one willing to come right now, come anyway.{" "}
              <a href={PRACTICE.phoneHref} className="link-quiet">
                Call me
              </a>{" "}
              and we will talk about it.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
