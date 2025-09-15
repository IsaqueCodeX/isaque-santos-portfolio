import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useIsMobile } from "@/hooks/use-mobile";

const Technologies = () => {
  const isMobile = useIsMobile();
  const technologies = [
    {
      name: "HTML",
      icon: "🌐",
      description: "Estruturação semântica de páginas web",
    },
    {
      name: "CSS",
      icon: "🎨",
      description: "Estilização moderna e responsiva",
    },
    {
      name: "JavaScript",
      icon: "⚡",
      description: "Interatividade e dinamismo",
    },
    {
      name: "React",
      icon: "⚛️",
      description: "Biblioteca para interfaces modernas",
    },
    {
      name: "TypeScript",
      icon: "📘",
      description: "JavaScript com tipagem estática",
    },
    {
      name: "PHP",
      icon: "🚀",
      description: "Desenvolvimento backend robusto",
    },
    {
      name: "SQL",
      icon: "🗄️",
      description: "Gerenciamento de banco de dados",
    },
    {
      name: "Python",
      icon: "🐍",
      description: "Programação versátil e poderosa",
    },
    {
      name: "WordPress",
      icon: "📝",
      description: "Criação de sites e blogs",
    },
  ];

  return (
    <section id="tecnologias" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient text-center">
            Tecnologias
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Principais ferramentas e linguagens que utilizo para criar 
            soluções web completas e eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="relative glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300"
            >
              {!isMobile && (
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
              )}
              <div className="relative z-10 text-6xl mb-4 floating group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="relative z-10 text-2xl font-semibold mb-3 text-gradient">
                {tech.name}
              </h3>
              <p className="relative z-10 text-muted-foreground">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Progress */}
        <div className="mt-16 relative glass-card p-8 rounded-2xl">
          <GlowingEffect
            spread={30}
            glow={true}
            disabled={!isMobile}
            proximity={80}
            inactiveZone={0.01}
            borderWidth={2}
          />
          <h3 className="text-2xl font-semibold mb-8 text-center text-gradient">
            Nível de Experiência
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { skill: "HTML/CSS", level: 95 },
              { skill: "JavaScript", level: 85 },
              { skill: "React", level: 80 },
              { skill: "TypeScript", level: 75 },
              { skill: "PHP", level: 80 },
              { skill: "SQL", level: 75 },
              { skill: "Python", level: 70 },
              { skill: "WordPress", level: 90 },
            ].map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-primary">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.level}%`,
                      animation: `slideInFromLeft 1.5s ease-out ${0.5}s forwards`,
                      transform: "translateX(-100%)",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;