import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Quote, Users } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-ayur-gold/10 text-ayur-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>Our Leadership</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-white">Expert <span className="italic">Guidance</span></h2>
          <p className="text-lg text-ayur-ink/60 max-w-2xl mx-auto italic font-serif">
            Meet the visionary practitioners dedicated to preserving and sharing the profound wisdom of Ayurveda.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-ayur-cream/30 rounded-[4rem] p-8 md:p-16 border border-ayur-olive/5"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute -inset-4 bg-ayur-gold/10 rounded-[3rem] -z-10 blur-2xl"></div>
                <img 
                  src="https://storage.googleapis.com/siprsw/sunethri/VaidyaPrasad.jpg" 
                  alt="Vaidya M Prasad" 
                  className="rounded-[3rem] w-full shadow-2xl shadow-ayur-olive/10 object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="space-y-8 order-1 md:order-2">
                <div>
                  <h3 className="text-4xl md:text-5xl font-serif text-ayur-ink mb-4">Vaidya M Prasad</h3>
                  <p className="text-ayur-gold font-bold uppercase tracking-widest text-sm">Director, Sunethri Ayurvedashramam</p>
                </div>

                <div className="relative">
                  <Quote className="absolute -left-6 -top-6 text-ayur-olive/10 w-16 h-16 -z-10" />
                  <p className="text-xl text-ayur-ink/80 leading-relaxed font-serif italic">
                    Dr Prasad M, a post graduate in Ayurveda has been in the field of Ayurvedic practice from 1996. Along with academic education, he got intensive training in the philosophy and basic principles of Ayurveda from his Guru Padmabhushan Vaidyabhushanam K Raghavan, Thirumulpad.
                  </p>
                </div>

                <div className="space-y-6 text-ayur-ink/70 leading-relaxed text-lg">
                  <p>
                    He is doing research-oriented work on the care of autistic children from 2002. The famous magazine DOC N DOC, in its Feb.2011 issue, highlighted him as a pioneer in Ayurvedic system to work with autistic children.
                  </p>
                </div>

                <div className="pt-8 border-t border-ayur-olive/10 flex gap-12">
                  <div>
                    <div className="text-3xl font-serif text-ayur-olive font-bold">25+</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-ayur-ink/40">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif text-ayur-olive font-bold">Pioneer</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-ayur-ink/40">Autism Research</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-ayur-olive/5 rounded-[3rem] p-12 md:p-16 text-center border border-ayur-olive/10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ayur-olive/10 text-ayur-olive rounded-full mb-8">
              <Users size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-ayur-ink mb-6">Our Team</h3>
            <p className="text-xl text-ayur-ink/70 leading-relaxed font-serif italic max-w-2xl mx-auto">
              "We have qualified Ayurvedic physicians, therapists and support staff in Sunethri family to support Vaidya M Prasad in his services to the society."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
