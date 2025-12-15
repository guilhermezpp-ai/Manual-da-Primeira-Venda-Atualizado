import React from 'react';
import { GraduationCap, ShieldAlert, BrainCircuit, MessageSquareDashed, UserX, CheckCircle2 } from 'lucide-react';

const TargetAudienceSection: React.FC = () => {
  const audiencePoints = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      text: "Acabou de se formar e ainda não sabe como conseguir cliente"
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      text: "Tem medo de parecer insistente ou ser rejeitado"
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      text: "Já estudou muito, mas trava na hora de oferecer seu serviço"
    },
    {
      icon: <MessageSquareDashed className="w-8 h-8" />,
      text: "Não sabe o que dizer para fechar uma venda"
    },
    {
      icon: <UserX className="w-8 h-8" />,
      text: "Se sente um impostor por ainda não ter atendido ninguém"
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#0d0d0d] text-white overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 mb-4 border border-brand-accent/30 rounded-full bg-brand-accent/5 text-brand-accent text-xs font-bold uppercase tracking-widest">
            Identificação
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Este produto é <br/> <span className="text-brand-accent">para você que:</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto rounded-full opacity-50"></div>
        </div>

        {/* Cards Grid - Flex wrap for better centering of odd items */}
        <div className="flex flex-wrap justify-center gap-6">
          {audiencePoints.map((item, index) => (
            <div 
              key={index}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-[#151515] border border-white/5 hover:border-brand-accent/40 transition-all duration-300 hover:bg-[#1a1a1a] hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.15)] flex flex-col items-start text-left">
                
                {/* Header of Card */}
                <div className="flex justify-between items-start w-full mb-6">
                  <div className="p-3 rounded-lg bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-black transition-colors duration-300">
                    {item.icon}
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-zinc-700 group-hover:text-brand-accent transition-colors duration-300" />
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl font-medium text-zinc-200 leading-snug">
                  {item.text}
                </p>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TargetAudienceSection;