import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orpheusProFont = localFont({
  src: "../assets/font/OrpheusPro-Bold.ttf",
  variable: "--font-OrpheusPro-mono",
});
const twentientyOneFont = localFont({
  src: [
    {
      path: "../assets/font/TwentiethCenturyforKenmoreBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/font/TwentiethCenturyforKenmoreSemibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/font/TwentiethCenturyforKenmoreMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/font/TwentiethCenturyforKenmoreLight.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-twentientyOneFont-mono",
});

export { geistSans, geistMono, orpheusProFont, twentientyOneFont };
