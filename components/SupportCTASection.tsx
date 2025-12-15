import React from 'react';
import { MessageCircle } from 'lucide-react';

const SupportCTASection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#0d0d0d] relative z-20 pb-24">
      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <div className="bg-[#151515] border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden group hover:border-[#25D366]/30 transition-all duration-500">
          
          {/* Decorative Green Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#25D366]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          
          <h2 className="text-2xl md:text-4xl font-black text-white mb-6">
            Ainda ficou alguma dúvida?
          </h2>
          
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Não tem problema. Tenho um time que está pronto para responder qualquer pergunta no WhatsApp. 
            É só clicar no botão abaixo e nos chamar.
          </p>

          <a 
            href="https://wa.me/5541997477760?text=Gostaria%20de%20saber%20mais%20sobre%20o%20Manual%20da%20primeira%20venda"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1fae53] text-black font-black uppercase tracking-wider py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto text-lg w-full md:w-auto inline-flex"
          >
             <MessageCircle className="w-6 h-6 fill-black" />
             FALAR COM O SUPORTE
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupportCTASection;