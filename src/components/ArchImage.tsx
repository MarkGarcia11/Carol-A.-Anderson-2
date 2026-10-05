import type { CSSProperties } from "react";
import { cx } from "../utils/cx";

type ArchImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** "arch" = soft arch mask, "soft" = generous rounded rectangle. */
  shape?: "arch" | "soft" | "circle";
  /** Aspect ratio class, e.g. "aspect-[4/5]". */
  ratio?: string;
  /** Eager-load the hero image only. Everything else lazy-loads. */
  priority?: boolean;
  /** Slow zoom on hover — used on cards. */
  zoom?: boolean;
  caption?: string;
  style?: CSSProperties;
};

/**
 * Image frame with the site's signature soft shapes. Images are lazy-loaded and
 * only ever animate transform, so scrolling stays smooth on mobile.
 */
export function ArchImage({
  src,
  alt,
  className,
  shape = "soft",
  ratio = "aspect-[4/3]",
  priority = false,
  zoom = false,
  caption,
  style,
}: ArchImageProps) {
  return (
    <figure className={cx("relative", className)} style={style}>
      <div
        className={cx(
          "relative h-full w-full overflow-hidden bg-cream",
          shape === "arch" && "arch",
          shape === "soft" && "rounded-softer",
          shape === "circle" && "rounded-full",
          ratio,
        )}
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          className={cx(
            "h-full w-full object-cover",
            zoom && "card-zoom",
          )}
        />
        {/* Warm light wash so photos sit inside the palette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-evergreen/12 via-transparent to-honey/8"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-[0.82rem] italic text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default ArchImage;
