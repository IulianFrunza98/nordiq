import ContactInfo from "./ContactInfo";
import SocialMedia from "./SocialMedia";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4">
      <h1 className="font-bold text-3xl mb-10 text-center relative inline-block">
        Contact
      </h1>

      <ContactInfo />
      <SocialMedia />
    </section>
  );
}
