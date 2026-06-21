"use client";

import Image from "next/image";
import LazyVideo from "@/app/components/ui/LazyVideo";
import type { Callout } from "@/app/data/projects";

interface MediaSize {
  width: number;
  height: number;
  containerHeight: number;
  top?: number;
}

interface SolutionShowcaseProps {
  heading: string;
  headingItalic: string;
  description: string;
  video?: string;
  image?: string;
  mediaSize?: MediaSize;
  callouts: Callout[];
}

const DEFAULT_MEDIA: MediaSize = {
  width: 498,
  height: 663,
  containerHeight: 663,
  top: 0,
};

/* ── Callout card ── */
function CalloutCard({ label, description }: { label: string; description: string }) {
  return (
    <div
      className="border-2 border-[#A5A9AE] rounded-[12px] px-[16px] py-[12px] flex flex-col gap-[4px]"
      style={{ width: 233 }}
    >
      <p
        className="text-[16px] font-medium text-black leading-normal"
        style={{ fontFamily: "var(--font-satoshi)" }}
      >
        {label}
      </p>
      <p
        className="text-[12px] text-[#5f6266] leading-normal"
        style={{ fontFamily: "var(--font-satoshi)" }}
      >
        {description}
      </p>
    </div>
  );
}

export default function SolutionShowcase({
  heading,
  headingItalic,
  description,
  video,
  image,
  mediaSize,
  callouts,
}: SolutionShowcaseProps) {
  const leftCallout = callouts.find((c) => c.side === "left");
  const rightCallout = callouts.find((c) => c.side === "right");

  const media = { ...DEFAULT_MEDIA, ...(mediaSize ?? {}) };
  const halfMedia = media.width / 2;

  const renderMedia = (className: string) =>
    image ? (
      <Image
        src={image}
        alt=""
        width={media.width}
        height={media.height}
        className={`${className} object-contain`}
      />
    ) : video ? (
      <LazyVideo src={video} className={`${className} object-cover`} />
    ) : null;

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[50px] md:gap-[80px]">
          {/* ── Heading + Description ── */}
          <div className="flex flex-col gap-[20px] md:gap-[32px]">
            <h2 className="text-[28px] md:text-[40px] lg:text-[48px] tracking-[-1.44px] leading-normal text-[#070707]">
              <span
                className="font-bold"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {heading}{" "}
              </span>
              <span
                className="font-bold italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {headingItalic}
              </span>
            </h2>
            <p
              className="text-[16px] md:text-[20px] text-[#5f6266] leading-normal"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {description}
            </p>
          </div>

          {/* ── Desktop: Recording + positioned callouts ── */}
          <div className="hidden xl:block relative" style={{ height: media.containerHeight }}>
            {/* Media – centered */}
            <div
              className="absolute left-1/2 -translate-x-1/2 overflow-hidden rounded-[12px]"
              style={{ width: media.width, height: media.height, top: media.top ?? 0 }}
            >
              {renderMedia("w-full h-full")}
            </div>

            {/* Left-side callout */}
            {leftCallout && (
              <div
                className="absolute flex items-center"
                style={{ right: `calc(50% + ${halfMedia}px)`, top: leftCallout.top ?? 490 }}
              >
                <CalloutCard
                  label={leftCallout.label}
                  description={leftCallout.description}
                />
                <Image
                  src="/assets/projectdetail/usage-arrow.svg"
                  alt=""
                  width={101}
                  height={11}
                  className="flex-shrink-0"
                />
              </div>
            )}

            {/* Right-side callout */}
            {rightCallout && (
              <div
                className="absolute flex items-center"
                style={{ left: `calc(50% + ${halfMedia}px)`, top: rightCallout.top ?? 300 }}
              >
                <Image
                  src="/assets/projectdetail/billing-arrow.svg"
                  alt=""
                  width={101}
                  height={11}
                  className="flex-shrink-0"
                />
                <CalloutCard
                  label={rightCallout.label}
                  description={rightCallout.description}
                />
              </div>
            )}
          </div>

          {/* ── Mobile / Tablet: stacked layout ── */}
          <div className="xl:hidden flex flex-col items-center gap-8">
            {/* Media */}
            <div
              className="overflow-hidden rounded-[12px] w-full max-w-[400px]"
              style={{ aspectRatio: `${media.width}/${media.height}` }}
            >
              {renderMedia("w-full h-full")}
            </div>

            {/* Callout cards */}
            {callouts.map((callout, i) => (
              <div
                key={i}
                className="border-2 border-[#A5A9AE] rounded-[12px] px-[16px] py-[12px] flex flex-col gap-[4px] w-full max-w-[300px]"
              >
                <p
                  className="text-[16px] font-medium text-black leading-normal"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {callout.label}
                </p>
                <p
                  className="text-[12px] text-[#5f6266] leading-normal"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
