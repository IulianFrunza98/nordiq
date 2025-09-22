import { useTranslation } from "react-i18next";
import { useState } from "react";
import flagIcons from "../data/flagIcons";
import languages from "../data/languages";

export default function MobileLanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-center py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center gap-2">
          <img
            src={flagIcons[currentLang.code]}
            alt={currentLang.label}
            className="w-5 h-5 object-cover rounded-sm"
          />
          <span className="font-semibold">{currentLang.label}</span>
        </div>
      </button>

      {isOpen && (
        <ul className="absolute mt-1 w-full bg-gray-900 text-white rounded-lg shadow-lg z-50 overflow-hidden">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-blue-600 transition-colors"
            >
              <img
                src={flagIcons[lang.code]}
                alt={lang.label}
                className="w-5 h-5 object-cover rounded-sm"
              />
              <span
                className={
                  lang.code === currentLang.code
                    ? "text-blue-300 font-semibold"
                    : ""
                }
              >
                {lang.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
