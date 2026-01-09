
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é o Consultor Virtual da Gemac Representações. 
Sua missão é atender revendedores e indústrias com máximo profissionalismo.

Contexto Corporativo:
- Empresa: Gemac Representações.
- Localização: Atendimento exclusivo em todo o estado de Mato Grosso do Sul (MS).
- Especialidade: Implementos agrícolas, maquinário industrial e peças técnicas.
- Marcas Representadas: Indutar, Grazmec, Rypro (by Rubemaq), Rubemaq, Roster e Rodoplant.

Contatos Oficiais:
1. Wendel Azevedo (Diretor Comercial): (67) 99858-8870 | wendel.gemac@gmail.com
2. Jocimar Moreira (Consultor Comercial): (67) 99827-5445 | jocimar.gemac@gmail.com

Diretrizes de Atendimento:
- Tom de voz: Sério, executivo, experiente e prestativo.
- Idioma: Português (Brasil).
- Respostas curtas: No máximo 2 parágrafos para agilidade.
- Call to Action: Sempre encoraje o contato direto com Wendel ou Jocimar para cotações e visitas técnicas.
`;

// getGeminiResponse coordinates the chat interaction using the latest Gemini models
export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  // Use the process.env.API_KEY directly to initialize the client as per security and SDK guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5,
        topP: 0.8,
        // Max output tokens and thinking budget are left to default for optimal response reliability
      },
    });

    // Extract text directly from the response object property
    return response.text || "Poderia reformular sua pergunta? Estou à disposição para ajudar.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "No momento não consegui processar sua dúvida. Fale diretamente com Wendel no (67) 99858-8870 para um atendimento imediato.";
  }
};
