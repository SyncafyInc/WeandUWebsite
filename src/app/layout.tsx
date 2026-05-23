import type { Metadata } from "next";
import { body, display, script, warped, graffiti } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "WEAREÜAND — VANCOUVER, WAKE UP",
  description:
    "Socially hungry but socially tired. No bottles. No flexing. No VIP. Yes connection, yes music, yes community. We're fixing Vancouver nightlife.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} ${script.variable} ${warped.variable} ${graffiti.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
