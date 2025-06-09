import React from 'react';
import { weddingConfig } from './config/wedding';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { Timeline } from './components/Timeline';
import { Venues } from './components/Venues';
import { VideoSection } from './components/VideoSection';
import { Entourage } from './components/Entourage';
import { Gallery } from './components/Gallery';
import { DressCode } from './components/DressCode';
import { RSVP } from './components/RSVP';
import { GiftNote } from './components/GiftNote';

function App() {
  return (
    <div className="min-h-screen">
      {/* Custom CSS for animations */}
      <style>{`
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
          animation: fadeInUp 0.8s ease-out;
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
      `}</style>

      <Hero config={weddingConfig} />
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
      <footer className="py-12 px-4 bg-gray-900 text-white text-center">
        <p className="text-lg mb-2">
          {weddingConfig.couple.bride} & {weddingConfig.couple.groom}
        </p>
        <p className="text-gray-400">
          {new Date(weddingConfig.weddingDate).getFullYear()} • Made with ❤️
        </p>
      </footer>
    </div>
  );
}

export default App;