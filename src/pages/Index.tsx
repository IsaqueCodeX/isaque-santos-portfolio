import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BeamsBackground } from "@/components/ui/beams-background";
import { useTheme } from "next-themes";

const Index = () => {
  const { theme } = useTheme();
  
  const BackgroundComponent = theme === 'dark' ? BeamsBackground : AuroraBackground;
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundComponent className="fixed inset-0 -z-10">
        <div></div>
      </BackgroundComponent>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Technologies />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
