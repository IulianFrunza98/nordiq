import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

const languages = [
  { code: "ro", label: "Română" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "sv", label: "Svenska" },
  { code: "uk", label: "Україна" },
  { code: "pl", label: "Polski" },
];

const flagIcons = {
  en: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  ro: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
  de: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
  sv: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
  uk: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
  pl: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Buton principal */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-lg shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <img
          src={flagIcons[currentLang.code]}
          alt={currentLang.label}
          className="w-5 h-5 object-cover rounded-sm"
        />
        <span className="font-semibold">{currentLang.label}</span>
      </button>

      <ul
        className={`absolute mt-2 w-44 right-0 bg-white border rounded-lg shadow-lg z-50 overflow-hidden transform origin-top transition-all duration-300 ease-out
          ${
            isOpen
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 pointer-events-none"
          }
        `}
      >
        {languages.map((lang) => (
          <li
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            className="flex items-center justify-between gap-2 px-3 py-2 cursor-pointer hover:bg-blue-100 transition-colors duration-150"
          >
            <div className="flex items-center gap-2">
              <img
                src={flagIcons[lang.code]}
                alt={lang.label}
                className="w-5 h-5 object-cover rounded-sm"
              />
              <span
                className={`font-medium ${
                  lang.code === currentLang.code
                    ? "text-blue-600"
                    : "text-gray-800"
                }`}
              >
                {lang.label}
              </span>
            </div>

            {lang.code === currentLang.code && (
              <Check className="w-4 h-4 text-blue-600" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
