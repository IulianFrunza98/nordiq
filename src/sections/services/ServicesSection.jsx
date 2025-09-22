import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";
import polestar from "../../assets/PolestarLogo.png";
import volvo from "../../assets/VolvoLogo.png";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t } = useTranslation();
  return (
    <section id="servicii" className="bg-gray-50">
      <h1 className="font-bold text-3xl mb-4 relative inline-block">
        {t("ourServices")}
      </h1>
      <div className="flex flex-wrap items-center justify-center flex-col sm:flex-row gap-7">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            text={t(service.key)}
            icon={service.icon}
          />
        ))}
      </div>
      <div className="flex my-4 gap-4 items-center justify-center">
        <img className="w-full max-w-[100px]" src={volvo} alt="volvo-logo" />
        <img
          className="w-full max-w-[100px]"
          src={polestar}
          alt="polestar-logo"
        />
      </div>
    </section>
  );
}
