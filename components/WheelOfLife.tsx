
import React, { useState } from 'react';
import { ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';

const questions = [
    { id: 1, category: "Saúde", question: "Como você avalia seu nível de energia e vitalidade física no dia a dia?" },
    { id: 2, category: "Intelectual", question: "O quanto você se dedica a aprender coisas novas e expandir sua mente?" },
    { id: 3, category: "Emocional", question: "Como está sua capacidade de lidar com estresse e regular suas emoções?" },
    { id: 4, category: "Carreira", question: "Qual seu nível de satisfação e realização com seu trabalho atual?" },
    { id: 5, category: "Finanças", question: "Como você se sente em relação à sua segurança e liberdade financeira?" },
    { id: 6, category: "Propósito", question: "O quanto você sente que suas ações diárias estão alinhadas aos seus valores?" },
    { id: 7, category: "Família", question: "Qual a qualidade do seu tempo e conexão com seus familiares?" },
    { id: 8, category: "Romance", question: "Como você avalia a profundidade e satisfação em sua vida afetiva?" },
    { id: 9, category: "Social", question: "Como está a qualidade das suas amizades e sua vida em comunidade?" },
    { id: 10, category: "Lazer", question: "O quanto você consegue se desconectar e desfrutar de momentos de lazer?" }
];

const WheelOfLife: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [scores, setScores] = useState<number[]>(new Array(questions.length).fill(0));
    const [isFinished, setIsFinished] = useState(false);

    const handleScore = (score: number) => {
        const newScores = [...scores];
        newScores[currentStep] = score;
        setScores(newScores);

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsFinished(true);
        }
    };

    const resetQuiz = () => {
        setCurrentStep(0);
        setScores(new Array(questions.length).fill(0));
        setIsFinished(false);
    };

    // Radar Chart calculation
    const size = 350;
    const center = size / 2;
    const radius = size * 0.35;
    const totalSides = questions.length;

    const points = scores.map((score, i) => {
        const angle = (Math.PI * 2 * i) / totalSides - Math.PI / 2;
        const r = (radius * score) / 10;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return `${x},${y}`;
    }).join(' ');

    const gridLevels = [2, 4, 6, 8, 10];

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-primary/5">
            <div className="md:flex h-full">
                {/* Left Side: Interaction */}
                <div className="md:w-1/2 p-8 md:p-12 border-b md:border-b-0 md:border-r border-secondary flex flex-col justify-center min-h-[450px]">
                    {!isFinished ? (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary">Questão {currentStep + 1} de 10</span>
                                <span className="text-dark/20 font-serif italic">{questions[currentStep].category}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif text-dark leading-tight">
                                {questions[currentStep].question}
                            </h3>
                            <div className="grid grid-cols-5 gap-3">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                                    <button
                                        key={n}
                                        onClick={() => handleScore(n)}
                                        className="h-10 w-full rounded-lg border border-primary/20 text-dark hover:bg-primary hover:text-white transition-all text-sm font-medium"
                                    >
                                        {n}
                                    </button>
                                ))}
                            </div>
                            <p className="text-[10px] text-dark/40 uppercase tracking-widest text-center">
                                1: Insatisfeita — 10: Plenamente Satisfeita
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="text-3xl font-serif text-dark leading-tight">
                                Seu Diagnóstico <br /><span className="italic text-primary">está pronto.</span>
                            </h3>
                            <p className="text-dark/70 text-sm leading-relaxed">
                                Este gráfico representa o equilíbrio atual da sua vida. Áreas com menor pontuação indicam onde sua energia está sendo drenada ou negligenciada.
                            </p>
                            <div className="flex flex-col gap-4">
                                <a
                                    href="https://wa.me/35910016852"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-dark text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-dark/90 transition-all flex items-center justify-center group"
                                >
                                    Agendar Sessão de Clareza <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                                </a>
                                <button
                                    onClick={resetQuiz}
                                    className="text-dark/40 hover:text-primary transition-colors text-[10px] uppercase font-bold tracking-widest flex items-center justify-center gap-2"
                                >
                                    <RotateCcw size={14} /> Refazer Teste
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Side: Visual representation */}
                <div className="md:w-1/2 bg-secondary/30 p-8 flex items-center justify-center relative overflow-hidden h-[450px]">
                    <div className="relative z-10 w-full max-w-[350px]">
                        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full drop-shadow-2xl overflow-visible">
                            {/* Grid Lines */}
                            {gridLevels.map(level => (
                                <polygon
                                    key={level}
                                    points={questions.map((_, i) => {
                                        const angle = (Math.PI * 2 * i) / totalSides - Math.PI / 2;
                                        const r = (radius * level) / 10;
                                        return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
                                    }).join(' ')}
                                    className="fill-none stroke-dark/10 stroke-[1]"
                                />
                            ))}

                            {/* Spokes */}
                            {questions.map((_, i) => {
                                const angle = (Math.PI * 2 * i) / totalSides - Math.PI / 2;
                                return (
                                    <line
                                        key={i}
                                        x1={center}
                                        y1={center}
                                        x2={center + radius * Math.cos(angle)}
                                        y2={center + radius * Math.sin(angle)}
                                        className="stroke-dark/10 stroke-[1]"
                                    />
                                );
                            })}

                            {/* Data Area */}
                            <polygon
                                points={points}
                                className="fill-dark/40 stroke-dark stroke-[2.5] transition-all duration-500 ease-out"
                            />

                            {/* Labels */}
                            {questions.map((q, i) => {
                                const angle = (Math.PI * 2 * i) / totalSides - Math.PI / 2;
                                const r = radius + 35;
                                const x = center + r * Math.cos(angle);
                                const y = center + r * Math.sin(angle);
                                const isActive = isFinished || i === currentStep;

                                return (
                                    <text
                                        key={i}
                                        x={x}
                                        y={y}
                                        fontSize="11px"
                                        fontWeight="bold"
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        className={`fill-dark transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-20'}`}
                                    >
                                        {q.category}
                                    </text>
                                );
                            })}
                        </svg>
                    </div>

                    {/* Decorative background for the chart */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

export default WheelOfLife;
