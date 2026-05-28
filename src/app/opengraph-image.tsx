import { ImageResponse } from "next/og";

export const alt = "WEAREÜAND — Vancouver";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 56, lineHeight: 1, letterSpacing: "-0.05em" }}>Ü</span>
            <span>2026</span>
          </div>
          <span>LIVE / VANCOUVER</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            lineHeight: 0.85,
          }}
        >
          <div
            style={{
              fontSize: 260,
              fontWeight: 900,
              letterSpacing: "-0.06em",
              display: "flex",
            }}
          >
            WEARE
          </div>
          <div
            style={{
              fontSize: 260,
              fontWeight: 900,
              letterSpacing: "-0.06em",
              display: "flex",
              alignItems: "baseline",
              gap: 8,
            }}
          >
            <span>Ü</span>
            <span>AND</span>
          </div>
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
          <span>BRINGING BACK THE FOCUS ON Ü</span>
          <span>KICK OFF · 06.18.2026</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
