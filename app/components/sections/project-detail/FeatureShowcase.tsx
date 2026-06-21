import Image from "next/image";
import SectionHeading from "./SectionHeading";

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  previewImage: string;
}

interface FeatureShowcaseProps {
  heading: string;
  headingItalic: string;
  description: string;
  decorativeImage?: string;
  cards: FeatureCard[];
}

export default function FeatureShowcase({
  heading,
  headingItalic,
  description,
  decorativeImage,
  cards,
}: FeatureShowcaseProps) {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading
          heading={heading}
          headingItalic={headingItalic}
          description={description}
        />

        <div className="relative">
          {/* Decorative burst (sticks out from the left of card 1) */}
          {decorativeImage && (
            <div
              className="absolute pointer-events-none z-0 hidden md:block"
              style={{ left: "-50px", top: "-70px", width: "190px" }}
            >
              <Image
                src={decorativeImage}
                alt=""
                width={192}
                height={192}
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 md:mt-[90px]">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-[#f2f2f2] rounded-[16px] p-5 md:p-6 flex flex-col gap-4"
              >
                {/* Icon badge */}
                <div className="bg-[#eef0e0] rounded-full w-11 h-11 flex items-center justify-center">
                  <Image
                    src={card.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-[20px] md:text-[22px] font-bold text-[#070707] leading-tight"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[13px] md:text-[14px] text-[#5f6266] leading-normal"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {card.description}
                </p>

                {/* Preview area */}
                <div
                  className="rounded-[14px] overflow-hidden mt-2 p-4 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #f1f9da 0%, #d8edaa 100%)",
                  }}
                >
                  <Image
                    src={card.previewImage}
                    alt=""
                    width={400}
                    height={260}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
