"use client";

import Image from "next/image";
import LazyVideo from "@/app/components/ui/LazyVideo";

interface FullWidthShowcaseProps {
  type: "macbook" | "phone" | "image" | "video" | "frame" | "browser";
  src: string;
  alt?: string;
  heading?: string;
  headingItalic?: string;
  description?: string;
  macbookFrame?: string;
  macbookScreenArea?: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
}

/* Parse heading with *italic* markers and \n for line breaks */
function renderHeading(text: string) {
  return text.split("\n").map((line, lineIdx, lines) => {
    const parts = line.split(/(\*[^*]+\*)/);
    return (
      <span key={lineIdx}>
        {parts.map((part, i) => {
          if (part.startsWith("*") && part.endsWith("*")) {
            return (
              <span
                key={i}
                className="italic font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {part.slice(1, -1)}
              </span>
            );
          }
          return <span key={i}>{part}</span>;
        })}
        {lineIdx < lines.length - 1 && <br />}
      </span>
    );
  });
}

export default function FullWidthShowcase({
  type,
  src,
  alt = "Showcase",
  heading,
  headingItalic,
  description,
  macbookFrame,
  macbookScreenArea,
}: FullWidthShowcaseProps) {
  const macbookFrameSrc = macbookFrame ?? "/assets/projectdetail/MacBook-Pro-device.svg";
  const screenArea = macbookScreenArea ?? {
    top: "6.3%",
    left: "9.9%",
    width: "80.2%",
    height: "83.1%",
  };
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        {heading && (
          <div className="mb-8 md:mb-12">
            <h2
              className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#070707] leading-tight tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {heading.includes("*") ? (
                renderHeading(heading)
              ) : (
                <>
                  {heading}{" "}
                  {headingItalic && (
                    <span
                      className="italic font-bold"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {headingItalic}
                    </span>
                  )}
                </>
              )}
            </h2>
            {description && (
              <p
                className="mt-4 md:mt-6 text-base md:text-[20px] text-[#5f6266] leading-normal"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {description}
              </p>
            )}
          </div>
        )}

        {/* Showcase Content */}
        <div className="w-full">
          {type === "macbook" ? (
            <div className="relative w-full">
              {/* MacBook Pro device frame */}
              <img
                src={macbookFrameSrc}
                alt=""
                className="w-full h-auto"
              />
              {/* Screen content positioned over the device screen area */}
              <div
                className="absolute overflow-hidden rounded-[6px] md:rounded-[10px]"
                style={{
                  top: screenArea.top,
                  left: screenArea.left,
                  width: screenArea.width,
                  height: screenArea.height,
                }}
              >
                {src.endsWith(".mp4") ? (
                  <LazyVideo
                    src={src}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={src}
                    alt={alt}
                    width={1440}
                    height={900}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          ) : type === "frame" ? (
            <div className="relative w-full">
              {/* Design frame */}
              <img
                src="/assets/projectdetail/design-frame.svg"
                alt=""
                className="w-full h-auto relative z-10 pointer-events-none"
              />
              {/* Content positioned inside the frame border */}
              <div
                className="absolute overflow-hidden"
                style={{
                  top: "2.07%",
                  left: "1.36%",
                  width: "97.27%",
                  height: "95.86%",
                  borderRadius: "clamp(4px, 0.9%, 12px)",
                }}
              >
                {src.endsWith(".mp4") ? (
                  <LazyVideo
                    src={src}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={src}
                    alt={alt}
                    width={1440}
                    height={900}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          ) : type === "video" ? (
            <LazyVideo
              src={src}
              className="w-full rounded-[16px] md:rounded-[24px]"
            />
          ) : type === "browser" ? (
            <div className="rounded-[14px] md:rounded-[20px] overflow-hidden border-2 border-[#070707] shadow-[0px_0px_24px_2px_rgba(0,0,0,0.15)] bg-white">
              {src.endsWith(".mp4") ? (
                <LazyVideo src={src} className="w-full block" />
              ) : (
                <Image
                  src={src}
                  alt={alt}
                  width={1440}
                  height={900}
                  className="w-full h-auto block"
                />
              )}
            </div>
          ) : type === "phone" ? (
            <div className="flex justify-center">
              <div className="w-[280px] md:w-[320px]">
                <div className="rounded-[40px] overflow-hidden">
                  {src.endsWith(".mp4") ? (
                    <LazyVideo
                      src={src}
                      className="w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={src}
                      alt={alt}
                      width={360}
                      height={780}
                      className="w-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <Image
              src={src}
              alt={alt}
              width={1440}
              height={900}
              className="w-full rounded-[16px] md:rounded-[24px] object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
