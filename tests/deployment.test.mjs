import test from "node:test";
import assert from "node:assert/strict";
import { resolveDeployment, pages } from "../scripts/site-settings.mjs";

test("repository hosting uses the correct base and filmmaking account", () => {
  assert.deepEqual(resolveDeployment({}), {
    base: "/cinematography-portfolio/",
    origin: "https://zoriahcociofilms.github.io",
    customDomain: null,
  });
});
test("confirmed custom domain switches media and pages to the root", () => {
  assert.deepEqual(
    resolveDeployment({ CUSTOM_DOMAIN: "zoriahcociofilms.com" }),
    {
      base: "/",
      origin: "https://zoriahcociofilms.com",
      customDomain: "zoriahcociofilms.com",
    },
  );
});
test("unapproved domains cannot accidentally activate", () => {
  assert.throws(() => resolveDeployment({ CUSTOM_DOMAIN: "example.com" }));
});
test("all four pages have unique paths and metadata", () => {
  assert.equal(pages.length, 4);
  assert.equal(new Set(pages.map((page) => page.path)).size, 4);
  assert.equal(new Set(pages.map((page) => page.title)).size, 4);
  assert.ok(pages.every((page) => page.description.length > 60));
});
