import { Anton, Allura, Bowlby_One, Permanent_Marker, Inter } from "next/font/google";

export const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const script = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const warped = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-warped",
});

export const graffiti = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-graffiti",
});

export const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});
