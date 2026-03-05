import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/ayurvedic-herbs-mortar/1920/1080" 
          alt="Ayurvedic Herbs" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ayur-cream/70 via-ayur-cream/85 to-ayur-cream" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-2"
        >
          <h2 className="text-ayur-gold font-serif font-bold italic text-2xl md:text-3xl tracking-wide">
            Sunethri Ayurvedashramam
          </h2>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-serif font-bold italic text-ayur-olive mb-8 tracking-tight"
        >
          Ancient Wisdom for Modern Life
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-ayur-ink/70 max-w-2xl mx-auto mb-12 font-serif italic font-bold"
        >
          Discover the profound healing power of Ayurveda. Tailored treatments, herbal wisdom, and holistic guidance for your unique constitution.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "backOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#consultation-booking" className="bg-ayur-olive text-white px-8 py-3 rounded-full text-base font-medium hover:bg-ayur-olive/90 transition-all shadow-lg shadow-ayur-olive/10 hover:scale-105 active:scale-95">
            Book Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
