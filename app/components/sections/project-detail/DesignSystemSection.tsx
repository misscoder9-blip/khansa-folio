import Image from "next/image";
import SectionHeading from "./SectionHeading";

interface DesignSystemSectionProps {
  heading: string;
  headingItalic: string;
  description?: string;
  variant?: "leeb-ai" | "foodforesight" | "petlays";
  assets?: {
    rightTop?: string;
    rightBottom?: string;
    fontName?: string;
    cards?: string[];
  };
}

const TYPOGRAPHY_ROWS: { size: string; lineHeight: string; spacing: string; sample: string }[] = [
  { size: "60px (Extrabold)", lineHeight: "60", spacing: "-1.5", sample: "Lorem ipsum dolor sit amet" },
  { size: "36px (bold)", lineHeight: "40", spacing: "0%", sample: "Lorem ipsum dolor sit amet" },
  { size: "20px (Extrabold)", lineHeight: "28", spacing: "0%", sample: "Lorem ipsum dolor sit amet" },
  { size: "18px (Reg)", lineHeight: "28", spacing: "0%", sample: "Lorem ipsum dolor sit amet" },
  { size: "16px (med)", lineHeight: "28", spacing: "0%", sample: "Lorem ipsum dolor sit amet" },
  { size: "16px (Bold)", lineHeight: "28", spacing: "-0.45%", sample: "Lorem ipsum dolor sit amet" },
  { size: "14px (reg)", lineHeight: "20", spacing: "0%", sample: "Lorem ipsum dolor sit amet" },
  { size: "14px (MEDIUM)", lineHeight: "20", spacing: "0%", sample: "Lorem ipsum dolor sit amet" },
  { size: "12px (reg)", lineHeight: "16", spacing: "0%", sample: "Lorem ipsum dolor sit amet" },
  { size: "12px (MEDIUM)", lineHeight: "16", spacing: "0%", sample: "Lorem ipsum dolor sit amet" },
];

