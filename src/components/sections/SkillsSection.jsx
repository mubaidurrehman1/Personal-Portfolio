import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading, SectionHeadingAccent } from "../ui/SectionHeading";
import { SkillCategoryCard } from "../ui/SkillCategoryCard";
import { skillCategories } from "../../data/skills";

const animationDelays = [0.2, 0.3, 0.4, 0.5];

export function SkillsSection() {
  return (
    <AnimatedSection
      sectionKey="skills"
      className="min-h-screen flex flex-col justify-center py-20"
    >
      <SectionHeading>
        Technical <SectionHeadingAccent>Skills</SectionHeadingAccent>
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillCategories.map((category, index) => (
          <SkillCategoryCard
            key={category.title}
            title={category.title}
            skills={category.skills}
            variant={category.variant}
            animationDelay={animationDelays[index]}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
