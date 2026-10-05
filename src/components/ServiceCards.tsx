import { useState } from "react";
import { SERVICES } from "../brand/content";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * The three ways Carol works. Three cards only — never a product grid — each
 * with a "what to expect" line that appears on hover (desktop) or tap (mobile).
 */
export function ServiceCards() {
  return (
    <section id="how-i-help" className="section relative scroll-mt-28">
      <div className="shell">
        <SectionHeading
          align="center"
          eyebrow="How I can help"
          title="Three doors into the same *quiet room*"
          body="Every path begins with the same free fifteen-minute conversation. Where it goes from there is up to you."
        />

        <div className="mt-14 grid gap-7 md:mt-20 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.key} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Reveal
      as="article"
      variant="up"
      delay={index * 130}
      className="card card-hover svc-card group flex h-full flex-col overflow-hidden"
    >
      <div
        className="relative"
        data-expanded={expanded ? "true" : "false"}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={service.image}
            alt={service.alt}
            loading="lazy"
            decoding="async"
            className="card-zoom h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-evergreen/25 via-transparent to-honey/10"
          />
          <span
            aria-hidden="true"
            className="absolute left-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ivory/90 font-serif text-[0.95rem] text-evergreen shadow-sm"
          >
            {index + 1}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-7">
          <h3 className="display text-[1.55rem] leading-tight text-evergreen">
            {service.title}
          </h3>
          <p className="mt-3 text-[1rem] leading-[1.7] text-charcoal/85">{service.short}</p>

          {/* What to expect — hover on desktop, tap on mobile */}
          <div className="svc-expect">
            <div>
              <p className="rounded-2xl border border-sage/45 bg-sage-soft/35 px-4 py-3 text-[0.92rem] leading-relaxed text-charcoal">
                {service.hover}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="mt-4 self-start text-[0.85rem] font-medium text-gold underline decoration-gold/40 decoration-1 underline-offset-4 transition-colors duration-300 hover:text-evergreen"
          >
            {expanded ? "Show less" : "What to expect"}
          </button>

          <p className="mt-4 flex-1 text-[0.98rem] leading-[1.7] text-muted">{service.detail}</p>

          <div className="mt-7">
            <Button to={service.to} variant="ghost" arrow className="w-full">
              {service.cta}
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/** Small inline label used by other sections. */
export function CardTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gold/35 bg-cream px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-evergreen">
      {children}
    </span>
  );
}

export default ServiceCards;
