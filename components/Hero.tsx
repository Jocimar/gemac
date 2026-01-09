
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
        <div className="max-w-4xl animate-fade-in text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-white/50 font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[9px] md:text-sm mb-4 md:mb-6 border-l-0 lg:border-l-2 border-white/30 lg:pl-4">
            Soluções para o campo e cidade.
          </h2>
          <h1 className="font-black text-white leading-[0.85] tracking-tighter uppercase flex flex-col items-center lg:items-start">
            <span className="text-[15vw] sm:text-7xl md:text-9xl">GEMAC</span>
            <span className="text-[8.5vw] sm:text-5xl md:text-7xl text-white/20 not-italic block mt-1 sm:mt-0 whitespace-nowrap">REPRESENTAÇÕES</span>
          </h1>
          <p className="mt-6 md:mt-8 text-sm md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed px-4 lg:px-0">
            Representante de peças e implementos agrícolas no MS.<br className="hidden sm:block" />
            Ligando boas indústrias a revendas que fazem o agro acontecer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
