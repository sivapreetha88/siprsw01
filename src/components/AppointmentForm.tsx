import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Calendar, Mail, User, MessageSquare, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AppointmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    serviceId: SERVICES[0].id,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        date: '',
        serviceId: SERVICES[0].id,
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="booking" className="py-24 bg-ayur-cream">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-ayur-gold font-medium uppercase tracking-[0.3em] text-xs mb-4 block">
            Reserve Your Session
          </span>
          <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
            Begin Your <span className="italic">Healing</span> Journey Today
          </h2>
          <p className="text-lg text-ayur-ink/70 mb-12 font-serif italic">
            Our practitioners are dedicated to your holistic well-being. Schedule a consultation or treatment to start restoring your natural balance.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-white border border-ayur-olive/10 flex items-center justify-center shrink-0">
                <Calendar className="text-ayur-olive w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-1">Flexible Scheduling</h4>
                <p className="text-sm text-ayur-ink/60">Available Monday to Saturday, 8:00 AM - 7:00 PM.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-white border border-ayur-olive/10 flex items-center justify-center shrink-0">
                <User className="text-ayur-olive w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-1">Expert Practitioners</h4>
                <p className="text-sm text-ayur-ink/60">Certified Ayurvedic doctors and therapists with years of experience.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-ayur-olive/5 border border-ayur-olive/5 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-ayur-olive/40 w-5 h-5" />
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-ayur-cream/30 border border-ayur-olive/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-ayur-olive transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-ayur-olive/40 w-5 h-5" />
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-ayur-cream/30 border border-ayur-olive/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-ayur-olive transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-ayur-olive/40 w-5 h-5" />
                      <input 
                        type="date" 
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full bg-ayur-cream/30 border border-ayur-olive/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-ayur-olive transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Service</label>
                    <select 
                      value={formData.serviceId}
                      onChange={(e) => setFormData({...formData, serviceId: e.target.value})}
                      className="w-full bg-ayur-cream/30 border border-ayur-olive/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-ayur-olive transition-all appearance-none cursor-pointer"
                    >
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Special Notes</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 text-ayur-olive/40 w-5 h-5" />
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-ayur-cream/30 border border-ayur-olive/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-ayur-olive transition-all resize-none"
                      placeholder="Any specific health concerns..."
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-ayur-olive text-white py-5 rounded-2xl text-lg font-medium hover:bg-ayur-olive/90 transition-all shadow-xl shadow-ayur-olive/10"
                >
                  Confirm Booking
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 bg-ayur-olive text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={40} />
                </div>
                <h3 className="text-3xl font-serif">Booking Received!</h3>
                <p className="text-ayur-ink/70 max-w-xs mx-auto italic">
                  Thank you for choosing Sunethri Ayurveda. We will contact you shortly to confirm your appointment.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-ayur-olive font-medium hover:underline"
                >
                  Book another session
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
