import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Phone, Mail, Home, Check, Sparkles, Info } from 'lucide-react';
import { ROOMS } from '../constants';

export default function RoomBooking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState(ROOMS[0].id);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    patientCount: '1',
    specialNeeds: ''
  });
  const [error, setError] = useState<string | null>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const maxCheckIn = new Date();
  maxCheckIn.setDate(today.getDate() + 120);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.checkIn) {
      const checkInDate = new Date(formData.checkIn);
      if (checkInDate > maxCheckIn) {
        setError("Check-in date cannot be more than 120 days from today.");
        return;
      }
    }

    if (formData.checkIn && formData.checkOut) {
      const start = new Date(formData.checkIn);
      const end = new Date(formData.checkOut);
      const diffTime = end.getTime() - start.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays < 0) {
        setError("Check-out date must be after check-in date.");
        return;
      }
      
      if (diffDays > 30) {
        setError("Maximum stay is 30 days.");
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
        checkIn: '',
        checkOut: '',
        patientCount: '1',
        specialNeeds: ''
      });
    }, 1000);
  };

  const selectedRoom = ROOMS.find(r => r.id === selectedRoomId);

  return (
    <section id="room-booking" className="py-24 bg-ayur-cream/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-ayur-gold/10 text-ayur-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Home size={14} />
            <span>Healing Sanctuary</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-white">In-Patient <span className="italic">Room Booking</span></h2>
          <p className="text-lg text-ayur-ink/60 max-w-2xl mx-auto italic font-serif">
            Choose your sanctuary for deep healing and rejuvenation. Our rooms are designed to provide the perfect environment for your Ayurvedic journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Room Selection */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-ayur-ink mb-6">Select Your Room Type</h3>
            <div className="grid gap-6">
              {ROOMS.map((room) => (
                <motion.div
                  key={room.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedRoomId(room.id)}
                  className={`cursor-pointer rounded-3xl overflow-hidden border-2 transition-all ${
                    selectedRoomId === room.id 
                      ? 'border-ayur-olive bg-white shadow-xl shadow-ayur-olive/10' 
                      : 'border-transparent bg-white/50 hover:bg-white'
                  }`}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto">
                      <img 
                        src={room.image} 
                        alt={room.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6 md:w-2/3 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-serif text-ayur-ink">{room.name}</h4>
                        </div>
                        <p className="text-sm text-ayur-ink/60 mb-4 italic">{room.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {room.amenities.map((amenity, i) => (
                            <span key={i} className="text-[10px] bg-ayur-olive/5 text-ayur-olive px-2 py-1 rounded-full font-bold uppercase tracking-wider">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                      {selectedRoomId === room.id && (
                        <div className="mt-4 flex items-center gap-2 text-ayur-olive font-bold text-xs uppercase tracking-widest">
                          <Check size={14} />
                          Selected
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-ayur-olive/5 border border-ayur-olive/5 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 p-4 bg-ayur-olive/5 rounded-2xl border border-ayur-olive/10 mb-8">
                    <Info size={20} className="text-ayur-olive shrink-0" />
                    <p className="text-xs text-ayur-ink/70 italic">
                      Requests for IP room bookings will be confirmed depending on availability of rooms.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Patient Name</label>
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Check-In Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-ayur-olive/40 w-5 h-5" />
                        <input 
                          type="date" 
                          required
                          min={today.toISOString().split('T')[0]}
                          max={maxCheckIn.toISOString().split('T')[0]}
                          value={formData.checkIn}
                          onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                          className="w-full bg-ayur-cream/30 border border-ayur-olive/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-ayur-olive transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Check-Out Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-ayur-olive/40 w-5 h-5" />
                        <input 
                          type="date" 
                          required
                          min={formData.checkIn || today.toISOString().split('T')[0]}
                          max={formData.checkIn ? (() => {
                            const d = new Date(formData.checkIn);
                            d.setDate(d.getDate() + 30);
                            return d.toISOString().split('T')[0];
                          })() : undefined}
                          value={formData.checkOut}
                          onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                          className="w-full bg-ayur-cream/30 border border-ayur-olive/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-ayur-olive transition-all"
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
                        className="w-full bg-ayur-cream/30 border border-ayur-olive/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-ayur-olive transition-all"
                        placeholder="+91 75500 48760"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-ayur-ink/50 ml-1">Special Needs / Health Concerns</label>
                    <textarea 
                      rows={4}
                      value={formData.specialNeeds}
                      onChange={(e) => setFormData({...formData, specialNeeds: e.target.value})}
                      className="w-full bg-ayur-cream/30 border border-ayur-olive/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-ayur-olive transition-all resize-none"
                      placeholder="Please mention any specific requirements or health conditions..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-ayur-olive text-white py-5 rounded-2xl text-lg font-medium hover:bg-ayur-olive/90 transition-all shadow-xl shadow-ayur-olive/10"
                  >
                    Request Room Booking
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
                  <h3 className="text-3xl font-serif">Booking Request Sent!</h3>
                  <p className="text-ayur-ink/70 max-w-xs mx-auto italic">
                    Thank you for choosing Sunethri Ayurveda for your healing journey. Our team will check availability for the <span className="font-bold text-ayur-olive">{selectedRoom?.name}</span> and contact you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-ayur-olive font-medium hover:underline"
                  >
                    Make another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
