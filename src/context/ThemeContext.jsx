import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { THEMES, isValidTheme } from "../data/themes";

const STORAGE_KEY = "portfolio-theme";
const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return "obsidian";
    const stored = localStorage.getItem(STORAGE_KEY);
    return isValidTheme(stored) ? stored : "obsidian";
  });

  const applyTheme = useCallback((next) => {
    document.documentElement.dataset.theme = next;
    localStorage.setItem(STORAGE_KEY, next);

    requestAnimationFrame(() => {
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        const color =
          getComputedStyle(document.documentElement)
            .getPropertyValue("--theme-meta-color")
            .trim() || "#07090d";
        meta.setAttribute("content", color);
      }
    });
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  const setTheme = useCallback((next) => {
    if (isValidTheme(next)) {
      setThemeState(next);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const ids = Object.keys(THEMES);
    setThemeState((current) => {
      const i = ids.indexOf(current);
      return ids[(i + 1) % ids.length];
    });
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme, themes: THEMES }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
