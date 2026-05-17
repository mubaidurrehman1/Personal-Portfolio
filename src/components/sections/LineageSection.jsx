import { motion } from "framer-motion";
import { educationItems } from "../../data/education";
import { Eyebrow } from "../primitives/Eyebrow";
import { DisplayHeading } from "../primitives/DisplayHeading";
import { fadeUp } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function LineageSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="lineage"
      className="section-pad scroll-mt-8"
      aria-labelledby="lineage-heading"
    >
      <div className="content-wrap">
        <motion.div {...fadeUp(0, reduced)}>
          <Eyebrow>05 / Lineage</Eyebrow>
          <DisplayHeading
            text="Education"
            as="h2"
            id="lineage-heading"
            className="text-display-lg text-bone-50 mt-6"
            delay={0.1}
          />
        </motion.div>

        <div className="mt-16 relative pl-8 md:pl-0">
          <motion.div
            className="absolute left-0 md:left-[4.5rem] top-0 bottom-0 w-px bg-hairline"
            aria-hidden
          />

          <ul className="space-y-16 list-none m-0 p-0">
            {educationItems.map((item, index) => (
              <motion.li
                key={item.title}
                {...fadeUp(0.15 + index * 0.1, reduced)}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
              >
                <div className="md:col-span-2">
                  <span className="font-mono text-sm text-gold-500 tabular-nums">
                    {item.year}
                  </span>
                </div>
                <div className="md:col-span-10 md:pl-8">
                  <h3 className="font-display text-2xl text-bone-50 font-light">
                    {item.title}
                  </h3>
                  <p className="font-mono-label text-bone-300 mt-2">
                    {item.organization}
                  </p>
                  <p className="text-prose mt-4 max-w-2xl">{item.description}</p>
                </div>
                <span
                  className="theme-timeline-dot absolute left-[-5px] md:left-[4.25rem] top-2 w-2 h-2 rounded-full bg-gold-500 ring-4 ring-ink-950"
                  aria-hidden
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
