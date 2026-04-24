'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    { 
      q: "Como funciona a primeira sessão?", 
      a: "A primeira sessão é uma conversa inicial de acolhimento, sem pressão e sem julgamento. Vamos entender o que te trouxe até aqui, o que você está sentindo e o que espera da terapia. Ao final, você decide se quer continuar. Não há compromisso." 
    },
    { 
      q: "Quanto tempo dura o tratamento?", 
      a: "Não existe uma resposta única — cada pessoa é única. Em média, meus pacientes começam a perceber mudanças reais entre 4 e 8 sessões. O processo terapêutico completo varia conforme seus objetivos, mas muitos relatam transformações significativas em 3 a 6 meses." 
    },
    { 
      q: "As sessões são sigilosas?", 
      a: "Sim, absolutamente. O sigilo profissional é um dever ético e legal do psicólogo. Nenhuma informação compartilhada em sessão será divulgada a terceiros. Isso inclui familiares, empregadores ou qualquer outra pessoa. Você pode falar com total liberdade." 
    },
    { 
      q: "Preciso de um diagnóstico fechado para começar?", 
      a: "Não. A terapia para burnout e esgotamento foca tanto na remissão de sintomas quanto na prevenção e otimização emocional. Muitos pacientes buscam suporte ao primeiro sinal de perda de brilho ou desconexão — e isso é inteligente, não fraqueza." 
    },
    { 
      q: "Como é garantido o sigilo em sessões online?", 
      a: "Utilizamos plataformas seguras e criptografadas. Sua privacidade é absoluta, permitindo que discutamos qualquer assunto com total segurança, independente de onde você estiver." 
    },
    { 
      q: "Qual a duração e frequência das sessões?", 
      a: "As sessões têm duração de 50 minutos. A frequência ideal é semanal, o que permite aprofundamento e consistência no processo. Porém, adaptamos conforme sua rotina e necessidade." 
    },
    { 
      q: "Você emite recibos para reembolso de seguro saúde?", 
      a: "Sim. Como psicólogo registrado no CRP 03/27924, emito recibos fiscais detalhados que podem ser utilizados para solicitação de reembolso no seu plano de saúde, conforme as regras da sua operadora." 
    },
    { 
      q: "Como sei se a terapia está funcionando?", 
      a: "Você vai notar: dormir melhor, reagir diferente a situações de pressão, tomar decisões com mais clareza, sentir menos ansiedade no dia a dia. Ao longo do processo, revisamos seus objetivos juntos para garantir que o caminho faz sentido para você." 
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
            className="inline-flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-xs border-b-2 border-slate-900 pb-1 hover:gap-4 transition-all"
          >
            Falar pelo WhatsApp <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
