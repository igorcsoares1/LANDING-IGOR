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
      content: "Achei que era frescura, sabe? Até que um dia eu simplesmente não consegui sair do carro pra entrar no escritório. Trabalhar com o Igor me fez ver que eu tava ignorando meu corpo há anos. O trabalho continua puxado, mas agora eu não deixo ele me consumir.",
      stars: 5,
      avatar: "https://api.dicebear.com/9.x/initials/svg?seed=FR&backgroundColor=1e293b&textColor=f8fafc",
      result: "Voltou a dormir bem após 3 meses"
    },
    {
      name: "Marcos T.",
      role: "Empresário",
      time: "Paciente há 1 ano",
      content: "O processo foi focado no que eu precisava: ferramentas práticas pra lidar com a pressão diária. Sem enrolação e muito direto ao ponto. Recomendo demais. Hoje consigo separar trabalho de vida pessoal de verdade.",
      stars: 5,
      avatar: "https://api.dicebear.com/9.x/initials/svg?seed=MT&backgroundColor=0f172a&textColor=f8fafc",
      result: "Reduziu crises de ansiedade em 80%"
    },
    {
      name: "Juliana L.",
      role: "Liderança em Tech",
      time: "Paciente há 6 meses",
      content: "Eu vivia no automático. Reunião, meta, e e-mail, e a sensação de que nada era suficiente. O Igor tem essa escuta que não julga, mas que te desafia a olhar pro que realmente importa. Recuperei meu tempo de lazer sem a culpa gritando no fundo da mente.",
      stars: 5,
      avatar: "https://api.dicebear.com/9.x/initials/svg?seed=JL&backgroundColor=334155&textColor=f8fafc",
      result: "Retomou hobbies abandonados há 2 anos"
    },
    {
      name: "Roberto M.",
      role: "Gerente Comercial",
      time: "Paciente há 4 meses",
      content: "Cheguei no limite. Batia meta todo mês mas não sentia nada. Nem satisfação, nem alegria. O Igor me ajudou a entender que burnout não é só cansaço — é perda de sentido. Hoje trabalho com propósito de volta.",
      stars: 5,
      avatar: "https://api.dicebear.com/9.x/initials/svg?seed=RM&backgroundColor=1e3a5f&textColor=f8fafc",
      result: "Reencontrou motivação profissional"
    },
    {
      name: "Carla S.",
      role: "Advogada",
      time: "Paciente há 10 meses",
      content: "Tinha medo de admitir que precisava de ajuda. Como se fosse fraqueza. O Igor criou um espaço tão seguro que em duas semanas eu já conseguia falar sobre coisas que guardei por anos. A terapia me devolveu a clareza mental que eu precisava.",
      stars: 5,
      avatar: "https://api.dicebear.com/9.x/initials/svg?seed=CS&backgroundColor=2d1b69&textColor=f8fafc",
      result: "Melhorou relacionamentos pessoais"
    },
    {
      name: "André P.",
      role: "Médico",
      time: "Paciente há 7 meses",
      content: "Como profissional de saúde, sei reconhecer competência. O Igor tem uma abordagem que alia rigor técnico com humanidade genuína. Raro encontrar isso. Minha qualidade de vida melhorou de forma mensurável.",
      stars: 5,
      avatar: "https://api.dicebear.com/9.x/initials/svg?seed=AP&backgroundColor=064e3b&textColor=f8fafc",
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
                <div className="relative w-14 h-14 shrink-0">
                  <div className="absolute inset-0 rounded-full border-2 border-slate-900/5 scale-110" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-xl">
                    <Image 
                      src={t.avatar} 
                      alt={t.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
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
