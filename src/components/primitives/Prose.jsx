export function Prose({ children, className = "" }) {
  return <p className={`text-prose ${className}`}>{children}</p>;
}
