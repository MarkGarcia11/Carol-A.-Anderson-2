import { ABOUT, CLIENTS, PRACTICE, SPECIALTIES } from "../brand/content";
import { ArchImage } from "../components/ArchImage";
import { Button } from "../components/Button";
import { CredentialStats } from "../components/CredentialStats";
import { CtaBanner } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { PortraitPlaceholder } from "../components/PortraitPlaceholder";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { useSeo } from "../hooks/useSeo";

export default function About() {
  useSeo({
    title: "About Carol A. Anderson, MS, LMFT — 40+ Years in Fresno",
    description:
      "Meet Carol A. Anderson, MS, LMFT: 40+ years of practice in Fresno, California. Certified Imago Therapist (Advanced Clinician), EMDR Level 2 trained, California license MFT29432.",
    path: "/about",
  });

  return (
    <>
      <PageHero
        eyebrow="About Carol"
        title="A quiet room, forty years of *pattern recognition*, and a stubborn belief that people can change."
        body="I'm Carol. This page is the longer version of who you would be sitting with — how I came to this work, what I have been trained in, and what it is actually like to be in the room with me."
        background="images/office-room-1.jpg"
      >
        <Button to="/contact" variant="primary" arrow>
          Book a free 15-minute consultation
        </Button>
      </PageHero>

      {/* Story ------------------------------------------------------------ */}
      <section className="section">
        <div className="shell">
          <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal variant="wipe-arch" className="lg:sticky lg:top-28">
              <div className="arch-sm relative mx-auto max-w-sm">
                <PortraitPlaceholder className="aspect-[4/5]" />
              </div>
              <p className="mt-5 text-center text-[0.8rem] uppercase tracking-[0.16em] text-muted">
                {ABOUT.portraitCaption}
              </p>
            </Reveal>

            <div>
              <SectionHeading
                as="h2"
                eyebrow="My story"
                title="I came to this work slowly, and a little *humbly*."
              />

              <div className="mt-7 space-y-5">
                {ABOUT.intro.map((paragraph, index) => (
                  <Reveal
                    as="p"
                    key={index}
                    variant="up"
                    delay={index * 90}
                    className="text-[1.05rem] leading-[1.8] text-charcoal/85 md:text-[1.12rem]"
                  >
                    {paragraph}
                  </Reveal>
                ))}
              </div>

              <Reveal variant="up" delay={260}>
                <p className="mt-8 rounded-softer border border-gold/25 bg-cream/70 p-6 font-serif text-[1.25rem] leading-relaxed text-evergreen md:text-[1.4rem]">
                  {ABOUT.closing}
                </p>
              </Reveal>

              <Reveal variant="up" delay={200} className="mt-10">
                <CredentialStats />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Training timeline ------------------------------------------------- */}
      <section className="section bg-cream">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="Training & credentials"
            title="Forty years, built one *honest* step at a time"
            body="I keep learning, because people keep changing. Here is the shape of it."
          />

          <ol className="mx-auto mt-14 max-w-3xl space-y-0">
            {ABOUT.timeline.map((entry, index) => (
              <Reveal
                as="li"
                key={entry.year}
                variant="up"
                delay={index * 110}
                className="relative grid gap-2 border-l border-gold/35 pb-11 pl-8 last:pb-0 sm:grid-cols-[7rem_1fr] sm:gap-6 sm:pl-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[0.4rem] top-1.5 h-3 w-3 rounded-full bg-gold"
                />
                <p className="font-serif text-[1.5rem] leading-none text-gold">{entry.year}</p>
                <div>
                  <h3 className="display text-[1.35rem] text-evergreen">{entry.title}</h3>
                  <p className="mt-2 text-[1rem] leading-[1.75] text-charcoal/85">{entry.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal variant="fade" delay={200} className="mt-12 text-center">
            <p className="text-[0.95rem] text-muted">
              {PRACTICE.licenseNote} · License {PRACTICE.license}
            </p>
          </Reveal>
        </div>
      </section>

      {/* The office -------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="The room"
            title="What it feels like to walk in"
            body="Morning light through the blinds, two soft chairs close enough to talk, a couch you can actually fall asleep on if you need to. Nothing in here is accidental — it is designed so that the hardest sentence you have to say is a little easier to start."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {ABOUT.officeImages.map((image, index) => (
              <Reveal
                key={image.src}
                variant={index % 2 === 0 ? "wipe" : "wipe-left"}
                delay={index * 110}
                className={index === 0 ? "sm:col-span-2" : ""}
              >
                <ArchImage
                  src={image.src}
                  alt={image.alt}
                  ratio={index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}
                />
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade" delay={200} className="mt-10">
            <p className="text-center text-[0.85rem] italic text-muted">
              Office photography shown is representative of Carol&rsquo;s Fresno space and will be
              replaced with her own photographs when available.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What it's like ---------------------------------------------------- */}
      <section className="section bg-evergreen text-ivory">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="What it's like to work with me"
            title="Four things I will *promise* you"
            className="[&_h2]:!text-ivory [&_.eyebrow]:!text-honey [&_p]:!text-ivory/75"
          />

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {[
              {
                title: "You will not be judged",
                body: "Not for the argument you had in the car. Not for staying longer than you should have. Not for the thing you have never told anyone. My job is to understand you, not to grade you.",
              },
              {
                title: "You will not be rushed",
                body: "Some of what brought you here took decades to build. We will move at the pace your nervous system can actually hold — which, in my experience, is also the pace that lasts.",
              },
              {
                title: "You will always know what we are doing",
                body: "No mystery techniques, no silence that leaves you guessing. If I ask you to try something, I will tell you why, and you are free to say no.",
              },
              {
                title: "You will leave with something usable",
                body: "Every session should give you at least one thing you can try before we meet again. Insight is lovely; a tool you can use at 11pm on a Tuesday is better.",
              },
            ].map((promise, index) => (
              <Reveal
                as="div"
                key={promise.title}
                variant="up"
                delay={index * 110}
                className="rounded-softer border border-ivory/15 bg-evergreen-soft/40 p-7"
              >
                <h3 className="display text-[1.5rem] text-honey">{promise.title}</h3>
                <p className="mt-3 text-[1rem] leading-[1.8] text-ivory/80">{promise.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who I work with --------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Who I work with"
                title="Adults and elders, individuals, couples and groups"
                body="I have worked with people in their twenties and people in their eighties. The vocabulary changes; the underlying hopes are remarkably similar — to be understood, to be chosen, to stop hurting."
              />
              <Reveal variant="up" delay={200} className="mt-8">
                <ul className="flex flex-wrap gap-3">
                  {CLIENTS.map((client) => (
                    <li
                      key={client}
                      className="rounded-full border border-sage/60 bg-sage-soft/40 px-5 py-2.5 text-[0.95rem] text-evergreen"
                    >
                      {client}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div>
              <SectionHeading
                as="h2"
                eyebrow="Areas of care"
                title="What people bring to me"
              />
              <Reveal variant="up" delay={200} className="mt-8">
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {SPECIALTIES.map((specialty) => (
                    <li
                      key={specialty}
                      className="flex items-start gap-3 text-[1rem] leading-relaxed text-charcoal/85"
                    >
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {specialty}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Endorsement ------------------------------------------------------- */}
      <section className="section bg-cream">
        <div className="shell">
          <Reveal
            as="figure"
            variant="blur"
            className="mx-auto max-w-3xl rounded-softer border border-gold/25 bg-ivory p-9 text-center md:p-14"
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="#C9A24B" opacity="0.65" aria-hidden="true" className="mx-auto">
              <path d="M9.5 5C6.5 6.6 5 9.2 5 12.8V19h6v-6H8c0-2.4.9-4.3 2.8-5.6L9.5 5Zm9 0C15.5 6.6 14 9.2 14 12.8V19h6v-6h-3c0-2.4.9-4.3 2.8-5.6L18.5 5Z" />
            </svg>
            <blockquote className="mt-6 font-serif text-[1.4rem] italic leading-relaxed text-evergreen md:text-[1.75rem]">
              &ldquo;{ABOUT.endorsement.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-[0.95rem] text-muted">
              <span className="font-medium text-evergreen">{ABOUT.endorsement.author}</span>
              <br />
              {ABOUT.endorsement.role}
            </figcaption>
            <p className="mt-6 text-[0.82rem] text-muted">
              Client reviews are not published on this site. Carol will only ever share words that
              a client has explicitly given permission to share.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
