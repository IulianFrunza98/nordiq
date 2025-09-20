import Navbar from "../components/Navbar";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
