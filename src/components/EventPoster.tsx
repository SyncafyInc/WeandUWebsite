"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { UMark } from "./UMark";

const TARGET = new Date("2026-06-18T22:00:00-07:00").getTime();
const POSTER_VIDEO_MP4 = encodeURI("/KICKOFF/BG NO FONT W TEXTURE PNG VER.mp4");
const POSTER_VIDEO_MOV = encodeURI("/KICKOFF/BG NO FONT W TEXTURE PNG VER.MOV");
const POSTER_POSTER = encodeURI("/KICKOFF/BG NO FONT W TEXTURE PNG VER.png");
const BG = encodeURI("/KICKOFF/KO_BG.png w textures and splatter.png");

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

export function EventPoster() {
  const ref = useRef<HTMLDivElement>(null);
  const cd = useCountdown();

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
      {/* background plate */}
      <motion.div
        style={{ y: bgY, backgroundImage: `url("${BG}")` }}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 select-none bg-cover bg-center opacity-30"
      />

      <div className="relative z-10 mb-12 flex items-end justify-between text-[10px] font-bold tracking-widest md:text-xs">
        <span className="display text-base tracking-tight md:text-2xl">
          NEXT EVENT
        </span>
        <span>01 / 05</span>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8">
        {/* kickoff poster */}
        <div className="col-span-1 flex justify-center md:col-span-7">
          <video
            poster={POSTER_POSTER}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="block w-auto max-w-full border-2 border-white bg-black max-h-[70vh] md:max-h-[80vh]"
          >
            <source src={POSTER_VIDEO_MP4} type="video/mp4" />
            <source src={POSTER_VIDEO_MOV} type="video/quicktime" />
            <img src={POSTER_POSTER} alt="Kick Off" />
          </video>
        </div>

        {/* meta column */}
        <div className="col-span-1 md:col-span-5">
          <p className="warp text-[var(--color-uand-red)] text-5xl leading-none md:text-7xl">
            NEXT NIGHT
          </p>
          <h3 className="display tighter mt-3 text-5xl md:text-7xl">
            KICK OFF
          </h3>
          <p className="mt-3 text-sm font-bold tracking-widest md:text-base">
            THURSDAY · JUNE 18 · 2026 · 22:00
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
            <li>· YOUNG LEADERS &amp; CURATORS.</li>
            <li className="inline-flex items-baseline gap-[0.25em]">
              · BRINGING BACK THE FOCUS ON <UMark />.
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.ticketweb.ca/event/kick-ff-celebrities-nightclub-tickets/14951263?pl=blueprint~"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white bg-white px-8 py-4 text-lg font-black tracking-widest text-black transition hover:bg-[var(--color-uand-red)] hover:text-white"
            >
              BUY TICKETS
            </a>
            <a
              href="#rsvp"
              className="inline-block border-2 border-white bg-[var(--color-uand-red)] px-8 py-4 text-lg font-black tracking-widest transition hover:bg-white hover:text-black"
            >
              RSVP / TAP IN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
