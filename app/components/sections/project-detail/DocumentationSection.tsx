import SectionHeading from "./SectionHeading";

interface DocumentationSectionProps {
  heading: string;
  headingItalic: string;
  description: string;
  showMobileGrid?: boolean;
  showDesktopGrid?: boolean;
}

export default function DocumentationSection({
  heading,
  headingItalic,
  description,
  showMobileGrid = true,
  showDesktopGrid = true,
}: DocumentationSectionProps) {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading
          heading={heading}
          headingItalic={headingItalic}
          description={description}
        />

        {/* Mobile Grid Wireframe with Annotations (4-bar) */}
        {showMobileGrid && (
          <div className={`flex justify-center ${showDesktopGrid ? "mb-16 md:mb-20" : ""}`}>
            <img
              src="/assets/projectdetail/4-bar.svg"
              alt="Mobile grid system - 4 column layout with spacing annotations"
              className="w-full max-w-[760px] h-auto"
            />
          </div>
        )}

        {/* Desktop Grid - Full Width (12-bar, hidden on mobile) */}
        {showDesktopGrid && (
          <div
            className="hidden md:block relative w-full"
            style={{ aspectRatio: "1320 / 812" }}
          >
            <img
              src="/assets/projectdetail/12-bar.svg"
              alt="Desktop grid system - 12 column layout"
              className="w-full h-auto absolute inset-0"
            />
            {!showMobileGrid && (
              <>
                {/* Top "100 px" — centered above the columns (Figma: 617, 15 in 1320×812) */}
                <span
                  className="absolute italic font-bold text-[#070707] leading-none whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    top: "1.85%",
                    left: "46.74%",
                    fontSize: "clamp(20px, 2.4vw, 32px)",
                  }}
                >
                  100 px
                </span>

                {/* Left "100 px" — in the left margin, vertically near middle (Figma: 0, 384) */}
                <span
                  className="absolute italic font-bold text-[#070707] leading-none whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    top: "47.29%",
                    left: "0%",
                    fontSize: "clamp(20px, 2.4vw, 32px)",
                  }}
                >
                  100 px
                </span>

                {/* Bottom-right "20 px" (Figma: 1097, 647 in 1320×812) */}
                <span
                  className="absolute italic font-bold text-[#070707] leading-none whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    top: "79.68%",
                    left: "83.11%",
                    fontSize: "clamp(20px, 2.4vw, 32px)",
                  }}
                >
                  20 px
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
