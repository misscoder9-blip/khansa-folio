"use client";

import Image from "next/image";
import LazyVideo from "@/app/components/ui/LazyVideo";
import type { ProjectDetail } from "@/app/data/projects";

interface ProjectHeroProps {
  hero: ProjectDetail["hero"];
  projectTitle: string;
}

export default function ProjectHero({ hero, projectTitle }: ProjectHeroProps) {
  return (
    <section className="pt-12 md:pt-20 pb-12 md:pb-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Main two-column: left content + right phone mockup */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[54px] items-start">
          {/* ─── Left Column (text content) ─── */}
          <div className="flex flex-col flex-1 min-w-0">
            {/* Top block: Heading + Description */}
            <div className="flex flex-col gap-[28px] md:gap-[42px] lg:max-w-[878px]">
              {/* Heading */}
              <h1
                className={`text-[32px] md:text-[44px] lg:text-[60px] leading-normal tracking-[-1.8px] ${
                  hero.darkHeading ? "text-[#070707]" : "text-[#5f6266]"
                }`}
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {hero.heading.includes("*") ? (
                  hero.heading.split(/(\*[^*]+\*)/).map((part, i) => {
                    if (part.startsWith("*") && part.endsWith("*")) {
                      return (
                        <span
                          key={i}
                          className="font-bold italic text-[#070707]"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {part.slice(1, -1)}
                        </span>
                      );
                    }
                    return (
                      <span
                        key={i}
                        className={hero.darkHeading ? "font-bold" : "font-normal"}
                      >
                        {part}
                      </span>
                    );
                  })
                ) : (
                  <>
                    <span className={hero.darkHeading ? "font-bold" : "font-normal"}>
                      {hero.heading}{" "}
                    </span>
                    <span
                      className="font-bold italic text-[#070707]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {hero.headingItalic}
                    </span>
                  </>
                )}
              </h1>

              {/* Description */}
              <p
                className="text-[16px] md:text-[18px] lg:text-[20px] text-[#5f6266] leading-normal"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {hero.description}
              </p>
            </div>

            {/* Phone mockup – mobile only (between heading and meta info) */}
            {hero.heroVideo && (
            <div className="block lg:hidden mt-8 flex justify-center">
              {hero.heroMockupFrame ? (
                <div style={{ position: "relative", width: "280px", height: "579px", flexShrink: 0 }}>
                  <div style={{ position: "absolute", left: "11px", top: "10px", width: "258px", height: "563px", borderRadius: "38px", overflow: "hidden" }}>
                    <LazyVideo src={hero.heroVideo} className="w-full h-full object-cover" />
                  </div>
                  <Image src={hero.heroMockupFrame} alt="" fill style={{ objectFit: "contain", pointerEvents: "none" }} />
                </div>
              ) : (
                <div
                  style={{
                    width: "325px",
                    maxWidth: "100%",
                    borderRadius: "54.6px",
                    overflow: "hidden",
                    boxShadow: "0px 0px 34px 1.7px rgba(0,0,0,0.4)",
                  }}
                >
                  <LazyVideo src={hero.heroVideo} className="w-full" />
                </div>
              )}
            </div>
            )}

            {/* Bottom block: Two sub-columns (Role/WhatIs/Team + Timeline/Deliverables) */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-[78px] mt-[40px] md:mt-[61px]">
              {/* ── Left sub-column: Role → What is → Team ── */}
              <div className="flex flex-col gap-[50px] md:gap-[73px] md:w-[422px] flex-shrink-0">
                {/* Role */}
                <div className="flex flex-col gap-[12px]">
                  <h3
                    className="text-[22px] md:text-[28px] font-bold text-[#070707] leading-normal"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    Role
                  </h3>
                  <p
                    className="text-[16px] md:text-[20px] text-[#5f6266] leading-normal"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {hero.role}
                  </p>
                </div>

                {/* What is / Platform Capabilities */}
                <div className="flex flex-col gap-[12px]">
                  <h3
                    className="text-[22px] md:text-[28px] font-bold text-[#070707] leading-normal"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {hero.whatIsLabel ?? `What is ${projectTitle}?`}
                  </h3>
                  {hero.whatIs && (
                    <p
                      className="text-[16px] md:text-[20px] text-[#5f6266] leading-normal whitespace-pre-line"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {hero.whatIs}
                    </p>
                  )}
                  {hero.whatIsPoints && hero.whatIsPoints.length > 0 && (
                    <ul
                      className="list-disc pl-[22px] flex flex-col gap-[6px] text-[16px] md:text-[20px] text-[#5f6266] leading-normal"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {hero.whatIsPoints.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Team */}
                <div className="flex flex-col gap-[12px]">
                  <h3
                    className="text-[22px] md:text-[28px] font-bold text-[#070707] leading-normal"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    Team
                  </h3>
                  <div className="flex items-center gap-[13px]">
                    {/* Arrow icons column */}
                    <div className="flex flex-col gap-[8px] flex-shrink-0">
                      {hero.team.map((_, i) => (
                        <Image
                          key={i}
                          src="/assets/projectdetail/team-arrow.svg"
                          alt=""
                          width={37}
                          height={15}
                          className="w-[30px] md:w-[37px] h-auto"
                        />
                      ))}
                    </div>
                    <div
                      className="text-[16px] md:text-[20px] text-[#5f6266] leading-normal"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {hero.team.map((line, i) => (
                        <p key={i} className="mb-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Right sub-column: Timeline → Deliverables ── */}
              <div className="flex flex-col gap-[70px] md:gap-[108px] flex-1">
                {/* Timeline */}
                <div className="flex flex-col gap-[12px]">
                  <h3
                    className="text-[22px] md:text-[28px] font-bold text-[#070707] leading-normal"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    Timeline
                  </h3>
                  <p
                    className="text-[16px] md:text-[20px] text-[#5f6266] leading-normal"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {hero.timeline}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="flex flex-col gap-[12px]">
                  <h3
                    className="text-[22px] md:text-[28px] font-bold text-[#070707] leading-normal"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    Deliverables
                  </h3>
                  <div className="flex flex-wrap gap-[14px]">
                    {hero.deliverables.map((d) => (
                      <span
                        key={d}
                        className="bg-white px-[20px] py-[10px] rounded-[222px] text-[14px] md:text-[18px] text-[#070707] leading-normal whitespace-nowrap"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Right Column: Phone Mockup with Video (desktop only) ─── */}
          {hero.heroVideo && (
            <div className="hidden lg:flex items-start justify-end lg:mt-[110px] flex-shrink-0">
              {hero.heroMockupFrame ? (
                <div style={{ position: "relative", width: "375px", height: "775px", flexShrink: 0 }}>
                  <div style={{ position: "absolute", left: "15px", top: "13px", width: "345px", height: "754px", borderRadius: "51px", overflow: "hidden" }}>
                    <LazyVideo src={hero.heroVideo} className="w-full h-full object-cover" />
                  </div>
                  <Image src={hero.heroMockupFrame} alt="" fill style={{ objectFit: "contain", pointerEvents: "none" }} />
                </div>
              ) : (
                <div
                  style={{
                    width: "375px",
                    borderRadius: "63px",
                    overflow: "hidden",
                    boxShadow: "0px 0px 40px 2px rgba(0,0,0,0.4)",
                  }}
                >
                  <LazyVideo src={hero.heroVideo} className="w-full" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
