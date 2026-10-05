import { FEES, PRACTICE } from "../brand/content";
import { Button } from "../components/Button";
import { CtaBanner } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { useSeo } from "../hooks/useSeo";

export default function Fees() {
  useSeo({
    title: "Fees & Insurance in Fresno, CA — Sliding Scale, Headway",
    description:
      "Therapy fees in Fresno, CA: individual sessions $100, couples sessions $135. Insurance accepted through Headway. Sliding scale available. Clear, simple pricing from Carol A. Anderson, MS, LMFT.",
    path: "/fees",
  });

  return (
    <>
      <PageHero
        eyebrow="Fees & insurance"
        title="Clear, simple *numbers* — before you ever sit down"
        body={FEES.intro}
      >
        <div className="flex flex-col gap-3.5 sm:flex-row">
          <Button to="/contact" variant="primary" arrow>
            Book a free consultation
          </Button>
          <Button to="/faq" variant="ghost">
            Read the FAQ
          </Button>
        </div>
      </PageHero>

      {/* Fee table -------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <SectionHeading
            as="h2"
            eyebrow="Session fees"
            title="What a session costs"
            body="Private pay, invoiced at the end of each session. There are no package minimums and no cancellation traps — life happens."
          />

          <Reveal variant="up" delay={160} className="mt-11 overflow-hidden rounded-softer border border-gold/25">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Session fees for individual therapy, couples therapy and the free 15-minute
                consultation
              </caption>
              <thead>
                <tr className="bg-cream">
                  <th scope="col" className="px-5 py-4 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-evergreen md:px-7">
                    Service
                  </th>
                  <th scope="col" className="px-5 py-4 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-evergreen md:px-7">
                    Length
                  </th>
                  <th scope="col" className="px-5 py-4 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-evergreen md:px-7">
                    Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {FEES.table.map((row) => (
                  <tr key={row.service} className="border-t border-gold/20 align-top">
                    <th scope="row" className="px-5 py-6 font-serif text-[1.25rem] font-normal text-evergreen md:px-7 md:text-[1.4rem]">
                      {row.service}
                      <span className="mt-2 block font-sans text-[0.92rem] font-normal leading-relaxed text-muted">
                        {row.note}
                      </span>
                    </th>
                    <td className="px-5 py-6 text-[1rem] text-charcoal/85 md:px-7">{row.length}</td>
                    <td className="whitespace-nowrap px-5 py-6 font-serif text-[1.5rem] text-evergreen md:px-7 md:text-[1.7rem]">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          {/* Payment methods */}
          <Reveal variant="up" delay={220} className="mt-10">
            <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-evergreen">
              Ways to pay
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {FEES.paymentMethods.map((method) => (
                <li
                  key={method}
                  className="rounded-full border border-evergreen/15 bg-ivory-soft/70 px-5 py-2.5 text-[0.95rem] text-charcoal/85"
                >
                  {method}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Sliding scale ---------------------------------------------------- */}
      <section className="section bg-cream">
        <div className="shell">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                as="h2"
                eyebrow="If the fee is the obstacle"
                title="A sliding scale, kept *small* on purpose"
                body={FEES.slidingScale.body}
              />
              <Reveal variant="up" delay={200} className="mt-8">
                <Button to={FEES.slidingScale.cta.to} variant="gold" arrow>
                  {FEES.slidingScale.cta.label}
                </Button>
              </Reveal>
            </div>

            <Reveal variant="wipe-left" delay={160} className="rounded-softer border border-gold/25 bg-ivory p-8 md:p-10">
              <h3 className="display text-[1.5rem] text-evergreen">A note about cost</h3>
              <p className="mt-4 text-[1.02rem] leading-[1.8] text-charcoal/85">
                I would rather have an honest conversation about money than have you quietly decide
                that therapy is not for you. Please do not talk yourself out of asking. In forty
                years I have never once thought less of anyone for raising it.
              </p>
              <p className="mt-4 text-[1.02rem] leading-[1.8] text-charcoal/85">
                And if I genuinely cannot help within what you can spend, I will tell you that too
                — and do my best to point you toward someone who can.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Headway guide ---------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow="Insurance"
            title="Using your insurance through *Headway*"
            body={FEES.headway.body}
          />

          <div className="mx-auto mt-14 max-w-3xl">
            <ol className="grid gap-6">
              {FEES.headway.steps.map((step, index) => (
                <Reveal
                  as="li"
                  key={step}
                  variant="up"
                  delay={index * 110}
                  className="flex gap-5 rounded-2xl border border-evergreen/10 bg-ivory-soft/60 p-6"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-evergreen font-serif text-[1.05rem] text-ivory"
                  >
                    {index + 1}
                  </span>
                  <p className="pt-1.5 text-[1.02rem] leading-[1.75] text-charcoal/85">{step}</p>
                </Reveal>
              ))}
            </ol>

            <Reveal variant="fade" delay={220} className="mt-10 flex flex-col items-center gap-4 text-center">
              <a href={PRACTICE.headway} target="_blank" rel="noreferrer noopener" className="btn btn-ghost">
                Open Headway.co &rarr;
              </a>
              <p className="max-w-lg text-[0.92rem] leading-relaxed text-muted">
                Not sure whether your plan is covered? Ask me during the free fifteen minutes and I
                will help you work it out. You can also{" "}
                <a href={PRACTICE.phoneHref} className="link-quiet">
                  call {PRACTICE.phoneDisplay}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Private pay ------------------------------------------------------ */}
      <section className="section bg-evergreen text-ivory">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Private pay"
                title="Many people choose to pay *directly*"
                body="Some prefer it for privacy — nothing is submitted to an insurer. Some prefer it for flexibility, or because their plan covers less than they expected. Both are perfectly good reasons, and neither changes how I work with you."
                className="[&_h2]:!text-ivory [&_.eyebrow]:!text-honey [&_p]:!text-ivory/75"
              />
            </div>
            <Reveal variant="up" delay={200} className="space-y-5">
              {[
                "Cash, check, credit card, Apple Pay and Apple Cash",
                "Venmo and PayPal are also accepted",
                "A superbill can be provided if you plan to claim privately",
                "Sliding-scale openings remain available to private-pay clients",
              ].map((item) => (
                <p key={item} className="flex items-start gap-3.5 text-[1.02rem] leading-[1.75] text-ivory/85">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-honey" />
                  {item}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
