import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div
      className="theme-theme-toggle fixed bottom-6 right-6 z-50 flex flex-wrap max-w-[calc(100vw-1.5rem)] rounded-sm overflow-hidden border border-hairline bg-ink-900/90 backdrop-blur-sm md:bottom-8 md:right-8"
      role="group"
      aria-label="Portfolio theme"
    >
      {Object.values(themes).map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => setTheme(t.id)}
          className={`px-2.5 py-2 font-mono-label text-[0.55rem] sm:text-[0.6rem] transition-colors duration-300 ${
            theme === t.id
              ? "bg-gold-500 text-ink-950"
              : "text-bone-300 hover:text-bone-50 bg-transparent"
          }`}
          aria-pressed={theme === t.id}
          title={t.label}
        >
          {t.short}
        </button>
      ))}
    </div>
  );
}
