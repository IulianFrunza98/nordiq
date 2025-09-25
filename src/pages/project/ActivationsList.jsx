import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ActivationsList({ project }) {
  const { t: tProjects } = useTranslation("projects");
  const { t: tCommon } = useTranslation("common");

  if (!project.activationsKeys || project.activationsKeys.length === 0)
    return null;

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="font-bold text-2xl mb-4 text-center w-full">
        {tCommon("activations")}
      </h2>

      <p className="text-gray-700 text-lg text-center max-w-2xl mb-8 w-full">
        Status:{" "}
        <span className="text-green-600">
          {tProjects(`projects.${project.id}.status`)}
        </span>
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {project.activationsKeys.map((key, idx) => {
          const [title, ...descParts] = tProjects(key).split("→");
          const description = descParts.join("→").trim();

          return (
            <li
              key={idx}
              className="flex flex-col sm:flex-row items-start gap-4 py-3 px-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 w-full"
            >
              <Check size={28} className="text-blue-500 flex-shrink-0 mt-1" />

              <div className="flex-1 min-w-0">
                <p className="text-gray-700 text-base break-words">
                  <span className="font-bold">{title.trim()}</span>{" "}
                  <span className="text-sm text-gray-500">→ {description}</span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      {project.descriptionKey && (
        <div className="flex-shrink-0 justify-e mt-6 w-full">
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
            <p className="text-gray-700 text-sm lg:text-base text-left break-words leading-relaxed">
              {tProjects(project.descriptionKey)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
