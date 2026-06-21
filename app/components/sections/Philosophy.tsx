import React from "react";

export default function Philosophy() {
  return (
    <section id="about" className="pt-12 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        {/* Label */}
        <h3
          className="text-lg md:text-xl mb-6 md:mb-8 text-[#070707]"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          Why{" "}
          <span
            className="text-[#ff805e]"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            choose
          </span>{" "}
          me
        </h3>

        {/* Main Philosophy Statement */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight max-w-5xl font-normal"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          <span className="text-[#5f6266] font-normal">
            I approach every project with a blend of{" "}
          </span>
          <span className="font-bold text-[#070707]">bold </span>
          <span
            className="text-[#070707]"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            creativity
          </span>
          <span className="text-[#5f6266] font-normal">, sharp </span>
          <span
            className="text-[#070707]"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            strategy
          </span>
          <span className="text-[#5f6266] font-normal">
            , and uncompromising{" "}
          </span>
          <span
            className="text-[#070707]"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            attention to detail
          </span>
          <span className="text-[#070707]">.</span>
        </h2>
      </div>
    </section>
  );
}
