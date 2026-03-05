import React from 'react';
import { Service } from '../types';
import { Tag } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-[2rem] p-8 border border-ayur-olive/5 hover:shadow-xl hover:shadow-ayur-olive/5 transition-all duration-500 flex flex-col h-full">
      <h3 className="text-2xl font-serif mb-4 group-hover:text-ayur-olive transition-colors italic">
        {service.name}
      </h3>
      
      <p className="text-ayur-ink/70 text-sm leading-relaxed mb-6">
        {service.description}
      </p>
      
      <div className="space-y-3 mt-auto">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-ayur-ink/30 mb-2">Key Benefits</h4>
        {service.benefits.map((benefit, i) => (
          <div key={i} className="flex items-start gap-3 text-xs text-ayur-ink/60 italic leading-relaxed">
            <div className="w-1.5 h-1.5 rounded-full bg-ayur-gold mt-1 shrink-0" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
