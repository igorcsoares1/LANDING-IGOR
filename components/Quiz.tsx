'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, Brain } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

export const Quiz = () => {
  const questions = [
    "Sinto um esgotamento persistente que o descanso habitual não resolve.",
    "Tenho dificuldade em me desconectar mentalmente do trabalho fora do horário.",
    "Sinto irritabilidade frequente com demandas que antes eram simples.",
    "A sensação de ineficácia ou falta de propósito no cargo é constante.",
    "Apresento sintomas físicos (insônia, dores) relacionados ao estresse.",
    "O lazer perdeu o sentido diante da preocupação com as responsabilidades."
  ];

  const [answers, setAnswers] = React.useState<number[]>(new Array(questions.length).fill(0));
  const [showResult, setShowResult] = React.useState(false);

  const handleAnswer = (index: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const score = answers.reduce((a, b) => a + b, 0);

  const getResultMessage = () => {
    if (score < 10) return "Seu nível de estresse parece sob controle, mas é vital manter a vigilância preventiva.";
    if (score < 18) return "Você apresenta sinais claros de sobrecarga. Este é o momento estratégico para intervir e prevenir o agravamento clínico.";
    return "Seus indicadores sugerem um alto risco ou estado de Burnout. Uma avaliação profissional detalhada é recomendada com urgência.";
  };

  return (
    <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <ClipboardList className="w-3.5 h-3.5" />
            Protocolo de Autoavaliação
          </div>
          <h2 className="font-serif text-3xl md:text-5xl mb-6 font-medium">Avalie seu nível de exaustão</h2>
          <p className="text-slate-400 text-lg md:text-xl font-light">Um primeiro passo reflexivo para entender seu momento atual.</p>
        </div>

        {!showResult ? (
          <div className="space-y-6 md:space-y-8 bg-white/5 backdrop-blur-md p-6 md:p-14 rounded-[32px] border border-white/10">
            {questions.map((q, i) => (
              <div key={i} className="space-y-4 md:space-y-5 border-b border-white/5 pb-6 md:pb-8 last:border-0 last:pb-0">
                <p className="text-base md:text-xl font-serif leading-relaxed italic">&quot;{q}&quot;</p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 md:gap-4">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button
                      key={val}
                      onClick={() => handleAnswer(i, val)}
                      className={`py-2.5 md:py-4 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${
                        answers[i] === val 
                          ? 'bg-white text-slate-950' 
                          : 'bg-white/5 hover:bg-white/10 text-slate-400'
                      }`}
                    >
                      {val === 1 ? 'Nunca' : val === 5 ? 'Sempre' : val}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button 
              onClick={() => setShowResult(true)}
              className="w-full bg-white text-slate-950 hover:bg-slate-100 py-4 md:py-6 rounded-xl md:rounded-2xl text-base md:text-lg font-bold uppercase tracking-widest transition-all mt-6 md:mt-10 shadow-2xl shadow-white/5"
            >
              Obter Análise Preliminar
            </button>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white text-slate-950 p-10 md:p-20 rounded-[32px] text-center shadow-3xl"
          >
            <div className="w-20 h-20 bg-slate-100 text-slate-800 rounded-full flex items-center justify-center mx-auto mb-10">
              <Brain className="w-10 h-10" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Conclusão da Análise</h3>
            <p className="text-xl leading-relaxed text-slate-600 mb-12 max-w-2xl mx-auto font-light">
              {getResultMessage()}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl font-bold uppercase tracking-wider hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center text-sm md:text-base"
              >
                Conversar com Igor
              </a>
              <button 
                onClick={() => { setShowResult(false); setAnswers(new Array(questions.length).fill(0)); }}
                className="text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-slate-900 transition-colors"
              >
                Refazer Protocolo
              </button>
            </div>
          </motion.div>
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-600 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-slate-700 rounded-full blur-[180px]" />
      </div>
    </section>
  );
};
