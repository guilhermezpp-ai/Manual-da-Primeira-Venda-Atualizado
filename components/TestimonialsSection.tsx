import React from 'react';
import { ThumbsUp, MessageCircle, Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Economia Familiar",
      handle: "@economiafamiliar1008",
      text: "Gostei muito das técnicas e exercícios, incrível. Parabéns Guilherme!",
      time: "há 2 semanas",
      initial: "E",
      color: "bg-orange-600"
    },
    {
      name: "Edson Lima",
      handle: "@edsonlima3613",
      text: "Parabéns Guilherme, belíssimo posicionamento!",
      time: "há 3 semanas",
      initial: "E",
      color: "bg-blue-600"
    },
    {
      name: "Izael",
      handle: "@izael6315",
      text: "Treinamento incrível irmão 🙏 parabéns e gratidão.",
      time: "há 3 anos",
      initial: "I",
      color: "bg-green-600"
    },
    {
      name: "Turminha Super Legal",
      handle: "@turminhasuperlegal7842",
      text: "QUE DEUS TE ABENÇOE. OBRIGADO PELA AULA!!!!",
      time: "há 9 meses",
      initial: "T",
      color: "bg-blue-400"
    },
    {
      name: "Vanessa Monteiro",
      handle: "@vanessamonteiro",
      text: "Conteúdo direto ao ponto. Me ajudou a destravar.",
      time: "há 1 mês",
      initial: "V",
      color: "bg-purple-600"
    },
    {
      name: "Soldado Forever",
      handle: "@soldadoforever",
      text: "Deu um show Guilherme 👏🏻👏🏻👏🏻 muito aprendizado",
      time: "há 3 anos",
      initial: "S",
      color: "bg-yellow-600"
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 text-brand-accent mb-4">
             <Star className="w-5 h-5 fill-brand-accent" />
             <span className="text-sm font-bold tracking-[0.3em] uppercase">Depoimentos</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            Quem assistiu, <span className="text-brand-accent">aprovou.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Veja o que alunos e seguidores estão falando sobre o método e o conteúdo.
          </p>
        </div>

        {/* Layout: Fixed Grid 3 columns to match PDF exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-[#151515] border border-white/5 p-8 rounded-2xl hover:border-brand-accent/20 transition-all duration-300 hover:bg-[#1a1a1a] shadow-lg flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${t.color}`}>
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{t.name}</h4>
                  <p className="text-xs text-zinc-500">{t.handle}</p>
                </div>
                <div className="ml-auto text-zinc-600">
                  <Quote className="w-5 h-5 opacity-50" />
                </div>
              </div>
              
              <p className="text-zinc-300 mb-6 text-sm md:text-base leading-relaxed flex-grow">
                "{t.text}"
              </p>
              
              <div className="flex items-center justify-between text-xs text-zinc-600 border-t border-white/5 pt-4 mt-auto">
                <span>{t.time}</span>
                <div className="flex gap-4">
                   <span className="flex items-center gap-1 hover:text-zinc-400 transition-colors cursor-default"><ThumbsUp className="w-3 h-3" /> Curtir</span>
                   <span className="flex items-center gap-1 hover:text-zinc-400 transition-colors cursor-default"><MessageCircle className="w-3 h-3" /> Responder</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;