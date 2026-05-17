import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sections } from "../../data/sections";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function SideRail({ activeId }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeIndex = sections.findIndex((s) => s.id === activeId);
  const progress =
    activeIndex >= 0 ? ((activeIndex + 1) / sections.length) * 100 : 0;

  const navList = (
    <ul className="flex flex-col gap-6 list-none m-0 p-0">
      {sections.map((section) => {
        const isActive = activeId === section.id;
        return (
          <li key={section.id}>
            <button
              type="button"
              onClick={() => {
                scrollToSection(section.id);
                setMenuOpen(false);
              }}
              className={`group flex items-center gap-3 bg-transparent border-0 cursor-pointer p-0 text-left transition-colors duration-500 ${
                isActive ? "text-gold-500" : "text-bone-300/50 hover:text-bone-300"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`font-mono-label transition-all duration-500 ${
                  isActive ? "text-gold-500" : ""
                }`}
              >
                {section.num}
              </span>
              <span
                className={`hidden lg:block font-mono-label text-[0.6rem] tracking-[0.2em] transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                }`}
              >
                {section.label}
              </span>
              {isActive && (
                <motion.span
                  layoutId="railTick"
                  className="hidden lg:block w-6 h-px bg-gold-500 ml-auto"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Mobile top progress */}
      <div className="theme-progress-track md:hidden fixed top-0 left-0 right-0 z-50 h-px bg-hairline">
        <motion.div
          className="h-full bg-gold-500 origin-left"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <button
        type="button"
        className="theme-mobile-menu md:hidden fixed top-4 right-4 z-50 font-mono-label text-bone-300 border border-hairline px-3 py-2 bg-ink-900/80 backdrop-blur-sm"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="theme-menu-overlay md:hidden fixed inset-0 z-40 bg-ink-950/95 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {navList}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop side rail */}
      <aside className="theme-side-rail hidden md:flex fixed left-0 top-0 bottom-0 z-40 w-20 lg:w-24 flex-col justify-center pl-6 lg:pl-8 border-r border-hairline bg-ink-950/40 backdrop-blur-sm">
        <nav aria-label="Section navigation">{navList}</nav>
        <div className="absolute bottom-8 left-6 lg:left-8 right-6 lg:right-8">
          <div className="h-24 w-px bg-hairline mx-auto relative overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gold-500"
              style={{ height: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </aside>
    </>
  );
}
