// Edit personal information and original projects here. Paths are relative to public/.
export type Film =
  | { kind: "file"; src: string; captions?: string; poster: string }
  | { kind: "vimeo" | "youtube"; id: string; title: string };
export type Still = {
  src: string;
  alt: string;
  caption: string;
  temporary?: boolean;
};
export type Project = {
  id: string;
  title: string;
  category:
    | "Wildlife"
    | "Natural history"
    | "Documentary"
    | "Conservation"
    | "Commercial";
  summary: string;
  description: string;
  status: "placeholder" | "published";
  cover: Still;
  film?: Film;
  year?: string;
  role?: string;
  location?: string;
  technical: { label: string; value: string }[];
  gallery: Still[];
  behindTheScenes?: string;
};
export type StockPhoto = {
  src: string;
  small: string;
  width: number;
  height: number;
  alt: string;
  author: string;
  source: string;
  license: string;
};

// Licensed visual context. These photographs are never portfolio projects.
export const stock: Record<"fox" | "owl" | "forest", StockPhoto> = {
  fox: {
    src: "media/stock/fox.webp",
    small: "media/stock/fox-small.webp",
    width: 2400,
    height: 1597,
    alt: "A red fox watching quietly in winter snow, lit by the low sun",
    author: "Ray Hennessy",
    source: "https://unsplash.com/photos/brown-fox-on-snow-field-xUUZcpQlqpM",
    license: "https://unsplash.com/license",
  },
  owl: {
    src: "media/stock/owl.webp",
    small: "media/stock/owl-small.webp",
    width: 1800,
    height: 1195,
    alt: "An owl resting on a moss-covered branch in a green forest",
    author: "Anurag Jain",
    source:
      "https://unsplash.com/photos/shallow-focus-photography-of-gray-barn-owl-on-sitting-on-tree-branch-TtvhFe9anXA",
    license: "https://unsplash.com/license",
  },
  forest: {
    src: "media/stock/forest.webp",
    small: "media/stock/forest-small.webp",
    width: 2000,
    height: 1380,
    alt: "A still stream running between dense evergreen trees",
    author: "Luca Bravo",
    source:
      "https://unsplash.com/photos/body-of-water-surrounded-by-pine-trees-during-daytime-ESkw2ayO2As",
    license: "https://unsplash.com/license",
  },
};

export const site = {
  name: "Zoriah Cocio",
  role: "Wildlife & documentary cinematographer",
  location: "Arizona, USA",
  // Signature line: preserve this exact wording and punctuation.
  hero: "I wait for the world to forget the camera.",
  email: "", // Add your professional email to enable inquiry links.
  socials: [
    { label: "Instagram", url: "" },
    { label: "Vimeo", url: "" },
  ],
  biography: [
    "I’m Zoriah Cocio, a cinematographer based in Arizona with a bachelor’s degree in Digital Cinematography. My work begins with an interest in the natural world: animal behavior, the texture of a habitat, and the small moments that reveal a larger story.",
    "Working with a Sony FX6, I’m developing a body of work in wildlife, natural history, and nature documentary filmmaking. I’m particularly drawn to intimate observations and stories that deepen our connection to animals and their environments.",
  ],
  philosophy:
    "For me, cinematography begins with observation. I want to give a moment room to unfold, respect the animal’s space, and let the environment remain part of the story.",
  equipment: { owned: "Sony FX6", seeking: "Sony FE 400–800mm f/6.3–8 G OSS" },
  partnership:
    "I’m exploring professional equipment partnerships involving the Sony FE 400–800mm f/6.3–8 G OSS lens to expand my wildlife cinematography. This lens is not currently part of my kit. I welcome a conversation about a thoughtfully scoped field project and shared creative goals.",
  inquiries: [
    "Nature documentary collaborations",
    "Conservation & environmental storytelling",
    "Equipment partnerships",
    "Select aligned documentary & commercial projects",
  ],
};

// Add only your own films and accurate credits. The empty state is intentional.
// See README.md for a complete, ready-to-edit project example.
export const projects: Project[] = [];
