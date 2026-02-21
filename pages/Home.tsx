
import React from 'react';
import { ArrowRight } from 'lucide-react';
import WheelOfLife from '../components/WheelOfLife';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 py-12">
            <h1 className="text-4xl md:text-6xl font-serif text-dark mb-6 leading-tight">
              Cuidado para as pessoas, <span className="italic">segurança para as empresas.</span>
            </h1>
            <p className="text-lg text-dark/70 mb-8 max-w-lg leading-relaxed">
              Um olhar atento para quem sustenta o mundo. Louisiane Aurora une a inteligência da Psicologia Organizacional à sensibilidade da Clínica, oferecendo um espaço de suporte genuíno e técnico para organizações e mulheres que buscam recuperar sua essência e seu equilíbrio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/35910016852?text=Olá,%20Louisiane!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20para%20pessoas."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-8 py-4 rounded-full font-medium bg-white/50 backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
              >
                Para Pessoas
              </a>
              <a
                href="https://wa.me/35910016852?text=Olá,%20Louisiane!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20para%20empresas."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-8 py-4 rounded-full font-medium bg-white/50 backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
              >
                Para Empresas
              </a>
            </div>
          </div>

          <div className="relative h-full w-full flex justify-center items-center py-12">
            <div className="absolute w-[95%] h-[95%] bg-primary/5 rounded-[4rem] -z-10 rotate-2 translate-x-4"></div>

            <div className="relative group">
              <img
                src="/louisi-photo.jpg"
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
      <section className="py-24 bg-secondary/10">
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

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-dark mb-8 leading-tight">
              Suporte dedicado para quem <span className="italic">sustenta o mundo.</span>
            </h2>
            <p className="text-lg md:text-xl text-dark/70 leading-relaxed max-w-3xl mx-auto italic font-serif">
              "Durante toda a minha trajetória como psicóloga, entendi que a saúde mental e a eficiência organizacional são indissociáveis. Hoje, consolido minha atuação em uma estrutura que une esses dois pilares. Acredito que o equilíbrio de uma organização começa no cuidado de cada indivíduo, e meu papel é construir os processos inteligentes que permitem essa harmonia."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 bg-secondary rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-dark">
                <span className="font-serif text-xl font-bold">1.</span>
              </div>
              <h3 className="text-xl font-serif mb-4">Indivíduo</h3>
              <p className="text-dark/70 text-sm leading-relaxed">
                Foco no acolhimento técnico para mulheres exaustas, com base na TCC e na Neurociência, para que aprendam sobre limites, prioridades, regulação emocional, autocuidado e autorresponsabilização nas dinâmicas relacionais.
              </p>
            </div>
            <div className="p-8 bg-secondary rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-dark">
                <span className="font-serif text-xl font-bold">2.</span>
              </div>
              <h3 className="text-xl font-serif mb-4">Corporação</h3>
              <p className="text-dark/70 text-sm leading-relaxed">
                Onde a estratégia encontra o fator humano. Consultoria técnica de RH focada em estruturar processos inteligentes que geram saúde, cultura forte e vantagem competitiva
              </p>
            </div>
            <div className="p-8 bg-secondary rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-dark">
                <span className="font-serif text-xl font-bold">3.</span>
              </div>
              <h3 className="text-xl font-serif mb-4">Conformidade</h3>
              <p className="text-dark/70 text-sm leading-relaxed">
                Atuação em conformidade com a nova NR1, focada em Diagnóstico de Riscos Psicossociais e Programas Interventivos e Preventivos voltados à Saúde Mental Corporativa unindo ciência aplicada à Saúde e Segurança no Trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
