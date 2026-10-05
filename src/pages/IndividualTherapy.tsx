import { SPECIALTIES } from "../brand/content";
import { ArchImage } from "../components/ArchImage";
import { Button } from "../components/Button";
import { CtaBanner } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { useSeo } from "../hooks/useSeo";

const HELPS = [
  "Anxiety that never quite switches off",
  "Trauma, PTSD and the memories that still feel like now",
  "Grief and loss, at any age",
  "Self-esteem and the voice that tells you you are not enough",
  "Codependency and the difficulty of saying no",
  "Family conflict that never resolves",
  "Stress, burnout and life transitions",
  "Women's issues, at every stage",
];

const SESSION_STEPS = [
  {
    title: "Safety first, always",
    body: "Before we touch anything difficult, we build resources: places in your body and your life where you feel steady. This part is not a warm-up. It is the foundation, and we take as long as it takes.",
  },
  {
    title: "We choose one thing",
    body: "Not everything at once. One memory, one belief, one image. You choose it, and you can stop at any point — you are always the one holding the wheel.",
  },
  {
    title: "Gentle bilateral stimulation",
    body: "Usually eye movements following my hand, sometimes tapping or sound. It looks strange from the outside and feels surprisingly ordinary from the inside.",
  },
  {
    title: "Your brain does the rest",
    body: "While you hold the memory, your mind starts processing it the way it does during sleep. The picture often softens. The charge drops. The belief starts to sound like someone else's voice.",
  },
];

export default function IndividualTherapy() {
  useSeo({
    title: "Individual Therapy & EMDR in Fresno, CA — Anxiety, Trauma, Grief",
    description:
      "Individual therapy and EMDR in Fresno, California with Carol A. Anderson, MS, LMFT. EMDR Institute Level 2 trained since 1992. Anxiety, trauma and PTSD, grief, self-esteem. Free consultation.",
    path: "/individual-therapy",
  });

  return (
    <>
      <PageHero
        eyebrow="Individual therapy & EMDR"
        title="Some things you have carried so long you have stopped calling them *weight*."
        body="Anxiety. Grief. An old hurt that never got to finish. A belief about yourself that you know is unfair and cannot seem to put down. Individual therapy is where we pick those up together, at your pace."
        background="images/journal-window.jpg"
      >
        <Button to="/contact" variant="primary" arrow>
          Book a free 15-minute consultation
        </Button>
      </PageHero>

      {/* What EMDR is ----------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <SectionHeading
                as="h2"
                eyebrow="EMDR"
                title="EMDR, in plain language"
                body="I trained in EMDR in 1992 at the EMDR Institute, and I have been using it ever since. It is one of the most thoroughly researched therapies we have, and it is gentler than its name suggests."
              />

              <div className="mt-8 space-y-5">
                <Reveal as="p" variant="up" className="text-[1.05rem] leading-[1.8] text-charcoal/85 md:text-[1.12rem]">
                  EMDR stands for Eye Movement Desensitization and Reprocessing. When something
                  difficult happens, your brain normally files it away as a memory with a beginning
                  and an end. Sometimes — especially when we are young, or overwhelmed, or caught by
                  surprise — it does not get filed. It stays live, and it keeps firing as though the
                  thing were still happening.
                </Reveal>
                <Reveal as="p" variant="up" delay={100} className="text-[1.05rem] leading-[1.8] text-charcoal/85 md:text-[1.12rem]">
                  EMDR uses gentle, rhythmic stimulation — usually following a moving finger with
                  your eyes, sometimes tapping or sound — while you hold a memory in mind. That
                  rhythm seems to help the brain finish what it started. The memory does not
                  disappear. It simply becomes a thing that happened to you, rather than a thing
                  that is still happening.
                </Reveal>
                <Reveal as="p" variant="up" delay={180} className="text-[1.05rem] leading-[1.8] text-charcoal/85 md:text-[1.12rem]">
                  It is not hypnosis. You stay fully present, fully awake, and completely in control.
                  You are never asked to relive anything before you are ready, and we can stop the
                  moment you say so.
                </Reveal>
              </div>
            </div>

            <Reveal variant="wipe-arch" delay={140}>
              <ArchImage
                src="images/office-room-2.jpg"
                alt="A quiet corner of a therapy office with a leather armchair and framed certificates on the wall"
                shape="arch"
                ratio="aspect-[4/5]"
                className="mx-auto max-w-md"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* A session -------------------------------------------------------- */}
      <section className="section bg-cream">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="What a session is like"
            title="Slow, safe, and entirely at *your* pace"
            body="Nobody is ever pushed into the deep end in my office. Here is the shape of the work."
          />

          <ol className="mx-auto mt-14 max-w-3xl space-y-0">
            {SESSION_STEPS.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                variant="up"
                delay={index * 110}
                className="relative grid gap-2 border-l border-gold/35 pb-11 pl-8 last:pb-0 sm:grid-cols-[3.5rem_1fr] sm:gap-6 sm:pl-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[0.4rem] top-1.5 h-3 w-3 rounded-full bg-gold"
                />
                <p className="font-serif text-[1.6rem] leading-none text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="display text-[1.4rem] text-evergreen">{step.title}</h3>
                  <p className="mt-2 text-[1rem] leading-[1.75] text-charcoal/85">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* What it helps with ---------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div>
              <SectionHeading
                as="h2"
                eyebrow="What it helps with"
                title="The things people *quietly* carry"
                body="This is not an exhaustive list, and you do not need to match anything on it perfectly to be welcome here."
              />
              <Reveal variant="up" delay={180} className="mt-8">
                <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {HELPS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[1.02rem] leading-relaxed text-charcoal/85">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal variant="wipe-left" delay={160}>
              <ArchImage
                src="images/journal-window.jpg"
                alt="A person writing in a journal beside a sunny window with a warm drink"
                ratio="aspect-[4/3]"
              />
              <p className="mt-6 text-[0.98rem] italic leading-relaxed text-muted">
                You will not be asked to perform healing. Some weeks the whole session is simply
                arriving, sitting down, and saying the true thing out loud for the first time. That
                counts. It genuinely counts.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Specialties ----------------------------------------------------- */}
      <section className="section bg-evergreen text-ivory">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="Areas of care"
            title="What people come to me with"
            body="Forty years of sitting with people means I have seen a great deal of life. Whatever is on your list, you are welcome to bring it."
            className="[&_h2]:!text-ivory [&_.eyebrow]:!text-honey [&_p]:!text-ivory/75"
          />
          <Reveal variant="up" delay={200} className="mt-11">
            <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
              {SPECIALTIES.map((specialty) => (
                <li
                  key={specialty}
                  className="rounded-full border border-ivory/25 px-5 py-2.5 text-[0.95rem] text-ivory/85"
                >
                  {specialty}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
