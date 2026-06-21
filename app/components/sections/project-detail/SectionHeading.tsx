interface SectionHeadingProps {
  heading: string;
  headingItalic: string;
  description?: string;
  darkBg?: boolean;
}

export default function SectionHeading({
  heading,
  headingItalic,
  description,
  darkBg = false,
}: SectionHeadingProps) {
  const textColor = darkBg ? "text-white" : "text-[#070707]";
  const descColor = darkBg ? "text-gray-300" : "text-[#5f6266]";

  return (
    <div className="mb-8 md:mb-12">
      <h2
        className={`text-3xl md:text-4xl lg:text-[48px] font-bold ${textColor} leading-tight tracking-[-0.02em]`}
        style={{ fontFamily: "var(--font-satoshi)" }}
      >
        {heading}{" "}
        <span
          className="italic font-bold"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {headingItalic}
        </span>
      </h2>
      {description && (
        <p
          className={`mt-4 md:mt-6 text-base md:text-[20px] ${descColor} leading-normal`}
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
