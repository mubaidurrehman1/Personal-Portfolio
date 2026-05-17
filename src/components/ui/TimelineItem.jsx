import { motion } from "framer-motion";

const gradientBySide = {
  left: "from-cyan-500 to-blue-600",
  right: "from-purple-500 to-indigo-600",
};

export function TimelineItem({ item, index }) {
  const { title, organization, period, description, icon: Icon, side } = item;
  const gradient = gradientBySide[side];

  return (
    <motion.div
      className={`mb-12 flex ${
        side === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } w-full items-start`}
      initial={{ opacity: 0, x: side === "left" ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3 + index * 0.2,
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <div className="w-full md:w-5/12 px-4 py-6 bg-gray-900/60 backdrop-blur-md rounded-lg shadow-lg border border-gray-700/50 hover:border-cyan-600/60 transition-colors duration-300">
        <div className="flex items-center mb-2">
          <div
            className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mr-3 shadow-md`}
          >
            <Icon className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-bold text-cyan-300">{title}</h3>
        </div>
        <h4 className="text-base font-medium mb-2 text-white ml-11">
          {organization}
        </h4>
        <span className="inline-block px-2.5 py-0.5 mb-3 ml-11 text-xs text-cyan-200 bg-cyan-900/40 rounded-full border border-cyan-800/40">
          {period}
        </span>
        <p className="text-sm text-gray-300 leading-relaxed ml-11">
          {description}
        </p>
      </div>

      <div className="hidden md:flex w-2/12 justify-center items-start pt-8">
        <motion.div
          className={`w-4 h-4 rounded-full bg-gradient-to-br ${gradient} shadow-lg ring-4 ring-black`}
        />
      </div>

      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
}
