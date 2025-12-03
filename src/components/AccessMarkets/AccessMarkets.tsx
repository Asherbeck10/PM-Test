export default function AccessMarkets() {
  return (
    <section className="w-full bg-gradient-to-b from-[#4A0000] via-[#7A0000] to-[#2B0000] py-28 text-white">
      <div className="mx-auto max-w-[1440px] px-8 text-center">
        {/* TITLE */}
        <h2 className="text-[52px] leading-tight font-bold">
          Access <span className="text-[#ED1D25]">17,000+</span> <br />
          markets all in one
        </h2>

        <p className="mx-auto mt-4 max-w-[680px] text-[18px] leading-[1.6] text-white/80">
          Trade forex, shares, indices, and commodities with competitive spreads, deep liquidity,
          and seamless execution.
        </p>

        {/* BADGES */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <FeatureBadge icon="💲" text="$0 Deposit Fees" />
          <FeatureBadge icon="📊" text="Spreads from 0.0 pips" />
          <FeatureBadge icon="🔒" text="Secure Funds" />
        </div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
          <MarketCard
            title="Forex"
            icon="💱"
            text="Trade the world’s largest financial market. Access deep liquidity,
              tight spreads, and constant opportunity across major and minor
              currency pairs."
          />

          <MarketCard
            title="Stocks"
            icon="📈"
            text="From Wall Street to global tech leaders, follow major companies and
              react to market moves in real time."
          />

          <MarketCard
            title="Indices"
            icon="📉"
            text="Trade global indices with competitive spreads, precise execution,
              and deep liquidity."
            highlight
          />

          <MarketCard
            title="Commodities"
            icon="🌎"
            text="Tap into global resource demand by trading oil, gas, metals,
              and agricultural markets."
          />
        </div>
      </div>
    </section>
  );
}

/* FEATURE BADGE */
function FeatureBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#ED1D25] bg-[#ED1D25]/20 px-6 py-3">
      <span className="text-lg">{icon}</span>
      <span className="text-[16px] font-medium">{text}</span>
    </div>
  );
}

/* MARKET CARD */
function MarketCard({
  icon,
  title,
  text,
  highlight,
}: {
  icon: string;
  title: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-[32px] border-2 bg-white p-8 text-black shadow-xl ${
        highlight ? "border-[#ED1D25]" : "border-transparent"
      }`}
    >
      {/* Icon */}
      <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-gradient-to-b from-[#FF8E8E] to-[#ED1D25] shadow-lg">
        <span className="text-3xl text-white">{icon}</span>
      </div>

      <h3 className="mt-6 text-[22px] font-semibold">{title}</h3>

      <div className="my-4 h-[1px] bg-gray-300"></div>

      <p className="text-[15px] leading-[1.6] text-gray-700">{text}</p>

      {/* Arrow Button */}
      <div className="mt-6 flex justify-end">
        <button className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-gray-200 transition hover:bg-gray-300">
          ➜
        </button>
      </div>
    </div>
  );
}
