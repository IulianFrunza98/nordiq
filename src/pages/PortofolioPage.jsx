import { CheckCircle2, MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

const improvements = [
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
];

export default function PortofolioPage() {
  return (
    <section className="relative">
      <Link
        to="/"
        className="absolute top-[20px] left-[20px] bg-black px-4 rounded py-1"
      >
        <MoveLeft strokeWidth={3} className="text-white" />
      </Link>
      <h1 className="font-bold text-2xl mb-4">Portofoliu</h1>
      <h2 className="font-bold text-xl text-blue-600 mb-2">
        Volvo XC60 B4 AWD 2021
      </h2>
      <h3 className="text-gray-700 mb-6">Activări realizate:</h3>
      <div className="grid cursor-pointer gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
        {improvements.map((improvement, idx) => (
          <div
            key={idx}
            className="flex items-center flex-col gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <CheckCircle2 className="text-green-600 w-5 h-5 mt-1" />
            <p className="text-gray-800 text-sm leading-snug">{improvement}</p>
          </div>
        ))}
      </div>
      <p>
        Diagnoză completă, calibrare senzori și optimizări software. Rezultatul:
        condus mai fluid și eficient pe autostradă și în oraș
      </p>
    </section>
  );
}
