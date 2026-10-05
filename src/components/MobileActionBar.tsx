import { Link } from "react-router-dom";
import { PRACTICE } from "../brand/content";

/**
 * Persistent mobile action bar: a one-tap call and a one-tap route to the free
 * consultation. Hidden on tablet and desktop, where the header CTA is enough.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[55] border-t border-gold/25 glass px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 lg:hidden">
      <div className="flex items-center gap-2.5">
        <a
          href={PRACTICE.phoneHref}
          className="btn btn-ghost flex-1 !min-h-[3.25rem] !px-3 text-[0.95rem]"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call
        </a>
        <Link to="/contact" className="btn btn-gold flex-[1.4] !min-h-[3.25rem] !px-3 text-[0.95rem]">
          Free Consultation
        </Link>
      </div>
    </div>
  );
}

export default MobileActionBar;
