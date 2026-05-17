import { motion } from "framer-motion";

export function SocialLinks({ links }) {
  return (
    <motion.div
      className="flex space-x-8 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      {links.map(({ label, href, icon: Icon }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="relative"
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon className="h-8 w-8 text-gray-300 hover:text-blue-400 transition-colors duration-300" />
          <motion.span
            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs rounded-md py-1 px-3 opacity-0 pointer-events-none"
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
          >
            {label}
          </motion.span>
        </motion.a>
      ))}
    </motion.div>
  );
}
