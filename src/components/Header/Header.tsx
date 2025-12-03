import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  return (
    <header className="w-full border-b-2 border-[#ED1D25] bg-white">
      <div className="mx-auto flex h-[130px] max-w-[1440px] flex-col justify-between">
        {/* TOP STRIP */}
        <div className="flex items-center justify-between px-6 pt-3 text-[14px] leading-5 font-semibold tracking-[-0.2px] text-[#322F2E]">
          {/* Left: Personal / Institutional */}
          <div className="flex items-center gap-6">
            <button className="relative pb-1 font-semibold">
              Personal
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-[#ED1D25]"></span>
            </button>

            <button className="text-[#322F2E]/70">Institutional</button>
          </div>

          {/* Right side (Links + EN) */}
          <div className="flex items-center gap-6">
            {/* Right links */}
            <div className="flex w-[244px] items-center justify-between text-[14px] leading-5 font-semibold tracking-[-0.2px]">
              <button className="hover:text-[#ED1D25]">WebTrader</button>
              <button className="hover:text-[#ED1D25]">Support</button>
              <button className="hover:text-[#ED1D25]">Open Demo</button>
            </div>

            {/* Lang selector */}
            <LanguageSelector />
          </div>
        </div>

        {/* MAIN NAV ROW */}
        <div className="flex items-center justify-between px-6 pb-4">
          {/* LOGO */}
          <div className="order-0 flex h-[45.13px] w-[160px] flex-none items-center gap-3">
            <div className="h-[32px] w-[32px] rounded bg-[#ED1D25]" />
            <div className="leading-tight">
              <span className="block text-[20px] font-semibold">premier</span>
              <span className="block text-[20px] font-normal">markets</span>
            </div>
          </div>
          {/* CENTER NAV MENU */}
          <nav className="hidden items-center gap-10 text-gray-800 md:flex">
            <div className="flex cursor-pointer items-center gap-1">
              Trading <span>▼</span>
            </div>
            <div className="flex cursor-pointer items-center gap-1">
              Discover <span>▼</span>
            </div>
            <div className="flex cursor-pointer items-center gap-1">
              Promotions <span>▼</span>
            </div>
            <div className="flex cursor-pointer items-center gap-1">
              Company <span>▼</span>
            </div>

            {/* RED LINK */}
            <div className="flex cursor-pointer items-center gap-2 font-medium text-[#ED1D25]">
              Partner with us <span>→</span>
            </div>
          </nav>

          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-6">
            <button className="rounded-full bg-[#ED1D25] px-6 py-2 font-medium text-white">
              Register
            </button>

            {/* user icon */}
            <div className="h-8 w-8 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </header>
  );
}
