
import React from 'react';
import { ShieldAlert, Microscope, CheckCircle, BookOpen, ShieldCheck, Search } from 'lucide-react';

const SaudeMentalPage: React.FC = () => {
  return (
    <div className="flex flex-col py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            NR1 & Saúde Mental Corporativa
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-dark mb-6">
            Gestão de <span className="italic">Riscos Psicossociais.</span>
          </h1>
          <p className="text-lg text-dark/70 leading-relaxed">
            Esqueça as "palestras motivacionais". Gestão de riscos é sobre <span className="font-bold">compliance e saúde e segurança do trabalho</span>. Atuo em intervenções com base científica para mitigar riscos psicossociais conforme as exigências da nova NR1.
          </p>
        </div>

        {/* The Difference Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-12 rounded-3xl border border-primary/10">
            <ShieldAlert className="text-primary mb-6" size={40} />
            <h2 className="text-2xl font-serif text-dark mb-6">Diagnóstico de Riscos Psicossociais</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                <span className="text-dark/70 text-sm leading-relaxed">Mapeamento de fatores estressores no ambiente laboral.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                <span className="text-dark/70 text-sm leading-relaxed">Avaliação da cultura de segurança e impacto emocional.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                <span className="text-dark/70 text-sm leading-relaxed">Relatórios técnicos para PGR (Programa de Gerenciamento de Riscos).</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-12 rounded-3xl border border-primary/10">
            <Microscope className="text-primary mb-6" size={40} />
            <h2 className="text-2xl font-serif text-dark mb-6">Intervenção e Prevenção em Saúde Mental</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                <span className="text-dark/70 text-sm leading-relaxed">Treinamentos baseados em evidência para lideranças.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                <span className="text-dark/70 text-sm leading-relaxed">Protocolos de resposta a crises e suporte psicossocial.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                <span className="text-dark/70 text-sm leading-relaxed">Monitoramento de KPIs de saúde mental corporativa.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Science vs Lecture Callout - UPDATED CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center bg-dark text-secondary p-12 md:p-20 rounded-[3rem]">
          <div>
            <h3 className="text-3xl font-serif mb-6 italic leading-tight">Por que um olhar psicológico e científico na conformidade da NR1?</h3>
            <p className="text-secondary/70 text-sm mb-8 leading-relaxed">
              Implementar a NR1 com o suporte da Psicologia Organizacional garante que a saúde mental deixe de ser apenas uma exigência legal para se tornar uma cultura viva e protetiva. O foco é transformar normas técnicas em ambientes onde o trabalho flui com segurança.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Search size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Diagnóstico de Fatores Psicossociais</h4>
                  <p className="text-secondary/60 text-sm italic">Avalio a raiz do esgotamento, analisando como o trabalho está organizado, desde a carga de tarefas até o nível de autonomia e suporte que a equipe recebe.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Letramento de Lideranças</h4>
                  <p className="text-secondary/60 text-sm italic">Capacito gestores para que saibam identificar sinais de sofrimento na equipe com clareza e empatia, sem a pressão de agirem como terapeutas.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Cultura de Segurança Psicológica</h4>
                  <p className="text-secondary/60 text-sm italic">Ajudo a construir um ambiente onde as pessoas podem expressar dificuldades sem medo de represálias. Essa confiança é a base de uma NR1 realmente eficiente e humanizada.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-secondary/5 p-1 rounded-2xl border border-white/10">
              <img
                src="louisi3.jpg"
                alt="Saúde Mental Corporativa"
                className="rounded-xl shadow-2xl transition-all duration-700"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
              <span className="text-6xl font-serif italic opacity-10 select-none">ESTRATÉGIA</span>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-dark/60 mb-8 max-w-xl mx-auto italic">
            "A saúde mental no trabalho não é um custo, é uma variável de segurança tão crítica quanto o uso de EPIs."
          </p>
          <a
            href="https://cal.com/psicologa-louisiane-aurora-hlf3y1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-12 py-5 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20 inline-block"
          >
            Agendar Raio X de Riscos Psicossociais para minha empresa
          </a>
        </div>
      </div>
    </div>
  );
};

export default SaudeMentalPage;
