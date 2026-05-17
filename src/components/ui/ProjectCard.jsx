import { motion } from "framer-motion";

export function ProjectCard({ title, description, tags, link, index }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900/60 to-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 shadow-glow group relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      whileHover={{
        y: -10,
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
      }}
    >
      <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-all duration-700" />

      <h3 className="text-xl font-bold mb-3 text-blue-400">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-400 hover:text-blue-300"
      >
        View Project
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="ml-1"
        >
          →
        </motion.span>
      </a>
    </motion.div>
  );
}
