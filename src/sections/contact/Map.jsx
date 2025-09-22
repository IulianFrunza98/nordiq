import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

export default function Map() {
  const { t } = useTranslation();
  return (
    <div className="mt-12">
      <iframe
        width="100%"
        height="350"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.383884160732!2d26.222936511992717!3d47.6769642710762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734ff4550a476d5%3A0xa65e08fef1d70c6e!2sNordiq!5e0!3m2!1sen!2sro!4v1752216952812!5m2!1sen!2sro"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <p className="mt-6">
        <a
          href="https://g.page/r/CW4M1_H-CF6mEBM/review"
          target="_blank"
          className="block font-semibold w-full text-center bg-blue-500 px-4 py-3 rounded hover:bg-blue-600 transition-colors duration-200 text-white"
        >
          <span className="flex items-center justify-center gap-2">
            <FaStar className="text-yellow-300" size={20} />
            {t("review")}
          </span>
        </a>
      </p>
    </div>
  );
}
