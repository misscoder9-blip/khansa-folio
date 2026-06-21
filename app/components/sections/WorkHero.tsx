import React from "react";

export default function WorkHero() {
  return (
    <section className="pt-12 md:pt-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 md:gap-[42px]">
        {/* Subtitle + Main Heading */}
        <div className="flex flex-col gap-1 md:gap-[10px] max-w-4xl">
          {/* Subtitle */}
          <p
            className="text-2xl text-[#070707] font-bold"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            My{" "}
            <span
              className="italic font-bold text-[#ff805e] tracking-[-0.72px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Portfolio
            </span>
          </p>

          {/* Main Heading */}
          <p className="tracking-[-0.72px] md:tracking-[-1.8px]">
            <span
              className="text-base md:text-[60px] font-normal text-[#5f6266] leading-normal"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              A Collection of,{" "}
            </span>
            <span
              className="text-base md:text-[60px] font-normal text-[#5f6266] leading-normal md:tracking-[-0.48px]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Purposeful{" "}
            </span>
            <span
              className="text-[32px] md:text-[60px] font-bold text-[#070707] leading-normal"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Interface
            </span>
            <span
              className="text-[32px] md:text-[60px] font-bold italic text-[#070707] leading-normal"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              . Completed 150+ Projects
            </span>
          </p>
        </div>

        {/* Description */}
        <p
          className="text-base md:text-2xl font-normal text-[#5f6266] leading-normal max-w-4xl"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          Blending strategy, design, and execution to create thoughtful work
          that doesn&apos;t just look good — it works hard and makes an impact.
        </p>
      </div>
    </section>
  );
}
