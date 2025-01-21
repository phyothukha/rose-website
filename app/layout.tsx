import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rosé - Myanmar Fan Group",
  description:
    "Discover the artistry of sushi at its finest. From fresh ingredients to time-honored techniques, every dish is crafted to delight your senses. Indulge in a journey of authentic flavors and modern twists, only at MYANSHI.",
  icons: {
    icon: [{ url: "/assets/fav-icon.svg" }],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
