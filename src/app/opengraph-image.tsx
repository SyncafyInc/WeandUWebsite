import { ImageResponse } from "next/og";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

export const alt = "WEAREÜAND — Vancouver";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function pickPhoto(): Promise<string> {
  const dir = join(process.cwd(), "public/photos/celebs");
  const files = await readdir(dir);
  const jpgs = files.filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
  const file = jpgs[0] ?? null;
  if (!file) return "";
  const buf = await readFile(join(dir, file));
  const mime = /\.png$/i.test(file)
    ? "image/png"
    : /\.webp$/i.test(file)
      ? "image/webp"
      : "image/jpeg";
  return `data:${mime};base64,${buf.toString("base64")}`;
}

export default async function OpengraphImage() {
  const iconBuf = await readFile(join(process.cwd(), "public/logo/u-icon.png"));
  const iconSrc = `data:image/png;base64,${iconBuf.toString("base64")}`;
  const photoSrc = await pickPhoto();

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
          position: "relative",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        {photoSrc && (
          <img
            src={photoSrc}
            alt=""
            width={1200}
            height={630}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.55,
              filter: "contrast(1.25) saturate(0.9) brightness(0.85)",
              mixBlendMode: "multiply",
            }}
          />
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(184,30,47,0.30)",
          }}
        />

        {/* big Ü with difference blend */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mixBlendMode: "difference",
          }}
        >
          <img src={iconSrc} width={480} height={480} alt="" style={{ filter: "brightness(0) invert(1)" }} />
        </div>

        {/* top meta */}
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 80,
            right: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: "0.2em",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={iconSrc} width={48} height={48} alt="" />
            <span>2026</span>
          </div>
          <span>LIVE / VANCOUVER</span>
        </div>

        {/* bottom meta */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: "0.2em",
            zIndex: 10,
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
