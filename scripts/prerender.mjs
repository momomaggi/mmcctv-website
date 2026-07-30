import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";
import {
  createPageStructuredData,
  getAbsoluteImageUrl,
  getCanonicalUrl,
  notFoundMetadata,
  pageMetadata,
} from "../src/metadata-config.js";

const distDirectory = join(process.cwd(), "dist");
const ssrDirectory = join(process.cwd(), "dist-ssr");
const template = await readFile(join(distDirectory, "index.html"), "utf8");
const { renderPage: renderReactPage } = await import(
  pathToFileURL(join(ssrDirectory, "entry-server.js")).href
);

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(title)}</title>`);
}

function replaceMeta(html, attribute, key, content) {
  const expression = new RegExp(`<meta(?=[^>]*\\b${attribute}=["']${key}["'])[^>]*>`, "i");
  const tag = `<meta ${attribute}="${key}" content="${escapeAttribute(content)}" />`;
  return expression.test(html) ? html.replace(expression, tag) : html.replace("</head>", `  ${tag}\n</head>`);
}

function replaceCanonical(html, canonical) {
  const expression = /<link(?=[^>]*\brel=["']canonical["'])[^>]*>/i;
  const tag = `<link rel="canonical" href="${escapeAttribute(canonical)}" />`;
  return expression.test(html) ? html.replace(expression, tag) : html.replace("</head>", `  ${tag}\n</head>`);
}

function addPageStructuredData(html, structuredData) {
  const script = `<script id="page-structured-data" type="application/ld+json">${JSON.stringify(structuredData).replaceAll("<", "\\u003c")}</script>`;
  return html.replace("</head>", `  ${script}\n</head>`);
}

function injectBody(html, pathname) {
  const renderedBody = renderReactPage(pathname);
  return html.replace(
    '<div id="root"></div>',
    () => `<div id="root">${renderedBody}</div>`,
  );
}

function renderPage(metadata) {
  const canonical = getCanonicalUrl(metadata);
  const image = getAbsoluteImageUrl(metadata);
  let html = replaceTitle(template, metadata.title);

  html = replaceMeta(html, "name", "description", metadata.description);
  html = replaceMeta(
    html,
    "name",
    "robots",
    metadata.noindex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large",
  );
  html = replaceCanonical(html, canonical);
  html = replaceMeta(html, "property", "og:type", "website");
  html = replaceMeta(html, "property", "og:locale", "th_TH");
  html = replaceMeta(html, "property", "og:site_name", "M&M CCTV");
  html = replaceMeta(html, "property", "og:title", metadata.title);
  html = replaceMeta(html, "property", "og:description", metadata.description);
  html = replaceMeta(html, "property", "og:url", canonical);
  html = replaceMeta(html, "property", "og:image", image);
  html = replaceMeta(html, "property", "og:image:secure_url", image);
  html = replaceMeta(html, "property", "og:image:type", metadata.imageType);
  html = replaceMeta(html, "property", "og:image:width", String(metadata.imageWidth));
  html = replaceMeta(html, "property", "og:image:height", String(metadata.imageHeight));
  html = replaceMeta(html, "property", "og:image:alt", metadata.imageAlt);
  html = replaceMeta(html, "name", "twitter:card", "summary_large_image");
  html = replaceMeta(html, "name", "twitter:title", metadata.title);
  html = replaceMeta(html, "name", "twitter:description", metadata.description);
  html = replaceMeta(html, "name", "twitter:image", image);
  html = replaceMeta(html, "name", "twitter:image:alt", metadata.imageAlt);

  const structuredData = createPageStructuredData(metadata);
  html = structuredData ? addPageStructuredData(html, structuredData) : html;
  return injectBody(html, metadata.path);
}

for (const metadata of Object.values(pageMetadata)) {
  const outputPath =
    metadata.path === "/"
      ? join(distDirectory, "index.html")
      : join(distDirectory, `${metadata.path.slice(1)}.html`);

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, renderPage(metadata), "utf8");
  console.log(`prerendered ${metadata.path}`);
}

await writeFile(
  join(distDirectory, "404.html"),
  renderPage({ ...notFoundMetadata, path: "/404" }),
  "utf8",
);
console.log("prerendered /404");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.values(pageMetadata)
  .map(
    (metadata) => `  <url>
    <loc>${getCanonicalUrl(metadata)}</loc>
    <changefreq>${metadata.path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${metadata.path === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

await writeFile(join(distDirectory, "sitemap.xml"), sitemap, "utf8");
console.log("generated /sitemap.xml");

await rm(ssrDirectory, { recursive: true, force: true });
