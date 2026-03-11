import { useHead } from "@unhead/vue";

interface SeoOptions {
  title: string;
  description: string;
  url?: string;
  type?: "website" | "article";
  image?: string;
}

const SITE_NAME = "ThesisForge";
const BASE_URL = "https://thesisforge.ai";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

/**
 * Sets per-route <head> tags (title, meta description, OG, Twitter, canonical).
 *
 * Note: Social crawlers (Facebook, Twitter, Slack) don't execute JS in SPAs,
 * so they'll still see the static index.html fallback tags. This composable
 * fixes browser tab titles and helps Googlebot (which does execute JS).
 * For full social-preview support, add prerendering later.
 */
export function useSeo(options: SeoOptions) {
  const fullTitle = `${options.title} — ${SITE_NAME}`;
  const canonicalUrl = options.url ?? BASE_URL;
  const image = options.image ?? DEFAULT_IMAGE;

  useHead({
    title: fullTitle,
    meta: [
      { name: "description", content: options.description },
      { property: "og:type", content: options.type ?? "website" },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: options.description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: image },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: options.description },
      { name: "twitter:image", content: image },
    ],
    link: [{ rel: "canonical", href: canonicalUrl }],
  });
}
