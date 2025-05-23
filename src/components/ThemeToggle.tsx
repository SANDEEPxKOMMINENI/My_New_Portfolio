
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  // Initialize theme from localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "dark" || 
        (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  // Update theme when state changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      aria-label="Toggle dark mode"
      className="p-2 rounded-full bg-secondary dark:bg-secondary/30 text-secondary-foreground dark:text-secondary-foreground transition-colors hover:bg-secondary/80 dark:hover:bg-secondary/50"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? (
        <Sun size={18} className="transition-all" />
      ) : (
        <Moon size={18} className="transition-all" />
      )}
    </button>
  );
};

export default ThemeToggle;
