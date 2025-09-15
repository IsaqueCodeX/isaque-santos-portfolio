import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Profile Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl"></div>
              <div className="relative glass-card p-2 rounded-full">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <img
                  src={profileImage}
                  alt="Isaque Santos - Desenvolvedor Full-Stack"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full floating relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 text-center order-1 lg:order-2 lg:ml-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-center">
                Olá, eu sou{" "}
                <span className="text-gradient">
                  Isaque Santos
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Desenvolvedor Full-Stack Júnior
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["HTML", "CSS", "JavaScript", "React", "TypeScript", "PHP", "SQL", "Python"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium glass-card rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Apaixonado por criar soluções digitais inovadoras e funcionais. 
              Sempre em busca de novos desafios e oportunidades para crescer 
              profissionalmente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projetos")}
                className="btn-hero px-8 py-6 text-lg rounded-xl group"
              >
                Ver Projetos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("contato")}
                className="btn-secondary text-secondary-foreground px-8 py-6 text-lg rounded-xl group"
              >
                Contato
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection("tecnologias")}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll para tecnologias"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;