"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface TestimonialData {
  id: number;
  logo: string;
  company?: string;
  roleNormal: string;
  roleItalic: string;
  text: string;
  name: string;
  positionNormal: string;
  positionItalic: string;
  avatar: string;
}

interface TestimonialProps {
  testimonials: TestimonialData[];
  autoPlayInterval?: number;
}

export default function Testimonial({
  testimonials,
  autoPlayInterval = 5000,
}: TestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goToSlide = (index: number) => setCurrentIndex(index);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPaused, autoPlayInterval, goToNextSlide]);

  const t = testimonials[currentIndex];

  return (
    <div
      className="bg-white p-[22px] flex flex-col gap-[17px] items-start rounded-[14px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12)]"
      // className="bg-white p-[22px] flex flex-row md:flex-col w-full gap-[17px] items-start rounded-[14px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          // className="flex gap-[36px] items-start w-full"
          className="flex flex-col md:flex-row gap-[20px] md:gap-[36px]  items-start md:items-start w-full"
        >
          {/* Logo column */}

          {/* with border */}
          <div className="flex flex-row items-center justify-center shrink-0 w-auto min-w-0 ">
            <Image
              src={t.logo}
              alt={t.company ?? "Company logo"}
              width={83}
              height={60}
              className="object-contain flex-shrink-0 "
            />

            {t.company && (
              <p
                className="ml-2 text-[20px] text-[#070707] whitespace-nowrap "
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {t.company}
              </p>
            )}
          </div>
          {/* Content column */}
          <div
            className="flex flex-1 flex-col justify-between min-w-0 gap-4 w-full text-center md:text-left"
            style={{ minHeight: "220px" }}
          >
            {/* Role */}
            <div className="flex flex-col gap-[8px] ">
              <div className="border-t border-dashed border-[#cfd1d4]" />
              <p
                className="text-[18px] font-medium text-start text-[#070707]"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                My Role: {t.roleNormal}
                <span
                  className="italic font-medium"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {t.roleItalic}
                </span>
              </p>
              <div className="border-t border-dashed border-[#cfd1d4]" />
            </div>

            {/* my role */}

            <p
              className="text-[16px] text-[#5f6266] leading-normal text-left sm:text-left"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {t.text}
            </p>

            {/* Avatar + Name + Position */}

            <div className="flex flex-col gap-[10px]">
              <div className="border-t border-dashed border-[#cfd1d4]" />

              <div className="flex flex-row items-center gap-[11px]">
                <div className="w-[56px] h-[56px] md:w-[73px] md:h-[73px] rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={73}
                    height={73}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex flex-col items-start">
                  <p
                    className="text-[20px] ft-s font-bold text-[#070707]"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {t.name}
                  </p>

                  <p
                    className="text-[#ff805e]"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    <span className="text-[16px] ft-s font-medium">
                      {t.positionNormal}{" "}
                    </span>
                    <span
                      className="text-[16px] italic font-semibold"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {t.positionItalic}
                    </span>
                  </p>
                </div>
              </div>

              <div className="border-t border-dashed border-[#cfd1d4]" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination dots */}
      <div className="flex gap-[2px] items-center">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              currentIndex === index
                ? "w-[28px] h-[10px] bg-[#070707] rounded-[14px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]"
                : "w-[6px] h-[6px] bg-[#a5a9ae] rounded-[20px] hover:bg-gray-500"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
