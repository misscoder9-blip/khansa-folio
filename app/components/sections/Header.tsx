"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import MoonIcon from "@/app/components/icons/MoonIcon";
// import SunIcon from "@/app/components/icons/SunIcon";
import PlusIcon from "@/app/components/icons/PlusIcon";
import CloseIcon from "@/app/components/icons/CloseIcon";
import AnimatedCard from "./AnimatedCard";

// Nav item component with hover animation
function NavItem({
  children,
  onClick,
  href,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}) {
  const baseClasses =
    "relative px-2.5 py-1 text-[#5f6266] text-[16px] font-medium transition-all duration-600 group flex flex-col items-center";

  const content = (
    <>
      <span className="transform transition-transform duration-600 group-hover:-translate-y-1 group-hover:text-black">
        {children}
      </span>
      <span className="absolute bottom-0 w-1 h-1 rounded-full bg-[#070707] opacity-0 transform scale-0 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isDark, setIsDark] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // const toggleTheme = () => {
  //   setIsDark(!isDark);
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50 px-4 sm:px-6 lg:px-[60px] py-3">
      <AnimatedCard/>

      <nav className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        {/* Left: Profile Picture with expanding Khansafolio */}
        <Link
          href="/"
          className="relative flex items-center cursor-pointer"
          onMouseEnter={() => setIsProfileHovered(true)}
          onMouseLeave={() => setIsProfileHovered(false)}
        >
          {/* Expanding background pill */}
          <div
            className={`absolute left-0 h-[55px] bg-[#F8F9FA] rounded-full transition-all duration-300 ease-out flex items-center ${isProfileHovered ? "w-[190px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)]" : "w-[55px]"
              }`}
          />

          {/* Profile image */}
          <div className="relative w-[55px] h-[55px] rounded-full overflow-hidden flex items-center justify-center font-bold text-lg flex-shrink-0 z-10">
            <Image
              src="/assets/images/navbaricon.png"
              alt="Profile"
              fill
              className="object-cover"
              unoptimized
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>

          {/* Khansafolio text */}
          <div
            className={`ml-2 whitespace-nowrap overflow-hidden transition-all duration-600 ease-out z-10 ${isProfileHovered ? "w-[110px] opacity-100" : "w-0 opacity-0"
              }`}
          >
            <span
              className="text-[#070707] text-base font-bold"
              style={{ fontFamily: "var(--font-craftwork)" }}
            >
              Khansa
            </span>
            <span
              className="text-[#070707] text-base font-bold italic"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              folio
            </span>
          </div>
        </Link>

        {/* Right: Navigation and Actions */}
        {/* <div className="bg-white rounded-[32px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)] flex items-center gap-1.5 pl-4 pr-1 h-[55px] border border-gray-100"> */}
<div className="bg-white rounded-[32px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center gap-3 px-4 h-[55px] border border-gray-100">          {/* Desktop Navigation Links */}
          {/* <div className="hidden md:flex items-center px-2.5 gap-1">
            <NavItem href="/work">Work</NavItem>
            <NavItem href="/about">About me</NavItem>
          </div> */}
          <div className="hidden md:flex items-center justify-center gap-1 px-2.5">
  <NavItem href="/work">Work</NavItem>
  <NavItem href="/about">About me</NavItem>
</div>

          {/* Hire Me Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#070707] text-white rounded-[24px] px-5 py-2.5 text-[15px] font-medium shadow-[0px_4px_12px_rgba(0,0,0,0.15)] hover:bg-black transition-all duration-200 hidden md:flex items-center justify-center whitespace-nowrap hover:shadow-[0px_6px_16px_rgba(0,0,0,0.2)]"
          >
            Hire Me
          </button>

          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="bg-[#f8f9fa] rounded-full hover:bg-gray-200 transition-all duration-200 flex items-center justify-center w-[30px] h-[30px] flex-shrink-0 hover:scale-105"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <SunIcon className="w-4 h-4 text-gray-700" />
            ) : (
              <MoonIcon className="w-4 h-4 text-gray-700" />
            )}
          </button> */}

          {/* Menu Toggle - Visible on mobile only */}
          <button
            onClick={toggleMenu}
            className="flex md:hidden bg-[#f8f9fa] rounded-full hover:bg-gray-200 transition-all duration-200 items-center justify-center w-[30px] h-[30px] flex-shrink-0 hover:scale-105"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <CloseIcon className="w-4 h-4 text-gray-700" />
            ) : (
              <PlusIcon className="w-4 h-4 text-gray-700" />
            )}
          </button>
        </div>
        {/* <AnimatedCard/> */}
      </nav>

      {/* Mobile/Dropdown Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu */}
          <div className="absolute top-16 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 w-64 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              <Link
                href="/work"
                onClick={() => setIsMenuOpen(false)}
                className="text-left px-4 py-3 text-[#5f6266] text-base font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200 block"
              >
                Work
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-left px-4 py-3 text-[#5f6266] text-base font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200 block"
              >
                About me
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
