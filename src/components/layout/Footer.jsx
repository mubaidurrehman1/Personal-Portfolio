export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline py-12 px-[var(--spacing-gutter)]">
      <div className="content-wrap flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <p className="font-mono-label text-bone-300/50">
          © {year} Muhammad Ubaid ur Rehman
        </p>
        <p className="font-mono-label text-bone-300/40 text-right">
          Set in Fraunces & Geist · Built with React
        </p>
      </div>
    </footer>
  );
}
