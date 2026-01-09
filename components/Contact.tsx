
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const adminEmail = "gemac.admi@gmail.com";
  
  const contacts = [
    {
      name: "Wendel Azevedo",
      phone: "(67) 99858-8870",
      email: "wendel.gemac@gmail.com",
      whatsapp: "5567998588870"
    },
    {
      name: "Jocimar Moreira",
      phone: "(67) 99827-5445",
      email: "jocimar.gemac@gmail.com",
      whatsapp: "5567998275445"
    }
  ];

  return (
    <section id="contato" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-slate-500 font-bold tracking-[0.3em] uppercase mb-2">Conexão</h2>
          <h3 className="text-4xl font-black text-white sm:text-5xl uppercase tracking-tighter">
            Prontos para Negócios
          </h3>
          <p className="mt-6 text-lg text-slate-400 font-light">
            Entre em contato com nossa equipe em Mato Grosso do Sul e descubra como podemos potencializar sua revenda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {contacts.map((contact, idx) => (
            <div key={idx} className="bg-white/[0.03] backdrop-blur-sm p-10 rounded-sm border border-white/10 hover:border-white/40 transition-all group">
              <h4 className="text-3xl font-black mb-8 text-white uppercase tracking-tight">{contact.name}</h4>
              <div className="space-y-8">
                <a 
                  href={`tel:${contact.phone.replace(/\D/g,'')}`}
                  className="flex items-center space-x-5 hover:translate-x-2 transition-transform"
                >
                  <div className="bg-white/10 p-4 rounded-sm border border-white/10">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-black tracking-[0.2em] mb-1">Telefone</p>
                    <p className="text-xl font-bold">{contact.phone}</p>
                  </div>
                </a>

                <a 
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-5 hover:translate-x-2 transition-transform"
                >
                  <div className="bg-white/10 p-4 rounded-sm border border-white/10">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-black tracking-[0.2em] mb-1">WhatsApp</p>
                    <p className="text-xl font-bold">Enviar Mensagem</p>
                  </div>
                </a>

                <a 
                  href={`mailto:${contact.email}`}
                  className="flex items-center space-x-5 hover:translate-x-2 transition-transform"
                >
                  <div className="bg-white/10 p-4 rounded-sm border border-white/10">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-black tracking-[0.2em] mb-1">E-mail Comercial</p>
                    <p className="text-xl font-bold">{contact.email}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-center space-y-6">
          <div className="pt-8 flex flex-col items-center border-t border-white/10 w-full max-w-xs">
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.3em] mb-2">Administrativo</p>
            <a href={`mailto:${adminEmail}`} className="text-lg font-bold hover:text-slate-400 transition-colors">
              {adminEmail}
            </a>
          </div>
          
          <div className="flex items-center space-x-2 text-slate-500 py-4 uppercase text-xs font-bold tracking-[0.3em]">
            <MapPin className="w-4 h-4" />
            <span>Atendimento em todo o MS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
