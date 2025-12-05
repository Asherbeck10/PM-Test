export default function GetStarted() {
  return (
    <section className="flex w-full justify-center px-6 py-20">
      <div className="relative flex w-full max-w-[1440px] items-center justify-between overflow-hidden rounded-4xl bg-linear-to-br from-[#B40000] to-[#6A0000] px-16 py-20">
        {/* LEFT SIDE */}
        <div className="max-w-[540px]">
          {/* STEPS */}
          <div className="mb-10 flex items-center gap-10">
            <StepBubble number="1" label="Register" />
            <StepBubble number="2" label="Fund" />
            <StepBubble number="3" label="Start Trading" />
          </div>

          {/* TEXT */}
          <p className="mb-10 text-[20px] leading-normal text-white">
            Ready to trade smarter? Get instant access to global markets with reliable tools and
            24/5 support.
          </p>

          {/* CTA BUTTON */}
          <button className="text-brand rounded-full bg-white px-10 py-4 text-[20px] font-semibold transition hover:bg-gray-100">
            Get Started
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <img
          src="/images/getStarted/image 372.png"
          alt="Get Started Illustration"
          className="pointer-events-none w-[480px] object-contain select-none"
        />
      </div>
    </section>
  );
}

function StepBubble({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-linear-to-b from-[#FF4F4F] to-[#C40000] text-[20px] font-semibold text-white shadow-[0_0_15px_#FF000060]">
        {number}
      </div>
      <span className="text-[28px] font-semibold text-white">{label}</span>
    </div>
  );
}
