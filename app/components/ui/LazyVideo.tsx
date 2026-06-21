"use client";

import { useRef, useEffect } from "react";
import { useInView } from "@/app/hooks/useInView";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
}

export default function LazyVideo({
  src,
  poster,
  className = "",
  loop = true,
  muted = true,
}: LazyVideoProps) {
  const { ref, isInView } = useInView({ rootMargin: "200px" });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Ensure the muted property is set before play() so browser autoplay
    // policies allow playback (the React `muted` prop alone can be unreliable).
    video.muted = muted;
    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView, muted]);

  return (
    <div ref={ref}>
      {isInView && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className={className}
          loop={loop}
          muted={muted}
          autoPlay
          playsInline
          preload="none"
          // Belt-and-suspenders: if `loop` ever fails to re-trigger, restart
          // manually so the video can't get stuck on its final frame.
          onEnded={(e) => {
            if (!loop) return;
            const v = e.currentTarget;
            v.currentTime = 0;
            v.play().catch(() => {});
          }}
        />
      )}
    </div>
  );
}
