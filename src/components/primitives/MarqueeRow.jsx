import { useReducedMotion } from "../../hooks/useReducedMotion";

export function MarqueeRow({ items, className = "" }) {
  const reduced = useReducedMotion();
  const doubled = [...items, ...items];

  return (
    <div
      className={`overflow-hidden border-y border-hairline py-4 ${className}`}
      aria-hidden="true"
    >
      <div
        className={`flex gap-12 whitespace-nowrap font-mono-label text-bone-300/60 ${
          reduced ? "" : "animate-marquee"
        }`}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
