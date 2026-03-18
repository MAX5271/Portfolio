import { useState, useEffect } from "react";

const THEMES = [
  { id: "minimalism", label: "SYS.MINIMAL" },
  { id: "neo-brutalism", label: "SYS.BRUTAL" },
];

export default function ThemeEngine() {
  const [activeTheme, setActiveTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("system_theme") || "minimalism";
    }
    return "minimalism";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", activeTheme);
    localStorage.setItem("system_theme", activeTheme);
  }, [activeTheme]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center p-1 border border-subtle bg-base/90 backdrop-blur-sm shadow-2xl">
      {THEMES.map((theme) => {
        const isActive = activeTheme === theme.id;

        return (
          <button
            key={theme.id}
            onClick={() => setActiveTheme(theme.id)}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase transition-all duration-300 ${
              isActive
                ? "bg-primary text-base" 
                : "text-secondary hover:text-primary hover:bg-surface" 
            }`}
          >
            [ {theme.label} ]
          </button>
        );
      })}
    </div>
  );
}