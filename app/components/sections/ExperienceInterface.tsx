"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Yuniro",
    role: "Senior UI/UX Designer",
    period: "Feb 2025 - Dec 2025",
    description:
      "Led the design of digital experiences across multiple product types, creating work that balanced strong visuals with practical, user-focused thinking.",
    highlights: [
      "Designed for web, mobile, admin, AI, and VR products.",
      "Created branding, logo concepts, and social media visuals.",
      "Collaborated with developers, project managers, marketing, and 3D/VR teams.",
      "Built cleaner flows, stronger interfaces, and more polished user experiences.",
    ],
  },
  {
    id: 2,
    company: "Tech Miracle",
    role: "Lead UI/UX Designer",
    period: "Apr 2024 - Oct 2025",
    description:
      "Handled projects from start to finish, making sure the design was not only visually strong but also easy and smooth for users to go through.",
    highlights: [
      "Designed user experiences for web and digital products.",
      "Worked on the full design process from initial ideas to final screens.",
      "Supported and guided junior designers during different project stages.",
      "Focused on making products clearer, easier to use, and more user-friendly.",
      "Helped improve product performance with a 25% increase in engagement and a 10% improvement in user satisfaction.",
    ],
  },
  {
    id: 3,
    company: "Xwave",
    role: "Academic Facilitator",
    period: "Feb 2025 - Dec 2025",
    description:
      "Worked closely with students to help them learn UI/UX design in a practical and industry-relevant way.",
    highlights: [
      "Created and taught a complete UI/UX course focused on building strong design skills and career readiness.",
      "Took sessions on UX thinking, UI design, design process, and how real projects are handled.",
      "Gave students hands-on tasks, assignments, and practical experience instead of just theory.",
      "Provided 1:1 support and feedback to help them improve step by step.",
      "Used real-world examples and industry insight to prepare students for actual design work.",
    ],
  },
  {
    id: 4,
    company: "For",
    role: "Full Stack Designer",
    period: "Sep 2023 - Apr 2024",
    description:
      "Designed websites, mobile apps, and social media content while ensuring every product was both visually appealing and easy to use.",
    highlights: [
      "Built visual designs and interactive prototypes using Framer.",
      "Worked remotely from Finland while staying closely connected with the team to align design and development.",
      "Contributed to launching multiple projects that boosted user engagement and kept users coming back.",
    ],
  },
  {
    id: 5,
    company: "Digital Prowler",
    role: "Lead Designer",
    period: "Mar 2024 - Oct 2024",
    description:
      "Managed a team of designers and developers while overseeing every project from start to finish.",
    highlights: [
      "Led project strategy, design direction, and execution.",
      "Ensured that design quality, user experience, and development alignment were consistent across all projects.",
      "Helped the team deliver polished digital products on time and with strong usability.",
    ],
  },
  {
    id: 6,
    company: "Retro V Game",
    role: "Games Designer",
    period: "Sep 2025 - Dec 2025",
    description:
      "Designed and maintained the gaming website, ensuring a smooth user experience across pages.",
    highlights: [
      "Handled existing website updates, email templates, and interactive elements.",
      "Focused on creating an engaging, visually appealing environment for players and visitors.",
    ],
  },
  {
    id: 7,
    company: "ESFORGE",
    role: "Freelance UI/UX Designer",
    period: "Jan 2023 - Feb 2024",
    description:
      "Designed a mobile app for a lawn mower robot and the company’s main website, focusing on usability and visual appeal.",
    highlights: [
      "Researched user needs and translated them into intuitive flows and interfaces.",
      "Wrote clear documentation to turn designs into functional products.",
      "Improved overall user experience, making it easier for users to interact with the product and the brand.",
    ],
  },
];

export default function ExperienceInterface() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between mb-10">
          {/* Title */}
          <h2
            className="text-[32px] md:text-6xl font-bold text-[#070707] tracking-[-0.96px] md:tracking-[-1.8px] leading-tight"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Experience that goes
            <br />
            <span
              className="italic font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              beyond screens.
            </span>
          </h2>

          {/* Stats - Left aligned on mobile, right aligned on desktop */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right md:max-w-[420px]">
            <p
              className="text-xl md:text-2xl font-bold text-[#070707] tracking-[-0.6px] md:tracking-[-0.72px]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              <span
                className="text-[#ff805e] italic font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                4+
              </span>{" "}
              year of{" "}
              <span
                className="italic font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                experince
              </span>
            </p>
            <p
              className="text-sm md:text-base text-[#5f6266] mt-1 leading-[1.5]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              I’ve worked with national and international clients across
              different industries, helping brands and products turn rough ideas
              into clear, usable digital experiences.
            </p>
          </div>
        </div>

        {/* Experience Accordion */}
        <div className="flex flex-col gap-3 md:gap-3.5 md:ml-auto md:max-w-[887px]">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="transition-all duration-300">
              {/* Expanded State */}
              {expandedId === exp.id ? (
                <div className="flex flex-col gap-3.5 md:gap-6 bg-white rounded-xl py-3 md:py-8">
                  {/* Header Row */}
                  <div className="flex items-start md:items-center justify-between px-3.5 md:px-4">
                    <div className="flex flex-col gap-0.5 md:gap-3">
                      <h3
                        className="text-xl md:text-4xl font-bold text-[#070707]"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-sm md:text-base text-[#5f6266]"
                          style={{ fontFamily: "var(--font-satoshi)" }}
                        >
                          {exp.role}
                        </span>
                        <span className="w-[3px] h-[3px] rounded-full bg-[#5f6266]" />
                        <span
                          className="text-sm md:text-base text-[#5f6266]"
                          style={{ fontFamily: "var(--font-satoshi)" }}
                        >
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-[#eef1f5] flex items-center justify-center hover:bg-[#e5e8ec] transition-colors flex-shrink-0"
                      aria-label="Collapse"
                    >
                      <svg
                        className="w-[18px] h-[18px] md:w-6 md:h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19"
                          stroke="#070707"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px border-t border-dashed border-[#cfd1d4]" />

                  {/* Content */}
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-3.5 md:px-4"
                    >
                      <p
                        className="text-xs md:text-lg text-[#5f6266] mb-2 md:mb-4"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {exp.description}
                      </p>
                      <ul className="list-disc ml-5 md:ml-7 space-y-0.5 md:space-y-1">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-xs md:text-lg text-[#070707]"
                            style={{ fontFamily: "var(--font-satoshi)" }}
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : (
                /* Collapsed State */
                <>
                  {index > 0 && (
                    <div className="w-full h-px border-t border-dashed border-[#cfd1d4]" />
                  )}
                  <div className="flex items-center justify-between px-3.5 md:px-4 py-3 md:py-4">
                    <div className="flex items-center gap-3">
                      <h3
                        className="text-base md:text-4xl font-medium md:font-bold text-[#070707]"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {exp.company}
                      </h3>
                      <span
                        className="text-sm md:text-base text-[#5f6266]"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center hover:bg-[#f5f5f5] transition-colors flex-shrink-0"
                      aria-label="Expand"
                    >
                      <svg
                        className="w-4 h-4 md:w-6 md:h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5V19M5 12H19"
                          stroke="#070707"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
