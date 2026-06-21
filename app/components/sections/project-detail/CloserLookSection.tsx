import Image from "next/image";
import SectionHeading from "./SectionHeading";

interface MockupItem {
  image: string;
  label: string;
  description: string;
  callout?: {
    barSrc: string;
    barWidth: number;
    top: string;
    direction: "left" | "right" | "below";
  };
}

interface CloserLookSectionProps {
  heading: string;
  headingItalic: string;
  description: string;
  mockups: MockupItem[];
}

/*
  Callout config per mockup index:
  - barSrc: the orange connector SVG
  - anchor: which edge of the phone the callout attaches to
  - top: vertical position on the phone
  - direction: "right" = bar+tooltip extend right from phone,
               "left"  = tooltip+bar extend left from phone
*/
const calloutConfig = [
  {
    barSrc: "/assets/projectdetail/search-by-code-bar.svg",
    barWidth: 123,
    top: "53%",
    direction: "right" as const,
  },
  {
    barSrc: "/assets/projectdetail/tools-bar.svg",
    barWidth: 81,
    top: "83%",
    direction: "right" as const,
  },
  {
    barSrc: "/assets/projectdetail/youtube-tool-bar.svg",
    barWidth: 152,
    top: "18%",
    direction: "left" as const,
  },
];

function CalloutTooltip({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="bg-[#070707] rounded-[10px] px-3 py-2.5 w-[160px] lg:w-[190px] flex-shrink-0">
      <h4
        className="text-xs lg:text-sm font-bold text-white mb-0.5"
        style={{ fontFamily: "var(--font-satoshi)" }}
      >
        {label}
      </h4>
      <p
        className="text-[10px] lg:text-xs text-white/80 leading-normal"
        style={{ fontFamily: "var(--font-satoshi)" }}
      >
        {description}
      </p>
    </div>
  );
}

export default function CloserLookSection({
  heading,
  headingItalic,
  description,
  mockups,
}: CloserLookSectionProps) {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading
          heading={heading}
          headingItalic={headingItalic}
          description={description}
        />

        {/* Mockups composition */}
        <div>
          <div className="flex items-start justify-center lg:justify-between gap-3 lg:gap-0">
            {mockups.map((mockup, index) => {
              const config = mockup.callout ?? calloutConfig[index];
              return (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-[220px] lg:w-[240px] xl:w-[280px]"
                >
                  <Image
                    src={mockup.image}
                    alt={mockup.label}
                    width={760}
                    height={1520}
                    className="w-full h-auto"
                  />

                  {/* Callout: bar + tooltip */}
                  {config && config.direction === "below" && (
                    <div
                      className="absolute hidden lg:flex flex-col items-center z-10"
                      style={{
                        top: config.top,
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      {/* short vertical connector pointing to phone */}
                      <div
                        className="w-[2px] flex-shrink-0 bg-[#ff805e]"
                        style={{ height: 28 }}
                      />
                      <div className="mt-2">
                        <CalloutTooltip
                          label={mockup.label}
                          description={mockup.description}
                        />
                      </div>
                    </div>
                  )}
                  {config && config.direction !== "below" && (
                    <div
                      className="absolute hidden lg:flex items-center z-10"
                      style={{
                        top: config.top,
                        ...(config.direction === "right"
                          ? { left: "100%" }
                          : { right: "100%" }),
                      }}
                    >
                      {config.direction === "right" ? (
                        <>
                          {/* dot on phone side → line → tooltip */}
                          <img
                            src={config.barSrc}
                            alt=""
                            className="h-[11px] flex-shrink-0"
                            style={{ width: config.barWidth }}
                          />
                          <CalloutTooltip
                            label={mockup.label}
                            description={mockup.description}
                          />
                        </>
                      ) : (
                        <>
                          {/* tooltip → line → dot on phone side */}
                          <CalloutTooltip
                            label={mockup.label}
                            description={mockup.description}
                          />
                          <img
                            src={config.barSrc}
                            alt=""
                            className="h-[11px] flex-shrink-0"
                            style={{ width: config.barWidth }}
                          />
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
