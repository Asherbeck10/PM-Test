import { useState } from "react";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <header className="w-full border-b-2 border-[#ED1D25] bg-white">
      <div className="mx-auto flex min-h-[92px] max-w-[1440px] flex-col justify-between">
        {/* TOP STRIP */}
        <div className="hidden items-center justify-between px-6 pt-3 text-[14px] leading-5 font-semibold tracking-[-0.2px] text-[#322F2E] md:flex">
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
        <div className="flex items-center justify-between px-6 py-4">
          {/* LOGO */}
          <div className="order-0 flex h-[45.13px] w-40 flex-none items-center gap-3">
            <div className="h-8 w-8 rounded bg-[#ED1D25]" />
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

          {/* RIGHT BUTTONS / HAMBURGER */}
          <div className="flex items-center gap-4">
            <button className="hidden rounded-full bg-[#ED1D25] px-5 py-2 text-sm font-medium text-white md:inline-flex">
              Register
            </button>

            <div className="hidden h-8 w-8 rounded-full bg-gray-300 md:block" />

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 ring-1 ring-gray-300 md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-[#1F1F1F] transition ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-[#1F1F1F] transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-[#1F1F1F] transition ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mt-2 flex flex-col gap-4 border-t border-gray-200 px-6 pt-4 pb-4 md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm font-semibold text-[#322F2E]">
                <button className="relative pb-1 font-semibold">
                  Personal
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-[#ED1D25]"></span>
                </button>
                <button className="text-[#322F2E]/70">Institutional</button>
              </div>
              <LanguageSelector />
            </div>

            <div className="grid gap-3 text-[15px] font-medium text-gray-800">
              <button className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                <span>Trading</span> <span>▼</span>
              </button>
              <button className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                <span>Discover</span> <span>▼</span>
              </button>
              <button className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                <span>Promotions</span> <span>▼</span>
              </button>
              <button className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                <span>Company</span> <span>▼</span>
              </button>
              <button className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 text-[#ED1D25]">
                <span>Partner with us</span> <span>→</span>
              </button>
            </div>

            <div className="mt-2 flex flex-col gap-3">
              <button className="w-full rounded-full bg-[#ED1D25] px-5 py-3 text-sm font-semibold text-white">
                Register
              </button>
              <div className="flex justify-between text-[14px] font-semibold text-[#322F2E]">
                <button className="hover:text-[#ED1D25]">WebTrader</button>
                <button className="hover:text-[#ED1D25]">Support</button>
                <button className="hover:text-[#ED1D25]">Open Demo</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
