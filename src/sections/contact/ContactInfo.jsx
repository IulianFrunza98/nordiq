import { Mail, MapPinned, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
      <div className="flex flex-col items-center">
        <MapPinned className="w-8 h-8 text-gray-600" />
        <p className="mt-2 font-medium text-gray-700 text-lg">Suceava</p>
      </div>
      <div className="flex flex-col items-center">
        <a
          href="https://wa.me/40775314325"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone className="w-8 h-8" />
        </a>
        <p className="mt-2 font-medium text-gray-700 text-lg">WhatsApp</p>
      </div>
      <div className="flex flex-col items-center">
        <a
          href="mailto:hello@nordiq.ro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="w-8 h-8" />
        </a>
        <p className="mt-2 font-medium text-gray-700 text-lg">Email</p>
      </div>
    </div>
  );
}
