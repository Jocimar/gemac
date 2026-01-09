import React, { useState } from 'react';
import { Instagram, Facebook, MapPin, X } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  const currentYear = 2026;
  const instagramUrl = "https://www.instagram.com/gemac.representacoes/";
  const facebookUrl = "https://www.facebook.com/profile.php?id=100091951693685";
  const adminEmail = "gemac.admi@gmail.com";
  
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rodapé com 2 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Coluna da Esquerda: Identidade (Mantém) */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-1 rounded-full overflow-hidden w-14 h-14 shadow-lg">
                <img 
                  src={LOGO_URL} 
                  alt="Logo Gemac" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white uppercase italic leading-none">
                  GEMAC
                </span>
                <span className="text-[9px] font-bold tracking-[0.3em] text-slate-500 uppercase">
                  REPRESENTAÇÕES
                </span>
              </div>
            </div>
            <p className="text-slate-500 text-sm max-w-sm font-light leading-relaxed text-center md:text-left">
              Estrategistas em representação comercial de implementos e maquinários. Conexão sólida entre indústria e campo no MS.
            </p>
            <div className="flex space-x-6">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Coluna da Direita: Contato Administrativo (Estilo solicitado em imagem) */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-xs space-y-4">
              <div className="w-full h-[1px] bg-white/10 mb-8"></div>
              
              <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-500">
                ADMINISTRATIVO
              </h4>
              
              <a 
                href={`mailto:${adminEmail}`} 
                className="block text-xl md:text-2xl font-black text-white hover:text-slate-300 transition-colors tracking-tight"
              >
                {adminEmail}
              </a>
              
              <div className="pt-6 flex items-center justify-center space-x-2 text-slate-500 uppercase text-[10px] font-black tracking-[0.2em]">
                <MapPin className="w-4 h-4" />
                <span>ATENDIMENTO EM TODO O MS</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Barra Inferior Lado a Lado */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-y-4 text-[10px] uppercase font-black tracking-[0.15em] text-slate-600">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 text-center md:text-left">
            <span>© {currentYear} Gemac Representações</span>
            <span className="hidden md:inline opacity-30">|</span>
            <span className="font-light normal-case opacity-40">Campo Grande / Mato Grosso do Sul</span>
          </div>
          
          <button 
            onClick={() => setIsPrivacyOpen(true)}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Política de Privacidade
          </button>
        </div>
      </div>

      {/* Pop-up de Política de Privacidade */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-sm shadow-2xl flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">Política de Privacidade</h3>
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="p-2 hover:bg-slate-200 rounded-sm transition-colors text-slate-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-slate-600 text-sm leading-relaxed space-y-4">
              <p className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Transparência e Segurança</p>
              <p>
                A Gemac Representações preza pela segurança dos dados de seus parceiros. Esta política descreve como tratamos as informações coletadas.
              </p>
              
              <p className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Coleta de Dados</p>
              <p>
                Coletamos informações básicas de contato fornecidas voluntariamente para fins de intermediação comercial entre indústrias e revendas.
              </p>

              <p className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Finalidade</p>
              <p>
                Seus dados são utilizados para processar solicitações de orçamentos, visitas técnicas e suporte especializado.
              </p>

              <p className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Compartilhamento</p>
              <p>
                Não vendemos seus dados. Informações são compartilhadas com indústrias representadas apenas quando necessário para formalização de negócios.
              </p>

              <p className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Contato</p>
              <p>
                Dúvidas podem ser encaminhadas para <span className="font-bold">{adminEmail}</span>.
              </p>
            </div>
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="px-6 py-2 bg-slate-900 text-white text-xs font-black uppercase tracking-widest hover:bg-slate-700 transition-colors rounded-sm"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;