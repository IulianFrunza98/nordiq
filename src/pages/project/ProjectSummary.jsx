import { useTranslation } from "react-i18next";
import { CheckCircle, TrendingUp, Target, Zap } from "lucide-react";

export default function ProjectSummary({ project }) {
  const { t } = useTranslation("projects");
  const { t: tCommon } = useTranslation("common");

  const summaryKeys = project?.summaryKeys || [];

  if (summaryKeys.length === 0) return null;

  return (
    <section className="w-full">
      {/* PARTEA DE SUS SIMPLĂ CU ALBASTRU */}
      <div className="bg-blue-600 p-4 rounded-t-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Titlu și icon */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-700 rounded-lg flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-bold text-lg sm:text-xl text-white">
              {tCommon("summaryImprovements")}
            </h2>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 bg-blue-700 rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-white text-sm font-medium">
              {summaryKeys.length} {tCommon("improvements")}
            </p>
          </div>
        </div>
      </div>

      {/* CARDURILE OPTIMIZATE PENTRU ECRANE MICI */}
      <div className="p-4 space-y-3">
        {summaryKeys.map((summaryKey, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-3 hover:border-blue-300 group"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-green-500 group-hover:text-green-600 transition-colors mt-0.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-700 group-hover:text-gray-900 leading-relaxed text-sm transition-colors break-words">
                  {t(summaryKey)}
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-100 group-hover:bg-blue-200 text-blue-600 text-xs font-bold rounded-full transition-colors">
                  {index + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
    </section>
  );
}
