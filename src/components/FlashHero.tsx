"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { UMark } from "./UMark";

type Props = { photos: string[] };

const FRAGMENTS = [
  "COME SOLO. LEAVE CONNECTED.",
  "YOUNG LEADERS & CURATORS.",
  "MUSIC. PEOPLE. MOMENT.",
  "REAL ENERGY. REAL MEMORIES.",
  "LOW PRESSURE. HIGH ENERGY.",
];

export function FlashHero({ photos }: Props) {
  const [idx, setIdx] = useState(0);
  const [fragIdx, setFragIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const markY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  useEffect(() => {
    if (photos.length === 0) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % photos.length);
    }, 110);
    return () => clearInterval(id);
  }, [photos.length]);

  useEffect(() => {
    const id = setInterval(() => setFragIdx((i) => (i + 1) % FRAGMENTS.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-[var(--color-uand-red)] text-black"
    >
      {/* flash-cut photo bg */}
      <motion.div
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 z-0"
      >
        {photos.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: i === idx ? 0.55 : 0,
              filter: "contrast(1.25) saturate(0.9) brightness(0.85)",
              mixBlendMode: "multiply",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[var(--color-uand-red)]/30" />
      </motion.div>

      {/* giant Ü bleeding off the right */}
      <motion.div
        style={{ y: markY, mixBlendMode: "difference" }}
        aria-hidden
        className="pointer-events-none absolute -bottom-[5%] -right-[8%] z-10 h-[85%] w-[55%] md:-right-[5%] md:w-[42%]"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundColor: "white",
            WebkitMaskImage: "url(/logo/u-icon.png)",
            maskImage: "url(/logo/u-icon.png)",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      </motion.div>

      {/* corner meta */}
      <div className="absolute left-4 top-4 z-20 flex items-center gap-3 text-[11px] font-bold tracking-widest md:left-8 md:top-6">
        <span className="display text-xl md:text-2xl inline-flex items-baseline gap-[0.05em]"><UMark />2026</span>
        <span className="hidden md:inline-flex items-baseline gap-[0.25em]">/ BRINGING BACK THE FOCUS ON <UMark /></span>
      </div>
      <div className="absolute right-4 top-4 z-20 text-[11px] font-bold tracking-widest md:right-8 md:top-6">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-black align-middle" />{" "}
        LIVE / VANCOUVER
      </div>

      {/* rotating fragment */}
      <div className="absolute bottom-24 left-4 right-4 z-20 md:bottom-28 md:left-8 md:right-8">
        <p className="display text-2xl tracking-wide md:text-5xl">
          {FRAGMENTS[fragIdx]}
        </p>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between text-[10px] font-bold tracking-widest md:bottom-6 md:left-8 md:right-8 md:text-xs">
        <span>SOCIALLY HUNGRY · SOCIALLY TIRED</span>
        <span>SCROLL ↓</span>
      </div>
    </section>
  );
}
