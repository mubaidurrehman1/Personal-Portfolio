import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SocialLinks } from "../ui/SocialLinks";
import { DownloadResumeButton } from "../ui/DownloadResumeButton";
import { CodeShowcase } from "../ui/CodeShowcase";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";

export function HomeSection() {
  return (
    <AnimatedSection
      sectionKey="home"
      className="min-h-[calc(100vh-120px)] flex flex-col justify-center items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full mt-8">
        <div className="md:col-span-3 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-2"
          >
            <span className="text-lg text-green-400 font-medium tracking-wide font-mono">
              {profile.greeting}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mt-2 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-6"
          >
            <div className="relative h-14 overflow-hidden mt-6">
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-indigo-500 to-emerald-500" />
              <p className="text-2xl md:text-3xl font-semibold text-gray-200 pl-4 border-l-4 border-transparent">
                <span className="text-indigo-300">{profile.role}</span>{" "}
                {profile.roleSuffix}
              </p>
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-green-200 mb-8 max-w-2xl mt-6 font-mono"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {profile.tagline}
          </motion.p>

          <div className="space-y-6">
            <SocialLinks links={socialLinks} />
            <DownloadResumeButton href={profile.resumePath} />
          </div>
        </div>

        <div className="md:col-span-2 flex items-center justify-center relative">
          <CodeShowcase developer={profile.codeShowcase} />
        </div>
      </div>
    </AnimatedSection>
  );
}
