import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ourServices: "Our Services",
        service1: "Diagnostics and Error Code Reading",
        service2: "Software Updates and Upgrades",
        service3: "Feature Activations and Customizations",
        service4: "Retrofit and Module Replacement",
        service5: "Performance Tuning and Optimization",
        service6: "Pre-Purchase Inspections",
        project1: {
          title: "Volvo XC60 B4 AWD 2021",
          description:
            "Full diagnostics, sensor calibration, and software optimizations. Result: smoother and more efficient driving on highways and city roads.",
          activation1: "Automatic high beam → adaptive based on traffic",
          activation2: "Lane change assist → activated (level 2)",
          activation3: "Automatic Start/Stop → completely disabled",
          activation4: "Display themes → Polestar theme",
          activation5: "Extended speed limit display → activated",
          activation6: "Curve speed assist → activated",
          activation7: "Front distance warning → activated",
          activation8: "Cornering light → activated",
          activation9:
            "Driving light for tourists → set for right-hand traffic (LHD)",
          activation10: "Central locking sound → activated",
          activation11: "Max speed limit → removed",
          activation12: "Adaptive Cruise Control (ACC) → activated (level 2+)",
          activation13: "ACC version → 4 (latest available)",
        },
        followUs: "Follow us",
        services: "Services",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact",
        activePerformance: "Performance Unleashed",
        professionalDiagnostics:
          "Professional diagnostics, activations, and retrofits for Volvo and Polestar.",
        contactUs: "Contact Us",
        viewDetails: "View Details",
        activations: "Activations Done",
        aboutNordiq: "About Nordiq",
        nordiqDescription:
          "Nordiq is your digital workshop from the North – born in Suceava out of passion for engineering and automotive software. We combine Scandinavian precision with automotive industry experience to unlock your car's full potential.",
        promo: {
          title: "📢 We offer 5–25% DISCOUNT!",
          description:
            "If you have been a Nordiq client, leave us a review on Google and send us the promo code <bold>NORDIQ25</bold>. The discount applies depending on the chosen services.",
        },
        review: "Leave us a review on Google",
        footer: {
          copyright: "2025 Nordiq. All rights reserved.",
        },
      },
    },
    ro: {
      translation: {
        ourServices: "Serviciile Noastre",
        service1: "Diagnoză și citire coduri de eroare",
        service2: "Actualizări și upgrade-uri software",
        service3: "Activări și personalizări de funcții",
        service4: "Retrofit și înlocuire module",
        service5: "Optimizare și reglare a performanței",
        service6: "Inspecții pre-achiziție",
        project1: {
          title: "Volvo XC60 B4 AWD 2021",
          description:
            "Diagnoză completă, calibrare senzori și optimizări software. Rezultatul: condus mai fluid și eficient pe autostradă și în oraș.",
          activation1:
            "Fază lungă automată → fază adaptivă în funcție de trafic",
          activation2: "Asistență la schimbarea benzii → activată (nivel 2)",
          activation3: "Start/Stop automat → complet dezactivat",
          activation4: "Teme de afișaj → temă Polestar",
          activation5: "Afișare extinsă a limitei de viteză → activată",
          activation6: "Asistență la viteză în curbe → activată",
          activation7:
            "Avertizare distanță față de vehiculul din față → activată",
          activation8: "Lumină în viraje (cornering) → activată",
          activation9:
            "Lumină de călătorie pentru turiști → setată pentru circulație pe partea dreaptă (LHD)",
          activation10: "Semnal sonor la închiderea centralizată → activat",
          activation11: "Limitare viteză maximă vehicul → eliminată",
          activation12: "Pilot automat adaptiv (ACC) → activat (nivel 2+)",
          activation13:
            "Versiune ACC → 4 (cea mai recentă versiune disponibilă)",
        },
        followUs: "Urmărește-ne",
        services: "Servicii",
        portfolio: "Portofoliu",
        about: "Despre",
        contact: "Contact",
        activePerformance: "Performanță activată",
        professionalDiagnostics:
          "Diagnoză, activări și retrofituri profesionale pentru Volvo și Polestar.",
        contactUs: "Contactează-ne",
        viewDetails: "Vezi detalii",
        activations: "Activări realizate",
        aboutNordiq: "Despre Nordiq",
        nordiqDescription:
          "Nordiq este atelierul tău digital din nord – născut în Suceava din pasiune pentru inginerie și software auto. Combinăm precizia scandinavă cu experiența din industria automotive pentru a-ți activa potențialul complet al mașinii.",
        promo: {
          title: "📢 Oferim 5–25% REDUCERE!",
          description:
            "Dacă ai fost client Nordiq, lasă o recenzie pe Google și trimite-ne codul promoțional <bold>NORDIQ25</bold>. Reducerea se aplică în funcție de serviciile alese.",
        },
        review: "Lasă o recenzie pe Google",
        footer: {
          copyright: "2025 Nordiq. Toate drepturile rezervate.",
        },
      },
    },
  },
  lng: "ro",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
