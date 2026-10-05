import { cx } from "../utils/cx";

type BlobSpec = {
  /** Tailwind-free colour so it can also be used outside the theme. */
  color: string;
  size: string;
  position: string;
  duration: string;
  delay: string;
  opacity?: number;
};

const BLOBS: BlobSpec[] = [
  {
    color: "radial-gradient(circle, rgba(233,185,73,0.55), transparent 70%)",
    size: "38rem",
    position: "top-[-12rem] left-[-10rem]",
    duration: "28s",
    delay: "0s",
  },
  {
    color: "radial-gradient(circle, rgba(232,185,165,0.5), transparent 70%)",
    size: "32rem",
    position: "top-[28%] right-[-12rem]",
    duration: "24s",
    delay: "-6s",
  },
  {
    color: "radial-gradient(circle, rgba(185,200,181,0.45), transparent 70%)",
    size: "34rem",
    position: "bottom-[-14rem] left-[18%]",
    duration: "32s",
    delay: "-14s",
  },
];

/**
 * Very slow drifting background washes of blush, honey and sage.
 * Purely decorative, pointer-transparent, and switched off entirely under
 * `prefers-reduced-motion`.
 */
export function Ambient({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cx("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {BLOBS.map((blob) => (
        <span
          key={blob.position}
          className="blob"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            opacity: blob.opacity ?? 0.5,
            ["--drift-duration" as string]: blob.duration,
            ["--drift-delay" as string]: blob.delay,
          }}
        />
      ))}
    </div>
  );
}

export default Ambient;
