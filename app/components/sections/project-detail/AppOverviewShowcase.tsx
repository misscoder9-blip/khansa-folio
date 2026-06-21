import Image from "next/image";

interface AppOverviewShowcaseProps {
  mainImage: string;
  arrowSrc: string;
  projectReadyCallout: string;
  decorativeSrc?: string;
  decorativeSrc2?: string;
  // kept in interface for data compat but rendered as HTML below
  usageCallout?: string;
  homePageCallout?: string;
  requestPageCallout?: string;
}

/* All positions are % of the Figma canvas (1320 × 703).
   Usage:        left=149px   top=305px   w=233px        (exact)
   Arrow5:       left=340px   top=240px   w=130px        (estimated)
   ProjectApp:   left=220px   top=530px   w=145px        (adjusted for badge overflow)
   HomePage:     left=884px   top=353px                  (estimated from reference)
   VectorLeft:   left=838px   top=300px                  (above Home page)
   RequestPage:  left=396px   top=427px                  (estimated from reference)
   VectorRight:  left=435px   top=377px                  (above Request page)
   Vector7185:   left=1082px  top=519px   w=25px         (bottom right, first slash)
   Vector7187:   left=1100px  top=515px   w=17px         (bottom right, second slash)   */

export default function AppOverviewShowcase({
  mainImage,
  arrowSrc,
  projectReadyCallout,
  decorativeSrc,
  decorativeSrc2,
}: AppOverviewShowcaseProps) {
  return (
    <section className="px-4 sm:px-6 lg:px-[60px] py-12 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#0d0d14] rounded-[24px] px-5 py-10 md:px-[60px] md:py-[66px]">

          {/* ── Desktop: 1320×703 composition ── */}
          <div
            className="relative w-full hidden md:block"
            style={{ aspectRatio: "1320 / 703" }}
          >
            {/* Business Profile main image */}
            <div className="absolute" style={{ left: "4.5%", top: "3.6%", width: "91%" }}>
              <img
                src={mainImage}
                alt="App overview"
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px" }}
              />
            </div>

            {/* Arrow 5 — curves from Usage callout up toward the phone image */}
            <div
              className="absolute"
              style={{ left: "25.8%", top: "34%", width: "9.8%", height: "14%" }}
            >
              <Image src={arrowSrc} alt="" fill style={{ objectFit: "contain" }} sizes="10vw" />
            </div>

            {/* Usage callout — exact: left=149px top=305px w=233px */}
            <div
              className="absolute flex flex-col gap-[4px] rounded-[12px] border-2 border-white px-[16px] py-[12px]"
              style={{
                left: "11.29%",
                top: "43.38%",
                width: "17.65%",
                backgroundColor: "#ff805e",
              }}
            >
              <p
                className="text-white leading-normal whitespace-nowrap"
                style={{ fontFamily: "var(--font-satoshi)", fontSize: "16px", fontWeight: 500 }}
              >
                Usage
              </p>
              <p
                className="text-white leading-normal"
                style={{ fontFamily: "var(--font-satoshi)", fontSize: "12px" }}
              >
                Usage provides real-time visibility into AI consumption across models and tools.
              </p>
            </div>

            {/* Project Application is ready — bottom left */}
            <div
              className="absolute"
              style={{
                left: "16.67%",
                top: "75%",
                width: "11.02%",
              }}
            >
              <img
                src={projectReadyCallout}
                alt="Project Application is ready"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Vectorleft — small arrow ABOVE Home page pill */}
            <div
              className="absolute"
              style={{ left: "68.5%", top: "67.5%", width: "1.9%", height: "4%" }}
            >
              <Image
                src="/assets/projectdetail/foodforesight/Vectorleft.svg"
                alt="" fill style={{ objectFit: "contain" }}
                sizes="2vw"
              />
            </div>

            {/* Home page pill */}
            <div
              className="absolute flex items-center justify-center rounded-[222px] border border-white px-[10px] py-[10px]"
              style={{ left: "69.97%", top: "70.2%", backgroundColor: "#7f4ef0" }}
            >
              <p
                className="text-white whitespace-nowrap leading-normal"
                style={{ fontFamily: "var(--font-satoshi)", fontSize: "16px", fontWeight: 500 }}
              >
                Home page
              </p>
            </div>

            {/* Vectorright — small arrow ABOVE Request page pill */}
            <div
              className="absolute"
              style={{ left: "48.5%", top: "82.5%", width: "1.9%", height: "4%" }}
            >
              <Image
                src="/assets/projectdetail/foodforesight/Vectorright.svg"
                alt="" fill style={{ objectFit: "contain" }}
                sizes="2vw"
              />
            </div>

            {/* Request page pill */}
            <div
              className="absolute flex items-center justify-center rounded-[222px] border border-white px-[10px] py-[10px]"
              style={{ left: "40%", top: "85.7%", backgroundColor: "#6b8cff" }}
            >
              <p
                className="text-white whitespace-nowrap leading-normal"
                style={{ fontFamily: "var(--font-satoshi)", fontSize: "16px", fontWeight: 500 }}
              >
                Request page
              </p>
            </div>

            {/* "//" decorative — Vector 7185 (first slash) at far bottom right */}
            {decorativeSrc && (
              <div
                className="absolute"
                style={{ left: "95.97%", top: "91.8%", width: "1.9%", height: "5.3%" }}
              >
                <Image src={decorativeSrc} alt="" fill style={{ objectFit: "contain" }} sizes="2vw" />
              </div>
            )}

            {/* "//" decorative — Vector 7187 (second slash) beside first */}
            {decorativeSrc2 && (
              <div
                className="absolute"
                style={{ left: "95.2%", top: "91.2%", width: "1.3%", height: "5.4%" }}
              >
                <Image src={decorativeSrc2} alt="" fill style={{ objectFit: "contain" }} sizes="2vw" />
              </div>
            )}
          </div>

          {/* ── Mobile: just the main image ── */}
          <div className="block md:hidden py-8">
            <img
              src={mainImage}
              alt="App overview"
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
