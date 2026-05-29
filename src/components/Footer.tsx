import { UMark } from "./UMark";

export function Footer() {
  return (
    <footer className="relative bg-black px-4 pb-8 pt-24 text-white md:px-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <div
            aria-label="Ü"
            role="img"
            className="h-[40vh] w-[40vh] md:h-[60vh] md:w-[60vh]"
            style={{
              backgroundColor: "currentColor",
              WebkitMaskImage: "url(/logo/u-icon.png)",
              maskImage: "url(/logo/u-icon.png)",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="md:col-span-5">
          <p className="mt-6 max-w-md text-sm font-bold leading-relaxed tracking-widest md:text-base">
            VANCOUVER NIGHTLIFE IS DEAD. WE&apos;RE FIXING IT.
            LOW PRESSURE, HIGH ENERGY SOCIAL SPACES
            THAT BRING BACK BELONGING.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-3 text-sm font-bold tracking-widest">
            <li>
              <a
                className="border-b border-white pb-1 inline-flex items-baseline gap-[0.1em]"
                href="https://www.instagram.com/weareuand/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @WEARE<UMark />AND
              </a>
            </li>
            <li><a className="border-b border-white pb-1" href="#rsvp">STAY UPDATED</a></li>
            <li>
              <a className="border-b border-white pb-1" href="mailto:partners@weareuand.com">
                PARTNERS@WEAREUAND.COM
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 flex items-center justify-between border-t border-white/20 pt-6 text-[10px] font-bold tracking-widest md:text-xs">
        <span className="inline-flex items-baseline gap-[0.15em]">© <UMark />2026</span>
        <span>VANCOUVER, B.C.</span>
        <span className="inline-flex items-baseline gap-[0.25em]">BRINGING BACK THE FOCUS ON <UMark /></span>
      </div>
    </footer>
  );
}
