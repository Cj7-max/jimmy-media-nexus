import React from 'react';
import { Youtube, Instagram, Twitch, Twitter, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Card } from './ui/card';

const platforms = [
  {
    name: 'YouTube',
    icon: <Youtube className="w-8 h-8" />,
    url: 'https://youtube.com/@jimivlogs34',
    color: '#FF0000',
    description: 'Vlogs & Content',
    stats: '@jimivlogs34'
  },
  {
    name: 'Twitch',
    icon: <Twitch className="w-8 h-8" />,
    url: 'https://m.twitch.tv/jimiv_v34/home',
    color: '#9146FF',
    description: 'Live Streams',
    stats: '@jimiv_v34'
  },
  {
    name: 'TikTok',
    icon: <MessageCircle className="w-8 h-8" />,
    url: 'https://tiktok.com/@jimiv_v344',
    color: '#000000',
    description: 'Short Form Clips',
    stats: '@jimiv_v344'
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-8 h-8" />,
    url: 'https://instagram.com/jimiv_v34',
    color: '#E4405F',
    description: 'Behind the Scenes',
    stats: '@jimiv_v34'
  }
];

export const SocialGrid: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Connect With Me</h2>
          <div className="w-24 h-1 bg-primary rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <a 
              key={platform.name} 
              href={platform.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="p-8 h-full bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] backdrop-blur-sm group-hover:-translate-y-2">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div 
                    className="p-4 rounded-2xl bg-secondary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    style={{ color: platform.color }}
                  >
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{platform.name}</h3>
                  <p className="text-muted-foreground text-sm">{platform.description}</p>
                  <span className="text-xs font-mono text-primary uppercase tracking-widest">{platform.stats}</span>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
