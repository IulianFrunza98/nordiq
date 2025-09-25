// ProjectCard.jsx
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, image, title, description }) {
  const { t } = useTranslation("common");

  return (
    <div className="w-72 sm:w-52 md:w-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 cursor-pointer flex flex-col">
      <div className="relative w-full h-52 sm:h-60 md:h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <h2 className="absolute bottom-3 left-3 text-white font-bold text-lg sm:text-xl md:text-2xl drop-shadow-lg">
          {title}
        </h2>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <p className="text-gray-700 text-sm sm:text-base md:text-base mb-4 line-clamp-4">
          {description}
        </p>
        <Link
          to={`/proiecte/${id}`}
          className="text-blue-600 font-medium flex items-center justify-center gap-2 mt-auto hover:gap-3 transition-all"
        >
          {t("viewDetails")}
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
