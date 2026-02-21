
import React from 'react';
import { ArrowLeft, Shield, FileText } from 'lucide-react';

interface LegalPageProps {
    type: 'termos' | 'privacidade';
    onBack: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ type, onBack }) => {
    const isPrivacy = type === 'privacidade';

    return (
        <div className="bg-secondary min-h-screen py-12 px-4 sm:px-6 lg:px-8 animation-fade-in">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

                {/* Header */}
                <div className="bg-dark text-white p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        {isPrivacy ? <Shield size={200} /> : <FileText size={200} />}
                    </div>

                    <button
                        onClick={onBack}
                        className="flex items-center text-white/70 hover:text-primary transition-colors mb-6 group"
                    >
                        <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Voltar para o início
                    </button>

                    <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 relative z-10">
                        {isPrivacy ? 'Política de Privacidade' : 'Termos de Uso'}
                    </h1>
                    <p className="text-white/60 max-w-2xl relative z-10">
                        {isPrivacy
                            ? 'Nós valorizamos sua privacidade e estamos comprometidos em proteger seus dados pessoais.'
                            : 'As regras e diretrizes para o uso dos nossos serviços e plataforma.'}
                    </p>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 text-dark/80 leading-relaxed space-y-8">

                    {isPrivacy ? (
                        <>
                            <section>
                                <h2 className="text-xl font-bold text-dark mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</span>
                                    Introdução
                                </h2>
                                <p>
                                    A Louisiane Aurora Psicologia & RH está comprometida em proteger a privacidade e os dados pessoais de seus usuários ("você").
                                    Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-dark mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
                                    Coleta de Dados
                                </h2>
                                <p className="mb-2">Coletamos os seguintes tipos de informações:</p>
                                <ul className="list-disc pl-14 space-y-1">
                                    <li><strong>Dados Pessoais:</strong> Nome, e-mail, telefone e outras informações fornecidas voluntariamente através de formulários de contato ou agendamento.</li>
                                    <li><strong>Dados de Navegação:</strong> Informações sobre como você interage com nosso site, endereço IP, tipo de navegador e páginas visitadas (via cookies).</li>
                                    <li><strong>Dados Sensíveis:</strong> No contexto clínico, dados de saúde são tratados com sigilo, conforme exigido pelo Conselho Federal de Psicologia.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-dark mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">3</span>
                                    Uso das Informações
                                </h2>
                                <p className="mb-2">Utilizamos seus dados para:</p>
                                <ul className="list-disc pl-14 space-y-1">
                                    <li>Prestar serviços de psicologia clínica e consultoria de RH.</li>
                                    <li>Entrar em contato para agendamentos e respostas a dúvidas.</li>
                                    <li>Melhorar a experiência do usuário em nosso site.</li>
                                    <li>Cumprir obrigações legais e regulatórias.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-dark mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">4</span>
                                    Segurança dos Dados
                                </h2>
                                <p>
                                    Adotamos medidas técnicas e administrativas adequadas para proteger seus dados pessoais contra acesso não autorizado, perda, alteração ou divulgação.
                                    Todos os dados clínicos são armazenados e tratados com rigoroso sigilo ético e profissional.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-dark mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">5</span>
                                    Seus Direitos (LGPD)
                                </h2>
                                <p className="mb-2">Você tem direito a:</p>
                                <ul className="list-disc pl-14 space-y-1">
                                    <li>Confirmar a existência de tratamento de dados.</li>
                                    <li>Acessar seus dados.</li>
                                    <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                                    <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
                                    <li>Revogar o consentimento a qualquer momento.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-dark mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">6</span>
                                    Contato
                                </h2>
                                <p>
                                    Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato conosco através do e-mail: <a href="mailto:contato@aurorapsc.com.br" className="text-primary font-bold hover:underline">contato@aurorapsc.com.br</a>.
                                </p>
                            </section>
                        </>
                    ) : (
                        <>
                            <section>
                                <h2 className="text-xl font-bold text-dark mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</span>
                                    Aceitação dos Termos
                                </h2>
                                <p>
                                    Ao acessar e utilizar o site da Louisiane Aurora Psicologia & RH, você concorda em cumprir e vincular-se aos seguintes Termos de Uso.
                                    Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site ou serviços.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-dark mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
                                    Serviços Oferecidos
                                </h2>
                                <p>
                                    Este site tem caráter informativo sobre os serviços de Psicologia Clínica, Saúde Mental Corporativa e Consultoria de RH prestados pela profissional Louisiane Aurora e sua equipe.
                                    O conteúdo disponibilizado não substitui o aconselhamento profissional, diagnóstico ou tratamento psicológico presencial ou online formal.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-dark mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">3</span>
                                    Uso do Site
                                </h2>
                                <p className="mb-2">Você concorda em usar o site apenas para fins legais e de maneira que não infrinja os direitos de terceiros ou restrinja o uso e aproveitamento do site por qualquer outra pessoa. É proibido:</p>
                                <ul className="list-disc pl-14 space-y-1">
                                    <li>Utilizar o site para transmitir material ilícito, difamatório, ofensivo ou fraudulento.</li>
                                    <li>Tentar obter acesso não autorizado aos nossos sistemas.</li>
                                    <li>Copiar ou reproduzir conteúdo (textos, imagens, logos) sem autorização prévia por escrito, respeitando os direitos de propriedade intelectual.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-dark mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">4</span>
                                    Responsabilidade
                                </h2>
                                <p>
                                    Embora nos esforcemos para manter as informações do site precisas e atualizadas, não garantimos a exatidão, integridade ou atualidade do conteúdo.
                                    Não nos responsabilizamos por quaisquer danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso deste site.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-dark mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">5</span>
                                    Alterações
                                </h2>
                                <p>
                                    Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site.
                                    O uso continuado do site após as alterações constitui aceitação dos novos termos.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-dark mb-3 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">6</span>
                                    Foro
                                </h2>
                                <p>
                                    Fica eleito o foro da comarca de atuação da empresa para dirimir quaisquer dúvidas ou litígios oriundos destes Termos de Uso.
                                </p>
                            </section>
                        </>
                    )}

                    <div className="pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
                        <p>Última atualização: Fevereiro de 2026</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
