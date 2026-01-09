
import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const instagramUrl = "https://www.instagram.com/gemac.representacoes/";
  const facebookUrl = "https://www.facebook.com/profile.php?id=100091951693685";
  const adminEmail = "gemac.admi@gmail.com";
  
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white p-1 rounded-full overflow-hidden w-16 h-16 shadow-lg">
                <img 
                  src={LOGO_URL} 
                  alt="Logo Gemac" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white uppercase italic leading-none">
                  GEMAC
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase">
                  REPRESENTAÇÕES
                </span>
              </div>
            </div>
            <p className="mt-2 text-slate-500 text-sm max-w-xs font-light leading-relaxed text-center md:text-left">
              Intermediação estratégica de negócios no MS. Compromisso com a ética industrial e resultados exponenciais.
            </p>
            <div className="mt-4 flex items-center space-x-2 text-slate-400 group">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${adminEmail}`} className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                {adminEmail}
              </a>
            </div>
          </div>
          
          <div className="flex space-x-8">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all transform hover:scale-110" aria-label="Instagram">
              <Instagram className="w-8 h-8" />
            </a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all transform hover:scale-110" aria-label="Facebook">
              <Facebook className="w-8 h-8" />
            </a>
          </div>

          <div className="text-slate-600 text-xs font-bold tracking-widest uppercase text-center md:text-right">
            © {currentYear} Gemac Representações<br />
            <span className="font-light normal-case opacity-50">Campo Grande / Mato Grosso do Sul</span>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] text-slate-700 uppercase font-black tracking-[0.2em]">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Compliance</a>
          <a href="#" className="hover:text-white transition-colors">LGPD Industrial</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