function FoodforesightTypographyCard({ fontName = "ROBOTO" }: { fontName?: string }) {
  return (
    <div className="bg-white rounded-[12px] border border-dashed border-[#cfd1d4] overflow-hidden flex flex-col">
      {/* Header bar */}
      <div className="bg-[#070707] flex items-center gap-4 px-6 py-4">
        <span
          className="text-white text-[16px] font-medium"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          Typography
        </span>
        <div className="flex-1 border-t border-dashed border-[#cfd1d4]" />
        <span
          className="text-white text-[28px] md:text-[36px] font-black tracking-wide"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          {fontName}
        </span>
      </div>

      {/* Table */}
      <div className="px-6 py-6">
        <div
          className="grid grid-cols-[1fr_1.4fr_1fr_1fr] gap-x-4 text-[10px] uppercase tracking-wider text-[#5f6266] mb-3"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          <span>Size</span>
          <span>Example</span>
          <span>Line Height</span>
          <span>Letter Spacing</span>
        </div>
        <div className="flex flex-col">
          {TYPOGRAPHY_ROWS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_1.4fr_1fr_1fr] gap-x-4 items-center py-2 text-[#070707]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              <span className="text-[11px] text-[#5f6266]">{row.size}</span>
              <span
                className="truncate text-[#070707]"
                style={{ fontSize: i === 0 ? 18 : i === 1 ? 14 : 11 }}
              >
                {row.sample}
              </span>
              <span className="text-[11px] text-[#5f6266]">{row.lineHeight}</span>
              <span className="text-[11px] text-[#5f6266]">{row.spacing}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FoodforesightDesignSystem({ assets }: { assets?: DesignSystemSectionProps["assets"] }) {
  return (
    <div className="bg-[#f2f2f2] rounded-[12px] p-5 md:p-8 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1.57fr_1fr] gap-4">
        {/* Left: Typography */}
        <FoodforesightTypographyCard fontName={assets?.fontName} />

        {/* Right column */}
        <div className="flex flex-col gap-4">
          {/* Right top: food cards grid */}
          {assets?.rightTop && (
            <div className="bg-white rounded-[12px] border border-dashed border-[#cfd1d4] p-4 flex items-center justify-center">
              <Image
                src={assets.rightTop}
                alt="Food category cards"
                width={512}
                height={420}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Right bottom: Colors card */}
          <div className="bg-white rounded-[12px] border border-dashed border-[#cfd1d4] overflow-hidden">
            <div className="bg-[#070707] flex items-center justify-between px-6 py-4">
              <span
                className="text-white text-[16px] font-medium"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                Colors
              </span>
              <span
                className="text-[#cfd1d4] text-[12px]"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                Colors Presentation
              </span>
            </div>
            {assets?.rightBottom && (
              <div className="p-4">
                <Image
                  src={assets.rightBottom}
                  alt="Color palette"
                  width={512}
                  height={180}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PetlaysDesignSystem({ assets }: { assets?: DesignSystemSectionProps["assets"] }) {
  const cards = assets?.cards ?? [];
  const [logo, speech, video, audio, text, liveVideo] = [
    cards[0],
    cards[1],
    cards[2],
    cards[3],
    cards[4],
    cards[5],
  ];

  return (
    <div className="bg-[#f2f2f2] rounded-[12px] p-5 md:p-8 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4">
        {/* Left: Typography */}
        <FoodforesightTypographyCard fontName={assets?.fontName} />

        {/* Right: 2-row + 3-row + 1-wide grid */}
        <div className="flex flex-col gap-3">
          {/* Row 1: Logo + Speech (both forced to equal aspect ratio) */}
          <div className="grid grid-cols-2 gap-3">
            {logo && (
              <div
                className="relative w-full bg-[#f2f2f2] rounded-[8px] overflow-hidden"
                style={{ aspectRatio: "239 / 202" }}
              >
                <Image
                  src={logo}
                  alt="Logo card"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="240px"
                />
              </div>
            )}
            {speech && (
              <div
                className="relative w-full bg-[#f2f2f2] rounded-[8px] overflow-hidden"
                style={{ aspectRatio: "239 / 202" }}
              >
                <Image
                  src={speech}
                  alt="Speech card"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="240px"
                />
              </div>
            )}
          </div>

          {/* Row 2: Video + Audio + Text */}
          <div className="grid grid-cols-3 gap-3">
            {video && (
              <Image
                src={video}
                alt="Video analysis"
                width={180}
                height={150}
                className="w-full h-auto"
              />
            )}
            {audio && (
              <Image
                src={audio}
                alt="Audio analysis"
                width={180}
                height={150}
                className="w-full h-auto"
              />
            )}
            {text && (
              <Image
                src={text}
                alt="Text analysis"
                width={180}
                height={150}
                className="w-full h-auto"
              />
            )}
          </div>

          {/* Row 3: Live video card (full width) */}
          {liveVideo && (
            <Image
              src={liveVideo}
              alt="Live video preview"
              width={560}
              height={280}
              className="w-full h-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function DesignSystemSection({
  heading,
  headingItalic,
  description,
  variant = "leeb-ai",
  assets,
}: DesignSystemSectionProps) {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading
          heading={heading}
          headingItalic={headingItalic}
          description={description}
        />

        {variant === "foodforesight" ? (
          <FoodforesightDesignSystem assets={assets} />
        ) : variant === "petlays" ? (
          <PetlaysDesignSystem assets={assets} />
        ) : (
        <div className="bg-[#f2f2f2] rounded-[12px] p-5 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.57fr_1fr] gap-4">
            {/* Left: Typography */}
            <Image
              src="/assets/projectdetail/typography.svg"
              alt="Typography system"
              width={1504}
              height={1168}
              className="w-full h-auto"
            />

            {/* Right: UI Components */}
            <div className="flex flex-col gap-3">
              {/* Top + Middle rows with sidebar on right */}
              <div className="flex gap-2 items-start">
                {/* Main content left of sidebar */}
                <div className="flex-1 flex flex-col gap-2 min-w-0">
                  {/* Top: Logo + Type/Menus */}
                  <div className="flex gap-2 items-start">
                    <Image
                      src="/assets/projectdetail/LogoLeebAI.svg"
                      alt="Leeb AI logo block"
                      width={378}
                      height={294}
                      className="w-[48%] h-auto flex-shrink-0"
                    />
                    <div className="flex-1 flex flex-col gap-2 min-w-0">
                      <Image
                        src="/assets/projectdetail/Type.svg"
                        alt="Type for command input"
                        width={350}
                        height={130}
                        className="w-full h-auto"
                      />
                      <div className="flex gap-2">
                        <Image
                          src="/assets/projectdetail/attach.svg"
                          alt="Attach and tools menu"
                          width={164}
                          height={172}
                          className="w-1/2 h-auto"
                        />
                        <Image
                          src="/assets/projectdetail/writecode.svg"
                          alt="Write code tools menu"
                          width={162}
                          height={194}
                          className="w-1/2 h-auto"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Middle: Voice bars + Personas */}
                  <div className="flex gap-2 items-start">
                    <div className="flex-1 flex flex-col gap-2 min-w-0">
                      <Image
                        src="/assets/projectdetail/play.svg"
                        alt="Voice input loading state"
                        width={554}
                        height={154}
                        className="w-full h-auto"
                      />
                      <Image
                        src="/assets/projectdetail/stop.svg"
                        alt="Voice input active state"
                        width={554}
                        height={154}
                        className="w-full h-auto"
                      />
                    </div>
                    <Image
                      src="/assets/projectdetail/personas.svg"
                      alt="Persona selector panel"
                      width={174}
                      height={298}
                      className="w-[23%] h-auto flex-shrink-0"
                    />
                  </div>
                </div>

                {/* Right sidebar - spans top + middle rows */}
                <Image
                  src="/assets/projectdetail/leebairightvertical.png"
                  alt="Chat history panel"
                  width={194}
                  height={666}
                  className="w-[20%] h-auto flex-shrink-0"
                />
              </div>

              {/* Bottom: Colors full width */}
              <Image
                src="/assets/projectdetail/Colors.svg"
                alt="Color tokens and palette"
                width={958}
                height={454}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
