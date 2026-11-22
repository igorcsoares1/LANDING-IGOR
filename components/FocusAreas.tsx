'use client';

import React from 'react';
import { motion } from 'motion/react';

export const FocusAreas = () => {
  const areas = [
    {
      title: "Ansiedade e crises",
      desc: "Preocupação constante, aperto no peito, coração acelerado e a sensação de que algo ruim vai acontecer."
    },
    {
      title: "Burnout e esgotamento",
      desc: "Cansaço que o descanso não resolve, desânimo e a sensação de estar no limite."
    },
    {
      title: "Irritabilidade e raiva",
      desc: "Explosões que depois trazem culpa, impaciência e dificuldade de controlar as reações."
    },
    {
      title: "Autocobrança e controle",
      desc: "A exigência de dar conta de tudo e a dificuldade de lidar com erros, seus e dos outros."
    },
    {
      title: "Sono e cansaço mental",
      desc: "Dificuldade para dormir, mente acelerada à noite e falta de concentração durante o dia."
    },
    {
      title: "Autoestima e relações",
      desc: "Insegurança, conflitos e fases difíceis como separações e mudanças importantes."
    }
  ];

  return (
    <section id="burnout" className="py-16 md:py-32 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-slate-950 mb-4 md:mb-6 font-medium">Sinais que merecem sua atenção</h2>
          <p className="text-sm md:text-lg text-slate-600 font-light">Se algum destes pontos faz parte do seu dia a dia, a terapia pode ajudar você a entender o que está acontecendo e a encontrar novos caminhos.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areas.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group lg:min-h-[280px] flex flex-col justify-center"
            >
              <div className="w-12 h-1.5 bg-slate-200 mb-6 group-hover:w-full group-hover:bg-slate-900 transition-all duration-500" />
              <h3 className="text-base md:text-xl font-bold text-slate-900 mb-2 md:mb-4 uppercase tracking-tight">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed text-xs md:text-base font-light">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
