"use client";

import { useRef, useState, useEffect, Fragment } from "react";
import Image from "next/image";
import type { FlowColumn } from "@/app/data/projects";

interface UserFlowSectionProps {
  heading: string;
  headingItalic: string;
  description: string;
  flowchart: {
    startLabel: string;
    hubLabel: string;
    leftColumn: FlowColumn;
    centerColumn: FlowColumn;
    rightColumn: FlowColumn;
  };
}

/* ── Native chart dimensions (matches Figma layout at 1340px) ── */
const CHART_WIDTH = 1340;
const CHART_HEIGHT = 750;

/* ── Pill node ── */
function FlowPill({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div
      className={`rounded-[40px] ${dark ? "px-[32px]" : "px-[24px]"
        } py-[16px] inline-flex items-center justify-center whitespace-nowrap ${dark ? "bg-[#070707]" : "bg-white"
        }`}
    >
      <span
        className={`text-[24px] font-medium leading-normal ${dark ? "text-white" : "text-[#070707]"
          }`}
        style={{ fontFamily: "var(--font-satoshi)" }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── Column of flow items with arrows between them ── */
function FlowColumnComponent({ items, arrows }: FlowColumn) {
  return (
    <div className="flex flex-col items-center">
      {items.map((item, i) => (
        <Fragment key={i}>
          <FlowPill label={item} />
          {i < items.length - 1 && (
            <Image
              src={
                arrows[i] === "long"
                  ? "/assets/projectdetail/system-plus-post.svg"
                  : "/assets/projectdetail/rest-small-arrow.svg"
              }
              alt=""
              width={15}
              height={arrows[i] === "long" ? 78 : 21}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default function UserFlowSection({
  heading,
  headingItalic,
  description,
  flowchart,
}: UserFlowSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setScale(Math.min(1, width / CHART_WIDTH));
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const containerWidth =
    typeof window !== "undefined" && containerRef.current
      ? containerRef.current.offsetWidth
      : CHART_WIDTH;

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div ref={containerRef} className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[50px] md:gap-[80px]">
          {/* ── Heading + Description ── */}
          <div className="flex flex-col gap-[20px] md:gap-[32px]">
            <h2 className="text-[28px] md:text-[40px] lg:text-[48px] tracking-[-1.44px] leading-normal text-[#070707]">
              <span
                className="font-bold"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {heading}{" "}
              </span>
              <span
                className="font-bold italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {headingItalic}
              </span>
            </h2>
            <p
              className="text-[16px] md:text-[20px] text-[#5f6266] leading-normal"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {description}
            </p>
          </div>

          {/* ── Flowchart (scales to fit container) ── */}
          <div
            className="overflow-hidden mx-auto"
            style={{
              width: `${CHART_WIDTH * scale}px`,
              height: `${CHART_HEIGHT * scale}px`,
            }}
          >
            <div
              style={{
                width: `${CHART_WIDTH}px`,
                height: `${CHART_HEIGHT}px`,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            >
              {/* Top: Start → Landing Page (centered) */}
              <div className="flex flex-col items-center">
                <FlowPill label={flowchart.startLabel} dark />

                <Image
                  src="/assets/projectdetail/start-to-landingpage.svg"
                  alt=""
                  width={15}
                  height={51}
                />

                <FlowPill label={flowchart.hubLabel} />
              </div>

              {/* Branching arrows area */}
              <div className="relative w-full h-[80px]">
                {/* Left curved arrow – right edge at center */}
                <div
                  className="absolute top-0"
                  style={{ right: "50%", width: 533 }}
                >
                  <Image
                    src="/assets/projectdetail/landingpage-to-chatinput.svg"
                    alt=""
                    width={533}
                    height={80}
                  />
                </div>

                {/* Center straight arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0">
                  <Image
                    src="/assets/projectdetail/landingpage-to-useraction.svg"
                    alt=""
                    width={15}
                    height={72}
                  />
                </div>

                {/* Right curved arrow – left edge at center */}
                <div
                  className="absolute top-0"
                  style={{ left: "50%", width: 548 }}
                >
                  <Image
                    src="/assets/projectdetail/landingpage-to-output.svg"
                    alt=""
                    width={548}
                    height={80}
                  />
                </div>
              </div>

              {/* Three columns */}
              <div className="relative w-full h-[460px]">
                {/* Left column – centered at ~10.5% */}
                <div
                  className="absolute top-0 -translate-x-1/2"
                  style={{ left: "10.5%" }}
                >
                  <FlowColumnComponent {...flowchart.leftColumn} />
                </div>

                {/* Center column – centered at ~49.3% */}
                <div
                  className="absolute top-0 -translate-x-1/2"
                  style={{ left: "49.3%" }}
                >
                  <FlowColumnComponent {...flowchart.centerColumn} />
                </div>

                {/* Right column – centered at ~90% */}
                <div
                  className="absolute top-0 -translate-x-1/2"
                  style={{ left: "90%" }}
                >
                  <FlowColumnComponent {...flowchart.rightColumn} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
