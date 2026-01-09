import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background com loading eager para LCP (Largest Contentful Paint) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594488630303-91897937bd89?auto=format&fit=crop&q=80&w=2000" 
          alt="Maquinário Agrícola no Mato Grosso do Sul" 
          className="w-full h-full object-cover opacity-25 grayscale scale-105 motion-safe:animate-[pulse_10s_infinite]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl animate-fade-in">
          <h2 className="text-white/50 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-6 border-l-2 border-white/30 pl-4">
            Estratégia & Performance • Mato Grosso do Sul
          </h2>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
            GEMAC<br />
            <span className="text-white/20 not-italic">REPRESENTAÇÕES</span>
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed">
            Intermediação estratégica de alta performance em implementos e peças. Conectando as melhores indústrias às revendas de todo o Mato Grosso do Sul.
          </p>
        </div>
      </div>

      {/* Indicador de scroll sutil */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 animate-bounce">
        <span className="text-[10px] uppercase font-bold tracking-widest text-white mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;