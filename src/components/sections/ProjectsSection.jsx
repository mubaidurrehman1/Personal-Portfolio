import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading, SectionHeadingAccent } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export function ProjectsSection() {
  return (
    <AnimatedSection
      sectionKey="projects"
      className="min-h-screen flex flex-col justify-center py-20"
    >
      <SectionHeading>
        My <SectionHeadingAccent>Projects</SectionHeadingAccent>
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
}
