'use client';

import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-slate-100 bg-[#f8f5f2]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-serif text-lg font-bold tracking-tight text-slate-900">Igor Soares</span>
          <span className="text-slate-500 font-medium text-xs">Psicólogo Clínico | CRP 03/27924</span>
        </div>
        <div className="flex gap-6 text-xs text-slate-500 font-semibold">
          <a href="#sobre" className="hover:text-slate-900 transition-colors">Sobre</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Termos</a>
        </div>
        <div className="text-[10px] text-slate-400 font-medium text-center">
          © {new Date().getFullYear()} Igor. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
