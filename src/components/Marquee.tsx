"use client";

import type { ReactNode } from "react";

type Props = {
  items: ReactNode[];
  speed?: "normal" | "fast";
  reverse?: boolean;
  className?: string;
};

export function Marquee({ items, speed = "normal", reverse, className = "" }: Props) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`marquee-track inline-flex ${speed === "fast" ? "fast" : ""} ${
          reverse ? "reverse" : ""
        }`}
      >
        {row.map((t, i) => (
          <span key={i} className="display mx-6 inline-flex items-baseline gap-[0.1em] text-5xl md:text-7xl">
            {t} <span className="opacity-40">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
