import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";
import { navbarItems } from "../data/navigation";
import { BackgroundEffects } from "../components/layout/BackgroundEffects";
import { Navbar } from "../components/layout/Navbar";
import {
  HomeSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  EducationSection,
} from "../components/sections";

const SECTION_COMPONENTS = {
  home: HomeSection,
  about: AboutSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  education: EducationSection,
};

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");
  const mousePosition = useMousePosition();

  const ActiveSection = SECTION_COMPONENTS[activeSection];

  return (
    <motion.div
      className="bg-black text-white min-h-screen font-sans antialiased relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <BackgroundEffects mousePosition={mousePosition} />

      <Navbar
        items={navbarItems}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <div className="container mx-auto px-6 md:px-12 py-16 relative z-20">
        <AnimatePresence mode="wait">
          {ActiveSection && <ActiveSection key={activeSection} />}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
