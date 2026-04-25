
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
              className="flex items-center cursor-pointer group shrink-0"
              onClick={() => navigateTo('home')}
            >
              <div className="relative">
                <div className="w-10 h-10 flex items-center justify-center p-1 group-hover:scale-105 transition-all overflow-hidden rounded-full border border-primary/5">
                  <img src="logo.png" alt="Logo Louisiane Aurora" className="w-full h-full object-contain mix-blend-multiply" onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) target.parentElement.innerText = 'L';
                  }} />
                </div>
              </div>
              <div className="ml-3 hidden lg:block whitespace-nowrap shrink-0">
                <span className="text-lg lg:text-lg font-serif font-bold text-dark tracking-tight block leading-none">Louisiane Aurora Psicologia & RH</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center flex-1 justify-center ml-2 lg:ml-6 space-x-3 lg:space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id as Page)}
                  className={`text-[15px] transition-all whitespace-nowrap cursor-pointer hover:text-primary hover:drop-shadow-md hover:-translate-y-0.5 hover:underline decoration-2 underline-offset-8 ${currentPage === item.id ? 'text-primary font-bold' : 'text-dark/80 font-bold'
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
                className="bg-dark text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-dark/90 transition-all shadow-xl shadow-dark/10 flex items-center gap-2 group whitespace-nowrap"
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

      {/* Social Links Bar */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-dark mb-8">Conheça minhas redes sociais</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.instagram.com/louisi.aurora/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-dark/10 flex items-center gap-3 text-dark hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm group" title="Instagram Clínica">
              <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm">Instagram Clínica</span>
            </a>
            <a href="https://www.instagram.com/louisiaurora.psinr1/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-dark/10 flex items-center gap-3 text-dark hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm group" title="Instagram Corporativo">
              <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm">Instagram Corporativo</span>
            </a>
            <a href="https://www.linkedin.com/in/louisiane-aurora-0a6514b6/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-dark/10 flex items-center gap-3 text-dark hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm group" title="LinkedIn">
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm">LinkedIn</span>
            </a>
            <a href="https://www.tiktok.com/@louisi.aurora?_r=1&_t=ZS-93ol6fHLMMK" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-dark/10 flex items-center gap-3 text-dark hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm group" title="TikTok">
              <Music size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm">TikTok</span>
            </a>
            <a href="https://wa.me/35910016852" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-dark/10 flex items-center gap-3 text-dark hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm group" title="WhatsApp">
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm">WhatsApp</span>
            </a>
            <a href="mailto:contato@aurorapsc.com.br" className="px-6 py-3 rounded-full border border-dark/10 flex items-center gap-3 text-dark hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm group" title="E-mail">
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm">E-mail</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
                  <img src="logo-principal-branco.png" alt="Logo Louisiane Aurora" className="w-full h-full object-contain" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-serif font-bold text-white">Louisiane Aurora Psicologia & RH</h3>
                </div>
              </div>
              <p className="text-secondary/60 max-w-sm leading-relaxed mb-6 text-sm italic">
                Transformando a complexidade das relações em fluxo de relações e trabalhos saudáveis. Apoio especializado para empresas e pessoas que buscam equilíbrio e resultados reais.
              </p>
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
              <img src="logo-principal-branco.png" alt="Louisiane Aurora Logo" className="w-56 h-auto transition-opacity" />
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-secondary/70 text-center md:text-left">
            <div className="space-y-1">
              <p className="font-medium">
                &copy; {new Date().getFullYear()} Louisiane Aurora Psicologia & RH. Todos os direitos reservados.
              </p>
              <p className="text-xs text-secondary/50">
                CNPJ: 59.745.937/0001-39 &bull; Poços de Caldas, MG
              </p>
            </div>
            <div className="flex gap-6 text-xs font-medium">
              <button onClick={() => navigateTo('termos')} className="hover:text-white transition-colors">Termos de Uso</button>
              <button onClick={() => navigateTo('privacidade')} className="hover:text-white transition-colors">Política de Privacidade</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;