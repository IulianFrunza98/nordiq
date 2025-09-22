import { Trans, useTranslation } from "react-i18next";

export default function Promo() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-sm py-3 px-4">
      <h1 className="font-bold text-2xl mb-4 relative inline-block">
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
    </div>
  );
}
