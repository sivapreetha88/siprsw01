import React from 'react';
import { Play, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const VIDEO_LIST = [
  {
    id: 'hTyv-hXQkCQ',
    title: 'Sunethri Ayurveda - Our Journey',
    description: 'A glimpse into our traditional healing practices and the sanctuary we have created for your wellness.',
    thumbnail: 'https://img.youtube.com/vi/hTyv-hXQkCQ/maxresdefault.jpg',
    duration: '0:31',
    url: 'https://www.youtube.com/watch?v=hTyv-hXQkCQ'
  }
];

export default function Videos() {
  return (
    <section id="videos" className="py-24 bg-ayur-cream/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-ayur-gold/10 text-ayur-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>Educational Library</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-white">Ayurvedic <span className="italic">Wisdom</span> in Motion</h2>
          <p className="text-lg text-ayur-ink/60 max-w-2xl mx-auto italic font-serif">
            Explore our curated collection of educational videos to deepen your understanding of holistic healing.
          </p>
        </div>

        <div className="flex justify-center">
          {VIDEO_LIST.map((video, idx) => (
            <motion.a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer max-w-2xl w-full"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-lg shadow-ayur-olive/5">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ayur-ink/20 group-hover:bg-ayur-ink/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-ayur-olive shadow-xl transform transition-transform duration-300 group-hover:scale-110">
                    <Play fill="currentColor" size={24} className="ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-ayur-ink/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-widest">
                  {video.duration}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif mb-2 group-hover:text-ayur-olive transition-colors">{video.title}</h3>
                <p className="text-base text-ayur-ink/60 leading-relaxed italic font-serif">
                  {video.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
