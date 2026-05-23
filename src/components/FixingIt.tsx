"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function FixingIt() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-30%"]);
  const fixScale = useTransform(scrollYProgress, [0.2, 0.7], [0.7, 1.2]);

  const line = "VANCOUVER NIGHTLIFE IS DEAD ";
  return (
    <section
      ref={ref}
      className="relative h-[80vh] overflow-hidden bg-[var(--color-uand-red)]"
    >
      <motion.div style={{ x }} className="absolute inset-0 flex flex-col justify-center gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="display tighter whitespace-nowrap text-[12vw] leading-[0.9] text-black/60"
          >
            {line.repeat(8)}
          </div>
        ))}
      </motion.div>

      <motion.div
        style={{ scale: fixScale }}
        className="absolute inset-0 grid place-items-center"
      >
        <h2 className="display tighter text-center text-[18vw] leading-none text-black md:text-[14vw]">
          WE&apos;RE FIXING IT
        </h2>
      </motion.div>
    </section>
  );
}
