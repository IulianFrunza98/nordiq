import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import MobileLanguageSwitcher from "./MobileLanguageSwitcher";

const links = [
  { id: "services", key: "services" },
  { id: "portfolio", key: "portfolio" },
  { id: "about", key: "about" },
  { id: "contact", key: "contact" },
];

export default function MobileMenu({ open, setOpen }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className={`fixed top-[65px] left-0 right-0 h-[calc(100vh-65px)] bg-black/50 z-40 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`fixed top-[65px] right-0 h-[calc(100vh-65px)] w-64 bg-gradient-to-b from-black via-gray-900 to-black text-white transform transition-transform duration-500 ease-in-out sm:hidden z-50 shadow-xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-start h-full gap-4 mt-5 px-6 overflow-y-auto">
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

          <li className="w-full">
            <MobileLanguageSwitcher />
          </li>
        </ul>
      </div>
    </>
  );
}
