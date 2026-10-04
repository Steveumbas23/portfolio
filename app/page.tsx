import Navbar from "./components/Navbar";
import AboutSection from "./components/sections/about";
import HomeSection from "./components/sections/home";
import ProjectSection from "./components/sections/project";
import ContactSection from "./components/sections/contact";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-white">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
