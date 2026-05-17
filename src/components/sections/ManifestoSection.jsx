import { motion } from "framer-motion";
import { manifesto } from "../../data/about";
import { Eyebrow } from "../primitives/Eyebrow";
import { Divider } from "../primitives/Divider";
import { fadeUp, staggerContainer, staggerChild } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function ManifestoSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="manifesto"
      className="section-pad scroll-mt-8"
      aria-labelledby="manifesto-heading"
    >
      <div className="content-wrap">
        <motion.div {...fadeUp(0, reduced)}>
          <Eyebrow>02 / Manifesto</Eyebrow>
        </motion.div>

        <motion.blockquote
          {...fadeUp(0.1, reduced)}
          id="manifesto-heading"
          className="mt-12 max-w-4xl font-display text-display-lg text-bone-50 italic font-light"
        >
          &ldquo;{manifesto.pullQuote}&rdquo;
        </motion.blockquote>

        <Divider className="my-16 max-w-xs" />

        <motion.div
          {...staggerContainer(reduced)}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          {manifesto.columns.map((col, colIndex) => (
            <motion.div key={colIndex} {...staggerChild(reduced)}>
              {col.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={`text-prose mb-6 ${colIndex === 0 && i === 0 ? "drop-cap" : ""}`}
                >
                  {para}
                </p>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
