import { ABOUT } from "../brand/content";
import { useCountUp, useInView, useReducedMotion } from "../hooks/useMotion";
import { cx } from "../utils/cx";

type Credential = {
  value: number;
  suffix: string;
  label: string;
  display?: string;
};

/**
 * Credential strip. The one numeric stat counts up gently, once, when it first
 * scrolls into view; the others are static facts that do not need theatre.
 */
export function CredentialStats({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLUListElement>({ threshold: 0.3 });

  return (
    <ul ref={ref} className={cx("grid gap-5 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {ABOUT.credentials.map((credential, index) => (
        <CredentialItem
          key={credential.label}
          credential={credential}
          active={inView}
          index={index}
        />
      ))}
    </ul>
  );
}

function CredentialItem({
  credential,
  active,
  index,
}: {
  credential: Credential;
  active: boolean;
  index: number;
}) {
  const reduced = useReducedMotion();
  const counted = useCountUp(credential.value, active && !credential.display, 1500 + index * 150);

  const content = credential.display
    ? credential.display
    : `${reduced ? credential.value : counted}${credential.suffix}`;

  return (
    <li
      className="rounded-2xl border border-gold/25 bg-ivory-soft/70 px-5 py-6 text-center transition-all duration-700"
      style={{
        transitionTimingFunction: "var(--ease-soft)",
        transitionDelay: `${index * 90}ms`,
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(18px)",
      }}
    >
      <p className="font-serif text-[1.75rem] leading-none text-evergreen md:text-[2.1rem]">
        {content}
      </p>
      <p className="mt-3 text-[0.85rem] uppercase tracking-[0.14em] text-muted">
        {credential.label}
      </p>
    </li>
  );
}

export default CredentialStats;
