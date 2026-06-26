'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

// ─── Types & Data ─────────────────────────────────────────────────────────────

interface Service {
  number: string;
  title: string;
  titleItalic: string;
  description: string;
  tags: string[];
  includes: string[];
  bestFor: string[];
  outcome: string;
  testimonial: {
    quote: string;
    name: string;
    role: string;
    company: string;
    avatar: string;
    // Visible character between role and company. Defaults to '|'. Use ' ' for a
    // continuous tagline (no styled separator, just a space).
    separator?: string;
  };
  preview: {
    image: string;
    title: string;
  };
}

const TAGS = ['UI Design', 'UX Design', 'Design Systems', 'Components', 'Prototyping', 'Interaction Design'];

const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Mobil App',
    titleItalic: 'Design',
    description:
      'I design mobile experiences that guide users naturally from the first tap to daily use. Clean flows, clear decisions, and zero friction.',
    tags: TAGS,
    includes: [
      'User flows & journey mapping',
      'Wireframes to high-fidelity UI',
      'iOS & Android design',
      'Design systems & reusable components',
    ],
    bestFor: [
      'Startups building their first product',
      'Businesses launching mobile apps',
      'Teams improving existing apps',
    ],
    outcome: 'An app that people don’t need to “figure out” they just use it.',
    testimonial: {
      quote:
        'Khansa turned our idea into an app that just makes sense. Users didn’t need instructions they simply used it.',
      name: 'Warisha Khan',
      role: 'Product Designer',
      company: 'UI/UX Designer',
      avatar: '/assets/images/services/warisha-khan.svg',
    },
    preview: { image: '/assets/images/services/AI-Quran.gif', title: 'Al Quran Application' },
  },
  {
    number: '02',
    title: 'Website',
    titleItalic: 'Design',
    description:
      'Your website should speak clearly, look sharp, and guide users without effort. I design websites that do all three.',
    tags: TAGS,
    includes: [
      'Page structure & content layout',
      'Wireframes & UI design',
      'Responsive design (desktop, tablet, mobile)',
      'Visual direction & consistent',
    ],
    bestFor: [
      'Personal brands & portfolios',
      'Business websites',
      'Product landing pages',
    ],
    outcome: 'A website that builds trust, communicates clearly, and drives action.',
    testimonial: {
      quote:
        'The design completely changed how people see our brand. It feels more professional, more confident, and more us.',
      name: 'Devsort',
      role: 'IT Services',
      company: 'IT Consultant',
      avatar: '/assets/images/services/devsort-icon.svg',
    },
    preview: { image: '/assets/images/services/Web-Design.gif', title: 'Ecommerce Website' },
  },
  {
    number: '03',
    title: 'Dashboard',
    titleItalic: 'Design',
    description:
      'Complex systems don’t have to feel complicated. I design dashboards that simplify data and make actions clear.',
    tags: TAGS,
    includes: [
      'Data structuring & hierarchy',
      'Dashboard layouts & analytics views',
      'Tables, filters, and workflows',
      'Component-based UI system',
    ],
    bestFor: [
      'Admin panels',
      'Internal tools',
      'Data-heavy platforms',
    ],
    outcome: 'A system that feels organized, easy to navigate, and efficient to use.',
    testimonial: {
      quote:
        'Our team saves hours every week now. Everything is easier to find, easier to use, and faster to manage.',
      name: 'Digital Prowler',
      role: 'Your Minions of',
      company: 'Success in Saas Domination!',
      avatar: '/assets/images/services/powerler.svg',
      separator: ' ',
    },
    preview: { image: '/assets/images/services/Dashboard-Design.gif', title: 'Truck Management' },
  },
  {
    number: '04',
    title: 'ERP / CRM / SaaS',
    titleItalic: 'Design',
    description:
      'These products need more than good visuals they need structure, clarity, and logic. That’s where I focus.',
    tags: TAGS,
    includes: [
      'Product structure & user flows',
      'Multi-role experiences (admin, user, manager)',
      'Scalable design systems',
      'End-to-end product design',
    ],
    bestFor: [
      'Startups & growing businesses',
      'ERP / CRM platforms',
      'SaaS products managing operations, customers, or data',
    ],
    outcome: 'A powerful product that feels simple, even with complex functionality.',
    testimonial: {
      quote:
        'She understood the product deeply and designed it in a way that actually works for real users. That’s rare.',
      name: 'Yuniro',
      role: 'Software',
      company: 'development company',
      avatar: '/assets/images/services/Yuniro.svg',
      separator: ' ',
    },
    preview: { image: '/assets/images/services/ERP-CRM-SAAS.gif', title: 'Insurance Management' },
  },
  {
    number: '05',
    title: 'B2B / B2C / C2B Platform',
    titleItalic: 'Design',
    description:
      'Different audiences need different experiences. I design platforms that match how people think, decide, and act.',
    tags: TAGS,
    includes: [
      'User personas & flows',
      'Platform structure & navigation',
      'Booking, marketplace, or service flows',
      'Scalable UI systems',
    ],
    bestFor: [
      'B2B platforms connecting businesses',
      'B2C marketplaces engaging consumers',
      'C2B platforms enabling consumers to offer services or products',
    ],
    outcome: 'A platform that connects users smoothly and drives real engagement.',
    testimonial: {
      quote:
        'Everything feels intentional. The flow, the structure, the experience it all just works.',
      name: 'Hafiz M. Ahmad',
      role: 'Founder',
      company: 'Tech Miracle',
      avatar: '/assets/images/services/Avatar-Image.svg',
      separator: '@',
    },
    preview: { image: '/assets/images/services/B2B-B2C-C2B.gif', title: 'Company Website' },
  },
];

