'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Shield, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

export const Contact = () => {
  return (
    <section id="atendimento" className="py-16 md:py-40 bg-[#f8f5f2] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white px-6 py-12 md:p-24 rounded-[32px] md:rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-8 md:mb-10 shadow-lg">
            <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <h2 className="font-serif text-3xl md:text-6xl text-slate-900 mb-6 md:mb-8 leading-tight tracking-tight">Recupere o controle da <br />sua saúde emocional.</h2>
          <p className="text-base md:text-2xl text-slate-500 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Entendo que a pessoa é um sistema complexo e seu sucesso não deve ser um fardo. Vamos conversar e traçar um caminho de retorno ao seu bem-estar.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl text-base md:text-lg font-bold hover:bg-slate-800 transition-all shadow-xl group"
          >
            Iniciar jornada terapêutica
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="mt-10 flex flex-col items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <Shield className="w-5 h-5" />
            Atendimento 100% online adaptado à sua agenda.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
