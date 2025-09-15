import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "isaque.v.l@gmail.com",
      href: "mailto:isaque.v.l@gmail.com",
      description: "Envie um email",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Telefone",
      value: "+55 48 98457-6217",
      href: "tel:+5548984576217",
      description: "Ligue agora",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Localização",
      value: "Florianópolis, SC - Brasil",
      href: "#",
      description: "Localização atual",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/isaque-santos-720b8b15a/?trk=opento_sprofile_details",
      color: "hover:text-blue-500",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/IsaqueCodeX",
      color: "hover:text-gray-400",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
      href: "https://wa.me/qr/SW4TC4J2EZVNM1",
      color: "hover:text-green-500",
    },
  ];

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient text-center">
            Vamos Conversar
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato e vamos criar algo incrível juntos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative glass-card p-8 rounded-2xl">
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={70}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <h3 className="text-2xl font-semibold mb-6 text-gradient">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="text-primary mt-1 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1">
                        {info.label}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        {info.description}
                      </p>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-primary hover:text-secondary transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-foreground">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="relative glass-card p-8 rounded-2xl">
              <GlowingEffect
                spread={30}
                glow={true}
                disabled={false}
                proximity={70}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <h3 className="text-2xl font-semibold mb-6 text-gradient">
                Redes Sociais
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`glass-card hover:scale-110 transition-all duration-300 ${social.color}`}
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      {social.icon}
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>


          </div>

          {/* Contact Form Placeholder */}
          <div className="relative glass-card p-8 rounded-2xl">
            <GlowingEffect
              spread={35}
              glow={true}
              disabled={false}
              proximity={80}
              inactiveZone={0.01}
              borderWidth={2}
            />
            <h3 className="text-2xl font-semibold mb-6 text-gradient">
              Envie uma Mensagem
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Conte-me sobre seu projeto ou ideia..."
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full btn-hero text-lg py-6 rounded-xl"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center relative glass-card p-8 rounded-2xl">
          <GlowingEffect
            spread={25}
            glow={true}
            disabled={false}
            proximity={60}
            inactiveZone={0.01}
            borderWidth={2}
          />
          <h3 className="text-xl font-semibold mb-4">
            Pronto para o próximo projeto?
          </h3>
          <p className="text-muted-foreground mb-6">
            Estou disponível para freelances, consultorias ou oportunidades de emprego. 
            Vamos transformar suas ideias em realidade!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Disponível para novos projetos
            </span>
            <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              Resposta em 24h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;