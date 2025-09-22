import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import projectsDetails from "../data/projectsDetails";
import ProjectGallery from "../components/ProjectGallery";
import ActivationsList from "../components/ActivationsList";

export default function ProjectPage() {
  const { id } = useParams();
  const { t } = useTranslation();

  const project = projectsDetails.find((p) => p.id === id);

  if (!project) return <p>{t("projectNotFound")}</p>; // tradus

  return (
    <div className="w-full relative flex flex-col items-center gap-8 justify-center mx-auto py-12 px-6">
      <Link
        to="/"
        className="absolute top-6 left-6 hidden sm:flex items-center px-5 py-1 bg-black text-white rounded shadow hover:opacity-80 transition-opacity duration-200"
      >
        <ArrowLeft size={24} />
      </Link>

      <h1 className="font-bold text-3xl mb-[10px] sm:mb-[30px] text-blue-500 text-center">
        {t(project.titleKey)}
      </h1>

      <p className="text-gray-700 text-lg text-center max-w-2xl mb-8">
        {t(project.descriptionKey)}
      </p>

      <div className="flex flex-col md:flex-row gap-8 w-full items-stretch">
        <div className="flex-1 bg-white rounded-lg shadow-md p-4">
          <ActivationsList project={project} />
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-md p-4">
          <ProjectGallery project={project} />
        </div>
      </div>
    </div>
  );
}
