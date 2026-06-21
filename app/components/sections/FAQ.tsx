"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "How we get benefit to work with you?",
    answer:
      "Working with me means you get a dedicated designer who focuses on creating purposeful, user-centered designs that drive real business results. I bring strategic thinking, attention to detail, and a collaborative approach to every project.",
  },
  {
    id: 2,
    question: "What is your Pricing Plan?",
    answer:
      "My pricing varies based on project scope and complexity. I offer both fixed-price projects and hourly rates. Contact me with your project details for a custom quote tailored to your needs.",
  },
  {
    id: 3,
    question: "Do You have a team?",
    answer:
      "I primarily work as an independent designer, but I collaborate with trusted developers and other specialists when projects require additional expertise to deliver the best results.",
  },
  {
    id: 4,
    question: "Have I available for Project Based Job?",
    answer:
      "Yes, I am available for project-based work. Whether it's a short-term project or a long-term engagement, I can adapt to your needs and deliver high-quality design solutions.",
  },
  {
    id: 5,
    question: "Is our work Save?",
    answer:
      "Absolutely. I take confidentiality seriously and can sign NDAs when required. All project files and assets are securely stored and only shared with authorized stakeholders.",
  },
  {
    id: 6,
    question: "Have I follow Trends?",
    answer:
      "I stay up-to-date with the latest design trends, tools, and best practices. However, I always prioritize timeless design principles and user needs over fleeting trends to ensure long-lasting results.",
  },
  {
    id: 7,
    question: "What kind of Project you already done",
    answer:
      "I have experience with web applications, mobile apps, admin panels, SaaS platforms, e-commerce sites, and more. My portfolio includes projects for clients across various industries worldwide.",
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left - Heading */}
          <div className="lg:w-[400px] flex-shrink-0">
            <h2
              className="text-[32px] md:text-5xl lg:text-[60px] font-bold text-[#070707] tracking-[-1.8px] leading-tight"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Frequently Asked{" "}
              <span
                className="italic font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Question
              </span>
              .
            </h2>
          </div>

          {/* Right - Accordion */}
          <div className="flex-1 flex flex-col gap-3 md:gap-3.5">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  expandedId === item.id ? "py-3 md:py-6 bg-white" : ""
                }`}
              >
                {expandedId === item.id ? (
                  <div className="flex flex-col gap-3.5 md:gap-4">
                    {/* Header Row */}
                    <div className="flex items-center justify-between px-3.5 md:px-6">
                      <h3
                        className="text-base md:text-xl font-bold text-[#070707]"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {item.question}
                      </h3>
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#eef1f5] flex items-center justify-center hover:bg-[#e5e8ec] transition-colors flex-shrink-0"
                        aria-label="Collapse"
                      >
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5"
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
                        className="px-3.5 md:px-6"
                      >
                        <p
                          className="text-sm md:text-base text-[#5f6266]"
                          style={{ fontFamily: "var(--font-satoshi)" }}
                        >
                          {item.answer}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ) : (
                  <>
                    {index > 0 && (
                      <div className="w-full h-px border-t border-dashed border-[#cfd1d4]" />
                    )}
                    <div className="flex items-center justify-between px-3.5 md:px-4 py-3 md:py-4">
                      <h3
                        className="text-base md:text-xl font-medium text-[#070707]"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {item.question}
                      </h3>
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#f5f5f5] transition-colors flex-shrink-0"
                        aria-label="Expand"
                      >
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5"
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
      </div>
    </section>
  );
}
