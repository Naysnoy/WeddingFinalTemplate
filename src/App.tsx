import React, { useState } from 'react';
import { weddingConfig } from './config/wedding';
import { ThemeSelector } from './components/ThemeSelector';
import { ThemedHero } from './components/themed/ThemedHero';
import { OurStory } from './components/OurStory';
import { Timeline } from './components/Timeline';
import { Venues } from './components/Venues';
import { VideoSection } from './components/VideoSection';
import { Entourage } from './components/Entourage';
import { Gallery } from './components/Gallery';
import { DressCode } from './components/DressCode';
import { RSVP } from './components/RSVP';
import { GiftNote } from './components/GiftNote';
import { useTheme } from './hooks/useTheme';

function App() {
  const [currentTheme, setCurrentTheme] = useState('classic-minimal');
  const theme = useTheme(currentTheme);

  return (
    <div className="min-h-screen" style={{ fontFamily: theme.fonts.primary }}>
      {/* Theme Selector */}
      <ThemeSelector currentTheme={currentTheme} onThemeChange={setCurrentTheme} />

      {/* Custom CSS for animations and theme-specific styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;600;700&family=Source+Sans+Pro:wght@300;400;600&family=Cormorant+Garamond:wght@300;400;600&family=Lato:wght@300;400;600&family=Crimson+Text:wght@400;600&family=Dancing+Script:wght@400;600;700&family=Open+Sans:wght@300;400;600&family=Amatic+SC:wght@400;700&family=Nunito:wght@300;400;600&family=Poppins:wght@300;400;600;700&family=Inter:wght@300;400;600&family=Montserrat:wght@300;400;600;700&family=Roboto:wght@300;400;500;700&family=Roboto+Mono:wght@300;400;500&family=Bebas+Neue&family=Press+Start+2P&family=Courier+New&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp ${theme.animations.duration} ${theme.animations.easing};
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }
        
        html {
          scroll-behavior: smooth;
        }

        /* Theme-specific styles */
        ${currentTheme === 'retro-gamer' ? `
          body {
            background: #000;
            color: #00FF00;
          }
          .pixel-border {
            border: 2px solid #00FF00;
            border-image: url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m0,0 l0,8 l8,0 l0,-8 l-8,0 z m16,0 l0,8 l8,0 l0,-8 l-8,0 z' fill='%2300FF00'/%3e%3c/svg%3e") 2;
          }
        ` : ''}

        ${currentTheme === 'filipiniana' ? `
          .barong-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D2691E' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E");
          }
        ` : ''}
      `}</style>

      <ThemedHero config={weddingConfig} themeId={currentTheme} />
      <OurStory config={weddingConfig} />
      <Timeline config={weddingConfig} />
      <Venues config={weddingConfig} />
      <VideoSection config={weddingConfig} />
      <Entourage config={weddingConfig} />
      <Gallery config={weddingConfig} />
      <DressCode config={weddingConfig} />
      <RSVP config={weddingConfig} />
      <GiftNote config={weddingConfig} />
      
      {/* Footer */}
      <footer className="py-12 px-4 text-center" 
              style={{ 
                backgroundColor: theme.config.colors.primary,
                color: theme.config.colors.background
              }}>
        <p className="text-lg mb-2" style={{ fontFamily: theme.fonts.primary }}>
          {weddingConfig.couple.bride} & {weddingConfig.couple.groom}
        </p>
        <p style={{ color: `${theme.config.colors.background}80`, fontFamily: theme.fonts.secondary }}>
          {new Date(weddingConfig.weddingDate).getFullYear()} • Made with ❤️
        </p>
      </footer>
    </div>
  );
}

export default App;