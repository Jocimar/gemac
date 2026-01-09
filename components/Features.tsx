
import React from 'react';
import { INDUSTRIES_DATA } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="industrias" className="py-12 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-slate-400 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-2">Linha de Frente</h2>
            <p className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter">Indústrias Representadas</p>
            <div className="w-12 h-1 bg-black mx-auto mt-4 md:mt-6"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-8">
            {INDUSTRIES_DATA.map((brand) => (
              <a 
                key={brand.name} 
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 md:p-8 rounded-sm border flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-xl text-center cursor-pointer bg-white no-underline"
                style={{ 
                  borderColor: `${brand.brandColor}33`, // Borda sutil com 20% de opacidade
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = brand.brandColor;
                  e.currentTarget.style.borderColor = brand.brandColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.borderColor = `${brand.brandColor}33`;
                }}
              >
                <span 
                  className="text-sm md:text-xl font-black uppercase tracking-tighter transition-colors duration-300 group-hover:!text-white"
                  style={{ color: brand.brandColor }}
                >
                  {brand.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
