import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";
import { Eyebrow } from "../primitives/Eyebrow";
import { GoldLink } from "../primitives/GoldLink";
import { MarqueeRow } from "../primitives/MarqueeRow";
import { fadeUp } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const marqueeItems = [
  "Available for work",
  "Full-Stack",
  "React",
  "Node.js",
  "TypeScript",
  "Islamabad",
];

export function ContactSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="contact"
      className="section-pad scroll-mt-8 min-h-[70vh] flex flex-col justify-center"
      aria-labelledby="contact-heading"
    >
      <MarqueeRow items={marqueeItems} className="mb-20" />

      <div className="content-wrap">
        <motion.div {...fadeUp(0, reduced)}>
          <Eyebrow>06 / Contact</Eyebrow>
        </motion.div>

        <motion.h2
          {...fadeUp(0.1, reduced)}
          id="contact-heading"
          className="mt-10 font-display text-display-xl text-bone-50 font-light max-w-5xl leading-[0.95]"
        >
          Let&apos;s make something{" "}
          <span className="italic text-gold-500">deliberate</span>.
        </motion.h2>

        <motion.div {...fadeUp(0.25, reduced)} className="mt-16">
          <p className="font-mono-label text-bone-300/60 mb-4">Email</p>
          <GoldLink href={`mailto:${profile.email}`} large external={false}>
            {profile.email}
          </GoldLink>
        </motion.div>

        <motion.nav
          {...fadeUp(0.35, reduced)}
          className="mt-16 flex flex-wrap gap-x-8 gap-y-4"
          aria-label="Social links"
        >
          {socialLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-8">
              <GoldLink href={link.href}>{link.label}</GoldLink>
              {i < socialLinks.length - 1 && (
                <span className="text-bone-300/30 hidden sm:inline" aria-hidden>
                  ·
                </span>
              )}
            </span>
          ))}
        </motion.nav>
      </div>
    </section>
  );
}
