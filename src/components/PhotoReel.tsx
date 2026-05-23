"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { UMark } from "./UMark";

type Props = { photos: string[]; title: string; sub: string };

export function PhotoReel({ photos, title, sub }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // horizontal scroll
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-85%"]);

  return (
    <section
      ref={ref}
      className="relative bg-[var(--color-uand-red)] py-24 text-black md:py-32"
    >
      <div className="mb-10 flex items-end justify-between px-4 md:px-8">
        <div>
          <p className="text-[10px] font-bold tracking-widest md:text-xs">
            BEHIND THE SCENES / EVENT NIGHT CONTENT
          </p>
          <h2 className="display tighter mt-2 text-6xl leading-none md:text-9xl">
            {title}
          </h2>
          <p className="script mt-2 text-3xl md:text-5xl">{sub}</p>
        </div>
        <span className="text-[10px] font-bold tracking-widest md:text-xs">
          {photos.length.toString().padStart(3, "0")} FRAMES
        </span>
      </div>

      <div className="overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 will-change-transform">
          {photos.map((src, i) => (
            <div
              key={src}
              className="relative h-[60vh] w-[40vw] flex-shrink-0 overflow-hidden md:h-[80vh] md:w-[28vw]"
              style={{
                transform: `rotate(${i % 3 === 0 ? "-1.2deg" : i % 3 === 1 ? "1deg" : "0deg"})`,
              }}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ filter: "contrast(1.15) saturate(1.05)" }}
              />
              <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between text-[10px] font-bold tracking-widest text-white mix-blend-difference">
                <span>FRAME {String(i + 1).padStart(3, "0")}</span>
                <span className="inline-flex items-baseline gap-[0.05em]">WEARE<UMark />AND</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
