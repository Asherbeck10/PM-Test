type LogoProps = {
  variant?: "light" | "dark";
};

export default function Logo({ variant = "light" }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <div className="order-0 flex items-center gap-2">
      <div
        className={`flex h-9 w-[52px] rotate-2 items-center justify-center rounded-sm shadow-sm ${
          isDark ? "bg-black" : "bg-white"
        }`}
      >
        <div className="flex -rotate-10 gap-[3px]">
          <div className="bg-brand h-[25px] w-2.5 rounded-xs"></div>
          <div className="bg-brand h-5 w-2.5 rounded-xs"></div>
          <div className="bg-brand h-[15px] w-2.5 rounded-xs"></div>
        </div>
      </div>
      <div className="order-0 flex items-center gap-2">
        {/* TEXT */}
        <div className="leading-[0.9] tracking-tight">
          <span
            className={`block text-[21px] font-semibold ${isDark ? "text-white" : "text-black"}`}
          >
            premier
          </span>
          <span className={`block text-[21px] font-normal ${isDark ? "text-white" : "text-black"}`}>
            markets
          </span>
        </div>
      </div>
    </div>
  );
}
