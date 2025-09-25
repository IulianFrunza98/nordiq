import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import JSON
import roCommon from "./locales/ro/common.json";
import roProjects from "./locales/ro/projects.json";

import enCommon from "./locales/en/common.json";
import enProjects from "./locales/en/projects.json";

import plCommon from "./locales/pl/common.json";
import plProjects from "./locales/pl/projects.json";

import deCommon from "./locales/de/common.json";
import deProjects from "./locales/de/projects.json";

import svCommon from "./locales/sv/common.json";
import svProjects from "./locales/sv/projects.json";

import ukCommon from "./locales/uk/common.json";
import ukProjects from "./locales/uk/projects.json";

const savedLanguage = localStorage.getItem("language") || "ro";

i18n.use(initReactI18next).init({
  resources: {
    ro: { common: roCommon, projects: roProjects },
    en: { common: enCommon, projects: enProjects },
    de: { common: deCommon, projects: deProjects },
    pl: { common: plCommon, projects: plProjects },
    sv: { common: svCommon, projects: svProjects },
    uk: { common: ukCommon, projects: ukProjects },
  },
  lng: savedLanguage,
  fallbackLng: "ro",
  ns: ["common", "projects"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
