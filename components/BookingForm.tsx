'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ShieldCheck, Clock, User, Mail, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório').min(3, 'Nome muito curto'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: yup.string()
    .required('WhatsApp é obrigatório')
    .matches(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, 'Formato de telefone inválido'),
  preferredTimes: yup.string().optional(),
  message: yup.string().required('Conte-me brevemente o motivo do contato'),
}).required();

type BookingFormData = yup.InferType<typeof schema>;

export const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: yupResolver(schema) as any,
    mode: 'onBlur',
  });

  const onSubmit = async (data: BookingFormData) => {
    setLoading(true);

    try {
      await addDoc(collection(db, 'bookings'), {
        ...data,
        createdAt: serverTimestamp()
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Erro ao salvar agendamento:", error);
      alert("Houve um erro ao processar seu pedido. Por favor, tente novamente via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="agendamento" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-slate-50 p-12 md:p-20 rounded-[40px] border border-slate-100 shadow-xl"
          >
            <div className="w-20 h-20 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-slate-900 mb-6 font-medium">Sua jornada começou.</h2>
            <p className="text-lg md:text-xl text-slate-600 mb-10 font-light leading-relaxed">
              Obrigado por confiar no meu trabalho. Recebi seu pedido de agendamento e entrarei em contato nas próximas 24 horas para confirmarmos o melhor horário.
            </p>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest border-t border-slate-200 pt-8">
              Aguarde meu contato via WhatsApp ou E-mail.
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="agendamento" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-6 text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
             <Calendar className="w-4 h-4" />
             Atendimento sob agendamento
          </div>
          <h2 className="font-serif text-[2rem] md:text-6xl text-slate-950 mb-8 leading-tight tracking-tight">O primeiro passo <br />é o mais decisivo.</h2>
          <p className="text-base md:text-xl text-slate-600 leading-relaxed font-light mb-10 max-w-xl">
            Preencha os campos ao lado para que eu possa entender seu momento e preparar um acolhimento adequado às suas necessidades.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
               </div>
               <div>
                  <p className="font-bold text-slate-900">Privacidade Absoluta</p>
                  <p className="text-sm text-slate-500">Seus dados são protegidos por sigilo profissional rigoroso.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
               </div>
               <div>
                  <p className="font-bold text-slate-900">Retorno em 24h</p>
                  <p className="text-sm text-slate-500">Respondemos todas as solicitações em até um dia útil.</p>
               </div>
            </div>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)} 
          className="bg-slate-50 p-8 md:p-12 rounded-[32px] border border-slate-100 shadow-sm space-y-6"
        >
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Nome Completo</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <input 
                {...register('name')}
                type="text" 
                placeholder="Como gostaria de ser chamado?" 
                className={`w-full bg-white border ${errors.name ? 'border-red-400' : 'border-slate-200'} rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all text-slate-900 placeholder:text-slate-300`}
              />
            </div>
            {errors.name && <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider ml-1">{errors.name.message}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input 
                  {...register('email')}
                  type="email" 
                  placeholder="exemplo@email.com" 
                  className={`w-full bg-white border ${errors.email ? 'border-red-400' : 'border-slate-200'} rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all text-slate-900 placeholder:text-slate-300`}
                />
              </div>
              {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider ml-1">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">WhatsApp</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input 
                  {...register('phone')}
                  type="tel" 
                  placeholder="(00) 00000-0000" 
                  className={`w-full bg-white border ${errors.phone ? 'border-red-400' : 'border-slate-200'} rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all text-slate-900 placeholder:text-slate-300`}
                />
              </div>
              {errors.phone && <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider ml-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Horários de Preferência</label>
            <div className="relative">
              <Clock className="absolute left-4 top-4 w-4 h-4 text-slate-300" />
              <textarea 
                {...register('preferredTimes')}
                placeholder="Ex: Manhãs de Terça e Quinta, ou após às 18h..." 
                className="w-full bg-white border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all text-slate-900 placeholder:text-slate-300 h-24 resize-none"
              ></textarea>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Motivo do contato (Breve descrição)</label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-300" />
              <textarea 
                {...register('message')}
                placeholder="Fale um pouco sobre o que tem sentido..." 
                className={`w-full bg-white border ${errors.message ? 'border-red-400' : 'border-slate-200'} rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-100 transition-all text-slate-900 placeholder:text-slate-300 h-32 resize-none`}
              ></textarea>
            </div>
            {errors.message && <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider ml-1">{errors.message.message}</p>}
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white py-5 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 group"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Solicitar Agendamento
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};
