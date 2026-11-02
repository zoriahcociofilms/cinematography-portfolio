import { mkdir, writeFile, rm } from "node:fs/promises";
import { deployment, pages } from "./site-settings.mjs";

const escape = (text) =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
const siteRoot = `${deployment.origin}${deployment.base}`;
for (const page of pages) {
  const canonical = `${siteRoot}${page.path ? `${page.path}/` : ""}`;
  const html = `<!doctype html>
<html lang="en"><head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#fcfbf8" />
<title>${escape(page.title)}</title>
<meta name="description" content="${escape(page.description)}" />
<meta name="author" content="Zoriah Cocio" />
<link rel="canonical" href="${canonical}" />
<link rel="icon" type="image/svg+xml" href="${deployment.base}favicon.svg" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Zoriah Cocio Films" />
<meta property="og:title" content="${escape(page.title)}" />
<meta property="og:description" content="${escape(page.description)}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${siteRoot}media/social-card.png" />
<meta property="og:image:alt" content="Zoriah Cocio — Cinematographer and Visual Storyteller. Arizona, USA." />
<meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escape(page.title)}" />
<meta name="twitter:description" content="${escape(page.description)}" />
<meta name="twitter:image" content="${siteRoot}media/social-card.png" />
<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Zoriah Cocio", url: siteRoot, jobTitle: "Wildlife & documentary cinematographer", homeLocation: { "@type": "Place", name: "Arizona, USA" }, description: pages[0].description })}</script>
</head><body><div id="root"></div><noscript>This portfolio requires JavaScript to display. Zoriah Cocio is a cinematographer and visual storyteller based in Arizona, USA.</noscript><script type="module" src="/src/main.tsx"></script></body></html>`;
  if (page.path) await mkdir(page.path, { recursive: true });
  await writeFile(`${page.path ? `${page.path}/` : ""}index.html`, html);
}
await writeFile(
  "public/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${siteRoot}sitemap.xml\n`,
);
await writeFile(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((page) => `  <url><loc>${siteRoot}${page.path ? `${page.path}/` : ""}</loc></url>`).join("\n")}\n</urlset>\n`,
);
// This only emits CNAME after the owner explicitly activates CUSTOM_DOMAIN.
if (deployment.customDomain)
  await writeFile("public/CNAME", deployment.customDomain + "\n");
else await rm("public/CNAME", { force: true });
