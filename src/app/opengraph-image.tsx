import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "WEAREÜAND — Vancouver";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const iconBuf = await readFile(join(process.cwd(), "public/logo/u-icon.png"));
  const iconSrc = `data:image/png;base64,${iconBuf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#B81E2F",
          color: "black",
          padding: 80,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: "0.2em",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={iconSrc} width={56} height={56} alt="" />
            <span>2026</span>
          </div>
          <span>LIVE / VANCOUVER</span>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={iconSrc} width={420} height={420} alt="" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: "0.2em",
            marginTop: 32,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span>BRINGING BACK THE FOCUS ON</span>
            <img src={iconSrc} width={28} height={28} alt="" />
          </div>
          <span>KICK OFF · 06.18.2026</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
