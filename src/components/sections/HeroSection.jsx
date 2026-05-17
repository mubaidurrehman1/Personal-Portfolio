import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { DisplayLines } from "../primitives/DisplayHeading";
import { Eyebrow } from "../primitives/Eyebrow";
import { Prose } from "../primitives/Prose";
import { GhostButton } from "../primitives/GhostButton";
import { GoldLink } from "../primitives/GoldLink";
import { Divider } from "../primitives/Divider";
import { fadeUp } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

function useLocalTime(timezone) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };
    format();
    const id = setInterval(format, 1000);
    return () => clearInterval(id);
  }, [timezone]);

  return time;
}

export function HeroSection() {
  const reduced = useReducedMotion();
  const localTime = useLocalTime(profile.timezone);

  return (
    <section
      id="hero"
      className="section-pad min-h-screen flex items-center scroll-mt-0"
      aria-label="Introduction"
    >
      <div className="content-wrap w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.div {...fadeUp(0, reduced)}>
              <Eyebrow>01 / Intro</Eyebrow>
            </motion.div>

            <DisplayLines
              lines={[profile.wordmark.line1, profile.wordmark.line2]}
              className="mt-8 mb-6"
              delay={0.15}
            />

            <motion.div {...fadeUp(0.5, reduced)} className="mt-10">
              <Divider className="mb-8 max-w-md" />
              <Prose className="max-w-xl text-bone-300">{profile.tagline}</Prose>
            </motion.div>

            <motion.div
              {...fadeUp(0.65, reduced)}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <GhostButton href="#work">View work</GhostButton>
              <GoldLink href={profile.resumePath} external={false}>
                Download CV
              </GoldLink>
            </motion.div>
          </div>

          <motion.aside
            {...fadeUp(0.35, reduced)}
            className="lg:col-span-4 flex flex-col gap-8 lg:items-end lg:text-right glass-panel p-6 lg:p-8"
          >
            <div>
              <p className="font-mono-label text-bone-300/60 mb-2">Coordinates</p>
              <p className="font-mono text-xs text-bone-300 tracking-wide">
                {profile.coordinates}
              </p>
            </div>
            <div>
              <p className="font-mono-label text-bone-300/60 mb-2">Local time</p>
              <p className="font-mono text-2xl text-gold-500 tabular-nums">
                {localTime}
              </p>
            </div>
            <div>
              <p className="font-mono-label text-bone-300/60 mb-2">Role</p>
              <p className="font-display text-display-md text-bone-50 italic">
                {profile.eyebrow}
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
