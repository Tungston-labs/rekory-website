
import Navbar from "../Components/Navbar/Navbar"
import HeroSection from "../Components/HeroSection/HeroSection"
import AboutSection from  "../Components/AboutSection/AboutSection"
import Features from "../Components/Features/Features"
import HRSection from "../Components/HRSection/HRSection"
import PartnersSection from "../Components/PartnersSection/PartnersSection"
import BusinessSolutions from "../Components/BusinessSolutions/BusinessSolutions"
import Footer from '../Components/Footer/Footer'
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Features />
      <HRSection />
      <PartnersSection />
      <BusinessSolutions />
      <Footer />
    </>
  );
}