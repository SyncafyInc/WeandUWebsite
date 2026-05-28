import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    "*": [
      "public/photos/**",
      "public/JUNE18/**",
      "public/KICKOFF/**",
      "public/KRÜPS Branding Package/**",
      "public/designguide.pdf",
      "public/Modern red&black.pdf",
      "public/weareuand_for_designers.html",
    ],
  },
};

export default nextConfig;
