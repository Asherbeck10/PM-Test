import type { CSSProperties, ReactNode } from "react";

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

      {/* BACKGROUND + GRID WRAPPER */}
      <div className="relative mx-auto mt-16 flex max-w-[1000px] flex-col items-center pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          {/* Central Glow */}
          <div className="from-brand/20 h-[450px] w-[450px] rounded-full bg-linear-to-r to-transparent opacity-30 blur-3xl"></div>

          {/* Dark grid overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        {/* MAIN 4-QUADRANT LAYOUT */}
        <div className="grid w-full grid-cols-1 gap-x-20 gap-y-20 md:grid-cols-2">
          {/* TOP-LEFT */}
          <FeatureBlock
            icon={<img src="/images/empower/image 214.png" className="h-10 w-10" alt="" />}
            title="Charting tools and indicators"
            text="Sharpen your analysis with an array of intuitive charts, drawing tools and 100+ indicators."
            style={{
              backgroundImage:
                "radial-gradient(100% 100% at 100% 100%, rgba(226, 0, 9, 0.41) 0%, rgba(3, 0, 20, 0) 100%)",
            }}
          />

          {/* TOP-RIGHT */}
          <FeatureBlock
            icon={<img src="/images/empower/image 207.png" className="h-10 w-10" alt="" />}
            title="Get flexible leverage"
            text="Trade larger positions and maximise your return potential with lower margin requirements."
          />

          {/* BOTTOM-LEFT */}
          <FeatureBlock
            icon={<img src="/images/empower/image 205.png" className="h-10 w-10" alt="" />}
            title="Round-the-clock support"
            text="Our dedicated experts are available 24/5 to guide and assist you at every step."
          />

          {/* BOTTOM-RIGHT */}
          <FeatureBlock
            icon={<img src="/images/empower/image 214.png" className="h-10 w-10" alt="" />}
            title="Customisable price alerts"
            text="Set real-time alerts to track asset movements and stay ahead with your strategy."
          />
        </div>

        {/* CENTER ICON (over top of grid) */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
            <img
              src="/logo/Frame 1000002390.png"
              alt="Empower central badge"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* FEATURE BLOCK COMPONENT */
function FeatureBlock({
  icon,
  title,
  text,
  style,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  style?: CSSProperties;
}) {
  return (
    <div className="rounded-2xl px-6 py-4 text-center" style={style}>
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
        {icon}
      </div>
      <h3 className="text-[20px] font-semibold">{title}</h3>
      <p className="mx-auto mt-2 max-w-[320px] text-[15px] leading-[1.6] text-gray-400">{text}</p>
    </div>
  );
}
