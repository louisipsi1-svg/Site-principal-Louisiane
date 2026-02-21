
import React from 'react';
import { Compass, UserCheck, BarChart, Target, ArrowRight, Briefcase, GraduationCap, Microscope } from 'lucide-react';

const CarreiraPage: React.FC = () => {
    const careerMoments = [
        {
            title: "Primeira Escolha",
            desc: "Orientação vocacional para estudantes e jovens profissionais que buscam segurança na largada da carreira.",
            icon: <GraduationCap className="text-primary" size={24} />
        },
        {
            title: "Transição de Carreira",
            desc: "Suporte estratégico para quem busca mudar de rota com planejamento, coragem e embasamento técnico.",
            icon: <Briefcase className="text-primary" size={24} />
        },
        {
            title: "Pós-Carreira & Aposentadoria",
            desc: "Planejamento para a transição para a aposentadoria, ressignificando o tempo e novos projetos de vida.",
            icon: <Compass className="text-primary" size={24} />
        }
    ];

    const steps = [
        {
            title: "Identidade e Propósito",
            desc: "Muito além do currículo, investigamos os seus valores centrais. O objetivo é alinhar a sua carreira à sua essência, transformando o trabalho num espaço de satisfação e sentido, em vez de apenas esforço.",
            icon: <Target className="text-primary" size={24} />
        },
        {
            title: "O Mapa da sua Essência",
            desc: "Através do Big Five, compreendemos as suas tendências naturais e como lida com desafios. É um mergulho para entender quem é você por trás das expectativas externas, trazendo clareza sobre o seu modo único de estar no mundo.",
            icon: <Microscope className="text-primary" size={24} />
        },
        {
            title: "Escolhas com Respeito",
            desc: "Decidir um novo caminho exige respeitar os seus limites. Planeamos transições que garantam autonomia e paz mental, permitindo que caminhe com segurança, no seu tempo e com base na sua estrutura emocional real.",
            icon: <Briefcase className="text-primary" size={24} />
        }
    ];

    return (
        <div className="flex flex-col py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="order-2 md:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
                            <Compass size={12} /> Carreira & Autoconhecimento
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif text-dark mb-8 leading-tight">
                            Sua carreira deve ser o reflexo de <span className="italic">quem você realmente é.</span>
                        </h1>
                        <p className="text-lg text-dark/70 mb-10 leading-relaxed max-w-xl">
                            Unir orientação profissional e análise de personalidade não é apenas sobre encontrar um novo cargo, mas sobre alinhar sua <span className="text-dark font-bold underline decoration-primary/30">trajetória profissional à sua essência</span>. Uso ferramentas científicas para decifrar seus padrões de comportamento e potencializar suas escolhas em cada transição da vida.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/35910016852"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-dark text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-dark/90 transition-all flex items-center justify-center shadow-2xl shadow-dark/30 group"
                            >
                                Agendar Análise de Perfil <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 relative flex justify-center">
                        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px]">
                            <img
                                src="/b5.png"
                                alt="Louisiane Aurora - Consultoria de Carreira"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>

                {/* Career Moments Section */}
                <section className="mb-32">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-serif text-dark mb-6">Em qual momento você está?</h2>
                        <p className="text-dark/60 italic text-sm leading-relaxed">
                            A orientação profissional oferece o suporte necessário para que cada decisão de carreira seja tomada com clareza e segurança técnica.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        {careerMoments.map((moment, i) => (
                            <div key={i} className="group bg-secondary/30 p-10 rounded-[2.5rem] border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl relative overflow-hidden">
                                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white mb-8 group-hover:bg-primary/10 transition-colors">
                                    {moment.icon}
                                </div>
                                <h3 className="text-2xl font-serif text-dark mb-6">{moment.title}</h3>
                                <p className="text-dark/60 text-sm leading-relaxed">{moment.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Methodology Section */}
                <section className="mb-32">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-serif text-dark mb-6">Análise Avançada de Personalidade</h2>
                        <p className="text-dark/60 italic text-sm leading-relaxed">
                            Só quem se conhece pode aproveitar todo o seu potencial.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        {steps.map((step, i) => (
                            <div key={i} className="group bg-white p-12 rounded-[2.5rem] border border-primary/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl relative overflow-hidden">
                                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/50 mb-8 group-hover:bg-primary/10 transition-colors">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-serif text-dark mb-6">{step.title}</h3>
                                <p className="text-dark/60 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Big Five Highlight */}
                <div className="bg-dark text-secondary p-12 md:p-24 rounded-[3.5rem] overflow-hidden relative shadow-3xl">
                    <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="w-12 h-1 bg-primary mb-8"></div>
                            <h2 className="text-4xl font-serif mb-8 italic leading-tight">Análise de Personalidade <br /> <span className="text-primary not-italic">Modelo Big Five.</span></h2>
                            <p className="text-secondary/70 text-lg mb-10 leading-relaxed italic">
                                O inventário de personalidade mais validado do mundo para trazer dados concretos sobre sua forma de interagir, organizar e decidir.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { label: "Abertura para Experiência", color: "bg-blue-400" },
                                    { label: "Conscienciosidade", color: "bg-green-400" },
                                    { label: "Extroversão", color: "bg-yellow-400" },
                                    { label: "Amabilidade", color: "bg-pink-400" },
                                    { label: "Neuroticismo (Estabilidade)", color: "bg-purple-400" }
                                ].map((trait, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className={`w-2 h-2 rounded-full ${trait.color}`}></div>
                                        <span className="text-sm font-medium tracking-wide uppercase text-secondary/80">{trait.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-6">Por que fazer?</h4>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1"><UserCheck size={18} className="text-primary" /></div>
                                    <p className="text-sm text-secondary/70 leading-relaxed">Entenda por que certas tarefas parecem drenar sua energia enquanto outras te motivam.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1"><GraduationCap size={18} className="text-primary" /></div>
                                    <p className="text-sm text-secondary/70 leading-relaxed">Identifique os ambientes de trabalho onde seu perfil tem mais chances de prosperar.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1"><Target size={18} className="text-primary" /></div>
                                    <p className="text-sm text-secondary/70 leading-relaxed">Construa um plano de desenvolvimento baseado em tendências reais, não em ideais inalcançáveis.</p>
                                </li>
                            </ul>
                            <div className="mt-10">
                                <a
                                    href="https://wa.me/35910016852"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-xl flex items-center justify-center gap-3 hover:bg-primary/90 transition-all"
                                >
                                    Solicitar Avaliação Completa
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -ml-48 -mb-48"></div>
                </div>
            </div>
        </div>
    );
};

export default CarreiraPage;
