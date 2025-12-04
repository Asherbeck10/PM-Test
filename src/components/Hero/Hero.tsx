export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-r from-[#A30000] to-[#ED1D25] text-white">
      {/* MAIN HERO CONTENT */}
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-between px-8 py-24">
        {/* LEFT SIDE */}
        <div className="max-w-[540px] space-y-6">
          <h1 className="text-[64px] leading-[1.1] font-bold">
            Trade Forex
            <br />
            with Premier
            <br />
            Markets
          </h1>

          <p className="text-[18px] leading-[1.6] text-white/90">
            Access global markets with advanced trading tools, competitive spreads, and
            institutional grade execution.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-6 pt-8">
            <button className="rounded-full bg-white px-10 py-4 text-[16px] font-semibold text-[#ED1D25] transition hover:bg-gray-100">
              Start Trading
            </button>

            <button className="rounded-full border border-white px-10 py-4 text-[16px] font-semibold text-white transition hover:bg-white/10">
              Try Demo Account
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE BUNDLE */}
        <div className="relative flex flex-1 justify-end">
          <div className="relative h-[740px] w-[820px]">
            {/* Light effect */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_45%,rgba(255,255,255,0.08),transparent_55%)]" />

            {/* Back iPhone */}
            <img
              src="/images/hero/Iphone Image.png"
              alt="Phone Back"
              className="absolute bottom-[-220px] left-24 w-[540px] drop-shadow-[0_40px_90px_rgba(0,0,0,0.48)]"
            />

            {/* Front iPhone */}
            <img
              src="/images/hero/iPhone mockup.png"
              alt="Trading App UI"
              className="absolute right-25 bottom-[-120px] z-10 w-[495px] drop-shadow-[0_45px_90px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
      </div>
      {/* SINGLE TICKER IMAGE — FLOATING ON THE CURVE */}
      <div className="pointer-events-none absolute bottom-10 left-1/2 z-60 -translate-x-1/2">
        <img
          src="/images/hero/Frame 1686552484.png"
          alt="market ticker"
          className="block h-auto w-[750px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.20)]"
        />
      </div>

      {/* CURVED PNG DIVIDER */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-50 w-full leading-none">
        <img
          src="/images/hero/Rectangle 99.png"
          alt="decorative divider"
          className="block h-auto w-full"
        />
      </div>
    </section>
  );
}
