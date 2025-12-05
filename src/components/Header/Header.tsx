import { useState } from "react";
import uaeFlag from "../../assets/icons/England.png";
import Logo from "../../assets/Logo/Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [segment, setSegment] = useState<"personal" | "institutional">("personal");
  const [activeNav, setActiveNav] = useState("Trading");

  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <header className="border-brand w-full border-b-2 bg-white">
      <div className="mx-auto flex min-h-[92px] max-w-[1440px] flex-col justify-between">
        {/* TOP STRIP */}
        <div className="hidden items-center justify-between px-6 pt-3 text-[14px] leading-5 font-semibold tracking-[-0.2px] text-[#322F2E] md:flex">
          {/* Left: Personal / Institutional */}
          <div className="flex items-center gap-6">
            <button className="relative pb-1 font-semibold" onClick={() => setSegment("personal")}>
              <span className={segment === "personal" ? "text-[#1F1F1F]" : "text-[#322F2E]/70"}>
                Personal
              </span>
              <span
                className={`bg-brand absolute -bottom-0.5 left-0 h-0.5 transition-all duration-200 ${
                  segment === "personal" ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              ></span>
            </button>

            <button
              className="relative pb-1 font-semibold"
              onClick={() => setSegment("institutional")}
            >
              <span
                className={segment === "institutional" ? "text-[#1F1F1F]" : "text-[#322F2E]/70"}
              >
                Institutional
              </span>
              <span
                className={`bg-brand absolute -bottom-0.5 left-0 h-0.5 transition-all duration-200 ${
                  segment === "institutional" ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              ></span>
            </button>
          </div>

          {/* Right side (Links + EN) */}
          <div className="flex items-center gap-6">
            {/* Right links */}
            <div className="flex w-[244px] items-center justify-between text-[14px] leading-5 font-semibold tracking-[-0.2px]">
              <button className="hover:text-brand">WebTrader</button>
              <button className="hover:text-brand">Support</button>
              <button className="hover:text-brand">Open Demo</button>
            </div>

            {/* Lang selector */}
            <div className="hover:border-brand hover:text-brand flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-semibold text-[#322F2E] transition">
              <img src={uaeFlag} alt="EN" className="h-4 w-6 rounded-sm object-cover" />
              <span>EN</span>
            </div>
          </div>
        </div>

        {/* MAIN NAV ROW */}
        <div className="flex items-center justify-between px-6 py-4">
          {/* LOGO */}
          <Logo />

          {/* CENTER NAV MENU */}
          <nav className="hidden items-center gap-10 text-gray-800 md:flex">
            {["Trading", "Discover", "Promotions", "Company"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`flex cursor-pointer items-center gap-1 text-[15px] ${
                  activeNav === item ? "text-brand" : ""
                }`}
              >
                {item} <span className="text-gray-500">⌄</span>
              </button>
            ))}

            {/* RED LINK */}
            <button
              onClick={() => setActiveNav("Partner")}
              className={`flex cursor-pointer items-center gap-2 font-medium transition ${
                activeNav === "Partner" ? "text-brand" : "text-gray-800"
              }`}
            >
              Partner with us <span>→</span>
            </button>
          </nav>

          {/* RIGHT BUTTONS / HAMBURGER */}
          <div className="flex items-center gap-4">
            <button className="bg-brand hover:bg-brand/85 hidden rounded-full px-5 py-2 text-sm font-medium text-white transition md:inline-flex">
              Register
            </button>

            <div className="hover:bg-brand/15 hover:ring-brand hidden h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-black transition hover:ring-1 md:flex">
              <img src="/icons/header/User.png" alt="User" className="h-5 w-5 object-contain" />
            </div>

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
              <div className="hover:text-brand flex items-center gap-3 text-sm font-semibold text-[#322F2E] transition">
                <button
                  className="relative pb-1 font-semibold"
                  onClick={() => setSegment("personal")}
                >
                  <span className={segment === "personal" ? "text-[#1F1F1F]" : "text-[#322F2E]/70"}>
                    Personal
                  </span>
                  <span
                    className={`bg-brand absolute -bottom-0.5 left-0 h-0.5 transition-all duration-200 ${
                      segment === "personal" ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  ></span>
                </button>
                <button
                  className="relative pb-1 font-semibold"
                  onClick={() => setSegment("institutional")}
                >
                  <span
                    className={segment === "institutional" ? "text-[#1F1F1F]" : "text-[#322F2E]/70"}
                  >
                    Institutional
                  </span>
                  <span
                    className={`bg-brand absolute -bottom-0.5 left-0 h-0.5 transition-all duration-200 ${
                      segment === "institutional" ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  ></span>
                </button>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-semibold text-[#322F2E]">
                <img src={uaeFlag} alt="EN" className="h-4 w-6 rounded-sm object-cover" />
                <span>EN</span>
              </div>
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
              <button className="text-brand flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                <span>Partner with us</span> <span>→</span>
              </button>
            </div>

            <div className="mt-2 flex flex-col gap-3">
              <button className="bg-brand w-full rounded-full px-5 py-3 text-sm font-semibold text-white">
                Register
              </button>
              <div className="flex justify-between text-[14px] font-semibold text-[#322F2E]">
                <button className="hover:text-brand">WebTrader</button>
                <button className="hover:text-brand">Support</button>
                <button className="hover:text-brand">Open Demo</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
