import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileMenu({ open, setOpen }) {
  const links = [
    { id: "services", key: "services" },
    { id: "portfolio", key: "portfolio" },
    { id: "about", key: "about" },
    { id: "contact", key: "contact" },
  ];
  const { t } = useTranslation();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 sm:hidden z-40
        ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <ul className="flex flex-col items-center justify-center h-full gap-8">
        {links.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} onClick={() => setOpen(false)}>
              {t(link.key)}
            </a>
          </li>
        ))}
        <li className="flex items-center">
          <LanguageSwitcher />
        </li>
      </ul>
    </div>
  );
}
