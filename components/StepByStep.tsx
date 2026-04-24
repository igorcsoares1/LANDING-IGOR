'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

export const StepByStep = () => {
  const steps = [
    {
      number: "01",
      title: "Abertura de Canal",
      desc: "Contato inicial via WhatsApp para alinhamento de agenda e esclarecimento de honorários profissionais.",
      btn: true
    },
    {
      number: "02",
      title: "Sessão Diagnóstica",
      desc: "Um encontro focado em compreender sua demanda profunda e avaliar a viabilidade do acompanhamento.",
      btn: false
    },
    {
      number: "03",
      title: "Processo Terapêutico",
      desc: "Sessões semanais de 50 minutos, conduzidas com absoluto sigilo e rigor técnico-científico.",
      btn: false
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-slate-900 mb-16 md:mb-32 text-center tracking-tight">O Fluxo do Cuidado</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 relative">
          {/* Vertical line connector for mobile, horizontal for desktop */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-slate-100 -z-10" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="text-5xl sm:text-7xl md:text-9xl font-serif font-bold text-slate-50 absolute -top-8 md:-top-20 left-0 md:-left-4 z-0 group-hover:text-slate-100 transition-colors pointer-events-none">
                {step.number}
              </div>
              <div className="relative z-10 pt-4">
                <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 font-serif">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-lg font-light">{step.desc}</p>
                {step.btn && (
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-[10px] md:text-xs border-b-2 border-slate-900 pb-1 hover:gap-4 transition-all">
                    Iniciar Contato <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
