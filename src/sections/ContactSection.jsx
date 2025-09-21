import { Mail, MapPinned, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact">
      <h1 className="font-bold text-3xl mb-4 relative inline-block">Contact</h1>

      <div className="flex gap-12 items-center">
        {/* Location */}
        <div className="flex items-center justify-center flex-col">
          <MapPinned />
          <p className="font-medium text-gray-700 text-lg leading-relaxed mt-2">
            Suceava
          </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <a href="https://wa.me/40775314325">
            <Phone />
          </a>
          <p className="font-medium text-gray-700 text-lg leading-relaxed mt-2">
            WhatsApp
          </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <a href="mailto:hello@nordiq.ro">
            <Mail />
          </a>
          <p className="font-medium text-gray-700 text-lg leading-relaxed mt-2">
            Email
          </p>
        </div>
      </div>
    </section>
  );
}
