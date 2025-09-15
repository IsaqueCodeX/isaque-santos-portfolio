import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useIsMobile } from "@/hooks/use-mobile";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const isMobile = useIsMobile();

  const projects = [
    {
      id: 1,
      title: "Sistema de Gestão Empresarial",
      description: "Plataforma completa para gestão de clientes, vendas e estoque com dashboard analítico e relatórios detalhados.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "Landing Page Responsiva",
      description: "Site moderno e responsivo para empresa de tecnologia com animações suaves e design otimizado para conversão.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
      technologies: ["React", "TypeScript", "CSS3"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "Blog WordPress Customizado",
      description: "Tema WordPress personalizado com área administrativa customizada e otimização para SEO.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 4,
      title: "Sistema de Reservas Online",
      description: "Aplicação web para agendamento de serviços com calendário interativo e notificações automáticas.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      technologies: ["React", "PHP", "MySQL", "TypeScript"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 5,
      title: "E-commerce Responsivo",
      description: "Loja virtual completa com carrinho de compras, sistema de pagamento e painel administrativo.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      technologies: ["React", "PHP", "MySQL", "TypeScript"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 6,
      title: "Dashboard Analytics",
      description: "Painel de controle com gráficos interativos e métricas em tempo real para análise de dados.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Python", "Chart.js"],
      liveUrl: "#",
      codeUrl: "#",
    },
  ];

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient text-center">
            Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi utilizando diferentes 
            tecnologias e abordagens de desenvolvimento.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className="relative glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-glow-turquoise"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              {!isMobile && (
                <GlowingEffect
                  spread={35}
                  glow={true}
                  disabled={false}
                  proximity={60}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
              )}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gradient">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-muted rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="btn-hero flex-1"
                    asChild
                  >
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Ver Site
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="btn-secondary flex-1"
                    asChild
                  >
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevPage}
            disabled={currentPage === 0}
            className="glass-card hover:scale-110 transition-transform"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? "bg-primary scale-125"
                    : "bg-muted hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="glass-card hover:scale-110 transition-transform"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interessado em trabalhar comigo?
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById("contato");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-hero px-8 py-3 text-lg rounded-xl"
          >
            Vamos Conversar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;