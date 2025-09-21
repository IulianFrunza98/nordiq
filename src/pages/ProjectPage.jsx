import { Link, useParams } from "react-router-dom";
import projectsDetails from "../data/projectsDetails";
import { ArrowLeft } from "lucide-react";
import ProjectGallery from "../components/ProjectGallery";
import ActivationsList from "../components/ActivationsList";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectsDetails.find((p) => p.id === id);

  if (!project) return <p>Proiectul nu a fost găsit.</p>;

  return (
    <div className="w-full relative flex flex-col items-center gap-8 justify-center mx-auto py-12 px-6">
      <Link
        to="/"
        className="absolute top-6 left-6 hidden sm:flex items-center px-5 py-1 bg-black text-white rounded shadow hover:opacity-80 transition-opacity duration-200"
      >
        <ArrowLeft size={24} />
      </Link>

      <h1 className="font-bold text-3xl mb-[10px] sm:mb-[30px] text-blue-500 text-center">
        {project.title}
      </h1>

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
