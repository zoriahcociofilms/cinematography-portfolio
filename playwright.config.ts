import { defineConfig, devices } from "@playwright/test";
const base = process.env.CUSTOM_DOMAIN ? "/" : "/cinematography-portfolio/";
export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.ts",
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: { baseURL: `http://127.0.0.1:4319${base}`, trace: "retain-on-failure" },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 1000 },
      },
    },
    {
      name: "tablet",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 768, height: 1024 },
      },
    },
    {
      name: "mobile",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 390, height: 844 },
      },
    },
  ],
  webServer: {
    command: "npm run preview -- --port 4319",
    url: `http://127.0.0.1:4319${base}`,
    reuseExistingServer: !process.env.CI,
  },
});
