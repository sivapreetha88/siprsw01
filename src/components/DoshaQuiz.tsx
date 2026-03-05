import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DOSHA_QUIZ } from '../constants';
import { Dosha } from '../types';
import { CheckCircle2, RefreshCcw } from 'lucide-react';

export default function DoshaQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Dosha[]>([]);
  const [result, setResult] = useState<Dosha | null>(null);

  const handleAnswer = (dosha: Dosha) => {
    const newAnswers = [...answers, dosha];
    if (currentStep < DOSHA_QUIZ.length - 1) {
      setAnswers(newAnswers);
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Dosha[]) => {
    const counts = finalAnswers.reduce((acc, dosha) => {
      acc[dosha] = (acc[dosha] || 0) + 1;
      return acc;
    }, {} as Record<Dosha, number>);

    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    setResult(sorted[0][0] as Dosha);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section id="quiz" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Discover Your Dosha</h2>
          <p className="text-ayur-ink/60 max-w-lg mx-auto italic">
            According to Ayurveda, we are all composed of three vital energies. Knowing your dominant Dosha helps you live in harmony.
          </p>
        </div>

        <div className="bg-ayur-cream p-8 md:p-12 rounded-[2rem] shadow-sm border border-ayur-olive/5 min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex justify-between items-end mb-4">
                  <span className="text-ayur-gold font-medium uppercase tracking-widest text-xs">
                    Question {currentStep + 1} of {DOSHA_QUIZ.length}
                  </span>
                  <div className="flex gap-1">
                    {DOSHA_QUIZ.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 w-8 rounded-full transition-all ${i <= currentStep ? 'bg-ayur-olive' : 'bg-ayur-olive/10'}`} 
                      />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif text-ayur-ink">
                  {DOSHA_QUIZ[currentStep].question}
                </h3>

                <div className="grid gap-4">
                  {DOSHA_QUIZ[currentStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option.dosha)}
                      className="w-full text-left p-6 rounded-2xl bg-white border border-ayur-olive/10 hover:border-ayur-olive hover:bg-ayur-olive/5 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg text-ayur-ink group-hover:text-ayur-olive transition-colors">
                          {option.text}
                        </span>
                        <div className="w-6 h-6 rounded-full border border-ayur-olive/20 flex items-center justify-center group-hover:border-ayur-olive transition-all">
                          <div className="w-2 h-2 rounded-full bg-ayur-olive opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="w-20 h-20 bg-ayur-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-ayur-olive w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif">Your Dominant Dosha is:</h3>
                <div className="text-6xl font-serif italic text-ayur-olive">{result}</div>
                
                <p className="text-ayur-ink/70 max-w-md mx-auto">
                  {result === 'Vata' && "You are energetic, creative, and light. When balanced, you are vibrant and imaginative. When out of balance, you may feel anxious or experience dryness."}
                  {result === 'Pitta' && "You are intelligent, determined, and focused. When balanced, you are a natural leader. When out of balance, you may experience irritability or inflammation."}
                  {result === 'Kapha' && "You are calm, loving, and strong. When balanced, you are loyal and stable. When out of balance, you may feel lethargic or experience congestion."}
                </p>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button 
                    onClick={resetQuiz}
                    className="flex items-center gap-2 text-ayur-ink/60 hover:text-ayur-olive transition-colors"
                  >
                    <RefreshCcw size={18} /> Retake Quiz
                  </button>
                  <a href="#consultation-booking" className="bg-ayur-olive text-white px-8 py-3 rounded-full hover:bg-ayur-olive/90 transition-all">
                    Get Personalized Advice
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
