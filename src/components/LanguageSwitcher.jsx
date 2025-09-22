import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import flagIcons from "../data/flagIcons";
import languages from "../data/languages";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem("language") || i18n.language || "ro"
  );

  useEffect(() => {
    i18n.changeLanguage(currentLang);
    localStorage.setItem("language", currentLang);
  }, [currentLang, i18n]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (code) => {
    setCurrentLang(code);
    setIsOpen(false);
  };

  const selected = languages.find((l) => l.code === currentLang);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-lg shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <img
          src={flagIcons[selected.code]}
          alt={selected.label}
          className="w-5 h-5 object-cover rounded-sm"
        />
        <span className="font-semibold">{selected.label}</span>
      </button>

      {isOpen && (
        <ul className="absolute mt-2 w-40 right-[-10px] bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-blue-100 transition-colors duration-150"
            >
              <img
                src={flagIcons[lang.code]}
                alt={lang.label}
                className="w-5 h-5 object-cover rounded-sm"
              />
              <span
                className={`font-medium ${
                  lang.code === currentLang ? "text-blue-600" : "text-gray-800"
                }`}
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
