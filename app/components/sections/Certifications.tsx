"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface Certification {
  id: number;
  title: string;
  year: string;
  issuer: string;
  logo: string;
  certificateImage: string;
  credentialUrl: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Google UX Design Professional Certificate",
    year: "2023",
    issuer: "Google",
    logo: "/assets/images/google-icon.svg",
    certificateImage: "/assets/images/certificate.png",
    credentialUrl:
      "https://coursera.org/share/fa47cc0c944a4bc2edb86356242d5d86",
  },
  {
    id: 2,
    title: "Apprentship From Institute of emerging career unit",
    year: "2023",
    issuer: "Institute of Emerging Careers",
    logo: "/assets/images/iec-icon.svg",
    certificateImage: "/assets/images/IEC-Certificate.png",
    credentialUrl:
      "https://drive.google.com/file/d/1g4h07i-kZr5yve9hG98ZXGhVZZFfTtEA/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Experience letter\n Xwave",
    year: "2025",
    issuer: "xWave",
    logo: "/assets/images/xwave-icon.svg",
    certificateImage: "/assets/images/X-wave-certificate.png",
    credentialUrl:
      "https://drive.google.com/file/d/1sYcT4-dC5GNeuo2sCbvEJNUTaIzRc9z_/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Certificate of Experience Bytewise",
    year: "2024",
    issuer: "Bytewise",
    logo: "/assets/images/bytewise-icon.svg",
    certificateImage: "/assets/images/bytwise-certifcate.png",
    credentialUrl:
      "https://certificate.givemycertificate.com/c/2e093b65-0a94-4ba6-875e-a5b0c7478057",
  },
  {
    id: 5,
    title: "Certificate of Experience TechMiracle",
    year: "2024",
    issuer: "Tech Miracle",
    logo: "/assets/images/techmirical-icon.svg",
    certificateImage: "/assets/images/techmiraclecertificate.png",
    credentialUrl:
      "https://drive.google.com/file/d/11eVb84uA4zlBGd8HuRTbpPx35aTTruzV/view?usp=drive_link",
  },
  {
    id: 6,
    title: "Graphic Design\nCertificate",
    year: "2022",
    issuer: "DigiSkills",
    logo: "/assets/images/digiskill-icon.svg",
    certificateImage: "/assets/images/vu-certificate.png",
    credentialUrl:
      "https://drive.google.com/file/d/1kXeQa7TbglMJna6uyzI4FQhovvGmb6zk/view?usp=drive_link",
  },
  {
    id: 7,
    title: "Certificate of Experience Madrasa tul banat",
    year: "2023",
    issuer: "Madrasa tul Banat",
    logo: "/assets/images/mtb-icon.svg",
    certificateImage: "/assets/images/mtb-certificate.png",
    credentialUrl:
      "https://drive.google.com/file/d/1LKTTKWaYoojwbHYflNu0H-qVF0Vimj9r/view?usp=sharing",
  },
  {
    id: 8,
    title: "Experience letter\nVAASEL",
    year: "2023",
    issuer: "VAASEL",
    logo: "/assets/images/vaasal-icon.svg",
    certificateImage: "/assets/images/vaasel-certificate.png",
    credentialUrl:
      "https://drive.google.com/file/d/12nZokyGL2aLUNvIlicljdfdDnILP2_uB/view?usp=drive_link",
  },
];

