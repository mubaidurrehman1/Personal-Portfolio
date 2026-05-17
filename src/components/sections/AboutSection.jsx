import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading, SectionHeadingAccent } from "../ui/SectionHeading";
import { InfoCard } from "../ui/InfoCard";
import { aboutCards } from "../../data/about";

export function AboutSection() {
  return (
    <AnimatedSection
      sectionKey="about"
      className="min-h-screen flex flex-col justify-center py-20"
    >
      <SectionHeading>
        About <SectionHeadingAccent>Me</SectionHeadingAccent>
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {aboutCards.map((card, index) => (
          <InfoCard
            key={card.title}
            title={card.title}
            items={card.items}
            animation={{
              initial: { opacity: 0, x: index === 0 ? -50 : 50 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.2 + index * 0.2, duration: 0.6 },
            }}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
