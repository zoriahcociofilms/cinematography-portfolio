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
    title: "Zoriah Cocio — Cinematographer & Visual Storyteller",
    description:
      "Independent cinematographer and visual storyteller based in Arizona. Wildlife, natural history, documentary, and commercial filmmaking.",
  },
  {
    key: "work",
    path: "work",
    title: "Selected Work — Zoriah Cocio",
    description:
      "A home for original films, visual stories, field observations, and the process behind the frame. Original projects will be added here.",
  },
  {
    key: "about",
    path: "about",
    title: "About — Zoriah Cocio",
    description:
      "Meet Zoriah Cocio, an Arizona-based cinematographer with a fine arts background in digital cinematography and a focus on the natural world.",
  },
  {
    key: "wildlife",
    path: "wildlife",
    title: "Wildlife & Natural History — Zoriah Cocio",
    description:
      "An approach to wildlife cinematography rooted in patience, intimate behavior, natural habitats, and environmental storytelling.",
  },
  {
    key: "equipment",
    path: "equipment",
    title: "Equipment & Production — Zoriah Cocio",
    description:
      "A Sony FX6 camera platform for documentary and commercial filmmaking, with a clearly defined next step into long-lens wildlife cinematography.",
  },
  {
    key: "partnerships",
    path: "partnerships",
    title: "Collaborations & Partnerships — Zoriah Cocio",
    description:
      "Explore documentary, wildlife, commercial, and professional equipment collaborations with independent cinematographer Zoriah Cocio.",
  },
  {
    key: "contact",
    path: "contact",
    title: "Contact — Zoriah Cocio",
    description:
      "Start a conversation about a film, commission, documentary collaboration, or professional equipment partnership.",
  },
];
