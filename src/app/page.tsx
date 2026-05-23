import { getCelebs, getRushHour } from "@/lib/photos";
import { Cursor } from "@/components/Cursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FlashHero } from "@/components/FlashHero";
import { Marquee } from "@/components/Marquee";
import { Manifesto } from "@/components/Manifesto";
import { PhotoReel } from "@/components/PhotoReel";
import { FixingIt } from "@/components/FixingIt";
import { EventPoster } from "@/components/EventPoster";
import { RSVP } from "@/components/RSVP";
import { Footer } from "@/components/Footer";
import { UMark } from "@/components/UMark";

export default function Home() {
  const celebs = getCelebs();
  const rush = getRushHour();

  const tickerA = [
    "COME SOLO",
    "LEAVE CONNECTED",
    "GO OUT",
    "FEEL GOOD TOMORROW",
    "NO BOTTLES",
    "NO FLEXING",
    "NO EGO",
    "YES MUSIC",
    "YES MOMENTS",
  ];
  const tickerB = [
    <span key="vwu" className="inline-flex items-baseline gap-[0.1em]">
      VANCO<UMark />VER WAKE <UMark />P
    </span>,
    "REAL ENERGY",
    "REAL MEMORIES",
    "LOW PRESSURE",
    "HIGH ENERGY",
    "COMMUNITY OVER CLOUT",
    "PRESENCE OVER PERFORMANCE",
  ];
  const tickerC = [
    "NIGHTS THAT DON'T COST YOUR MORNING",
    "WE'RE BRINGING BACK SOCIAL LIFE",
    <span key="focus" className="inline-flex items-baseline gap-[0.25em]">
      PUTTING THE FOCUS ON <UMark />
    </span>,
  ];

  return (
    <main className="grain relative">
      <ScrollProgress />
      <Cursor />
      <FlashHero photos={celebs.slice(0, 40)} />

      <div className="bg-black py-4 text-[var(--color-uand-red)]">
        <Marquee items={tickerA} />
      </div>

      <Manifesto />

      <div className="bg-[var(--color-uand-red)] py-4 text-black">
        <Marquee items={tickerB} reverse speed="fast" />
      </div>

      <PhotoReel photos={celebs} title="THIS IS A NIGHT" sub="from inside the room:" />

      <FixingIt />

      <EventPoster photos={rush} />

      <div className="bg-black py-4 text-[var(--color-uand-red)]">
        <Marquee items={tickerC} />
      </div>

      <RSVP />
      <Footer />
    </main>
  );
}
