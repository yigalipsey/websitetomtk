import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection"
import Navbar  from "./components/Navbar";
export default function Home() {
  return (
    <div className=" ">
         <Navbar/>
      <HeroSection />
      <AboutSection/>

     
   
    </div>
  );
}
