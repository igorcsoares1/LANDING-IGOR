'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, BookOpen, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { WHATSAPP_URL } from '@/lib/constants';

export const Professional = () => {
  const credentials = [
    { icon: Award, label: 'CRP 03/27924', desc: 'Registro ativo · CFP' },
    { icon: BookOpen, label: '3 anos', desc: 'De prática clínica' },
    { icon: Heart, label: '+100 pacientes', desc: 'Atendidos com sucesso' },
    { icon: Shield, label: 'Sigilo total', desc: 'Ética e confidencialidade' },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-[#0f1f3d] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-[5%] right-[5%] w-96 h-96 border border-white/20 rounded-full" />
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] border border-white/20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 relative"
        >
          <div className="relative aspect-[3/4] max-h-[650px] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/5">
            <Image
              src="https://raw.githubusercontent.com/igorcsoares1/LANDING-IGOR/main/igor-foto-profissional.png"
              alt="Igor Soares, Psicólogo Clínico, em seu ambiente de atendimento clínico preparado para sessões de psicoterapia e saúde mental"
              fill
              className="object-cover object-top transition-transform duration-1000 hover:scale-105"
              priority
              unoptimized={true}
              referrerPolicy="no-referrer"
            />
            {/* Soft Edge Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(15,31,61,0.4)_100%)]" />
            <div className="absolute inset-0 ring-inset ring-1 ring-white/10 rounded-[2rem]" />

            {/* Overlay badge matching the "Diplomas" vibe */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-[1px] bg-[#c9a84c]" />
                  <p className="text-[#c9a84c] text-[10px] font-black uppercase tracking-[0.2em]">Psicólogo Clínico</p>
                </div>
                <p className="text-white font-serif text-2xl font-bold tracking-tight">Igor Soares</p>
                <p className="text-slate-400 text-xs mt-1">Especialista em Saúde Mental & Performance</p>
              </div>
            </div>
          </div>

          {/* Floating credential badge - Leather inspired shadow */}
          <div className="absolute -bottom-6 -right-6 bg-[#c9a84c] text-[#0f1f3d] p-6 rounded-3xl shadow-[0_20px_50px_rgba(201,168,76,0.3)] z-20">
            <p className="font-black text-3xl leading-none">CRP 03</p>
            <p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-80">Registro 27924</p>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2"
        >
          <div className="inline-flex items-center gap-2 mb-6 text-[#c9a84c] text-xs font-bold uppercase tracking-[0.2em]">
            <Shield className="w-4 h-4" />
            Sobre mim
          </div>

          <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight tracking-tight">
            Sou Igor Soares, psicólogo especializado em{' '}
            <span className="text-[#c9a84c] italic">Burnout e Ansiedade.</span>
          </h2>

          <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed font-light mb-8">
            <p>
              Há 3 anos acompanho pessoas que chegaram ao limite — executivos, profissionais e trabalhadores que estavam tão ocupados cuidando de tudo que esqueceram de cuidar de si mesmos.
            </p>
            <p>
              Minha abordagem é direta, empática e sem julgamentos. Utilizamos ferramentas práticas que se encaixam na sua rotina real — porque teoria sem aplicação não transforma nada.
            </p>
            <p className="text-white italic font-serif text-lg md:text-xl">
              &quot;Equilíbrio não é ausência de pressão, mas a habilidade de não deixar que ela te defina.&quot;
            </p>
          </div>

          {/* Credentials grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {credentials.map((cred, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-[#c9a84c]/30 transition-colors">
                <div className="p-2 bg-[#c9a84c]/10 rounded-xl shrink-0">
                  <cred.icon className="w-4 h-4 text-[#c9a84c]" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{cred.label}</p>
                  <p className="text-slate-400 text-xs">{cred.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0f1f3d] px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-[#e8d5a3] transition-all shadow-xl group"
          >
            Agendar minha consulta
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
