import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const path of [
  "",
  "work/",
  "about/",
  "wildlife/",
  "equipment/",
  "partnerships/",
  "contact/",
]) {
  test(`${path || "home"} loads directly, stays within the viewport, and has accessible structure`, async ({
    page,
    baseURL,
  }) => {
    const failures: string[] = [];
    page.on("pageerror", (error) => failures.push(error.message));
    const response = await page.goto(`${baseURL}${path}`);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      new RegExp(`/${path}$`),
    );
    const scan = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(scan.violations).toEqual([]);
    expect(failures).toEqual([]);
    if (path === "") {
      await page.screenshot({
        path: `test-results/home-${test.info().project.name}.png`,
      });
    }
  });
}

test("mobile menu traps focus, supports Escape, and returns focus", async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL!);
  const button = page.getByRole("button", { name: "Open navigation" });
  if (!(await button.isVisible())) return;
  await button.click();
  await expect(page.getByRole("dialog", { name: "Navigation" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Close navigation" }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(
    page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link")
      .last(),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(button).toBeFocused();
});

test("portfolio filters and detail pages preserve honest placeholder content", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}work/`);
  await page.getByRole("button", { name: "Documentary", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(1);
  await page
    .getByRole("link", {
      name: "Explore Documentary stories — project placeholder",
    })
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Documentary stories",
  );
  await expect(
    page.getByText("Original film to come", { exact: true }),
  ).toBeVisible();
  await expect(page.locator("iframe,video")).toHaveCount(0);
});

test("partnership details expand and contact does not fabricate an email", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}partnerships/`);
  const question = page.getByRole("button", {
    name: "What to include in an inquiry",
  });
  await question.click();
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByText(/A short introduction, the opportunity/),
  ).toBeVisible();
  await page.goto(`${baseURL}contact/`);
  await expect(page.getByText("Email details coming soon")).toBeVisible();
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
  await page
    .getByRole("button", { name: "Equipment partnership", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Equipment partnership", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
});

test("reduced motion keeps the still-image hero and disables smooth scrolling", async ({
  page,
  baseURL,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(baseURL!);
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  await expect(page.locator(".hero-media video")).toHaveCount(0);
  await expect(page.locator(".hero-media img")).toBeVisible();
});

test("gallery opens, navigates by keyboard, and returns focus", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}work/?project=wildlife`);
  const opener = page.getByRole("button", {
    name: /Enlarge image: Abstract olive light study/,
  });
  await opener.click();
  const gallery = page.getByRole("dialog", { name: "Image gallery" });
  await expect(gallery).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(gallery.getByText("2 / 2", { exact: true })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(gallery).not.toBeVisible();
  await expect(opener).toBeFocused();
});
