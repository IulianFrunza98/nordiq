import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="shadow text-white bg-[#222]">
      <h1 className="font-bold text-4xl">{t("activePerformance")}</h1>
      <h3>{t("professionalDiagnostics")}</h3>
      <a
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
        href="#contact"
        alt="contact"
      >
        {t("contactUs")}
      </a>
    </section>
  );
}
