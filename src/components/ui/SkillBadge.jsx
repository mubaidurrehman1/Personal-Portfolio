import { motion } from "framer-motion";
import { skillVariantStyles } from "./skillStyles";

export function SkillBadge({ icon: Icon, name, variant, index }) {
  const styles = skillVariantStyles[variant];

  return (
    <motion.span
      className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${styles.badge}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.1, backgroundColor: styles.hover }}
    >
      {Icon && <Icon className={`mr-2 h-5 w-5 ${styles.icon}`} />}
      {name}
    </motion.span>
  );
}
