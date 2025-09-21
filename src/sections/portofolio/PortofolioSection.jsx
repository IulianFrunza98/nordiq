import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function PortofolioSection() {
  return (
    <section id="portofoliu">
      <h1 className="font-bold text-3xl mb-4 relative inline-block">
        Portofoliu
      </h1>
      <div className="flex flex-wrap items-center justify-center flex-col sm:flex-row gap-7">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}
