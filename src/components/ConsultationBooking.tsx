import React, { useState } from 'react';
import { Calendar, Mail, User, Phone, MessageSquare, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ConsultationBooking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    preferredDoctor: 'Dr Prasad',
    message: ''
  });
  const [error, setError] = useState<string | null>(null);

  const today = new Date();
  const maxDate = new Date();
  maxDate.setMonth(today.getMonth() + 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Time validation
    const [hours, minutes] = formData.time.split(':').map(Number);
    const timeInMinutes = hours * 60 + minutes;
    
    const startMinutes = 8 * 60; // 8 AM
    const endMinutes = 18 * 60; // 6 PM

    // Date validation
    const selectedDate = new Date(formData.date);
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    
    const maxDateLimit = new Date();
    maxDateLimit.setMonth(maxDateLimit.getMonth() + 3);
    maxDateLimit.setHours(23, 59, 59, 999);
    
    if (selectedDate < todayDate) {
      setError("Please select a current or future date.");
      return;
    }

    if (selectedDate > maxDateLimit) {
      setError("Appointments can only be booked up to 3 months in advance.");
      return;
    }

    // Time validation
    if (formData.preferredDoctor === 'Dr Prasad') {
      const day = selectedDate.getDay();
      const allowedDays = [1, 2, 4, 5]; // Mon, Tue, Thu, Fri
      const prasadStart = 10 * 60; // 10 AM
      const prasadEnd = 16 * 60; // 4 PM

      if (!allowedDays.includes(day)) {
        setError("Dr. Prasad is only available on Mondays, Tuesdays, Thursdays, and Fridays.");
        return;
      }

      if (timeInMinutes < prasadStart || timeInMinutes > prasadEnd) {
        setError("Dr. Prasad is only available between 10:00 AM and 4:00 PM.");
        return;
      }
    } else if (formData.preferredDoctor === 'Dr Shenya') {
      const day = selectedDate.getDay();
      const allowedDays = [1, 2, 3, 4, 5, 6]; // Mon to Sat
      const shenyaStart = 10 * 60; // 10 AM
      const shenyaEnd = 16 * 60; // 4 PM

      if (!allowedDays.includes(day)) {
        setError("Dr. Shenya is only available from Monday to Saturday.");
        return;
      }

      if (timeInMinutes < shenyaStart || timeInMinutes > shenyaEnd) {
        setError("Dr. Shenya is only available between 10:00 AM and 4:00 PM.");
        return;
      }
    } else {
      if (timeInMinutes >= startMinutes && timeInMinutes <= endMinutes) {
        // Valid time for other doctors
      } else {
        setError("Please select a time between 8:00 AM and 6:00 PM.");
        return;
      }
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        preferredDoctor: 'Dr Prasad',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="consultation-booking" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-ayur-gold/10 text-ayur-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>Direct Access</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-white">Book a Direct <span className="italic">Consultation</span></h2>
          <p className="text-lg text-ayur-ink/60 max-w-2xl mx-auto italic font-serif">
            Speak directly with our expert Ayurvedic practitioners for a personalized health assessment and guidance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-ayur-cream p-8 md:p-12 rounded-[3rem] shadow-xl shadow-ayur-olive/5 border border-ayur-olive/5 relative overflow-hidden">
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-ayur-olive/40 w-5 h-5" />
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white border border-ayur-olive/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-ayur-olive transition-all"
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
                        className="w-full bg-white border border-ayur-olive/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-ayur-olive transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Preferred Doctor</label>
                    <select 
                      value={formData.preferredDoctor}
                      onChange={(e) => setFormData({...formData, preferredDoctor: e.target.value})}
                      className="w-full bg-white border border-ayur-olive/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-ayur-olive transition-all appearance-none cursor-pointer"
                    >
                      <option value="Dr Prasad">Dr Prasad</option>
                      <option value="Dr Shenya">Dr Shenya</option>
                    </select>
                    {formData.preferredDoctor === 'Dr Prasad' && (
                      <p className="text-[10px] text-ayur-gold font-bold uppercase tracking-wider mt-2 ml-1">
                        Available: Mon, Tue, Thu, Fri (10 AM - 4 PM)
                      </p>
                    )}
                    {formData.preferredDoctor === 'Dr Shenya' && (
                      <p className="text-[10px] text-ayur-gold font-bold uppercase tracking-wider mt-2 ml-1">
                        Available: Mon - Sat (10 AM - 4 PM)
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-ayur-olive/40 w-5 h-5" />
                      <input 
                        type="date" 
                        required
                        min={today.toISOString().split('T')[0]}
                        max={maxDate.toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full bg-white border border-ayur-olive/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-ayur-olive transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Preferred Time</label>
                    <div className="relative">
                      <input 
                        type="time" 
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className="w-full bg-white border border-ayur-olive/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-ayur-olive transition-all"
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs font-medium ml-1"
                  >
                    {error}
                  </motion.p>
                )}

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-ayur-olive/40 w-5 h-5" />
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white border border-ayur-olive/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-ayur-olive transition-all"
                      placeholder="+91 75500 48760"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Your Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 text-ayur-olive/40 w-5 h-5" />
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white border border-ayur-olive/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-ayur-olive transition-all resize-none"
                      placeholder="Describe your health concerns or goals..."
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-ayur-olive text-white py-5 rounded-2xl text-lg font-medium hover:bg-ayur-olive/90 transition-all shadow-xl shadow-ayur-olive/10"
                >
                  Request Consultation
                </button>
                <p className="text-center text-xs text-ayur-ink/50 mt-4 italic">
                  Confirmation will be sent to you to your email
                </p>
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
                <h3 className="text-3xl font-serif">Consultation Requested!</h3>
                <p className="text-ayur-ink/70 max-w-xs mx-auto italic">
                  Thank you for reaching out. One of our practitioners will contact you shortly to finalize your consultation time. Confirmation will be sent to you to your email.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-ayur-olive font-medium hover:underline"
                >
                  Request another consultation
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
