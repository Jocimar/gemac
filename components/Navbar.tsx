
import React, { useState } from 'react';
import { LOGO_URL } from '../constants';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center space-x-3">
            {/* Logo Oficial baseada na URL fornecida */}
            <div className={`transition-all duration-300 p-1 bg-white rounded-full ${isScrolled ? 'scale-90 shadow-sm' : 'scale-110 shadow-xl'}`}>
              <img 
                src={LOGO_URL} 
                alt="Gemac Representações" 
                className="h-12 w-12 object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tighter uppercase leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                GEMAC
              </span>
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase opacity-60 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                REPRESENTAÇÕES
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    isScrolled ? 'text-slate-700 hover:text-slate-950' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center ml-4 pl-4 border-l border-slate-300/30">
                <a
                  href="https://wa.me/5567998588870"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2.5 rounded-sm text-sm font-bold transition-all shadow-lg ${
                    isScrolled 
                    ? 'bg-slate-950 text-white hover:bg-slate-800' 
                    : 'bg-white text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  Falar Conosco
                </a>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <a
                href="https://wa.me/5567998588870"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-slate-950 text-white px-5 py-3 rounded-sm text-sm font-bold"
                onClick={() => setIsOpen(false)}
              >
                Falar Conosco
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
