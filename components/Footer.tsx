
import React, { useState } from 'react';
import { Instagram, Facebook, X, Phone } from 'lucide-react';
import { LOGO_URL, ADMIN_CONTACT } from '../constants';

const Footer: React.FC = () => {
  const currentYear = 2026;
  const instagramUrl = "https://www.instagram.com/gemac.representacoes/";
  const facebookUrl = "https://www.facebook.com/profile.php?id=100091951693685";
  
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="bg-slate-950 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Linha Divisória Superior - Mesma largura do conteúdo */}
        <div className="w-full h-[1px] bg-white/5 mb-16"></div>

        {/* Layout Principal: Marca e Administrativo */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
          
          {/* BLOCO MARCA: Centralizado no mobile, à esquerda no desktop */}
          <div className="flex flex-col items-center md:items-start space-y-6 w-full md:w-auto">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-0.5 rounded-full overflow-hidden w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
                <img 
                  src={LOGO_URL} 
                  alt="Logo Gemac" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase leading-none">
                  GEMAC
                </span>
                <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mt-1">
                  REPRESENTAÇÕES
                </span>
              </div>
            </div>
            
            <div className="flex space-x-6 md:pl-2">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-all transform hover:scale-110" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-all transform hover:scale-110" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* BLOCO ADMINISTRATIVO: Centralizado no mobile, alinhado à direita no desktop */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-end">
            <div className="w-full max-w-[280px] md:w-72 flex flex-col items-center md:items-end">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-blue-400/50 mb-6 text-center md:text-right">
                ADMINISTRATIVO
              </h4>
              
              <div className="flex flex-col items-center md:items-end space-y-4">
                <a 
                  href={`https://wa.me/${ADMIN_CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-xl md:text-2xl font-black text-white hover:text-blue-400 transition-colors tracking-tight"
                >
                  <Phone className="w-5 h-5 text-slate-600" />
                  <span>{ADMIN_CONTACT.phone}</span>
                </a>
                
                <a 
                  href={`mailto:${ADMIN_CONTACT.email}`} 
                  className="text-xl md:text-2xl font-black text-white hover:text-blue-400 transition-colors tracking-tighter text-center md:text-right"
                >
                  {ADMIN_CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Barra Inferior (Copyright / Privacidade) */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-y-4 text-[9px] uppercase font-black tracking-[0.15em] text-slate-600">
          <div className="flex flex-col items-center text-center space-y-2">
            <span>© {currentYear} Gemac Representações</span>
            <span className="font-medium normal-case tracking-normal text-slate-700">Campo Grande / Mato Grosso do Sul</span>
          </div>
          
          <button 
            onClick={() => setIsPrivacyOpen(true)}
            className="hover:text-white transition-colors cursor-pointer text-center"
          >
            Política de Privacidade
          </button>
        </div>
      </div>

      {/* Pop-up de Política de Privacidade */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm">
          <div className="bg-white w-full max-w-xl max-h-[80vh] overflow-hidden rounded-sm flex flex-col shadow-2xl">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-lg font-black uppercase tracking-tight text-slate-900">Privacidade</h3>
              <button onClick={() => setIsPrivacyOpen(false)} className="p-2 text-slate-400 hover:text-slate-900"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-8 overflow-y-auto text-slate-600 text-xs space-y-4 leading-relaxed">
              <p>A Gemac Representações protege a privacidade de seus parceiros e clientes. Coletamos apenas dados necessários para a intermediação comercial no Mato Grosso do Sul.</p>
              <p>Os dados de contato fornecidos via chat ou formulário são usados exclusivamente para atendimento direto por Wendel Azevedo ou Jocimar Moreira.</p>
            </div>
            <div className="p-4 bg-slate-50 flex justify-end">
              <button onClick={() => setIsPrivacyOpen(false)} className="px-6 py-2 bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest rounded-sm">Fechar</button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
