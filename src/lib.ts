export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export const href = (page = "") => asset(page ? `${page}/` : "");
export const currentPage = () =>
  window.location.pathname
    .replace(import.meta.env.BASE_URL, "")
    .replace(/^\/+|\/+$/g, "");
export const navigation = [
  { label: "Selected work", short: "Work", path: "work" },
  { label: "About", short: "About", path: "about" },
  { label: "Wildlife & natural history", short: "Wildlife", path: "wildlife" },
  { label: "Equipment & production", short: "Equipment", path: "equipment" },
  {
    label: "Collaborations & partnerships",
    short: "Partnerships",
    path: "partnerships",
  },
  { label: "Contact", short: "Let’s talk", path: "contact" },
];
