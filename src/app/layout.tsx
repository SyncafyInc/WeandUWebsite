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
  title: {
    default: title,
    template: "%s · WEAREÜAND",
  },
  description,
  applicationName: "WEAREÜAND",
  authors: [{ name: "WEAREÜAND" }],
  creator: "WEAREÜAND",
  publisher: "WEAREÜAND",
  keywords: [
    "WEAREÜAND",
    "WEAREUAND",
    "Vancouver nightlife",
    "Kick Off",
    "young leaders",
    "curators",
    "Vancouver events",
    "warehouse party",
    "underground",
    "community",
  ],
  category: "events",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
    creator: "@weareuand",
    site: "@weareuand",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#B81E2F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
