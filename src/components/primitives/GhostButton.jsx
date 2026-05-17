import { motion } from "framer-motion";

export function GhostButton({ href, children, onClick, className = "" }) {
  const Component = href ? motion.a : motion.button;
  const props = href
    ? { href }
    : { type: "button", onClick };

  return (
    <Component
      {...props}
      className={`theme-ghost-btn inline-flex items-center justify-center px-8 py-3.5 font-mono-label text-bone-50 border border-hairline bg-transparent transition-all duration-500 hover:border-gold-500/40 hover:text-gold-300 ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
