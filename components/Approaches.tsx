'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const Approaches = () => {
  const approaches = [
    {
      title: "TCC",
      fullTitle: "Terapia Cognitivo-Comportamental",
      desc: "Focamos em identificar e reestruturar padrões de pensamento disfuncionais. Você aprenderá técnicas práticas para gerenciar o estresse.",
      benefits: ["Gestão de expectativas", "Limites saudáveis", "Foco em soluções"]
    },
    {
      title: "Mindfulness",
      fullTitle: "Atenção Plena",
      desc: "Técnicas que ajudam a reduzir a reatividade emocional e a ansiedade. Ensinamos seu cérebro a 'desligar' do modo de alerta.",
      benefits: ["Redução do cortisol", "Melhora do sono", "Clareza mental"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8f5f2] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-slate-950 mb-4 md:mb-6 font-medium">Sua recuperação</h2>
          <p className="text-base md:text-lg text-slate-600">Métodos científicos para um bem-estar sustentável.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {approaches.map((app, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[32px] border border-slate-200 shadow-md relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full translate-x-12 -translate-y-12" />
              <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-slate-900 flex items-center justify-center text-white mb-6">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 md:mb-4 font-serif">{app.title}</h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">{app.fullTitle}</p>
                <p className="text-slate-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">{app.desc}</p>
                <div className="grid grid-cols-1 gap-2 md:gap-3">
                  {app.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                      <span className="text-xs md:text-sm font-medium text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
