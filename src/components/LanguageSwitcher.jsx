import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const language = i18n.language;

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ro" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <div
      className="w-20 h-8 bg-gray-300 rounded-full p-1 flex items-center relative cursor-pointer"
      onClick={toggleLanguage}
    >
      <div
        className={`absolute top-1 left-1 w-8 h-6 bg-blue-500 rounded-full shadow-md transform transition-transform duration-300 ${
          language === "en" ? "translate-x-0" : "translate-x-10"
        }`}
      ></div>

      <span
        className={`absolute left-3 text-xs font-semibold transition-colors duration-300 ${
          language === "en" ? "text-white" : "text-gray-700"
        }`}
      >
        EN
      </span>
      <span
        className={`absolute right-3 text-xs font-semibold transition-colors duration-300 ${
          language === "ro" ? "text-white" : "text-gray-700"
        }`}
      >
        RO
      </span>
    </div>
  );
}
