import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function Divider({ className = "", animate = true }) {
  const reduced = useReducedMotion();

  if (!animate || reduced) {
    return (
      <hr
        className={`theme-section-rule border-0 h-px bg-hairline w-full ${className}`}
      />
    );
  }

  return (
    <motion.hr
      className={`theme-section-rule border-0 h-px bg-hairline w-full origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
