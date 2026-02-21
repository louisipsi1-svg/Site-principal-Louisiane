
import React, { useState } from 'react';
import { Home, User, Briefcase, ShieldCheck, Menu, X, Instagram, Linkedin, MessageCircle, ArrowRight, Video, Info, Music, Mail } from 'lucide-react';
import HomePage from './pages/Home';
import ClinicaPage from './pages/Clinica';
import RHPage from './pages/RH';
import SaudeMentalPage from './pages/SaudeMental';
import QuemSouPage from './pages/QuemSou';
import CarreiraPage from './pages/Carreira';


import LegalPage from './pages/Legal';

type Page = 'home' | 'rh' | 'saudemental' | 'clinica' | 'quemsou' | 'carreira' | 'termos' | 'privacidade';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'rh': return <RHPage />;
      case 'saudemental': return <SaudeMentalPage />;
      case 'clinica': return <ClinicaPage />;
      case 'quemsou': return <QuemSouPage />;
      case 'carreira': return <CarreiraPage />;
      case 'termos': return <LegalPage type="termos" onBack={() => setCurrentPage('home')} />;
      case 'privacidade': return <LegalPage type="privacidade" onBack={() => setCurrentPage('home')} />;
      default: return <HomePage />;
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'quemsou', label: 'Quem sou', icon: User },
    { id: 'clinica', label: 'Psicologia Clínica', icon: Info },
    { id: 'carreira', label: 'Carreira & Personalidade', icon: Briefcase },
    { id: 'rh', label: 'RH & Consultoria', icon: Briefcase },
    { id: 'saudemental', label: 'Saúde Mental - NR1', icon: ShieldCheck },
  ];


  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-secondary">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-secondary/80 backdrop-blur-md border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => navigateTo('home')}
            >
              <div className="relative">
                <div className="w-10 h-10 flex items-center justify-center p-1 group-hover:scale-105 transition-all overflow-hidden rounded-full border border-primary/5">
                  <img src="/logo.png" alt="Logo Louisiane Aurora" className="w-full h-full object-contain mix-blend-multiply" onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) target.parentElement.innerText = 'L';
                  }} />
                </div>
              </div>
              <div className="ml-3 hidden lg:block">
                <span className="text-lg lg:text-xl font-serif font-bold text-dark tracking-tight block leading-none">Louisiane Aurora Psicologia & RH</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center flex-1 justify-start ml-6 lg:ml-12 space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id as Page)}
                  className={`text-[13px] font-medium transition-all hover:text-primary whitespace-nowrap ${currentPage === item.id ? 'text-primary' : 'text-dark/60'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center ml-8">
              <a
                href="https://wa.me/35910016852"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-dark/90 transition-all shadow-xl shadow-dark/10 flex items-center gap-2 group whitespace-nowrap"
              >
                Contato <MessageCircle size={16} className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-dark p-2 hover:bg-primary/5 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-white border-b border-secondary shadow-2xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}>
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id as Page)}
                className={`flex items-center w-full px-4 py-4 rounded-xl text-left transition-all ${currentPage === item.id ? 'bg-primary/10 text-primary font-bold' : 'text-dark/60 hover:bg-secondary/50'
                  }`}
              >
                <item.icon size={20} className="mr-4" />
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-4">
              <a
                href="https://wa.me/35910016852"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-dark text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-xl flex items-center justify-center gap-3"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <div className="page-transition">
          {renderPage()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
                  <img src="/logo-principal-branco.png" alt="Logo Louisiane Aurora" className="w-full h-full object-contain" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-serif font-bold text-white">Louisiane Aurora Psicologia & RH</h3>
                </div>
              </div>
              <p className="text-secondary/60 max-w-sm leading-relaxed mb-10 text-sm italic">
                Transformando a complexidade das relações em fluxos de trabalho saudáveis. Apoio especializado para empresas e pessoas que buscam equilíbrio e resultados reais.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.instagram.com/louisi.aurora/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex flex-col items-center justify-center hover:bg-primary hover:border-primary transition-all group" title="Instagram Clínica">
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-[8px] mt-1 opacity-60">Clínica</span>
                </a>
                <a href="https://www.instagram.com/louisiaurora.psinr1/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex flex-col items-center justify-center hover:bg-primary hover:border-primary transition-all group" title="Instagram Corporativo">
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-[8px] mt-1 opacity-60">Corp</span>
                </a>
                <a href="https://www.tiktok.com/@louisi.aurora?_r=1&_t=ZS-93ol6fHLMMK" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group" title="TikTok">
                  <Music size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/louisiane-aurora-0a6514b6/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group" title="LinkedIn">
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://wa.me/35910016852" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group" title="WhatsApp">
                  <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="mailto:contato@aurorapsc.com.br" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group" title="E-mail">
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div>
              <ul className="space-y-4 text-sm text-secondary/60">
                {navItems.map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => navigateTo(item.id as Page)}
                      className="hover:text-primary transition-colors hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <img src="/logo-principal-branco.png" alt="Louisiane Aurora Logo" className="w-56 h-auto transition-opacity" />
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-secondary/30 text-center md:text-left">
            <p>
              © 2026. Louisiane Aurora Psicologia e RH. Todos os direitos reservados.<br />
              CNPJ: 59.745.937/0001-39 • Poços de Caldas, MG<br />
              Em conformidade com a LGPD e Código de Ética do Conselho Federal de Psicologia
            </p>
            <div className="flex gap-8">
              <button onClick={() => navigateTo('termos')} className="hover:text-primary transition-colors uppercase">Termos de Uso</button>
              <button onClick={() => navigateTo('privacidade')} className="hover:text-primary transition-colors uppercase">Privacidade</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;