export default function Certifications() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Handle mouse drag to scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    isDragging.current = true;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
    container.style.cursor = "grabbing";
    container.style.userSelect = "none";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Scroll speed multiplier
    container.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    isDragging.current = false;
    container.style.cursor = "grab";
    container.style.userSelect = "";
  };

  const handleMouseLeave = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    isDragging.current = false;
    container.style.cursor = "grab";
    container.style.userSelect = "";
  };

  return (
    <section className="py-12 md:py-20 overflow-hidden bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px]">
        {/* Title */}
        <h2
          className="text-[32px] md:text-5xl lg:text-[60px] font-bold text-[#070707] tracking-[-0.96px] md:tracking-[-1.8px] mb-8 md:mb-12"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          Certifications & <br className="md:hidden" />
          <span
            className="italic font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Achievements
          </span>
        </h2>
      </div>

      {/* Scrollable Cards Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-[16px] overflow-x-auto scrollbar-hide pb-6 pt-6 cursor-grab active:cursor-grabbing select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left spacer to align with heading */}
        <div className="flex-shrink-0 lg:px-[24px]" />

        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="flex-shrink-0 w-[238.5px] md:w-[500px] lg:w-[577px] h-[264px] md:h-[550px] lg:h-[636px] rounded-[9px] md:rounded-[14px] overflow-hidden relative border-[1.5px] md:border-[5px] border-[#070707] shadow-[0px_0px_16px_1px_rgba(0,0,0,0.2)] md:shadow-[0px_0px_40px_2px_rgba(0,0,0,0.2)]"
            style={{
              background:
                "linear-gradient(to bottom, #000000 0%, #ffffff 100%)",
            }}
          >
            {/* Diagonal Stripes Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Stripe 1 */}
              <div
                className="absolute w-4 md:w-10 h-36 md:h-72 opacity-30"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(147,147,147,0.3))",
                  transform: "rotate(32deg) skewX(12deg)",
                  left: "20px",
                  top: "-15px",
                }}
              />
              {/* Stripe 2 */}
              <div
                className="absolute w-4 md:w-10 h-36 md:h-72 opacity-30"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(147,147,147,0.3))",
                  transform: "rotate(32deg) skewX(12deg)",
                  left: "50px",
                  top: "-10px",
                }}
              />
              {/* Stripe 3 */}
              <div
                className="absolute w-4 md:w-10 h-36 md:h-72 opacity-30"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(147,147,147,0.3))",
                  transform: "rotate(32deg) skewX(12deg)",
                  right: "50px",
                  top: "-15px",
                }}
              />
              {/* Stripe 4 */}
              <div
                className="absolute w-4 md:w-10 h-36 md:h-72 opacity-30"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(147,147,147,0.3))",
                  transform: "rotate(32deg) skewX(12deg)",
                  right: "20px",
                  top: "-10px",
                }}
              />
            </div>

            {/* Star Decorations */}
            <svg
              className="absolute left-0 top-[60%] w-10 h-10 md:w-24 md:h-24 text-white/20"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" />
            </svg>
            <svg
              className="absolute right-[30px] md:right-[80px] top-[26%] w-2 h-2 md:w-4 md:h-4 text-white/30"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" />
            </svg>
            <svg
              className="absolute right-[25%] top-[2%] w-2 h-2 md:w-4 md:h-4 text-white/30"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" />
            </svg>

            {/* === MOBILE LAYOUT === */}
            <div className="md:hidden absolute inset-0">
              {/* Mobile Header - Title and Arrow */}
              <div className="absolute top-3 left-0 right-0 px-2.5 flex items-start justify-between w">
                {/* Title */}
                <p
                  className="text-[12px] font-medium text-white leading-tight max-w-[150px]"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {/* {cert.title} */}

                  {cert.title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < cert.title.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>

                {/* Arrow Button */}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0px_0px_12px_0px_rgba(0,0,0,0.12)]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 7.5H12M12 7.5L8 3.5M12 7.5L8 11.5"
                      stroke="#070707"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              {/* Curved Divider Line - Mobile */}
              <div className="absolute top-[60px] left-0 right-0">
                <svg
                  viewBox="0 0 238 2"
                  fill="none"
                  className="w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 1H238"
                    stroke="#CFD1D4"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>

              {/* Certificate Image - Mobile */}
              <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-[88%] aspect-211/163">
                <Image
                  src={cert.certificateImage}
                  alt={cert.title}
                  fill
                  className="object-contain rounded-sm"
                />
              </div>
            </div>

            {/* === DESKTOP LAYOUT === */}
            <div className="hidden md:block">
              {/* Top Header - Logo and Year */}
              <div className="absolute top-7 left-0 right-0 px-5 flex items-center justify-between">
                {/* Logo Badge */}
                <div className="bg-white rounded-full p-3 flex items-center justify-center">
                  <Image
                    src={cert.logo}
                    alt={cert.issuer}
                    width={38}
                    height={38}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Year */}
                <span
                  className="text-4xl text-white font-normal"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {cert.year}
                </span>
              </div>

              {/* Curved Divider Line - Desktop */}
              <div className="absolute top-[100px] left-0 right-0">
                <svg
                  viewBox="0 0 577 2"
                  fill="none"
                  className="w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 1C144 1 144 1 288.5 1C433 1 433 1 577 1"
                    stroke="#CFD1D4"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>

              {/* Certificate Image - Desktop */}
              <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-[78%] aspect-[450/348]">
                <Image
                  src={cert.certificateImage}
                  alt={cert.title}
                  fill
                  className="object-contain rounded"
                />
              </div>

              {/* Bottom Content - Desktop */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <p
                  className="text-[22px] font-medium text-[#303030] leading-tight max-w-[285px]"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {cert.title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < cert.title.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                {/* CTA Button */}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 bg-[#070707] rounded-[38px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] py-1 pl-4 pr-1 flex items-center gap-3 group relative overflow-hidden border-2 border-[#070707]"
                >
                  {/* Expanding white background */}
                  <span className="absolute inset-0 bg-white rounded-[38px] transform origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

                  {/* Text */}
                  <span
                    className="text-lg font-medium text-white relative z-10 whitespace-nowrap transition-colors duration-500 group-hover:text-[#070707]"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    View Credentials
                  </span>

                  {/* Arrow Circle */}
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative z-10 flex-shrink-0">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                    >
                      <path
                        d="M3 7.5H12M12 7.5L8 3.5M12 7.5L8 11.5"
                        stroke="#070707"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Right spacer */}
        <div className="flex-shrink-0 w-4 sm:w-6 lg:w-[calc(max((100vw-1440px)/2,0px)+1rem)]" />
      </div>
    </section>
  );
}
