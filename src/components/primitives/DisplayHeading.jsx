import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { EASE_ATELIER } from "../../lib/motion";

export function DisplayHeading({
  text,
  as: Tag = "h2",
  className = "",
  splitWords = true,
  delay = 0,
  id,
}) {
  const reduced = useReducedMotion();
  const words = splitWords ? text.split(" ") : [text];

  if (reduced) {
    return (
      <Tag id={id} className={`font-display ${className}`}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag id={id} className={`font-display ${className}`} aria-label={text}>
      <span className="sr-only">{text}</span>
      <span className="inline-flex flex-wrap" aria-hidden="true">
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="overflow-hidden inline-block mr-[0.25em]">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.9,
                delay: delay + i * 0.06,
                ease: EASE_ATELIER,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}

export function DisplayLines({
  lines,
  className = "",
  delay = 0,
}) {
  const reduced = useReducedMotion();

  return (
    <div className={className} aria-hidden={false}>
      {lines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          className="overflow-hidden"
          style={{ lineHeight: 0.92 }}
        >
          {reduced ? (
            <span className="text-display-xl font-display block">{line}</span>
          ) : (
            <motion.span
              className="text-display-xl font-display block text-bone-50"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: delay + lineIndex * 0.12,
                ease: EASE_ATELIER,
              }}
            >
              {line}
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
}
