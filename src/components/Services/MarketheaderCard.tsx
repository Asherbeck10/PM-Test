export default function MarketHeaderCard() {
  return (
    <div className="relative flex w-full max-w-[520px] items-center gap-6 rounded-[22px] bg-linear-to-r from-[#4B0000] via-[#5F0000] to-[#7A0000] px-6 py-5 text-white shadow-[0_14px_28px_rgba(0,0,0,0.25)]">
      {/* Title */}
      <div className="flex flex-col gap-1">
        <h3 className="text-[22px] font-semibold">Gold</h3>
        <p className="text-sm text-white/70">XAU/USD</p>
      </div>

      {/* BUY + SELL buttons */}
      <div className="flex flex-1 items-center justify-end gap-3">
        {/* BUY */}
        <div className="flex h-[74px] w-[150px] cursor-pointer flex-col justify-center rounded-2xl bg-linear-to-b from-[#FF2A2A] to-[#D10000] px-5 shadow-[0_10px_20px_rgba(214,0,0,0.35)]">
          <span className="text-sm font-medium text-white/85">Buy</span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-[22px] leading-none font-bold">3773.31</span>
            <span className="text-[16px] leading-none">↘</span>
          </div>
        </div>

        {/* SELL */}
        <div className="flex h-[74px] w-[150px] cursor-pointer flex-col justify-center rounded-2xl border border-white/60 bg-white px-5 text-[#D60000] shadow-[0_10px_20px_rgba(0,0,0,0.12)]">
          <span className="text-sm font-medium text-[#A00000] opacity-80">Sell</span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-[22px] leading-none font-bold">3773.61</span>
            <span className="text-[16px] leading-none">↗</span>
          </div>
        </div>
      </div>

      {/* Expand Icon */}
      <div className="absolute top-4 right-4 cursor-pointer text-white/70 hover:text-white">↗</div>
    </div>
  );
}
