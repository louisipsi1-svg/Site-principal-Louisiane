
import React from 'react';
import { CheckCircle2, Linkedin, Instagram } from 'lucide-react';

const RHPage: React.FC = () => {
  const services = [
    {
      title: "Cultura Organizacional",
      desc: "Desenho e implementação de valores que saem da parede e guiam decisões."
    },
    {
      title: "RH Técnico & Processos",
      desc: "Estruturação de subsistemas de RH com foco em eficiência e compliance."
    },
    {
      title: "Psicologia Organizacional",
      desc: "Aplicação de ciência comportamental para o amadurecimento de equipes."
    },
    {
      title: <>Avaliação de Perfil <br /> (Big Five)</>,
      desc: "Mapeamento assertivo de competências para contratação e promoção com metodologias validadas cientificamente"
    }
  ];

  const pillars = [
    "Eficiência Técnica",
    "Cultura do Cuidado",
    "Trabalhos que fluem",
    "Segurança Psicológica"
  ];

  return (
    <div className="flex flex-col py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <div className="md:w-1/2">
            <div className="inline-block px-3 py-1 rounded-full bg-dark/10 text-dark text-xs font-bold tracking-widest uppercase mb-4">
              Consultoria Organizacional
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-dark mb-8 leading-tight">
              Inteligência em Operações <br /> <span className="italic">e Gestão de Pessoas.</span>
            </h1>
            <p className="text-lg text-dark/70 mb-8 leading-relaxed">
              Empresas não são máquinas, são sistemas humanos complexos. Minha consultoria entrega um olhar cuidadoso e técnico para negócios que buscam crescer com equilíbrio, organizando os processos de RH de forma clara e humana para que as pessoas e os resultados possam florescer juntos.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex items-center text-dark/80 font-medium text-sm md:text-base">
                  <CheckCircle2 className="text-primary mr-2 flex-shrink-0" size={18} /> {pillar}
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="louisi2.jpg"
              alt="Louisiane Aurora no ambiente corporativo"
              className="rounded-2xl shadow-2xl object-cover h-[500px] w-full brightness-[1.02]"
            />
          </div>
        </div>

        {/* Services Grid */}
        <section className="grid md:grid-cols-4 gap-8 mb-24">
          {services.map((service, i) => (
            <div key={i} className="p-8 bg-secondary border-t-4 border-primary rounded-b-xl shadow-sm hover:shadow-md transition-shadow group">
              <h3 className="text-lg font-serif text-dark mb-4 font-bold group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-dark/60 text-xs leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </section>

        {/* Final High-Conversion Banner */}
        <div className="bg-secondary p-12 rounded-3xl border border-primary/20 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-2xl md:text-3xl font-serif text-dark mb-4 italic">Sua empresa merece clareza em cada decisão.</h2>
            <p className="text-dark/70 text-sm md:text-base leading-relaxed">
              Uso métodos validados e avaliações precisas para que a gestão de pessoas seja feita com segurança, transformando o que parece subjetivo em dados que ajudam você a decidir melhor.
            </p>
          </div>
          <a
            href="https://wa.me/35910016852"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 whitespace-nowrap bg-dark text-white px-10 py-4 rounded-full font-medium hover:bg-dark/90 transition-all shadow-xl hover:shadow-dark/20 active:scale-95 inline-block"
          >
            Solicitar Proposta de Consultoria
          </a>

          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </div>
      </div>
    </div>
  );
};

export default RHPage;
