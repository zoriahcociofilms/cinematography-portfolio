import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { currentPage, href, navigation, cycleDialogFocus } from "../lib";
import { site } from "../content/site";

export function Layout({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const active = currentPage();
  useEffect(() => {
    if (menu) dialog.current?.showModal();
    else dialog.current?.close();
  }, [menu]);
  function closeMenu() {
    dialog.current?.close();
    setMenu(false);
    menuButton.current?.focus();
  }
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a href={href()} aria-label="Zoriah Cocio — Home" className="wordmark">
          <span>{site.name}</span>
          <span>Wildlife & documentary cinematography</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((link) => (
            <a
              key={link.path}
              href={href(link.path)}
              aria-current={active === link.path ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          ref={menuButton}
          className="menu-trigger"
          aria-label="Open navigation"
          aria-haspopup="dialog"
          aria-expanded={menu}
          onClick={() => setMenu(true)}
        >
          <Menu size={22} strokeWidth={1.3} aria-hidden="true" />
          <span className="sr-only">Menu</span>
        </button>
      </header>
      <dialog
        ref={dialog}
        className="mobile-menu"
        aria-label="Navigation"
        onKeyDown={cycleDialogFocus}
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="menu-top">
          <span>{site.name}</span>
          <button
            className="icon-button"
            onClick={closeMenu}
            aria-label="Close navigation"
            autoFocus
          >
            <X size={24} strokeWidth={1.3} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {navigation.map((link) => (
            <a
              key={link.path}
              href={href(link.path)}
              aria-current={active === link.path ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="menu-location">Wildlife. Natural history. Documentary.</p>
      </dialog>
      <main id="main">{children}</main>
      <footer className="site-footer wrap">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>{site.location}</span>
        <div>
          {site.socials
            .filter((social) => social.url)
            .map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
          <a href={href("contact")}>Contact</a>
        </div>
      </footer>
    </>
  );
}
