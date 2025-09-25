import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section
      id="navbar"
      className="relative shadow text-white flex flex-col items-center justify-center text-center py-20 px-6"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(270deg, #374151, #000000, #090b56)",
          backgroundSize: "600% 600%",
          animation: "gradientMove 8s ease infinite",
        }}
      ></div>

      <h1 className="font-bold text-4xl">{t("activePerformance")}</h1>
      <h3>{t("professionalDiagnostics")}</h3>
      <a
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
        href="#contact"
      >
        {t("contactUs")}
      </a>
    </section>
  );
}
