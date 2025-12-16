import React from 'react';
import { Check, PlayCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { VideoPlaceholder } from './ui/VideoPlaceholder';

const SalesHero: React.FC = () => {
  const benefits = [
    "Como oferecer seu serviço sem se sentir desconfortável",
    "Como conduzir uma conversa sem parecer insistente ou chato",
    "Como fechar o primeiro cliente em 7 dias",
    "Como se posicionar mesmo sem experiência",
    "Por onde começar de verdade para viver de atendimento",
    "Como viver do seu propósito sem precisar voltar pra CLT"
  ];

  return (
    <section className="relative w-full min-h-screen bg-brand-dark text-white overflow-hidden py-20 md:py-32 flex flex-col justify-center">
      
      {/* Background Ambience (Subtle Gold Glow) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-brand-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center max-w-[1100px]">
        
        {/* 1. LOGO */}
        <div className="mb-12 animate-fade-in-down">
          <span className="inline-block px-6 py-2 border-b border-white/20 text-sm font-bold tracking-[0.3em] text-white uppercase">
            Manual da Primeira Venda
          </span>
        </div>

        {/* 2. HEADLINE (Updated Colors) */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-white tracking-tight mb-8 max-w-5xl">
          Conquiste seu primeiro cliente em <span className="text-brand-accent">7 dias.</span>
        </h1>
        
        {/* 3. SUBHEADLINE (Updated Colors) */}
        <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-4xl mb-12">
          Aprenda um caminho claro para sair da teoria, entrar em movimento e fechar seu primeiro cliente em até 7 dias.
        </p>

        {/* 5. GANCHO (Bullet Points Box - Wider & Darker) */}
        <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 md:p-12 mb-16 text-left w-full max-w-5xl shadow-2xl relative overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

            <h3 className="relative z-10 flex items-center gap-3 font-bold text-brand-accent mb-8 text-xl uppercase tracking-wider border-b border-white/5 pb-4">
               <PlayCircle className="w-6 h-6" />
               Assista agora e descubra:
            </h3>
            {/* Grid layout updated to 2 columns on md screens */}
            <ul className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <div className="mt-1 flex-shrink-0 text-brand-accent bg-brand-accent/10 p-1 rounded-full">
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </div>
                  <span className="text-zinc-100 text-lg leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
        </div>

        {/* 6. VÍDEO (Large Cinema Style) */}
        <div className="w-full max-w-4xl relative group mb-16">
          {/* Subtle Gold Glow Behind Video */}
          <div className="absolute -inset-1 bg-gradient-to-b from-brand-accent/20 to-transparent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700"></div>
          
          <div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <VideoPlaceholder videoId="HdDJFRbNbX4" />
          </div>
        </div>

        {/* 7. CTA PRINCIPAL */}
        <div className="flex flex-col items-center w-full gap-6">
          <Button 
            fullWidth 
            className="max-w-xl py-6 md:py-8 text-2xl shadow-[0_4px_30px_rgba(212,175,55,0.25)] hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)]"
            href="#oferta"
          >
            Quero fazer minha primeira venda agora
          </Button>
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-bold text-zinc-500 uppercase tracking-widest mt-2">
            <span className="flex items-center gap-2"><span className="text-brand-accent">🔒</span> Compra Segura</span>
            <span className="hidden md:block w-1 h-1 bg-zinc-700 rounded-full"></span>
            <span className="flex items-center gap-2"><span className="text-brand-accent">⚡</span> Acesso Imediato</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SalesHero;