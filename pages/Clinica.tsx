import React from 'react';
import { 
  Brain, 
  Calendar, 
  Instagram, 
  MessageSquare, 
  Sliders, 
  Heart, 
  UserCheck, 
  RotateCcw, 
  Eye, 
  CheckCircle2 
} from 'lucide-react';

const ClinicaPage: React.FC = () => {
  const competencies = [
    {
      title: "COMUNICAR",
      description: "Expressar necessidades, escutar, discordar e atravessar conversas difíceis sem transformar todo conflito em ataque ou defesa.",
      icon: <MessageSquare className="text-primary" size={24} />
    },
    {
      title: "REGULAR",
      description: "Compreender emoções e aprender a lidar com raiva, ansiedade, medo, culpa e frustração sem agir automaticamente a partir delas.",
      icon: <Sliders className="text-primary" size={24} />
    },
    {
      title: "VINCULAR",
      description: "Construir intimidade, confiança, presença e reciprocidade sem transformar proximidade em dependência ou controle.",
      icon: <Heart className="text-primary" size={24} />
    },
    {
      title: "DIFERENCIAR",
      description: "Preservar identidade, autonomia e limites enquanto permanece capaz de construir vínculos significativos.",
      icon: <UserCheck className="text-primary" size={24} />
    },
    {
      title: "REPARAR",
      description: "Reconhecer erros, compreender impactos, responsabilizar-se e desenvolver recursos para lidar com as rupturas inevitáveis das relações.",
      icon: <RotateCcw className="text-primary" size={24} />
    },
    {
      title: "DISCERNIR",
      description: "Enxergar relações com mais clareza, avaliar compatibilidade, reciprocidade, valores e aquilo que realmente é possível construir com o outro.",
      icon: <Eye className="text-primary" size={24} />
    }
  ];

  const signs = [
    "você percebe que repete padrões semelhantes em diferentes relações;",
    "conversas difíceis frequentemente terminam em afastamento, explosão ou silêncio;",
    "sente dificuldade para colocar ou sustentar limites;",
    "assume responsabilidades demais ou tem dificuldade para confiar no outro;",
    "sente medo intenso de rejeição, abandono ou solidão;",
    "tem dificuldade para construir intimidade ou permitir que alguém se aproxime;",
    "percebe que ansiedade, raiva, culpa ou insegurança interferem nas suas relações;",
    "vive conflitos recorrentes com parceiros, familiares ou outras pessoas importantes;",
    "está atravessando um término, separação ou mudança importante em um vínculo;",
    "quer compreender melhor a própria forma de amar, escolher e se relacionar."
  ];

  return (
    <div className="flex flex-col py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
              <Brain size={12} /> Psicologia dos Relacionamentos
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-dark mb-8 leading-tight">
              Psicoterapia para desenvolver<br />
              <span className="italic">Competência Relacional.</span>
            </h1>
            <div className="text-base md:text-lg text-dark/75 mb-10 leading-relaxed max-w-xl space-y-4 text-justify">
              <p>
                Relacionar-se bem não depende apenas de encontrar as pessoas certas. Também exige compreender seus próprios padrões e desenvolver recursos para lidar com vínculos, conflitos, diferenças e escolhas.
              </p>
              <p>
                Na psicoterapia, trabalhamos os padrões que atravessam a forma como você se relaciona, consigo e com os outros, para desenvolver relações mais maduras, conscientes e saudáveis.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/35910016852?text=Olá,%20Louisiane!%20Gostaria%20de%20agendar%20minha%20primeira%20sessão."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-primary/90 transition-all flex items-center justify-center shadow-2xl shadow-primary/30 group text-center"
              >
                <span>
                  AGENDAR MINHA<br />
                  PRIMEIRA SESSÃO
                </span>
                <Calendar className="ml-3 group-hover:rotate-12 transition-transform" size={18} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl -z-10 animate-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src="louisi4.jpg"
                alt="Louisiane Aurora - Psicoterapia"
                className="object-cover h-[550px] w-full brightness-[1.03] contrast-[1.05]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://raw.githubusercontent.com/StackBlitz-User/images/main/louisi-profile1.jpg';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark/90 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-white/10">
                    <span className="text-white font-serif text-xl">ψ</span>
                  </div>
                  <div className="text-white">
                    <p className="text-sm font-serif italic text-white/90">Louisiane Aurora</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Amar não significa saber se relacionar */}
        <section className="mb-32">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif text-dark mb-2">
              Amar não significa saber se relacionar.
            </h2>
            <h3 className="text-xl md:text-2xl font-serif text-primary italic font-medium">
              Relações saudáveis também exigem competências.
            </h3>
            
            <div className="text-dark/75 text-base md:text-lg leading-relaxed space-y-4 pt-6 text-justify max-w-3xl mx-auto">
              <p>
                Podemos amar alguém e ainda ter dificuldade para conversar, lidar com conflitos, regular nossas emoções, estabelecer limites ou reparar aquilo que aconteceu entre nós.
              </p>
              <p>
                Muitas dessas dificuldades estão relacionadas a padrões que aprendemos ao longo da vida e repetimos, às vezes sem perceber, em relações amorosas, familiares, profissionais e de amizade.
              </p>
              <p className="font-medium text-dark/90 pt-2">
                Na psicoterapia, o objetivo não é ensinar fórmulas para evitar conflitos ou controlar o comportamento do outro. É compreender como você participa das suas relações e desenvolver recursos para se relacionar de maneira mais madura, preservando vínculo, individualidade, responsabilidade e liberdade.
              </p>
            </div>
          </div>

          {/* Competencies Section Title */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif text-dark tracking-wide uppercase">
              O que desenvolvemos na terapia
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competencies.map((item, i) => (
              <div key={i} className="group bg-white p-8 md:p-10 rounded-[2.5rem] border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/50 mb-6 group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold font-sans text-dark tracking-wider mb-4 uppercase">{item.title}</h4>
                  <p className="text-dark/70 text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Highlight Quote */}
          <div className="mt-16 text-center max-w-3xl mx-auto p-8 bg-secondary/40 rounded-3xl border border-primary/10">
            <p className="text-lg md:text-xl font-serif italic text-primary leading-relaxed">
              "Relacionar-se melhor não começa aprendendo a controlar o outro. Começa compreendendo aquilo que você faz dentro da relação."
            </p>
          </div>
        </section>

        {/* Section: Talvez faça sentido iniciar psicoterapia se... */}
        <section className="mb-24 bg-gradient-to-b from-secondary/20 to-secondary/50 p-8 md:p-16 rounded-[3rem] border border-primary/10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-serif text-dark mb-10 text-center">
              Talvez faça sentido iniciar psicoterapia se...
            </h3>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
              {signs.map((sign, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-primary/5 shadow-sm hover:border-primary/20 transition-all">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="text-dark/85 text-base leading-relaxed">{sign}</span>
                </div>
              ))}
            </div>

            {/* Closing banner and CTA */}
            <div className="text-center space-y-8 pt-6 border-t border-primary/10">
              <p className="text-lg md:text-2xl font-serif text-dark italic font-medium max-w-2xl mx-auto">
                "Você não precisa esperar uma relação chegar ao limite para aprender a se relacionar melhor."
              </p>
              
              <div className="flex justify-center">
                <a
                  href="https://wa.me/35910016852?text=Olá,%20Louisiane!%20Gostaria%20de%20agendar%20minha%20primeira%20sessão."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-primary/90 transition-all flex items-center justify-center shadow-2xl shadow-primary/30 group text-center"
                >
                  <span>
                    AGENDAR MINHA<br />
                    PRIMEIRA SESSÃO
                  </span>
                  <Calendar className="ml-3 group-hover:rotate-12 transition-transform" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ClinicaPage;
