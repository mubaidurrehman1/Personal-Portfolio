import { motion } from "framer-motion";

export function Navbar({ items, activeSection, onSectionChange }) {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-40 pt-4 pb-4 bg-black backdrop-blur-sm border-none border-gray-800/50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <ul className="flex justify-center items-center space-x-10">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.li
                key={item.id}
                className={`relative group cursor-pointer ${
                  isActive
                    ? "text-blue-400"
                    : "text-gray-500 hover:text-blue-300"
                }`}
                onClick={() => onSectionChange(item.id)}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs rounded-md py-1 px-3 opacity-0 group-hover:opacity-100"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
                <Icon className="h-8 w-8 md:h-8 md:w-8" />
                {isActive && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"
                    layoutId="navIndicator"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
