import Velaris from "@/components/ui/velaris";

const SECTION_COLORS = ["#220540", "#5B18A1", "#7B1FA2", "#09060D"];

export default function SectionBackground() {
  return (
    <div className="section-background" aria-hidden="true">
      <Velaris
        bg="#09060D"
        colors={SECTION_COLORS}
        speed={0.35}
        grain={0.12}
        height="100%"
        className="absolute inset-0 z-0"
      />
    </div>
  );
}
