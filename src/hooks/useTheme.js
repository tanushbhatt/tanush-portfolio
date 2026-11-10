import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

// Keep these in sync with `--bg` in styles/tokens.css and the inline script in index.html.
const THEME_COLORS = { light: "#f6f8fa", dark: "#0a0f14" };

function readPreference() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark" || saved === "system") return saved;
  } catch {
    // Storage can be blocked (private mode); fall back to the system theme.
  }
  return "system";
}

function resolveTheme(preference) {
  if (preference === "system") {
    return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
  }
  return preference;
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLORS[theme]);
}

/**
 * Light / Dark / System theme.
 * - `preference` is what the visitor picked ("light" | "dark" | "system").
 * - The resolved theme is written to <html data-theme="light|dark">.
 * - "system" follows the OS/browser setting live.
 */
export function useTheme() {
  const [preference, setPreference] = useState(readPreference);

  useEffect(() => {
    applyTheme(resolveTheme(preference));
    if (preference !== "system") return undefined;

    const media = window.matchMedia(DARK_QUERY);
    const onChange = () => applyTheme(resolveTheme("system"));
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [preference]);

  const setTheme = useCallback((next) => {
    // Briefly enable colour transitions so the switch fades instead of snapping.
    const root = document.documentElement;
    root.classList.add("theme-transition");
    window.setTimeout(() => root.classList.remove("theme-transition"), 400);

    setPreference(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore: the choice just won't be remembered.
    }
  }, []);

  return { preference, setTheme };
}
