import React from 'react';
import { Check, Smartphone, Users, Zap, Lock, ShieldCheck, Gift, X, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

const ProductOfferSection: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "100% Online",
      desc: "Vídeos curtos e diretos para assistir onde quiser."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Acesso Imediato",
      desc: "Plataforma simples e intuitiva (Hotmart)."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunidade VIP",
      desc: "Networking com outros alunos."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Suporte Direto",
      desc: "Tire dúvidas via comunidade no WhatsApp."
    }
  ];

  const mainDeliverable = "Acesso completo ao curso 'O Manual da Primeira Venda'";
  
  const bonusDeliverables = [
    {
      text: "Templates de mensagens e scripts de abordagem",
      value: "R$ 97,00"
    },
    {
      text: "Sessão de Orientação Estratégica de Coaching",
      value: "R$ 497,00"
    },
    {
      text: "Acesso à comunidade de alunos no WhatsApp",
      value: "R$ 197,00"
    },
    {
      text: "Atualizações futuras do conteúdo",
      value: "Inestimável"
    }
  ];

  const comparisonData = [
    {
      with: "Tem um método simples e testado",
      without: "Fica perdido sem saber por onde começar"
    },
    {
      with: "Aprende a vender com leveza",
      without: "Continua achando que vender é empurrar"
    },
    {
      with: "Faz a primeira venda em 7 dias",
      without: "Passa meses estudando sem cliente"
    },
    {
      with: "Ganha confiança e clareza",
      without: "Sente que talvez \"isso não seja pra você\""
    }
  ];

  return (
    <section id="oferta" className="relative w-full py-20 md:py-32 bg-[#050505] text-white overflow-hidden scroll-mt-10">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#050505] to-[#0d0d0d]" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
        
        {/* 1. PRODUCT FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-brand-accent/30 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* 2. DELIVERABLES STACK (Left Side) */}
          <div className="flex flex-col gap-8">
             <div>
                <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-2 block">O que você leva</span>
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  Tudo o que você precisa para <span className="text-brand-accent">destravar.</span>
                </h2>
                <p className="text-zinc-400 text-lg mb-8">
                  Não é apenas um curso, é uma caixa de ferramentas completa para você conquistar seu primeiro cliente em até 7 dias.
                </p>
             </div>

             <div className="bg-[#111] rounded-2xl p-6 border border-white/10 relative overflow-hidden">
                {/* Decorative sheen */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl translate-x-10 -translate-y-10"></div>
                
                <h3 className="flex items-center gap-2 font-bold text-xl mb-6 pb-4 border-b border-white/10">
                  <Gift className="w-5 h-5 text-brand-accent" />
                  Você recebe:
                </h3>
                
                <ul className="space-y-6">
                  {/* Main Product */}
                  <li className="flex items-start gap-3 text-white font-semibold">
                    <Check className="w-5 h-5 text-brand-accent flex-shrink-0 mt-1" />
                    <span className="text-lg">{mainDeliverable}</span>
                  </li>

                  {/* Bonus Anchor */}
                  <li className="pt-2 pb-0">
                    <span className="inline-block bg-brand-accent/20 text-brand-accent text-xs font-black px-3 py-1 rounded md:rounded-full uppercase tracking-widest border border-brand-accent/20">
                      BÔNUS EXCLUSIVOS:
                    </span>
                  </li>

                  {/* Bonus Items with Value Anchoring */}
                  {bonusDeliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-300">
                      <Check className="w-5 h-5 text-brand-accent/70 flex-shrink-0 mt-1" />
                      <div className="flex flex-col">
                        <span className="font-medium text-white">{item.text}</span>
                        <span className="text-xs uppercase tracking-wide mt-1">
                           <span className="text-zinc-500">Valor individual: </span>
                           <span className="text-brand-accent font-bold">{item.value}</span>
                           <span className="ml-2 px-2 py-0.5 rounded bg-white/10 text-white text-[10px] font-bold">GRÁTIS HOJE</span>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
             </div>
          </div>

          {/* 3. PRICING CARD (Right Side) */}
          <div className="relative">
            {/* Glow Effect behind card */}
            <div className="absolute inset-0 bg-brand-accent/20 blur-[60px] rounded-full transform scale-90"></div>
            
            <div className="relative bg-[#161616] border border-brand-accent/30 rounded-3xl p-8 md:p-10 text-center shadow-2xl">
              
              {/* Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-accent text-black font-black text-sm py-2 px-6 rounded-full uppercase tracking-wider shadow-lg shadow-brand-accent/20 whitespace-nowrap">
                Oferta Especial de Lançamento
              </div>

              {/* Total Value Anchor */}
              <div className="mt-8 mb-4">
                  <span className="block text-zinc-500 text-sm uppercase tracking-widest mb-1">Valor Total das entregas</span>
                  <span className="text-zinc-400 font-bold text-xl line-through decoration-red-500/50 decoration-2">
                    R$ 988,00
                  </span>
              </div>
              
              <div className="mb-6 bg-black/30 rounded-xl p-4 border border-white/5">
                <div className="text-zinc-500 text-sm mb-1">Somente hoje por:</div>
                <div className="text-6xl md:text-7xl font-black text-white tracking-tighter">
                  <span className="text-2xl align-top opacity-60 font-medium mr-1">R$</span>
                  47
                  <span className="text-2xl align-top opacity-60 font-medium ml-1">,97</span>
                </div>
                <div className="text-brand-accent font-medium mt-2">
                  ou apenas 6x de R$ 9,00
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

              <Button 
                fullWidth 
                className="py-6 text-xl shadow-[0_0_20px_rgba(212,175,55,0.4)] animate-pulse hover:animate-none"
                href="https://pay.hotmart.com/T99113739F?checkoutMode=10"
              >
                SIM! Quero Destravar Minha Venda
              </Button>

              <p className="mt-4 text-xs text-zinc-500 flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" /> Pagamento 100% Seguro via Hotmart
              </p>
            </div>
          </div>
        </div>

        {/* 4. GUARANTEE SECTION */}
        <div className="mt-24 max-w-4xl mx-auto bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-2xl p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center gap-8 md:gap-12">
           <div className="flex-shrink-0">
              <ShieldCheck className="w-32 h-32 text-brand-accent stroke-[1.5] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
           </div>
           <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Garantia Incondicional de <span className="text-brand-accent">30 Dias</span>
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                O risco é todo meu. Inscreva-se, assista às aulas e aplique o método. Se em 30 dias você sentir que este curso não é para você, é só pedir o reembolso. Sem perguntas, sem letras miúdas.
              </p>
              <div className="inline-block border-b border-brand-accent/30 pb-1 text-sm text-brand-accent uppercase tracking-widest font-bold">
                Seu investimento está protegido
              </div>
           </div>
        </div>

        {/* 5. COMPARISON SECTION (MOVED) */}
        <div className="mt-24 max-w-4xl mx-auto">
            <div className="bg-[#111] rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl">
              
              {/* WITHOUT Column */}
              <div className="flex-1 p-8 md:p-10 bg-gradient-to-b from-[#111] to-red-950/10 border-b md:border-b-0 md:border-r border-white/5">
                  <h4 className="text-xl font-bold text-zinc-400 mb-8 text-center uppercase tracking-wider flex items-center justify-center gap-2">
                    <X className="w-6 h-6 text-red-600" />
                    Sem o Manual
                  </h4>
                  <ul className="space-y-8">
                    {comparisonData.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <X className="w-3 h-3 text-red-500" />
                          </div>
                          <span className="text-zinc-500 font-medium">{item.without}</span>
                        </li>
                    ))}
                  </ul>
              </div>

              {/* WITH Column */}
              <div className="flex-1 p-8 md:p-10 bg-gradient-to-b from-[#151515] to-brand-accent/5 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                  <h4 className="text-xl font-bold text-brand-accent mb-8 text-center uppercase tracking-wider flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-brand-accent" />
                    Com o Manual
                  </h4>
                  <ul className="space-y-8">
                    {comparisonData.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-brand-accent flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                              <Check className="w-3.5 h-3.5 text-black stroke-[3]" />
                          </div>
                          <span className="text-white font-semibold">{item.with}</span>
                        </li>
                    ))}
                  </ul>
              </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default ProductOfferSection;