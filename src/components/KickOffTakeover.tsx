"use client";

import { useEffect, useState } from "react";
import { UMark } from "./UMark";

const KICK_OFF_FONT = encodeURI("/KICKOFF/KICK OFF FONT no halftone PNG VER.png");
const BALL = encodeURI("/KICKOFF/ball graphic png ver.png");

const COLORS = [
  "#B81E2F", // uand red
  "#000000",
  "#1B1B1B",
  "#5A0E24",
];

export function KickOffTakeover({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [colorIdx, setColorIdx] = useState(0);

  useEffect(() => {
    if (!open) return;
    const id = setInterval(() => setColorIdx((i) => (i + 1) % COLORS.length), 380);
    return () => clearInterval(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const bg = COLORS[colorIdx];
  const fg = "#FFFFFF";

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center transition-colors duration-300"
      style={{ backgroundColor: bg, color: fg }}
      onClick={onClose}
    >
      {/* spinning disco ball behind */}
      <img
        src={BALL}
        alt=""
        aria-hidden
        className="kickoff-ball pointer-events-none absolute left-1/2 top-1/2 z-0 w-[70vmin] -translate-x-1/2 -translate-y-1/2 opacity-90 mix-blend-screen"
      />

      <div
        className="absolute inset-0 z-[1] flex items-center justify-center px-6"
        style={{
          WebkitMaskImage: `url("${KICK_OFF_FONT}")`,
          maskImage: `url("${KICK_OFF_FONT}")`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          backgroundColor: fg,
        }}
      />

      <style jsx>{`
        .kickoff-ball {
          animation: ko-ball-spin 12s linear infinite;
          transform-origin: 50% 50%;
        }
        @keyframes ko-ball-spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>

      <div className="pointer-events-none relative z-10 mt-auto mb-12 text-center md:mb-20">
        <p className="display tighter text-4xl leading-none md:text-7xl inline-flex items-baseline gap-[0.2em] justify-center">
          SEE <UMark size="0.9em" /> AT KICK OFF
        </p>
        <p className="mt-4 text-xs font-bold tracking-widest md:text-sm opacity-80">
          JUNE 18 · 2026 · VANCOUVER · TAP TO CLOSE
        </p>
      </div>
    </div>
  );
}
