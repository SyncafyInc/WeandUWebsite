"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { UMark } from "./UMark";

type Props = { photos: string[] };

const TARGET = new Date("2026-03-19T22:00:00-07:00").getTime();

function useCountdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null) return null;
  const diff = Math.max(0, TARGET - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

export function EventPoster({ photos }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const cd = useCountdown();
  const [hero, setHero] = useState(0);

  useEffect(() => {
    if (photos.length === 0) return;
    const id = setInterval(() => setHero((i) => (i + 1) % photos.length), 600);
    return () => clearInterval(id);
  }, [photos.length]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black px-4 py-24 text-white md:px-8 md:py-32"
    >
      {/* layered repeating brand type — bleeds off */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 select-none"
      >
        <div className="display tighter whitespace-nowrap text-[18vw] leading-[0.85] text-[var(--color-uand-red)]/15">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="inline-flex items-baseline gap-[0.1em]">
              WEARE<UMark />AND WEARE<UMark />AND
            </div>
          ))}
        </div>
      </motion.div>

      <div className="relative z-10 mb-12 flex items-end justify-between text-[10px] font-bold tracking-widest md:text-xs">
        <span className="display text-base tracking-tight md:text-2xl">
          POST FORMAT / NEXT EVENT
        </span>
        <span>04 / 06</span>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8">
        {/* poster image with flash cycling */}
        <div className="relative col-span-1 aspect-[3/4] overflow-hidden border-2 border-white md:col-span-7 md:aspect-auto md:h-[80vh]">
          {photos.length === 0 && (
            <div className="absolute inset-0 grid place-items-center bg-[var(--color-uand-red)]">
              <span className="display text-4xl">NO PREVIEW</span>
            </div>
          )}
          {photos.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-200"
              style={{
                opacity: i === hero ? 1 : 0,
                filter: "contrast(1.2) saturate(1.1)",
              }}
            />
          ))}
          {/* halftone overlay */}
          <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-40 [background-image:radial-gradient(black_1px,transparent_1.5px)] [background-size:5px_5px]" />

          {/* LEVEL 1 — background brand type bleeds out of poster */}
          <div className="pointer-events-none absolute -left-4 top-4 right-0 select-none">
            <div className="display tighter whitespace-nowrap text-[14vw] leading-[0.85] text-[var(--color-uand-red)] mix-blend-screen md:text-[10vw]">
              RUSH HOUR
            </div>
          </div>

          {/* LEVEL 2 — script overlay */}
          <div className="absolute bottom-16 left-4 right-4">
            <span className="script text-6xl text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)] md:text-8xl">
              After Hours
            </span>
          </div>

          {/* LEVEL 3 — event details */}
          <div className="absolute bottom-2 left-2 right-2 grid grid-cols-3 gap-2 border-t border-white/40 pt-2 text-[10px] font-bold tracking-widest md:text-xs">
            <span>LOC: CELEBS NIGHTCLUB</span>
            <span className="text-center">03.19.2026</span>
            <span className="text-right">22:00 — LATE</span>
          </div>
        </div>

        {/* meta column */}
        <div className="col-span-1 md:col-span-5">
          <p className="warp text-[var(--color-uand-red)] text-5xl leading-none md:text-7xl">
            NEXT NIGHT
          </p>
          <h3 className="display tighter mt-3 text-5xl md:text-7xl">
            RUSH HOUR
          </h3>
          <p className="mt-3 text-sm font-bold tracking-widest md:text-base">
            CVC @ CELEBS · THURSDAY · MARCH 19 · 2026
          </p>

          {/* countdown */}
          <div className="mt-8 grid grid-cols-4 gap-2 border-y-2 border-white/40 py-6">
            {[
              ["DAYS", cd?.d],
              ["HRS", cd?.h],
              ["MIN", cd?.m],
              ["SEC", cd?.s],
            ].map(([label, val]) => (
              <div key={label as string} className="text-center">
                <div className="display tabular-nums text-4xl md:text-6xl">
                  {val === undefined || val === null
                    ? "--"
                    : String(val).padStart(2, "0")}
                </div>
                <div className="mt-1 text-[10px] font-bold tracking-widest opacity-60">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-8 space-y-2 text-sm font-bold tracking-widest md:text-base">
            <li>· COME SOLO. LEAVE CONNECTED.</li>
            <li>· NO COVER. NO LIST. NO PRETENDING.</li>
            <li>· OPEN DECKS. OPEN PEOPLE. OPEN NIGHT.</li>
          </ul>

          <a
            href="#rsvp"
            className="mt-8 inline-block border-2 border-white bg-[var(--color-uand-red)] px-8 py-4 text-lg font-black tracking-widest transition hover:bg-white hover:text-black"
          >
            RSVP / TAP IN
          </a>
        </div>
      </div>
    </section>
  );
}
