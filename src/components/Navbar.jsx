import { useEffect, useState } from "react";
import { navItems } from "../data/navigation.js";
import { profile } from "../data/profile.js";
import { useTheme } from "../hooks/useTheme.js";
import { CloseIcon, MenuIcon } from "./Icons.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

// Matches the breakpoint where the inline links replace the hamburger menu.
const DESKTOP_QUERY = "(min-width: 75em)";

export default function Navbar({ activeId }) {
  const { preference, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a bottom border once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the mobile menu with Escape, and when the window grows to desktop size.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const media = window.matchMedia(DESKTOP_QUERY);
    const onChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onChange);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled || menuOpen ? " is-scrolled" : ""}`}>
      <div className="container site-header__inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label={`${profile.name} — home`}>
          <span className="brand__mark" aria-hidden="true">TB</span>
          <span className="brand__name">{profile.name}</span>
        </a>

        <nav className="nav" aria-label="Primary">
          <ul className="nav__links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <ThemeToggle preference={preference} onChange={setTheme} />
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="nav__panel" aria-label="Mobile">
          <ul className="container nav__panel-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  aria-current={activeId === item.id ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
