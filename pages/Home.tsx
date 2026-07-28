
import React from 'react';
import { ArrowRight } from 'lucide-react';
import WheelOfLife from '../components/WheelOfLife';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 flex items-center overflow-hidden bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 py-12">
            <h1 className="text-4xl md:text-6xl font-serif text-dark mb-6 leading-tight">
              Psicologia para <span className="italic">relações mais saudáveis.</span>
            </h1>
            <div className="text-base md:text-lg text-dark/75 mb-8 max-w-lg leading-relaxed space-y-4">
              <div>
                <strong className="font-semibold text-dark block">Na clínica</strong>
                Ajudo mulheres emocionalmente exaustas a estabelecer e sustentar limites saudáveis.
              </div>
              <div>
                <strong className="font-semibold text-dark block">Nas empresas</strong>
                Promovo saúde mental e relações de trabalho mais saudáveis por meio da Psicologia Organizacional.
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/35910016852?text=Olá,%20Louisiane!%20Gostaria%20de%20iniciar%20minha%20terapia."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-8 py-4 rounded-full font-medium bg-white/50 backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
              >
                Quero iniciar minha terapia
              </a>
              <a
                href="https://wa.me/35910016852?text=Olá,%20Louisiane!%20Gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20para%20empresas."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-8 py-4 rounded-full font-medium bg-white/50 backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
              >
                Soluções para empresas
              </a>
            </div>
          </div>

          <div className="relative h-full w-full flex justify-center items-center py-12">
            <div className="absolute w-[95%] h-[95%] bg-primary/5 rounded-[4rem] -z-10 rotate-2 translate-x-4"></div>

            <div className="relative group">
              <img
                src="louisi-photo.jpg"
                alt="Louisiane Aurora - Inteligência e Estratégia"
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full max-w-lg transition-all duration-700 hover:scale-[1.02]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://raw.githubusercontent.com/StackBlitz-User/images/main/louisi-profile1.jpg';
                }}
              />

              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-primary/5 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-12 bg-primary rounded-full"></div>
                  <div>
                    <p className="text-sm font-serif font-bold text-dark italic">Psicologia Baseada em Evidências</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roda da Vida Section */}
      <section className="py-10 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-dark mb-4">Como está o sua <span className="italic">vida hoje?</span></h2>
            <p className="text-dark/60 text-sm max-w-xl mx-auto italic">
              A "Roda da Vida" é uma ferramenta de diagnóstico que permite mapear as áreas que precisam de mais atenção para que você recupere seu bem-estar.
            </p>
          </div>
          <WheelOfLife />
        </div>
      </section>


    </div>
  );
};

export default HomePage;
