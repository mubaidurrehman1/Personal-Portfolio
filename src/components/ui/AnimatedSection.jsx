import { motion } from "framer-motion";

const sectionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export function AnimatedSection({ sectionKey, className, children }) {
  return (
    <motion.section
      key={sectionKey}
      initial={sectionVariants.initial}
      animate={sectionVariants.animate}
      exit={sectionVariants.exit}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
