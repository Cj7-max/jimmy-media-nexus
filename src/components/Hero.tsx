import React from 'react';
import { Youtube, Instagram, Twitch, Twitter, Send } from 'lucide-react';

interface HeroProps {
  name: string;
  description: string;
  backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({ name, description, backgroundImage }) => {
  return (
    <div className="relative min-h-[80vh] pt-20 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {name.split('').map((char, i) => (
            <span key={i} className={i % 2 === 0 ? 'text-primary' : 'text-foreground'}>
              {char}
            </span>
          ))}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
          {description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            Explore Content
          </button>
          <button className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors">
            About Me
          </button>
        </div>
      </div>
      
      {/* Decorative Gradient */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[150%] h-48 bg-primary/20 blur-[120px] rounded-[100%]" />
    </div>
  );
};
