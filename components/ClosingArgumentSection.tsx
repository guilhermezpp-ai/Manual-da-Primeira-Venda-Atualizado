import React from 'react';
import { TrendingUp, AlertTriangle, CheckCircle2, XCircle, Heart, Star, Banknote, Map, AlertCircle, Shield, Award, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';

const ClosingArgumentSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#0d0d0d] text-white overflow-hidden border-t border-white/5">
        
        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">

            {/* Main Header */}
            <div className="text-center mb-20 animate-fade-in">
                <h2 className="text-3xl md:text-5xl font-black text-brand-accent mb-6 uppercase leading-tight tracking-tight">
                    Não é só sobre ter técnica.<br className="hidden md:block" /> É sobre sobrevivência no mercado.
                </h2>
                <div className="h-1 w-32 bg-brand-accent/50 mx-auto mt-8 rounded-full"></div>
            </div>

            {/* SECTION 15: LOGIC */}
            <div className="mb-24">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-brand-accent/10 mb-6">
                        <TrendingUp className="w-8 h-8 text-brand-accent" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-zinc-100 leading-relaxed">
                        <strong className="text-brand-accent">Fato:</strong> O mercado está cheio de profissionais medianos ganhando muito dinheiro porque sabem vender, enquanto especialistas incríveis (como você) lutam para pagar as contas. O Manual de Sobrevivência veio para equilibrar esse jogo.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Fact 1 */}
                    <div className="bg-[#151515] border border-white/10 p-8 rounded-2xl hover:border-brand-accent/30 transition-all duration-300 hover:-translate-y-2 text-center group">
                         <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-accent group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-8 h-8" />
                         </div>
                         <h4 className="font-bold text-xl mb-3 text-white">A Realidade</h4>
                         <p className="text-zinc-400">
                            Habilidade de vendas supera competência técnica como o <span className="text-white font-bold">fator nº 1 para o sucesso</span> de profissionais.
                         </p>
                    </div>

                    {/* Fact 2 */}
                    <div className="bg-[#151515] border border-white/10 p-8 rounded-2xl hover:border-brand-accent/30 transition-all duration-300 hover:-translate-y-2 text-center group">
                         <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500 group-hover:scale-110 transition-transform">
                            <AlertTriangle className="w-8 h-8" />
                         </div>
                         <h4 className="font-bold text-xl mb-3 text-white">Risco Real</h4>
                         <p className="text-zinc-400">
                            Profissionais que não sabem vender <span className="text-white font-bold">ficam travados e desistem</span>.
                         </p>
                    </div>

                    {/* Fact 3 */}
                    <div className="bg-[#151515] border border-white/10 p-8 rounded-2xl hover:border-brand-accent/30 transition-all duration-300 hover:-translate-y-2 text-center group">
                         <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="w-8 h-8" />
                         </div>
                         <h4 className="font-bold text-xl mb-3 text-white">Validação</h4>
                         <p className="text-zinc-400">
                            O primeiro cliente é o passo mais importante: ele <span className="text-white font-bold">valida sua profissão</span>.
                         </p>
                    </div>
                </div>
            </div>

            {/* SECTION 16: EMOTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-24">
                
                {/* DORES */}
                <div className="relative p-8 md:p-10 rounded-3xl bg-[#111] border border-white/5 flex flex-col justify-center">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/80 to-transparent"></div>
                    <h3 className="text-2xl font-bold text-zinc-300 mb-8 flex items-center gap-3">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                        O Que Você Sente Hoje
                    </h3>
                    <ul className="space-y-4 md:space-y-5">
                        <li className="flex items-start gap-4">
                            <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-400 text-base md:text-lg">Vergonha de cobrar pelo meu atendimento.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-400 text-base md:text-lg">Estuda muito mas continua sem cliente.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-400 text-base md:text-lg">Me sinto um impostor por ainda não ter atendido ninguém.</span>
                        </li>
                         <li className="flex items-start gap-4">
                            <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-400 text-base md:text-lg">Não consegue explicar o que faz sem enrolar.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-400 text-base md:text-lg">Não sabe onde encontrar pessoas que queiram comprar.</span>
                        </li>
                         <li className="flex items-start gap-4">
                            <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-400 text-base md:text-lg">Sinto vergonha de vender.</span>
                        </li>
                         <li className="flex items-start gap-4">
                            <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-400 text-base md:text-lg">Não se sente pronto para vender.</span>
                        </li>
                    </ul>
                </div>

                {/* DESEJOS */}
                <div className="relative p-8 md:p-10 rounded-3xl bg-[#151515] border border-brand-accent/40 shadow-[0_0_40px_-10px_rgba(212,175,55,0.1)] flex flex-col justify-center transform lg:scale-105 z-10">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
                    <h3 className="text-2xl font-bold text-brand-accent mb-8 flex items-center gap-3">
                        <Star className="w-6 h-6 fill-brand-accent" />
                        O Seu Futuro Com O Manual
                    </h3>
                    <ul className="space-y-4 md:space-y-5">
                        <li className="flex items-start gap-4">
                            <Banknote className="w-5 h-5 md:w-6 md:h-6 text-brand-accent flex-shrink-0 mt-0.5" />
                            <span className="text-white text-base md:text-lg font-medium">Receber dinheiro pelo seu serviço pela primeira vez.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-brand-accent flex-shrink-0 mt-0.5" />
                            <span className="text-white text-base md:text-lg font-medium">Sentir que é possível viver da sua profissão.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <Shield className="w-5 h-5 md:w-6 md:h-6 text-brand-accent flex-shrink-0 mt-0.5" />
                            <span className="text-white text-base md:text-lg font-medium">Ter mais segurança para não voltar para um emprego que não gosta.</span>
                        </li>
                         <li className="flex items-start gap-4">
                            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-accent flex-shrink-0 mt-0.5" />
                            <span className="text-white text-base md:text-lg font-medium">Fazer a primeira venda e ver que "isso funciona mesmo".</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <Heart className="w-5 h-5 md:w-6 md:h-6 text-brand-accent flex-shrink-0 mt-0.5" />
                            <span className="text-white text-base md:text-lg font-medium">Ficar animado para contar à família que conseguiu um cliente.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <Star className="w-5 h-5 md:w-6 md:h-6 text-brand-accent flex-shrink-0 mt-0.5" />
                            <span className="text-white text-base md:text-lg font-medium">Receber um elogio sincero de um cliente grato.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <Award className="w-5 h-5 md:w-6 md:h-6 text-brand-accent flex-shrink-0 mt-0.5" />
                            <span className="text-white text-base md:text-lg font-medium">Sentir-se respeitado nas conversas sobre seu serviço.</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Final CTA */}
            <div className="mt-20 text-center">
                 <Button 
                    className="w-full md:w-auto px-10 py-6 text-xl shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)]"
                    href="#oferta"
                 >
                    QUERO DAR O PRIMEIRO PASSO
                 </Button>
            </div>

        </div>
    </section>
  );
};

export default ClosingArgumentSection;