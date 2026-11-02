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
export const stock: Record<"coyote" | "owl" | "desert", StockPhoto> = {
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
  owl: {
    src: "media/stock/arizona-owl.webp",
    small: "media/stock/arizona-owl-small.webp",
    width: 1800,
    height: 2699,
    alt: "An owl perched above the city among palms in Phoenix, Arizona",
    author: "Sidney Pearce",
    source:
      "https://unsplash.com/photos/gray-and-brown-owl-perching-on-black-wire-at-daytime-sim2K3Mjung",
    license: "https://unsplash.com/license",
    place: "Phoenix, Arizona",
  },
  desert: {
    src: "media/stock/arizona-desert.webp",
    small: "media/stock/arizona-desert-small.webp",
    width: 2000,
    height: 2999,
    alt: "Saguaro cacti growing on a rocky hillside in Saguaro National Park, Arizona",
    author: "Royce Fonseca",
    source:
      "https://unsplash.com/photos/saguaro-cacti-on-a-rocky-desert-hillside-8y9aDTeYqvU",
    license: "https://unsplash.com/license",
    place: "Saguaro National Park, Arizona",
  },
};

export const site = {
  name: "Zoriah Cocio",
  role: "Wildlife & documentary cinematographer",
  location: "Arizona, USA",
  // Signature line: preserve this exact wording and punctuation.
  hero: "I wait for the world to forget the camera.",
  referenceFilm: {
    title: "Desert bighorn sheep",
    place: "Grand Canyon, Arizona",
    src: "media/stock/grand-canyon-bighorn.mp4",
    poster: "media/stock/bighorn-poster.jpg",
    description:
      "A desert bighorn ewe rests on a canyon ledge, quietly chewing and observing her surroundings.",
    author: "National Park Service / Michael Quinn",
    source:
      "https://www.nps.gov/media/video/view.htm?id=AF238FB1-2B01-43AD-B419-1DA263327DBB",
    license: "Public domain — NPS official-duty work, published June 6, 2012",
  },
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
