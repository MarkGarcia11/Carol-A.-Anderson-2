import { useEffect } from "react";

type SeoInput = {
  title: string;
  description: string;
  /** Optional canonical path, e.g. "/about". */
  path?: string;
};

const BASE_TITLE = "Carol A. Anderson, MS, LMFT";
const SITE_URL = "https://carolandersontherapy.com";

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

/**
 * Keeps the document title, description and social tags in sync with the
 * current route so every page has a unique, search-friendly identity.
 */
export function useSeo({ title, description, path }: SeoInput) {
  useEffect(() => {
    const fullTitle = title === BASE_TITLE ? title : `${title} | ${BASE_TITLE}`;
    document.title = fullTitle;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    if (path) {
      let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = `${SITE_URL}${path}`;
      setMeta('meta[property="og:url"]', "property", "og:url", `${SITE_URL}${path}`);
    }
  }, [title, description, path]);
}
