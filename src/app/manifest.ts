import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WEAREÜAND",
    short_name: "WEAREÜAND",
    description: "Young leaders & curators. Bringing back the focus on Ü.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#B81E2F",
    orientation: "portrait",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
