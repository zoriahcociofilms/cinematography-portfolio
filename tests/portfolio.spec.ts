import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { projects, site } from "../src/content/site";

for (const path of ["", "work/", "about/", "contact/"]) {
  test(`${path || "home"} loads directly with accessible structure and no overflow`, async ({
    page,
    baseURL,
  }) => {
    const failures: string[] = [];
    page.on("pageerror", (error) => failures.push(error.message));
    expect((await page.goto(`${baseURL}${path}`))?.status()).toBe(200);
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
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    expect(failures).toEqual([]);
    await expect(page.locator("body")).not.toContainText(
      /wedding|engagement|portrait photography|event photography|event videography/i,
    );
    if (!path)
      await page.screenshot({
        path: `test-results/home-${test.info().project.name}.png`,
      });
  });
}

test("signature remains exact with no reference labels", async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL!);
  const signature = page.getByRole("heading", { level: 1 });
  await expect(signature).toHaveText(
    "I wait for the world to forget the camera.",
  );
  await expect(signature).toBeVisible();
  await expect(page.locator(".opening-photo img")).toBeVisible();
  await expect(page.locator(".opening-photo figcaption")).toContainText(
    "Tucson, Arizona",
  );
  await expect(page.locator("iframe")).toHaveCount(0);
  await expect(page.locator("body")).not.toContainText(
    /Unsplash|License|JC Cervantes|Mark Olsen|Lance Anderson/,
  );
  await expect(page.locator("body")).not.toContainText(
    /reference (photo|photograph|footage|imagery)/i,
  );
});

test("mobile navigation cycles focus and supports Escape", async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL!);
  const open = page.getByRole("button", { name: "Open navigation" });
  if (!(await open.isVisible())) {
    await expect(
      page
        .getByRole("navigation", { name: "Main navigation" })
        .getByRole("link"),
    ).toHaveCount(4);
    return;
  }
  await open.click();
  const close = page.getByRole("button", { name: "Close navigation" });
  await expect(close).toBeFocused();
  const links = page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link");
  await expect(links).toHaveCount(4);
  await page.keyboard.press("Shift+Tab");
  await expect(links.last()).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(close).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(open).toBeFocused();
});

test("Selected Work contains only original projects, never stock photographs", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}work/`);
  await expect(
    page.locator('[data-provenance="stock"], img[src*="/stock/"]'),
  ).toHaveCount(0);
  const published = projects.filter(
    (project) => project.status === "published",
  );
  await expect(page.locator(".project-card")).toHaveCount(published.length);
  if (!published.length)
    await expect(
      page.getByText("Original films are on their way."),
    ).toBeVisible();
});

test("contact provides honest contact information and separates sought equipment", async ({
  page,
  baseURL,
}) => {
  await page.goto(`${baseURL}contact/`);
  if (site.email) {
    await expect(page.locator(".email-link")).toHaveAttribute(
      "href",
      `mailto:${site.email}`,
    );
    await page
      .context()
      .grantPermissions(["clipboard-read", "clipboard-write"]);
    await page
      .getByRole("button", { name: "Copy email address", exact: true })
      .click();
    await expect(
      page.getByRole("button", { name: "Email copied", exact: true }),
    ).toBeVisible();
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
      site.email,
    );
    await expect(page.locator(".contact-context a").first()).toHaveAttribute(
      "href",
      `mailto:${site.email}?subject=${encodeURIComponent(site.inquiries[0])}`,
    );
  } else {
    await expect(page.getByText("Contact details coming soon.")).toBeVisible();
    await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
  }
  await expect(page.locator("#partnerships")).toContainText(
    "not currently part of my kit",
  );
  await page.goto(`${baseURL}about/`);
  await expect(page.locator("#equipment")).toContainText(
    "Sony FX6 · Currently owned",
  );
  const portrait = page.locator(".about-portrait img");
  await expect(portrait).toHaveAttribute(
    "src",
    /media\/stills\/zoriah-cocio\.jpg$/,
  );
  await expect(portrait).toHaveAttribute("alt", site.portrait.alt);
  await expect(portrait).toBeVisible();
  await expect
    .poll(() =>
      portrait.evaluate((image: HTMLImageElement) => image.naturalWidth),
    )
    .toBe(848);
  await expect(
    page.locator('.about-grid [data-provenance="stock"]'),
  ).toHaveCount(0);
  await page.screenshot({
    path: `test-results/about-${test.info().project.name}.png`,
  });
});

for (const [legacy, target] of [
  ["wildlife/", "about/#natural-history"],
  ["equipment/", "about/#equipment"],
  ["partnerships/", "contact/#partnerships"],
]) {
  test(`legacy ${legacy} preserves incoming links`, async ({
    page,
    baseURL,
  }) => {
    await page.goto(`${baseURL}${legacy}`);
    await expect(page).toHaveURL(`${baseURL}${target}`);
  });
}

test("reduced motion retains the static photographic homepage", async ({
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
  await expect(page.locator(".opening-photo img")).toBeVisible();
  await expect(page.locator("video")).toHaveCount(0);
});

test("Arizona wildlife photographs load locally without borrowed video", async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL!);
  await expect(page.locator("video, iframe, .reference-film")).toHaveCount(0);
  const images = page.locator(".nature-grid img");
  await expect(images).toHaveCount(2);
  for (const [index, file] of [
    "arizona-hummingbird",
    "sedona-deer",
  ].entries()) {
    const image = images.nth(index);
    await expect(image).toHaveAttribute(
      "src",
      new RegExp(`/stock/${file}\\.webp$`),
    );
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        image.evaluate(
          (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  await expect(page.locator(".nature-grid figcaption").last()).toHaveText(
    "Sedona, Arizona",
  );
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: `test-results/home-full-${test.info().project.name}.png`,
    fullPage: true,
  });
});
