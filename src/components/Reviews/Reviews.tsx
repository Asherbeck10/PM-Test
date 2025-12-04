import { reviews } from "../../data/reviews";
export default function Reviews() {
  return (
    <section className="w-full bg-[#F8F8F8] px-6 py-28">
      <div className="mx-auto max-w-[1440px] text-center">
        {/* TITLE */}
        <h2 className="mb-4 text-[48px] font-bold text-black">
          What <span className="text-[#ED1D25]">Premier</span> Traders <br /> are saying about us
        </h2>

        <p className="mx-auto mb-12 max-w-[650px] text-[16px] text-gray-600">
          Join a growing community of professionals who rely on our platform to trade smarter every
          day.
        </p>

        {/* ARROWS */}
        <div className="mb-20 flex items-center justify-center gap-6">
          <button className="flex h-[42px] w-[42px] items-center justify-center rounded-full border bg-white shadow"></button>
          <button className="flex h-[42px] w-[42px] items-center justify-center rounded-full border bg-white shadow"></button>
        </div>

        {/* GRID OF REVIEWS */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="rounded-[20px] border border-gray-200 bg-white p-8 text-left shadow-sm"
            >
              <p className="mb-6 text-[15px] leading-[1.6] text-gray-700">{r.text}</p>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-black/10 font-bold text-black">
                    {r.initials}
                  </div>
                  <span className="text-[16px] font-semibold">{r.name}</span>
                </div>

                <img src={r.icon} className="w-[22px]" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
