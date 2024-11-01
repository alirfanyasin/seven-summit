import { useEffect } from "react";
import Footer from "../components/Footer";
import AboutSection from "../fragments/AboutSection";
import HeroSection from "../fragments/HeroSection";
import MountainSection from "../fragments/MountainSection";
export default function Home() {
  // useEffect(() => {
  //   console.log("ok");
  //   window.HSStaticMethods.autoInit();
  // }, []);
  return (
    <main className="bg-[#040A16]">
      <HeroSection />
      <AboutSection />
      <MountainSection />
      <Footer />
    </main>
  );
}
