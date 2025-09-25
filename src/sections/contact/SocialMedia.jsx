import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AiFillTikTok } from "react-icons/ai";

export default function SocialMedia({ className, align = "center" }) {
  const { t } = useTranslation("common");
  const alignmentClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div
      className={`flex justify-center flex-col ${alignmentClass} ${className}`}
    >
      <h2 className="text-[1.6rem] font-semibold mx-auto sm:mx-0 mb-6">
        {t("followUs")}
      </h2>
      <div className="flex gap-4">
        <a
          target="_blank"
          href="https://www.facebook.com/people/Nordiq/61577810374096/"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black border-white border-2 text-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1877F2]/60 hover:bg-[#1877F2]"
          aria-label="Facebook Nordiq"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/nordiqro/"
          className="w-12 h-12 flex items-center justify-center rounded-full border-white border-2 bg-black text-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#dd2a7b]/60 hover:bg-gradient-to-r hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#515bd4]"
          aria-label="Instagram Nordiq"
        >
          <Instagram />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F107923877%2F"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black border-white border-2 text-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0A66C2]/60 hover:bg-[#0A66C2]"
          aria-label="LinkedIn Nordiq"
        >
          <Linkedin />
        </a>
        <a
          target="_blank"
          href="https://www.tiktok.com/@nordiq.ro"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black border-white border-2 text-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#25F4EE]/60 hover:bg-gradient-to-r hover:from-[#25F4EE] hover:via-[#010101] hover:to-[#FE2C55]"
          aria-label="TikTok Nordiq"
        >
          <AiFillTikTok size={24} />
        </a>
      </div>
    </div>
  );
}
