import { PRACTICE } from "../brand/content";
import { Button } from "../components/Button";
import { ConsultationForm } from "../components/ConsultationForm";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { useSeo } from "../hooks/useSeo";

export default function Contact() {
  useSeo({
    title: "Contact & Free 15-Minute Consultation — Fresno, CA",
    description:
      "Book a free 15-minute consultation with Carol A. Anderson, MS, LMFT in Fresno, California. Call (559) 484-2078 or send a message. In-person and virtual sessions available.",
    path: "/contact",
  });

  return (
    <>
      <PageHero
        eyebrow="Contact & free consultation"
        title="Fifteen quiet minutes, and no *obligation*"
        body="You can call, email, or use the form below — whichever feels like the smallest possible step. I read every message myself."
      >
        <div className="flex flex-col gap-3.5 sm:flex-row">
          <a href={PRACTICE.phoneHref} className="btn btn-primary">
            Call {PRACTICE.phoneDisplay}
          </a>
          <a href={`mailto:${PRACTICE.email}`} className="btn btn-ghost">
            Send an email
          </a>
        </div>
      </PageHero>

      {/* Form + details --------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <Reveal variant="wipe-left" delay={100}>
              <ConsultationForm />
            </Reveal>

            <div>
              <SectionHeading
                as="h2"
                eyebrow="Visit & contact"
                title="Where you would find me"
              />

              <Reveal variant="up" delay={160} className="mt-8 space-y-7">
                <Detail label="Office">
                  {PRACTICE.street}
                  <br />
                  {PRACTICE.cityLine}
                  <br />
                  <span className="text-muted">{PRACTICE.neighborhood}</span>
                </Detail>

                <Detail label="Phone">
                  <a href={PRACTICE.phoneHref} className="link-quiet">
                    {PRACTICE.phoneDisplay}
                  </a>
                </Detail>

                <Detail label="Email">
                  <a href={`mailto:${PRACTICE.email}`} className="link-quiet">
                    {PRACTICE.email}
                  </a>
                </Detail>

                <Detail label="Office hours">
                  <span className="block space-y-1">
                    {PRACTICE.hours.map((slot) => (
                      <span key={slot.day} className="block">
                        {slot.day}: {slot.time}
                      </span>
                    ))}
                  </span>
                  <span className="mt-2 block text-[0.85rem] italic text-muted">
                    Please confirm current hours when you call — I keep them flexible around
                    sessions.
                  </span>
                </Detail>

                <Detail label="Sessions">
                  Mostly in person. Virtual sessions are available whenever that serves you better.
                </Detail>
              </Reveal>

              {/* Scheduling placeholder ----------------------------------- */}
              <Reveal variant="up" delay={260} className="mt-10">
                <div className="rounded-softer border border-dashed border-gold/45 bg-cream/50 p-7 text-center">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold">
                    Coming soon
                  </p>
                  <h3 className="display mt-3 text-[1.35rem] text-evergreen">
                    Online self-scheduling
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted">
                    A Calendly-style booking link will live here so you can choose your own time.
                    Until then, the form or a phone call is the quickest route to me.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map -------------------------------------------------------------- */}
      <section className="section bg-cream">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="Finding the office"
            title="North Willow Avenue, in the *Hoover* neighborhood"
            body="The office is easy to reach from anywhere in Fresno, and there is plenty of street parking nearby."
          />

          <Reveal variant="up" delay={180} className="mt-12">
            <div className="overflow-hidden rounded-softer border border-gold/25 shadow-soft">
              <iframe
                title="Map showing Carol A. Anderson's office at 6777 North Willow Avenue, Suite 139, Fresno, CA 93710"
                src={PRACTICE.mapEmbed}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[320px] w-full border-0 md:h-[420px]"
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href={PRACTICE.mapLink}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-ghost"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reassurance ------------------------------------------------------ */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-7 md:grid-cols-3">
            {[
              {
                title: "You will hear back from me",
                body: "Not from an assistant or a booking line. I read every message and reply myself, usually within one business day.",
              },
              {
                title: "No pressure, ever",
                body: "The consultation is free precisely so that you never have to commit to a full session with a stranger.",
              },
              {
                title: "If I'm not the right fit",
                body: "I will say so honestly, and help you think about what kind of support would suit you better.",
              },
            ].map((item, index) => (
              <Reveal as="div" key={item.title} variant="up" delay={index * 110} className="card p-7">
                <h3 className="display text-[1.4rem] text-evergreen">{item.title}</h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-charcoal/85">{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade" delay={240} className="mt-12 text-center">
            <Button to="/faq" variant="ghost" arrow>
              Read the frequently asked questions
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold">{label}</p>
      <div className="mt-2 text-[1.02rem] leading-[1.75] text-charcoal/85">{children}</div>
    </div>
  );
}
