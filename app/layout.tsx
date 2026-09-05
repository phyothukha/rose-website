import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "@/styles/globals.css";
import { orpheusProFont, twentientyOneFont } from "@/font";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Rosé - Myanmar Fan Group",
  description:
    "Discover the artistry of sushi at its finest. From fresh ingredients to time-honored techniques, every dish is crafted to delight your senses. Indulge in a journey of authentic flavors and modern twists, only at MYANSHI.",
  icons: {
    icon: [{ url: "/favicon.svg" }],
  },
  keywords: ["Phyo Thu Kha", "phyothukha", "myanmar sushi"],
  openGraph: {
    title: "Rosé - Myanmar Fan Group",
    description:
      "Discover the artistry of sushi at its finest. From fresh ingredients to time-honored techniques, every dish is crafted to delight your senses. Indulge in a journey of authentic flavors and modern twists, only at MYANSHI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosé - Myanmar Fan Group",
    description:
      "Discover the artistry of sushi at its finest. From fresh ingredients to time-honored techniques, every dish is crafted to delight your senses. Indulge in a journey of authentic flavors and modern twists, only at MYANSHI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orpheusProFont.variable} ${twentientyOneFont.variable}`}
    >
      <body>
        <NextTopLoader color="#A12636" height={3} showSpinner={false} />
        <Preloader />
        <main className=" min-h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
