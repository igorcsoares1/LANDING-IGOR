'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      title: "Autoridade Emocional",
      desc: "Retomar as rédeas da sua vida e decisões sem o peso da culpa."
    },
    {
      title: "Clareza Estratégica",
      desc: "Limpar a 'névoa mental' para enxergar caminhos e soluções com nitidez."
    },
    {
      title: "Sustentabilidade",
      desc: "Construir um ritmo de alta performance que não destrua sua saúde."
    },
    {
      title: "Resgate de Si",
      desc: "Reconectar-se com seus valores para além das metas e resultados."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-center text-slate-900 mb-16 md:mb-24 font-medium tracking-tight">O que você resgata no processo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {benefits.map((b, i) => (
            <div key={i} className="group bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-all duration-500">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">{b.title}</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
