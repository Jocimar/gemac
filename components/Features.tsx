
import React from 'react';
import { INDUSTRIES_DATA } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="industrias" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="text-center mb-16">
            <h2 className="text-slate-400 font-bold tracking-[0.4em] uppercase text-xs mb-3">Linha de Frente</h2>
            <p className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter">Indústrias Representadas</p>
            <div className="w-16 h-1.5 bg-black mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
            {INDUSTRIES_DATA.map((brand) => (
              <div 
                key={brand.name} 
                className="group bg-slate-50 p-8 rounded-sm border border-slate-100 flex items-center justify-center hover:bg-black transition-all duration-500 shadow-sm hover:shadow-2xl text-center cursor-default"
              >
                <span className="text-lg md:text-xl font-black text-slate-400 uppercase italic tracking-tighter group-hover:text-white transition-colors">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
