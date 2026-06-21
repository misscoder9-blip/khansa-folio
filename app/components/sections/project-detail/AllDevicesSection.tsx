"use client";

import LazyVideo from "@/app/components/ui/LazyVideo";
import SectionHeading from "./SectionHeading";

interface AllDevicesSectionProps {
  heading: string;
  headingItalic: string;
  description: string;
  macbookVideo: string;
  phoneVideo: string;
}

export default function AllDevicesSection({
  heading,
  headingItalic,
  description,
  macbookVideo,
  phoneVideo,
}: AllDevicesSectionProps) {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading
          heading={heading}
          headingItalic={headingItalic}
          description={description}
        />

        {/* Devices */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-12">
          {/* MacBook Pro with video */}
          <div className="relative w-full lg:flex-1 min-w-0">
            <img
              src="/assets/projectdetail/MacBook-Pro-device.svg"
              alt=""
              className="w-full h-auto"
            />
            <div
              className="absolute overflow-hidden rounded-[6px] md:rounded-[10px]"
              style={{
                top: "6.3%",
                left: "9.9%",
                width: "80.2%",
                height: "83.1%",
              }}
            >
              <LazyVideo
                src={macbookVideo}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* iPhone — the video is an edge-to-edge screen recording with a stray
              export border, so it sits inside a CSS bezel; the inner clip + slight
              scale hide the baked border and give clean rounded screen corners. */}
          <div className="relative w-[240px] md:w-[280px] lg:w-[314px] flex-shrink-0">
            <div className="bg-[#0a0a0a] rounded-[44px] p-[7px] lg:p-[9px] shadow-[0px_0px_40px_2px_rgba(0,0,0,0.35)]">
              <div className="rounded-[37px] overflow-hidden">
                <LazyVideo
                  src={phoneVideo}
                  className="w-full h-auto block scale-[1.035] origin-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
