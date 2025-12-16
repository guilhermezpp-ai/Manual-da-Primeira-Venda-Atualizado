import React from 'react';
import { Check, Smartphone, Users, Zap, Lock, ShieldCheck, Gift, XCircle, AlertCircle, Banknote, TrendingUp, Shield, CheckCircle2, Heart, Star, Award } from 'lucide-react';
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

  const painPoints = [
    "Vergonha de cobrar pelo meu atendimento.",
    "Estuda muito mas continua sem cliente.",
    "Me sinto um impostor por ainda não ter atendido ninguém.",
    "Não consegue explicar o que faz sem enrolar.",
    "Não sabe onde encontrar pessoas que queiram comprar.",
    "Sinto vergonha de vender.",
    "Não se sente pronto para vender."
  ];

  const futurePoints = [
    { icon: <Banknote className="w-5 h-5 text-brand-accent" />, text: "Receber dinheiro pelo seu serviço pela primeira vez." },
    { icon: <TrendingUp className="w-5 h-5 text-brand-accent" />, text: "Sentir que é possível viver da sua profissão." },
    { icon: <Shield className="w-5 h-5 text-brand-accent" />, text: "Ter mais segurança para não voltar para um emprego que não gosta." },
    { icon: <CheckCircle2 className="w-5 h-5 text-brand-accent" />, text: "Fazer a primeira venda e ver que \"isso funciona mesmo\"." },
    { icon: <Heart className="w-5 h-5 text-brand-accent" />, text: "Ficar animado para contar à família que conseguiu um cliente." },
    { icon: <Star className="w-5 h-5 text-brand-accent" />, text: "Receber um elogio sincero de um cliente grato." },
    { icon: <Award className="w-5 h-5 text-brand-accent" />, text: "Sentir-se respeitado nas conversas sobre seu serviço." },
  ];

  return (
    <section id="oferta" className="relative w-full py-24 md:py-32 bg-[#050505] text-white overflow-hidden scroll-mt-10">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#050505] to-[#0d0d0d]" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
        
        {/* 1. PRODUCT FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
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
          <div className="flex flex-col gap-8 md:gap-10">
             <div>
                <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-3 block">O que você leva</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  Tudo o que você precisa para <span className="text-brand-accent">destravar.</span>
                </h2>
                <p className="text-zinc-400 text-lg mb-6">
                  Não é apenas um curso, é uma caixa de ferramentas completa para você conquistar seu primeiro cliente em até 7 dias.
                </p>
             </div>

             <div className="bg-[#111] rounded-2xl p-8 border border-white/10 relative overflow-hidden">
                {/* Decorative sheen */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl translate-x-10 -translate-y-10"></div>
                
                <h3 className="flex items-center gap-3 font-bold text-xl mb-6 pb-4 border-b border-white/10">
                  <Gift className="w-6 h-6 text-brand-accent" />
                  Você recebe:
                </h3>
                
                <ul className="space-y-6">
                  {/* Main Product */}
                  <li className="flex items-start gap-3 text-white font-semibold">
                    <Check className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                    <span className="text-lg">{mainDeliverable}</span>
                  </li>

                  {/* Bonus Anchor */}
                  <li className="pt-4 pb-1">
                    <span className="inline-block bg-brand-accent/20 text-brand-accent text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-brand-accent/20">
                      BÔNUS EXCLUSIVOS:
                    </span>
                  </li>

                  {/* Bonus Items with Value Anchoring */}
                  {bonusDeliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-300">
                      <Check className="w-5 h-5 text-brand-accent/70 flex-shrink-0 mt-1" />
                      <div className="flex flex-col">
                        <span className="font-medium text-white text-base">{item.text}</span>
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
            
            <div className="relative bg-[#161616] border border-brand-accent/30 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
              
              {/* Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-accent text-black font-black text-sm py-3 px-8 rounded-full uppercase tracking-wider shadow-lg shadow-brand-accent/20 whitespace-nowrap">
                Oferta Especial de Lançamento
              </div>

              {/* Total Value Anchor */}
              <div className="mt-8 mb-6">
                  <span className="block text-zinc-500 text-sm uppercase tracking-widest mb-2">Valor Total das entregas</span>
                  <span className="text-zinc-400 font-bold text-2xl line-through decoration-red-500/50 decoration-2">
                    R$ 988,00
                  </span>
              </div>
              
              <div className="mb-8 bg-black/30 rounded-xl p-6 border border-white/5">
                <div className="text-zinc-500 text-sm mb-1">Somente hoje por:</div>
                <div className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                  <span className="text-2xl md:text-4xl align-top opacity-60 font-medium mr-1">R$</span>
                  47
                  <span className="text-2xl md:text-4xl align-top opacity-60 font-medium ml-1">,97</span>
                </div>
                <div className="text-brand-accent font-medium mt-2 text-lg">
                  ou apenas 6x de R$ 9,00
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

              <Button 
                fullWidth 
                className="py-6 md:py-8 text-xl md:text-2xl shadow-[0_0_20px_rgba(212,175,55,0.4)] animate-pulse hover:animate-none"
                href="https://pay.hotmart.com/T99113739F?checkoutMode=10"
              >
                SIM! Quero Destravar Minha Venda
              </Button>

              <p className="mt-6 text-sm text-zinc-500 flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" /> Pagamento 100% Seguro via Hotmart
              </p>
            </div>
          </div>
        </div>

        {/* 4. GUARANTEE SECTION */}
        <div className="mt-24 md:mt-32 max-w-4xl mx-auto bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-2xl p-10 md:p-14 border border-white/5 flex flex-col md:flex-row items-center gap-10 md:gap-16">
           <div className="flex-shrink-0">
              <ShieldCheck className="w-32 h-32 text-brand-accent stroke-[1.5] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
           </div>
           <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Garantia Incondicional de <span className="text-brand-accent">30 Dias</span>
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6 text-lg">
                O risco é todo meu. Inscreva-se, assista às aulas e aplique o método. Se em 30 dias você sentir que este curso não é para você, é só pedir o reembolso. Sem perguntas, sem letras miúdas.
              </p>
              <div className="inline-block border-b border-brand-accent/30 pb-1 text-sm text-brand-accent uppercase tracking-widest font-bold">
                Seu investimento está protegido
              </div>
           </div>
        </div>

        {/* 5. NEW TRANSFORMATION SECTION (REPLACED COMPARISON) */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch max-w-6xl mx-auto">
            
            {/* DORES (Current State) */}
            <div className="relative p-10 md:p-14 rounded-3xl bg-[#0a0a0a] border border-white/5 flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-300 mb-8 flex items-center gap-3">
                    <AlertCircle className="w-8 h-8 text-red-600" />
                    O Que Você Sente Hoje
                </h3>
                
                <ul className="space-y-6">
                    {painPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-400 text-lg">{point}</span>
                      </li>
                    ))}
                </ul>
            </div>

            {/* DESEJOS (Future State) */}
            <div className="relative p-10 md:p-14 rounded-3xl bg-[#0d0d0d] border border-brand-accent/50 shadow-[0_0_40px_-10px_rgba(212,175,55,0.15)] flex flex-col justify-center transform lg:scale-105 z-10">
                 
                <h3 className="text-2xl md:text-3xl font-bold text-brand-accent mb-8 flex items-center gap-3">
                    <Star className="w-8 h-8 fill-brand-accent" />
                    O Seu Futuro Com O Manual
                </h3>
                
                <ul className="space-y-6">
                    {futurePoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0">
                          {point.icon}
                        </div>
                        <span className="text-white text-lg font-medium">{point.text}</span>
                      </li>
                    ))}
                </ul>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ProductOfferSection;