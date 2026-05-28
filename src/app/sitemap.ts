import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL ?? "weand-u-website.vercel.app";
  const siteUrl = /^https?:\/\//i.test(raw) ? raw.replace(/\/+$/, "") : `https://${raw.replace(/\/+$/, "")}`;

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
