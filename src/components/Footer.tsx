import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Counter } from "@/components/ui/counter";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-border/30">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gradient">
              Isaque Santos
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Desenvolvedor Full-Stack Júnior apaixonado por criar 
              soluções digitais inovadoras e funcionais.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {[
              { label: "Início", id: "inicio" },
              { label: "Tecnologias", id: "tecnologias" },
              { label: "Projetos", id: "projetos" },
              { label: "Contato", id: "contato" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  const element = document.getElementById(link.id);
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Links & Counters */}
          <div className="flex flex-col items-center gap-8">
            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary transition-colors glass-card"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/isaque-santos-720b8b15a/?trk=opento_sprofile_details"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              {!isMobile && (
                <GlowingEffect
                  spread={20}
                  glow={true}
                  disabled={false}
                  proximity={40}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
              )}
              </div>
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-secondary transition-colors glass-card"
                  asChild
                >
                  <a
                    href="https://github.com/IsaqueCodeX"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              {!isMobile && (
                <GlowingEffect
                  spread={20}
                  glow={true}
                  disabled={false}
                  proximity={40}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
              )}
              </div>
            </div>
            
            {/* Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">
              <Counter type="views" label="Visualizações" />
              <Counter type="likes" label="Likes" />
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © 2025 Isaque Santos — Desenvolvido com 
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              e código.
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        {showScrollTop && (
          <div className="fixed bottom-8 right-8 z-40">
            <div className="relative">
              <Button
                onClick={scrollToTop}
                size="icon"
                className="btn-hero shadow-lg hover:scale-110 transition-all duration-300"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
              {!isMobile && (
                <GlowingEffect
                  spread={25}
                  glow={true}
                  disabled={false}
                  proximity={50}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;