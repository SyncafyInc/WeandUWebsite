"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { KickOffTakeover } from "./KickOffTakeover";

export function RSVP() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const addEmail = useMutation(api.rsvps.addEmail);

  return (
    <section
      id="rsvp"
      className="relative overflow-hidden bg-[var(--color-uand-red)] px-4 py-24 text-black md:px-8 md:py-40"
    >
      <div className="mb-10 flex items-end justify-between text-[10px] font-bold tracking-widest md:text-xs">
        <span className="display text-base tracking-tight md:text-2xl">STAY UPDATED</span>
        <span>06 / 06</span>
      </div>

      <h2 className="display tighter text-[16vw] leading-[0.82] md:text-[10vw]">
        <span className="block">COME SOLO.</span>
        <span className="block text-black/40">LEAVE CONNECTED.</span>
      </h2>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!email || submitting) return;
          setSubmitting(true);
          setError(null);
          try {
            await addEmail({ email });
            setSent(true);
          } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong");
          } finally {
            setSubmitting(false);
          }
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
          disabled={sent || submitting}
          className="bg-black px-8 py-4 text-base font-black tracking-widest text-[var(--color-uand-red)] transition hover:bg-white hover:text-black disabled:opacity-50"
        >
          {sent ? "SUBSCRIBED" : submitting ? "..." : "NOTIFY ME"}
        </button>
      </form>
      {error && (
        <p className="mt-3 text-sm font-bold tracking-widest text-black">{error.toUpperCase()}</p>
      )}

      <p className="mt-8 max-w-2xl text-sm font-bold tracking-widest md:text-base">
        GET A CHANCE TO WIN DISCOUNTS, GUESTLIST, BACKSTAGE ACCESS AND MORE.
      </p>
      <p className="mt-3 max-w-2xl text-sm font-bold tracking-widest md:text-base">
        WE&apos;LL DROP A NOTE THE WEEK OF EVERY EVENT. NO SPAM. NO BS.
      </p>

      <KickOffTakeover open={sent} onClose={() => setSent(false)} />
    </section>
  );
}
