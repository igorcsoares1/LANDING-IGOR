'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

export const StepByStep = () => {
  const steps = [
    {
      number: "01",
      title: "Contato Inicial",
      desc: "Iniciamos com uma conversa breve via WhatsApp para entender sua necessidade e alinhar os primeiros detalhes.",
      btn: true
    },
    {
      number: "02",
      title: "Alinhamento",
      desc: "Ajustamos o melhor dia e horário para seu atendimento, seja ele online ou presencial.",
      btn: false
    },
    {
      number: "03",
      title: "Início do Cuidado",
      desc: "Você inicia seu processo em um espaço seguro, ético e focado exclusivamente no seu bem-estar.",
      btn: false
    }
  ];

  return (
    <section id="agendamento" className="py-24 md:py-48 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <h2 className="font-serif text-4xl md:text-6xl text-slate-900 mb-8 tracking-tight">Cuidado sem burocracia</h2>
          <p className="text-slate-500 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
            O processo de agendamento é simples e direto. O foco é seu acolhimento desde o primeiro contato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 relative mb-24 md:mb-40">
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-slate-100 -z-10" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative group text-center md:text-left">
              <div className="text-7xl md:text-9xl font-serif font-bold text-slate-50 absolute -top-12 md:-top-20 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 z-0 group-hover:text-slate-100 transition-colors pointer-events-none">
                {step.number}
              </div>
              <div className="relative z-10 pt-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg font-light">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Big Final CTA */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f1f3d] rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-8">Pronto para dar esse passo?</h3>
              <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-xl mx-auto font-light">
                Não adie mais o seu bem-estar. Clique no botão abaixo e fale diretamente comigo para iniciarmos sua jornada.
              </p>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0f1f3d] px-10 md:px-16 py-5 md:py-6 rounded-2xl font-bold text-lg md:text-xl hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-xl group"
              >
                Agendar via WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a84c]/5 rounded-full -ml-32 -mb-32 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
