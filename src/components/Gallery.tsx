import React from 'react';
import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    url: 'https://storage.googleapis.com/siprsw/sunethri/42102920_1862302270533815_6126379288460525568_n.jpg',
    title: 'Traditional Healing',
    category: 'Therapy'
  },
  {
    url: 'https://storage.googleapis.com/siprsw/sunethri/505990270_9918741681556460_7035171173700894864_n.jpg',
    title: 'Herbal Wisdom',
    category: 'Medicine'
  },
  {
    url: 'https://storage.googleapis.com/siprsw/sunethri/511516086_10011609738936320_4801466055237349968_n.jpg',
    title: 'Sanctuary Grounds',
    category: 'Facility'
  },
  {
    url: 'https://storage.googleapis.com/siprsw/sunethri/511594881_10011609702269657_4286494287289315012_n.jpg',
    title: 'Patient Care',
    category: 'Service'
  },
  {
    url: 'https://storage.googleapis.com/siprsw/sunethri/511993325_10011608088936485_9157265354669351689_n.jpg',
    title: 'Natural Environment',
    category: 'Nature'
  },
  {
    url: 'https://storage.googleapis.com/siprsw/sunethri/512517928_10011608515603109_6575497477548907025_n.jpg',
    title: 'Therapeutic Session',
    category: 'Therapy'
  },
  {
    url: 'https://storage.googleapis.com/siprsw/sunethri/512522999_10011609832269644_5769244920263671538_n.jpg',
    title: 'Ayurvedic Practice',
    category: 'Tradition'
  },
  {
    url: 'https://storage.googleapis.com/siprsw/sunethri/512671098_10011609868936307_2923401578759453012_n.jpg',
    title: 'Healing Spaces',
    category: 'Facility'
  },
  {
    url: 'https://storage.googleapis.com/siprsw/sunethri/512702341_10011609748936319_4672086828903043109_n.jpg',
    title: 'Consultation Room',
    category: 'Facility'
  },
  {
    url: 'https://storage.googleapis.com/siprsw/sunethri/513537566_10011608522269775_6731129348816171732_n.jpg',
    title: 'Wellness Journey',
    category: 'Experience'
  },
  {
    url: 'https://storage.googleapis.com/siprsw/sunethri/67257070_2318910618206309_3543605588388741120_n.jpg',
    title: 'Traditional Rituals',
    category: 'Tradition'
  },
  {
    url: 'https://storage.googleapis.com/siprsw/sunethri/67385263_2318914671539237_4469714474298769408_n.jpg',
    title: 'Our Community',
    category: 'Team'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-ayur-cream/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-ayur-gold font-medium uppercase tracking-[0.3em] text-xs mb-4 block">
            Visual Journey
          </span>
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-white">Gallery</h2>
          <p className="text-lg text-ayur-ink/60 max-w-2xl mx-auto italic font-serif">
            We love to take pictures and show them to the world. Explore the serene environment and traditional practices at Sunethri Ayurveda.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-[2rem] cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ayur-ink/80 via-ayur-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-ayur-gold text-[10px] font-bold uppercase tracking-widest mb-2">
                  {image.category}
                </span>
                <h4 className="text-white font-serif text-xl italic">
                  {image.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-ayur-olive/40 italic font-serif">
            <Camera size={20} />
            <span>Capturing moments of healing and peace</span>
          </div>
        </div>
      </div>
    </section>
  );
}
