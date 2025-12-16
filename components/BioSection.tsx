import React from 'react';
import { Award, TrendingUp, GraduationCap } from 'lucide-react';

const BioSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#080808] text-white overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* 1. IMAGE COLUMN */}
          <div className="w-full lg:w-5/12 relative group">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
               <img 
                 src="https://i.postimg.cc/jjV7VFz1/guilherme-pagina-de-vendas.jpg" 
                 alt="Guilherme Zampoli" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                 loading="lazy"
                 decoding="async"
                 width="600"
                 height="800"
               />
               
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90"></div>
               
               {/* Name on Image */}
               <div className="absolute bottom-6 left-6 right-6">
                 <p className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-1">Seu Mentor</p>
                 <h2 className="text-3xl font-black text-white">Guilherme Zampoli</h2>
               </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-accent/10 rounded-full blur-xl z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-brand-accent/20 rounded-full z-[-1]"></div>
          </div>

          {/* 2. TEXT COLUMN */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              De tímido a um dos <span className="text-brand-accent">maiores vendedores do Brasil.</span>
            </h2>

            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Aos 18 anos, fui apresentado ao mundo das vendas diretas. Eu tinha um sonho imenso de vencer, mas <strong className="text-white">zero experiência e muito medo.</strong> Só de pensar em falar com um desconhecido, minhas mãos suavam frio.
              </p>
              
              <p>
                Mas eu decidi que o medo não ia me parar. Sem contatos e cheio de insegurança, encarei as ruas. Aprendi na prática. Errei muito, ouvi incontáveis "nãos", mas ajustei a rota.
              </p>

              <div className="pl-6 border-l-4 border-brand-accent/50 italic text-zinc-300 my-8">
                "Com o tempo, aquele jovem tímido se tornou um dos melhores vendedores do Brasil, premiado e reconhecido por metas que pareciam impossíveis."
              </div>

              <p>
                Hoje sou empresário e, nos últimos 12 meses, <strong className="text-brand-accent">gerei mais de R$ 3 milhões em vendas.</strong> Sou Coach formado pelo IGT, analista comportamental e, acima de tudo, um vendedor com orgulho.
              </p>
            </div>

            {/* AUTHORITY STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 border-t border-white/10 pt-8">
               <div className="flex items-start gap-3">
                  <TrendingUp className="w-8 h-8 text-brand-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-lg">R$ 3 Milhões+</h4>
                    <p className="text-xs text-zinc-500 uppercase tracking-wide">Em vendas geradas</p>
                  </div>
               </div>
               
               <div className="flex items-start gap-3">
                  <Award className="w-8 h-8 text-brand-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-lg">Premiado</h4>
                    <p className="text-xs text-zinc-500 uppercase tracking-wide">Reconhecimento Nacional</p>
                  </div>
               </div>

               <div className="flex items-start gap-3">
                  <GraduationCap className="w-8 h-8 text-brand-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-lg">Coach IGT</h4>
                    <p className="text-xs text-zinc-500 uppercase tracking-wide">Analista Comportamental</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;