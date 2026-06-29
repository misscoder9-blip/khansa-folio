import React from "react";
import Image from "next/image";
import Story from "@/app/components/ui/Story";

interface LogoItem {
  logo: string;
  name: string;
  imageWidth: number;
  imageHeight: number;
  // mobileWidth: number;
  // mobileHeight: number;
}

interface StatData {
  headline: string;
  headlineSuffix?: string; // colored italic suffix e.g. "+" or "%"
  label: string;
  description: string;
}

const stats: StatData[] = [
  {
    headline: "Clients",
    label: "Across the Globe",
    description: "Startups, entrepreneurs, and growing brands.",
  },
  {
    headline: "150",
    headlineSuffix: "+",
    label: "Projects",
    description: "Designed end-to-end digital experiences.",
  },
  {
    headline: "Long-Term",
    label: "Partnerships",
    description: "Many clients return for new product designs.",
  },
];

const logoRows: { logos: LogoItem[]; direction: "ltr" | "rtl" }[] = [
  {
    logos: [
      //     { logo: "/assets/icons/myclients/Logo-Selexi.svg", name: "Selexi", imageWidth: 120, imageHeight: 64,  mobileWidth: 100,
      // mobileHeight: 26, },
      //     { logo: "/assets/icons/myclients/Logo-Zaveur.svg", name: "Zaveur", imageWidth: 155, imageHeight: 42, mobileWidth: 100,
      // mobileHeight: 26, },
      {
        logo: "/assets/icons/myclients/Logo-Selexi.svg",
        name: "Selexi",
        imageWidth: 120,
        imageHeight: 64,
      },
      {
        logo: "/assets/icons/myclients/Logo-Zaveur.svg",
        name: "Zaveur",
        imageWidth: 155,
        imageHeight: 42,
      },
      {
        logo: "/assets/icons/myclients/Logo-Leebai.svg",
        name: "LeebAI",
        imageWidth: 145,
        imageHeight: 50,
      },
    ],
    direction: "ltr",
  },
  {
    logos: [
      {
        logo: "/assets/icons/myclients/Logo-Esculapio.svg",
        name: "Esculapio",
        imageWidth: 125,
        imageHeight: 50,
      },
      {
        logo: "/assets/icons/myclients/Logo-Uloma.svg",
        name: "ULOMA",
        imageWidth: 160,
        imageHeight: 35,
      },
      {
        logo: "/assets/icons/myclients/Logo-Yuniro.svg",
        name: "Yuniro",
        imageWidth: 150,
        imageHeight: 45,
      },
    ],
    direction: "rtl",
  },
];

function StatCard({ stat }: { stat: StatData }) {
  return (
    // <div className="bg-white rounded-[14px] h-[120px] md:h-[104px] sm:h-[161px] p-5 border border-dashed border-[#cfd1d4] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.12)] flex flex-col  justify-between align-bottom ">
    <div className="bg-white rounded-[14px] h-[104px] md:h-[165px] lg:h-[161px] p-5 border border-dashed border-[#cfd1d4] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.12)] flex flex-col  justify-between align-bottom ">
      <div className="flex flex-row items-center justify-between gap-2 md:flex-col md:items-start">
        <h3 className="text-[22px] md:text-[36px] font-bold leading-tight">
          <span
            className="text-[#070707]"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            {stat.headline}
          </span>
          {stat.headlineSuffix && (
            <span
              className="text-[#ff805e] font-black"
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
              }}
            >
              {stat.headlineSuffix}
            </span>
          )}
        </h3>
        <p
          className="text-[12px] md:text-[14px] font-medium text-[#070707]"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          {stat.label}
        </p>
      </div>
      <div>
        <p
          className="text-[11px] md:text-[14px] text-[#5f6266] leading-relaxed "
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          {stat.description}
        </p>
      </div>
    </div>
  );
}

// Logos scroll in alternating directions; stat cards never move.
// Track = 2 copies of logos at 200% width → translateX(-50%) = exactly one full set.
function LogoMarquee({
  logos,
  direction,
}: {
  logos: LogoItem[];
  direction: "ltr" | "rtl";
}) {
  const track = [...logos, ...logos]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden w-full h-[120px] md:h-[161px]">
      <div
        className="marquee-track flex   lg:gap-[9px]  gap-[46px]  h-full lg:w-[200%] w-[310%]  gap-[10px]"
        style={{
          animation: `marquee-${direction} 18s linear infinite`,
        }}
      >
        {track.map((logo, i) => (
          <div
            key={i}
            className="flex-1 lg:bg-white md:bg-white sm-bg-none rounded-[14px] flex items-center justify-center h-full"
          >
            {/* <Image
        src={logo.logo}
        alt={logo.name}
        width={logo.imageWidth}
        height={logo.imageHeight}
        className="object-contain w-[120px] h-[60px] lg:w-auto lg:h-auto"
      /> */}

            <Image
              src={logo.logo}
              alt={logo.name}
              width={logo.imageWidth}
              height={logo.imageHeight}
              className="object-contain"
              // style={{
              //   width: `${logo.mobileWidth}px`,
              //   height: `${logo.mobileHeight}px`,
              // }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_358px] gap-6 items-end">
          {/* Left: Clients Section */}
          <div>
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6 md:mb-14">
              <h2
                className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#070707] tracking-[-1.44px]"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                My
                <span
                  className="italic font-bold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {" "}
                  Clients
                </span>
              </h2>
              <span
                className="text-lg md:text-xl lg:text-[24px] text-[#070707] font-bold"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                @{" "}
                <span
                  className="text-[#ff805e] italic font-bold tracking-[-0.72px]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  2022 - 2025
                </span>
              </span>
            </div>

            {/* Row 1: All 3 stat cards static */}
            <div className="flex flex-col gap-[12px]">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-[9px]">
                {stats.map((stat, i) => (
                  <StatCard key={i} stat={stat} />
                ))}
              </div>

              {/* Rows 2 & 3: Logo marquees scrolling opposite directions */}
              {logoRows.map((row, i) => (
                <LogoMarquee
                  key={i}
                  logos={row.logos}
                  direction={row.direction}
                />
              ))}
            </div>
          </div>

          {/* Right: Process Story Card */}
          {/* <div className="flex items-end justify-end"> */}
          <div className="flex items-end justify-center lg:justify-end lg:items-end md:items-center md:justify-center">
            <Story
              slides={[
                {
                  id: 1,
                  title: "Immersion",
                  description:
                    "I dive into your product and your users, exploring their needs, behaviors, and motivations until the real challenges — and hidden opportunities — become clear.",
                  video: "/assets/videos/process-one.mp4",
                },
                {
                  id: 2,
                  title: "Vision Crafting",
                  description:
                    "I shape a focused UX direction, sketching user flows, journeys, and wireframes, and every feature is carefully researched and every design decision justified.",
                  video: "/assets/videos/process-two.gif",
                },
                {
                  id: 3,
                  title: "Creative Alchemy",
                  description:
                    "Ideas turn into experiences. I transform insights into wireframes, prototypes, and interfaces that elevate the brand, clarify the strategy, and put people first.",
                  video: "/assets/videos/process-three.gif",
                },
                {
                  id: 4,
                  title: "Launch with Impact",
                  description:
                    "Every detail matters. I refine interactions, polish visuals, and deliver a polished product that feels intuitive, engaging, and worth remembering.",
                  video: "/assets/videos/process-four.mp4",
                },
              ]}
              autoPlayInterval={5000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
