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
import type { KeyboardEvent } from "react";

// Native dialogs contain focus; explicit edge cycling also avoids browser-chrome
// focus stops when a visitor reverse-tabs from the first control.
export function cycleDialogFocus(event: KeyboardEvent<HTMLDialogElement>) {
  if (event.key !== "Tab") return;
  const controls = event.currentTarget.querySelectorAll<HTMLElement>(
    "button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])",
  );
  const first = controls[0];
  const last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last?.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first?.focus();
  }
}
