import { motion } from "framer-motion";

export function InfoCard({ title, items, animation }) {
  const { initial, animate, transition } = animation;

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-xl shadow-glow border border-gray-800"
    >
      <h3 className="text-2xl font-semibold mb-4 text-blue-400">{title}</h3>
      <ul className="text-xl text-gray-300 leading-relaxed list-disc list-inside space-y-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
