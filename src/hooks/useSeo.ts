import { useEffect } from "react";
import { SITE_URL, type PageSeo } from "../config/seo";

/** Finds a <meta> or <link> in <head>, creating it if it isn't there yet. */
const upsert = (selector: string, create: () => HTMLElement, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const setMeta = (key: "name" | "property", id: string, content: string) =>
  upsert(
    `meta[${key}="${id}"]`,
    () => {
      const m = document.createElement("meta");
      m.setAttribute(key, id);
      return m;
    },
    "content",
    content
  );

/**
 * Sets the title, description, canonical URL and social-sharing tags for the
 * current page. index.html holds the home-page defaults for crawlers that do
 * not run JavaScript; this keeps them correct as the visitor navigates.
 */
export const useSeo = ({ title, description, path, noindex }: PageSeo) => {
  useEffect(() => {
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    upsert(
      'link[rel="canonical"]',
      () => {
        const l = document.createElement("link");
        l.setAttribute("rel", "canonical");
        return l;
      },
      "href",
      url
    );
  }, [title, description, path, noindex]);
};
