import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import CareJourney from "./components/CareJourney";
import FreeGuidance from "./components/FreeGuidance";
import ClinicalCare from "./components/ClinicalCare";
import WomensHealth from "./components/WomensHealth";
import PlatformExpansion from "./components/PlatformExpansion";
import PartnerEcosystem from "./components/PartnerEcosystem";
import TrustSection from "./components/TrustSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <ProblemSection />
        <CareJourney />
        <FreeGuidance />
        <ClinicalCare />
        <WomensHealth />
        <PlatformExpansion />
        <PartnerEcosystem />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
