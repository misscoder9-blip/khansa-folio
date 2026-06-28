'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialLink from '@/app/components/ui/SocialLink';

function UpworkCard({ href = 'https://upwork.com' }: { href?: string }) {
  return (
    <div
      className="rounded-[12px] overflow-hidden w-full p-[18px] flex flex-col gap-3"
      style={{ maxWidth: '428px', backgroundColor: '#121111' }}
    >
      {/* Header: Upwork logo + label + arrow */}
      <div className="flex items-center gap-[14px] shrink-0">
        <img
          src="/assets/icons/footer/upwork.svg"
          alt="Upwork"
          width={52}
          height={52}
          className="flex-shrink-0"
        />
        <span
          className="text-[20px] font-medium text-[#cfd1d4] whitespace-nowrap"
          style={{ fontFamily: 'var(--font-satoshi)' }}
        >
          Upwork
        </span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto hover:scale-110 transition-transform duration-200"
        >
          <img
            src="/assets/icons/footer/Iconarrowfooter.svg"
            alt="Visit Upwork"
            width={32}
            height={32}
          />
        </a>
      </div>

      {/* Upwork profile screenshot — fills remaining space, full image shown */}
      <div className="flex-1 overflow-hidden rounded-[8px]">
        <img
          src="/assets/icons/footer/upwordprofile.png"
          alt="Upwork profile"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on project detail pages (they have their own nav footer)
  if (pathname.startsWith('/projects/')) return null;

  const greetings = [
    { text: 'Ho', italic: 'la!' },
    { text: 'Assal', italic: 'am', text2: ' - Walai', italic2: 'kum!' },
    { text: 'Nma', italic: 'sty!' },
    { text: 'Bonj', italic: 'our!' },
    { text: 'Ter', italic: 've!' },
    { text: 'Привіт', italic: '' },
    { text: 'Ci', italic: 'ao!' },
    { text: 'Hel', italic: 'lo!' },
    { text: 'Gut', italic: 'en', text2: ' Ta', italic2: 'g!' },
  ];

  return (
    <footer className="bg-[#070707] text-white py-0 px-4 sm:px-6 lg:py-0 lg:px-0 relative overflow-hidden">
      <div className="hidden lg:block">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-3">
            {/* Left & Center Columns Group */}
            <div className="col-span-2 border-r border-dashed border-[#5F6266] flex flex-col">
              {/* Top Section */}
              <div className="grid grid-cols-2 flex-1">
                {/* Brand Section */}
                <div className="border-r border-dashed border-[#5F6266] pb-10 pr-10 pl-[60px] pt-[71px]">
                  <Link href="/" className="inline-block">
                    <h3
                      className="text-5xl font-bold mb-5 tracking-tight cursor-pointer hover:text-[#ff805e] transition-colors"
                      style={{ fontFamily: 'var(--font-craftwork)' }}
                    >
                      Khansa
                      <span
                        className="italic font-semibold"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                      >
                        folio
                      </span>
                    </h3>
                  </Link>
                  <p
                    className="text-lg text-[#5f6266] leading-relaxed max-w-[341px]"
                    style={{ fontFamily: 'var(--font-satoshi)' }}
                  >
                    My mission is simple: to create beautiful, functional projects that not only look great but also deliver results for my clients.
                  </p>
                </div>

                {/* Center Section - Nav & Hire */}
                <div className="flex flex-col">
                  {/* Navigation */}
                  <div className="h-[106px] flex items-center justify-center border-b border-dashed border-[#5F6266]">
                    <div className="w-[360px] flex justify-between">
                      <Link
                        href="/"
                        className="text-white hover:text-[#ff805e] transition-colors text-base font-medium"
                        style={{ fontFamily: 'var(--font-satoshi)' }}
                      >
                        Home
                      </Link>
                      <Link
                        href="/work"
                        className="text-white hover:text-[#ff805e] transition-colors text-base font-medium"
                        style={{ fontFamily: 'var(--font-satoshi)' }}
                      >
                        Work
                      </Link>
                      <Link
                        href="/about"
                        className="text-white hover:text-[#ff805e] transition-colors text-base font-medium"
                        style={{ fontFamily: 'var(--font-satoshi)' }}
                      >
                        About me
                      </Link>
                      <a
                        href="#contact"
                        className="text-white hover:text-[#ff805e] transition-colors text-base font-medium"
                        style={{ fontFamily: 'var(--font-satoshi)' }}
                      >
                        Contact
                      </a>
                    </div>
                  </div>

                  {/* Hire Card */}
                  <div className="flex-1 flex justify-center items-center">
                    <UpworkCard href="https://www.upwork.com/freelancers/~0198fe9b5f983d0a5b?mp_source=share" />
                  </div>
                </div>
              </div>

              {/* Bottom Section - Marquee */}
              <div className="border-t border-b border-dashed border-[#5F6266] h-[176px] relative overflow-hidden flex items-center">
                <div className="flex gap-24 animate-scroll whitespace-nowrap" style={{ width: 'max-content' }}>
                  {[...greetings, ...greetings, ...greetings].map((greeting, index) => (
                    <p
                      key={index}
                      className="text-5xl tracking-tight"
                      style={{ fontFamily: 'var(--font-craftwork)', letterSpacing: '-1.44px' }}
                    >
                      <span className="text-[#ff805e]">{greeting.text}</span>
                      <span
                        className="text-[#ff805e] italic font-semibold"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                      >
                        {greeting.italic}
                      </span>
                      {greeting.text2 && (
                        <>
                          <span className="text-[#ff805e]">{greeting.text2}</span>
                          <span
                            className="text-[#ff805e] italic font-semibold"
                            style={{ fontFamily: 'var(--font-playfair)' }}
                          >
                            {greeting.italic2}
                          </span>
                        </>
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Social Links */}
            <div className="p-10 pt-[42px] flex justify-end px-[60px]">
              <div className="w-[356px] flex flex-col h-[455px] justify-between">
                <SocialLink
                  icon="whatsapp"
                  platform="Whatsapp"
                  handle="03283022920"
                  href="https://wa.me/923283022920"
                  iconBgColor="#25D366"
                />
                <div className="border-t border-dashed border-[#5F6266] w-full"></div>
                <SocialLink
                  icon="email"
                  platform="Email"
                  handle="Khunsa.nomani"
                  href="mailto:khunsa.nomani@gmail.com"
                  iconBgColor="#EA4335"
                />
                <div className="border-t border-dashed border-[#5F6266] w-full"></div>
                <SocialLink
                  icon="linkedin"
                  platform="LinkedIn"
                  handle="Khansa ✪‌"
                  href="https://www.linkedin.com/in/khunsa-nomani/"
                  iconBgColor="#0A66C2"
                />
                <div className="border-t border-dashed border-[#5F6266] w-full"></div>
                <SocialLink
                  icon="behance"
                  platform="Behance"
                  handle="Khunsa ✪‌ Abdul Rasheed"
                  href="https://www.behance.net/khunsanomani"
                  iconBgColor="#1769FF"
                />
                <div className="border-t border-dashed border-[#5F6266] w-full"></div>
                <SocialLink
                  icon="instagram"
                  platform="Instagram"
                  handle="@ui.khansa"
                  href="https://instagram.com/ui.khansa"
                  iconBgColor="#E4405F"
                />
                <div className="border-t border-dashed border-[#5F6266] w-full"></div>
                <SocialLink
                  icon="dribbble"
                  platform="Dribble"
                  handle="Khunsa Nomani"
                  href=" https://dribbble.com/Jvkhunsa"
                  iconBgColor="#EA4C89"
                />
                <div className="border-t border-dashed border-[#5F6266] w-full"></div>
                <SocialLink
                  icon="contra"
                  platform="Contra"
                  handle="Khunsa Nomani"
                  href="https://contra.com/khunsa_nomani/work?r=khunsa_nomani"
                  iconBgColor="#000000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Stacked Layout */}
      <div className="lg:hidden px-4 sm:px-6 py-12 space-y-12">
        <div className="text-center">
          <Link href="/">
            <h3
              className="text-4xl font-bold mb-4 cursor-pointer hover:text-[#ff805e] transition-colors inline-block"
              style={{ fontFamily: 'var(--font-craftwork)' }}
            >
              Khansa<span className="italic" style={{ fontFamily: 'var(--font-playfair)' }}>folio</span>
            </h3>
          </Link>
          <p
            className="text-base text-[#5f6266]"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            My mission is simple: to create beautiful, functional projects that not only look great but also deliver results for my clients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/" className="text-white hover:text-[#ff805e]" style={{ fontFamily: 'var(--font-satoshi)' }}>Home</Link>
          <Link href="/work" className="text-white hover:text-[#ff805e]" style={{ fontFamily: 'var(--font-satoshi)' }}>Work</Link>
          <Link href="/about" className="text-white hover:text-[#ff805e]" style={{ fontFamily: 'var(--font-satoshi)' }}>About me</Link>
          <a href="#contact" className="text-white hover:text-[#ff805e]" style={{ fontFamily: 'var(--font-satoshi)' }}>Contact</a>
        </div>

        <div className="flex justify-center">
          <UpworkCard href="https://upwork.com" />
        </div>

        <div className="max-w-md mx-auto">
          <SocialLink icon="whatsapp" platform="Whatsapp" handle="03283022920" href="https://wa.me/923283022920" iconBgColor="#25D366" />
          <div className="h-px bg-white/10 my-3"></div>
          <SocialLink icon="email" platform="Email" handle="Khunsa.nomani" href="mailto:khunsa.nomani@example.com" iconBgColor="#EA4335" />
          <div className="h-px bg-white/10 my-3"></div>
          <SocialLink icon="linkedin" platform="LinkedIn" handle="Khansa ✪‌" href="https://linkedin.com" iconBgColor="#0A66C2" />
          <div className="h-px bg-white/10 my-3"></div>
          <SocialLink icon="behance" platform="Behance" handle="Khunsa ✪‌ Abdul Rasheed" href="https://behance.net" iconBgColor="#1769FF" />
          <div className="h-px bg-white/10 my-3"></div>
          <SocialLink icon="instagram" platform="Instagram" handle="@ui.khansa" href="https://instagram.com/ui.khansa" iconBgColor="#E4405F" />
          <div className="h-px bg-white/10 my-3"></div>
          <SocialLink icon="dribbble" platform="Dribble" handle="Khunsa Nomani" href="https://dribbble.com" iconBgColor="#EA4C89" />
          <div className="h-px bg-white/10 my-3"></div>
          <SocialLink icon="contra" platform="Contra" handle="Khunsa Nomani" href="https://contra.com" iconBgColor="#000000" />
        </div>

        {/* Mobile Greetings */}
        <div className="overflow-hidden py-2 leading-none">
          <div className="flex gap-24 animate-scroll whitespace-nowrap leading-none" style={{ width: 'max-content' }}>
            {[...greetings, ...greetings, ...greetings].map((greeting, index) => (
              <p
                key={index}
                className="text-4xl tracking-tight"
                style={{ fontFamily: 'var(--font-craftwork)' }}
              >
                <span className="text-[#ff805e]">{greeting.text}</span>
                <span
                  className="text-[#ff805e] italic font-semibold"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {greeting.italic}
                </span>
                {greeting.text2 && (
                  <>
                    <span className="text-[#ff805e]">{greeting.text2}</span>
                    <span
                      className="text-[#ff805e] italic font-semibold"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {greeting.italic2}
                    </span>
                  </>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
