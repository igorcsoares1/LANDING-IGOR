'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f1f3d]/97 backdrop-blur-md border-b border-[#c9a84c]/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="flex flex-col">
          <span className="font-serif text-lg md:text-xl font-semibold text-white tracking-tight leading-tight">
            Igor Soares
          </span>
          <span className="text-[#c9a84c] text-[10px] font-bold uppercase tracking-[0.15em] leading-tight">
            Psicólogo · CRP 03/27924
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Sobre mim</a>
          <a href="#burnout" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Abordagem</a>
          <a href="#faq" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Dúvidas</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c9a84c] text-[#0f1f3d] px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-[#e8d5a3] transition-all shadow-lg"
          >
            Agendar consulta
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-white hover:text-[#c9a84c] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a1628] border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#sobre" className="text-white font-semibold py-3 border-b border-white/10" onClick={() => setIsOpen(false)}>Sobre mim</a>
              <a href="#burnout" className="text-white font-semibold py-3 border-b border-white/10" onClick={() => setIsOpen(false)}>Abordagem</a>
              <a href="#faq" className="text-white font-semibold py-3 border-b border-white/10" onClick={() => setIsOpen(false)}>Dúvidas</a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c9a84c] text-[#0f1f3d] px-6 py-4 rounded-xl text-sm font-black text-center mt-2 flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                Agendar Consulta <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
