import Link from "next/link";
import type { ProjectData } from "@/app/data/projects";

interface ProjectNavFooterProps {
  previous: ProjectData | null;
  next: ProjectData | null;
}

export default function ProjectNavFooter({
  previous,
  next,
}: ProjectNavFooterProps) {
  return (
    <section className="px-6 lg:px-[56px] py-6 md:py-16 lg:py-[96px] bg-[#070707]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between">
          {/* Previous */}
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="flex items-center gap-6 group"
            >
              <div className="w-6 h-6 md:w-[52px] md:h-[52px] lg:w-[84px] lg:h-[84px] rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src="/assets/projectdetail/arrow-left.svg"
                  alt=""
                  className="w-3 h-3 md:w-6 md:h-6 lg:w-[42px] lg:h-[42px]"
                />
              </div>
              <p className="text-[14px] md:text-[24px] lg:text-[48px] text-white tracking-[-0.42px] md:tracking-[-1.44px]">
                <span
                  className="font-bold"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  Previous
                </span>{" "}
                <span
                  className="font-semibold italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  project
                </span>
              </p>
            </Link>
          ) : (
            <div />
          )}

          {/* Next */}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="flex items-center gap-6 group"
            >
              <p className="text-[14px] md:text-[24px] lg:text-[48px] text-white tracking-[-0.42px] md:tracking-[-1.44px]">
                <span
                  className="font-bold"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  Next
                </span>{" "}
                <span
                  className="font-semibold italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  project
                </span>
              </p>
              <div className="w-6 h-6 md:w-[52px] md:h-[52px] lg:w-[84px] lg:h-[84px] rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src="/assets/projectdetail/arrow-right.svg"
                  alt=""
                  className="w-3 h-3 md:w-6 md:h-6 lg:w-[42px] lg:h-[42px]"
                />
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
