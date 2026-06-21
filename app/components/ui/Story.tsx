"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProcessStage {
  id: number;
  title: string;
  description: string;
  video?: string;
  icon?: string;
}

interface StoryProps {
  slides: ProcessStage[];
  autoPlayInterval?: number;
}

export default function Story({ slides, autoPlayInterval = 5000 }: StoryProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance slides
  useEffect(() => {
    // Clear any existing timers
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    // Reset progress
    setProgress(0);

    // Progress animation
    const startTime = Date.now();
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / autoPlayInterval) * 100, 100);
      setProgress(newProgress);
    }, 50);

    // Slide advancement timer
    slideTimerRef.current = setTimeout(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, autoPlayInterval);

    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [currentSlide, slides.length, autoPlayInterval]);

  // Play video when slide changes (only for MP4s, GIFs auto-play)
  useEffect(() => {
    const currentVideo = slides[currentSlide]?.video;
    if (videoRef.current && currentVideo && !currentVideo.endsWith(".gif")) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play might be blocked by browser
        });
      }
    }
  }, [currentSlide, slides]);

  return (
    <div
      className="bg-[#070707] rounded-[14px] overflow-hidden relative border-[5px] border-white flex flex-col"
      style={{
        width: "358px",
        minHeight: "621px",
        boxShadow: "0px 0px 40px 2px rgba(0,0,0,0.4)",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 relative flex flex-col"
        >
          {/* Background Video/GIF - Fixed Size, Left Aligned */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: "17px",
              top: "200px",
              width: "300px",
              height: currentSlide === 3 ? "500px" : "300px",
            }}
          >
            {slides[currentSlide].video &&
              (slides[currentSlide].video.endsWith(".gif") ? (
                <img
                  src={slides[currentSlide].video}
                  alt=""
                  className="w-full h-full object-cover"
                  key={`gif-${currentSlide}`}
                />
              ) : (
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  key={`video-${currentSlide}`}
                >
                  <source src={slides[currentSlide].video} type="video/mp4" />
                </video>
              ))}
          </div>

          {/* Gradient Overlay */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-5px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.89) 0%, rgba(0,0,0,0) 75.443%)",
            }}
          />

          {/* Top Bar - Centered */}
          <div className="absolute left-0 right-0 top-[15px] flex justify-center px-[11px]">
            <div
              className="bg-[#070707] border border-white rounded-[14px] h-[24px] flex items-center justify-between px-3"
              style={{
                width: "100%",
                maxWidth: "326px",
                boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
              }}
            >
              {/* Number */}
              <p
                className="text-white text-[12px] leading-none"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                0{currentSlide + 1}
              </p>

              {/* Menu Icon - 4 bars, orange for active and past */}
              <svg width="20" height="13" viewBox="0 0 20 13" fill="none">
                {[0, 1, 2, 3].map((barIndex) => (
                  <rect
                    key={barIndex}
                    y={barIndex * 4}
                    width="20"
                    height="1.5"
                    rx="0.75"
                    fill={barIndex <= currentSlide ? "#ff805e" : "white"}
                    opacity={barIndex <= currentSlide ? 1 : 0.6}
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Content at Bottom */}
          <div className="mt-auto px-[17px] pb-[20px] z-10 relative">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[28px] sm:text-[32px] font-bold italic text-[#eef1f5] mb-[13px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {slides[currentSlide].title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[16px] sm:text-[18px] text-[#cfd1d4] leading-[18px] sm:leading-[20px]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {slides[currentSlide].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
