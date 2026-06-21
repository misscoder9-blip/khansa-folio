"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Story {
  id: number;
  type: "image" | "video";
  content: string;
  alt: string;
  hobbyName: string;
}

const stories: Story[] = [
  {
    id: 1,
    type: "video",
    content: "/assets/videos/story-1.mp4",
    alt: "Hobby Designing",
    hobbyName: "Designing",
  },
  {
    id: 2,
    type: "video",
    content: "/assets/videos/story-2.mp4",
    alt: "Quill Art",
    hobbyName: "Quill Art",
  },
  {
    id: 3,
    type: "video",
    content: "/assets/videos/story-3.mp4",
    alt: "Reading Books",
    hobbyName: "Reading Books",
  },
  {
    id: 4,
    type: "video",
    content: "/assets/videos/story-4.mp4",
    alt: "Sewing",
    hobbyName: "Sewing",
  },
  {
    id: 5,
    type: "video",
    content: "/assets/videos/story-5.mp4",
    alt: "Watching Series",
    hobbyName: "Watching Series",
  },
];

const STORY_DURATION = 5000; // 5 seconds per story

export default function StoryCarousel() {
  const [currentStory, setCurrentStory] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Move to next story
          setCurrentStory((current) => (current + 1) % stories.length);
          return 0;
        }
        return prev + 100 / (STORY_DURATION / 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentStory, isPaused]);

  const goToStory = (index: number) => {
    setCurrentStory(index);
    setProgress(0);
  };

  const handlePrevious = () => {
    setCurrentStory(
      (current) => (current - 1 + stories.length) % stories.length
    );
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentStory((current) => (current + 1) % stories.length);
    setProgress(0);
  };

  return (
    <div
      className="bg-[#e8e6e1] rounded-[20px] overflow-hidden h-[820px] relative cursor-pointer select-none border-[5px] border-white"
      style={{
        boxShadow: "0px 0px 40px 2px rgba(0,0,0,0.4)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Progress Bars */}
      <div className="absolute top-0 left-0 right-0 z-20 flex gap-1.5 p-4">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className="flex-1 h-[3px] bg-white/30 rounded-full overflow-hidden"
            onClick={() => goToStory(index)}
          >
            <div
              className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
              style={{
                width:
                  index === currentStory
                    ? `${progress}%`
                    : index < currentStory
                      ? "100%"
                      : "0%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Story Content */}
      <div className="relative w-full h-full">
        {/* Navigation Areas */}
        <div className="absolute inset-0 z-10 flex">
          <div
            className="w-1/2 h-full cursor-pointer"
            onClick={handlePrevious}
          />
          <div className="w-1/2 h-full cursor-pointer" onClick={handleNext} />
        </div>

        {/* Story Video - Full Cover */}
        <div className="absolute inset-0 w-full h-full">
          <video
            key={stories[currentStory].id}
            src={stories[currentStory].content}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop={false}
            playsInline
          />
        </div>
      </div>

      {/* Bottom Bar - WhatsApp Style */}
      <div className="absolute bottom-5 z-20 flex justify-center">
        <div
          className="flex items-center justify-between bg-[#FF805E]"
          style={{
            width: "348px",
            padding: "6px 24px",
            borderTop: "1px dashed #FFF",
            borderBottom: "1px dashed #FFF",
          }}
        >
          <span
            className="text-[#EEF1F5] text-[18px] font-medium"
            style={{ fontFamily: "var(--font-satoshi)", lineHeight: "normal" }}
          >
            Hobby
          </span>
          <span
            className="text-[#EEF1F5] text-[24px] font-bold"
            style={{ fontFamily: "var(--font-satoshi)", lineHeight: "normal" }}
          >
            {stories[currentStory].hobbyName}
          </span>
        </div>
      </div>
    </div>
  );
}
