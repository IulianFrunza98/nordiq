import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const links = [
  { id: "services", key: "services" },
  { id: "portfolio", key: "portfolio" },
  { id: "about", key: "about" },
  { id: "contact", key: "contact" },
];

export default function DesktopMenu() {
  const { t } = useTranslation();

  return (
    <ul className="sm:flex hidden items-center gap-5 font-bold">
      {links.map((link, idx) => (
        <li key={idx} className="relative px-2">
          <a
            href={`#${link.id}`}
            className="
      text-white relative transition-all duration-300 
      hover:scale-105 hover:text-white
      after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:shadow-md hover:after:shadow-white/50
    "
          >
            {t(link.key)}
          </a>
        </li>
      ))}
      <li className="flex items-center">
        <LanguageSwitcher />
      </li>
    </ul>
  );
}
