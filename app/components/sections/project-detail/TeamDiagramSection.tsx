import SectionHeading from "./SectionHeading";

interface TeamDiagramSectionProps {
  heading: string;
  headingItalic: string;
  description?: string;
  teamTitle: string;
  teamPlatform: string;
}

function RolePill({
  title,
  subtitle,
  variant = "dark",
  className = "",
}: {
  title: string;
  subtitle?: string;
  variant?: "dark" | "accent";
  className?: string;
}) {
  const base =
    "rounded-[8px] px-3 py-2 flex flex-col items-start justify-center leading-normal";
  const color =
    variant === "dark" ? "bg-[#070707] text-white" : "bg-[#ff805e] text-white";

  return (
    <div className={`${base} ${color} ${className}`}>
      <p
        className={`${
          variant === "dark" ? "text-[18px] font-medium" : "text-[16px] font-normal"
        }`}
        style={{ fontFamily: "var(--font-satoshi)" }}
      >
        {title}
      </p>
      {subtitle ? (
        <p
          className="text-[14px] font-normal"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function TeamDiagramSection({
  heading,
  headingItalic,
  description,
  teamTitle,
  teamPlatform,
}: TeamDiagramSectionProps) {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10 md:gap-[52px]">
        <SectionHeading
          heading={heading}
          headingItalic={headingItalic}
          description={description}
        />

        <div className="flex flex-col gap-6 md:gap-[26px]">
          <p
            className="text-[24px] md:text-[32px] font-bold text-[#070707] leading-normal"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            {teamTitle}
            <span className="text-[#5f6266]"> | {teamPlatform}</span>
          </p>

          <div className="bg-white rounded-[10px] p-4 md:p-8 lg:p-12">
            <div className="hidden lg:block relative mx-auto w-full max-w-[1248px] h-[420px]">
              <RolePill
                title="Product Manager"
                className="absolute left-1/2 -translate-x-1/2 top-0 items-center"
              />

              <RolePill
                title="XFN Business Stakeholder"
                subtitle="Gathers requirements from"
                className="absolute left-[24px] top-[110px] w-[255px]"
              />

              <RolePill
                title="Tech Lead"
                subtitle="Gathers requirements from"
                className="absolute left-1/2 -translate-x-1/2 top-[108px] min-w-[178px]"
              />

              <RolePill
                title="XFN Business Stakeholder"
                className="absolute right-[24px] top-[110px] items-center w-[255px]"
              />

              <p
                className="absolute left-[52%] top-[56px] text-[14px] text-[#070707] leading-normal w-[104px]"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                Oversees the impact of
              </p>

              <p
                className="absolute right-[24px] top-[164px] text-[14px] text-[#070707] leading-normal w-[220px]"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                Provides feedback on usability, billing clarity, and adoption challenges
              </p>

              <p
                className="absolute left-[52%] top-[216px] text-[14px] text-[#070707] leading-normal w-[95px]"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                Delegates work to
              </p>

              <div className="absolute left-1/2 -translate-x-1/2 top-[40px] h-[68px] border-l border-dashed border-[#a5a9ae]" />
              {/* Left horizontal: left XFN right edge → Tech Lead left edge */}
              <div className="absolute left-[279px] right-[calc(50%_+_105px)] top-[134px] border-t border-dashed border-[#a5a9ae]" />
              {/* Right horizontal: Tech Lead right edge → right XFN left edge */}
              <div className="absolute left-[calc(50%_+_105px)] right-[279px] top-[134px] border-t border-dashed border-[#a5a9ae]" />
              <div className="absolute left-1/2 -translate-x-1/2 top-[179px] h-[90px] border-l border-dashed border-[#a5a9ae]" />
              <div className="absolute left-1/2 -translate-x-1/2 top-[268px] w-[286px] h-[42px] border border-dashed border-[#a5a9ae] rounded-[12px]" />

              <div className="absolute left-1/2 -translate-x-1/2 top-[300px] flex items-center gap-2">
                <RolePill title="AI Engineer" variant="accent" />
                <RolePill title="Frontend Engineer" variant="accent" />
                <RolePill title="Backend Engineer" variant="accent" />
              </div>
            </div>

            <div className="lg:hidden flex flex-col items-center gap-3">
              <RolePill title="Product Manager" className="items-center" />
              <div className="h-6 border-l border-dashed border-[#a5a9ae]" />
              <RolePill title="Tech Lead" subtitle="Gathers requirements from" />
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                <RolePill
                  title="XFN Business Stakeholder"
                  subtitle="Gathers requirements from"
                />
                <div className="flex flex-col justify-center">
                  <p
                    className="text-[14px] text-[#070707] leading-normal"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    Provides feedback on usability, billing clarity, and adoption challenges
                  </p>
                </div>
              </div>
              <div className="h-6 border-l border-dashed border-[#a5a9ae]" />
              <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2">
                <RolePill title="AI Engineer" variant="accent" />
                <RolePill title="Frontend Engineer" variant="accent" />
                <RolePill title="Backend Engineer" variant="accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
