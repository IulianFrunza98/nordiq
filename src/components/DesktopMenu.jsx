import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function DesktopMenu() {
  const { t } = useTranslation();
  const links = [
    { id: "services", key: "services" },
    { id: "portfolio", key: "portfolio" },
    { id: "about", key: "about" },
    { id: "contact", key: "contact" },
  ];

  return (
    <ul className="sm:flex hidden items-center gap-5 font-bold">
      {links.map((link, idx) => (
        <li
          key={idx}
          className="text-white hover:bg-white hover:text-black px-2 rounded transition duration-200"
        >
          <a href={`#${link.id}`}>{t(link.key)}</a>
        </li>
      ))}
      <li className="flex items-center">
        <LanguageSwitcher />
      </li>
    </ul>
  );
}
