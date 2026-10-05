import { useEffect, useRef, useState } from "react";
import { HERO, PRACTICE } from "../brand/content";
import { useReducedMotion } from "../hooks/useMotion";
import { Button } from "./Button";

/** Interval between the rotating phrases, in ms. */
const PHRASE_INTERVAL = 2800;

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  // Gently nudge the video into playing (some mobile browsers need a hand)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const attempt = () => {
      if (video.paused) void video.play().catch(() => undefined);
    };
    attempt();
    document.addEventListener("touchstart", attempt, { once: true, passive: true });
    return () => document.removeEventListener("touchstart", attempt);
  }, []);

  return (
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      {/* --- Background media ------------------------------------------------ */}
      <div className="absolute inset-0 -z-10">
        {/* Poster is always present, so the hero is never empty */}
        <img
          src={HERO.poster}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          fetchPriority="high"
          decoding="sync"
        />
        {videoReady && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
            onError={() => setVideoReady(false)}
          >
            <source src={HERO.videoUrl} type="video/mp4" />
          </video>
        )}

        {/* Warm light washes for legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ivory/92 via-ivory/72 to-ivory md:bg-gradient-to-r md:from-ivory md:via-ivory/85 md:to-ivory/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-tr from-honey/12 via-transparent to-blush/14"
        />
      </div>

      <div className="shell relative">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="word mb-6 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-gold md:text-[0.78rem]"
            style={{ ["--word-delay" as string]: "120ms" }}
          >
            <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
            {HERO.eyebrow}
          </p>

          {/* Headline — word by word, rising and un-blurring */}
          <h1 className="display text-[2.6rem] leading-[1.05] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.6rem]">
            {HERO.headline.map((word, index) => (
              <span key={`${word.text}-${index}`}>
                <span
                  className={word.em ? "word word-em font-medium italic" : "word"}
                  style={{
                    ["--word-delay" as string]: `${320 + index * 125}ms`,
                    ["--underline-delay" as string]: `${320 + index * 125 + 780}ms`,
                  }}
                >
                  {word.text}
                </span>
                {index < HERO.headline.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>

          {/* Two paths become one */}
          <TwoPathsBecomeOne />

          {/* Subheadline */}
          <p
            className="word mt-7 max-w-xl text-[1.1rem] leading-[1.75] text-charcoal/85 md:text-[1.25rem]"
            style={{ ["--word-delay" as string]: "1350ms" }}
          >
            {HERO.subheadline}
          </p>

          {/* Rotating phrase */}
          <p
            className="word mt-5 flex flex-wrap items-baseline gap-x-2 font-serif text-[1.25rem] text-evergreen md:text-[1.45rem]"
            style={{ ["--word-delay" as string]: "1500ms" }}
          >
            <span>{HERO.rotatingLead}</span>
            <RotatingPhrase words={HERO.rotatingWords} interval={PHRASE_INTERVAL} />
          </p>

          {/* Calls to action */}
          <div
            className="word mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            style={{ ["--word-delay" as string]: "1650ms" }}
          >
            <Button to={HERO.primaryCta.to} variant="primary" arrow breathe>
              {HERO.primaryCta.label}
            </Button>
            <HowIHelpLink />
          </div>

          {/* Proof line */}
          <p
            className="word mt-9 max-w-lg text-[0.98rem] leading-relaxed text-muted"
            style={{ ["--word-delay" as string]: "1800ms" }}
          >
            {HERO.proofLine}
          </p>

          <div className="word mt-6" style={{ ["--word-delay" as string]: "1900ms" }}>
            <VerifiedBadge />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="block h-12 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
      </div>
    </section>
  );
}

/** The quiet metaphor: two thin gold strokes that draw themselves and meet. */
function TwoPathsBecomeOne() {
  const reduced = useReducedMotion();

  return (
    <svg
      className="mt-8 h-12 w-full max-w-xl"
      viewBox="0 0 720 48"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {/* Left stroke */}
      <path
        className={reduced ? undefined : "draw-path"}
        d="M0 8C90 8 150 40 268 36 348 33 392 20 432 20"
        stroke="url(#goldFadeL)"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength={100}
        style={reduced ? undefined : { ["--len" as string]: 100, ["--draw-delay" as string]: "420ms" }}
      />
      {/* Right stroke */}
      <path
        className={reduced ? undefined : "draw-path"}
        d="M720 8C630 8 570 40 452 36 372 33 328 20 288 20"
        stroke="url(#goldFadeR)"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength={100}
        style={reduced ? undefined : { ["--len" as string]: 100, ["--draw-delay" as string]: "620ms" }}
      />
      {/* The single line that continues from where they meet */}
      <path
        className={reduced ? undefined : "draw-path"}
        d="M360 20C330 20 318 12 300 8"
        stroke="url(#goldFadeL)"
        strokeWidth="1.4"
        strokeLinecap="round"
        pathLength={100}
        style={reduced ? undefined : { ["--len" as string]: 100, ["--draw-delay" as string]: "1500ms" }}
      />
      {/* Sprout at the point where the two become one */}
      <g className={reduced ? undefined : "join-dot"} style={reduced ? { opacity: 1 } : undefined}>
        <circle cx="360" cy="20" r="4.2" fill="#C9A24B" />
        <path
          d="M360 16.5C358.6 13.4 357.2 11.6 356 10.4 357.4 10.6 359.4 12.4 360 16.5Z"
          fill="#E9B949"
        />
      </g>

      <defs>
        <linearGradient id="goldFadeL" x1="0" y1="0" x2="720" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C9A24B" stopOpacity="0" />
          <stop offset="0.35" stopColor="#C9A24B" stopOpacity="0.85" />
          <stop offset="1" stopColor="#E9B949" />
        </linearGradient>
        <linearGradient id="goldFadeR" x1="720" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C9A24B" stopOpacity="0" />
          <stop offset="0.35" stopColor="#C9A24B" stopOpacity="0.85" />
          <stop offset="1" stopColor="#E9B949" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Softly slides and fades from one word to the next. */
function RotatingPhrase({ words, interval }: { words: readonly string[]; interval: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="relative inline-block h-[1.6em] min-w-[9ch] overflow-hidden align-bottom">
      <span
        key={index}
        className="phrase italic text-gold"
        style={{ animationDuration: `${interval}ms` }}
      >
        {words[index]}
      </span>
    </span>
  );
}

/**
 * "How I Help" is an in-page anchor. With hash-based routing we scroll manually
 * so the address bar stays clean and the route never breaks.
 */
function HowIHelpLink() {
  return (
    <button
      type="button"
      className="btn btn-ghost"
      onClick={() => {
        const target = document.getElementById("how-i-help");
        const reduce =
          typeof window.matchMedia === "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        target?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }}
    >
      {HERO.secondaryCta.label}
    </button>
  );
}

function VerifiedBadge() {
  return (
    <a
      href={PRACTICE.psychologyToday}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2.5 rounded-full border border-sage bg-ivory-soft/80 px-4 py-2.5 text-[0.82rem] font-medium text-evergreen shadow-sm backdrop-blur transition-colors duration-500 hover:border-gold hover:bg-cream"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" />
      </svg>
      Verified by Psychology Today
    </a>
  );
}

export default Hero;
