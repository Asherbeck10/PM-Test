type LogoProps = {
  variant?: "light" | "dark";
  flat?: boolean; // keeps rotation but removes extra shadow so it sits flatter in layouts
};

export default function Logo({ variant = "light", flat = false }: LogoProps) {
  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-black";
  const blockBg = isDark ? "bg-black" : "bg-white";
  const blockStyle = `flex h-9 w-[52px] items-center justify-center rounded-sm ${blockBg} -rotate-1 ${
    flat ? "" : "shadow-sm"
  }`;
  const barsWrapper = flat ? "flex -rotate-6 gap-[3px]" : "flex -rotate-10 gap-[3px]";

  return (
    <div className="order-0 flex items-center gap-2">
      <div className={blockStyle}>
        <div className={barsWrapper}>
          <div className="bg-brand h-[25px] w-2.5 rounded-xs" />
          <div className="bg-brand h-5 w-2.5 rounded-xs" />
          <div className="bg-brand h-[15px] w-2.5 rounded-xs" />
        </div>
      </div>
      <div className="order-0 flex items-center gap-2">
        {/* TEXT */}
        <div className="leading-[0.9] tracking-tight">
          <span className={`block text-[21px] font-semibold ${textColor}`}>premier</span>
          <span className={`block text-[21px] font-normal ${textColor}`}>markets</span>
        </div>
      </div>
    </div>
  );
}
