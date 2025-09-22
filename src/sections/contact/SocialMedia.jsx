import { Facebook, Instagram, Linkedin } from "lucide-react";
import { AiFillTikTok } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export default function SocialMedia() {
  const { t } = useTranslation();
  return (
    <div className="mt-8 text-center">
      <h2 className="text-xl font-semibold mb-6">{t("followUs")}</h2>
      <div className="flex justify-center items-center gap-8">
        <a
          target="_blank"
          href="https://www.facebook.com/people/Nordiq/61577810374096/"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-[#1877F2]  transition-colors duration-200"
        >
          <Facebook />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/nordiqro/"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#515bd4]"
        >
          <Instagram />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F107923877%2F"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white transition-colors duration-200 hover:bg-[#0A66C2]"
        >
          <Linkedin />
        </a>
        <a
          target="_blank"
          href="https://www.tiktok.com/@nordiq.ro"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#25F4EE] hover:via-[#010101] hover:to-[#FE2C55]"
        >
          <AiFillTikTok size={24} />
        </a>
      </div>
    </div>
  );
}
