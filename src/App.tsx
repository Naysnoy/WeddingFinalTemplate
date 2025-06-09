import React, { useState } from 'react';
import { weddingConfig } from './config/wedding';
import { ThemeSelector } from './components/ThemeSelector';
import { ThemedLayout } from './components/themed/ThemedLayout';
import { ThemedHero } from './components/themed/ThemedHero';
import { OurStory } from './components/OurStory';
import { Timeline } from './components/Timeline';
import { Venues } from './components/Venues';
import { VideoSection } from './components/VideoSection';
import { StandardEntourage } from './components/StandardEntourage';
import { Gallery } from './components/Gallery';
import { DressCode } from './components/DressCode';
import { GoogleFormRSVP } from './components/GoogleFormRSVP';
import { GiftNote } from './components/GiftNote';
import { useTheme } from './hooks/useTheme';

function App() {
  const [currentTheme, setCurrentTheme] = useState('classic-minimal');
  const theme = useTheme(currentTheme);

  return (
    <ThemedLayout themeId={currentTheme}>
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
        
        @keyframes pixelPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
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

        /* Retro Gamer Theme Specific Styles */
        ${currentTheme === 'retro-gamer' ? `
          * {
            font-family: 'Press Start 2P', cursive !important;
          }
          
          .pixel-border {
            border: 2px solid #00FF00;
            border-image: url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m0,0 l0,8 l8,0 l0,-8 l-8,0 z m16,0 l0,8 l8,0 l0,-8 l-8,0 z' fill='%2300FF00'/%3e%3c/svg%3e") 2;
          }
          
          .pixel-glow {
            text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00;
          }
          
          .pixel-pulse {
            animation: pixelPulse 2s infinite;
          }
          
          h1, h2, h3, h4, h5, h6 {
            text-transform: uppercase;
            letter-spacing: 2px;
          }
        ` : ''}

        /* Dating App Theme Specific Styles */
        ${currentTheme === 'dating-app' ? `
          * {
            font-family: 'Poppins', sans-serif !important;
          }
          
          .heart-beat {
            animation: heartBeat 1.5s infinite;
          }
          
          .swipe-card {
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(255, 68, 88, 0.3);
          }
          
          .match-gradient {
            background: linear-gradient(135deg, #FF4458, #FF6B7A, #FFD93D);
          }
        ` : ''}

        /* Movie Poster Theme Specific Styles */
        ${currentTheme === 'movie-poster' ? `
          * {
            font-family: 'Bebas Neue', cursive !important;
          }
          
          h1, h2, h3 {
            text-transform: uppercase;
            letter-spacing: 3px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
          }
          
          .movie-glow {
            box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
          }
          
          .premiere-text {
            background: linear-gradient(45deg, #FFD700, #FFA500);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        ` : ''}

        /* Filipiniana Theme Specific Styles */
        ${currentTheme === 'filipiniana' ? `
          .barong-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D2691E' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E");
          }
          
          .capiz-shimmer {
            background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%);
            animation: shimmer 3s infinite;
          }
          
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        ` : ''}

        /* Love Letter Theme Specific Styles */
        ${currentTheme === 'love-letter' ? `
          * {
            font-family: 'Dancing Script', cursive !important;
          }
          
          .handwritten {
            font-family: 'Dancing Script', cursive;
            font-size: 1.2em;
            line-height: 1.6;
          }
          
          .wax-seal {
            position: relative;
          }
          
          .wax-seal::after {
            content: '💌';
            position: absolute;
            top: -10px;
            right: -10px;
            font-size: 24px;
          }
        ` : ''}
      `}</style>

      <ThemedHero config={weddingConfig} themeId={currentTheme} />
      <OurStory config={weddingConfig} />
      <Timeline config={weddingConfig} />
      <Venues config={weddingConfig} />
      <VideoSection config={weddingConfig} />
      <StandardEntourage config={weddingConfig} themeId={currentTheme} />
      <Gallery config={weddingConfig} />
      <DressCode config={weddingConfig} />
      <GoogleFormRSVP config={weddingConfig} themeId={currentTheme} />
      <GiftNote config={weddingConfig} />
      
      {/* Footer */}
      <footer 
        className="py-12 px-4 text-center" 
        style={{ 
          backgroundColor: theme.primary,
          color: theme.background,
          fontFamily: theme.fonts.primary
        }}
      >
        <p className="text-lg mb-2">
          {weddingConfig.couple.bride} & {weddingConfig.couple.groom}
        </p>
        <p style={{ 
          color: `${theme.background}80`, 
          fontFamily: theme.fonts.secondary 
        }}>
          {new Date(weddingConfig.weddingDate).getFullYear()} • Made with ❤️
        </p>
      </footer>
    </ThemedLayout>
  );
}

export default App;