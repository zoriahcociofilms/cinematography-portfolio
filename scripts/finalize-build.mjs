import { mkdir, readFile, writeFile } from "node:fs/promises";
const html = await readFile("dist/index.html", "utf8");
await writeFile(
  "dist/404.html",
  html.replace(
    '<meta name="author"',
    '<meta name="robots" content="noindex" /><meta name="author"',
  ),
);

// Preserve old incoming links after reducing navigation to four pages.
const { deployment, legacyPages } = await import("./site-settings.mjs");
for (const page of legacyPages) {
  const path = `${deployment.base}${page.target}`;
  await mkdir(`dist/${page.path}`, { recursive: true });
  await writeFile(
    `dist/${page.path}/index.html`,
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Page moved — Zoriah Cocio Films</title><link rel="canonical" href="${deployment.origin}${path}"><meta http-equiv="refresh" content="0;url=${path}"></head><body><p>This page has moved. <a href="${path}">Continue to Zoriah Cocio Films</a>.</p></body></html>`,
  );
}
