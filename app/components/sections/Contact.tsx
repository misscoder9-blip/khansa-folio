"use client";

import React, { useState, useRef } from "react";
import Testimonial from "@/app/components/ui/Testimonial";

// Interactive form field component
function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  isTextarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  isTextarea?: boolean;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const showLabel = !isFocused && !value;

  return (
    <div
      className="flex flex-col gap-[9px] cursor-text"
      onClick={handleContainerClick}
    >
      <div className={`relative ${isTextarea ? 'min-h-[100px]' : ''}`}>
        {/* Label that hides when focused or has value */}
        <span
          className={`text-white text-[16px] transition-all duration-200 ${showLabel ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          {label}
        </span>

        {/* Input field */}
        {isTextarea ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            rows={4}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`absolute inset-0 w-full bg-transparent text-white focus:outline-none text-[16px] resize-none ${showLabel ? 'opacity-0' : 'opacity-100'
              }`}
            style={{ fontFamily: "var(--font-satoshi)" }}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`absolute inset-0 w-full bg-transparent text-white focus:outline-none text-[16px] ${showLabel ? 'opacity-0' : 'opacity-100'
              }`}
            style={{ fontFamily: "var(--font-satoshi)" }}
          />
        )}
      </div>
      {/* Dotted separator line */}
      <div className="w-full h-[1px] border-b border-dashed border-white/30" />
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({ name: "", email: "", service: "", budget: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const testimonials = [
    {
      id: 1,
      logo: "/assets/icons/letstalk/Logo-Tech-Miracle.svg",
      company: "Tech Miracle",
      roleNormal: "Lead ",
      roleItalic: "Designer",
      text: "Khansa has been the force behind my agency excelling in UI design, mentoring, and managing projects with Figma and Framer. Her creativity is invaluable!",
      name: "Hafiz M. Ahmad",
      positionNormal: "Founder",
      positionItalic: "@ Tech Miracle",
      avatar: "/assets/icons/letstalk/Avatar-Hafiz.svg",
    },
    {
      id: 2,
      logo: "/assets/icons/letstalk/prowler.svg",
      roleNormal: "Team ",
      roleItalic: "Lead",
      text: "I came in with high hopes, and they absolutely blew me away. From strategy to execution, every detail was on point. I'm telling everyone I know hire them!",
      name: "M. Usman",
      positionNormal: "CEO,",
      positionItalic: "@ Digital Prowler",
      avatar: "/assets/icons/letstalk/usman.svg",
    },
    {
      id: 3,
      logo: "/assets/icons/letstalk/esforge.svg",
      roleNormal: "Lead ",
      roleItalic: "Designer",
      text: "Khansa is amazing to work with! Her UI/UX skills, creativity, and attention to detail are top-notch. Super reliable and always delivers beyond expectations!",
      name: "Saif Ullah",
      positionNormal: "Co Founder",
      positionItalic: "@ ESFORGE",
      avatar: "/assets/icons/letstalk/safi.svg",
    },
    {
      id: 4,
      logo: "/assets/icons/letstalk/xwave.svg",
      roleNormal: "Lead ",
      roleItalic: "Designer",
      text: "Khunsa is an outstanding TA. Their dedication, expertise, and support make learning seamless and impactful. Xwave greatly values their contribution.",
      name: "Wardah Noor",
      positionNormal: "Founder at",
      positionItalic: "Xwave",
      avatar: "/assets/icons/letstalk/wardah.svg",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6">
          {/* Left Column - Let's Talk */}
          <div className="bg-[#F8F9FA] border border-dashed border-[#cfd1d4] rounded-[14px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12)] p-6 md:p-8 flex flex-col justify-between h-full">
            {/* Heading */}
            <div className="mb-6">
              <h2
                className="text-4xl md:text-5xl lg:text-[60px] font-bold text-[#070707] mb-4 tracking-[-1.8px]"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                Let&apos;s
                <span
                  className="italic font-bold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {" "}talk.
                </span>
              </h2>
              <p
                className="text-lg md:text-[24px] text-[#5f6266] leading-relaxed"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                <span className="font-medium text-[#070707]">Your next chapter starts here</span>. Work with me to craft design and strategy that move your brand forward.
              </p>
            </div>

            {/* Testimonial */}
            <Testimonial testimonials={testimonials} />
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#070707] rounded-[14px] p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full">
            <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full gap-6">
              <div className="space-y-6">
                {/* Name */}
                <FormField
                  label="Name*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                {/* Email */}
                <FormField
                  label="Email*"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                {/* Select Service */}
                <div className="flex flex-col gap-[9px]">
                  <div className="flex items-center justify-between">
                    <select
                      name="service"
                      id="service"
                      className="bg-transparent text-white focus:outline-none text-[16px] appearance-none cursor-pointer flex-1"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                      onChange={handleChange}
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-[#070707]">
                        Select Service*
                      </option>
                      <option value="mobile-app-design" className="bg-[#070707] text-white">
                        Mobile App Design
                      </option>
                      <option value="web-design" className="bg-[#070707] text-white">
                        Web Design
                      </option>
                      <option value="dashboard-admin-panel" className="bg-[#070707] text-white">
                        Dashboard & Admin Panel Design
                      </option>
                      <option value="erp-saas-crm" className="bg-[#070707] text-white">
                        ERP, SaaS & CRM Systems
                      </option>
                      <option value="b2b-b2c-c2b" className="bg-[#070707] text-white">
                        B2B, B2C & C2B Platforms
                      </option>
                    </select>
                    <img
                      src="/assets/icons/arrow-down-01.svg"
                      alt=""
                      className="w-6 h-6 pointer-events-none flex-shrink-0"
                    />
                  </div>
                  <div className="w-full h-[1px] border-b border-dashed border-white/30" />
                </div>

                {/* Budget */}
                <FormField
                  label="Budget(optional)"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                />

                {/* Message */}
                <FormField
                  label="Message*"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  isTextarea
                />
              </div>

              {/* Success message */}
              {status === "success" && (
                <p
                  className="text-green-400 text-sm text-center"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  Message sent! Khansa will get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p
                  className="text-red-400 text-sm text-center"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  Something went wrong. Please try again or email directly.
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-white rounded-[38px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] py-3 px-6 flex items-center justify-start relative overflow-hidden group border-2 border-white disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {/* Expanding black background */}
                <span className="absolute inset-0 bg-[#070707] rounded-[38px] transform origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

                {/* Text */}
                <span className="text-lg font-medium relative z-10 text-[#070707] transition-colors duration-500 group-hover:text-white">
                  {status === "loading" ? "Sending…" : "Send Message"}
                </span>

                {/* Arrow circle */}
                <div className="absolute right-1 w-10 h-10 bg-[#070707] rounded-full flex items-center justify-center z-10">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 7.5H12M12 7.5L8 3.5M12 7.5L8 11.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
