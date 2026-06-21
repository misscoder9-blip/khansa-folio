"use client";

import Image from "next/image";
import LazyVideo from "@/app/components/ui/LazyVideo";
import SectionHeading from "./SectionHeading";

interface MobileFirstSectionProps {
  heading: string;
  headingItalic: string;
  description: string;
  video: string;
  frame?: string;
  image?: string;
  websiteVideo?: string;
}

export default function MobileFirstSection({
  heading,
  headingItalic,
  description,
  video,
  frame,
  image,
  websiteVideo,
}: MobileFirstSectionProps) {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading
          heading={heading}
          headingItalic={headingItalic}
          description={description}
        />

        {/* Website screenshot/video (LapLocal-style), or phone mockup with video */}
        {websiteVideo ? (
          <div className="rounded-[16px] md:rounded-[24px] border-[5px] md:border-[8px] border-[#070707] overflow-hidden">
            <LazyVideo src={websiteVideo} className="w-full h-auto block" />
          </div>
        ) : image ? (
          <div className="rounded-[16px] md:rounded-[24px] overflow-hidden">
            <Image
              src={image}
              alt=""
              width={1440}
              height={900}
              className="w-full h-auto"
              priority={false}
            />
          </div>
        ) : (
        <div className="flex justify-center">
          {frame ? (
            <div
              style={{
                position: "relative",
                width: "375px",
                maxWidth: "100%",
                aspectRatio: "375 / 800",
              }}
            >
              {/* Video sits behind frame, masked to screen area */}
              <div
                style={{
                  position: "absolute",
                  left: "4.5%",
                  top: "2.7%",
                  width: "91%",
                  height: "94.6%",
                  borderRadius: "10%",
                  overflow: "hidden",
                }}
              >
                <LazyVideo
                  src={video}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Transparent phone frame on top */}
              <Image
                src={frame}
                alt=""
                fill
                style={{ objectFit: "contain", pointerEvents: "none" }}
                sizes="375px"
              />
            </div>
          ) : (
            <div
              style={{
                width: "375px",
                maxWidth: "100%",
                borderRadius: "63px",
                overflow: "hidden",
                boxShadow: "0px 0px 40px 2px rgba(0,0,0,0.4)",
              }}
            >
              <LazyVideo src={video} className="w-full" />
            </div>
          )}
        </div>
        )}
      </div>
    </section>
  );
}
