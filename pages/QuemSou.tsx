
import React from 'react';
import { Building2 } from 'lucide-react';

const QuemSouPage: React.FC = () => {
  const logoIcons = [
    "logo1.png",
    "logo2.png",
    "logo3.png",
    "logo4.png",
    "logo5.png",
    "logo6.jpg"
  ];

  return (
    <div className="flex flex-col py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro Section - Quem Sou */}
        <section className="flex flex-col md:flex-row items-start gap-12 md:gap-16 mb-24">
          <div className="md:w-5/12 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <img
              src="louisi1.jpg"
              alt="Louisiane Aurora - Psicóloga"
              className="rounded-3xl shadow-2xl transition-all duration-700 w-full object-cover aspect-[4/5]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://raw.githubusercontent.com/StackBlitz-User/images/main/louisi-profile1.jpg';
              }}
            />
          </div>

          <div className="md:w-7/12 space-y-6">
            <div className="border-l-4 border-primary pl-6 py-2 mb-8 bg-primary/5 rounded-r-2xl pr-4">
              <h1 className="text-2xl md:text-3xl font-serif text-dark leading-tight italic">
                "Acredito que relações saudáveis não dependem apenas de amor ou boas intenções. Elas também exigem competência para se relacionar."
              </h1>
            </div>

            <p className="text-lg text-dark/80 leading-relaxed font-medium">
              Foi essa compreensão que passou a orientar minha atuação: ajudar pessoas e organizações a construírem relações mais conscientes, responsáveis e saudáveis.
            </p>

            <div className="p-6 bg-secondary/60 rounded-2xl border border-primary/10 space-y-4">
              <p className="text-base text-dark/80 leading-relaxed">
                <strong className="font-semibold text-dark block mb-1">Na clínica:</strong>
                Acompanho adultos que desejam compreender seus padrões relacionais e desenvolver recursos para comunicar, regular, vincular, diferenciar, reparar e discernir, consigo mesmos e em suas relações.
              </p>
              <p className="text-base text-dark/80 leading-relaxed">
                <strong className="font-semibold text-dark block mb-1">Nas organizações:</strong>
                Ajudo empresas a promover saúde mental, fortalecer lideranças e desenvolver relações de trabalho mais saudáveis por meio da Psicologia Organizacional e do Trabalho.
              </p>
            </div>

            <p className="text-base text-dark/80 leading-relaxed text-justify">
              Sou psicóloga, especialista em Psicologia Organizacional e do Trabalho, com atuação nas áreas clínica e organizacional. Ao longo da minha trajetória, desenvolvi projetos voltados ao desenvolvimento humano, saúde mental, recrutamento e seleção, treinamento, liderança e gestão de pessoas, integrando conhecimento técnico e prática profissional para promover mudanças consistentes nas pessoas e nas organizações.
            </p>

            <p className="text-base text-dark/90 font-serif italic text-lg leading-relaxed pt-2">
              Hoje, meu propósito é o mesmo em qualquer contexto: ajudar pessoas e organizações a construírem relações mais conscientes, responsáveis e saudáveis.
            </p>
          </div>
        </section>

        {/* Corporate Experience */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark/5 text-dark/40 text-[10px] font-bold tracking-widest uppercase mb-4">
              <Building2 size={12} /> Trajetória de Campo
            </div>
            <h2 className="text-3xl font-serif text-dark mb-6">Honra em Colaborar</h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              Tive a honra de contribuir com a cultura e a saúde mental de organizações de diferentes setores, aprendendo com cada uma delas e com os desafios que cada sistema humano apresenta.
            </p>
          </div>

          {/* Placeholder for Logos - Grayscale for clean aesthetic */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center transition-all duration-500">
            {logoIcons.map((logo, i) => (
              <div key={i} className="h-40 w-64 flex items-center justify-center p-2">
                <img
                  src={logo}
                  alt={`Logo Parceiro ${i + 1}`}
                  className="max-w-full max-h-full object-contain mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </section>



      </div>
    </div>
  );
};

export default QuemSouPage;
