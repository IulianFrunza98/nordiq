import { Trans, useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

export default function Promo() {
  const { t } = useTranslation("common");

  return (
    <div className="bg-white mb-4 flex items-center justify-center flex-col rounded-lg shadow-sm py-3 px-4">
      <h1 className="font-bold text-2xl relative inline-block">
        {t("promo.title")}
      </h1>

      <p className="font-medium text-gray-700 text-lg leading-relaxed mt-6">
        <Trans
          i18nKey="promo.description"
          components={{
            bold: <span className="font-bold"></span>,
          }}
        />
      </p>

      <a
        className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold m-3
             shadow-md hover:shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-0.5"
        href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x4734ff4550a476d5:0xa65e08fef1d70c6e!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2"
        target="_blank"
      >
        <FaStar className="text-amber-300" /> {t("review")}
      </a>
    </div>
  );
}
