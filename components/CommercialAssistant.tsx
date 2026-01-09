
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../services/gemini';
import { Message } from '../types';

const CommercialAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou o assistente da Gemac. Como posso ajudar sua revenda hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await getGeminiResponse(userText, history);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText || 'Ops, tive um problema de conexão.' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-slate-950 text-white rounded-full shadow-2xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-12 right-0 bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Consultoria Online
          </span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-sm shadow-2xl flex flex-col overflow-hidden border border-slate-200 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-slate-950 p-5 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-sm border border-white/20 flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black uppercase text-sm tracking-tight">Gemac Assistant</h4>
                <div className="flex items-center text-[9px] opacity-60 uppercase font-bold tracking-tighter">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
                  Especialista Online
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-sm transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] flex items-start space-x-2 ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-4 rounded-sm text-sm ${m.role === 'user' ? 'bg-slate-950 text-white shadow-lg' : 'bg-white border border-slate-200 text-slate-800 shadow-sm'}`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-4 rounded-sm shadow-sm flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 text-slate-900 animate-spin" />
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Processando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-slate-200">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Dúvidas sobre marcas ou contato..."
                className="w-full bg-slate-100 border border-slate-200 rounded-sm px-4 py-4 text-sm focus:outline-none focus:border-slate-950 transition-all pr-12 font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-2 p-2 bg-slate-950 text-white rounded-sm hover:bg-slate-800 disabled:bg-slate-300 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[9px] text-center text-slate-400 mt-3 font-bold uppercase tracking-[0.2em]">
              Inteligência Artificial Gemac
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommercialAssistant;
