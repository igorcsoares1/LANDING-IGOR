'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Fernanda R.",
      role: "Diretora de Operações",
      time: "Paciente há 8 meses",
      content: "Eu achava que terapia era frescura, até que um dia não consegui sair do carro pra entrar no escritório. Tive muito medo no começo, mas hoje vejo que ignorar meu corpo quase me custou a saúde. O trabalho continua puxado, mas aprendi a não deixar o cansaço me consumir.",
      stars: 5,
      result: "Voltou a dormir bem após 3 meses"
    },
    {
      name: "Marcos T.",
      role: "Empresário",
      time: "Paciente há 1 ano",
      content: "Vivia no limite da exaustão e achava que era o preço do sucesso. Tinha receio de que a terapia fosse perda de tempo, mas hoje consigo trabalhar com clareza e finalmente separar minha vida pessoal. Sinto que recuperei o controle que nem sabia que tinha perdido.",
      stars: 5,
      result: "Reduziu crises de ansiedade em 80%"
    },
    {
      name: "Juliana L.",
      role: "Liderança em Tech",
      time: "Paciente há 6 meses",
      content: "Vivia no automático: reunião, meta e a sensação de que nada era suficiente. Tive muita resistência em procurar ajuda, mas hoje não consigo mais ficar sem esse espaço de fala. Recuperei meu tempo de lazer sem aquela culpa que me perseguia o dia todo.",
      stars: 5,
      result: "Retomou hobbies abandonados há 2 anos"
    },
    {
      name: "Roberto M.",
      role: "Gerente Comercial",
      time: "Paciente há 4 meses",
      content: "Batia meta todo mês, mas não sentia alegria em nada. Achava que era só cansaço, mas era perda de sentido. No processo, entendi que precisava cuidar da minha mente tanto quanto cuidava do meu negócio. Hoje trabalho com um propósito que eu tinha esquecido.",
      stars: 5,
      result: "Reencontrou motivação profissional"
    },
    {
      name: "Carla S.",
      role: "Advogada",
      time: "Paciente há 10 meses",
      content: "Tinha medo de admitir que precisava de ajuda, como se fosse fraqueza. Em poucas sessões, percebi que falar sobre o que eu guardava era, na verdade, minha maior força. Minha mente ficou mais limpa e meus relacionamentos em casa mudaram completamente.",
      stars: 5,
      result: "Melhorou relacionamentos pessoais"
    },
    {
      name: "André P.",
      role: "Médico",
      time: "Paciente há 7 meses",
      content: "Como médico, sempre cuidei dos outros e esqueci de mim. Estava cada vez mais cínico e exausto. Finalmente entendi que ser forte não é aguentar tudo sozinho. Minha qualidade de vida melhorou de forma real, e me sinto uma pessoa muito mais presente hoje.",
      stars: 5,
      result: "Qualidade de vida melhorou significativamente"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-5xl text-center text-slate-950 mb-4 font-medium tracking-tight">O que dizem meus pacientes</h2>
          <p className="text-slate-500 font-light">Resultados reais de quem deu o primeiro passo</p>
          
          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="font-bold text-slate-900">5.0</span>
              <span className="text-slate-500 text-sm">média geral</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="font-bold text-slate-900">100%</span>
              <span className="text-slate-500 text-sm">recomendariam</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900">+100</span>
              <span className="text-slate-500 text-sm">pacientes atendidos</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-10 rounded-[32px] bg-white border border-slate-200 flex flex-col hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-slate-900 text-slate-900" />
                ))}
              </div>

              {/* Result badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 border border-green-100 rounded-full text-green-700 text-[10px] font-bold uppercase tracking-wider mb-6 self-start">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {t.result}
              </div>

              <Quote className="w-10 h-10 text-slate-200 mb-6 group-hover:text-slate-300 transition-colors" />
              <p className="text-slate-700 leading-relaxed mb-10 italic flex-grow text-sm md:text-base font-light">
                &quot;{t.content}&quot;
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-8 mt-auto">
                <div className="overflow-hidden">
                  <p className="font-bold text-slate-900 text-base truncate">{t.name}</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest truncate">{t.role}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{t.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
