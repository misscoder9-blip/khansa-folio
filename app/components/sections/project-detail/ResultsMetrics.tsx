import SectionHeading from "./SectionHeading";
import type { ResultMetric } from "@/app/data/projects";

interface ResultsMetricsProps {
  heading: string;
  headingItalic: string;
  metrics: ResultMetric[];
}

export default function ResultsMetrics({
  heading,
  headingItalic,
  metrics,
}: ResultsMetricsProps) {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading
          heading={heading}
          headingItalic={headingItalic}
        />

        {/* Dark Success Metrics Card */}
        <div className="bg-[#070707] rounded-[16px] md:rounded-[24px] px-5 py-8 sm:px-8 sm:py-10 md:px-[60px] md:py-[66px]">
          <h3
            className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white tracking-[-1.44px] mb-10 md:mb-[58px]"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Success Metrics
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-[#121111] border border-dashed border-[#5f6266] rounded-[12px] px-[18px] py-[24px] flex flex-col gap-6 md:gap-8"
              >
                <div className="flex items-center gap-[18px]">
                  {/* Icon */}
                  <div className="w-[60px] h-[60px] md:w-[84px] md:h-[84px] rounded-full bg-[#303030] flex items-center justify-center flex-shrink-0">
                    <img
                      src="/assets/projectdetail/double-arrow.svg"
                      alt=""
                      className="w-[28px] h-[28px] md:w-[42px] md:h-[42px]"
                    />
                  </div>
                  {/* Stat + Action */}
                  <p className="text-[24px] md:text-[32px] text-white tracking-[-0.96px]">
                    <span
                      className="font-bold italic"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {metric.stat}{" "}
                    </span>
                    <span
                      className="font-normal"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {metric.action}
                    </span>
                  </p>
                </div>
                <p
                  className="text-base md:text-[20px] text-[#cfd1d4] leading-normal"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
