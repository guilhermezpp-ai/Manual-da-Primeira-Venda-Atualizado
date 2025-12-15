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
      handle: "@vanessamonteiro1905",
      text: "Nossa cara vou fazer isso muito obrigada",
      time: "há 1 ano",
      initial: "V",
      color: "bg-pink-600"
    },
    {
      name: "Soldado Forever",
      handle: "@SoldadoForever",
      text: "Deu um show Guilherme 👏🏻👏🏻👏🏻 muito aprendizado",
      time: "há 3 anos",
      initial: "S",
      color: "bg-yellow-600"
    },
    {
      name: "Rosilene Souto",
      handle: "@rosilenesouto4511",
      text: "Parabéns Guilherme!!! Você é muito top.",
      time: "há 4 anos",
      initial: "R",
      color: "bg-red-500"
    },
    {
      name: "Simeia",
      handle: "@simeia7292",
      text: "Aprendi muito com este treinamento. Parabéns",
      time: "há 4 anos",
      initial: "S",
      color: "bg-teal-600"
    },
    {
      name: "Fã Clube (35,3 mil)",
      handle: "@fanclub...",
      text: "Que orientações fantásticas meu amigo Guilherme, já anotei tudo aqui e é só colocar em prática agora...",
      time: "há 3 anos",
      initial: "F",
      color: "bg-purple-600"
    }
  ];

  return (
    <section className="relative w-full py-20 bg-[#0d0d0d] text-white overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
             <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-accent fill-brand-accent" />
                ))}
             </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-white">
            Quem aplica o método, <br />
            <span className="text-brand-accent leading-tight inline-block mt-2">recomenda.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Veja o que dizem as pessoas que já tiveram contato com este conteúdo:
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div 
              key={index}
              className="bg-[#151515] border border-white/5 rounded-xl p-6 hover:border-brand-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar Mimic */}
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold flex-shrink-0 text-sm`}>
                  {t.initial}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-semibold text-sm text-white truncate">{t.name}</span>
                    <span className="text-xs text-zinc-500 truncate">{t.time}</span>
                  </div>
                  <div className="text-xs text-zinc-600 truncate">{t.handle}</div>
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                {t.text}
              </p>

              {/* Social Actions Simulation */}
              <div className="flex items-center gap-4 text-zinc-500 text-xs">
                 <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{Math.floor(Math.random() * 50) + 1}</span>
                 </div>
                 <div className="w-px h-3 bg-zinc-800"></div>
                 <div className="hover:text-white cursor-pointer transition-colors">
                    Responder
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA Connector */}
        <div className="text-center mt-12">
            <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold mb-2">Junte-se a eles</p>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;