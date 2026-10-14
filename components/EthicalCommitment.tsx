'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Laptop, BookOpen } from 'lucide-react';

export const EthicalCommitment = () => {
  const commitments = [
    {
      icon: Award,
      title: 'Registro Ativo no CRP 03/27924',
      badge: 'CFP / CRP-03',
      desc: 'Habilitação profissional regular e ativa junto ao Conselho Regional de Psicologia da Bahia (3ª Região), assegurando exercício legal e qualificado da profissão.',
    },
    {
      icon: ShieldCheck,
      title: 'Sigilo Conforme o Código de Ética',
      badge: 'Art. 9º do Código de Ética',
      desc: 'Confidencialidade estrita e inviolável de tudo o que for compartilhado nas sessões, resguardando integralmente sua privacidade e dignidade.',
    },
    {
      icon: Laptop,
      title: 'Atendimento Online no e-Psi (CFP)',
      badge: 'Resolução CFP nº 11/2018',
      desc: 'Autorizado e cadastrado no sistema e-Psi do Conselho Federal de Psicologia para prestação de serviços psicológicos mediados por tecnologias da informação.',
    },
    {
      icon: BookOpen,
      title: 'Abordagem Baseada em Evidências',
      badge: 'TCC - Terapia Cognitivo-Comportamental',
      desc: 'Prática clínica orientada pelo rigor científico da TCC, abordagem com ampla validação empírica internacional para o manejo do estresse, ansiedade e burnout.',
    },
  ];

  return (
    <section id="etica" className="py-20 md:py-32 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0f1f3d]" />
            Prática Regulamentada
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-slate-950 mb-4 font-medium tracking-tight">
            Compromisso Ético
          </h2>
          <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed">
            Atendimento humanizado, técnico e rigorosamente alinhado às diretrizes éticas e resoluções do Conselho Federal de Psicologia.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {commitments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0f1f3d] text-[#c9a84c] flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
