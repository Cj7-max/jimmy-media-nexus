import { Hero } from './components/Hero';
import { SocialGrid } from './components/SocialGrid';
import { VideoShowcase } from './components/VideoShowcase';
import { Youtube, Instagram, Twitch, MessageCircle, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.background = 
      'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(147, 100, 220, 0.15) 0%, rgba(88, 50, 150, 0.08) 40%, transparent 70%), ' +
      'radial-gradient(ellipse 60% 50% at 80% 80%, rgba(130, 80, 200, 0.1) 0%, transparent 60%), ' +
      'oklch(0.15 0.035 290)';
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Socials', href: '#socials' },
    { name: 'Videos', href: '#videos' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tighter hover:text-primary transition-colors">
            JIMMY<span className="text-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2 bg-primary text-primary-foreground font-bold rounded-full hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b border-border animate-in slide-in-from-top duration-300">
            <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xl font-bold uppercase tracking-widest hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero 
          name="JIMMY" 
          description="Welcome to Jimmy's official website! I am a content creator specializing in live streaming, YouTube, TikTok, Instagram, and Twitch. You can find direct links to all my channels by clicking the logos below. You can also watch my latest videos from each platform right here."
          backgroundImage="https://storage.googleapis.com/dala-prod-public-storage/attachments/7fdd8bb0-2fcb-4014-8f66-d3028ac38d7d/1781699808701_31f64451-2765-4590-82fa-f98a8f5e2b51-profile_banner-480.jpeg"
        />
        
        <div id="socials">
          <SocialGrid />
        </div>
        
        <div id="videos">
          <VideoShowcase />
        </div>
      </main>

      <footer className="py-12 border-t border-border/50 bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
            © {new Date().getFullYear()} Jimmy Official. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
export default App;
