import { useTranslation } from "react-i18next";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function PortfolioSection() {
  const { t: tCommon } = useTranslation("common");
  const { t: tProjects } = useTranslation("projects");

  return (
    <section id="portfolio" className="py-16 px-4 bg-[#f9f9f9]">
      <h1 className="font-bold text-3xl mb-10 text-center relative inline-block">
        {tCommon("portfolio")}
      </h1>

      <div className="flex flex-wrap justify-center gap-7">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            image={project.image}
            title={tProjects(`projects.${project.id}.title`)}
            description={tProjects(
              `projects.${project.id}.projectHeader.result`
            )}
            className="flex-1 min-w-[250px] max-w-[350px]"
          />
        ))}
      </div>
    </section>
  );
}
