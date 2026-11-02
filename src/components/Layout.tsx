import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { currentPage, href, navigation } from "../lib";
import { site } from "../content/site";
import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const active = currentPage();
  useEffect(() => {
    const element = dialog.current;
    if (menu) {
      element?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      element?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);
  function closeMenu() {
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
          <span>
            Zoriah Cocio<span className="wordmark-period">.</span>
          </span>
          <span className="wordmark-sub">Cinematography & visual stories</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((link) => (
            <a
              key={link.path}
              href={href(link.path)}
              aria-current={active === link.path ? "page" : undefined}
              className={link.path === "contact" ? "nav-contact" : ""}
            >
              {link.short}
              {link.path === "contact" && (
                <ArrowUpRight size={15} aria-hidden="true" />
              )}
            </a>
          ))}
        </nav>
        <button
          ref={menuButton}
          className="menu-trigger"
          onClick={() => setMenu(true)}
          aria-label="Open navigation"
          aria-haspopup="dialog"
          aria-expanded={menu}
        >
          <span>Menu</span>
          <Menu size={21} aria-hidden="true" />
        </button>
      </header>
      <dialog
        ref={dialog}
        className="mobile-menu"
        aria-label="Navigation"
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="menu-top">
          <span className="eyebrow">Zoriah Cocio / Index</span>
          <button
            className="icon-button"
            onClick={closeMenu}
            aria-label="Close navigation"
            autoFocus
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          <a href={href()} aria-current={active === "" ? "page" : undefined}>
            <sup>00</sup>Home
          </a>
          {navigation.map((link, index) => (
            <a
              key={link.path}
              href={href(link.path)}
              aria-current={active === link.path ? "page" : undefined}
            >
              <sup>0{index + 1}</sup>
              {link.label}
            </a>
          ))}
        </nav>
        <p className="menu-location">Independent filmmaker / Arizona, USA</p>
      </dialog>
      <main id="main">{children}</main>
      <footer className="site-footer wrap">
        <div className="footer-top">
          <a className="footer-name" href={href()}>
            Zoriah Cocio<span>.</span>
          </a>
          <p>
            A patient eye.
            <br />
            An intentional frame.
          </p>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <nav aria-label="Footer navigation">
            {navigation.map((link) => (
              <a href={href(link.path)} key={link.path}>
                {link.short}
              </a>
            ))}
          </nav>
          <span>Based in Arizona. Looking outward.</span>
        </div>
      </footer>
    </>
  );
}
