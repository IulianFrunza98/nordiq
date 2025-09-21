import project1Img1 from "../assets/Project 1/0-xc60-b4-2021.jpg";
import project1Img2 from "../assets/Project 1/1-xc60-b4-2021.jpg";
import project1Img3 from "../assets/Project 1/2-xc60-b4-2021.jpg";
import project1Img4 from "../assets/Project 1/3-xc6-0b4-2021.jpg";
import project1Video1 from "../assets/Project 1/xc60-b4-2021.mp4";

const projectsDetails = [
  {
    id: "volvo-xc60",
    title: "Volvo XC60 B4 AWD 2021",
    description:
      "Diagnoză completă, calibrare senzori și optimizări software. Rezultatul: condus mai fluid și eficient pe autostradă și în oraș.",
    activations: [
      "Fază lungă automată → fază adaptivă în funcție de trafic",
      "Asistență la schimbarea benzii → activată (nivel 2)",
      "Start/Stop automat → complet dezactivat",
      "Teme de afișaj → temă Polestar",
      "Afișare extinsă a limitei de viteză → activată",
      "Asistență la viteză în curbe → activată",
      "Avertizare distanță față de vehiculul din față → activată",
      "Lumină în viraje (cornering) → activată",
      "Lumină de călătorie pentru turiști → setată pentru circulație pe partea dreaptă (LHD)",
      "Semnal sonor la închiderea centralizată → activat",
      "Limitare viteză maximă vehicul → eliminată",
      "Pilot automat adaptiv (ACC) → activat (nivel 2+)",
      "Versiune ACC → 4 (cea mai recentă versiune disponibilă)",
    ],
    gallery: [
      {
        images: {
          image1: project1Img1,
          image2: project1Img2,
          image3: project1Img3,
          image4: project1Img4,
        },
        videos: { video1: project1Video1 },
      },
    ],
  },
];

export default projectsDetails;
