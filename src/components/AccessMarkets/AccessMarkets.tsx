import { useState, type ReactNode } from "react";

export default function AccessMarkets() {
  return (
    <section className="w-full bg-linear-to-b from-[#4A0000] via-[#7A0000] to-[#2B0000] py-28 text-white">
      <div className="mx-auto max-w-[1440px] px-8 text-center">
        {/* TITLE */}
        <h2 className="text-[52px] leading-tight font-bold">
          Access <span className="text-brand">17,000+</span> <br />
          markets all in one
        </h2>

        <p className="mx-auto mt-4 max-w-[680px] text-[18px] leading-[1.6] text-white/80">
          Trade forex, shares, indices, and commodities with competitive spreads, deep liquidity,
          and seamless execution.
        </p>

        {/* BADGES */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <FeatureBadge
            icon={<img src="/icons/accessMarkets/Coin.png" className="h-10 w-10" alt="" />}
            text="$0 Deposit Fees"
          />
          <FeatureBadge icon="📊" text="Spreads from 0.0 pips" />
          <FeatureBadge
            icon={
              <img
                src="/icons/accessMarkets/Frame 1000004754 (1).png"
                className="h-10 w-10"
                alt=""
              />
            }
            text="Secure Funds"
          />
        </div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
          <MarketCard
            title="Forex"
            icon="/icons/accessMarkets/Coin.png"
            text="Trade the world’s largest financial market. Access deep liquidity,
              tight spreads, and constant opportunity across major and minor
              currency pairs."
          />

          <MarketCard
            title="Stocks"
            icon="/icons/accessMarkets/Graph Ascend.png"
            text="From Wall Street to global tech leaders, follow major companies and
              react to market moves in real time."
          />

          <MarketCard
            title="Indices"
            icon="/icons/accessMarkets/Analytics Pie.png"
            text="Trade global indices with competitive spreads, precise execution,
              and deep liquidity."
            highlight
          />

          <MarketCard
            title="Commodities"
            icon="/icons/accessMarkets/Earth.png"
            text="Tap into global resource demand by trading oil, gas, metals,
              and agricultural markets."
          />
        </div>
      </div>
    </section>
  );
}

/* FEATURE BADGE */
function FeatureBadge({ icon, text }: { icon: string | ReactNode; text: string }) {
  return (
    <div className="border-brand bg-brand/20 flex items-center gap-2 rounded-full border px-6 py-3">
      <span className="text-lg">{typeof icon === "string" ? icon : icon}</span>
      <span className="text-[16px] font-medium">{text}</span>
    </div>
  );
}

/* MARKET CARD */
function MarketCard({
  src,
  icon,
  title,
  text,
  highlight,
}: {
  src?: string;
  icon?: string;
  title: string;
  text: string;
  highlight?: boolean;
}) {
  const [arrowActive, setArrowActive] = useState(false);
  const iconSrc = icon || src;

  return (
    <div
      className={`group rounded-4xl border-2 bg-white p-8 text-black shadow-xl transition-all duration-300 ease-out ${highlight ? "border-brand" : "border-transparent"} hover:z-20 hover:scale-[1.04] hover:shadow-2xl`}
      style={{
        cursor: `url('/images/accessMarkets/216.png') 16 16, pointer`,
      }}
    >
      {/* Icon */}
      <div className="to-brand flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-b from-[#FF8E8E] shadow-lg">
        {iconSrc ? (
          <img src={iconSrc} alt={`${title} icon`} className="h-10 w-10 object-contain" />
        ) : (
          <span className="text-3xl text-white">{title.slice(0, 1)}</span>
        )}
      </div>

      <h3 className="mt-6 text-[22px] font-semibold">{title}</h3>

      <div className="my-4 h-px bg-gray-300"></div>

      <p className="text-[15px] leading-[1.6] text-gray-700">{text}</p>

      {/* Arrow Button */}
      <div className="mt-6 flex justify-end">
        <button
          className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
            arrowActive ? "bg-brand/10 text-brand" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setArrowActive((prev) => !prev)}
        >
          <span className="block -rotate-45 transform text-lg leading-none">➜</span>
        </button>
      </div>
    </div>
  );
}
