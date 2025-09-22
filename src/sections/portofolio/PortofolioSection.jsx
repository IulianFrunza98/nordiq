import { useTranslation } from "react-i18next";
import projectsDetails from "../../data/projectsDetails";
import ProjectCard from "./ProjectCard";

export default function PortfolioSection() {
  const { t } = useTranslation();

  return (
    <section id="portofoliu" className="py-16 px-4">
      <h1 className="font-bold text-3xl mb-10 text-center relative inline-block">
        {t("portfolio")}
      </h1>

      <div className="flex flex-wrap items-center justify-center flex-col sm:flex-row gap-7">
        {projectsDetails.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            image={project.gallery[0].images.image1}
            title={t(project.titleKey)}
            description={t(project.descriptionKey)}
          />
        ))}
      </div>
    </section>
  );
}
