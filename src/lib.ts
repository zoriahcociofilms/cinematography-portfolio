export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
export const href = (page = "") => asset(page ? `${page}/` : "");
export const currentPage = () =>
  window.location.pathname
    .replace(import.meta.env.BASE_URL, "")
    .replace(/^\/+|\/+$/g, "");
export const navigation = [
  { label: "Home", path: "" },
  { label: "Selected Work", path: "work" },
  { label: "About", path: "about" },
  { label: "Contact", path: "contact" },
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
