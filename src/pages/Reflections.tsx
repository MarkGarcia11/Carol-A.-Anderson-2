import { REFLECTIONS } from "../brand/content";
import { ArchImage } from "../components/ArchImage";
import { CtaBanner } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { useSeo } from "../hooks/useSeo";

export default function Reflections() {
  useSeo({
    title: "Reflections & Resources — Carol A. Anderson, MS, LMFT",
    description:
      "Short, kind reflections on couples, connection, grief, EMDR and beginning again — written by Carol A. Anderson, MS, LMFT in Fresno, California.",
    path: "/reflections",
  });

  const [featured, ...rest] = REFLECTIONS;

  return (
    <>
      <PageHero
        eyebrow="Reflections & resources"
        title="Small, kind *notes* on the things we carry"
        body="Nothing long, nothing clinical. Just a few short pieces about the patterns, fears and hopes that show up in my office — written for the person who is still deciding whether to come in."
        background="images/sunrise-path.jpg"
      />

      <section className="section">
        <div className="shell">
          {/* Editorial status — honest about what is and is not published */}
          <Reveal variant="fade">
            <p className="mx-auto mb-12 max-w-2xl rounded-2xl border border-sage/50 bg-sage-soft/35 px-5 py-4 text-center text-[0.92rem] leading-relaxed text-charcoal">
              These pieces are in draft. They will be published only once Carol has read and
              approved each one — nothing goes up here automatically.
            </p>
          </Reveal>

          {/* Featured */}
          <Reveal variant="up" className="mb-10">
            <article className="card card-hover grid overflow-hidden lg:grid-cols-2">
              <div className="relative aspect-[16/10] lg:aspect-auto">
                <img
                  src="images/hands-tea.jpg"
                  alt="Two cups of tea and two hands resting close together on a wooden table"
                  loading="lazy"
                  decoding="async"
                  className="card-zoom h-full w-full object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-evergreen/20 to-honey/10" />
              </div>
              <div className="p-8 md:p-11">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-gold/35 bg-cream px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-evergreen">
                    {featured.tag}
                  </span>
                  <span className="text-[0.85rem] text-muted">{featured.date}</span>
                </div>
                <h2 className="display mt-5 text-[1.8rem] leading-tight text-evergreen md:text-[2.2rem]">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[1.03rem] leading-[1.8] text-charcoal/85">{featured.excerpt}</p>
                <p className="mt-6 text-[0.9rem] italic text-muted">
                  {featured.readingTime} · Full text coming soon
                </p>
              </div>
            </article>
          </Reveal>

          {/* Grid */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, index) => (
              <Reveal
                as="article"
                key={article.title}
                variant="up"
                delay={index * 110}
                className="card card-hover flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={index % 2 === 0 ? "images/journal-window.jpg" : "images/singles-window.jpg"}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="card-zoom h-full w-full object-cover"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-evergreen/20 to-honey/10" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-gold/35 bg-cream px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-evergreen">
                      {article.tag}
                    </span>
                    <span className="text-[0.82rem] text-muted">{article.date}</span>
                  </div>
                  <h3 className="display mt-4 text-[1.4rem] leading-snug text-evergreen">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.98rem] leading-[1.75] text-charcoal/85">
                    {article.excerpt}
                  </p>
                  <p className="mt-5 text-[0.85rem] italic text-muted">{article.readingTime}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Future client reflections — hidden by default --------------------- */}
      <section className="section bg-cream">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="Client reflections"
            title="Nothing here *yet* — and that is deliberate"
            body="I do not publish client reviews. Not because I am hiding from them, but because the therapy room is a private place, and permission given in a good moment is not the same as permission given freely."
          />

          <Reveal variant="up" delay={180} className="mx-auto mt-10 max-w-2xl">
            <details className="group rounded-softer border border-dashed border-gold/45 bg-ivory p-6 md:p-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="font-serif text-[1.2rem] text-evergreen">
                  Reserved for future reflections (approved by clients only)
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-evergreen/20 text-evergreen transition-transform duration-500 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="mt-5 space-y-4 text-[0.98rem] leading-[1.8] text-charcoal/85">
                <p>
                  This space is intentionally empty. When a client chooses to write something about
                  their experience and gives clear, written permission for it to be shared, Carol
                  will review it here — in full, unedited except for identifying details — before
                  anything appears on the site.
                </p>
                <p>
                  No review will ever be solicited, incentivised, or published on the strength of a
                  verbal &ldquo;you can use that if you like.&rdquo;
                </p>
                <p className="text-muted italic">
                  The one endorsement currently on this site is a professional peer endorsement from
                  Tineka Murphy-Burgess, LCSW.
                </p>
              </div>
            </details>
          </Reveal>
        </div>
      </section>

      {/* Resources -------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Where the work comes from"
                title="The books behind the *method*"
                body="If you would like to read ahead of our first session, these are the two I would point you to. Titles only — you can borrow them from a library."
              />
              <Reveal variant="up" delay={180} className="mt-8 space-y-5">
                {[
                  {
                    title: "Getting the Love You Want",
                    authors: "Harville Hendryx & Helen LaKelly Hunt",
                    note: "The couple's book behind Imago Relationship Therapy.",
                  },
                  {
                    title: "Keeping the Love You Find",
                    authors: "Harville Hendryx & Helen LaKelly Hunt",
                    note: "The companion book for people who are not yet in a relationship.",
                  },
                ].map((book) => (
                  <div key={book.title} className="rounded-2xl border border-evergreen/12 bg-ivory-soft/60 p-6">
                    <h3 className="display text-[1.35rem] text-evergreen">{book.title}</h3>
                    <p className="mt-1 text-[0.92rem] text-muted">{book.authors}</p>
                    <p className="mt-3 text-[0.98rem] leading-[1.7] text-charcoal/85">{book.note}</p>
                  </div>
                ))}
              </Reveal>
            </div>

            <div>
              <SectionHeading as="h2" eyebrow="If you need help now" title="Please do not wait for me" />
              <Reveal variant="up" delay={180} className="mt-8 space-y-5">
                <div className="rounded-softer border border-honey/40 bg-blush-soft/40 p-7">
                  <p className="text-[1.02rem] leading-[1.8] text-charcoal">
                    <strong className="font-semibold text-evergreen">
                      If you are in crisis or need immediate help, call or text 988 or dial 911.
                    </strong>
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-[1.75] text-charcoal/80">
                    This website cannot provide emergency support, and a message sent through the
                    contact form is not monitored around the clock. If you are in danger, please
                    reach a human being directly.
                  </p>
                </div>
                <ArchImage
                  src="images/sunrise-path.jpg"
                  alt="A quiet path leading toward a warm sunrise through light mist, with a small new sprout in the foreground"
                  ratio="aspect-[16/10]"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
