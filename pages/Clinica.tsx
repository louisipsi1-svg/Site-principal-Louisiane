
import React from 'react';
import { Sparkles, Brain, Heart, Calendar, ArrowRight, BookOpen, Search } from 'lucide-react';

const ClinicaPage: React.FC = () => {
  const archetypes = [
    {
      title: "A Boazinha",
      description: "Dificuldade crônica em dizer \"não\", priorizando sempre a necessidade alheia em detrimento da própria saúde mental.",
      icon: <Heart className="text-primary" size={24} />
    },
    {
      title: "A Perfeccionista",
      description: "A busca implacável por um padrão inalcançável, resultando em procrastinação defensiva e esgotamento.",
      icon: <Sparkles className="text-primary" size={24} />
    },
    {
      title: "A Sem Limites",
      description: "A exaustão de quem não consegue separar a própria vida das demandas externas, perdendo-se de si mesma.",
      icon: <Brain className="text-primary" size={24} />
    }
  ];

  return (
    <div className="flex flex-col py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
              <Brain size={12} /> Clínica de Alta Assertividade
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-dark mb-8 leading-tight">
              Para a mulher que se perdeu na tentativa de ser <span className="italic">tudo para todos.</span>
            </h1>
            <p className="text-lg text-dark/70 mb-10 leading-relaxed max-w-xl">
              Acolher o esgotamento de uma mulher requer um olhar que vai além do óbvio. Uno a <span className="text-dark font-bold underline decoration-primary/30">neurociência à escuta clínica</span> para oferecer um caminho de clareza em meio ao caos, entregando ferramentas que ajudam você a regular suas emoções e a recuperar a leveza de ser quem você é, sem o peso de ter que dar conta de tudo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/35910016852"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-primary/90 transition-all flex items-center justify-center shadow-2xl shadow-primary/30 group"
              >
                Agendar Triagem Técnica <Calendar className="ml-3 group-hover:rotate-12 transition-transform" size={18} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl -z-10 animate-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src="/louisi4.jpg"
                alt="Louisiane Aurora - Terapia Cognitivo-Comportamental"
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

        {/* Archetypes Section */}
        <section className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-dark mb-6">Mapeamento de Padrões</h2>
            <p className="text-dark/60 italic text-sm leading-relaxed">
              O primeiro passo da estratégia clínica é identificar os arquétipos que drenam sua energia. <br /> Onde você está gastando sua força vital hoje?
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {archetypes.map((arc, i) => (
              <div key={i} className="group bg-white p-12 rounded-[2.5rem] border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  {arc.icon}
                </div>
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/50 mb-8 group-hover:bg-primary/10 transition-colors">
                  {arc.icon}
                </div>
                <h3 className="text-2xl font-serif text-dark mb-6">{arc.title}</h3>
                <p className="text-dark/60 text-sm leading-relaxed mb-6">{arc.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <div className="bg-dark text-secondary p-12 md:p-24 rounded-[3.5rem] overflow-hidden relative shadow-3xl">
          <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-12 h-1 bg-primary mb-8"></div>
              <h2 className="text-4xl font-serif mb-8 italic leading-tight">Embasamento que gera <br /> <span className="text-primary not-italic">cuidado real.</span></h2>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-primary/20 p-3 rounded-2xl mr-5 mt-1 transition-transform group-hover:scale-110"><Brain size={24} className="text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-2 text-primary">Neurociência Aplicada</h4>
                    <p className="text-secondary/70 text-sm leading-relaxed">Entender como seu cérebro reage ao estresse é o primeiro passo para o alívio. Uso a neurociência para ajudar você a acalmar o excesso de cobranças e recuperar a clareza necessária para tomar decisões com mais leveza.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-primary/20 p-3 rounded-2xl mr-5 mt-1 transition-transform group-hover:scale-110"><BookOpen size={24} className="text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-2 text-primary">Terapia Cognitivo-Comportamental (TCC)</h4>
                    <p className="text-secondary/70 text-sm leading-relaxed">A base científica para identificar padrões que te paralisam. Trabalho na reorganização de pensamentos e comportamentos, substituindo a exaustão por atitudes que respeitam seus limites e sua história.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-primary/20 p-3 rounded-2xl mr-5 mt-1 transition-transform group-hover:scale-110"><Search size={24} className="text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-2 text-primary">Mapeamento de Personalidade</h4>
                    <p className="text-secondary/70 text-sm leading-relaxed">Utilizo ferramentas psicométricas de padrão ouro para compreender suas tendências naturais e forças individuais. O objetivo não é te rotular, mas construir estratégias de enfrentamento que realmente funcionem para o seu jeito de ser.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right flex flex-col items-center md:items-end">
              <div className="text-7xl md:text-9xl font-serif mb-8 opacity-5 select-none font-bold">PSI</div>
              <p className="text-secondary/80 italic text-xl leading-relaxed max-w-sm mb-10">
                "Mais do que entender o que se sente, é preciso saber como cuidar do que se sente. Aqui, sua história é respeitada e transformada em ações gentis que fortalecem sua saúde mental e seu bem-estar."
              </p>
              <a
                href="https://wa.me/35910016852"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-dark px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all shadow-xl inline-block"
              >
                Começar Jornada
              </a>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -ml-48 -mb-48"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        </div>
      </div>
    </div>
  );
};

export default ClinicaPage;
