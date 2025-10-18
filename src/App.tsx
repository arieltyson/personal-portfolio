import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/ExpertiseSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import ContactSection from "@/sections/ContactSection";

const App = (): JSX.Element => {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-24 sm:px-6 lg:px-8">
      <Navbar />
      <main className="mt-16 space-y-24">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
