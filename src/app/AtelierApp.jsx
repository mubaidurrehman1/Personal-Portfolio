import { useMemo } from "react";
import { useLenis } from "../hooks/useLenis";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { sections } from "../data/sections";
import { AtelierShell } from "../components/layout/AtelierShell";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { ManifestoSection } from "../components/sections/ManifestoSection";
import { IndexSection } from "../components/sections/IndexSection";
import { WorkSection } from "../components/sections/WorkSection";
import { LineageSection } from "../components/sections/LineageSection";
import { ContactSection } from "../components/sections/ContactSection";

export default function AtelierApp() {
  useLenis();

  const sectionIds = useMemo(() => sections.map((s) => s.id), []);
  const activeSectionId = useScrollSpy(sectionIds);

  return (
    <AtelierShell activeSectionId={activeSectionId}>
      <HeroSection />
      <ManifestoSection />
      <IndexSection />
      <WorkSection />
      <LineageSection />
      <ContactSection />
      <Footer />
    </AtelierShell>
  );
}
