import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";
import { Eyebrow } from "../primitives/Eyebrow";
import { Divider } from "../primitives/Divider";
import { DisplayHeading } from "../primitives/DisplayHeading";
import { fadeUp } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function IndexSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="index"
      className="section-pad scroll-mt-8"
      aria-labelledby="index-heading"
    >
      <div className="content-wrap">
        <motion.div {...fadeUp(0, reduced)}>
          <Eyebrow>03 / Index</Eyebrow>
          <DisplayHeading
            text="Capabilities"
            as="h2"
            id="index-heading"
            className="text-display-lg text-bone-50 mt-6"
            delay={0.1}
          />
        </motion.div>

        <div className="mt-16 space-y-0">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              {...fadeUp(0.15 + index * 0.08, reduced)}
              className="py-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                <div className="md:col-span-3 flex items-center gap-3">
                  <span className="font-mono-label text-gold-500/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-mono-label text-bone-300">
                    {category.title}
                  </h3>
                </div>
                <div className="md:col-span-9">
                  <p className="font-display text-2xl md:text-3xl text-bone-50 font-light leading-snug">
                    {category.skills.map((skill, i) => {
                      const Glyph = skill.glyph;
                      return (
                        <span key={skill.name} className="inline-flex items-center">
                          <Glyph
                            className="inline w-4 h-4 mr-1.5 mb-1 opacity-40 text-bone-300"
                            aria-hidden
                          />
                          <span>{skill.name}</span>
                          {i < category.skills.length - 1 && (
                            <span className="text-bone-300/40 mx-3 font-body text-lg">
                              ·
                            </span>
                          )}
                        </span>
                      );
                    })}
                  </p>
                </div>
              </div>
              {index < skillCategories.length - 1 && (
                <Divider className="mt-8" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
