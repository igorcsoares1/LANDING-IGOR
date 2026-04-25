'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

export const WhatsAppChat = () => {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [typed, setTyped] = useState('');
  const fullMessage = 'Olá! Gostaria de agendar uma consulta 😊';

  // Show notification bubble after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect when chat opens
  useEffect(() => {
    if (!open) return;
    
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullMessage.slice(0, i + 1));
      i++;
      if (i >= fullMessage.length) clearInterval(interval);
    }, 40);
    
    return () => {
      clearInterval(interval);
      setTyped('');
    };
  }, [open]);

  return (
    <>
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-28 right-6 z-50 w-80 rounded-2xl overflow-hidden shadow-2xl"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#075e54]">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center text-lg font-bold text-white bg-[#128c7e]">
                  IS
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-sm">Igor Soares</p>
                <p className="text-green-300 text-xs">Psicólogo · Online agora</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white opacity-70 hover:opacity-100 transition-opacity">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat body */}
            <div className="p-4 min-h-[180px] bg-[#e5ddd5]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
              
              {/* Date stamp */}
              <div className="text-center mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-black/15 text-slate-600">Hoje</span>
              </div>

              {/* Igor's message */}
              <div className="flex justify-start mb-3">
                <div className="max-w-[85%] px-3 py-2 rounded-2xl rounded-tl-none text-sm shadow-sm bg-white text-slate-900">
                  <p>Olá! 👋 Sou Igor Soares, psicólogo especialista em <strong>Burnout e Ansiedade</strong>.</p>
                  <p className="mt-1">Como posso te ajudar hoje?</p>
                  <p className="text-right text-[10px] mt-1 text-slate-400">09:00 ✓✓</p>
                </div>
              </div>

              {/* Igor's second message */}
              <div className="flex justify-start mb-4">
                <div className="max-w-[85%] px-3 py-2 rounded-2xl rounded-tl-none text-sm shadow-sm bg-white text-slate-900">
                  <p>Estou à disposição para tirarmos suas dúvidas e iniciarmos sua jornada terapêutica. 💙</p>
                  <p className="text-right text-[10px] mt-1 text-slate-400">09:01 ✓✓</p>
                </div>
              </div>

              {/* User typing area */}
              <div className="flex justify-end">
                <div className="max-w-[85%] px-3 py-2 rounded-2xl rounded-tr-none text-sm shadow-sm bg-[#dcf8c6] text-slate-900">
                  <p>{typed}<span className="animate-pulse">|</span></p>
                  <p className="text-right text-[10px] mt-1 text-slate-400">Agora</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 transition-colors bg-[#075e54] hover:bg-[#064e47]"
            >
              <div className="flex-1 px-3 py-2 rounded-full text-sm bg-white/15 text-white/70">
                Continuar no WhatsApp...
              </div>
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-[#25d366]">
                <Send className="w-4 h-4 text-white" />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {/* Notification bubble */}
        <AnimatePresence>
          {showBubble && !open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              className="px-4 py-2 rounded-2xl rounded-br-none text-sm font-medium shadow-lg max-w-[220px] text-right cursor-pointer"
              style={{ background: 'white', color: '#1a1a1a', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
              onClick={() => { setOpen(true); setShowBubble(false); }}
            >
              Olá! Posso te ajudar? 👋
              <div className="text-xs mt-0.5" style={{ color: '#888' }}>Igor Soares · Psicólogo</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { setOpen(!open); setShowBubble(false); }}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl relative"
          style={{ background: '#25d366', boxShadow: '0 8px 32px rgba(37,211,102,0.4)' }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="w-7 h-7 text-white" />
              </motion.div>
            ) : (
              <motion.div key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification dot */}
          {!open && showBubble && (
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white animate-pulse" />
          )}
        </motion.button>
      </div>
    </>
  );
};
