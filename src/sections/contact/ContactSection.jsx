import ContactInfo from "./ContactInfo";
import Map from "./Map";
import Promo from "./Promo";
import SocialMedia from "./SocialMedia";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4">
      <h1 className="font-bold text-3xl mb-10 text-center text-gray-900">
        Contact
      </h1>

      <div className="grid sm:grid-cols-3 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          <ContactInfo />
          <SocialMedia />
        </div>

        <Promo />

        <div className="col-span-full">
          <Map />
        </div>
      </div>
    </section>
  );
}
