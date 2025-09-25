import { Check } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { useTranslation } from "react-i18next";

const services = [
  { id: 1, key: "service1", icon: Check },
  { id: 2, key: "service2", icon: Check },
  { id: 3, key: "service3", icon: Check },
  { id: 4, key: "service4", icon: Check },
  { id: 5, key: "service5", icon: Check },
  { id: 6, key: "service6", icon: Check },
];

export default function ServicesSection() {
  const { t } = useTranslation("common");

  return (
    <section id="services" className="bg-gray-100 py-12 px-6">
      <h1 className="font-bold text-3xl mb-8 relative inline-block">
        {t("ourServices")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            text={t(service.key)}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
