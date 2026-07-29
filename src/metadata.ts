import {
  createPageStructuredData,
  getAbsoluteImageUrl,
  getCanonicalUrl,
  getPageMetadata,
} from "./metadata-config.js";

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }
  element.href = url;
}

export function applyPageMetadata(pathname: string) {
  const metadata = getPageMetadata(pathname);
  const canonical = getCanonicalUrl(metadata);
  const image = getAbsoluteImageUrl(metadata);

  document.documentElement.lang = "th";
  document.title = metadata.title;
  setMeta('meta[name="description"]', "name", "description", metadata.description);
  setCanonical(canonical);

  setMeta('meta[property="og:type"]', "property", "og:type", "website");
  setMeta('meta[property="og:locale"]', "property", "og:locale", "th_TH");
  setMeta('meta[property="og:site_name"]', "property", "og:site_name", "M&M CCTV");
  setMeta('meta[property="og:title"]', "property", "og:title", metadata.title);
  setMeta('meta[property="og:description"]', "property", "og:description", metadata.description);
  setMeta('meta[property="og:url"]', "property", "og:url", canonical);
  setMeta('meta[property="og:image"]', "property", "og:image", image);
  setMeta('meta[property="og:image:secure_url"]', "property", "og:image:secure_url", image);
  setMeta('meta[property="og:image:type"]', "property", "og:image:type", metadata.imageType);
  setMeta('meta[property="og:image:width"]', "property", "og:image:width", String(metadata.imageWidth));
  setMeta('meta[property="og:image:height"]', "property", "og:image:height", String(metadata.imageHeight));
  setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", metadata.imageAlt);

  setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
  setMeta('meta[name="twitter:title"]', "name", "twitter:title", metadata.title);
  setMeta('meta[name="twitter:description"]', "name", "twitter:description", metadata.description);
  setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
  setMeta('meta[name="twitter:image:alt"]', "name", "twitter:image:alt", metadata.imageAlt);

  let structuredData = document.head.querySelector<HTMLScriptElement>("#page-structured-data");
  if (!structuredData) {
    structuredData = document.createElement("script");
    structuredData.id = "page-structured-data";
    structuredData.type = "application/ld+json";
    document.head.appendChild(structuredData);
  }
  structuredData.textContent = JSON.stringify(createPageStructuredData(metadata));
}
