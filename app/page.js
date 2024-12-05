import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";

import BenefitsSection from "./components/BenefitsSection";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className=" ">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <BenefitsSection />

      <ContactForm />
    </div>
  );
}
