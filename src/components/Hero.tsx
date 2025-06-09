import React from 'react';
import { Heart, Calendar } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { useTheme } from '../hooks/useTheme';
import { WeddingConfig } from '../types/wedding';

interface HeroProps {
  config: WeddingConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const countdown = useCountdown(config.weddingDate);
  const theme = useTheme(config.dressCode.colors);

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: theme.gradients.hero }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full" 
             style={{ backgroundColor: theme.primary }}></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 rounded-full" 
             style={{ backgroundColor: theme.secondary }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full" 
             style={{ backgroundColor: theme.accent }}></div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Couple Names */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-light text-gray-800 mb-4">
            {config.couple.bride}
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gray-400 w-16"></div>
            <Heart className="mx-4 text-pink-500" size={24} />
            <div className="h-px bg-gray-400 w-16"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-light text-gray-800">
            {config.couple.groom}
          </h1>
        </div>

        {/* Wedding Date */}
        <div className="mb-12 animate-fade-in-up animation-delay-200">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="mr-3" style={{ color: theme.primary }} />
            <p className="text-xl text-gray-600">
              {new Date(config.weddingDate).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-12 animate-fade-in-up animation-delay-400">
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            Countdown to Our Special Day
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Minutes', value: countdown.minutes },
              { label: 'Seconds', value: countdown.seconds }
            ].map((item, index) => (
              <div 
                key={item.label}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ borderTop: `4px solid ${theme.primary}` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2" 
                     style={{ color: theme.primary }}>
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce mt-16">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto">
            <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};