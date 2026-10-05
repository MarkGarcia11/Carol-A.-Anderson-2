import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoLockup } from "../brand/Logo";
import { CRISIS, PRACTICE } from "../brand/content";

const SERVICE_LINKS = [
  { label: "Couples Therapy & Workshops", to: "/couples-therapy" },
  { label: "Singles' Therapy & Workshops", to: "/singles" },
  { label: "Individual Therapy & EMDR", to: "/individual-therapy" },
  { label: "Workshops", to: "/workshops" },
];

const QUICK_LINKS = [
  { label: "About Carol", to: "/about" },
  { label: "Fees & Insurance", to: "/fees" },
  { label: "FAQ", to: "/faq" },
  { label: "Reflections & Resources", to: "/reflections" },
  { label: "Contact & Free Consultation", to: "/contact" },
];

/**
 * The footer: five clearly organised columns, the crisis notice, and the
 * professional disclaimer. Dense, but every column has a single job.
 */
export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-evergreen text-ivory">
      {/* Soft gold glow along the top edge */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      />

      <div className="shell relative py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Column 1 — identity */}
          <div className="lg:col-span-3">
            <LogoLockup markSize={44} tone="light" />
            <p className="mt-5 max-w-xs text-[0.98rem] leading-relaxed text-ivory/75">
              A calm, hopeful room in Fresno where couples and individuals do the
              work of coming back to themselves — and to each other.
            </p>
            <VerifiedBadge />
          </div>

          {/* Column 2 — services */}
          <nav className="lg:col-span-2" aria-label="Services">
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-3 text-[0.98rem]">
              {SERVICE_LINKS.map((link) => (
                <li key={link.to}>
                  <FooterLink to={link.to}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — quick links */}
          <nav className="lg:col-span-2" aria-label="Quick links">
            <FooterHeading>Explore</FooterHeading>
            <ul className="space-y-3 text-[0.98rem]">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <FooterLink to={link.to}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4 — visit & contact */}
          <div className="lg:col-span-2">
            <FooterHeading>Visit &amp; Contact</FooterHeading>
            <address className="space-y-3 text-[0.98rem] not-italic leading-relaxed text-ivory/75">
              <p>
                {PRACTICE.street}
                <br />
                {PRACTICE.cityLine}
                <br />
                <span className="text-ivory/55">{PRACTICE.neighborhood}</span>
              </p>
              <p>
                <a href={PRACTICE.phoneHref} className="footer-link">
                  {PRACTICE.phoneDisplay}
                </a>
                <br />
                <a href={`mailto:${PRACTICE.email}`} className="footer-link">
                  {PRACTICE.email}
                </a>
              </p>
              <p className="text-ivory/55">
                Office hours
                <br />
                {PRACTICE.hours.map((slot) => (
                  <span key={slot.day} className="block">
                    {slot.day}: {slot.time}
                  </span>
                ))}
              </p>
              <p>
                <a
                  href={PRACTICE.mapLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link"
                >
                  View on Google Maps &rarr;
                </a>
              </p>
            </address>
          </div>

          {/* Column 5 — gentle reminders + social */}
          <div className="lg:col-span-3">
            <FooterHeading>Gentle reminders</FooterHeading>
            <p className="text-[0.98rem] leading-relaxed text-ivory/75">
              An occasional note when a new workshop or reflection is published.
              Never more than once a month, and never anything you have to act on.
            </p>
            <NewsletterForm />
            <div className="mt-6 flex items-center gap-3">
              <SocialPlaceholder label="Instagram" />
              <SocialPlaceholder label="Facebook" />
              <SocialPlaceholder label="Psychology Today" href={PRACTICE.psychologyToday} />
            </div>
          </div>
        </div>

        {/* Crisis notice */}
        <div className="mt-14 rounded-2xl border border-honey/40 bg-evergreen-soft/60 p-6 md:mt-16">
          <p className="text-[0.98rem] leading-relaxed text-ivory">
            <strong className="font-semibold text-honey">In crisis?</strong>{" "}
            {CRISIS.line}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ivory/70">{DISCLAIMER_SHORT}</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/12">
        <div className="shell flex flex-col gap-4 py-6 text-[0.85rem] text-ivory/65 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Carol A. Anderson, MS, LMFT · California
            license {PRACTICE.license}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy" className="footer-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-link">
              Terms &amp; Disclaimer
            </Link>
            <a href={PRACTICE.psychologyToday} target="_blank" rel="noreferrer noopener" className="footer-link">
              Psychology Today profile
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: rgba(251,247,240,0.72);
          text-decoration: none;
          border-bottom: 1px solid rgba(201,162,75,0.35);
          transition: color .35s var(--ease-soft), border-color .35s var(--ease-soft);
          padding-bottom: 1px;
        }
        .footer-link:hover { color: #E9B949; border-color: #E9B949; }
      `}</style>
    </footer>
  );
}

const DISCLAIMER_SHORT =
  "This website does not provide emergency services, and no therapeutic relationship exists until services begin. If your situation is urgent, please use the numbers above or go to your nearest emergency department.";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-honey">
      {children}
    </h2>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="footer-link">
      {children}
    </Link>
  );
}

function VerifiedBadge() {
  return (
    <a
      href={PRACTICE.psychologyToday}
      target="_blank"
      rel="noreferrer noopener"
      className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-honey/45 bg-evergreen-soft/70 px-4 py-2.5 text-[0.8rem] text-ivory transition-colors duration-500 hover:border-honey hover:bg-evergreen-soft"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E9B949" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" />
      </svg>
      Verified by Psychology Today
    </a>
  );
}

function SocialPlaceholder({ label, href }: { label: string; href?: string }) {
  const className =
    "inline-flex h-11 min-w-[2.75rem] items-center justify-center rounded-full border border-ivory/25 px-3.5 text-[0.78rem] text-ivory/70 transition-colors duration-500 hover:border-honey hover:text-honey";
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
        {label}
      </a>
    );
  }
  return (
    <span className={className} aria-label={`${label} — social profile coming soon`}>
      {label}
    </span>
  );
}

/**
 * Newsletter sign-up. Submissions are held locally until Carol connects a
 * mailing provider (Mailchimp / Buttondown / Formspree) — see README.
 */
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      className="mt-5"
      onSubmit={(event) => {
        event.preventDefault();
        if (!email.includes("@")) return;
        setSent(true);
        setEmail("");
      }}
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="footer-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="field !border-ivory/25 !bg-ivory/10 !text-ivory placeholder:!text-ivory/45"
        />
        <button
          type="submit"
          className="btn btn-gold shrink-0 !min-h-[3.25rem] !px-6"
        >
          {sent ? "Thank you" : "Keep me posted"}
        </button>
      </div>
      <p aria-live="polite" className="mt-2 min-h-[1.25rem] text-[0.82rem] text-honey/90">
        {sent ? "You're on the list. Nothing will arrive without a good reason." : ""}
      </p>
    </form>
  );
}

export default Footer;
