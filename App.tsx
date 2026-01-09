
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommercialAssistant from './components/CommercialAssistant';
import { LOGO_URL } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-slate-900 selection:text-white">
      <Navbar isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        
        <section id="sobre" className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
          {/* Fundo decorativo sutil com a logo oficial */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none grayscale">
            <img src={LOGO_URL} alt="" className="w-96 h-auto rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
              <div className="relative">
                <div className="aspect-video md:aspect-square rounded-sm overflow-hidden shadow-2xl border-8 border-slate-50 bg-slate-50 flex items-center justify-center p-8">
                  <img 
                    src={LOGO_URL} 
                    alt="Logo Gemac Representações" 
                    className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="mt-16 lg:mt-0">
                <h2 className="text-slate-500 font-black tracking-[0.4em] uppercase mb-4 text-sm">Legado & Presença</h2>
                <h3 className="text-4xl font-black text-slate-950 sm:text-5xl uppercase tracking-tighter leading-none mb-8">
                  Compromisso em cada aperto de mão.
                </h3>
                <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
                  A Gemac Representações é o elo fundamental entre as grandes indústrias e o revendedor do Mato Grosso do Sul. Atuamos com transparência e foco total em impulsionar o agronegócio e a indústria local através de parcerias sólidas.
                </p>
                <div className="space-y-6">
                  {[
                    "Foco exclusivo em revendas do Mato Grosso do Sul",
                    "Representação oficial de marcas líderes",
                    "Atendimento especializado com Wendel e Jocimar",
                    "Ética e transparência em todas as negociações"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4 group">
                      <div className="mt-1 flex-shrink-0 h-6 w-6 bg-slate-950 flex items-center justify-center rounded-sm group-hover:bg-slate-700 transition-colors">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-slate-900 font-bold uppercase text-sm tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
      <CommercialAssistant />
    </div>
  );
};

export default App;