// ─── Animation ────────────────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({ y: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit: (dir: number) => ({ y: dir > 0 ? -60 : 60, opacity: 0 }),
};

const slideTransition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] as const };

// ─── Bottom card: outcome + CTA (left) | dark testimonial (right) ────────────

function BottomCard({ s }: { s: Service }) {
  return (
    <div className="flex rounded-[14px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12)] bg-white p-[12px] xl:p-[14px] gap-[12px] xl:gap-[14px]">
      {/* Left: outcome + CTA */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <p
            className="text-[13px] xl:text-[14px] font-bold text-[#070707] mb-1"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            Outcome:
          </p>
          <p
            className="text-[12px] xl:text-[13px] text-[#5f6266] leading-[1.5]"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            {s.outcome}
          </p>
        </div>
        <button className="mt-3 self-start bg-[#070707] rounded-[38px] h-[36px] xl:h-[40px] px-[14px] xl:px-[18px] flex items-center gap-[8px] hover:bg-[#222] transition-colors duration-200">
          <span
            className="text-[12px] xl:text-[14px] font-medium text-white whitespace-nowrap"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            Start a project
          </span>
          <div className="w-5 h-5 xl:w-6 xl:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="11" height="11" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 7.5H12M12 7.5L8 3.5M12 7.5L8 11.5"
                stroke="#070707"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Right: dark testimonial card */}
      <div className="bg-[#070707] flex-1 rounded-[10px] xl:rounded-[12px] px-[12px] xl:px-[14px] py-[10px] xl:py-[12px] flex flex-col justify-between min-h-[120px] xl:min-h-[140px]">
        <p
          className="text-[10px] xl:text-[11px] text-[#a5a9ae] leading-[1.5]"
          style={{ fontFamily: 'var(--font-satoshi)' }}
        >
          {s.testimonial.quote}
        </p>
        <div>
          <div className="border-t border-dashed border-[#3a3a3a] mb-[8px]" />
          <div className="flex items-center gap-[8px]">
            <div className="w-[32px] h-[32px] xl:w-[36px] xl:h-[36px] rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={s.testimonial.avatar}
                alt={s.testimonial.name}
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p
                className="text-[12px] xl:text-[13px] font-bold text-white leading-tight"
                style={{ fontFamily: 'var(--font-satoshi)' }}
              >
                {s.testimonial.name}
              </p>
              <p className="text-[10px] xl:text-[11px]" style={{ fontFamily: 'var(--font-satoshi)' }}>
                <span className="text-[#ff805e] font-medium">{s.testimonial.role}</span>
                {(s.testimonial.separator ?? '|').trim()
                  ? <span className="text-[#ff805e] mx-1">{s.testimonial.separator ?? '|'}</span>
                  : ' '}
                <span className="text-[#ff805e] italic" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {s.testimonial.company}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Preview card ─────────────────────────────────────────────────────────────

function PreviewCard({ s, className = '' }: { s: Service; className?: string }) {
  return (
    <div
      className={`bg-[#070707] rounded-[9px] lg:rounded-[14px] border-[3px] lg:border-[5px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]
lg:shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden relative ${className}`}
    >
      <Image
        src={s.preview.image}
        alt={s.preview.title}
        fill
        // className="object-cover object-top"
        // object-contain
        // className="    object-fill w-full h-full"
         className="   object-center object-contain  w-full h-full"
        // sizes="560px"
        sizes= "100vw"
      />
    </div>
  );
}

// function PreviewCard({ s, className = '' }: { s: Service; className?: string }) {
//   const isGif = s.preview.image.toLowerCase().endsWith('.gif');
//   return (
//     <div
//       className={`bg-[#070707] rounded-[9px] lg:rounded-[14px] border-[3px] lg:border-[5px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] lg:shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden relative ${className}`}
//     >
//       {isGif ? (
//         // eslint-disable-next-line @next/next/no-img-element
//         <img
//           src={s.preview.image}
//           alt={s.preview.title}
//           className="absolute inset-0 w-full h-full object-contain object-top"
//         />
//       ) : (
//         <Image
//           src={s.preview.image}
//           alt={s.preview.title}
//           fill
//           className="object-contain object-top"
//           sizes="100vw"
//         />
//       )}
//     </div>
//   );
// }
// ─── Desktop: Sticky-scroll cycling ──────────────────────────────────────────

function DesktopStickyServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);

  // overflow-x: hidden on html/body (set in globals.css) breaks position: sticky.
  // Override with inline styles (higher specificity) so sticky works correctly.
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflowX;
    const prevBody = body.style.overflowX;
    html.style.overflowX = 'clip';
    body.style.overflowX = 'clip';
    return () => {
      html.style.overflowX = prevHtml;
      body.style.overflowX = prevBody;
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const next = Math.min(
      Math.floor(latest * SERVICES.length),
      SERVICES.length - 1,
    );
    if (next !== activeIndex) {
      setDirection(next > activeIndex ? 1 : -1);
      setActiveIndex(next);
    }
  });

  const s = SERVICES[activeIndex];

  return (
    <div ref={containerRef} style={{ height: `${SERVICES.length * 110}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[#F8F9FA]">
        <div className="h-full flex flex-col justify-center py-8 lg:py-9 xl:py-10 px-6 lg:px-10 xl:px-[60px]">
          <div className="max-w-[1440px] mx-auto w-full flex flex-col">

            {/* Section header */}
            <div className="flex-shrink-0 mb-3">
              <h2
                className="text-4xl lg:text-5xl xl:text-[52px] font-bold text-[#070707] tracking-[-1.5px] xl:tracking-[-1.6px] leading-[1.1]"
                style={{ fontFamily: 'var(--font-satoshi)' }}
              >
                Main
                <span className="italic font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {' '}Services.
                </span>
              </h2>
            </div>

            <div className="flex-shrink-0 h-px bg-[#e0e2e5] mb-4" />

            {/* Animated content — the parent ({`justify-center`}) vertically centers this block
                in the sticky viewport so spacing stays balanced as the window grows. The height
                shrinks to fit short windows (no fixed floor that would clip the bottom) and caps
                at 600px so the preview/GIF keeps a stable size on tall/large screens. */}
            <div
              className="relative overflow-hidden"
              // style={{ height: 'clamp(400px, calc(100vh - 180px), 600px)' }}
              style={{ minHeight: '520px', maxHeight: '720px', height: 'auto' }}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={slideTransition}
                  className="absolute inset-0 flex flex-row gap-8 lg:gap-10 xl:gap-14"
                >
                  {/* ── Left: service details ── */}
                  <div className="w-[45%] xl:w-[713px] flex-shrink-0 flex flex-col justify-between min-h-0">
                    <div className="flex flex-col gap-5 xl:gap-7">
                      {/* Number + title + description */}
                      <div className="flex flex-col gap-[4px] xl:gap-[6px]">
                        <p
                          className="text-[40px] xl:text-[48px] font-bold text-[#a5a9ae] tracking-[-1.2px] xl:tracking-[-1.4px] leading-none"
                          style={{ fontFamily: 'var(--font-satoshi)' }}
                        >
                          {s.number}
                        </p>
                        <h3
                          className="text-[22px] xl:text-[28px] font-bold text-[#070707] leading-tight"
                          style={{ fontFamily: 'var(--font-satoshi)' }}
                        >
                          {s.title}
                          <span className="italic font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
                            {' '}{s.titleItalic}
                          </span>
                        </h3>
                        <p
                          className="text-[14px] xl:text-[17px] text-[#a5a9ae] leading-[1.5]"
                          style={{ fontFamily: 'var(--font-satoshi)' }}
                        >
                          {s.description}
                        </p>
                      </div>

                      {/* Includes / Best for */}
                      <div className="flex gap-6 xl:gap-8">
                        <div className="flex-1">
                          <p className="text-[13px] xl:text-[14px] font-bold text-[#070707] mb-2" style={{ fontFamily: 'var(--font-satoshi)' }}>
                            What this includes:
                          </p>
                          <ul className="flex flex-col gap-[4px] xl:gap-[6px]">
                            {s.includes.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-[11px] xl:text-[12px] text-[#5f6266] leading-[1.5]" style={{ fontFamily: 'var(--font-satoshi)' }}>
                                <span className="mt-[5px] w-[4px] h-[4px] rounded-full bg-[#5f6266] flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex-1">
                          <p className="text-[13px] xl:text-[14px] font-bold text-[#070707] mb-2" style={{ fontFamily: 'var(--font-satoshi)' }}>
                            Best for:
                          </p>
                          <ul className="flex flex-col gap-[4px] xl:gap-[6px]">
                            {s.bestFor.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-[11px] xl:text-[12px] text-[#5f6266] leading-[1.5]" style={{ fontFamily: 'var(--font-satoshi)' }}>
                                <span className="mt-[5px] w-[4px] h-[4px] rounded-full bg-[#5f6266] flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Bottom card — justify-between pins this to the bottom of the clamped area */}
                    <BottomCard s={s} />
                  </div>

                  {/* ── Right: preview ── */}
                  {/* <div className="flex-1 flex flex-col min-w-0">
                    <PreviewCard s={s} className="flex-1" />
                  </div> */}
                  {/* 1st change */}
                  {/* <div className="flex-1 flex items-stretch min-w-0">
                    <div className="w-full h-full min-h-[420px] md:min-h-[520px] lg:min-h-[600px]">
                      <PreviewCard s={s} className="w-full h-full" />
                    </div>
                  </div> */}
                  {/* 12nd chg */}
                  <div className="flex-1 min-w-0 h-full">
                    {/* 3rd */}
  {/* <PreviewCard s={s} className="w-full h-full" /> */}
    <PreviewCard s={s} className="{`w-full h-full relative overflow-hidden ${className}`}" />


</div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile: stacked ──────────────────────────────────────────────────────────

function MobileStackedServices() {
  return (
    <section className="py-10 px-4 sm:px-6 bg-[#F8F9FA]">
      {/* Section heading */}
      <h2
        className="text-[32px] font-bold text-[#070707] tracking-[-0.96px] mb-5"
        style={{ fontFamily: 'var(--font-satoshi)' }}
      >
        Main
        <span className="italic font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
          {' '}Services.
        </span>
      </h2>

      <div className="h-px bg-[#e0e2e5] mb-8" />

      <div className="flex flex-col">
        {SERVICES.map((svc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Number */}
            <p
              className="text-[40px] font-bold text-[#a5a9ae] tracking-[-1.2px] leading-none mb-2"
              style={{ fontFamily: 'var(--font-satoshi)' }}
            >
              {svc.number}
            </p>

            {/* Title */}
            <h3
              className="text-[24px] font-bold text-[#070707] leading-tight mb-2"
              style={{ fontFamily: 'var(--font-satoshi)' }}
            >
              {svc.title}
              <span className="italic font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
                {' '}{svc.titleItalic}
              </span>
            </h3>

            {/* Description */}
            <p
              className="text-[14px] text-[#a5a9ae] leading-[1.6] mb-6"
              style={{ fontFamily: 'var(--font-satoshi)' }}
            >
              {svc.description}
            </p>

            {/* Two-column: What this includes / Best for */}
            <div className="flex gap-6 mb-6">
              {/* Includes */}
              <div className="flex-1">
                <p
                  className="text-[16px] font-medium text-[#070707] mb-3"
                  style={{ fontFamily: 'var(--font-satoshi)' }}
                >
                  What this includes:
                </p>
                <ul className="flex flex-col gap-[6px]">
                  {svc.includes.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-[12px] text-[#5f6266] leading-[1.5]"
                      style={{ fontFamily: 'var(--font-satoshi)' }}
                    >
                      <span className="mt-[5px] w-[4px] h-[4px] rounded-full bg-[#5f6266] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best for */}
              <div className="flex-1">
                <p
                  className="text-[16px] font-medium text-[#070707] mb-3"
                  style={{ fontFamily: 'var(--font-satoshi)' }}
                >
                  Best for:
                </p>
                <ul className="flex flex-col gap-[6px]">
                  {svc.bestFor.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-[12px] text-[#5f6266] leading-[1.5]"
                      style={{ fontFamily: 'var(--font-satoshi)' }}
                    >
                      <span className="mt-[5px] w-[4px] h-[4px] rounded-full bg-[#5f6266] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Preview card */}
            {/* <PreviewCard s={svc} className="h-[240px]" /> */}
            <PreviewCard s={svc} className=" w-full h-[380px] sm:h-[480px]" />


            {i < SERVICES.length - 1 && (
              <div className="my-10 h-px bg-[#e0e2e5]" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function MainServices() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopStickyServices />
      </div>
      <div className="lg:hidden">
        <MobileStackedServices />
      </div>
    </>
  );
}
