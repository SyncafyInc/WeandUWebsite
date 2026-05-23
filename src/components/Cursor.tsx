"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.documentElement.classList.add("cursor-none");
    let x = 0, y = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    window.addEventListener("mousemove", move);
    let raf = 0;
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("cursor-none");
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[80] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black mix-blend-difference"
        style={{ marginLeft: -20, marginTop: -20 }}
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[81] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-uand-red)]"
        style={{ marginLeft: -4, marginTop: -4 }}
      />
    </>
  );
}
