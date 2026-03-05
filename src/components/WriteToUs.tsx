import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WriteToUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="write-to-us" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-ayur-gold font-medium uppercase tracking-[0.3em] text-xs mb-4 block">
            Communication
          </span>
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-white">Write to us</h2>
          <p className="text-lg text-ayur-ink/60 max-w-2xl mx-auto italic font-serif">
            Have a question or want to share your experience? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-ayur-cream/30 p-8 md:p-12 rounded-[3rem] border border-ayur-olive/5 relative overflow-hidden shadow-xl shadow-ayur-olive/5">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit} 
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Your Name</label>
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

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Subject</label>
                  <input 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-white border border-ayur-olive/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-ayur-olive transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 text-ayur-olive/40 w-5 h-5" />
                    <textarea 
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white border border-ayur-olive/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-ayur-olive transition-all resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-ayur-olive text-white py-5 rounded-2xl text-lg font-medium hover:bg-ayur-olive/90 transition-all shadow-xl shadow-ayur-olive/10 flex items-center justify-center gap-3 group"
                >
                  <span>Send Message</span>
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-serif">Message Sent!</h3>
                <p className="text-ayur-ink/70 max-w-xs mx-auto italic">
                  Thank you for writing to us. We have received your message and will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-ayur-olive font-medium hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
