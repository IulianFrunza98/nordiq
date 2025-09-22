import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ActivationsList({ project }) {
  const { t } = useTranslation();

  // verificăm activationsKeys în loc de activations
  if (!project.activationsKeys || project.activationsKeys.length === 0)
    return null;

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="font-bold text-2xl mb-6 text-center">
        {t("activations")}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 w-full gap-3">
        {project.activationsKeys.map((key, idx) => (
          <li
            key={idx}
            className="flex items-center gap-4 justify-start py-3 px-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Check size={28} className="text-blue-500 flex-shrink-0" />
            <p className="font-semibold text-gray-800 text-base md:text-lg leading-snug">
              {t(key)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
