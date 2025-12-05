export default function Updates() {
  return (
    <section className="w-full bg-white px-6 py-24">
      {/* HEADER */}
      <div className="mx-auto mb-12 flex max-w-[1440px] items-center justify-between">
        <div>
          <p className="text-brand text-[16px] font-medium">Daily Updates</p>
          <h2 className="text-[48px] font-bold text-black">
            Everything you need to trade the markets
          </h2>
        </div>

        <span className="flex cursor-default items-center gap-2 text-[16px] font-semibold text-[#ED4A4A]">
          View all <span className="text-xl">›</span>
        </span>
      </div>

      {/* GRID */}
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 md:auto-rows-[1fr] md:grid-cols-3">
        {/* LEFT NEWS CARD */}
        <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
          <img src="/images/updates/media.png" className="h-60 w-full object-cover" alt="" />

          <div className="p-6">
            <p className="mb-2 text-[14px] text-gray-400">03 October 2025</p>

            <h3 className="mb-2 text-[20px] leading-[1.3] font-semibold text-black">
              Gulf markets end mixed on Ukraine ceasefire hopes, tariff fears
            </h3>

            <p className="mb-4 text-[15px] leading-[1.6] text-gray-600">
              Stock markets in the Gulf ended mixed on Wednesday, buoyed by Ukraine’s readiness to
              support a proposal for…
            </p>

            <button className="text-brand text-[14px] font-semibold">Read more</button>
          </div>
        </div>

        {/* VIDEO MIDDLE CARD */}
        <div className="md:col-span-2 md:h-full">
          <div className="relative h-full overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/updates/unsplash_Ju9DbmVFcAo.png"
              className="h-full min-h-[340px] w-full object-cover brightness-75"
              alt=""
            />

            {/* Play Button */}
            <div
              className="absolute inset-0 flex cursor-default items-center justify-center"
              aria-label="Play video"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F25A5A] text-4xl text-white shadow-xl">
                ▶
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED ARTICLE CARD */}
      <div className="mx-auto mt-12 max-w-[1440px]">
        <div className="relative overflow-hidden rounded-3xl bg-black shadow-xl">
          {/* Background image */}
          <img
            src="/images/updates/cover.png"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            alt=""
          />

          <div className="relative max-w-[700px] p-10 text-white">
            <h3 className="mb-3 text-[24px] font-semibold">
              Premier Market – Market Cap Weighted PR (BKP)
            </h3>

            <p className="mb-6 text-[16px] leading-[1.6] text-gray-300">
              Stay ahead of the latest tech trends with our algorithmically selected portfolio of
              the 15 top tech stocks each month.
            </p>

            {/* Tags */}
            <div className="flex items-center gap-4 text-[14px] font-medium text-gray-400">
              <span>Google</span>
              <span>Trending</span>
              <span>investing.com</span>
            </div>
          </div>

          {/* Right overlay phone image */}
          <img
            src="/updates/bkp-phone.png"
            className="absolute right-0 bottom-0 h-[260px] object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
