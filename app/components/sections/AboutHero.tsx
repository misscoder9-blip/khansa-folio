"use client";

import React from "react";
import Image from "next/image";
import StoryCarousel from "@/app/components/ui/StoryCarousel";

export default function AboutHero() {
  return (
    <section className="pt-12 pb-12 md:pt-20 md:pb-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto ">
        {/* About me Label */}
        <h3
          className="text-base md:text-2xl font-bold mb-4 text-[#070707]"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          About{" "}
          <span
            className="text-[#ff805e]"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            me
          </span>
        </h3>

        {/* Main Heading */}
        <h1
          className="text-2xl md:text-3xl lg:text-4xl xl:text-[60px] font-normal text-[#5f6266] leading-[1.3] mb-4 max-w-5xl"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          Built for products that need more than just{" "}
          <span
            className="italic font-bold text-[#070707]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            a pretty interface..
          </span>
        </h1>

        {/* Profile Images Stack - Overlapping avatars */}
        <div className="flex items-center -space-x-[21px] md:-space-x-[30px] mb-4">
          {[
            "/assets/images/Profile_1.png",
            "/assets/images/Profile_2.png",
            "/assets/images/Profile_3.png",
            "/assets/images/Profile_4.png",
          ].map((src, index) => (
            <div
              key={index}
              className="relative w-[40px] h-[40px] md:w-[54px] md:h-[54px] rounded-full border border-white overflow-hidden bg-gray-200"
              style={{ zIndex: index }}
            >
              <Image
                src={src}
                alt={`Profile ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
          {/* 100+ badge */}
          <div
            className="w-[40px] h-[40px] md:w-[54px] md:h-[54px] rounded-full bg-[#070707] flex items-center justify-center border border-white"
            style={{ zIndex: 4 }}
          >
            <span
              className="text-[11px] md:text-[14px] font-black italic text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              100+
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-xs md:text-2xl text-[#5f6266] leading-relaxed mb-10 max-w-4xl"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          
          I design digital experiences that are clear, strategic, and built to perform. 
          My work is rooted in real product thinking solving messy flows, simplifying 
          complexity, and creating interfaces people can actually use with ease.{" "}
        </p>

        {/* Mobile Who I Am Card */}
        <div className="lg:hidden bg-[#070707] rounded-[14px] px-4 py-6 flex flex-col">
          <div className="flex flex-col gap-9">
            {/* Header */}
            <div className="flex flex-col">
              <div className="flex items-end gap-[3px]">
                <h3
                  className="text-[20px] tracking-[-0.6px]"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    lineHeight: "normal",
                  }}
                >
                  <span className="text-[#EEF1F5] font-bold" style={{ fontFamily: "var(--font-playfair)" }}>Who</span>
                  <span className="text-[#FF805E] italic font-bold" style={{ fontFamily: "var(--font-playfair)" }}> I am</span>
                </h3>
                {/* Video */}
                <div
                  className="rounded-lg overflow-hidden"
                  style={{
                    width: "52px",
                    height: "28px",
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ mixBlendMode: "exclusion" }}
                  >
                    <source
                      src="/assets/videos/PinDownAbout.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <h2
                className="text-[32px] tracking-[-0.96px]"
                style={{ fontFamily: "var(--font-satoshi)", lineHeight: "normal" }}
              >
                <span className="text-[#F8F9FA] font-normal"> A little about me,</span>
                <span
                  className="text-white italic font-bold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {" "}without the fluff.
                </span>
              </h2>
            </div>

            {/* Bio Text */}
            <p
              className="text-[#A5A9AE] text-[14px] font-normal leading-normal"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
             I'm Khansa, a UI/UX Designer focused on creating digital products that do more than just look polished.
              <br /><br />
              I pay attention to the friction, the weak flows, and the details others often miss then turn them into experiences that feel cleaner, sharper, and easier to use.
              <br /><br />
            For me, design isn't just about how things look. It's about creating work that feels clear, thoughtful, and hard to ignore.
            <br /> <br />
            I'm not here to add noise.
            <br /><br />
            I'm here to create work that feels clear, intentional,
            <br /> and hard to overlook.
            </p>
          </div>

          {/* Signature - Mobile */}
          <div className="flex justify-end mt-8">
            <Image
              src="/assets/images/signature.svg"
              alt="Signature"
              width={63.474}
              height={37}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Desktop Cards Section */}
        <div className="hidden lg:grid lg:grid-cols-[358px_1fr] gap-4 h-[820px] lg:gap-6">
          {/* Story Carousel Card */}
          <StoryCarousel />

          {/* About Me Card */}
          <div className="bg-[#070707] rounded-2xl p-6 md:p-8  relative overflow-hidden">
            {/* Header with video */}
            <div className="flex items-center gap-1 mb-3">
              <h3
                className="text-[#EEF1F5] text-[24px] font-bold"
                style={{
                  fontFamily: "var(--font-playfair)",
                  lineHeight: "normal",
                  letterSpacing: "-0.72px",
                }}
              >
                Who{" "}
                <span
                  className="text-[#FF805E] italic"
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  I am
                </span>
              </h3>

              {/* Video */}
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  width: "52px",
                  height: "28px",
                  aspectRatio: "13/7",
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ mixBlendMode: "exclusion" }}
                >
                  <source
                    src="/assets/videos/PinDownAbout.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <h2 className="mb-12">
              <span
                className="text-[#F8F9FA] text-[60px] font-normal"
                style={{
                  fontFamily: "var(--font-satoshi)",
                  lineHeight: "normal",
                  letterSpacing: "-1.8px",
                }}
              >
                A little about me,{" "}
              </span>
              <span
                className="text-white text-[60px] italic font-bold"
                style={{
                  fontFamily: "var(--font-playfair)",
                  lineHeight: "normal",
                  letterSpacing: "-1.8px",
                }}
              >
                without the fluff.
              </span>
            </h2>
            <p
              className="text-[#A5A9AE] text-[24px] font-normal mb-5"
              style={{
                fontFamily: "var(--font-satoshi)",
                lineHeight: "normal",
                alignSelf: "stretch",
              }}
            >
             I'm Khansa, a UI/UX Designer focused on creating digital products that do more than just look polished.{" "}
            </p>
            <p
              className="text-[#A5A9AE] text-[24px] font-normal mb-5"
              style={{
                fontFamily: "var(--font-satoshi)",
                lineHeight: "normal",
                alignSelf: "stretch",
              }}
            >
              I pay attention to the friction, the weak flows, and the details others often miss then turn them into experiences that feel cleaner, sharper, and easier to use.
            </p>
            <p
              className="text-[#A5A9AE] text-[24px] font-normal mb-8"
              style={{
                fontFamily: "var(--font-satoshi)",
                lineHeight: "normal",
                alignSelf: "stretch",
              }}
            >
              For me, design isn't just about how things look. It's about creating work that feels clear, thoughtful, and hard to ignore.
            </p>
<p
              className="text-[#A5A9AE] text-[24px] font-normal mb-8"
              style={{
                fontFamily: "var(--font-satoshi)",
                lineHeight: "normal",
                alignSelf: "stretch",
              }}
            >
              I'm not here to add noise.
            </p>

              <p
              className="text-[#A5A9AE] text-[24px] font-normal mb-8"
              style={{
                fontFamily: "var(--font-satoshi)",
                lineHeight: "normal",
                alignSelf: "stretch",
              }}
            >
              I'm here to create work that feels clear, intentional, and <br />hard to overlook.
            </p>

            {/* Signature */}
            <div className="absolute bottom-6 right-6">
              <Image
                src="/assets/images/signature.svg"
                alt="Signature"
                width={148.573}
                height={86.605}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
