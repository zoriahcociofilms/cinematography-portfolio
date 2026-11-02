export function resolveDeployment(env = process.env) {
  const customDomain = env.CUSTOM_DOMAIN?.trim();
  if (customDomain && customDomain !== "zoriahcociofilms.com") {
    throw new Error(
      "CUSTOM_DOMAIN must be zoriahcociofilms.com (the approved future domain).",
    );
  }
  return {
    base: customDomain ? "/" : "/cinematography-portfolio/",
    origin: customDomain
      ? `https://${customDomain}`
      : "https://zoriahcociofilms.github.io",
    customDomain: customDomain || null,
  };
}

export const deployment = resolveDeployment();
export const pages = [
  {
    key: "home",
    path: "",
    title: "Zoriah Cocio Films — Wildlife & Documentary Cinematography",
    description:
      "Zoriah Cocio, an Arizona-based cinematographer focused on wildlife, natural history, animal behavior, and environmental storytelling.",
  },
  {
    key: "work",
    path: "work",
    title: "Selected Work — Zoriah Cocio Films",
    description:
      "A curated space for original nature documentaries, wildlife films, showreels, and cinematography by Zoriah Cocio. Original films coming soon.",
  },
  {
    key: "about",
    path: "about",
    title: "About — Zoriah Cocio Films",
    description:
      "Arizona-based cinematographer Zoriah Cocio: a bachelor’s degree in Digital Cinematography, a Sony FX6, and a patient approach to the natural world.",
  },
  {
    key: "contact",
    path: "contact",
    title: "Contact — Zoriah Cocio Films",
    description:
      "Professional inquiries, nature documentary collaborations, conservation stories, and equipment partnerships with cinematographer Zoriah Cocio.",
  },
];
export const legacyPages = [
  { path: "wildlife", target: "about/#natural-history" },
  { path: "equipment", target: "about/#equipment" },
  { path: "partnerships", target: "contact/#partnerships" },
];
