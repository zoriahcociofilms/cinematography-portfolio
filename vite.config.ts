import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

// One shared policy is also used to generate canonical URLs and static page metadata.
import { deployment, pages } from "./scripts/site-settings.mjs";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: deployment.base,
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [
          page.key,
          resolve(import.meta.dirname, page.path, "index.html"),
        ]),
      ),
    },
  },
});
