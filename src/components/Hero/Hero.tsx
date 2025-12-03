export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-r from-[#A30000] to-[#ED1D25] text-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-24">
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

        {/* RIGHT SIDE IMAGE */}
        <div className="relative flex flex-1 justify-end">
          <div className="relative h-[740px] w-[820px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_45%,rgba(255,255,255,0.08),transparent_55%)]" />
            <img
              src="images/hero/Iphone Image.png"
              alt="Trading App Preview"
              className="absolute bottom-[-220px] left-24 w-[540px] drop-shadow-[0_40px_90px_rgba(0,0,0,0.48)]"
            />
            <img
              src="images/hero/iPhone mockup.png"
              alt="Trading App UI"
              className="absolute -right-6 bottom-[-210px] z-10 w-[420px] drop-shadow-[0_45px_90px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
