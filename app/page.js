import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import CatalogDownloadSection from "./components/CatalogDownloadSection";
import BenefitsSection from "./components/BenefitsSection";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className=" ">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <CatalogDownloadSection />

      <BenefitsSection />

      <ContactForm />
    </div>
  );
}
