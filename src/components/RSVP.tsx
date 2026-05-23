"use client";

import { useState } from "react";

export function RSVP() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section
      id="rsvp"
      className="relative bg-[var(--color-uand-red)] px-4 py-24 text-black md:px-8 md:py-40"
    >
      <div className="mb-10 flex items-end justify-between text-[10px] font-bold tracking-widest md:text-xs">
        <span className="display text-base tracking-tight md:text-2xl">TAP IN</span>
        <span>06 / 06</span>
      </div>

      <h2 className="display tighter text-[16vw] leading-[0.82] md:text-[10vw]">
        <span className="block">COME SOLO.</span>
        <span className="block text-black/40">LEAVE CONNECTED.</span>
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!email) return;
          setSent(true);
        }}
        className="mt-12 flex flex-col gap-3 border-y-2 border-black py-6 md:flex-row md:items-center md:gap-6"
      >
        <label className="text-[10px] font-bold tracking-widest md:text-xs">
          YOUR EMAIL /
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@vancouver.com"
          className="flex-1 border-b-2 border-black bg-transparent py-3 text-2xl font-bold tracking-wide placeholder-black/40 outline-none md:text-4xl"
        />
        <button
          type="submit"
          disabled={sent}
          className="bg-black px-8 py-4 text-base font-black tracking-widest text-[var(--color-uand-red)] transition hover:bg-white hover:text-black disabled:opacity-50"
        >
          {sent ? "YOU'RE IN" : "GET ON THE LIST"}
        </button>
      </form>

      <p className="mt-8 max-w-2xl text-sm font-bold tracking-widest md:text-base">
        WE&apos;LL DROP A NOTE THE WEEK OF EVERY EVENT. NO SPAM. NO BS.
        ONLY NIGHTS THAT DON&apos;T COST YOUR MORNING.
      </p>
    </section>
  );
}
