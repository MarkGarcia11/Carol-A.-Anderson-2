import { Link } from "react-router-dom";
import { PRACTICE } from "../brand/content";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: <ReceiptIcon />,
    title: "Clear, simple fees",
    body: "Individual sessions $100. Couples sessions $135. Nothing is added on afterwards.",
    to: "/fees",
    linkLabel: "See the fee table",
  },
  {
    icon: <ShieldIcon />,
    title: "Insurance via Headway",
    body: "I am in network with Headway, which checks your benefits and confirms your copay for you.",
    to: "/fees",
    linkLabel: "How Headway works",
  },
  {
    icon: <HeartIcon />,
    title: "Sliding scale available",
    body: "A limited number of reduced-fee openings, so cost is never the only reason someone goes without care.",
    to: "/contact",
    linkLabel: "Ask about the sliding scale",
  },
  {
    icon: <MapPinIcon />,
    title: "In person in Fresno, or virtual",
    body: "Mostly in person at my office on North Willow Avenue — and virtual sessions whenever that serves you better.",
    to: "/contact",
    linkLabel: "Directions & contact",
  },
];

/** The practical reassurance strip: money, insurance, access, location. */
export function ReassuranceStrip() {
  return (
    <section className="relative border-y border-gold/20 bg-ivory py-14 md:py-16">
      <div className="shell">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {ITEMS.map((item, index) => (
            <Reveal
              as="div"
              key={item.title}
              variant="up"
              delay={index * 100}
              className="group flex flex-col"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-cream/70 text-evergreen transition-colors duration-500 group-hover:border-gold group-hover:bg-gold/15"
              >
                {item.icon}
              </span>
              <h3 className="mt-5 font-serif text-[1.3rem] text-evergreen">{item.title}</h3>
              <p className="mt-2.5 flex-1 text-[0.96rem] leading-[1.7] text-muted">{item.body}</p>
              <Link
                to={item.to}
                className="mt-4 inline-flex items-center gap-1.5 self-start text-[0.88rem] font-medium text-gold transition-colors duration-300 hover:text-evergreen"
              >
                {item.linkLabel}
                <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" delay={200}>
          <p className="mt-12 text-center text-[0.95rem] italic text-muted">
            Office: {PRACTICE.street}, {PRACTICE.cityLine} · {PRACTICE.neighborhood}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --- Icons ---------------------------------------------------------------- */

function ReceiptIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 2v20l2.5-1.5L9 22l2.5-1.5L14 22l2.5-1.5L19 22V2l-2.5 1.5L14 2l-2.5 1.5L9 2 6.5 3.5 4 2Z" />
      <path d="M8 7h8" />
      <path d="M8 12h8" />
      <path d="M8 17h5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default ReassuranceStrip;
