
import React from 'react';
import { Sparkles, Brain, Heart, Calendar, ArrowRight, Instagram } from 'lucide-react';

const ClinicaPage: React.FC = () => {
  const archetypes = [
    {
      title: "A que agrada",
      description: "Você sente dificuldade em decepcionar pessoas.\nMesmo quando está cansada, continua dizendo \"sim\" para evitar culpa, conflitos ou rejeição.",
      icon: <Heart className="text-primary" size={24} />
    },
    {
      title: "A que controla",
      description: "Você acredita que, se não assumir tudo, as coisas vão sair do controle.\nCarrega responsabilidades que muitas vezes não são suas.",
      icon: <Sparkles className="text-primary" size={24} />
    },
    {
      title: "A que se abandona",
      description: "Você conhece seus limites.\nMas sente culpa sempre que tenta respeitá-los.\nEntão volta atrás.",
      icon: <Brain className="text-primary" size={24} />
    }
  ];

  return (
    <div className="flex flex-col py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
              <Brain size={12} /> Seja fiel a si mesma
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-dark mb-8 leading-tight">
              Psicoterapia para mulheres <span className="italic">emocionalmente exaustas.</span>
            </h1>
            <div className="text-base md:text-lg text-dark/75 mb-10 leading-relaxed max-w-xl space-y-4">
              <p>
                Você não precisa aprender apenas a dizer "não". Precisa aprender a sustentar esse "não" quando surgem a culpa, o medo da rejeição e a vontade de voltar atrás.
              </p>
              <p>
                Na terapia, investigamos os padrões que sustentam esse sofrimento e construímos novas formas de se relacionar consigo mesma e com os outros.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/35910016852"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-primary/90 transition-all flex items-center justify-center shadow-2xl shadow-primary/30 group"
              >
                Agendar Sessão <Calendar className="ml-3 group-hover:rotate-12 transition-transform" size={18} />
              </a>
              <a
                href="https://www.instagram.com/louisi.aurora/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary border border-primary/10 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:border-primary/30 hover:bg-primary/5 transition-all flex items-center justify-center shadow-lg group"
              >
                Instagram da Clínica <Instagram className="ml-3 group-hover:scale-110 transition-transform" size={18} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl -z-10 animate-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src="louisi4.jpg"
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
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif text-dark mb-2">A Raiz do Esgotamento</h2>
            <h3 className="text-xl md:text-2xl font-serif text-primary italic font-medium">
              Por que é tão difícil estabelecer limites?
            </h3>
            
            <div className="text-dark/75 text-base md:text-lg leading-relaxed space-y-4 pt-4 text-left md:text-center">
              <p>Muitas mulheres acreditam que estão exaustas porque fazem demais.</p>
              <p>Mas, na prática clínica, percebo que o problema costuma ser mais profundo.</p>
              <p>
                A dificuldade de estabelecer e sustentar limites faz com que muitas mulheres assumam responsabilidades excessivas, evitem conflitos, priorizem constantemente as necessidades dos outros e, aos poucos, se afastem de si mesmas.
              </p>
              <p className="font-medium text-dark/90 italic pt-2">
                Na terapia, nosso objetivo não é ensinar você apenas a dizer "não". É compreender os padrões que tornam esse "não" tão difícil de sustentar e construir relações mais saudáveis sem que você precise abandonar quem é.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {archetypes.map((arc, i) => (
              <div key={i} className="group bg-white p-8 md:p-10 rounded-[2.5rem] border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/50 mb-6 group-hover:bg-primary/10 transition-colors">
                    {arc.icon}
                  </div>
                  <h4 className="text-2xl font-serif text-dark mb-4">{arc.title}</h4>
                  <p className="text-dark/70 text-base leading-relaxed whitespace-pre-line">{arc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


      </div>
    </div>
  );
};

export default ClinicaPage;
