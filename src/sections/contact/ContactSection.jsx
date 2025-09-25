import ContactInfo from "./ContactInfo";
import Promo from "./Promo";
import SocialMedia from "./SocialMedia";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-[#f9f9f9]">
      <h1 className="font-bold text-3xl mb-10 text-center text-gray-900">
        Contact
      </h1>

      <div className="grid sm:grid-cols-3 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <ContactInfo />
        <div className="sm:col-span-2 md:col-span-1">
          <Promo />
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
