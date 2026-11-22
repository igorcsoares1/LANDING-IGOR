'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    { 
      q: "Qual o valor da sessão?", 
      a: "A sessão individual online custa R$ 120, com duração de 50 minutos. O pagamento pode ser feito por Pix ou cartão. Se tiver dúvidas, é só me chamar no WhatsApp." 
    },
    { 
      q: "Como funciona a primeira sessão?", 
      a: "A primeira sessão é uma conversa de acolhimento e avaliação. Vamos entender o que te trouxe até aqui, o que você está sentindo e o que espera da terapia. Ao final, definimos juntos os próximos passos do seu tratamento." 
    },
    { 
      q: "Quanto tempo dura o tratamento?", 
      a: "Não existe uma resposta única, porque cada pessoa e cada demanda são diferentes. A duração é combinada a partir dos seus objetivos, e revisamos juntos a evolução ao longo do processo." 
    },
    { 
      q: "As sessões são sigilosas?", 
      a: "Sim. O sigilo profissional é um dever ético e legal do psicólogo. O que você compartilha em sessão não é repassado a familiares, empregadores ou outras pessoas, salvo nas situações excepcionais previstas no Código de Ética Profissional do Psicólogo." 
    },
    { 
      q: "Preciso de um diagnóstico fechado para começar?", 
      a: "Não. Você pode procurar terapia pelo que está sentindo, sem precisar de diagnóstico. Na primeira sessão entendemos juntos a sua demanda. Buscar ajuda cedo é um cuidado, não uma fraqueza." 
    },
    { 
      q: "Como é garantido o sigilo em sessões online?", 
      a: "As sessões são feitas por plataforma de videochamada segura, e recomendo que você esteja em um local reservado. Os registros do atendimento são guardados com sigilo, conforme as normas do Conselho Federal de Psicologia." 
    },
    { 
      q: "Qual a duração e frequência das sessões?", 
      a: "As sessões têm duração de 50 minutos. A frequência ideal é semanal, o que permite aprofundamento e consistência no processo. Porém, adaptamos conforme sua rotina e necessidade." 
    },
    { 
      q: "Você emite recibos para reembolso de seguro saúde?", 
      a: "Sim. Emito recibo pelo Receita Saúde (Receita Federal), que pode ser usado no Imposto de Renda e para pedir reembolso ao seu plano de saúde, conforme as regras da sua operadora." 
    },
    { 
      q: "Como sei se a terapia está funcionando?", 
      a: "Ao longo do processo revisamos juntos os seus objetivos e o que mudou no seu dia a dia, como o sono, a forma de reagir a situações difíceis e o nível de ansiedade. Assim avaliamos se o caminho faz sentido para você." 
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-slate-50 relative border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6 tracking-tight">Esclareça suas dúvidas</h2>
          <p className="text-slate-500 max-w-xl mx-auto font-light text-lg">Transparência e rigor desde o primeiro contato.</p>
        </div>
        
        <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`group border-b border-slate-100 last:border-0 transition-all ${isOpen ? 'bg-slate-50' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between py-6 md:py-8 px-6 md:px-10 text-left transition-all"
                >
                  <span className={`text-base md:text-xl font-medium transition-colors pr-4 ${isOpen ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
                    {faq.q}
                  </span>
                  <div className={`transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-slate-900' : 'text-slate-400'}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-10 pb-8 text-slate-500 leading-relaxed text-base md:text-lg font-light max-w-3xl">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-6 font-light italic">Ainda tem dúvidas sobre o processo?</p>
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => (window as any).gtag_report_conversion?.()}
            className="inline-flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-xs border-b-2 border-slate-900 pb-1 hover:gap-4 transition-all"
          >
            Falar pelo WhatsApp <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
