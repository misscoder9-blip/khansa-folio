import Image from "next/image";
import type { PersonaData } from "@/app/data/projects";

interface PersonaCardProps {
  heading: string;
  headingItalic: string;
  description: string;
  persona?: PersonaData;
}

/* ── Bullet list helper ── */
function BulletList({ items }: { items: string[] }) {
  return (
    <ul
      className="list-disc pl-[24px] text-[16px] text-[#5f6266] leading-normal"
      style={{ fontFamily: "var(--font-satoshi)" }}
    >
      {items.map((item, i) => (
        <li key={i} className={i < items.length - 1 ? "mb-0" : ""}>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ── White info card ── */
function InfoCard({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-[15px] px-[18px] py-[24px] flex flex-col gap-[18px] ${className}`}
    >
      <p
        className="text-[20px] font-bold text-[#070707] leading-normal"
        style={{ fontFamily: "var(--font-satoshi)" }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

/* ── Horizontal separator ── */
function HorizontalLine() {
  return <div className="w-full h-0 border-t border-dashed border-[#cfd1d4]" />;
}

export default function PersonaCard({
  heading,
  headingItalic,
  description,
  persona,
}: PersonaCardProps) {
  if (!persona) return null;

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[50px] md:gap-[80px]">
          {/* ── Heading + Description ── */}
          <div className="flex flex-col gap-[20px] md:gap-[32px]">
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
            <p
              className="text-[16px] md:text-[20px] text-[#5f6266] leading-normal"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              {description}
            </p>
          </div>

          {/* ── Persona Card ── */}
          <div className="flex flex-col lg:flex-row gap-[12px] items-stretch">
            {/* ─── Left: Dark profile card ─── */}
            <div className="bg-[#070707] rounded-[24px] px-[24px] pt-[24px] pb-[32px] flex flex-col items-center justify-between gap-[24px] w-full lg:w-[440px] flex-shrink-0">
              {/* Photo */}
              <div className="w-[200px] h-[200px] md:w-[248px] md:h-[248px] rounded-full overflow-hidden bg-[#303030]">
                <Image
                  src={persona.photo}
                  alt={persona.name}
                  width={230}
                  height={230}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name + Role */}
              <div className="flex flex-col items-center gap-[6px]">
                <p
                  className="text-[28px] md:text-[36px] font-semibold italic text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {persona.name}
                </p>
                <p
                  className="text-[18px] text-[#a5a9ae] leading-normal"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {persona.role}
                </p>
              </div>

              {/* Details table */}
              <div className="bg-[#121111] border border-dashed border-[#5f6266] rounded-[12px] pt-[24px] pb-[28px] px-[18px] w-full">
                <div className="flex items-center justify-center gap-[25px]">
                  {/* Labels */}
                  <div className="flex flex-col gap-[15px] items-end">
                    {persona.details.map((d, i) => (
                      <p
                        key={i}
                        className="text-[18px] font-medium text-white leading-normal"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {d.label}
                      </p>
                    ))}
                  </div>
                  {/* Vertical line */}
                  <div className="w-0 self-stretch border-l border-dashed border-[#5f6266]" />
                  {/* Values */}
                  <div className="flex flex-col gap-[15px] items-start">
                    {persona.details.map((d, i) => (
                      <p
                        key={i}
                        className="text-[18px] font-medium text-white leading-normal"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {d.value}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trait tags */}
              <div className="flex flex-col items-center gap-[12px]">
                <div className="flex flex-wrap justify-center gap-[8px]">
                  {persona.traits.map((trait) => (
                    <span
                      key={trait}
                      className="bg-[#303030] rounded-[8px] px-[16px] py-[10px] text-[16px] font-medium text-white text-center leading-normal"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── Right: Info cards ─── */}
            <div className="flex flex-col gap-[12px] flex-1 min-w-0">
              {/* Quote */}
              <div className="bg-white rounded-[15px] px-[18px] py-[28px]">
                <p
                  className="text-[18px] text-[#5f6266] leading-normal"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {persona.quote}
                </p>
              </div>

              {/* Main content: left column + right sidebar */}
              <div className="flex flex-col lg:flex-row gap-[12px]">
                {/* Left column */}
                <div className="flex flex-col gap-[12px] flex-1 min-w-0">
                  {/* Bio */}
                  <InfoCard title="Bio">
                    <p
                      className="text-[16px] text-[#5f6266] leading-normal"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {persona.bio}
                    </p>
                  </InfoCard>

                  {/* Goals & Frustrations side by side */}
                  <div className="flex flex-col sm:flex-row gap-[12px]">
                    <InfoCard title="Goals" className="flex-1">
                      <BulletList items={persona.goals} />
                    </InfoCard>
                    <InfoCard title="Frustrations" className="flex-1">
                      <BulletList items={persona.frustrations} />
                    </InfoCard>
                  </div>

                  {/* Personality & Motivations side by side */}
                  <div className="flex flex-col sm:flex-row gap-[12px]">
                    {/* Personality with progress bars */}
                    <div className="bg-white rounded-[15px] px-[18px] py-[24px] flex flex-col gap-[25px] flex-1">
                      <p
                        className="text-[20px] font-bold text-[#070707] leading-normal"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        Personality
                      </p>
                      <div className="flex flex-col gap-[20px]">
                        {persona.personality.map((p) => (
                          <div key={p.label} className="flex flex-col gap-[6px]">
                            <span
                              className="text-[16px] text-[#303030] leading-normal"
                              style={{ fontFamily: "var(--font-satoshi)" }}
                            >
                              {p.label}
                            </span>
                            <div className="bg-[#eef1f5] rounded-[222px] h-[9px] w-[222px] max-w-full">
                              <div
                                className="bg-[#5f6266] rounded-[222px] h-[9px]"
                                style={{ width: `${p.percentage}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Motivations */}
                    <InfoCard title={persona.motivationsLabel ?? "Motivations"} className="flex-1 gap-[25px]">
                      <BulletList items={persona.motivations} />
                    </InfoCard>
                  </div>
                </div>

                {/* Right sidebar */}
                <div className="bg-white rounded-[15px] px-[18px] py-[24px] flex flex-col justify-between w-full lg:w-[304px] flex-shrink-0 gap-[24px]">
                  {/* Interests */}
                  <div className="flex flex-col gap-[32px]">
                    <p
                      className="text-[20px] font-bold text-[#070707] leading-normal"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {persona.interestsLabel ?? "Interests"}
                    </p>
                    <BulletList items={persona.interests} />
                  </div>

                  <HorizontalLine />

                  {/* Influences */}
                  <div className="flex flex-col gap-[32px]">
                    <p
                      className="text-[20px] font-bold text-[#070707] leading-normal"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      Influences
                    </p>
                    <BulletList items={persona.influences} />
                  </div>

                  <HorizontalLine />

                  {/* Frequently used apps */}
                  <div className="flex flex-col gap-[32px]">
                    <p
                      className="text-[20px] font-bold text-[#070707] leading-normal"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      Frequently used apps
                    </p>
                    <BulletList items={persona.frequentlyUsedApps} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
