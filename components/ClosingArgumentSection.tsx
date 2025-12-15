import React from 'react';
import { TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

const ClosingArgumentSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#0d0d0d] text-white overflow-hidden border-t border-white/5">
        
        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">

            {/* Main Header */}
            <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-5xl font-black text-brand-accent mb-6 uppercase leading-tight tracking-tight">
                    Não é só sobre ter técnica.<br className="hidden md:block" /> É sobre sobrevivência no mercado.
                </h2>
                <div className="h-1 w-32 bg-brand-accent/50 mx-auto mt-8 rounded-full"></div>
            </div>

            {/* SECTION 15: LOGIC */}
            <div className="mb-16">
                
                {/* Fato Block - Highlight Box */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-[#151515] border border-brand-accent/20 rounded-2xl p-8 md:p-10 text-center shadow-[0_0_30px_-10px_rgba(212,175,55,0.1)] relative overflow-hidden">
                        {/* Decorative sheen */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl translate-x-10 -translate-y-10"></div>
                        
                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-brand-accent/10 mb-6 mx-auto">
                            <TrendingUp className="w-8 h-8 text-brand-accent" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium text-zinc-100 leading-relaxed">
                            <span className="text-brand-accent font-bold uppercase tracking-widest text-sm block mb-4">Fato</span>
                            "O mercado está cheio de profissionais medianos ganhando muito dinheiro porque sabem vender, enquanto especialistas incríveis (como você) lutam para pagar as contas. O Manual de Sobrevivência veio para equilibrar esse jogo."
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Fact 1 */}
                    <div className="bg-[#111] border border-white/5 p-8 rounded-2xl hover:border-brand-accent/30 transition-all duration-300 hover:-translate-y-2 text-center group h-full flex flex-col items-center justify-start">
                         <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                            <TrendingUp className="w-8 h-8" />
                         </div>
                         <h4 className="font-bold text-xl mb-4 text-white">A Realidade</h4>
                         <p className="text-zinc-400 leading-relaxed">
                            Habilidade de vendas supera competência técnica como o <span className="text-white font-bold block mt-1">fator nº 1 para o sucesso</span> de profissionais.
                         </p>
                    </div>

                    {/* Fact 2 */}
                    <div className="bg-[#111] border border-white/5 p-8 rounded-2xl hover:border-red-500/30 transition-all duration-300 hover:-translate-y-2 text-center group h-full flex flex-col items-center justify-start">
                         <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(239,68,68,0.15)]">
                            <AlertTriangle className="w-8 h-8" />
                         </div>
                         <h4 className="font-bold text-xl mb-4 text-white">Risco Real</h4>
                         <p className="text-zinc-400 leading-relaxed">
                            Profissionais que não sabem vender <span className="text-white font-bold block mt-1">ficam travados e desistem</span>.
                         </p>
                    </div>

                    {/* Fact 3 */}
                    <div className="bg-[#111] border border-white/5 p-8 rounded-2xl hover:border-green-500/30 transition-all duration-300 hover:-translate-y-2 text-center group h-full flex flex-col items-center justify-start">
                         <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                            <CheckCircle2 className="w-8 h-8" />
                         </div>
                         <h4 className="font-bold text-xl mb-4 text-white">Validação</h4>
                         <p className="text-zinc-400 leading-relaxed">
                            O primeiro cliente é o passo mais importante: ele <span className="text-white font-bold block mt-1">valida sua profissão</span>.
                         </p>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
                 <Button 
                    className="w-full md:w-auto px-12 py-6 text-xl shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
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