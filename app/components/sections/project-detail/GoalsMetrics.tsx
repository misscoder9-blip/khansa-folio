import type { Goal, SuccessMetric } from "@/app/data/projects";

interface GoalsMetricsProps {
  heading: string;
  headingItalic: string;
  goals: Goal[];
  successMetrics: SuccessMetric[];
}

export default function GoalsMetrics({
  heading,
  headingItalic,
  goals,
  successMetrics,
}: GoalsMetricsProps) {
  return (
    <section className="px-4 sm:px-6 lg:px-[60px] py-12 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#070707] rounded-[24px] px-5 py-10 md:px-[60px] md:py-[66px]">
          <div className="flex flex-col gap-[60px] md:gap-[120px]">
            {/* ── Heading ── */}
            <h2 className="text-[28px] md:text-[40px] lg:text-[48px] tracking-[-1.44px] leading-normal">
              <span
                className="font-bold text-white"
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

            {/* ── Goals + Success Metrics ── */}
            <div className="flex flex-col gap-[50px] md:gap-[80px]">
              {/* Goals row */}
              <div className="flex flex-col md:flex-row gap-[32px] md:gap-[40px]">
                {goals.map((goal, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-[20px] md:gap-[32px]">
                    <p
                      className="text-[28px] md:text-[36px] font-bold text-white leading-normal"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {goal.title}
                    </p>
                    <p
                      className="text-[18px] md:text-[24px] text-[#cfd1d4] leading-normal"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {goal.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Success Metrics */}
              <div className="flex flex-col gap-[36px] md:gap-[59px]">
                <p
                  className="text-[28px] md:text-[36px] font-bold text-white leading-normal"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  Success Metrics
                </p>

                {/* 2×2 metric cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-x-[40px] md:gap-y-[16px]">
                  {successMetrics.map((metric, i) => (
                    <div
                      key={i}
                      className="bg-[#121111] border border-dashed border-[#5f6266] rounded-[12px] pt-[24px] pb-[28px] px-[18px] flex flex-col gap-[13px]"
                    >
                      {/* Number badge + title */}
                      <div className="flex items-center gap-[12px]">
                        <div className="bg-[#303030] rounded-[200px] w-[84px] h-[84px] flex items-center justify-center flex-shrink-0">
                          <span
                            className="text-[36px] font-bold italic text-[#ff805e] leading-normal"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {i + 1}
                          </span>
                        </div>
                        <p
                          className="text-[22px] md:text-[28px] font-bold text-white leading-normal"
                          style={{ fontFamily: "var(--font-satoshi)" }}
                        >
                          {metric.title}
                        </p>
                      </div>

                      {/* Description */}
                      <p
                        className="text-[16px] md:text-[18px] text-[#cfd1d4] leading-normal"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {metric.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
