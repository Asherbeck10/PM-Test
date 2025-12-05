export default function Logo() {
  return (
    <div className="order-0 flex items-center gap-3">
      <div className="flex h-9 w-[52px] rotate-2 items-center justify-center rounded-sm bg-white shadow-sm">
        <div className="flex -rotate-10 gap-[3px]">
          <div className="bg-brand h-[25px] w-2.5 rounded-xs"></div>
          <div className="bg-brand h-5 w-2.5 rounded-xs"></div>
          <div className="bg-brand h-[15px] w-2.5 rounded-xs"></div>
        </div>
      </div>
    </div>
  );
}
