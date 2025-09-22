import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-black font-bold text-white text-center mt-[2rem] px-[1.2rem] py-[1rem]">
      <p>{t("footer.copyright")}</p>
    </footer>
  );
}
