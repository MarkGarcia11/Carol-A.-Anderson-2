import { PRACTICE, WORKSHOPS } from "../brand/content";
import { ArchImage } from "../components/ArchImage";
import { Button } from "../components/Button";
import { ConsultationForm } from "../components/ConsultationForm";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { useSeo } from "../hooks/useSeo";

const NOTES = [
  {
    title: "Small groups, on purpose",
    body: "Workshops are kept deliberately small. Nobody should have to say something vulnerable in front of a room full of strangers.",
  },
  {
    title: "Held in Fresno",
    body: "Both workshops are held in person in Fresno, in a room set up for comfort — proper chairs, real breaks, and no folding tables.",
  },
  {
    title: "No dates published yet",
    body: "Workshops are scheduled when there is enough interest and enough room in the calendar. Tell me you are interested and you will hear first.",
  },
];

export default function Workshops() {
  useSeo({
    title: "Workshops in Fresno, CA — Couples & Singles Imago Workshops",
    description:
      "Imago couples and singles workshops in Fresno, California, presented by Carol A. Anderson, MS, LMFT — Certified Couples and Singles Workshop Presenter. Express your interest.",
    path: "/workshops",
  });

  return (
    <>
      <PageHero
        eyebrow="Workshops"
        title="A weekend of work that can do what a year of Tuesdays sometimes *cannot*."
        body="I am a certified presenter for both the Imago couples workshop and the Imago singles workshop. They are deeper, slower and more structured than a therapy hour — and for a great many people, they are the turning point."
        background="images/office-room-3.jpg"
      >
        <Button to="#express-interest" variant="primary" arrow>
          Express your interest
        </Button>
      </PageHero>

      {/* Workshop cards --------------------------------------------------- */}
      <section className="section">
        <div className="shell space-y-10">
          {WORKSHOPS.map((workshop, index) => (
            <Reveal
              as="article"
              key={workshop.title}
              variant="up"
              delay={index * 120}
              className="card card-hover overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                <div className={`relative aspect-[4/3] lg:aspect-auto ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={workshop.image}
                    alt={workshop.alt}
                    loading="lazy"
                    decoding="async"
                    className="card-zoom h-full w-full object-cover"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-evergreen/20 to-honey/10" />
                </div>

                <div className="p-8 md:p-11">
                  <p className="eyebrow">{workshop.format}</p>
                  <h2 className="display mt-4 text-[1.9rem] leading-tight text-evergreen md:text-[2.3rem]">
                    {workshop.title}
                  </h2>
                  <p className="mt-2 text-[0.95rem] italic text-muted">{workshop.subtitle}</p>
                  <p className="mt-5 text-[1.03rem] leading-[1.8] text-charcoal/85">{workshop.body}</p>

                  <h3 className="mt-8 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-evergreen">
                    What we cover
                  </h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {workshop.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[0.98rem] leading-relaxed text-charcoal/85">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9">
                    <Button to="#express-interest" variant="gold" arrow>
                      Express your interest
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Notes ------------------------------------------------------------ */}
      <section className="section bg-cream">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="Good to know"
            title="How the workshops *run*"
          />
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {NOTES.map((note, index) => (
              <Reveal as="div" key={note.title} variant="up" delay={index * 110} className="card p-7">
                <h3 className="display text-[1.4rem] text-evergreen">{note.title}</h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-charcoal/85">{note.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Express interest ------------------------------------------------- */}
      <section id="express-interest" className="section scroll-mt-28">
        <div className="shell">
          <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Express interest"
                title="Tell me you are *interested* — that is all this asks"
                body="No deposit, no date, no commitment. When enough people are interested, I set a date and the people on this list hear about it first, privately."
              />
              <Reveal variant="up" delay={200} className="mt-8">
                <ArchImage
                  src="images/office-room-4.jpg"
                  alt="A bright room with tall windows, set up and ready for a small workshop"
                  ratio="aspect-[4/3]"
                />
              </Reveal>
            </div>

            <Reveal variant="wipe-left" delay={140}>
              <ConsultationForm context="workshop" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing note ----------------------------------------------------- */}
      <section className="section bg-ivory">
        <div className="shell">
          <Reveal variant="blur" className="mx-auto max-w-3xl text-center">
            <h2 className="display text-[1.8rem] text-evergreen md:text-[2.2rem]">
              Not sure a workshop is right for you?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-[1.8] text-muted">
              Then let us not guess. Use the free fifteen minutes and I will tell you honestly
              whether I think a workshop, individual sessions, or nothing at all is the better next
              step for you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Button to="/contact" variant="primary" arrow>
                Book your free consultation
              </Button>
              <a href={PRACTICE.phoneHref} className="btn btn-ghost">
                {PRACTICE.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
