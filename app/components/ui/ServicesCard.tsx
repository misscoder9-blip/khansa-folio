import React from "react";
import Image from "next/image";

interface ServicesCardProps {
  services?: string[];
  availabilityText?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function ServicesCard({
  services = [
    "Mobile App Design",
    "Web Design",
    "Dashboard & Admin Panel Design",
    "ERP, SaaS & CRM Product Design",
    "B2B, B2C & C2B Platforms",
    "Landing Pages & Conversion Design"
  ],
  availabilityText = "Available Now",
  ctaText = "Start a project",
  onCtaClick,
}: ServicesCardProps) {
  return (
    <div className="bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12)] rounded-[14px] p-3 h-full flex flex-col justify-between overflow-hidden">
      {/* Top Section - Services List */}
      <div className="flex flex-col gap-2">
        {services.map((service, index) => (
          <div key={index} className="flex items-center justify-between">
            <p
              className="text-[14px] font-medium text-[#070707]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {service}
            </p>
            <svg
              width="8"
              height="1"
              viewBox="0 0 8 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="0.5"
                x2="8"
                y2="0.5"
                stroke="#070707"
                strokeWidth="1"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Bottom Section - Availability and CTA */}
      <div className="flex flex-col gap-6">
        {/* Availability Badge */}
        <div className="flex items-center gap-1 border-t border-dotted border-gray-300 pt-2 pb-2 border-b">
          <div className="w-1 h-1 rounded-full bg-[#22c55e]"></div>
          <p
            className="text-[12px] font-medium text-[#070707]"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            {availabilityText}
          </p>
        </div>
        {/* CTA Button */}
       <a href="#contact">
         <button
          onClick={onCtaClick}
          className="w-full bg-[#070707] rounded-[38px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] py-3 px-6 flex items-center justify-start relative overflow-hidden group border-2 border-[#070707]"
        >
          {/* Expanding white background - expands from right to left */}
          <span className="absolute inset-0 bg-white rounded-[38px] transform origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

          {/* Text */}
          <span
            className="text-[18px] font-medium relative z-10 text-white transition-colors duration-500 group-hover:text-[#070707]"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            {ctaText}
          </span>

          {/* Arrow circle */}
          <div className="absolute right-1 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10">
            <Image
              src="/assets/icons/arrowright.svg"
              alt="Arrow"
              width={15}
              height={15}
            />
          </div>
        </button>
       </a>
      </div>
    </div>
  );
}
