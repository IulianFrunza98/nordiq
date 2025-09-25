import { useTranslation } from "react-i18next";

export default function ProjectHeader({ project }) {
  const { t } = useTranslation("projects");

  if (!project) return null;

  const header = project.projectHeader;
  const tags = header?.tagsKeys || [];
  const cards = header?.cards || {};

  return (
    <header className="w-full bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 space-y-3 sm:space-y-0">
              <h1 className="inline-flex items-center font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-lg px-4 py-2 text-sm sm:text-base shadow-md hover:shadow-lg transition-shadow duration-200">
                {t(project.titleKey)}
              </h1>

              {header?.configurationsKey && (
                <div className="flex-1">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
                    {t(header.configurationsKey)}
                  </p>
                </div>
              )}
            </div>

            {header?.diagnosisTitleKey && (
              <div className="border-l-4 border-blue-500 pl-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                  {t(header.diagnosisTitleKey)}
                </h2>
              </div>
            )}

            {project.resultKey && (
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {t(project.resultKey)}
                </p>
              </div>
            )}
          </div>

          <div className="lg:w-80 xl:w-96 space-y-6">
            {tags.length > 0 && (
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tagKey, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs font-medium rounded-full shadow-sm border border-blue-200 hover:shadow-md transition-shadow duration-200"
                    >
                      {t(tagKey)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {Object.keys(cards).length > 0 && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                  {Object.keys(cards).map((key) => (
                    <div
                      key={key}
                      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 hover:border-blue-300 group"
                    >
                      <p className="text-gray-600 text-xs font-medium uppercase tracking-wide mb-1">
                        {t(cards[key].labelKey)}
                      </p>
                      <p className="font-bold text-blue-700 text-lg group-hover:text-blue-800 transition-colors">
                        {cards[key].value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
    </header>
  );
}
