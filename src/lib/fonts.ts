import { Anton, Bowlby_One, Permanent_Marker, Inter } from "next/font/google";
import localFont from "next/font/local";

export const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const script = localFont({
  src: "../../public/fonts/BirdsOfParadise.ttf",
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
