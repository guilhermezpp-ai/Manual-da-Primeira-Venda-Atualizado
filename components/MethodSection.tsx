import React from 'react';
import { MapPin, ArrowDown } from 'lucide-react';

const MethodSection: React.FC = () => {
  const steps = [
    {
      title: "Fundamentos e Mindset para Começar",
      description: "Prepare sua mente para vender com confiança e profissionalismo desde o dia 1."
    },
    {
      title: "Como encontrar o cliente certo",
      description: "Pare de atirar para todo lado. Descubra onde seu cliente ideal está escondido."
    },
    {
      title: "Como iniciar conversas que conectam",
      description: "Abordagens que geram interesse genuíno sem parecer spam ou vendedor chato."
    },
    {
      title: "Como apresentar seu serviço",
      description: "Mostre o valor do seu trabalho de forma irresistível, sem parecer que está implorando."
    },
    {
      title: "Como falar de preço com segurança",
      description: "A técnica para cobrar o valor justo e eliminar o medo de falar quanto custa."
    },
    {
      title: "Como fechar atendimentos de forma natural",
      description: "O fechamento não precisa ser agressivo. Aprenda a conduzir o 'sim' com leveza."
    },
    {
      title: "Pós-venda e Geração de Indicações",
      description: "Transforme um cliente em uma máquina de indicações e fidelização."
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 text-brand-accent mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-bold tracking-[0.3em] uppercase">O Método</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            A Rota da <span className="text-brand-accent">Primeira Venda</span>
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            Este não é apenas mais um curso teórico. É um <span className="text-white font-semibold">funil de 7 paradas</span>, criado para ajudar você a conseguir seus primeiros clientes mesmo sem experiência com vendas.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`
                group relative p-8 md:p-10 rounded-2xl border border-white/5 bg-[#151515] hover:bg-[#1a1a1a] transition-all duration-500 hover:-translate-y-2 hover:border-brand-accent/30 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.1)]
                ${index === steps.length - 1 ? 'md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto' : ''}
              `}
            >
              {/* Number Watermark */}
              <div className="absolute top-4 right-6 text-6xl md:text-8xl font-black text-white/[0.03] group-hover:text-brand-accent/10 transition-colors duration-500 select-none">
                0{index + 1}
              </div>

              {/* Icon/Indicator */}
              <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors duration-500">
                <span className="text-brand-accent font-bold text-xl">{index + 1}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-base">
                {step.description}
              </p>

              {/* Connecting Line (Visual Detail for larger screens) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Connection to Next Section */}
        <div className="flex justify-center mt-20">
           <ArrowDown className="w-10 h-10 text-white/20 animate-bounce" />
        </div>

      </div>
    </section>
  );
};

export default MethodSection;