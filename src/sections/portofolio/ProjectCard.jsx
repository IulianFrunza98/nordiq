import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, image, title, description }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 w-64 cursor-pointer overflow-hidden">
      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="p-3 flex flex-col gap-3 text-center">
        <h2 className="text-blue-500 font-semibold">{title}</h2>
        <p className="font-medium text-gray-700 text-sm leading-snug">
          {description}
        </p>
        <Link
          to={`/proiecte/${id}`}
          className="text-blue-600 font-medium flex items-center justify-center gap-2"
        >
          {t("viewDetails")}{" "}
          <ArrowRight
            size={16}
            className="hover:translate-x-1 transition duration-200"
          />
        </Link>
      </div>
    </div>
  );
}
