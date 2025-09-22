import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <section id="about" className="bg-gray-50">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h1 className="font-bold text-3xl mb-4 relative inline-block">
          {t("aboutNordiq")}
          <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded"></span>
        </h1>
        <p className="font-medium text-gray-700 text-lg leading-relaxed mt-6">
          {t("nordiqDescription")}
        </p>
      </div>
    </section>
  );
}
