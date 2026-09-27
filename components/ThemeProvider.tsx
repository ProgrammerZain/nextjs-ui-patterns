"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }): React.JSX.Element {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("app-theme") as Theme | null;
    if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
      setThemeState(savedTheme);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("app-theme", newTheme);
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      <div
        data-theme={theme}
        className={
          theme === "light"
            ? "light-theme bg-slate-100 text-slate-900 transition-colors duration-300 min-h-full"
            : "dark-theme bg-slate-950 text-slate-100 transition-colors duration-300 min-h-full"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a <ThemeProvider>");
  }
  return context;
}

export function ThemeToggle(): React.JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all flex items-center gap-2 ${
        theme === "dark"
          ? "bg-slate-900 border-slate-700 text-cyan-400 hover:border-cyan-500/50"
          : "bg-amber-100 border-amber-300 text-amber-900 hover:border-amber-400"
      }`}
      aria-label="Toggle Theme"
    >
      <span>{theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}</span>
    </button>
  );
}
