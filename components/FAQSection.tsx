import React, { useState } from 'react';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "Ainda não estou pronto pra atender.",
      answer: (
        <>
          <p className="mb-4">Esse curso foi feito exatamente para iniciantes. Você não precisa estar pronto — só precisa estar em movimento.</p>
          <p>A ideia de que você só pode vender quando estiver 100% seguro é o que mantém muita gente travada. Aqui, você aprende a ganhar confiança fazendo — com segurança, estrutura e apoio.</p>
        </>
      )
    },
    {
      question: "Tenho medo de parecer insistente.",
      answer: (
        <>
          <p className="mb-4">O método ensina você a vender com leveza, sem empurrar nada. Conversas humanas, sem pressão.</p>
          <p>Você não vai usar técnicas agressivas. Vai aprender a criar conexão real, identificar se a pessoa precisa da sua ajuda e, se fizer sentido, fazer um convite com respeito. Isso não é ser insistente, é ser profissional.</p>
        </>
      )
    },
    {
      question: "E se ninguém quiser comprar de mim?",
      answer: (
        <>
          <p className="mb-4">O problema não é você. É que ninguém te ensinou a se posicionar com clareza. Aqui você aprende como fazer isso do seu jeito.</p>
          <p>Com o método certo, você aprende a gerar interesse sem forçar. Clientes existem o que falta é um caminho prático pra chegar até eles com autenticidade.</p>
        </>
      )
    },
    {
      question: "Já tentei vender, mas travo na hora.",
      answer: (
        <>
          <p className="mb-4">Com os templates, scripts e checklists, você não precisa improvisar. Basta seguir o passo a passo.</p>
          <p>Você vai saber exatamente o que dizer, como começar, como transitar para a oferta e como fechar com segurança mesmo que hoje você congele só de pensar nisso.</p>
        </>
      )
    },
    {
      question: "Tenho vergonha de cobrar pelo meu atendimento.",
      answer: (
        <>
          <p className="mb-4">Você vai aprender a enxergar o valor que entrega e como comunicar isso com segurança.</p>
          <p>O curso te mostra como apresentar seu preço com clareza, sem medo ou culpa, e com total respeito ao cliente. Cobrar não é falta de humildade. É profissionalismo.</p>
        </>
      )
    },
    {
      question: "Não sei como começar uma conversa com um possível cliente.",
      answer: (
        <>
          <p className="mb-4">Você recebe mensagens prontas e estratégias para abordar com leveza e naturalidade.</p>
          <p>Nada de parecer robô ou vendedor forçado. Aqui, você aprende a se comunicar como um ser humano, gerando conexão antes de qualquer convite.</p>
        </>
      )
    },
    {
      question: "Minha cabeça está cheia, não sei se agora é o momento certo.",
      answer: (
        <>
          <p className="mb-4">Justamente por isso esse curso existe: pra te dar foco, direção e clareza.</p>
          <p>É leve, prático e feito para caber na sua rotina. Com 20 minutos por dia, você sai da confusão mental e entra em ação de forma simples e sem pressão.</p>
        </>
      )
    },
    {
      question: "Em quanto tempo tenho acesso ao curso?",
      answer: (
        <>
          <p className="mb-4">Assim que sua inscrição for confirmada, o acesso é liberado imediatamente.</p>
          <p>Você vai receber no seu e-mail os dados para entrar na plataforma e já poderá começar sua jornada rumo ao primeiro cliente — no seu tempo, sem pressão.</p>
        </>
      )
    },
    {
      question: "Posso assistir do celular?",
      answer: (
        <>
          <p className="mb-4">Sim! O curso é 100% responsivo.</p>
          <p>Você pode assistir de onde quiser: celular, tablet, computador, até na smart TV. As aulas são curtas, práticas e leves pensadas pra encaixar no seu dia mesmo que sua rotina esteja cheia.</p>
        </>
      )
    },
    {
      question: "E se eu tiver dúvidas durante o curso?",
      answer: (
        <>
          <p className="mb-4">Você não vai estar sozinho.</p>
          <p>Além do conteúdo, você terá acesso a uma comunidade exclusiva de alunos, onde pode tirar dúvidas, trocar experiências e até pedir feedbacks. Em casos mais específicos, também oferecemos suporte por e-mail com resposta em até 24h úteis.</p>
        </>
      )
    },
    {
      question: "Preciso ter algum conhecimento prévio em vendas?",
      answer: (
        <>
          <p className="mb-4">Não. O curso foi feito exatamente pra quem está começando.</p>
          <p>Você vai aprender desde o básico como abordar alguém, como apresentar seu serviço, até como fechar a venda tudo com linguagem acessível e passo a passo prático.</p>
        </>
      )
    },
    {
      question: "Terei acesso vitalício ao curso?",
      answer: (
        <>
          <p className="mb-4">Sim! Ao se inscrever, o acesso é vitalício para essa versão da formação.</p>
          <p>Você poderá rever as aulas quantas vezes quiser e no seu próprio ritmo.</p>
        </>
      )
    },
    {
      question: "E se eu achar que o curso não é pra mim?",
      answer: (
        <>
          <p className="mb-4">Você tem 30 dias de garantia incondicional.</p>
          <p>Se por qualquer motivo sentir que não é o momento, é só mandar um e-mail e devolvemos 100% do seu investimento. Simples assim. Sem burocracia. Sem perguntas.</p>
        </>
      )
    }
  ];

  return (
    <section className="relative w-full py-20 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-brand-accent mb-4">
            <MessageCircleQuestion className="w-6 h-6" />
            <span className="text-sm font-bold tracking-[0.3em] uppercase">Tire suas dúvidas</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Perguntas <span className="text-brand-accent">Frequentes</span>
          </h2>
        </div>

        {/* Accordion Grid */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`
                rounded-xl transition-all duration-300 border
                ${openIndex === index 
                  ? 'bg-[#151515] border-brand-accent/30 shadow-[0_0_20px_-5px_rgba(212,175,55,0.15)]' 
                  : 'bg-[#111] border-white/5 hover:border-white/10'
                }
              `}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className={`font-bold text-lg md:text-xl pr-4 transition-colors ${openIndex === index ? 'text-brand-accent' : 'text-zinc-200'}`}>
                  {item.question}
                </span>
                <div className={`
                  flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300
                  ${openIndex === index ? 'bg-brand-accent border-brand-accent text-black rotate-180' : 'border-zinc-700 text-zinc-500'}
                `}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-zinc-400 leading-relaxed text-base md:text-lg border-t border-white/5 mt-2">
                  <div className="mt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;