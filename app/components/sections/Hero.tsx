import React from "react";
import VideoCard from "@/app/components/ui/VideoCard";
import StatsCard from "@/app/components/ui/StatsCard";
import ServicesCard from "@/app/components/ui/ServicesCard";

export default function Hero() {
  return (
    <section className="pt-4 md:pt-6 px-4 sm:px-6 lg:px-[60px] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Heading Section */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            {/* Left: Hero Title */}
            <h1 className="flex-shrink-0">
              <span
                className="font-semibold text-[48px] md:text-[96px] lg:text-[128px] leading-[48px] md:leading-[96px] lg:leading-[128px] tracking-[-1.44px] md:tracking-[-2.88px] lg:tracking-[-3.84px] text-[#070707] whitespace-nowrap"
                style={{ fontFamily: "var(--font-craftwork)" }}
              >
                Khansa
              </span>
              <span
                className="font-semibold italic text-[48px] md:text-[96px] lg:text-[128px] leading-[48px] md:leading-[96px] lg:leading-[128px] tracking-[-1.44px] md:tracking-[-2.88px] lg:tracking-[-3.84px] text-[#070707]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                folio
              </span>
            </h1>

            {/* Right: Description Text */}
            <p
              className="text-[16px] md:text-[18px] text-[#5f6266] text-left lg:text-right leading-normal w-full lg:w-[585px]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              I design clean, user friendly, and high impact digital experiences that help
              businesses stand out, connect with users, and grow with confidence.
            </p>
          </div>
        </div>

        {/* Cards Grid - Horizontal layout with fixed height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 w-full">
          {/* Video Card - 3 columns - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-3 lg:h-[392px]">
            <VideoCard videoSrc="/assets/videos/PinDown.mp4" />
          </div>

          {/* Stats Card - 6 columns (wider) */}
          <div className="lg:col-span-6 lg:h-[392px]">
            <StatsCard
              yearsOfExperience={4}
              projectsCompleted={150}
              brandsHelped={95}
              rating={5}
            />
          </div>

          {/* Services Section - 3 columns */}
          <div className="lg:col-span-3 lg:h-[392px]">
            <ServicesCard />
          </div>
        </div>
      </div>
    </section>
  );
}
