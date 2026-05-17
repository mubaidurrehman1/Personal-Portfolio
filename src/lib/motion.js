export const EASE_ATELIER = [0.22, 1, 0.36, 1];

export const fadeUp = (delay = 0, reduced = false) => ({
  initial: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: reduced ? 0 : 0.9,
    delay: reduced ? 0 : delay,
    ease: EASE_ATELIER,
  },
});

export const staggerContainer = (reduced = false) => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-60px" },
  variants: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : 0.08,
      },
    },
  },
});

export const staggerChild = (reduced = false) => ({
  variants: {
    hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.9, ease: EASE_ATELIER },
    },
  },
});
