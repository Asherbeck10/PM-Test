export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#A30000] to-[#ED1D25] text-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-28">
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
        <div className="relative">
          <img
            src="/phone-mock.png"
            alt="Trading App Preview"
            className="w-[560px] translate-y-6"
          />
        </div>
      </div>
    </section>
  );
}
