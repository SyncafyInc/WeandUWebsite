import type { Metadata, Viewport } from "next";
import { body, display, script, warped, graffiti } from "@/lib/fonts";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://weand-u-website.vercel.app");

const title = "WEAREÜAND — VANCOUVER, WAKE UP";
const description = "Young leaders & curators. Bringing back the focus on Ü.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: "WEAREÜAND",
    title,
    description,
    url: siteUrl,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#B81E2F",
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
