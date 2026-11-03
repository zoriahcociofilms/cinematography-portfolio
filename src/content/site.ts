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
    "I’m an Arizona-based cinematographer. My work is guided by a fascination with the natural world and the quiet details that often go unnoticed.",
    "I’m especially drawn to wildlife and natural-history filmmaking—the behaviors, environments, and fleeting moments that reveal something extraordinary about the animals we share this world with.",
  ],
  philosophy: [
    "I believe the most meaningful moments are rarely staged. They happen when we give the world enough space to simply exist.",
    "Through my work, I hope to document those moments with patience, curiosity, and respect for the natural world.",
  ],
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
