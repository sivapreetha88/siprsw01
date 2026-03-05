import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-ayur-cream/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-ayur-gold font-medium uppercase tracking-[0.3em] text-xs mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-white">Contact Us</h2>
          <p className="text-lg text-ayur-ink/60 max-w-2xl mx-auto italic font-serif">
            We are here to assist you on your journey to wellness. Reach out to us for any inquiries or to visit our sanctuary.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-serif mb-8">Our Location</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white border border-ayur-olive/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-ayur-olive w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Address</h4>
                    <p className="text-ayur-ink/60 leading-relaxed">
                      Mathikunnu, Trikkur Post<br />
                      THRISSUR, IN
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white border border-ayur-olive/10 flex items-center justify-center shrink-0">
                    <Phone className="text-ayur-olive w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Phone</h4>
                    <a href="tel:9947767386" className="text-ayur-ink/60 hover:text-ayur-olive transition-colors">
                      9947767386
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white border border-ayur-olive/10 flex items-center justify-center shrink-0">
                    <Mail className="text-ayur-olive w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Email</h4>
                    <a href="mailto:sunethriayurveda@gmail.com" className="text-ayur-ink/60 hover:text-ayur-olive transition-colors">
                      sunethriayurveda@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder or Contact Form */}
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl shadow-ayur-olive/5 border border-ayur-olive/5 h-[500px] relative">
            <div className="absolute inset-0 bg-ayur-cream/20 flex items-center justify-center p-12 text-center">
              <div>
                <MapPin size={48} className="text-ayur-gold mx-auto mb-6 opacity-20" />
                <h4 className="font-serif text-2xl mb-4">Thrissur, Kerala</h4>
                <p className="text-ayur-ink/40 italic">
                  Our sanctuary is nestled in the peaceful landscapes of Mathikunnu, providing the perfect backdrop for your healing journey.
                </p>
              </div>
            </div>
            <iframe 
              src="https://maps.google.com/maps?q=Sunethri%20Ayurveda%20Mathikunnu%20Trikkur&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0 grayscale opacity-60 hover:opacity-100 transition-opacity duration-700"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="max-w-3xl mx-auto p-10 bg-ayur-olive text-white rounded-[3rem] shadow-2xl shadow-ayur-olive/20 text-center">
          <h4 className="font-serif text-3xl mb-4 italic">Visit Us</h4>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Experience the serene environment of our clinic in Thrissur. We recommend booking an appointment in advance for the best experience.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium uppercase tracking-widest bg-white/10 py-4 px-8 rounded-full w-fit mx-auto">
            <Clock size={18} className="text-ayur-gold" />
            <span>Mon - Sat: 8:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
