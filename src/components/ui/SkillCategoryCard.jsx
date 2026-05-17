import { motion } from "framer-motion";
import { SkillBadge } from "./SkillBadge";

export function SkillCategoryCard({ title, skills, variant, animationDelay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay, duration: 0.5 }}
      className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl shadow-glow border border-gray-800"
    >
      <h3 className="font-semibold mb-6 text-xl text-blue-400">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillBadge
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            variant={variant}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}
