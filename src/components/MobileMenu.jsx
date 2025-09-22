import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import MobileLanguageSwitcher from "./MobileLanguageSwitcher";
import links from "../data/navLinks";

export default function MobileMenu({ open, setOpen }) {
  const { t } = useTranslation();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-black via-gray-900 to-black text-white transform transition-transform duration-500 ease-in-out sm:hidden z-50 shadow-xl ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 p-2 text-white hover:text-blue-400 focus:outline-none"
      >
        <X size={28} />
      </button>

      <ul className="flex flex-col items-center justify-start h-full gap-8 mt-20 px-6 overflow-y-auto">
        {links.map((link) => (
          <li key={link.id} className="w-full">
            <a
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="block w-full py-3 text-center text-lg font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              {t(link.key)}
            </a>
          </li>
        ))}

        <li className="w-full mt-8">
          <MobileLanguageSwitcher />
        </li>
      </ul>
    </div>
  );
}
