import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("language") || "ro";

i18n.use(initReactI18next).init({
  resources: {
    uk: {
      translation: {
        ourServices: "Наші Послуги",
        service1: "Діагностика та зчитування кодів помилок",
        service2: "Оновлення та покращення програмного забезпечення",
        service3: "Активація функцій та налаштування",
        service4: "Ретрофіт та заміна модулів",
        service5: "Оптимізація та налаштування продуктивності",
        service6: "Передпродажна перевірка",
        project1: {
          title: "Volvo XC60 B4 AWD 2021",
          description:
            "Повна діагностика, калібрування сенсорів та оптимізація програмного забезпечення. Результат: більш плавне та ефективне керування на трасі та в місті.",
          activation1:
            "Автоматичний дальнє світло → адаптивне залежно від трафіку",
          activation2: "Асистент зміни смуги → активовано (рівень 2)",
          activation3: "Автоматичний Start/Stop → повністю відключено",
          activation4: "Теми відображення → тема Polestar",
          activation5:
            "Розширене відображення обмеження швидкості → активовано",
          activation6: "Асистент швидкості в поворотах → активовано",
          activation7:
            "Попередження про дистанцію до переднього автомобіля → активовано",
          activation8: "Світло при поворотах → активовано",
          activation9:
            "Дальнє світло для туристів → налаштовано для правостороннього руху (LHD)",
          activation10: "Звуковий сигнал при центральному замку → активовано",
          activation11: "Обмеження максимальної швидкості → видалено",
          activation12:
            "Адаптивний круїз-контроль (ACC) → активовано (рівень 2+)",
          activation13: "Версія ACC → 4 (найновіша доступна)",
        },
        followUs: "Слідкуйте за нами",
        services: "Послуги",
        portfolio: "Портфоліо",
        about: "Про нас",
        contact: "Контакт",
        activePerformance: "Розкрито Потужність",
        professionalDiagnostics:
          "Професійна діагностика, активації та ретрофіти для Volvo та Polestar.",
        contactUs: "Зв'яжіться з нами",
        viewDetails: "Переглянути деталі",
        activations: "Виконані активації",
        aboutNordiq: "Про Nordiq",
        nordiqDescription:
          "Nordiq – ваша цифрова майстерня з півночі, народжена в Сучаві з пристрасті до інженерії та автомобільного програмного забезпечення. Ми поєднуємо скандинавську точність з досвідом автомобільної індустрії, щоб розкрити повний потенціал вашого автомобіля.",
        promo: {
          title: "📢 Пропонуємо знижку 5–25%!",
          description:
            "Якщо ви були клієнтом Nordiq, <bold>залиште нам відгук</bold> на Google та надішліть нам промокод <bold>NORDIQ25</bold>. Знижка застосовується в залежності від обраних послуг.",
        },
        review: "Залиште нам відгук на Google",
        footer: {
          copyright: "2025 Nordiq. Усі права захищено.",
        },
      },
    },

    sv: {
      translation: {
        ourServices: "Våra Tjänster",
        service1: "Diagnostik och felkodsläsning",
        service2: "Programvaruuppdateringar och uppgraderingar",
        service3: "Funktionsaktiveringar och anpassningar",
        service4: "Retrofit och modulbyte",
        service5: "Prestandaoptimering och justering",
        service6: "Förköpsinspektioner",
        project1: {
          title: "Volvo XC60 B4 AWD 2021",
          description:
            "Fullständig diagnostik, sensorkalibrering och programvaruoptimeringar. Resultat: smidigare och mer effektiv körning på motorväg och i stadstrafik.",
          activation1: "Automatiskt helljus → adaptivt baserat på trafik",
          activation2: "Filbytesassistans → aktiverad (nivå 2)",
          activation3: "Automatisk Start/Stop → helt inaktiverad",
          activation4: "Displayteman → Polestar-tema",
          activation5: "Utökad hastighetsgränsvisning → aktiverad",
          activation6: "Kurvhastighetsassistans → aktiverad",
          activation7: "Framåtdistansvarning → aktiverad",
          activation8: "Kurvljus → aktiverad",
          activation9: "Körljus för turister → inställt för högertrafik (LHD)",
          activation10: "Ljudsignal vid centrallås → aktiverad",
          activation11: "Maxhastighetsbegränsning → borttagen",
          activation12: "Adaptiv farthållare (ACC) → aktiverad (nivå 2+)",
          activation13: "ACC-version → 4 (senaste tillgängliga)",
        },
        followUs: "Följ oss",
        services: "Tjänster",
        portfolio: "Portfolio",
        about: "Om oss",
        contact: "Kontakt",
        activePerformance: "Frigjord Prestanda",
        professionalDiagnostics:
          "Professionell diagnostik, aktiveringar och retrofitter för Volvo och Polestar.",
        contactUs: "Kontakta oss",
        viewDetails: "Se detaljer",
        activations: "Utförda aktiveringar",
        aboutNordiq: "Om Nordiq",
        nordiqDescription:
          "Nordiq är din digitala verkstad från norr – född i Suceava av passion för ingenjörskonst och bilprogramvara. Vi kombinerar skandinavisk precision med erfarenhet från bilindustrin för att frigöra din bils fulla potential.",
        promo: {
          title: "📢 Vi erbjuder 5–25% RABATT!",
          description:
            "Om du har varit Nordiq-kund, <bold>lämna oss en recension</bold> på Google och skicka oss kampanjkoden <bold>NORDIQ25</bold>. Rabatten gäller beroende på valda tjänster.",
        },
        review: "Lämna oss en recension på Google",
        footer: {
          copyright: "2025 Nordiq. Alla rättigheter förbehållna.",
        },
      },
    },
    pl: {
      translation: {
        ourServices: "Nasze Usługi",
        service1: "Diagnostyka i odczyt kodów błędów",
        service2: "Aktualizacje i ulepszenia oprogramowania",
        service3: "Aktywacje funkcji i personalizacje",
        service4: "Retrofit i wymiana modułów",
        service5: "Optymalizacja i regulacja wydajności",
        service6: "Przeglądy przed zakupem",
        project1: {
          title: "Volvo XC60 B4 AWD 2021",
          description:
            "Pełna diagnostyka, kalibracja czujników i optymalizacje oprogramowania. Efekt: płynniejsza i bardziej wydajna jazda na autostradach i w mieście.",
          activation1:
            "Automatyczne światła drogowe → adaptacyjne w zależności od ruchu",
          activation2: "Asystent zmiany pasa → aktywowany (poziom 2)",
          activation3: "Start/Stop automatyczny → całkowicie wyłączony",
          activation4: "Motywy wyświetlacza → motyw Polestar",
          activation5:
            "Rozszerzony wyświetlacz ograniczenia prędkości → aktywowany",
          activation6: "Asystent prędkości w zakrętach → aktywowany",
          activation7: "Ostrzeżenie o odległości przed pojazdem → aktywowane",
          activation8: "Światło w zakrętach → aktywowane",
          activation9:
            "Światło do jazdy dla turystów → ustawione na ruch prawostronny (LHD)",
          activation10:
            "Sygnalizacja dźwiękowa zamykania centralnego → aktywowana",
          activation11: "Ograniczenie maksymalnej prędkości → usunięte",
          activation12: "Adaptacyjny tempomat (ACC) → aktywowany (poziom 2+)",
          activation13: "Wersja ACC → 4 (najnowsza dostępna wersja)",
        },
        followUs: "Obserwuj nas",
        services: "Usługi",
        portfolio: "Portfolio",
        about: "O nas",
        contact: "Kontakt",
        activePerformance: "Odblokowana wydajność",
        professionalDiagnostics:
          "Profesjonalna diagnostyka, aktywacje i retrofity dla Volvo i Polestar.",
        contactUs: "Skontaktuj się z nami",
        viewDetails: "Zobacz szczegóły",
        activations: "Wykonane aktywacje",
        aboutNordiq: "O Nordiq",
        nordiqDescription:
          "Nordiq to Twój cyfrowy warsztat z północy – powstały w Suceavie z pasji do inżynierii i oprogramowania samochodowego. Łączymy skandynawską precyzję z doświadczeniem w branży motoryzacyjnej, aby w pełni wykorzystać potencjał Twojego auta.",
        promo: {
          title: "📢 Oferujemy 5–25% RABATU!",
          description:
            "Jeśli byłeś klientem Nordiq, <bold>zostaw nam recenzję</bold> na Google i prześlij kod promocyjny <bold>NORDIQ25</bold>. Rabat dotyczy wybranych usług.",
        },
        review: "Zostaw nam recenzję na Google",
        footer: {
          copyright: "2025 Nordiq. Wszelkie prawa zastrzeżone.",
        },
      },
    },

    de: {
      translation: {
        ourServices: "Unsere Dienstleistungen",
        service1: "Diagnose und Fehlercodeauslesung",
        service2: "Software-Updates und Upgrades",
        service3: "Funktionsaktivierungen und Anpassungen",
        service4: "Retrofit und Modulersatz",
        service5: "Leistungsoptimierung und Tuning",
        service6: "Vor-Kauf-Inspektionen",
        project1: {
          title: "Volvo XC60 B4 AWD 2021",
          description:
            "Komplette Diagnose, Sensor-Kalibrierung und Software-Optimierungen. Ergebnis: flüssigeres und effizienteres Fahren auf Autobahnen und in der Stadt.",
          activation1: "Automatisches Fernlicht → adaptiv je nach Verkehr",
          activation2: "Spurwechselassistent → aktiviert (Level 2)",
          activation3: "Automatisches Start/Stop → vollständig deaktiviert",
          activation4: "Anzeige-Themen → Polestar Thema",
          activation5: "Erweiterte Geschwindigkeitsanzeige → aktiviert",
          activation6: "Kurvengeschwindigkeitsassistent → aktiviert",
          activation7: "Abstandswarnung vorne → aktiviert",
          activation8: "Kurvenlicht → aktiviert",
          activation9:
            "Fahrlicht für Touristen → für Rechtsverkehr eingestellt (LHD)",
          activation10: "Zentralverriegelung-Signalton → aktiviert",
          activation11: "Maximalgeschwindigkeit → entfernt",
          activation12: "Adaptiver Tempomat (ACC) → aktiviert (Level 2+)",
          activation13: "ACC-Version → 4 (aktuellste verfügbare Version)",
        },
        followUs: "Folge uns",
        services: "Dienstleistungen",
        portfolio: "Portfolio",
        about: "Über uns",
        contact: "Kontakt",
        activePerformance: "Leistung entfesselt",
        professionalDiagnostics:
          "Professionelle Diagnosen, Aktivierungen und Retrofits für Volvo und Polestar.",
        contactUs: "Kontaktiere uns",
        viewDetails: "Details ansehen",
        activations: "Durchgeführte Aktivierungen",
        aboutNordiq: "Über Nordiq",
        nordiqDescription:
          "Nordiq ist deine digitale Werkstatt aus dem Norden – in Suceava aus Leidenschaft für Ingenieurwesen und Auto-Software entstanden. Wir kombinieren skandinavische Präzision mit Erfahrung in der Automobilindustrie, um das volle Potenzial deines Autos freizuschalten.",
        promo: {
          title: "📢 Wir bieten 5–25% RABATT!",
          description:
            "Wenn du ein Nordiq-Kunde warst, <bold>hinterlasse uns eine Bewertung</bold> auf Google und sende uns den Promo-Code <bold>NORDIQ25</bold>. Der Rabatt gilt je nach gewählten Dienstleistungen.",
        },
        review: "Hinterlasse uns eine Bewertung auf Google",
        footer: {
          copyright: "2025 Nordiq. Alle Rechte vorbehalten.",
        },
      },
    },

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
  lng: savedLanguage,
  fallbackLng: "en",
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
  interpolation: { escapeValue: false },
});

export default i18n;
