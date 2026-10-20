import Navbar from "./components/Navbar";
import AboutSection from "./components/sections/about";
import HomeSection from "./components/sections/home";
import ProjectSection from "./components/sections/project";
import CertificatesSection from "./components/sections/certificates";
import ContactSection from "./components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <CertificatesSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
