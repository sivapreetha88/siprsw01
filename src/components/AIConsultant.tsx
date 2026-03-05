import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import Markdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';

const SYSTEM_INSTRUCTION = `You are a wise and compassionate Ayurvedic Consultant at Sunethri Ayurveda. 
Your goal is to provide holistic wellness advice based on traditional Ayurvedic principles.
Always be respectful, calming, and informative. 
When giving advice:
1. Mention Doshas (Vata, Pitta, Kapha) when relevant.
2. Suggest natural remedies, dietary changes, or lifestyle adjustments.
3. Use a warm, editorial tone.
4. Include a disclaimer that this is for informational purposes and not a substitute for professional medical advice.
5. Keep responses concise and well-structured using Markdown.`;

export default function AIConsultant() {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', content: string }[]>([
    { role: 'bot', content: "Namaste. I am your Ayurvedic wellness guide. How can I assist you on your journey to balance today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      const botResponse = response.text || "I apologize, I am unable to provide advice at this moment. Please try again.";
      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'bot', content: "I encountered an error while connecting to the ancient wisdom. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="consultant" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-ayur-gold/10 text-ayur-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>AI Wisdom</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Ayurvedic AI Consultant</h2>
          <p className="text-ayur-ink/60 max-w-lg mx-auto italic">
            Ask our AI guide about herbs, diet, or lifestyle practices tailored to your wellness goals.
          </p>
        </div>

        <div className="bg-ayur-cream rounded-[3rem] border border-ayur-olive/10 overflow-hidden shadow-2xl shadow-ayur-olive/5 flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="p-6 bg-white border-b border-ayur-olive/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-ayur-olive flex items-center justify-center text-white">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-serif text-lg leading-none">Wellness Guide</h3>
              <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">Online & Ready</span>
            </div>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
            <AnimatePresence initial={false}>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === 'user' ? 'bg-ayur-gold text-white' : 'bg-ayur-olive text-white'
                    }`}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-5 rounded-[2rem] ${
                      msg.role === 'user' 
                        ? 'bg-ayur-olive text-white rounded-tr-none' 
                        : 'bg-white text-ayur-ink border border-ayur-olive/5 rounded-tl-none'
                    }`}>
                      <div className="markdown-body prose prose-sm max-w-none">
                        <Markdown>{msg.content}</Markdown>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3 items-center bg-white/50 px-6 py-3 rounded-full border border-ayur-olive/5">
                  <Loader2 className="animate-spin text-ayur-olive" size={18} />
                  <span className="text-xs font-medium text-ayur-olive italic">Consulting the ancient texts...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-ayur-olive/5">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about seasonal diet, herbs, or stress relief..."
                className="w-full bg-ayur-cream/50 border border-ayur-olive/10 rounded-full py-4 pl-6 pr-16 focus:outline-none focus:border-ayur-olive transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-ayur-olive text-white rounded-full flex items-center justify-center hover:bg-ayur-olive/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center mt-4 text-ayur-ink/40 uppercase tracking-widest font-bold">
              Holistic advice for informational purposes only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
