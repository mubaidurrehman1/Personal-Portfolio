import { motion } from "framer-motion";

export function SectionHeading({ children, className = "" }) {
  return (
    <motion.h2
      className={`text-4xl font-bold mb-12 text-center ${className}`.trim()}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  );
}

export function SectionHeadingAccent({ children, className = "text-blue-400" }) {
  return <span className={className}>{children}</span>;
}
