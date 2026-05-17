import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { Eyebrow } from "../primitives/Eyebrow";
import { DisplayHeading } from "../primitives/DisplayHeading";
import { WorkCase } from "../work/WorkCase";
import { fadeUp } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function WorkSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="work"
      className="section-pad scroll-mt-8"
      aria-labelledby="work-heading"
    >
      <div className="content-wrap">
        <motion.div {...fadeUp(0, reduced)}>
          <Eyebrow>04 / Work</Eyebrow>
          <DisplayHeading
            text="Selected cases"
            as="h2"
            id="work-heading"
            className="text-display-lg text-bone-50 mt-6"
            delay={0.1}
          />
        </motion.div>

        <div className="mt-8">
          {projects.map((project, index) => (
            <WorkCase
              key={project.title}
              project={project}
              index={index}
              isLast={index === projects.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
