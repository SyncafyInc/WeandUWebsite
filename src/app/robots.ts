import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL ?? "weand-u-website.vercel.app";
  const siteUrl = /^https?:\/\//i.test(raw) ? raw.replace(/\/+$/, "") : `https://${raw.replace(/\/+$/, "")}`;

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
