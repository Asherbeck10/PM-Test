import { useState } from "react";
import MarketHeaderCard from "./MarketheaderCard";

export default function Services() {
  const [activeMarket, setActiveMarket] = useState<number | null>(null);

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

          <img
            src="/images/services/image 195.png"
            alt="Coins"
            className="object-center-left pointer-events-none absolute inset-0 z-1 h-[250px] w-auto translate-x-10 object-cover select-none"
          />

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
          <div className="grid grid-cols-1 justify-center gap-12 lg:grid-cols-2">
            {/* LEFT LIST */}
            <div className="space-y-4 justify-self-center">
              {["BTC", "BTC", "BTC", "BTC", "ETH"].map((item, idx) => (
                // Each market row toggles to red when selected
                <div
                  key={idx}
                  onClick={() => setActiveMarket(idx)}
                  className={`flex h-[74px] w-[286px] cursor-pointer items-center justify-between rounded-[20px] border-[1.7px] p-4 shadow transition ${
                    activeMarket === idx
                      ? "border-[#ED1D25] bg-[#ED1D25] text-white"
                      : "border-gray-200 bg-white text-black"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img src="/images/services/Cryptocurrency.png" alt="Cryptocurrency" />
                    <div>
                      <div
                        className={`font-semibold ${activeMarket === idx ? "text-white" : "text-black"}`}
                      >
                        {item}
                      </div>
                      <div
                        className={`text-sm ${activeMarket === idx ? "text-white/80" : "text-gray-500"}`}
                      >
                        {item === "ETH" ? "Ethereum" : "Bitcoin"}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`font-semibold ${
                      activeMarket === idx ? "text-white" : "text-[#20A020]"
                    }`}
                  >
                    ₽ 5240, +3.25%
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT CHART AREA */}
            <div className="flex flex-col items-start justify-self-center">
              <div className="mb-4 flex w-[663px] items-start justify-between gap-4">
                {/* Left: Header card */}
                <MarketHeaderCard />

                {/* Right: Buyers/Sellers box + Browse link */}
                <div className="flex flex-col">
                  {/* Buyers/Sellers box */}
                  <div className="flex min-w-[190px] flex-col gap-2 rounded-[14px] border border-gray-200 bg-white px-4 py-3 text-[13px] leading-tight shadow-md">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-800">Buyers</span>
                      <span className="font-semibold text-gray-900">66.93%</span>
                      <span className="text-gray-500">Low:</span>
                      <span className="font-semibold text-[#20A020]">3686.38</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-gray-800">Seller</span>
                      <span className="font-semibold text-gray-900">66.93%</span>
                      <span className="text-gray-500">High:</span>
                      <span className="font-semibold text-[#ED1D25]">3788.96</span>
                    </div>
                  </div>

                  {/* Browse all markets — placed BELOW, not inside */}
                  <div className="group mt-2 flex cursor-pointer items-center justify-end gap-2">
                    <span className="text-[12px] font-medium text-[#ED1D25] group-hover:underline">
                      Browse all markets
                    </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="h-3 w-3 opacity-80 transition-transform group-hover:translate-x-1"
                    >
                      <path
                        d="M4 8h8m0 0L9.5 5.5M12 8 9.5 10.5"
                        stroke="#ED1D25"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="h-[343px] w-[663px] rounded-[20px] border border-[#ED1D25]/20 bg-linear-to-b from-[#FED6D6] to-[#FFFFFF] opacity-100">
                <img src="/images/services/Frame.png" alt="Chart" />
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
