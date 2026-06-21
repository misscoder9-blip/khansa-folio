'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface SocialLinkProps {
  icon: string;
  platform: string;
  handle: string;
  href?: string;
  iconBgColor?: string;
}

export default function SocialLink({
  icon,
  platform,
  handle,
  href,
  iconBgColor = '#25D366'
}: SocialLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const iconMap: { [key: string]: string } = {
    whatsapp: '/assets/icons/footer/whatsapp.svg',
    email: '/assets/icons/footer/mail-02.svg',
    linkedin: '/assets/icons/footer/linkedin-01.svg',
    behance: '/assets/icons/footer/behance-02.svg',
    instagram: '/assets/icons/footer/instagram.svg',
    dribbble: '/assets/icons/footer/dribbble.svg',
    contra: '/assets/icons/footer/contra.svg',
  };

  const content = (
    <div
      className="min-h-6 w-full relative flex items-center cursor-pointer py-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div
        className="w-6 h-6 flex items-center justify-center flex-shrink-0 rounded-full transition-all duration-300 ease-in-out relative z-10"
        style={{
          backgroundColor: isHovered ? iconBgColor : 'transparent',
          padding: isHovered ? '4px' : '0'
        }}
      >
        <div className="w-full h-full relative">
          <Image
            src={iconMap[icon] || '/assets/icons/footer/whatsapp.svg'}
            alt={platform}
            width={24}
            height={24}
            className="object-contain"
            style={{
              filter: isHovered ? 'brightness(0) invert(1)' : 'none'
            }}
          />
        </div>
      </div>

      {/* Platform Name - fades out on hover */}
      <span
        className="text-sm font-medium text-[#CFD1D4] ml-2 transition-all duration-300 ease-in-out absolute left-8 whitespace-nowrap pointer-events-none"
        style={{
          fontFamily: 'var(--font-satoshi)',
          opacity: isHovered ? 0 : 1,
          transform: isHovered ? 'translateX(-10px)' : 'translateX(0)'
        }}
      >
        {platform}
      </span>

      {/* Handle Group (Dot + Text) - Right aligned initially, moves left on hover */}
      <div
        className="absolute flex items-center gap-2 transition-all duration-300 ease-in-out whitespace-nowrap"
        style={{
          left: isHovered ? '36px' : '100%',
          transform: isHovered ? 'none' : 'translateX(-100%)',
          paddingRight: isHovered ? '32px' : '0' // Make space for arrow on hover
        }}
      >
        {/* Dot Badge */}
        <div
          className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0 : 1
          }}
        />

        {/* Handle Text */}
        <span
          className="text-sm font-medium text-white"
          style={{
            fontFamily: 'var(--font-satoshi)',
          }}
        >
          {handle}
        </span>
      </div>

      {/* Arrow Button - appears on hover */}
      <div
        className="w-6 h-6 rounded-full bg-[#ff805e] flex items-center justify-center absolute right-0 transition-all duration-300 ease-in-out flex-shrink-0 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'scale(1)' : 'scale(0.8)'
        }}
      >
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        {content}
      </a>
    );
  }

  return content;
}
