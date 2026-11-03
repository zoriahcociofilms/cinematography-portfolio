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
  place: string;
};

// Licensed visual context. These photographs are never portfolio projects.
export const stock: Record<"coyote" | "hummingbird" | "deer", StockPhoto> = {
  coyote: {
    src: "media/stock/coyote.webp",
    small: "media/stock/coyote-small.webp",
    width: 2400,
    height: 1349,
    alt: "A coyote watching from desert scrub in Tucson, Arizona",
    author: "JC Cervantes",
    source:
      "https://unsplash.com/photos/a-coyote-gazes-intensely-at-the-viewer-9xu-rhlMAOw",
    license: "https://unsplash.com/license",
    place: "Tucson, Arizona",
  },
  hummingbird: {
    src: "media/stock/arizona-hummingbird.webp",
    small: "media/stock/arizona-hummingbird-small.webp",
    width: 1800,
    height: 1350,
    alt: "A broad-billed hummingbird hovering with its wings extended in Tucson, Arizona",
    author: "Mark Olsen",
    source:
      "https://unsplash.com/photos/a-hummingbird-flying-in-the-air-with-a-green-background-FYj2gAyNRCw",
    license: "https://unsplash.com/license",
    place: "Tucson, Arizona",
  },
  deer: {
    src: "media/stock/sedona-deer.webp",
    small: "media/stock/sedona-deer-small.webp",
    width: 1800,
    height: 1200,
    alt: "A mule deer pausing in open grassland beneath the red rock cliffs of Sedona, Arizona",
    author: "Lance Anderson",
    source:
      "https://unsplash.com/photos/a-deer-stands-amidst-red-rock-landscape-vrXuF6f37B4",
    license: "https://unsplash.com/license",
    place: "Sedona, Arizona",
  },
};

export const site = {
  name: "Zoriah Cocio",
  role: "Wildlife & documentary cinematographer",
  location: "Arizona, USA",
  // Signature line: preserve this exact wording and punctuation.
  hero: "I wait for the world to forget the camera.",
  portrait: {
    src: "media/stills/zoriah-cocio.jpg",
    alt: "Zoriah Cocio smiling outdoors in a black cap",
    width: 848,
    height: 848,
  },
  email: "info@zoriahcocio.com",
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
