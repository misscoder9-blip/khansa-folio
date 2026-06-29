"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function AnimatedCard() {
  const [visible, setVisible] = useState(false);

  const pathname = usePathname();

  const allowedPages = ["/", "/about", "/work"];
  const isAllowed = allowedPages.includes(pathname);

  useEffect(() => {
    if (!isAllowed) return;

    setVisible(false);

    let raf: number;
    let timer: ReturnType<typeof setTimeout>;

    raf = requestAnimationFrame(() => {
      timer = setTimeout(() => {
        setVisible(true);
      }, 500);
    });

    const handleScroll = () => {
      setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, isAllowed]);

  if (!isAllowed) return null;

  return (
    <div className="hidden lg:block">
      <div
        style={{
          position: "fixed",
          top: "74px",
          right: "max(60px, calc((100vw - 1440px) / 2 + 60px))",
          width: "514px",
          height: "279px",
          background: "#FFFFFF",
          boxShadow: "0px 0px 80px 0px #0000003D",
          padding: "12px",
          borderRadius: "7px",
          transform: visible ? "translateY(0)" : "translateY(-120px)",
          opacity: visible ? 1 : 0,
          transition: visible
            ? "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease"
            : "transform 0.3s ease, opacity 0.3s ease",
          pointerEvents: visible ? "auto" : "none",
          zIndex: 1000,
        }}
      >
        {/* Inner wrapper */}
        <div className="w-full h-full flex gap-[7px]">

          {/* Left Box */}
          <div className="w-[337px] h-[255px] px-3 pt-3 pb-3 rounded-[12px] bg-[#F8F9FA] flex flex-col justify-between">

            {/* Top: Heading + Subtext */}
            <div className="flex flex-col gap-[6px]">
              <p className="font-[Satoshi,sans-serif] font-bold text-[40px] leading-[44px] tracking-[-0.03em] text-[#0A0A0A]">
                Start <br />
                a{" "}
                <span className="font-['Playfair_Display',serif] font-bold italic text-[40px] leading-[44px] tracking-[-0.03em]">
                  Project
                </span>
                .
              </p>

              <p className="font-[Satoshi,sans-serif] font-medium text-[16px] leading-[100%] tracking-[0em] text-[#6B6B6B] mt-4">
                Let's book &amp; talk with our manager.
              </p>
            </div>

            {/* Bottom: Button */}
            <a href="#contact" className="w-full">
              <button className="w-full bg-[#070707] rounded-[38px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] py-3 px-6 flex items-center justify-start relative overflow-hidden group border-2 border-[#070707]">
                <span className="absolute inset-0 bg-white rounded-[38px] transform origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                <span className="text-[18px] font-medium relative z-10 text-white transition-colors duration-500 group-hover:text-[#070707] font-[var(--font-satoshi)]">
                  Book Call
                </span>
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

          {/* Right Box */}
          <div className="w-[156px] h-[255px] rounded-[12px] bg-[#F8F9FA] relative overflow-hidden flex flex-col justify-end">

            {/* Profile Image */}
            <div className="absolute top-[30px] left-0 w-full h-[180px]">
              <Image
                src="/assets/images/khunsaprof2.png"
                alt="Khansa"
                fill
                className="object-cover"
                style={{ objectPosition: "center 10%" }}
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(248, 249, 250, 0.00) 55%, #F8F9FA 90%)",
                }}
              />
            </div>

            {/* Khansa text at bottom center */}
            <p className="relative z-10 w-full text-center pb-3 font-['Playfair_Display',serif] font-bold italic text-[24px] leading-[100%] tracking-[-0.03em] text-[#0A0A0A]">
              Khansa.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}