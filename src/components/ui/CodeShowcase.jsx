import { motion } from "framer-motion";

export function CodeShowcase({ developer }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="w-full h-full relative"
    >
      <div className="w-full h-full max-h-96 bg-gray-900/70 backdrop-blur-sm rounded-xl p-4 border border-gray-800 shadow-xl overflow-hidden">
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-gray-400 text-sm">developer.js</div>
        </div>
        <div className="text-sm font-mono space-y-2 text-gray-300">
          <div>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-green-400">developer</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-indigo-400">{"{"}</span>
          </div>
          <div className="pl-4">
            <span className="text-emerald-400">name</span>:{" "}
            <span className="text-yellow-300">&apos;{developer.name}&apos;</span>,
          </div>
          <div className="pl-4">
            <span className="text-emerald-400">role</span>:{" "}
            <span className="text-yellow-300">&apos;{developer.role}&apos;</span>,
          </div>
          <div className="pl-4">
            <span className="text-emerald-400">skills</span>: [
            {developer.skills.map((skill, i) => (
              <span key={skill}>
                <span className="text-yellow-300">&apos;{skill}&apos;</span>
                {i < developer.skills.length - 1 ? ", " : ""}
              </span>
            ))},
            ],
          </div>
          <div className="pl-4">
            <span className="text-emerald-400">location</span>:{" "}
            <span className="text-yellow-300">&apos;{developer.location}&apos;</span>,
          </div>
          <div className="pl-4">
            <span className="text-purple-400">code</span>:{" "}
            <span className="text-indigo-400"> </span>{" "}
            <span className="text-indigo-400">{"{"}</span>
          </div>
          <div className="pl-8">
            <span className="text-purple-400">return</span>{" "}
            <span className="text-yellow-300">&apos;{developer.codeReturn}&apos;</span>;
          </div>
          <div className="pl-4">
            <span className="text-indigo-400">{"}"}</span>,
          </div>
          <div className="pl-4">
            <span className="text-purple-400">learnNewTech</span>:{" "}
            <span className="text-indigo-400">function</span>(){" "}
            <span className="text-indigo-400">{"{"}</span>
          </div>
          <div className="pl-8 whitespace-nowrap overflow-hidden">
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              className="inline-block whitespace-nowrap"
            >
              <span className="text-purple-400">this</span>.
              <span className="text-emerald-400">skills</span>.
              <span className="text-blue-400">push</span>(
              <span className="text-yellow-300">&apos;new technology&apos;</span>);
            </motion.span>
          </div>
          <div className="pl-4">
            <span className="text-indigo-400">{"}"}</span>
          </div>
          <div>
            <span className="text-indigo-400 ">{"}"}</span>;
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-lg"></div>
      <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-lg"></div>
    </motion.div>
  );
}
