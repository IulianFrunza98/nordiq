import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import projectsDetails from "../../data/projectsDetails";
import ProjectGallery from "./ProjectGallery";
import ActivationsList from "./ActivationsList";
import ProjectHeader from "./ProjectHeader";
import ProjectSummary from "./ProjectSummary";

export default function ProjectPage() {
  const { id } = useParams();
  const { t } = useTranslation("projects");

  const project = projectsDetails.find((p) => p.id === id);
  if (!project) return <p>{t("projectNotFound")}</p>;

  return (
    <div className="w-full relative flex flex-col items-center gap-8 justify-center mx-auto py-12 px-6">
      <Link
        to="/"
        className="absolute top-2 left-6 flex items-center px-5 py-1 bg-black text-white rounded shadow hover:opacity-80 transition-opacity duration-200"
      >
        <ArrowLeft size={24} />
      </Link>

      <ProjectHeader project={project} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="bg-white rounded-lg shadow-md p-4">
          <ActivationsList project={project} />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <ProjectGallery project={project} />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <ProjectSummary project={project} />
        </div>
      </div>
    </div>
  );
}
