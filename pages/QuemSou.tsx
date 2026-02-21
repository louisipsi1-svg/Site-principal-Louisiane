
import React from 'react';
// Added ArrowRight to the imported components from lucide-react
import { BookOpen, GraduationCap, Heart, Building2, CheckCircle2, Quote, ArrowRight } from 'lucide-react';

const QuemSouPage: React.FC = () => {
  const corporateLogos = [
    "LOGO 1.png",
    "LOGO 2.png",
    "LOGO3.png",
    "LOGO 4.png",
    "LOGO 5.png",
    "LOGO 6.jpg"
  ];

  return (
    <div className="flex flex-col py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro Section - The "Why" */}
        <section className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-32">
          <div className="md:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <img
              src="louisi1.JPG"
              alt="Louisiane Aurora - Psicóloga"
              className="rounded-3xl shadow-2xl transition-all duration-700 w-full object-cover aspect-[4/5]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://raw.githubusercontent.com/StackBlitz-User/images/main/louisi-profile1.jpg';
              }}
            />
          </div>
          <div className="md:w-1/2">
            <Quote className="text-primary/20 mb-6" size={48} />
            <h1 className="text-3xl md:text-5xl font-serif text-dark mb-8 leading-tight italic">
              Minha missão é caminhar ao seu lado.
            </h1>
            <p className="text-lg text-dark/70 leading-relaxed mb-6">
              Minha trajetória na clínica e nas empresas me ensinou uma verdade fundamental: o ser humano é um sistema único e precisa ser respeitado como tal. Minha missão não é apenas aplicar processos, mas acolher cada história e cada estrutura organizacional com o cuidado que elas merecem.
            </p>
            <p className="text-lg text-dark/70 leading-relaxed italic border-l-4 border-primary/20 pl-6">
              Acredito que resultados sustentáveis e saúde emocional não são opostos, mas faces da mesma moeda.
            </p>
          </div>
        </section>

        {/* Narrative Biography */}
        <section className="bg-secondary/50 rounded-[3rem] p-8 md:p-20 mb-32">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="text-primary" size={28} />
              <h2 className="text-2xl md:text-3xl font-serif text-dark">Trajetória Técnica</h2>
            </div>

            <div className="space-y-8 text-dark/80 leading-relaxed">
              <p>
                Minha trajetória é marcada pela união entre o rigor clínico, visão estratégica, cuidado e humanidade. Como <strong>Psicóloga Clínica e Organizacional</strong>, especialista em <strong>Terapia Cognitiva Comportamental (TCC)</strong> e em <strong>Psicologia Organizacional e do Trabalho</strong> (reconhecida pelo CFP), <strong>MBA em Gestão de Pessoas e Recursos Humanos</strong>, com formação em <strong>Saúde Mental Corporativa</strong> atualizada à nova NR1 com chancela do MEC, dedico minha escuta ao resgate de mulheres exaustas, auxiliando-as na regulação emocional e no estabelecimento de limites saudáveis.
              </p>
              <p>
                Ao longo dos anos, mergulhei também na realidade das empresas, acumulando experiência prática em <strong>RH, DP, Financeiro e SST</strong>. Esse repertório multidisciplinar me permite oferecer intervenções seguras, que compreendem não apenas as profundezas da mente humana, mas também as engrenagens e os desafios reais da gestão de um negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary"><BookOpen size={20} /></div>
                <div>
                  <h4 className="font-bold text-dark text-sm uppercase tracking-wider mb-1">Ciência Aplicada</h4>
                  <p className="text-xs text-dark/60 italic">Intervenções baseadas em evidências para garantir assertividade.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary"><Heart size={20} /></div>
                <div>
                  <h4 className="font-bold text-dark text-sm uppercase tracking-wider mb-1">Acolhimento Técnico</h4>
                  <p className="text-xs text-dark/60 italic">Uma escuta ativa que une sensibilidade e expertise clínica.</p>
                </div>
              </div>
            </div>
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
            {corporateLogos.map((logo, i) => (
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

        {/* Closing Banner */}
        <section className="bg-dark text-secondary rounded-[3.5rem] p-12 md:p-24 overflow-hidden relative text-center">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif italic mb-8">Além dos títulos, o propósito.</h2>
            <p className="text-lg text-secondary/70 mb-12">
              Por trás do CNPJ e dos registros profissionais, existe uma dedicação genuína à <span className="text-primary font-bold">Cultura do Cuidado</span>. Meu trabalho é garantir que processos fluam, que pessoas se sintam seguras e que organizações se tornem lugares de real prosperidade humana.
            </p>
            <a
              href="https://wa.me/35910016852"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-primary/20 inline-flex items-center gap-3 mx-auto"
            >
              Vamos conversar sobre seu momento <ArrowRight size={18} />
            </a>
          </div>

          {/* Abstract decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -ml-48 -mb-48"></div>
        </section>

      </div>
    </div>
  );
};

export default QuemSouPage;
