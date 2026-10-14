'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { WHATSAPP_URL } from '@/lib/constants';

export const Hero = () => {
  return (
    <section className="min-h-screen bg-[#0f1f3d] relative overflow-hidden flex items-center">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-0 items-stretch pt-20 relative z-10">
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center py-16 lg:py-24 pr-0 lg:pr-12"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 self-start">
            <div className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.2em]">
              Psicólogo Clínico · CRP 03/27924
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] text-white mb-6 tracking-tight">
            Você não precisa<br />
            carregar esse peso{' '}
            <em className="text-[#c9a84c] not-italic">sozinho.</em>
          </h1>

          <p className="text-slate-300 text-base lg:text-lg leading-relaxed mb-8 max-w-xl font-light">
            Psicólogo com foco em <strong className="text-white font-semibold">Burnout e Ansiedade</strong>. 
            Atendo pessoas que chegaram ao limite — esgotadas, sem energia e sem saber como sair desse ciclo. 
            Atendimento online para todo o Brasil.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => (window as any).gtag_report_conversion?.()}
              className="bg-[#c9a84c] text-[#0f1f3d] px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wider hover:bg-[#e8d5a3] transition-all shadow-2xl shadow-[#c9a84c]/20 flex items-center justify-center gap-2 group"
            >
              Fale comigo agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#sobre"
              className="border border-white/20 text-white px-8 py-4 rounded-xl text-sm font-semibold hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all flex items-center justify-center"
            >
              Conhecer meu trabalho
            </a>
          </div>

          {/* Ethical credentials proof */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-base sm:text-lg font-serif font-bold text-white">CRP 03/27924</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Registro Ativo</p>
            </div>
            <div className="text-center border-x border-white/10">
              <p className="text-2xl font-serif font-bold text-white">100+</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Pacientes Atendidos</p>
            </div>
            <div className="text-center">
              <p className="text-base sm:text-lg font-serif font-bold text-white">100% Online</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Todo o Brasil</p>
            </div>
          </div>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Gradient overlay left - wider for smoothness */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0f1f3d] via-[#0f1f3d]/50 to-transparent z-10" />
          {/* Gradient overlay bottom - taller for smoothness */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0f1f3d] via-[#0f1f3d]/50 to-transparent z-10" />

          <div className="h-full min-h-[600px] relative overflow-hidden ring-1 ring-white/5 rounded-l-[3rem] shadow-inner">
            <Image
              src="https://raw.githubusercontent.com/igorcsoares1/LANDING-IGOR/main/igor-foto-profissional.png"
              alt="Igor Soares, Psicólogo Clínico CRP 03/27924, com foco em Burnout e Ansiedade, em retrato profissional para atendimento psicoterápico"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized={true}
              referrerPolicy="no-referrer"
            />
            {/* Vignette effect for softer edges */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,31,61,0.4)_100%)] z-10" />
          </div>

          {/* Name badge */}
          <div className="absolute bottom-8 right-6 z-20 bg-[#0f1f3d]/90 backdrop-blur-md border border-[#c9a84c]/30 px-5 py-3 rounded-2xl">
            <p className="text-white font-serif text-lg font-semibold">Igor Soares</p>
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.15em]">Psicólogo · CRP 03/27924</p>
          </div>
        </motion.div>
      </div>

      {/* Mobile image */}
      <div className="lg:hidden absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="https://raw.githubusercontent.com/igorcsoares1/LANDING-IGOR/main/igor-foto-profissional.png"
          alt="Retrato do Psicólogo Igor Soares para atendimento clínico online"
          fill
          className="object-cover object-top"
          unoptimized={true}
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};
