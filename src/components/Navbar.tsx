import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Team', href: '#team' },
    { name: 'Services', href: '#services' },
    { name: 'OP Services', href: '#consultation-booking' },
    { name: 'IP Services', href: '#room-booking' },
    { name: 'Videos', href: '#videos' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Write to us', href: '#write-to-us' },
    { name: 'Contact us', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ayur-olive backdrop-blur-md border-b border-white/10">
      <div className="bg-ayur-cream py-1 text-center">
        <span className="text-ayur-olive font-serif font-bold text-sm tracking-widest">
          Sree Gurubhyo Namaha!
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group cursor-pointer">
          <img 
            src="https://storage.googleapis.com/siprsw/sunethri/sunethrilogo.png" 
            alt="Sunethri Ayurveda Logo" 
            className="h-12 w-auto"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col items-start -space-y-1">
            <span className="font-serif text-3xl font-bold tracking-tight text-white leading-none group-hover:text-ayur-gold transition-colors">Sunethri</span>
            <span className="font-serif text-sm tracking-[0.3em] text-ayur-gold uppercase leading-none ml-1">Ayurveda</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-[11px] font-bold tracking-[0.2em] text-white/90 uppercase font-serif">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-ayur-gold transition-all duration-300 relative group py-2">
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ayur-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 hover:text-ayur-gold transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ayur-olive border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-white/90 font-serif font-bold text-lg tracking-widest hover:text-ayur-gold transition-colors py-2 border-b border-white/5 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
