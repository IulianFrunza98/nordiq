import polestar from "../assets/PolestarLogo.png";
import volvo from "../assets/VolvoLogo.png";
import { Check } from "lucide-react";

const services = [
  "Activări funcții (ACC, Pilot Assist, Traffic Jam Assist, Dezactivare totală Start/Stop etc.)",
  "Retrofituri hardware + software",
  "Diagnoză completă cu unelte profesionale",
  "Optimizări software personalizate",
  "Suport pentru vehicule diesel, benzină, electrice și hibride",
];

export default function ServicesSection() {
  return (
    <section id="servicii">
      <h1 className="font-bold text-3xl mb-4 relative inline-block">
        Serviciile Noastre
      </h1>
      <div className="flex flex-wrap items-center justify-center flex-col sm:flex-row gap-7">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white  rounded-xl text-center px-4 py-3 shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 w-[220px] cursor-pointer h-[140px] flex flex-col items-center justify-center"
          >
            <Check
              strokeWidth={3}
              className="text-green-600 font-bold w-5 h-5 mx-auto mb-2"
            />
            <p className="font-medium text-gray-700 text-base leading-snug">
              {service}
            </p>
          </div>
        ))}
      </div>
      <div className="flex my-4 gap-4 items-center justify-center">
        <img className="w-full max-w-[100px]" src={volvo} alt="volvo-logo" />
        <img
          className="w-full max-w-[100px]"
          src={polestar}
          alt="polestar-logo"
        />
      </div>
    </section>
  );
}
