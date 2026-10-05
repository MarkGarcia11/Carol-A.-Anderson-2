import { ABOUT, EMPATHY, PRACTICE, SPECIALTIES } from "../brand/content";
import { ArchImage } from "../components/ArchImage";
import { Button } from "../components/Button";
import { CredentialStats } from "../components/CredentialStats";
import { CtaBanner } from "../components/CtaBanner";
import { Hero } from "../components/Hero";
import { Journey } from "../components/Journey";
import { Parallax } from "../components/Parallax";
import { PortraitPlaceholder } from "../components/PortraitPlaceholder";
import { ReassuranceStrip } from "../components/ReassuranceStrip";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCards } from "../components/ServiceCards";
import { useSeo } from "../hooks/useSeo";

export default function Home() {
  useSeo({
    title: "Carol A. Anderson, MS, LMFT | Couples & Individual Therapy in Fresno, CA",
    description:
      "A calm, hopeful space in Fresno, California for couples and individuals. 40+ years of experience, Certified Imago Therapist, EMDR-trained. Book a free 15-minute consultation.",
    path: "/",
  });

  return (
    <>
      <Hero />

      {/* ---------------------------------------------------------------- */}
      {/* 2. Empathy — you're in the right place                            */}
      {/* ---------------------------------------------------------------- */}
      <section className="section relative overflow-hidden">
        <div className="shell">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <SectionHeading
                as="h2"
                eyebrow={EMPATHY.eyebrow}
                title="Whatever brought you here, you don't have to explain it *perfectly*."
              />

              <div className="mt-8 space-y-5">
                {EMPATHY.paragraphs.map((paragraph, index) => (
                  <Reveal as="p" key={index} variant="up" delay={index * 90}
                    className="text-[1.05rem] leading-[1.8] text-charcoal/85 md:text-[1.12rem]"
                  >
                    {paragraph}
                  </Reveal>
                ))}
              </div>

              <Reveal variant="up" delay={280}>
                <p className="mt-8 rounded-softer border border-gold/25 bg-cream/70 p-6 text-[1.05rem] leading-[1.8] text-evergreen md:text-[1.15rem]">
                  {EMPATHY.pivot}
                </p>
              </Reveal>

              <Reveal as="blockquote" variant="blur" delay={380} className="mt-10">
                <p className="floaty font-serif text-[1.7rem] italic leading-snug text-evergreen md:text-[2.1rem]">
                  &ldquo;{EMPATHY.pullQuote}&rdquo;
                </p>
                <footer className="mt-3 text-[0.9rem] uppercase tracking-[0.18em] text-gold">
                  — Carol
                </footer>
              </Reveal>
            </div>

            {/* Image with a slow parallax drift */}
            <Reveal variant="wipe-arch" delay={120} className="relative">
              <Parallax strength={26}>
                <ArchImage
                  src={EMPATHY.image}
                  alt={EMPATHY.imageAlt}
                  shape="arch"
                  ratio="aspect-[4/5]"
                  className="mx-auto max-w-md"
                />
              </Parallax>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-8 -left-8 -z-10 h-40 w-40 rounded-full bg-blush/25 blur-3xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 3. How I can help                                                 */}
      {/* ---------------------------------------------------------------- */}
      <ServiceCards />

      {/* ---------------------------------------------------------------- */}
      {/* 4. Carol's approach                                               */}
      {/* ---------------------------------------------------------------- */}
      <Journey />

      {/* ---------------------------------------------------------------- */}
      {/* 5. Meet Carol                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="section relative overflow-hidden bg-ivory">
        <div className="shell">
          <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* Portrait */}
            <Reveal variant="wipe-arch" className="relative">
              <div className="arch-sm relative mx-auto max-w-sm">
                <PortraitPlaceholder className="aspect-[4/5]" />
              </div>
              <p className="mt-4 text-center text-[0.78rem] uppercase tracking-[0.16em] text-muted">
                Portrait to come · {PRACTICE.neighborhood}
              </p>
            </Reveal>

            {/* Bio */}
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Meet Carol"
                title={ABOUT.heading}
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

              <Reveal variant="up" delay={280}>
                <p className="mt-7 text-[1.05rem] leading-[1.8] text-evergreen md:text-[1.12rem]">
                  {ABOUT.closing}
                </p>
              </Reveal>

              <Reveal variant="up" delay={200} className="mt-10">
                <CredentialStats />
              </Reveal>

              {/* Peer endorsement — the only testimonial on the site */}
              <Reveal as="figure" variant="blur" delay={320}
                className="mt-10 rounded-softer border border-sage/40 bg-sage-soft/30 p-7"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#C9A24B" opacity="0.7" aria-hidden="true">
                  <path d="M9.5 5C6.5 6.6 5 9.2 5 12.8V19h6v-6H8c0-2.4.9-4.3 2.8-5.6L9.5 5Zm9 0C15.5 6.6 14 9.2 14 12.8V19h6v-6h-3c0-2.4.9-4.3 2.8-5.6L18.5 5Z" />
                </svg>
                <blockquote className="mt-4 font-serif text-[1.25rem] italic leading-relaxed text-evergreen md:text-[1.4rem]">
                  &ldquo;{ABOUT.endorsement.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-[0.92rem] text-muted">
                  <span className="font-medium text-evergreen">{ABOUT.endorsement.author}</span>
                  <br />
                  {ABOUT.endorsement.role}
                </figcaption>
              </Reveal>

              <Reveal variant="fade" delay={420} className="mt-10">
                <Button to="/about" variant="ghost" arrow>
                  Read more about Carol
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 6. Your first step is simple                                      */}
      {/* ---------------------------------------------------------------- */}
      <CtaBanner />

      {/* ---------------------------------------------------------------- */}
      {/* 7. Practical reassurance                                          */}
      {/* ---------------------------------------------------------------- */}
      <ReassuranceStrip />

      {/* A quiet closing line + specialties for local SEO */}
      <section className="section bg-cream">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="Areas of care"
            title="What people come to me with"
            body="These are the things I have spent forty years learning to sit with. If yours is not on the list, please ask — it very likely still belongs here."
          />
          <Reveal variant="up" delay={200} className="mt-10">
            <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
              {SPECIALTIES.map((specialty) => (
                <li
                  key={specialty}
                  className="rounded-full border border-evergreen/15 bg-ivory px-5 py-2.5 text-[0.95rem] text-charcoal/85"
                >
                  {specialty}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="fade" delay={300} className="mt-12 text-center">
            <Button to="/contact" variant="primary" arrow breathe>
              Book Your Free 15-Minute Consultation
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
