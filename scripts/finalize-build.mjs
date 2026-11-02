import { readFile, writeFile } from "node:fs/promises";
const html = await readFile("dist/index.html", "utf8");
await writeFile(
  "dist/404.html",
  html.replace(
    '<meta name="author"',
    '<meta name="robots" content="noindex" /><meta name="author"',
  ),
);
