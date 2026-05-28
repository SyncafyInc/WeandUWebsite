import type { Metadata } from "next";
import { body, display, script, warped, graffiti } from "@/lib/fonts";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "WEAREÜAND — VANCOUVER, WAKE UP",
  description:
    "Young leaders & curators. Bringing back the focus on Ü.",
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
      <body>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
