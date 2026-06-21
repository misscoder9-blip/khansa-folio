import Image from "next/image";
import SectionHeading from "./SectionHeading";

interface ImageSectionProps {
  heading: string;
  headingItalic: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  darkBg?: boolean;
}

export default function ImageSection({
  heading,
  headingItalic,
  description,
  imageSrc,
  imageAlt = "Section image",
  darkBg = false,
}: ImageSectionProps) {
  return (
    <section
      className={`py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] ${
        darkBg ? "bg-[#070707]" : "bg-[#F8F9FA]"
      }`}
    >
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading
          heading={heading}
          headingItalic={headingItalic}
          description={description}
          darkBg={darkBg}
        />

        <div className="w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1440}
            height={900}
            className="w-full rounded-[16px] md:rounded-[24px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
