export default function Empower() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0E0E0E] py-28 text-white">
      <div className="mx-auto max-w-[1440px] px-8 text-center">
        {/* HEADER */}
        <h2 className="text-[48px] font-bold">Empower Your Trading</h2>
        <p className="mx-auto mt-3 max-w-[520px] text-[18px] leading-[1.6] text-gray-400">
          Unlock advanced tools, insights, and support to maximise your trading potential.
        </p>
      </div>

      {/* GRID CENTER BACKGROUND */}
      <div className="relative mt-24 flex items-center justify-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {/* Central Glow */}
          <div className="h-[450px] w-[450px] rounded-full bg-gradient-to-r from-[#ED1D25]/20 to-transparent opacity-30 blur-3xl"></div>

          {/* Dark grid overlay */}
          <div className="absolute inset-0 bg-[url('/grid-dark.png')] opacity-20"></div>
        </div>
      </div>

      {/* MAIN 4-QUADRANT LAYOUT */}
      <div className="relative mx-auto mt-[-300px] grid max-w-[1000px] grid-cols-1 gap-x-20 gap-y-20 md:grid-cols-2">
        {/* TOP-LEFT */}
        <FeatureBlock
          icon="/icons/charting.png"
          title="Charting tools and indicators"
          text="Sharpen your analysis with an array of intuitive charts, drawing tools and 100+ indicators."
        />

        {/* TOP-RIGHT */}
        <FeatureBlock
          icon="/icons/leverage.png"
          title="Get flexible leverage"
          text="Trade larger positions and maximise your return potential with lower margin requirements."
        />

        {/* BOTTOM-LEFT */}
        <FeatureBlock
          icon="/icons/support.png"
          title="Round-the-clock support"
          text="Our dedicated experts are available 24/5 to guide and assist you at every step."
        />

        {/* BOTTOM-RIGHT */}
        <FeatureBlock
          icon="/icons/alerts.png"
          title="Customisable price alerts"
          text="Set real-time alerts to track asset movements and stay ahead with your strategy."
        />
      </div>

      {/* CENTER ICON (over top of grid) */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
          <img src="/logo-mini.png" alt="logo" className="w-[40px]" />
        </div>
      </div>

      {/* BOTTOM SPACING */}
      <div className="h-[150px]"></div>
    </section>
  );
}

/* FEATURE BLOCK COMPONENT */
function FeatureBlock({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="px-6 text-center">
      <img src={icon} alt="" className="mx-auto mb-4 h-[60px]" />
      <h3 className="text-[20px] font-semibold">{title}</h3>
      <p className="mx-auto mt-2 max-w-[320px] text-[15px] leading-[1.6] text-gray-400">{text}</p>
    </div>
  );
}
