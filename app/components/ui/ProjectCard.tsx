"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  client: string;
  type: string;
  timeline: string;
  backgroundColor: string;
  previewImage: string;
  previewAlt?: string;
  href?: string;
  descriptionMaxWidth?: string;
}

export default function ProjectCard({
  title,
  description,
  year,
  client,
  type,
  timeline,
  backgroundColor,
  previewImage,
  previewAlt = "Project preview",
  href,
  descriptionMaxWidth = "md:max-w-[315px]",
}: ProjectCardProps) {
  const cardClasses = `${backgroundColor} rounded-[24px] overflow-hidden transition-transform duration-300 hover:scale-[1.02] block cursor-pointer group relative w-full h-[374px] md:h-[611px]`;

  const CardContent = (
    <>
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:blur-sm">
        <div className="relative w-full h-full p-6 md:p-8">
          <Image
            src={previewImage}
            alt={previewAlt}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300 group-hover:blur-sm"
        style={{
          background: 'linear-gradient(180deg, rgba(48, 48, 48, 0.00) 0%, #303030 100%)'
        }}
      />

      {/* Info Card Overlay - Positioned at Bottom */}
      <div className="relative h-full flex items-end p-3 md:p-4 transition-all duration-300 group-hover:blur-sm">
        <div className="bg-white rounded-[20px] p-4 md:pt-[12px] md:pb-[24px] md:px-[24px] shadow-lg w-full md:h-[198px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3 md:mb-[22px]">
            <h3
              className="text-xl md:text-[36px] font-bold text-[#070707] leading-tight md:leading-none md:whitespace-nowrap md:shrink-0"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {title}
            </h3>
            <p
              className={`hidden md:block text-[#5f6266] text-xs leading-none ${descriptionMaxWidth} md:text-right`}
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {description}
            </p>
          </div>

        

              <div className="space-y-0">
  {[
    ["Year", year],
    ["Client", client],
    ["Type", type],
    ["Timeline", timeline],
  ].map(([label, value]) => (
    <div
      key={label}
      className="flex items-center py-[4.5px]"
    >
      <span className="text-[#5f6266] text-[10px] md:text-xs leading-5 shrink-0">
        {label}
      </span>
      <span
        className="flex-1 mx-2"
        style={{
          borderBottom: "1.5px dotted #d1d5db",
          marginBottom: "2px",
        }}
      />
      <span className="text-[#070707] text-[10px] md:text-xs font-medium text-right leading-4 shrink-0">
        {value}
      </span>
    </div>
 
            ))}
          </div>
        </div>
      </div>

      {/* Arrow Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#070707] rounded-full flex items-center justify-center shadow-lg">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {CardContent}
      </Link>
    );
  }

  return <div className={cardClasses}>{CardContent}</div>;
}
