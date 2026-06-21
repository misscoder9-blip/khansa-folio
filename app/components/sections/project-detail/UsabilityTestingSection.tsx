"use client";

interface CalloutItem {
  label: string;
  description: string;
}

/* Parse heading with *italic* markers */
function renderHeading(text: string) {
  const parts = text.split(/(\*[^*]+\*)/);
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <span
          key={i}
          className="italic font-bold"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {part.slice(1, -1)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

interface UsabilityTestingSectionProps {
  topHeading: string;
  topHeadingItalic: string;
  topDescription: string;
  heading: string;
  headingItalic: string;
  description: string;
  descriptionBullets?: string[];
  phoneImage?: string;
  phoneFramed?: boolean;
  darkCardHeading?: string;
  darkCardHeadingItalic?: string;
  challenges: CalloutItem[];
  solutions: CalloutItem[];
}

export default function UsabilityTestingSection({
  topHeading,
  topHeadingItalic,
  topDescription,
  heading,
  description,
  descriptionBullets,
  phoneImage = "/assets/projectdetail/usability-home.svg",
  phoneFramed = true,
  darkCardHeading = "Usability testing with",
  darkCardHeadingItalic = "in the right direction",
  challenges,
  solutions,
}: UsabilityTestingSectionProps) {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        {/* ── Top Heading (hidden on mobile) ── */}
        {topHeading && (
          <div className="hidden md:block mb-12 md:mb-20">
            <h2
              className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#070707] leading-tight tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {topHeading}{" "}
              <span
                className="italic font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {topHeadingItalic}
              </span>
            </h2>
            {topDescription && (
              <p
                className="mt-4 md:mt-6 text-base md:text-[20px] text-[#5f6266] leading-normal"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {topDescription}
              </p>
            )}
          </div>
        )}

        {/* ── Sub Heading ── */}
        <h3
          className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#070707] leading-tight tracking-[-0.02em] mb-12 md:mb-20"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          {heading.includes("*") ? renderHeading(heading) : heading}
        </h3>

        {/* ── Main Content: Challenges | Phone | Solutions | Bar | Dark Card ── */}
        <div className="hidden xl:flex items-center justify-center gap-[20px]">
          {/* Left: Challenges */}
          <div className="flex flex-col items-center w-[248px] py-8">
            <div className="mb-[93px] w-full">
              <p
                className="text-[24px] font-bold text-[#070707] leading-normal"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                Identified UX
              </p>
              <p
                className="text-[32px] font-bold italic text-[#070707] tracking-[-0.96px]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Challenges
              </p>
            </div>
            <div className="flex flex-col gap-[49px]">
              {challenges.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex flex-col items-end text-right w-[163px]">
                    <p
                      className="text-[14px] font-medium text-[#070707] leading-normal"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-[12px] text-[#5f6266] leading-normal"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-[2px] flex-shrink-0">
                    <img
                      src="/assets/projectdetail/short-six-bar.svg"
                      alt=""
                      className="h-[126px] w-[2px]"
                    />
                    <img
                      src="/assets/projectdetail/right-to-left-arrow.svg"
                      alt=""
                      className="w-[44px] h-[15px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Phone Mockup */}
          <div className="flex-shrink-0">
            {phoneFramed ? (
              <div className="w-[329px] rounded-[14px] overflow-hidden border-[5px] border-white shadow-[0px_0px_39px_2px_rgba(0,0,0,0.4)]">
                <img
                  src={phoneImage}
                  alt="Usability testing home screen"
                  className="w-full h-auto block"
                />
              </div>
            ) : (
              <img
                src={phoneImage}
                alt="Usability testing home screen"
                className="w-[372px] h-auto block"
              />
            )}
          </div>

          {/* Right: Solutions */}
          <div className="flex flex-col items-center w-[248px] py-8">
            <div className="mb-[93px] w-full text-right">
              <p
                className="text-[24px] font-bold text-[#070707] leading-normal"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                Implemented UX
              </p>
              <p
                className="text-[32px] font-bold italic text-[#070707] tracking-[-0.96px]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Solutions
              </p>
            </div>
            <div className="flex flex-col gap-[49px]">
              {solutions.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex items-center gap-[2px] flex-shrink-0">
                    <img
                      src="/assets/projectdetail/left-to-rigt-arrow.svg"
                      alt=""
                      className="w-[44px] h-[15px]"
                    />
                    <img
                      src="/assets/projectdetail/short-six-bar.svg"
                      alt=""
                      className="h-[126px] w-[2px]"
                    />
                  </div>
                  <div className="flex flex-col text-right w-[163px]">
                    <p
                      className="text-[14px] font-medium text-[#070707] leading-normal"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-[12px] text-[#5f6266] leading-normal"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Bar (vertical connector) */}
          <img
            src="/assets/projectdetail/center-bar.svg"
            alt=""
            className="h-[709px] w-[22px] flex-shrink-0"
          />

          {/* Dark Summary Card */}
          <div
            className="bg-[#070707] rounded-[12px] px-6 py-8 flex-1 min-w-0"
          >
            <h4
              className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white leading-tight tracking-[-0.02em] mb-6"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {darkCardHeading}{" "}
              <span
                className="italic font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {darkCardHeadingItalic}
              </span>
            </h4>
            {descriptionBullets && descriptionBullets.length > 0 ? (
              <ul
                className="list-disc pl-5 flex flex-col gap-3 text-base md:text-[18px] text-[#cfd1d4] leading-normal"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {descriptionBullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : (
              <p
                className="text-base md:text-[20px] text-[#cfd1d4] leading-normal"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {description}
              </p>
            )}
          </div>
        </div>

        {/* ── Mobile Layout – 3-column (challenges | phone | solutions) ── */}
        <div className="xl:hidden flex flex-col gap-8">
          {/* Three columns */}
          <div className="flex items-end justify-center gap-0">
            {/* Left: Challenges */}
            <div className="flex flex-col items-center w-[105px] py-3 flex-shrink-0">
              <div className="mb-10 w-full">
                <p
                  className="text-[10px] font-bold text-[#070707] leading-normal"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  Identified UX
                </p>
                <p
                  className="text-[13.5px] font-bold italic text-[#070707] tracking-[-0.4px] leading-normal"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Challenges
                </p>
              </div>
              <div className="flex flex-col gap-[21px]">
                {challenges.map((item, i) => (
                  <div key={i} className="flex items-center gap-[7px]">
                    <div className="flex flex-col items-end text-right w-[69px]">
                      <p
                        className="text-[8px] font-medium text-[#070707] leading-normal"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-[8px] text-[#5f6266] leading-normal"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-[1px] flex-shrink-0">
                      <img
                        src="/assets/projectdetail/short-six-bar.svg"
                        alt=""
                        style={{ height: "54px", width: "1px" }}
                      />
                      <img
                        src="/assets/projectdetail/right-to-left-arrow.svg"
                        alt=""
                        style={{ width: "18px", height: "6px" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center: Phone mockup */}
            <div className="flex-shrink-0">
              {phoneFramed ? (
                <div
                  className="rounded-[5px] overflow-hidden border-[1.75px] border-white"
                  style={{
                    width: "119px",
                    boxShadow: "0px 0px 14px 0.7px rgba(0,0,0,0.4)",
                  }}
                >
                  <img
                    src={phoneImage}
                    alt="Usability testing home screen"
                    className="w-full h-auto block"
                  />
                </div>
              ) : (
                <img
                  src={phoneImage}
                  alt="Usability testing home screen"
                  className="h-auto block"
                  style={{ width: "135px" }}
                />
              )}
            </div>

            {/* Right: Solutions */}
            <div className="flex flex-col items-center w-[105px] py-3 flex-shrink-0">
              <div className="mb-10 w-full text-right">
                <p
                  className="text-[10px] font-bold text-[#070707] leading-normal"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  Implemented UX
                </p>
                <p
                  className="text-[13.5px] font-bold italic text-[#070707] tracking-[-0.4px] leading-normal"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Solutions
                </p>
              </div>
              <div className="flex flex-col gap-[21px]">
                {solutions.map((item, i) => (
                  <div key={i} className="flex items-center gap-[7px]">
                    <div className="flex items-center gap-[1px] flex-shrink-0">
                      <img
                        src="/assets/projectdetail/left-to-rigt-arrow.svg"
                        alt=""
                        style={{ width: "18px", height: "6px" }}
                      />
                      <img
                        src="/assets/projectdetail/short-six-bar.svg"
                        alt=""
                        style={{ height: "54px", width: "1px" }}
                      />
                    </div>
                    <div className="flex flex-col text-left w-[69px]">
                      <p
                        className="text-[8px] font-medium text-[#070707] leading-normal"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-[8px] text-[#5f6266] leading-normal"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dark Summary Card */}
          <div className="bg-[#070707] rounded-[12px] px-3 py-[18px]">
            <h4
              className="text-[32px] font-bold text-white leading-normal tracking-[-0.96px] mb-3"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {darkCardHeading}{" "}
              <span
                className="italic font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {darkCardHeadingItalic}
              </span>
            </h4>
            {descriptionBullets && descriptionBullets.length > 0 ? (
              <ul
                className="list-disc pl-4 flex flex-col gap-2 text-[12px] text-[#cfd1d4] leading-normal"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {descriptionBullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : (
              <p
                className="text-[12px] text-[#cfd1d4] leading-normal"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
