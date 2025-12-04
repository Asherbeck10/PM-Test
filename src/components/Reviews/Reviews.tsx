import { useState } from "react";

const reviews = [
  {
    name: "Emily Carter",
    initials: "EC",
    text: "Premier's margin options and fast order execution are the reasons I switched. Funding via card is instant and payouts are predictable.",
    icon: "/images/reviews/icon-send.png",
  },
  {
    name: "Adam Keller",
    initials: "AK",
    text: "I'm new in trading and I really like that Premier let me start small. I can trade crypto and few other assets easy. Withdrawals are quick too. Help Center is simple to use and I learned a lot from there.",
    icon: "/images/reviews/icon-refresh.png",
  },
  {
    name: "Lucas Vermeer",
    initials: "LV",
    text: "Premier works well for me. KYC was fast and support people (Thx milos!) helped me right away when I had a question. I was able to deposit and start trading in same day. Withdrawal came to my bank after 2 days. All smooth.",
    icon: "/images/reviews/icon-refresh.png",
  },
  {
    name: "David Lorens",
    initials: "DL",
    text: "Been using Premier for about 3 months now. Card deposits go through right away and show in balance within a minute. I withdraw my profit each month and it's always in my bank by end of day. Very happy.",
    icon: "/images/reviews/icon-send.png",
  },
  {
    name: "Marco Lazzari",
    initials: "ML",
    text: "My experince with PM is perfect so far. Payouts come same day few hours max. Works good with both crypto and credit card. You can take money out many times per day and no hidden fees. Spreads are ok too 🙂",
    icon: "/images/reviews/icon-close.png",
  },
  {
    name: "Petar Ilic",
    initials: "PL",
    text: "I think Premier's trading cost are low compare to others. Spreads are good on most pairs, deposit is free, for withdraw they have a small fee but it's fine. Thanks guys",
    icon: "/images/reviews/icon-send.png",
  },
  {
    name: `Mark "Clips" Renard`,
    initials: "MR",
    text: "Premier is a serious broker. Web platform looks nice and runs good. Support reply quick and helpful. Sometimes small slippage in busy time but nothing crazy. Commissions are low so I stay here.",
    icon: "/images/reviews/icon-send.png",
  },
  {
    name: "TradeAce92",
    initials: "TA",
    text: "Good service 😉 Never had a single problem with withdraw. Usually takes under 24 hours. You get update when it's submitted and when it's done. Got many assets to trade and the spreads are not bad. And mTS Thank you!",
    icon: "/images/reviews/icon-refresh.png",
  },
  {
    name: "Shivani Kaur",
    initials: "SK",
    text: "Multiple withdrawals made, all success. Used both bank and international transfer. Also few friends joined from my referral and no issue for them. Been here long time, still all fine.",
    icon: "/images/reviews/icon-close.png",
  },
  {
    name: "Mateusz Durek",
    initials: "MD",
    text: "Deposit and withdraws are fast. One time my payout came before my bank even show the deduction lol. Trade speed is good and data feed fast too. Feels like pro level broker.",
    icon: "/images/reviews/icon-send.png",
  },
  {
    name: "Sara Ng",
    initials: "SN",
    text: "Onboarding was smooth and KYC approved same day. I like the UI, it's clean and the spreads are fair. Support helped me move an account, quick and friendly.",
    icon: "/images/reviews/icon-refresh.png",
  },
];

export default function Reviews() {
  const pageSize = 9;
  const totalPages = Math.ceil(reviews.length / pageSize);
  const [page, setPage] = useState(0);

  const start = page * pageSize;
  const visible = reviews.slice(start, start + pageSize);

  const handlePrev = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);
  const handleNext = () => setPage((prev) => (prev + 1) % totalPages);

  return (
    <section className="w-full bg-white px-6 py-24" style={{ background: "#FFFFFF" }}>
      <div className="mx-auto max-w-[1440px] text-center">
        {/* TITLE */}
        <h2 className="mb-4 text-[44px] leading-tight font-bold text-black sm:text-[48px]">
          What <span className="text-[#ED1D25]">Premier</span> Traders <br /> are saying about us
        </h2>

        <p className="mx-auto mb-10 max-w-[640px] text-[15px] text-gray-500">
          Join a growing community of professionals who rely on our platform to trade smarter every
          day.
        </p>

        {/* ARROWS */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50"
            aria-label="Previous reviews"
          >
            <span className="text-gray-500">‹</span>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50"
            aria-label="Next reviews"
          >
            <span className="text-gray-500">›</span>
          </button>
        </div>

        {/* GRID OF REVIEWS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((r, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm"
            >
              <p className="mb-6 text-[15px] leading-[1.6] text-gray-700">{r.text}</p>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-[14px] font-semibold text-black">
                    {r.initials}
                  </div>
                  <span className="text-[16px] font-semibold">{r.name}</span>
                </div>

                <img src={r.icon} className="w-5" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
