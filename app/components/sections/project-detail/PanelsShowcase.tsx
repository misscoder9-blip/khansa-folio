import Image from "next/image";
import { Fragment } from "react";

interface Pill {
  image: string;
  vector?: string;
  pillTop: string;
  pillLeft: string;
  pillWidth: number;
  vectorTop?: string;
  vectorLeft?: string;
  vectorWidth?: number;
}

interface PanelRow {
  image: string;
  aspectRatio?: string;
  pills?: Pill[];
}

interface PanelsShowcaseProps {
  rows: PanelRow[];
}

export default function PanelsShowcase({ rows }: PanelsShowcaseProps) {
  return (
    <section className="px-4 sm:px-6 lg:px-[60px] py-12 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#0d0d14] rounded-[24px] px-4 py-6 md:px-8 md:py-10 lg:px-12 lg:py-12 flex flex-col gap-6 md:gap-10">
          {rows.map((row, i) => (
            <div
              key={i}
              className="relative w-full"
              style={{ aspectRatio: row.aspectRatio ?? "1200 / 230" }}
            >
              <Image
                src={row.image}
                alt=""
                fill
                style={{ objectFit: "contain" }}
                sizes="(min-width: 1280px) 1200px, 100vw"
                priority={i === 0}
              />

              {row.pills?.map((pill, j) => (
                <Fragment key={j}>
                  {/* Pill label */}
                  <div
                    className="absolute z-10"
                    style={{
                      top: pill.pillTop,
                      left: pill.pillLeft,
                      width: `${pill.pillWidth}px`,
                    }}
                  >
                    <Image
                      src={pill.image}
                      alt=""
                      width={pill.pillWidth}
                      height={Math.round(pill.pillWidth * 0.36)}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Vector arrow */}
                  {pill.vector && (
                    <div
                      className="absolute z-10"
                      style={{
                        top: pill.vectorTop,
                        left: pill.vectorLeft,
                        width: `${pill.vectorWidth ?? 12}px`,
                      }}
                    >
                      <Image
                        src={pill.vector}
                        alt=""
                        width={pill.vectorWidth ?? 12}
                        height={20}
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
