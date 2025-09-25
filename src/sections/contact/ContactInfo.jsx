import { Mail, MapPinned, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 w-full px-4 sm:px-0">
      {/* Card Locație */}
      <div className="flex items-center w-full max-w-md sm:max-w-sm h-20 sm:h-auto rounded-xl bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg px-4 sm:px-6 gap-3 sm:gap-4 transition-transform transform hover:-translate-y-1">
        <a
          href="https://www.google.com/maps/place/Nordiq/@47.6768923,26.2230015,586m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4734ff4550a476d5:0xa65e08fef1d70c6e!8m2!3d47.6768923!4d26.2255764!16s%2Fg%2F11yfzvyzns?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vezi locația pe hartă"
          className="p-2 sm:p-3 rounded-full bg-white shadow-sm"
        >
          <MapPinned className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
        </a>
        <div className="flex flex-col items-start text-left">
          <p className="font-semibold text-gray-700 text-base sm:text-lg">
            {t("location")}
          </p>
          <p className="text-gray-800 text-sm sm:text-base font-medium">
            Strada Aurel Vlaicu 46, Suceava 720092
          </p>
        </div>
      </div>

      {/* Card WhatsApp */}
      <div className="flex items-center w-full max-w-md sm:max-w-sm h-20 sm:h-24 rounded-xl bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg px-4 sm:px-6 gap-3 sm:gap-4 transition-transform transform hover:-translate-y-1">
        <a
          href="https://wa.me/40775314325"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact pe WhatsApp"
          className="p-2 sm:p-3 rounded-full bg-white shadow-sm"
        >
          <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
        </a>
        <div className="flex flex-col items-start text-left">
          <p className="font-semibold text-gray-700 text-base sm:text-lg">
            {t("phone")}
          </p>
          <p className="text-gray-800 text-sm sm:text-base font-medium">
            +40 775 314 325
          </p>
        </div>
      </div>

      {/* Card Email */}
      <div className="flex items-center w-full max-w-md sm:max-w-sm h-20 sm:h-24 rounded-xl bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg px-4 sm:px-6 gap-3 sm:gap-4 transition-transform transform hover:-translate-y-1">
        <a
          href="https://mail.google.com/mail/?view=cm&to=hello@nordiq.ro"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trimite un email"
          className="p-2 sm:p-3 rounded-full bg-white shadow-sm flex items-center justify-center"
        >
          <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
        </a>
        <div className="flex flex-col items-start text-left">
          <p className="font-semibold text-gray-700 text-base sm:text-lg">
            {t("email")}
          </p>
          <p className="text-gray-800 text-sm sm:text-base font-medium">
            hello@nordiq.ro
          </p>
        </div>
      </div>
    </div>
  );
}
