import type { CSSProperties } from "react";
import { useState } from "react";

export default function Withdrawals() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      iconSrc: "/images/withdrawals/Frame 1000004754.png",
      title: "Ultra-Fast Processing",
      text: "Over 99% of withdrawals processed within 24 hours, based on verified 2025 internal performance data.",
      highlight: true,
    },
    {
      iconSrc: "/images/withdrawals/Frame 1000004754 (1).png",
      title: "Secure & Transparent",
      text: "Tier 1 banking and custody partners keep your funds protected at every stage.",
    },
    {
      iconSrc: "/images/withdrawals/Frame 1000004754 (2).png",
      title: "Effortless Access",
      text: "Enjoy quick withdrawals with no hidden fees and a smooth, seamless process.",
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-28">
      {/* TOP TEXT */}
      <div className="mb-14 text-center">
        <p className="text-brand mb-2 text-[16px] font-medium">
          Access your funds anytime, anywhere.
        </p>
        <h2 className="text-[48px] font-bold text-black">Seamless Withdrawals</h2>
      </div>

      {/* MAIN CARD */}
      <div
        className="relative mx-auto max-w-[1440px] overflow-hidden rounded-4xl p-10 md:p-14"
        style={{
          backgroundImage:
            "radial-gradient(150% 150% at 80% 50%, rgba(255,180,150,0.24) 0%, rgba(255,220,210,0.62) 40%, #fff7f6 100%)",
        }}
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* LEFT FEATURES */}
          <div className="space-y-8">
            {features.map((feature, idx) => (
              <WithdrawalFeature
                key={feature.title}
                iconSrc={feature.iconSrc}
                title={feature.title}
                text={feature.text}
                highlight={activeFeature === idx}
                onClick={() => setActiveFeature(idx)}
              />
            ))}
          </div>

          {/* RIGHT IMAGE AREA */}
          <div className="relative flex items-center justify-center">
            {/* Swirl backdrop */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 65% 55%, rgba(255,127,80,0.22), transparent 45%), conic-gradient(from 120deg at 60% 50%, rgba(255,120,40,0.38), rgba(237,29,37,0.3), rgba(255,200,120,0.32), rgba(237,29,37,0.34))",
                filter: "blur(12px)",
              }}
            ></div>

            {/* Hand + phone image */}
            <img
              src="/images/withdrawals/mobile%20hand%201.png"
              className="relative z-10 max-w-full rounded-4xl shadow-[0_18px_45px_-12px_rgba(0,0,0,0.25)] md:max-w-[520px]"
              style={{
                WebkitMaskImage:
                  "radial-gradient(120% 120% at 50% 50%, black 65%, rgba(0,0,0,0.35) 78%, transparent 100%)",
                maskImage:
                  "radial-gradient(120% 120% at 50% 50%, black 65%, rgba(0,0,0,0.35) 78%, transparent 100%)",
              }}
              alt="Hand holding phone"
            />

            {/* Mastercard Badge */}
            <div className="absolute top-8 right-8 z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
              <div className="flex items-center gap-1">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EB001B]"></span>
                <span className="-ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F79E1B] ring-4 ring-white"></span>
              </div>
              <span className="text-[14px] font-medium text-black">mastercard</span>
            </div>

            {/* User Completion Badge */}
            <div className="absolute bottom-8 left-6 z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-2xl">
              <img
                src="/images/withdrawals/image 452.png"
                className="h-10 w-10 rounded-full object-cover"
                alt="User avatar"
              />
              <div>
                <span className="block text-[12px] text-gray-500">Premier Markets</span>
                <span className="block text-[14px] leading-tight font-semibold text-black">
                  John Smith
                </span>
                <span className="text-brand text-[12px] font-semibold">
                  100% withdrawal completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* FEATURE ROW COMPONENT */
function WithdrawalFeature({
  iconSrc,
  title,
  text,
  highlight,
  onClick,
}: {
  iconSrc: string;
  title: string;
  text: string;
  highlight?: boolean;
  onClick?: () => void;
}) {
  const containerStyle: CSSProperties | undefined = highlight
    ? {
        width: 420,
        maxWidth: "100%",
      }
    : undefined;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-start gap-4 rounded-3xl text-left transition ${
        highlight ? "bg-white/80 p-4 shadow-lg ring-1 ring-white/60" : "p-2 hover:bg-white/60"
      }`}
      style={{
        ...containerStyle,
        cursor: "url('/images/accessMarkets/image%20216.png') 4 4, pointer",
      }}
    >
      <div className="to-brand flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#FF7A7A] shadow-md">
        {iconSrc ? (
          <img src={iconSrc} alt={`${title} icon`} className="h-7 w-7 object-contain" />
        ) : null}
      </div>

      <div className="max-w-[260px]">
        <h3 className="text-[20px] font-semibold text-black">{title}</h3>
        <p className="mt-1 text-[15px] leading-[1.6] text-gray-700">{text}</p>
      </div>
    </button>
  );
}
