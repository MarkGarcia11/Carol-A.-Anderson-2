import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LogoMark } from "../brand/Logo";
import { NAV_LINKS, PRACTICE } from "../brand/content";
import { useLockBodyScroll, useScrollState } from "../hooks/useMotion";
import { cx } from "../utils/cx";
import { Button } from "./Button";

/**
 * Sticky navigation. At rest it is tall and transparent; on scroll it shrinks
 * slightly and gains a soft frosted-glass background. On mobile it becomes a
 * slide-in panel with a persistent "Call Carol" action.
 */
export function Navbar() {
  const { scrolled } = useScrollState();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useLockBodyScroll(menuOpen);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Escape closes the menu
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-evergreen focus:px-5 focus:py-3 focus:text-ivory focus:shadow-lg"
      >
        Skip to content
      </a>

      <header
        className={cx(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-700",
          scrolled ? "glass shadow-[0_10px_40px_-24px_rgba(58,53,50,0.35)]" : "bg-transparent",
        )}
        style={{ transitionTimingFunction: "var(--ease-soft)" }}
      >
        <div
          className={cx(
            "shell flex items-center justify-between gap-4 transition-all duration-700",
            scrolled ? "py-2.5" : "py-4",
          )}
          style={{ transitionTimingFunction: "var(--ease-soft)" }}
        >
          {/* Logo / name */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Carol A. Anderson, MS, LMFT — home"
          >
            <LogoMark size={scrolled ? 38 : 46} className="transition-all duration-700" />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-[1.05rem] font-medium tracking-[0.05em] text-evergreen sm:text-[1.2rem]">
                Carol A. Anderson
              </span>
              <span className="mt-1 hidden text-[0.58rem] font-medium uppercase tracking-[0.3em] text-muted sm:block">
                MS, LMFT · Fresno
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex xl:gap-1.5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cx(
                    "nav-link rounded-md px-2.5 py-1.5 text-[0.9rem] font-medium transition-colors duration-300",
                    isActive ? "text-evergreen" : "text-charcoal/80 hover:text-evergreen",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button to="/contact" variant="primary" className="!min-h-[3rem] !px-5 !py-2 text-[0.92rem]">
              Free 15-Min Consultation
            </Button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={PRACTICE.phoneHref}
              aria-label="Call Carol"
              className="inline-flex min-h-[3rem] items-center gap-2 rounded-full border border-evergreen/25 px-4 text-[0.9rem] font-medium text-evergreen transition-colors duration-300 hover:border-gold hover:bg-gold/10"
            >
              <PhoneIcon />
              <span className="hidden sm:inline">Call Carol</span>
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-evergreen/20 bg-ivory-soft/70 text-evergreen transition-colors duration-300 hover:border-gold"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={cx(
                    "absolute left-0 h-[1.8px] w-5 rounded-full bg-current transition-all duration-500",
                    menuOpen ? "top-1.5 rotate-45" : "top-0",
                  )}
                  style={{ transitionTimingFunction: "var(--ease-soft)" }}
                />
                <span
                  className={cx(
                    "absolute left-0 top-1.5 h-[1.8px] w-5 rounded-full bg-current transition-all duration-500",
                    menuOpen ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cx(
                    "absolute left-0 h-[1.8px] w-5 rounded-full bg-current transition-all duration-500",
                    menuOpen ? "top-1.5 -rotate-45" : "top-3",
                  )}
                  style={{ transitionTimingFunction: "var(--ease-soft)" }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-in menu */}
      <div
        id="mobile-menu"
        className={cx(
          "fixed inset-0 z-[65] lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        {/* Scrim */}
        <div
          className={cx(
            "absolute inset-0 bg-evergreen/25 backdrop-blur-[2px] transition-opacity duration-500",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={cx(
            "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-ivory shadow-2xl transition-transform duration-700",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
          style={{ transitionTimingFunction: "var(--ease-soft)" }}
        >
          <div className="flex items-center justify-between border-b border-gold/20 px-6 py-5">
            <span className="font-serif text-lg tracking-[0.05em] text-evergreen">Menu</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-evergreen/20 text-evergreen"
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-4 py-4">
            <ul className="space-y-1">
              {NAV_LINKS.map((link, index) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      cx(
                        "flex min-h-[3.25rem] items-center justify-between rounded-2xl px-4 text-[1.05rem] transition-colors duration-300",
                        isActive
                          ? "bg-cream text-evergreen"
                          : "text-charcoal hover:bg-cream/70 hover:text-evergreen",
                      )
                    }
                    style={{ transitionDelay: menuOpen ? `${index * 35}ms` : "0ms" }}
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-gold">
                      &rarr;
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3 border-t border-gold/20 px-5 py-5">
            <Button to="/contact" variant="gold" block arrow>
              Free 15-Min Consultation
            </Button>
            <a
              href={PRACTICE.phoneHref}
              className="btn btn-ghost w-full"
            >
              <PhoneIcon />
              {PRACTICE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default Navbar;
