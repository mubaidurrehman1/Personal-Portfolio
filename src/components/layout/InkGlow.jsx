import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function InkGlow() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80]);

  return (
    <motion.div
      ref={ref}
      className="theme-ink-glow pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[min(90vw,56rem)] h-[70vh] z-0"
      style={{ y }}
      aria-hidden="true"
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: "var(--glow-gradient)",
          opacity: "var(--glow-opacity, 0.4)",
        }}
      />
    </motion.div>
  );
}
