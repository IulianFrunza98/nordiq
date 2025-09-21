import { useParams } from "react-router-dom";
import projectsDetails from "../data/projectsDetails";
import Card from "../ui/Card";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectsDetails.find((p) => p.id === id);

  if (!project) return <p>Proiectul nu a fost găsit.</p>;

  return (
    <div className="max-w-3xl flex items-center flex-col gap-4 justify-center mx-auto py-12 px-4">
      <h1 className="font-bold text-3xl mb-4 text-blue-500">{project.title}</h1>

      <h2 className="font-semibold text-xl mb-2">Activări realizate:</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {project.activations?.map((act, idx) => (
          <Card key={idx} text={act} />
        ))}
      </div>

      <p className="text-gray-700 mb-6">{project.description}</p>

      <h2 className="font-semibold text-xl mb-2">Galerie:</h2>
      <div className="flex items-center justify-center gap-7 flex-wrap">
        {Object.values(project.gallery[0].images).map((img, idx) =>
          img ? (
            <img
              key={idx}
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="rounded shadow w-[200px]"
            />
          ) : null
        )}
      </div>
    </div>
  );
}
