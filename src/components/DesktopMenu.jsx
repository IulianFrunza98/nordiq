import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import links from "../data/navLinks";

export default function DesktopMenu() {
  const { t } = useTranslation();

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
