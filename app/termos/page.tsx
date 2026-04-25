'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-[#f8f5f2] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-8 font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar para o início
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100"
        >
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-8 tracking-tight">Termos de Uso</h1>
          
          <div className="prose prose-slate prose-sm max-w-none space-y-6 text-slate-600 leading-relaxed">
            <h2 className="text-xl font-serif font-bold text-slate-900">1. Termos</h2>
            <p>
              Ao acessar ao site psicólogo Igor Soares, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
            </p>
            
            <h2 className="text-xl font-serif font-bold text-slate-900">2. Uso de Licença</h2>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site psicólogo Igor Soares, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: 
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>modificar ou copiar os materiais;</li>
              <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
              <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site psicólogo Igor Soares;</li>
              <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
              <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
            </ul>
            <p>
              Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por psicólogo Igor Soares a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
            </p>

            <h2 className="text-xl font-serif font-bold text-slate-900">3. Isenção de responsabilidade</h2>
            <p>
              Os materiais no site do psicólogo Igor Soares são fornecidos 'como estão'. psicólogo Igor Soares não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
            </p>
            <p>
              Além disso, o psicólogo Igor Soares não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
            </p>

            <h2 className="text-xl font-serif font-bold text-slate-900">4. Limitações</h2>
            <p>
              Em nenhum caso o psicólogo Igor Soares ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em psicólogo Igor Soares, mesmo que psicólogo Igor Soares ou um representante autorizado do psicólogo Igor Soares tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
            </p>

            <h2 className="text-xl font-serif font-bold text-slate-900">5. Precisão dos materiais</h2>
            <p>
              Os materiais exibidos no site do psicólogo Igor Soares podem incluir erros técnicos, tipográficos ou fotográficos. psicólogo Igor Soares não garante que qualquer material em seu site seja preciso, completo ou atual. psicólogo Igor Soares pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, psicólogo Igor Soares não se compromete a atualizar os materiais.
            </p>

            <h2 className="text-xl font-serif font-bold text-slate-900">6. Links</h2>
            <p>
              O psicólogo Igor Soares não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por psicólogo Igor Soares do site. O uso de qualquer site vinculado é por conta e risco do usuário.
            </p>

            <h2 className="text-xl font-serif font-bold text-slate-900">Modificações</h2>
            <p>
              O psicólogo Igor Soares pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </p>

            <h2 className="text-xl font-serif font-bold text-slate-900">Lei aplicável</h2>
            <p>
              Estes termos e condições são regidos e interpretados de acordo com as leis do psicólogo Igor Soares e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
