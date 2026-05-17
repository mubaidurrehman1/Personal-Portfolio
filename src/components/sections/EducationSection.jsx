import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading, SectionHeadingAccent } from "../ui/SectionHeading";
import { TimelineItem } from "../ui/TimelineItem";
import { educationItems } from "../../data/education";

export function EducationSection() {
  return (
    <AnimatedSection
      sectionKey="education"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4"
    >
      <SectionHeading className="mb-16">
        Education &{" "}
        <SectionHeadingAccent className="text-cyan-400">
          Certifications
        </SectionHeadingAccent>
      </SectionHeading>

      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-800/30 via-blue-800/30 to-purple-800/30 rounded-full transform -translate-x-1/2 hidden md:block" />

        {educationItems.map((item, index) => (
          <TimelineItem key={item.title} item={item} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
}
