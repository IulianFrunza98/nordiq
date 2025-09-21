import Navbar from "../components/Navbar";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";
import PortofolioSection from "../sections/portofolio/PortofolioSection";
import ServicesSection from "../sections/services/ServicesSection";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortofolioSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
