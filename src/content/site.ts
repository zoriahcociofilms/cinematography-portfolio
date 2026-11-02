// YOUR CONTENT DESK. All personal copy, media, projects, gear, and links live here.
// Media paths are relative to public/ (no leading slash). Never include the Vite base.
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
  category: "Wildlife" | "Documentary" | "Commercial";
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

export const site = {
  name: "Zoriah Cocio",
  role: "Cinematographer & Visual Storyteller",
  location: "Arizona, USA",
  hero: "I wait for the world to forget the camera.",
  email: "", // Add your real email. Empty values show an honest, editable placeholder.
  socials: [
    { label: "Instagram", url: "" },
    { label: "Vimeo", url: "" },
  ],
  heroMedia: {
    poster: "media/placeholders/light-01.svg",
    temporary: true,
    video: "", // e.g. 'media/films/hero.webm' — muted, autoplay, playsInline, loop.
    videoType: "video/webm",
  },
  biography: [
    "I’m Zoriah Cocio, a cinematographer and visual storyteller based in Arizona. My background is in fine arts, with a bachelor’s degree in digital cinematography—a foundation that shapes how I think about light, composition, and the emotional weight of an image.",
    "My interests live where documentary and the natural world meet: an animal’s quiet behavior, the texture of a landscape, the way movement reveals something words cannot. I’m drawn to images that reward a little patience.",
    "Working with a Sony FX6, I’m developing a practice across wildlife, natural history, documentary, and commercial filmmaking. My ambition is to build a thoughtful body of work that brings people closer to the living world.",
  ],
  philosophy: "A quieter way of seeing.",
  philosophyText:
    "I’m drawn to the moments between the obvious ones. A shift in light. A small gesture. A landscape that changes when you stay long enough. For me, cinematography begins with paying attention.",
  wildlife: {
    intro: "There is a whole world in a small moment.",
    description:
      "My interest in natural history begins with the animal in its own environment. Intimate behaviors, subtle movement, the textures of a habitat—these are the details I want to give time and space on screen.",
    principles: [
      {
        title: "Observe with patience",
        text: "Let behavior unfold at its own pace. Build a sequence from attention, rather than expectation.",
      },
      {
        title: "Keep the habitat in the story",
        text: "Move between the intimate and the expansive. An animal’s surroundings are part of its story.",
      },
      {
        title: "Work with respect",
        text: "Put the welfare of wildlife first. Favor distance and unobtrusive observation over a closer frame.",
      },
    ],
  },
  equipment: {
    owned: [
      {
        name: "Sony FX6",
        type: "Cinema Line / Full-frame camera",
        text: "My current camera platform for documentary, wildlife, and commercial filmmaking. Its full-frame sensor, built-in electronic variable ND, and flexible recording options support a considered, adaptable approach in changing light.",
        specs: [
          "Full-frame sensor",
          "Electronic variable ND",
          "4K UHD up to 120p",
        ],
        source:
          "https://electronics.sony.com/imaging/cinema-line-cameras/all-cinema-line-cameras/p/ilmefx6v",
      },
    ],
    seeking: [
      {
        name: "Sony FE 400–800mm f/6.3–8 G OSS",
        type: "Exploring equipment partnerships · Not currently owned",
        text: "A longer view into the natural world. I’m exploring professional equipment partnerships around this lens to expand my ability to observe distant subjects, isolate intimate behaviors, and build wildlife sequences from a respectful distance.",
        source:
          "https://sony.mediaroom.com/2025-02-26-Sony-Electronics-Unveils-Specialty-400-800mm-F6-3-8-G-OSS-Super-Telephoto-Zoom-G-Lens-The-Furthest-Reaching-Sony-Lens-To-Date",
      },
    ],
  },
  partnerships: {
    headline: "Good stories begin with a conversation.",
    intro:
      "I’m interested in working with people and organizations who value thoughtful images and a considered approach to storytelling. From a documentary idea to a commercial brief, let’s explore what we could make together.",
    equipment:
      "I’m exploring professional equipment partnerships involving the Sony FE 400–800mm f/6.3–8 G OSS lens to expand my wildlife cinematography work. I welcome a conversation about a clearly scoped field project, original visual storytelling, and a collaboration shaped around shared goals.",
    types: [
      {
        title: "Documentary & natural history",
        text: "Conversations with production companies, independent filmmakers, and wildlife organizations around stories of the natural world.",
      },
      {
        title: "Commercial filmmaking",
        text: "Cinematography and visual storytelling for brands and clients with a clear point of view.",
      },
      {
        title: "Equipment & field partnerships",
        text: "Project-based collaborations with camera manufacturers and equipment partners, with scope and deliverables agreed together.",
      },
    ],
  },
};

export const projects: Project[] = [
  {
    id: "wildlife",
    title: "Wildlife & natural history",
    category: "Wildlife",
    status: "placeholder",
    summary: "Small behaviors. A larger world.",
    description:
      "A space reserved for an original wildlife or natural-history film. The artwork is an abstract design study; no film or production credit is being represented here.",
    cover: {
      src: "media/placeholders/light-02.svg",
      alt: "Abstract olive light and shadow design study, not wildlife footage",
      caption: "Abstract light study 02",
      temporary: true,
    },
    technical: [],
    gallery: [
      {
        src: "media/placeholders/light-02.svg",
        alt: "Abstract olive light study, temporary gallery design artwork",
        caption: "Light study 02 / Gallery demonstration",
        temporary: true,
      },
      {
        src: "media/placeholders/light-04.svg",
        alt: "Abstract silver-green light study, temporary gallery design artwork",
        caption: "Light study 04 / Gallery demonstration",
        temporary: true,
      },
    ],
  },
  {
    id: "documentary",
    title: "Documentary stories",
    category: "Documentary",
    status: "placeholder",
    summary: "A patient eye. A human connection.",
    description:
      "A space reserved for an original documentary project. A film, its context, production details, and behind-the-scenes material can be added here when available.",
    cover: {
      src: "media/placeholders/light-03.svg",
      alt: "Abstract warm earth-toned light design study, not a film still",
      caption: "Abstract light study 03",
      temporary: true,
    },
    technical: [],
    gallery: [],
  },
  {
    id: "commercial",
    title: "Commercial visions",
    category: "Commercial",
    status: "placeholder",
    summary: "Intentional images. A distinct point of view.",
    description:
      "A space reserved for an original commercial filmmaking project. This is a portfolio placeholder, with no client, commission, or completed project implied.",
    cover: {
      src: "media/placeholders/light-04.svg",
      alt: "Abstract silver-green reflected light design study, not a film still",
      caption: "Abstract light study 04",
      temporary: true,
    },
    technical: [],
    gallery: [],
  },
];
