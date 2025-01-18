import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import AboutSection from "../fragments/AboutSection";
import HeroSection from "../fragments/HeroSection";
import MountainSection from "../fragments/MountainSection";
import SimaksiSection from "../fragments/SimaksiSection";
import IdealWeather from "../fragments/IdealWeather";
export default function Home() {
  useEffect(() => {
    console.log("ok");
    window.HSStaticMethods.autoInit();
  }, []);
  return (
    <main className="bg-[#040A16]">
      <Helmet>
        <title>Home - Tips Pendakian dan Petualangan</title>
        <meta
          name="description"
          content="Selamat datang di situs kami! Temukan tips pendakian, perlengkapan, dan informasi tentang gunung-gunung terbaik untuk pendaki pemula hingga profesional."
        />
        <meta
          name="keywords"
          content="pendakian, tips pendakian, gunung, petualangan, pendaki"
        />
        <meta name="author" content="Tim Pendakian" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Home - Tips Pendakian dan Petualangan"
        />
        <meta
          property="og:description"
          content="Selamat datang di situs kami! Temukan tips pendakian, perlengkapan, dan informasi tentang gunung-gunung terbaik untuk pendaki pemula hingga profesional."
        />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="URL_TO_YOUR_HOME_PAGE" />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <MountainSection />
      <SimaksiSection />
      <IdealWeather />
      <Footer />
    </main>
  );
}
