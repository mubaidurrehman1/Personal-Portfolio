export function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`font-mono-label text-bone-300 ${className}`}
      aria-hidden="true"
    >
      {children}
    </p>
  );
}
