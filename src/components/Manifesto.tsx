"use client";

import { motion } from "framer-motion";
import { UMark } from "./UMark";

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden bg-black px-4 py-24 text-white md:px-8 md:py-32"
    >
      {/* meta */}
      <div className="mb-12 flex items-end justify-between text-[10px] font-bold tracking-widest md:mb-16 md:text-xs">
        <span className="display text-base tracking-tight md:text-2xl">
          PROJECT OVERVIEW
        </span>
        <span>01 / 06</span>
      </div>

      {/* hero statement: THERE IS NO WE WITHOUT Ü */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="display tighter text-[13vw] leading-[0.82] md:text-[11vw]"
        >
          <div>THERE IS NO</div>
          <div className="flex items-end gap-[0.08em]">
            <span>WE WITHOUT</span>
            <motion.span
              initial={{ y: -120, opacity: 0, rotate: -8 }}
              whileInView={{ y: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{
                delay: 0.35,
                type: "spring",
                stiffness: 160,
                damping: 14,
              }}
              className="inline-block"
            >
              <UMark size="0.95em" />
            </motion.span>
          </div>
        </motion.div>

        {/* ghost echo */}
        <div
          aria-hidden
          className="display tighter pointer-events-none absolute inset-0 select-none text-[13vw] leading-[0.82] text-[var(--color-uand-red)]/15 md:text-[11vw]"
          style={{ transform: "translate(8px, 8px)" }}
        >
          <div>THERE IS NO</div>
          <div className="inline-flex items-baseline gap-[0.05em]">WE WITHOUT <UMark /></div>
        </div>
      </div>

      {/* tag rule */}
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-white/20 py-4 text-[10px] font-bold tracking-widest md:text-xs">
        <span className="text-[var(--color-uand-red)]">/ MANIFESTO</span>
        <span className="inline-flex items-baseline gap-[0.1em]">EST. <UMark />2026</span>
        <span>VANCOUVER, B.C.</span>
        <span className="ml-auto inline-flex items-baseline gap-[0.25em]">PUTTING THE FOCUS ON <UMark /></span>
      </div>
    </section>
  );
}
