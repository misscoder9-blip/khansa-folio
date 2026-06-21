import type { ChallengeCard } from "@/app/data/projects";

interface ChallengeCardsProps {
  heading: string;
  headingItalic: string;
  description?: string[];
  cards: ChallengeCard[];
}

function DottedSeparator() {
  return (
    <div className="w-full h-0 border-t border-dotted border-[#cfd1d4]" />
  );
}

export default function ChallengeCards({
  heading,
  headingItalic,
  description,
  cards,
}: ChallengeCardsProps) {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[50px] md:gap-[80px]">
          {/* ── Heading + Description ── */}
          <div className="flex flex-col gap-[20px] md:gap-[32px]">
            {/* Heading */}
            <h2 className="text-[28px] md:text-[40px] lg:text-[48px] tracking-[-1.44px] leading-normal text-[#070707]">
              <span
                className="font-bold"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {heading}{" "}
              </span>
              <span
                className="font-bold italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {headingItalic}
              </span>
            </h2>

            {/* Description */}
            {description && description.length > 0 && (
              <div
                className="text-[16px] md:text-[20px] text-[#5f6266] leading-normal"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {description.map((paragraph, i) => (
                  <p
                    key={i}
                    className={i < description.length - 1 ? "mb-4" : "mb-0"}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* ── Cards ── */}
          <div
            className={`grid grid-cols-1 gap-[12px] ${cards.length === 4
                ? "md:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-3"
              }`}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-[14px] p-[22px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12)] flex flex-col"
              >
                {/* Title with dotted separators */}
                <div className="flex flex-col gap-[8px]">
                  <DottedSeparator />
                  <p
                    className="text-[16px] md:text-[18px] font-medium text-[#070707] leading-normal"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {card.title}
                  </p>
                  <DottedSeparator />
                </div>

                {/* Description */}
                <p
                  className="mt-[36px] md:mt-[56px] text-[14px] md:text-[16px] text-[#5f6266] leading-normal"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
