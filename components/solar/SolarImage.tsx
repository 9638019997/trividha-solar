import React from 'react';
import Image from 'next/image';

interface SolarImageProps {
  type: 
    | 'rooftop' 
    | 'residential' 
    | 'commercial' 
    | 'industrial' 
    | 'pump' 
    | 'ev' 
    | 'installation' 
    | 'engineers' 
    | 'monitoring';
  alt: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'wide';
}

const solarStock: Record<string, string> = {
  rooftop: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  residential: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80',
  commercial: 'https://images.unsplash.com/photo-1545209179-a5dc55049544?auto=format&fit=crop&w=1200&q=80',
  industrial: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
  pump: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  ev: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80',
  installation: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80',
  engineers: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  monitoring: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
};

export default function SolarImage({ type, alt, className = '', aspectRatio = 'video' }: SolarImageProps) {
  const aspect = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[21/9]'
  }[aspectRatio];

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gray-100 ${aspect} ${className}`}>
      <Image
        src={solarStock[type] || solarStock.rooftop}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 hover:scale-105"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
