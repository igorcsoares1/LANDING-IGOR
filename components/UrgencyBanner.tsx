'use client';

import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

export const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const currentMonth = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(new Date());

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-slate-900 text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 justify-center">
          <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse shrink-0" />
          <p className="text-xs md:text-sm font-medium text-center">
            <span className="font-bold text-red-300">Apenas 3 vagas</span> disponíveis para {currentMonth} —{' '}
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold hover:text-slate-300 transition-colors inline-flex items-center gap-1"
            >
              Agende agora <ArrowRight className="w-3 h-3" />
            </a>
          </p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-white transition-colors shrink-0 p-1"
          aria-label="Fechar banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
