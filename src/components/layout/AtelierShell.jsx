import { GrainOverlay } from "./GrainOverlay";
import { InkGlow } from "./InkGlow";
import { SideRail } from "./SideRail";

export function AtelierShell({ children, activeSectionId }) {
  return (
    <div className="relative min-h-screen bg-ink-950 text-bone-50">
      <GrainOverlay />
      <InkGlow />
      <SideRail activeId={activeSectionId} />
      <main className="relative z-10 md:pl-20 lg:pl-24">{children}</main>
    </div>
  );
}
