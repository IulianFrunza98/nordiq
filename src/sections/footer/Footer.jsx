import Logo from "../../components/Logo";
import SocialMedia from "../contact/SocialMedia";
import { useTranslation } from "react-i18next";
import { MapPinned, Phone, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="relative overflow-hidden text-white bg-black">
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
          <Logo height="h-20" />
          <p className="text-white text-[1.4rem] font-bold max-w-[250px]">
            {t("professionalDiagnostics")}
          </p>
          <div className="mt-3">
            <SocialMedia align="left" className="mt-2" />
          </div>
        </div>

        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h4 className="font-semibold text-[1.6rem] text-white mb-2 tracking-wide">
            {t("quickLinks")}
          </h4>
          <div className="flex flex-col gap-4 sm:gap-2">
            {["home", "services", "portfolio", "about", "contact"].map(
              (key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="group relative inline-flex items-center pl-5 w-fit mx-auto sm:mx-0 text-left text-white font-medium transition-all duration-300 hover:text-blue-400"
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-4 bg-blue-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                    {t(key)}
                  </span>
                </a>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-2 text-center sm:text-left">
          <h4 className="font-semibold text-white mb-2 text-[1.6rem] tracking-wide">
            {t("contact")}
          </h4>
          <a
            href="https://www.google.com/maps/place/Nordiq/@47.6768923,26.2230015,586m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4734ff4550a476d5:0xa65e08fef1d70c6e!8m2!3d47.6768923!4d26.2255764!16s%2Fg%2F11yfzvyzns?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vezi locația pe hartă"
            className="flex items-center gap-2 justify-center sm:justify-start text-gray-300 hover:text-blue-400 transition font-medium"
          >
            <MapPinned /> <span>Strada Aurel Vlaicu 46, Suceava</span>
          </a>
          <a
            href="https://wa.me/40775314325"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact pe WhatsApp"
            className="flex items-center gap-2 justify-center sm:justify-start text-gray-300 hover:text-blue-400 transition font-medium"
          >
            <Phone /> <span>+40 775 314 325</span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=hello@nordiq.ro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Trimite un email"
            className="flex items-center gap-2 justify-center sm:justify-start text-gray-300 hover:text-blue-400 transition font-medium"
          >
            <Mail /> <span>info@nordiq.ro</span>
          </a>
        </div>
      </div>

      <div className="relative z-10 text-center text-white text-base m-6 lg:m-5 border-t border-gray-700 pt-4">
        <p>© {t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
