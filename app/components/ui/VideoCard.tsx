import React from 'react';
import Image from 'next/image';
import Card from './Card';

interface VideoCardProps {
  videoSrc: string;
  alt?: string;
}

export default function VideoCard({ videoSrc, alt = "Video" }: VideoCardProps) {
  return (
    <Card className="bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12)] rounded-[14px] overflow-hidden h-full flex flex-col">
      <div className="relative flex-1 bg-[#d5d2d3]">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controlsList="nodownload"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Instagram-style bottom controls */}
      <div className="px-5 py-4 flex items-center justify-between bg-white">
        <div className="flex gap-2 items-center">
          <button className="hover:opacity-70 transition">
            <Image
              src="/assets/icons/favourite.svg"
              alt="Like"
              width={13}
              height={13}
            />
          </button>
          <button className="hover:opacity-70 transition">
            <Image
              src="/assets/icons/bubble-chat-question.svg"
              alt="Comment"
              width={13}
              height={13}
            />
          </button>
          <button className="hover:opacity-70 transition">
            <Image
              src="/assets/icons/sent.svg"
              alt="Send"
              width={13}
              height={13}
            />
          </button>
        </div>
        <button className="hover:opacity-70 transition">
          <Image
            src="/assets/icons/bookmark-02.svg"
            alt="Bookmark"
            width={13}
            height={13}
          />
        </button>
      </div>
    </Card>
  );
}
