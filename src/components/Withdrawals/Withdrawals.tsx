export default function Withdrawals() {
  return (
    <section className="w-full bg-white px-4 py-28">
      {/* TOP TEXT */}
      <div className="mb-20 text-center">
        <p className="mb-2 text-[16px] font-medium text-[#ED1D25]">
          Access your funds anytime, anywhere.
        </p>
        <h2 className="text-[48px] font-bold text-black">Seamless Withdrawals</h2>
      </div>

      {/* MAIN CARD */}
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-gradient-to-br from-[#FFF6F6] to-[#FEE6E6] p-12 md:p-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* LEFT FEATURES */}
          <div className="space-y-10">
            <WithdrawalFeature
              icon="/icons/withdraw-fast.png"
              title="Ultra-Fast Processing"
              text="Over 99% of withdrawals processed within 24 hours, based on verified 2025 internal performance data."
            />

            <WithdrawalFeature
              icon="/icons/secure.png"
              title="Secure & Transparent"
              text="Tier 1 banking and custody partners keep your funds protected at every stage."
            />

            <WithdrawalFeature
              icon="/icons/access.png"
              title="Effortless Access"
              text="Enjoy quick withdrawals with no hidden fees and a smooth, seamless process."
            />
          </div>

          {/* RIGHT IMAGE AREA */}
          <div className="relative flex items-center justify-center">
            {/* FLARE PATH BACKGROUND */}
            <img
              src="/withdraw/flare-path.png"
              className="absolute right-0 -bottom-10 z-[1] w-[120%] max-w-none"
              alt=""
            />

            {/* HAND + PHONE */}
            <img src="/withdraw/hand-phone.png" className="relative z-[2] max-w-[350px]" alt="" />

            {/* Mastercard Badge */}
            <div className="absolute top-10 right-16 z-[3] flex items-center gap-2 rounded-xl bg-white px-4 py-2 shadow-lg">
              <img src="/withdraw/mastercard.png" className="w-[32px]" alt="" />
              <span className="text-[14px] font-medium text-black">mastercard</span>
            </div>

            {/* User Completion Badge */}
            <div className="absolute bottom-6 left-4 z-[3] flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
              <img src="/withdraw/john.png" className="h-[40px] w-[40px] rounded-full" alt="" />
              <div>
                <span className="block text-[14px] font-medium text-black">John Smith</span>
                <span className="text-[12px] font-semibold text-[#ED1D25]">
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
function WithdrawalFeature({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-[56px] w-[56px] items-center justify-center rounded-xl bg-gradient-to-br from-[#FF7777] to-[#ED1D25] shadow-md">
        <img src={icon} alt="" className="w-[28px]" />
      </div>

      <div>
        <h3 className="text-[20px] font-semibold text-black">{title}</h3>
        <p className="mt-1 text-[15px] leading-[1.6] text-gray-700">{text}</p>
      </div>
    </div>
  );
}
