
import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const RHPage: React.FC = () => {
  const services = [
    {
      title: "Saúde Mental no Trabalho",
      desc: "Implementação de ações voltadas à promoção da saúde mental, gestão de riscos psicossociais e adequação às exigências da NR-1, contribuindo para ambientes de trabalho mais seguros, saudáveis e sustentáveis."
    },
    {
      title: "Desenvolvimento Humano",
      desc: "Palestras, treinamentos e programas voltados ao desenvolvimento de lideranças, comunicação, gestão de conflitos, inteligência emocional, trabalho em equipe e fortalecimento da cultura organizacional."
    },
    {
      title: "Pessoas e Cultura",
      desc: "Consultorias em Recrutamento e Seleção, mapeamento comportamental, assessment, desenvolvimento de carreira, PDI, feedback e outras estratégias para potencializar o desempenho das pessoas e das organizações."
    },
    {
      title: "Orientação Profissional e de Carreira",
      desc: "Acompanhamento estruturado voltado para a primeira escolha profissional, momentos de transição de carreira e planejamento ou preparação para a aposentadoria, promovendo escolhas conscientes e alinhadas ao seu momento de vida."
    }
  ];

  return (
    <div className="flex flex-col py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <div className="md:w-1/2">
            <div className="inline-block px-3 py-1 rounded-full bg-dark/10 text-dark text-xs font-bold tracking-widest uppercase mb-4">
              Psicologia Organizacional
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-dark mb-8 leading-tight">
              Cuidar da saúde mental no trabalho é <span className="italic">cuidar das relações que sustentam uma organização.</span>
            </h1>
            <div className="text-lg text-dark/75 mb-8 leading-relaxed space-y-4 text-justify">
              <p>
                Organizações saudáveis não são construídas apenas por processos eficientes, mas por pessoas que trabalham em ambientes onde há clareza, responsabilidade, comunicação e segurança psicológica.
              </p>
              <p>
                Por isso, atuo ao lado de empresas desenvolvendo estratégias que fortalecem a saúde mental, as relações de trabalho, o desenvolvimento humano e a gestão de pessoas, sempre com base na Psicologia Organizacional e nas necessidades específicas de cada contexto.
              </p>
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
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, i) => (
            <div key={i} className="p-8 md:p-10 bg-secondary border-t-4 border-primary rounded-b-2xl shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-serif text-dark mb-4 font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-dark/70 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Final High-Conversion Banner */}
        <div className="bg-secondary p-12 rounded-3xl border border-primary/20 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-2xl md:text-3xl font-serif text-dark mb-4 italic">Sua empresa merece clareza em cada decisão.</h2>
            <p className="text-dark/70 text-sm md:text-base leading-relaxed">
              Vamos construir ambientes de trabalho mais saudáveis, onde pessoas e organizações possam se desenvolver de forma sustentável.
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
