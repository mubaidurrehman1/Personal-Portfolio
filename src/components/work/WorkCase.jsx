import { motion } from "framer-motion";
import { Eyebrow } from "../primitives/Eyebrow";
import { GoldLink } from "../primitives/GoldLink";
import { Divider } from "../primitives/Divider";
import { fadeUp } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function WorkCase({ project, index, isLast }) {
  const reduced = useReducedMotion();
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      {...fadeUp(0.1 + index * 0.05, reduced)}
      className="py-16 md:py-24"
    >
      <Eyebrow>
        Work / 04.{num} · {project.year}
      </Eyebrow>

      <h3 className="mt-6 font-display text-display-lg text-bone-50 font-light max-w-4xl">
        {project.title}
      </h3>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="text-prose text-bone-300">{project.description}</p>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-6 lg:items-end lg:text-right">
          <div>
            <p className="font-mono-label text-bone-300/60 mb-1">Role</p>
            <p className="font-body text-bone-50">{project.role}</p>
          </div>
          <div>
            <p className="font-mono-label text-bone-300/60 mb-2">Stack</p>
            <p className="text-small-caps text-bone-300 leading-relaxed">
              {project.tags.join(" · ")}
            </p>
          </div>
          <GoldLink href={project.link}>View repository →</GoldLink>
        </div>
      </div>

      {!isLast && (
        <Divider className="theme-work-rule mt-16 md:mt-24 bg-gold-500/20 h-px" />
      )}
    </motion.article>
  );
}
