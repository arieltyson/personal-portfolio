import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/ExpertiseSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import ContactSection from "@/sections/ContactSection";
import { useTheme } from "@/hooks/useTheme";

const App = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-[60] focus:rounded-apple-sm focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-6 pt-24 pb-32">
        <div className="space-y-32">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <TestimonialsSection />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
