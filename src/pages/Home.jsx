import Footer from "../components/Footer";
import AboutSection from "../fragments/AboutSection";
import HeroSection from "../fragments/HeroSection";
import MountainSection from "../fragments/MountainSection";
export default function Home() {
  return (
    <main className="bg-[#040A16]">
      <HeroSection />
      <AboutSection />
      <MountainSection />
      <Footer />
    </main>
  );
}
