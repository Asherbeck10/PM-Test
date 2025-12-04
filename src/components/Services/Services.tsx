export default function Services() {
  return (
    <section className="w-full bg-white py-28">
      <div className="mx-auto max-w-[1440px] px-24">
        {/* ----------------------------- */}
        {/* PART 1: JOIN 50,000+ TRADERS */}
        {/* ----------------------------- */}
        <div className="mb-28 grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[56px] leading-[1.1] font-bold text-black">
              Join <span className="text-[#ED1D25]">50,000+</span>
              <br />
              traders who
              <br />
              trust us
            </h2>
          </div>

          {/* RIGHT TEXT + BUTTONS */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-[18px] leading-[1.6] text-gray-700">
              Experience advanced trading tools, transparent and competitive pricing, lightning-fast
              execution, and dedicated support trusted by traders worldwide.
            </p>

            <div className="flex items-center gap-6">
              <button className="rounded-full bg-[#ED1D25] px-10 py-4 text-[16px] font-semibold text-white">
                Start Trading
              </button>

              <button className="rounded-full border border-[#ED1D25] px-10 py-4 text-[16px] font-semibold text-[#ED1D25]">
                Try Demo Account
              </button>
            </div>
          </div>
        </div>

        {/* ----------------------------- */}
        {/* PART 2: RED PROMO BANNER */}
        {/* ----------------------------- */}
        <div className="relative mb-28 w-full overflow-visible rounded-3xl">
          {/* Background gradient */}
          <div className="absolute inset-0 h-[250px] rounded-3xl bg-linear-to-r from-[#A30000] via-[#C60000] to-[#ED1D25]" />

          {/* Full-height coins (behind everything) */}
          <img
            src="/images/services/image 195.png"
            alt="Coins"
            className="object-center-left pointer-events-none absolute inset-0 z-1 h-[250px] w-auto translate-x-10 object-cover select-none"
          />

          {/* Man image — hand breaks out of the banner */}
          <img
            src="/images/services/image 1 94.png"
            alt="Trader"
            className="pointer-events-none absolute top-[-100px] left-20 z-3 h-[350px]"
          />

          {/* Right side text */}
          <div className="relative z-5 flex h-[250px] w-full items-center justify-end pr-24">
            <div className="max-w-[430px] text-right text-white">
              <h3 className="text-[32px] leading-tight font-semibold drop-shadow-[0_4px_14px_rgba(0,0,0,0.4)]">
                Everything you need to <br />
                trade the markets
              </h3>

              <button className="mt-6 rounded-full border border-white/30 bg-linear-to-b from-[#5A0000] to-[#9E0000] px-9 py-3 font-medium shadow-[0_0_20px_rgba(255,80,80,0.45)] transition hover:brightness-110">
                Explore Accounts
              </button>
            </div>
          </div>
        </div>

        {/* ----------------------------- */}
        {/* PART 3: OUR MARKETS */}
        {/* ----------------------------- */}
        <div>
          <h2 className="mb-4 text-center text-[48px] font-bold text-black">Our Markets</h2>

          <p className="mx-auto mb-10 max-w-[700px] text-center text-gray-600">
            Stay informed with the data that matters, on 17,000+ markets. Get the latest news,
            trader sentiment, spreads, price action and much more.
          </p>

          {/* CATEGORY TABS */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {["Most Traded", "Commodities", "Indices", "Cryptocurrencies", "Shares", "ETFs"].map(
              (tab) => (
                <button
                  key={tab}
                  className="rounded-full border border-[#ED1D25] px-6 py-2 text-[#ED1D25] transition hover:bg-[#ED1D25] hover:text-white"
                >
                  {tab}
                </button>
              ),
            )}
          </div>

          {/* MARKETS CONTENT SKELETON */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* LEFT LIST */}
            <div className="space-y-4">
              {["BTC", "BTC", "BTC", "BTC", "ETH"].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl bg-white p-4 shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-[36px] w-[36px] rounded-full bg-gray-200" />
                    <div>
                      <div className="font-semibold text-black">{item}</div>
                      <div className="text-sm text-gray-500">
                        {item === "ETH" ? "Ethereum" : "Bitcoin"}
                      </div>
                    </div>
                  </div>

                  <div className="font-semibold text-[#20A020]">₽ 5240, +3.25%</div>
                </div>
              ))}
            </div>

            {/* RIGHT CHART AREA */}
            <div className="rounded-2xl bg-white p-6 shadow">
              <div className="h-[300px] w-full rounded-xl border border-[#ED1D25]/20 bg-gradient-to-b from-[#FED6D6] to-[#FFFFFF]">
                {/* Chart Placeholder */}
                <div className="pt-[130px] text-center text-gray-400">(Chart Placeholder)</div>
              </div>

              <p className="mt-4 text-center text-sm text-gray-400">
                Past performance is not a reliable indicator of future results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
