export default function AboutSection() {
  return (
    <section id="despre" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h1 className="font-bold text-3xl mb-4 relative inline-block">
          Despre Nordiq
          <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded"></span>
        </h1>
        <p className="font-medium text-gray-700 text-lg leading-relaxed mt-6">
          Nordiq este atelierul tău digital din nord – născut în Suceava din
          pasiune pentru inginerie și software auto. Combinăm precizia
          scandinavă cu experiența din industria automotive pentru a-ți activa
          potențialul complet al mașinii.
        </p>
      </div>
    </section>
  );
}
