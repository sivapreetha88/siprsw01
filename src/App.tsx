/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import ConsultationBooking from './components/ConsultationBooking';
import Videos from './components/Videos';
import Team from './components/Team';
import Gallery from './components/Gallery';
import RoomBooking from './components/RoomBooking';
import Contact from './components/Contact';
import WriteToUs from './components/WriteToUs';
import { SERVICES } from './constants';
import { motion } from 'motion/react';
import { Leaf, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-ayur-olive/20 selection:text-ayur-olive">
      <Navbar />
      
      <main>
        <Hero />

        <Team />

        {/* Services Section */}
        <section id="services" className="py-24 max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-ayur-gold font-medium uppercase tracking-[0.3em] text-xs mb-4 block">
              Our Healing Arts
            </span>
            <h2 className="text-5xl md:text-6xl font-serif mb-6 text-white">Our Services</h2>
            <p className="text-lg text-ayur-ink/60 max-w-2xl mx-auto italic font-serif">
              Experience time-honored therapies and expert consultations designed to detoxify, rejuvenate, and restore your body's innate intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </section>

        <ConsultationBooking />

        <RoomBooking />

        <Videos />

        <Gallery />

        <WriteToUs />

        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-[#F5F5DC] text-ayur-ink py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://storage.googleapis.com/siprsw/sunethri/sunethrilogo.png" 
                  alt="Sunethri Ayurveda Logo" 
                  className="h-16 w-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col items-start -space-y-1">
                  <span className="font-serif text-4xl font-bold tracking-tight text-ayur-olive leading-none">Sunethri</span>
                  <span className="font-serif italic text-base tracking-[0.3em] text-ayur-gold uppercase leading-none ml-1">Ayurveda</span>
                </div>
              </div>
              <p className="text-ayur-ink/70 max-w-md font-serif italic text-lg leading-relaxed">
                Dedicated to the ancient science of life. We provide a sanctuary for healing, balance, and profound transformation through the wisdom of Ayurveda.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6 text-ayur-olive">Contact Us</h4>
              <ul className="space-y-4 text-ayur-ink/70 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-ayur-gold shrink-0 mt-1" />
                  <span>Mathikunnu, Trikkur Post<br />THRISSUR, IN</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-ayur-gold" />
                  <span>9947767386</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-ayur-gold" />
                  <span>sunethriayurveda@gmail.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-6 text-ayur-olive">Quick Links</h4>
              <ul className="space-y-4 text-ayur-ink/70 text-sm italic font-serif">
                <li><a href="#team" className="hover:text-ayur-gold transition-colors">Our Team</a></li>
                <li><a href="#services" className="hover:text-ayur-gold transition-colors">Services</a></li>
                <li><a href="#consultation-booking" className="hover:text-ayur-gold transition-colors italic">OP Services</a></li>
                <li><a href="#room-booking" className="hover:text-ayur-gold transition-colors">IP Services</a></li>
                <li><a href="#videos" className="hover:text-ayur-gold transition-colors">Videos</a></li>
                <li><a href="#gallery" className="hover:text-ayur-gold transition-colors">Gallery</a></li>
                <li><a href="#write-to-us" className="hover:text-ayur-gold transition-colors">Write to us</a></li>
                <li><a href="#contact" className="hover:text-ayur-gold transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-6 text-ayur-olive">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-ayur-olive/10 flex items-center justify-center hover:bg-ayur-gold hover:border-ayur-gold transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-ayur-olive/10 flex items-center justify-center hover:bg-ayur-gold hover:border-ayur-gold transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-ayur-olive/10 flex items-center justify-center hover:bg-ayur-gold hover:border-ayur-gold transition-all">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-ayur-olive/10 flex flex-col md:row items-center justify-between gap-4">
            <p className="text-ayur-ink/40 text-xs uppercase tracking-widest font-medium">
              © 2026 Sunethri Ayurveda. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-ayur-ink/40 text-xs uppercase tracking-widest font-medium">
              <a href="#" className="hover:text-ayur-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-ayur-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
