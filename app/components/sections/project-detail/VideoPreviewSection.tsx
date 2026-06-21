"use client";

import LazyVideo from "@/app/components/ui/LazyVideo";
import type { VideoPreviewPanel } from "@/app/data/projects";

interface VideoPreviewSectionProps {
  panels: VideoPreviewPanel[];
}

/* Single panel: Challenges | Video Card | Solutions */
function Panel({ panel }: { panel: VideoPreviewPanel }) {
  return (
    <div className="flex gap-[2px] items-start justify-center">
      {/* Left: Identified UX Challenges */}
      <div className="flex flex-col gap-[29px] items-center justify-center py-6 w-[190px] flex-shrink-0">
        <div className="w-full">
          <p
            className="text-[16px] font-medium text-[#070707] leading-normal"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Identified UX
          </p>
          <p
            className="text-[28px] font-semibold italic text-[#070707]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Challenges
          </p>
        </div>
        <div className="flex items-center gap-3 w-full">
          <div className="flex flex-col items-end text-right w-[121px] flex-shrink-0">
            <p
              className="text-[14px] font-medium text-[#070707] leading-normal"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {panel.challengeTitle}
            </p>
            <p
              className="text-[12px] text-[#5f6266] leading-normal"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {panel.challengeDescription}
            </p>
          </div>
          <div className="flex items-center gap-[1.5px] flex-shrink-0">
            <img
              src="/assets/projectdetail/video-preview-bar.svg"
              alt=""
              className="h-[94px] w-[3px]"
            />
            <img
              src="/assets/projectdetail/video-right-to-left-arrow.svg"
              alt=""
              className="w-[51px] h-[6px]"
            />
          </div>
        </div>
      </div>

      {/* Center: Video Card */}
      <div className="flex-shrink-0 w-[231px] rounded-[12px] overflow-hidden shadow-[0px_8px_36px_0px_rgba(0,0,0,0.25)]">
        <LazyVideo
          src={panel.video}
          className="w-full object-cover"
        />
      </div>

      {/* Right: Implemented UX Solutions */}
      <div className="flex flex-col gap-[31px] items-end py-6 w-[190px] flex-shrink-0">
        <div className="w-full text-right">
          <p
            className="text-[16px] font-medium text-[#070707] leading-normal"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Implemented UX
          </p>
          <p
            className="text-[28px] font-semibold italic text-[#070707]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Solutions
          </p>
        </div>
        <div className="flex items-center gap-3 w-full">
          <div className="flex items-center gap-[1.5px] flex-shrink-0">
            <img
              src="/assets/projectdetail/video-rigt-to-left-arrow.svg"
              alt=""
              className="w-[51px] h-[6px]"
            />
            <img
              src="/assets/projectdetail/video-preview-bar.svg"
              alt=""
              className="h-[94px] w-[3px]"
            />
          </div>
          <div className="flex flex-col items-end text-right w-[121px] flex-shrink-0">
            <p
              className="text-[14px] font-medium text-[#070707] leading-normal"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {panel.solutionTitle}
            </p>
            <p
              className="text-[12px] text-[#5f6266] leading-normal"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {panel.solutionDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VideoPreviewSection({
  panels,
}: VideoPreviewSectionProps) {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Badge */}
        <div className="flex justify-center mb-14 md:mb-20">
          <div className="bg-[#ff805e] border border-[#ff805e] px-[60px] py-[20px] rounded-[80px]">
            <span
              className="text-[48px] font-medium text-[#070707] tracking-[-1.44px]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Video Preview
            </span>
          </div>
        </div>

        {/* Desktop: Panels side by side with center bar */}
        <div className="hidden xl:flex items-center justify-between">
          {panels[0] && <Panel panel={panels[0]} />}

          {/* Vertical center bar with dots */}
          <img
            src="/assets/projectdetail/video-preview-center-bar.svg"
            alt=""
            className="h-[455px] w-[16px] flex-shrink-0"
          />

          {panels[1] && <Panel panel={panels[1]} />}
        </div>

        {/* Tablet: Panels stacked */}
        <div className="hidden md:flex xl:hidden flex-col items-center gap-16">
          {panels.map((panel, i) => (
            <Panel key={i} panel={panel} />
          ))}
        </div>

        {/* Mobile: Simplified stacked layout */}
        <div className="md:hidden flex flex-col gap-12">
          {panels.map((panel, index) => (
            <div key={index} className="flex flex-col gap-6">
              {/* Video */}
              <div className="rounded-[12px] overflow-hidden shadow-[0px_8px_36px_0px_rgba(0,0,0,0.25)]">
                <LazyVideo
                  src={panel.video}
                  className="w-full object-cover"
                />
              </div>

              {/* Challenges */}
              <div>
                <p
                  className="text-[16px] font-medium text-[#070707]"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  Identified UX
                </p>
                <p
                  className="text-[24px] font-semibold italic text-[#070707] mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Challenges
                </p>
                <div className="border border-[#cfd1d4] rounded-[12px] px-4 py-3">
                  <p
                    className="text-[14px] font-medium text-[#070707]"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {panel.challengeTitle}
                  </p>
                  <p
                    className="text-[12px] text-[#5f6266]"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {panel.challengeDescription}
                  </p>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <p
                  className="text-[16px] font-medium text-[#070707]"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  Implemented UX
                </p>
                <p
                  className="text-[24px] font-semibold italic text-[#070707] mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Solutions
                </p>
                <div className="border border-[#cfd1d4] rounded-[12px] px-4 py-3">
                  <p
                    className="text-[14px] font-medium text-[#070707]"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {panel.solutionTitle}
                  </p>
                  <p
                    className="text-[12px] text-[#5f6266]"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {panel.solutionDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
