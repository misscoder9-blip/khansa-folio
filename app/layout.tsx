import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
// import AnimatedCard from "./components/sections/AnimatedCard";

// Default font - Satoshi
const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

// Craftwork Grotesk for "Khansa"
const craftworkGrotesk = localFont({
  src: "../public/fonts/CraftworkGrotesk-Regular.woff2",
  variable: "--font-craftwork",
  weight: "400",
  display: "swap",
});

// Playfair Display for "folio" - From Google Fonts
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khansafolio - UI/UX Designer Portfolio",
  description:
    "Creating beautiful and purposeful digital experiences that blend creativity with strategy.",
    icons: {
    icon: "/assets/images/khunsaprof2.png",
    apple:  "/assets/images/khunsaprof2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${craftworkGrotesk.variable} ${playfairDisplay.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#F8F9FA] transition-colors antialiased" style={{ fontFamily: 'var(--font-satoshi)' }}>
        {/* <AnimatedCard/> */}
        <ScrollToTop />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
