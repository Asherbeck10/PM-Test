import { useState, useRef, useEffect } from "react";
import uaeFlag from "../../assets/icons/England.png";

type Language = {
  code: string;
  label: string;
  flag: string;
};

const LANGUAGES: Language[] = [
  { code: "EN", label: "English", flag: uaeFlag }, // placeholder
  { code: "FR", label: "Français", flag: uaeFlag },
  { code: "RU", label: "Русский", flag: uaeFlag },
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(LANGUAGES[0]);

  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selectLanguage = (lang: Language) => {
    setSelected(lang);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative w-[45px]">
      {/* Selector */}
      <div
        onClick={() => setOpen(!open)}
        className="flex h-[30.43px] w-[45px] cursor-pointer items-center justify-center gap-1"
      >
        <img
          src={selected.flag}
          alt={selected.code}
          className="h-3.5 w-5 rounded-sm object-cover"
        />
        <span className="text-[14px] leading-5 font-semibold tracking-[-0.2px]">
          {selected.code}
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-[140px] rounded-md border border-gray-200 bg-white shadow-lg">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang)}
              className="flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-gray-100"
            >
              <img src={lang.flag} alt={lang.code} className="h-3.5 w-5 rounded-sm object-cover" />
              <span className="text-[14px] font-medium">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
