"use client";

import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { UMark } from "./UMark";

function LineContent({ repeat }: { repeat: number }) {
  const parts = "VANCOUVER NIGHTLIFE IS DEAD ".split("U");
  return (
    <>
      {Array.from({ length: repeat }).map((_, r) => (
        <Fragment key={r}>
          {parts.map((p, i) => (
            <Fragment key={i}>
              {p}
              {i < parts.length - 1 && <UMark size="0.85em" />}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </>
  );
}

export function FixingIt() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-30%"]);
  const fixScale = useTransform(scrollYProgress, [0.2, 0.7], [0.7, 1.2]);

  return (
    <section
      ref={ref}
      className="relative h-[80vh] overflow-hidden bg-[var(--color-uand-red)]"
    >
      <motion.div style={{ x }} className="absolute inset-0 flex flex-col justify-center gap-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="display tighter whitespace-nowrap text-[18vh] leading-[0.9] text-black/60"
          >
            <LineContent repeat={8} />
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
