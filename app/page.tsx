
import Navbar from "../Components/Navbar/Navbar"
import AboutSection from  "../Components/AboutSection/AboutSection"
import Features from "../Components/Features/Features"
import HRSection from "../Components/HRSection/HRSection"
import BusinessSolutions from "../Components/BusinessSolutions/BusinessSolutions"
import Footer from '../Components/Footer/Footer'
export default function Home() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <Features />
      <HRSection />
      <BusinessSolutions />
      <Footer />
    </>
  );
}