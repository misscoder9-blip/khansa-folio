import type { Testimonial } from "@/app/data/projects";

interface DarkTestimonialsProps {
  heading: string;
  headingItalic: string;
  description: string[];
  descriptionBullets?: string[];
  testimonials: Testimonial[];
}

function DottedSeparator() {
  return (
    <div className="w-full h-0 border-t border-dotted border-[#cfd1d4]" />
  );
}

export default function DarkTestimonials({
  heading,
  headingItalic,
  description,
  descriptionBullets,
  testimonials,
}: DarkTestimonialsProps) {
  return (
    <section className="px-4 sm:px-6 lg:px-[60px] py-12 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#070707] rounded-[24px] px-5 py-10 md:px-[60px] md:py-[66px]">
          <div className="flex flex-col gap-[50px] md:gap-[80px]">
            {/* ── Heading + Description ── */}
            <div className="flex flex-col gap-[20px] md:gap-[32px]">
              {/* Heading */}
              <h2
                className="text-[28px] md:text-[40px] lg:text-[48px] tracking-[-1.44px] leading-normal"
              >
                <span
                  className="font-bold text-[#eef1f5]"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {heading}{" "}
                </span>
                <span
                  className="font-bold italic text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {headingItalic}
                </span>
              </h2>

              {/* Description */}
              <div
                className="text-[16px] md:text-[20px] text-[#cfd1d4] leading-normal"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                {description.map((paragraph, i) => (
                  <p key={i} className={i < description.length - 1 || descriptionBullets ? "mb-2" : "mb-0"}>
                    {paragraph}
                  </p>
                ))}
                {descriptionBullets && (
                  <ul className="list-disc pl-[28px] flex flex-col gap-[4px]">
                    {descriptionBullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* ── Testimonial Cards ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[12px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[14px] px-[22px] py-[24px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.12)] flex flex-col justify-between min-h-[195px]"
                >
                  {/* Quote */}
                  <p
                    className="text-[14px] md:text-[16px] text-[#5f6266] leading-normal"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {testimonial.quote}
                  </p>

                  {/* Separator + Role + Separator */}
                  <div className="flex flex-col gap-[10px] mt-4">
                    <DottedSeparator />
                    <p
                      className="text-[16px] md:text-[20px] font-bold text-[#070707] leading-normal"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {testimonial.role}
                    </p>
                    <DottedSeparator />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
