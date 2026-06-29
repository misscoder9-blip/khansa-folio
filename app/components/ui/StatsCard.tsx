import React from "react";
import Image from "next/image";
import Card from "./Card";

interface StatsCardProps {
  yearsOfExperience: number;
  projectsCompleted: number;
  brandsHelped: number;
  rating: number;
}

export default function StatsCard({
  yearsOfExperience = 4,
  projectsCompleted = 150,
  brandsHelped = 95,
  rating = 5,
}: StatsCardProps) {
  const profileImages = [
    "/assets/images/Profile_1.png",
    "/assets/images/Profile_2.png",
    "/assets/images/Profile_3.png",
    "/assets/images/Profile_4.png",
  ];

  return (
    <Card className="bg-[#070707] text-white overflow-hidden h-full">
      <div className="p-6 md:p-8 h-full flex flex-col justify-between">
        {/* Years of Experience */}
        <div className="relative flex  flex-row items-center lg:items-center justify-between gap-4 lg:gap-0">
          <div className="flex flex-col gap-3 w-full lg:w-auto items-start  text-start text-left sm:pl-3 lg:pl-2 pb-3">
            <p
              className="text-[36px] md:text-[48px] font-black italic text-[#ff805e] leading-normal tracking-[-1.08px] md:tracking-[-1.44px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {yearsOfExperience}+
            </p>
            <div className="flex flex-col gap-[6px] text-start text-left">
              <p
                className=" ft-exp text-[18px] md:text-[24px] text-white leading-normal whitespace-nowrap text-start text-left"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                Year of{" "}
                <span
                  className="font-medium italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  experience
                </span>
              </p>
              {/* <p className="text-[12px] text-[#A5A9AE] w-[200px] md:w-[250px]">Designing thoughtful and scalable digital experiences.</p> */}
              <p className=" hidden lg:block  text-[12px] text-[#A5A9AE] w-[200px] md:w-[250px]">
                Designing thoughtful and scalable digital experiences.
              </p>
            </div>
          </div>

          <div className="h-[80px] md:h-[107px] w-0 border-l border-dotted border-gray-600"></div>

          {/* Projects Completed */}

          <div className="flex flex-col gap-3 w-full md:w-auto  items-start  text-start  text-left lg:pl-6 sm:pl-3 sm: pb-3">
            <p
              className="text-[36px] md:text-[48px] font-black italic text-[#ff805e] text-start  text-left leading-normal tracking-[-1.08px] md:tracking-[-1.44px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {projectsCompleted}+
            </p>
            <div className="flex flex-col gap-[6px]">
              <p
                className=" ft-exp text-[18px] md:text-[24px] text-white leading-normal whitespace-nowrap text-start  text-left"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                Project{" "}
                <span
                  className="font-medium italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  completed
                </span>
              </p>
              {/* <p className="text-[12px] text-[#A5A9AE] w-[200px] md:w-[250px]">Across websites, mobile apps, dashboards, and platforms.</p> */}
              <p className="hidden lg:block text-[12px] text-[#A5A9AE] w-[200px] md:w-[250px]">
                Across websites, mobile apps, dashboards, <br /> and platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal dotted divider */}
        <div className="border-t border-dotted border-gray-600"></div>

        {/* Bottom Review Section - Stacks vertically on mobile */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-5 pt-2">
          {/* Profile Images Stack - Overlapping avatars */}
          <div className="sm: mt-2 flex items-center -space-x-[24px] md:-space-x-[30px]">
            {profileImages.map((src, index) => (
              <div
                key={index}
                className="relative w-[44px] h-[44px] md:w-[54px] md:h-[54px] rounded-full border border-white overflow-hidden"
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
              className="w-[44px] h-[44px] md:w-[54px] md:h-[54px] rounded-full bg-[#070707] flex items-center justify-center border border-white"
              style={{ zIndex: profileImages.length }}
            >
              <span
                className="text-[12px] md:text-[14px] font-black italic text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                100+
              </span>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-1 lg:gap-0.5">
            {/* Star Rating - 4 full stars + 1 half star */}
            <div className="flex gap-0.5 h-[13px] mb-1 lg:mb-0.5">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  src="/assets/icons/Star.svg"
                  alt="Star"
                  width={13}
                  height={13}
                />
              ))}
              {/* Half star */}
              <Image
                src="/assets/icons/Star-half.svg"
                alt="Half Star"
                width={13}
                height={13}
              />
            </div>

            <p
              className="text-white leading-normal"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              <span className="text-[16px] md:text-[18px]">I've helped </span>
              <span
                className="text-[20px] md:text-[24px] font-semibold italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {brandsHelped}+
              </span>
              <span
                className="text-[16px] md:text-[18px] font-semibold italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {" "}
                brands
              </span>
              <span className="text-[16px] md:text-[18px]">
                {" "}
                elevate their{" "}
              </span>
              <span
                className="text-[16px] md:text-[18px] font-semibold italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                businesses
              </span>
              <span className="text-[16px] md:text-[18px]">.</span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
