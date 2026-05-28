import { getCelebs } from "@/lib/photos";
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

  const tickerA = [
    "COME SOLO",
    "LEAVE CONNECTED",
    "SONG REQUESTS",
    "YOUNG LEADERS & CURATORS",
    "YES MUSIC",
    "YES MOMENTS",
  ];
  const tickerB = [
    "WE'RE BRINGING BACK SOCIAL LIFE",
    "YOUNG LEADERS & CURATORS",
    <span key="focus" className="inline-flex items-baseline gap-[0.25em]">
      BRINGING BACK THE FOCUS ON <UMark />
    </span>,
  ];

  return (
    <main className="grain relative">
      <ScrollProgress />
      <Cursor />

      {/* 1. Opening logo */}
      <FlashHero photos={celebs.slice(0, 40)} />

      {/* 2. Next Event — Kick Off */}
      <EventPoster />

      <div className="bg-black py-4 text-[var(--color-uand-red)]">
        <Marquee items={tickerA} />
      </div>

      {/* 3. Project Overview */}
      <Manifesto />

      {/* 4. This Is A Night */}
      <PhotoReel photos={celebs} title="THIS IS A NIGHT" sub="from inside the room:" />

      <div className="bg-[var(--color-uand-red)] py-4 text-black">
        <Marquee items={tickerB} reverse speed="fast" />
      </div>

      {/* 5. Vancouver nightlife → Come Solo, Leave Connected */}
      <FixingIt />
      <RSVP />

      <Footer />
    </main>
  );
}
