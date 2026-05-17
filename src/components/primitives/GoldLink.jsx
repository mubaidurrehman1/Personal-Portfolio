import { motion } from "framer-motion";

export function GoldLink({
  href,
  children,
  className = "",
  external = true,
  large = false,
}) {
  return (
    <motion.a
      href={href}
      className={`group relative inline-block font-body text-gold-500 transition-colors hover:text-gold-300 ${
        large ? "text-2xl md:text-4xl tracking-tight" : "text-sm md:text-base"
      } ${className}`}
      target={external && href.startsWith("http") ? "_blank" : undefined}
      rel={external && href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ x: 2 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
        aria-hidden="true"
      />
    </motion.a>
  );
}
