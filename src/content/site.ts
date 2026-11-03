// Edit personal information and original projects here. Paths are relative to public/.
export type Film =
  | {
      kind: "file";
      src: string;
      captions?: string;
      poster: string;
      title: string;
      width: number;
      height: number;
    }
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
    "I’m an Arizona-based cinematographer with approximately four years of professional cinematography experience. My work is guided by a fascination with the natural world and the quiet details that often go unnoticed.",
    "I’m especially drawn to wildlife and natural-history filmmaking—the behaviors, environments, and fleeting moments that reveal something extraordinary about the animals we share this world with.",
    "I’ve worked professionally with Sony Alpha, Canon EOS, and Nikon DSLR camera systems, and I’m available for domestic and international wildlife and natural-history productions.",
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

// Original footage supplied by Zoriah. No capture dates, locations, or camera
// specifications were provided. Dimensions describe the supplied video files.
export const projects: Project[] = [
  {
    id: "a-quiet-regard",
    title: "A Quiet Regard",
    category: "Wildlife",
    status: "published",
    summary: "A bear’s face, held in close observation.",
    description:
      "Small shifts of the eyes and head animate a close portrait of a bear. The frame stays with these quiet movements.",
    cover: {
      src: "media/stills/a-quiet-regard.jpg",
      alt: "A close view of a brown bear’s face against green vegetation",
      caption: "A frame from A Quiet Regard",
    },
    film: {
      kind: "file",
      src: "media/films/43106-434353116.mp4",
      poster: "media/stills/a-quiet-regard.jpg",
      title: "A Quiet Regard — bear close-up",
      width: 1920,
      height: 1080,
    },
    technical: [],
    gallery: [],
  },
  {
    id: "the-clearing",
    title: "The Clearing",
    category: "Wildlife",
    status: "published",
    summary: "A stag pauses in a clearing before lowering its head to graze.",
    description:
      "A stag looks across a grassy clearing, then returns to feeding. Other deer rest behind it at the woodland edge.",
    cover: {
      src: "media/stills/the-clearing.jpg",
      alt: "An antlered stag standing in grass with trees behind it",
      caption: "A frame from The Clearing",
    },
    film: {
      kind: "file",
      src: "media/films/94393-643067770.mp4",
      poster: "media/stills/the-clearing.jpg",
      title: "The Clearing — stag in a woodland clearing",
      width: 910,
      height: 512,
    },
    technical: [],
    gallery: [],
  },
  {
    id: "a-passing-gesture",
    title: "A Passing Gesture",
    category: "Wildlife",
    status: "published",
    summary: "A cougar’s gaze, and the small movements around it.",
    description:
      "In a close view of a cougar, a flick of the tongue and slight turns of the head interrupt the stillness.",
    cover: {
      src: "media/stills/a-passing-gesture.jpg",
      alt: "A close portrait of a cougar with green leaves behind it",
      caption: "A frame from A Passing Gesture",
    },
    film: {
      kind: "file",
      src: "media/films/158832-817668596.mp4",
      poster: "media/stills/a-passing-gesture.jpg",
      title: "A Passing Gesture — cougar close-up",
      width: 3840,
      height: 2160,
    },
    technical: [],
    gallery: [],
  },
  {
    id: "the-forest-below",
    title: "The Forest Below",
    category: "Wildlife",
    status: "published",
    summary: "A seated bear above a slope of conifers.",
    description:
      "A bear sits on a grassy bank, turning its head against a backdrop of dark conifers. The view holds on its changing posture.",
    cover: {
      src: "media/stills/the-forest-below.jpg",
      alt: "A bear seated on a grassy slope above a conifer forest",
      caption: "A frame from The Forest Below",
    },
    film: {
      kind: "file",
      src: "media/films/180819-865216782.mp4",
      poster: "media/stills/the-forest-below.jpg",
      title: "The Forest Below — seated bear above conifers",
      width: 910,
      height: 512,
    },
    technical: [],
    gallery: [],
  },
  {
    id: "grass-through-snow",
    title: "Grass Through Snow",
    category: "Wildlife",
    status: "published",
    summary: "An elk feeding among the dry stems of a snowy hillside.",
    description:
      "An elk lowers its head into dry grass on a snow-covered slope. Antlers, stems, and small movements give shape to the winter scene.",
    cover: {
      src: "media/stills/grass-through-snow.jpg",
      alt: "An antlered elk standing among dry grass on a snow-covered hillside",
      caption: "A frame from Grass Through Snow",
    },
    film: {
      kind: "file",
      src: "media/films/328168.mp4",
      poster: "media/stills/grass-through-snow.jpg",
      title: "Grass Through Snow — elk feeding on a snowy hillside",
      width: 3840,
      height: 2160,
    },
    technical: [],
    gallery: [],
  },
];
