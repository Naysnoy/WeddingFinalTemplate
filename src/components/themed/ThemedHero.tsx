import React, { useState } from 'react';
import { Heart, Calendar, Play, Plane, Mail } from 'lucide-react';
import { useCountdown } from '../../hooks/useCountdown';
import { useTheme } from '../../hooks/useTheme';
import { WeddingConfig } from '../../types/wedding';

interface ThemedHeroProps {
  config: WeddingConfig;
  themeId: string;
}

export const ThemedHero: React.FC<ThemedHeroProps> = ({ config, themeId }) => {
  const countdown = useCountdown(config.weddingDate);
  const theme = useTheme(themeId);
  const [showMatch, setShowMatch] = useState(false);
  const [showReunion, setShowReunion] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleInteraction = () => {
    if (!theme.interactions) return;

    switch (theme.interactions.type) {
      case 'heart-click':
        setShowMatch(true);
        setTimeout(() => setShowMatch(false), 3000);
        break;
      case 'button-reveal':
        if (themeId === 'ldr-theme') {
          setShowReunion(true);
        }
        break;
      case 'envelope-open':
        setShowLetter(true);
        break;
    }
  };

  // Dating App Theme
  if (themeId === 'dating-app') {
    return (
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: theme.gradients.hero, fontFamily: theme.fonts.primary }}
      >
        <div className="text-center z-10 px-4 max-w-md mx-auto">
          {!showMatch ? (
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Couple"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{config.couple.bride} & {config.couple.groom}</h2>
              <p className="text-gray-600 mb-6">2 km away</p>
              <button
                onClick={handleInteraction}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <Heart size={32} fill="white" />
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 shadow-2xl animate-pulse">
              <div className="text-6xl mb-4">💕</div>
              <h1 className="text-4xl font-bold text-pink-500 mb-4">It's a Match!</h1>
              <p className="text-gray-700 mb-4">You're invited to our wedding!</p>
              <div className="text-lg font-medium text-gray-800">
                {new Date(config.weddingDate).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // LDR Theme
  if (themeId === 'ldr-theme') {
    return (
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: theme.gradients.hero, fontFamily: theme.fonts.primary }}
      >
        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8">Bridge the Distance</h1>
          
          <div className={`grid grid-cols-2 gap-8 mb-8 transition-all duration-1000 ${showReunion ? 'transform scale-110' : ''}`}>
            <div className="bg-white/90 rounded-2xl p-6">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-semibold">{config.couple.bride}</h3>
              <p className="text-sm text-gray-600">Philippines</p>
            </div>
            <div className="bg-white/90 rounded-2xl p-6">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-semibold">{config.couple.groom}</h3>
              <p className="text-sm text-gray-600">USA</p>
            </div>
          </div>

          {!showReunion ? (
            <button
              onClick={handleInteraction}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <Plane className="mr-2" size={20} />
              Bring Us Together
            </button>
          ) : (
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-6xl mb-4">💕</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Finally Together!</h2>
              <p className="text-lg text-gray-600 mb-4">Join us as we celebrate our union</p>
              <div className="text-xl font-medium" style={{ color: theme.primary }}>
                {new Date(config.weddingDate).toLocaleDateString()}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Love Letter Theme
  if (themeId === 'love-letter') {
    return (
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: theme.gradients.hero, fontFamily: theme.fonts.primary }}
      >
        <div className="text-center z-10 px-4 max-w-2xl mx-auto">
          {!showLetter ? (
            <div className="relative">
              <button
                onClick={handleInteraction}
                className="group relative hover:scale-105 transition-transform duration-300"
              >
                <div className="w-80 h-60 bg-gradient-to-br from-red-100 to-pink-100 rounded-lg shadow-2xl border-4 border-red-200 relative overflow-hidden">
                  <div className="absolute top-4 left-4 right-4 h-0 border-t-2 border-red-300"></div>
                  <div className="absolute top-8 left-4 right-4 h-0 border-t-2 border-red-300"></div>
                  <div className="flex items-center justify-center h-full">
                    <Mail size={48} className="text-red-400" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <Heart size={16} className="text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-red-300 rounded-t-lg"></div>
              </button>
              <p className="mt-6 text-lg text-gray-700">Click to open our invitation</p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-pink-200">
              <div className="text-pink-500 text-4xl mb-6" style={{ fontFamily: theme.fonts.primary }}>
                Dearest Friends & Family,
              </div>
              <div className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: theme.fonts.secondary }}>
                With hearts full of love and joy, we invite you to witness our union as we become one.
              </div>
              <div className="text-2xl font-bold mb-4" style={{ color: theme.primary }}>
                {config.couple.bride} & {config.couple.groom}
              </div>
              <div className="text-lg text-gray-600">
                {new Date(config.weddingDate).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Default/Classic themes
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: theme.gradients.hero, fontFamily: theme.fonts.primary }}
    >
      {/* Background decorations based on theme */}
      <div className="absolute inset-0 opacity-10">
        {theme.decorations.patterns.includes('geometric-lines') && (
          <>
            <div className="absolute top-20 left-20 w-32 h-32 rounded-full" 
                 style={{ backgroundColor: theme.primary }}></div>
            <div className="absolute bottom-32 right-20 w-24 h-24 rounded-full" 
                 style={{ backgroundColor: theme.secondary }}></div>
          </>
        )}
        {theme.decorations.patterns.includes('leaf-border') && (
          <div className="absolute inset-0 bg-opacity-5" 
               style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2327AE60" fill-opacity="0.1"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        )}
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Couple Names */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-light mb-4" 
              style={{ color: theme.text, fontFamily: theme.fonts.primary }}>
            {config.couple.bride}
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-16" style={{ backgroundColor: theme.textSecondary }}></div>
            <Heart className="mx-4" style={{ color: theme.accent }} size={24} />
            <div className="h-px w-16" style={{ backgroundColor: theme.textSecondary }}></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-light" 
              style={{ color: theme.text, fontFamily: theme.fonts.primary }}>
            {config.couple.groom}
          </h1>
        </div>

        {/* Wedding Date */}
        <div className="mb-12 animate-fade-in-up animation-delay-200">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="mr-3" style={{ color: theme.primary }} />
            <p className="text-xl" style={{ color: theme.textSecondary, fontFamily: theme.fonts.secondary }}>
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
          <h2 className="text-2xl md:text-3xl mb-8 font-light" 
              style={{ color: theme.text, fontFamily: theme.fonts.secondary }}>
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
                className="rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ 
                  background: theme.gradients.card,
                  borderTop: `4px solid ${theme.primary}`
                }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2" 
                     style={{ color: theme.primary, fontFamily: theme.fonts.primary }}>
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm uppercase tracking-wider" 
                     style={{ color: theme.textSecondary, fontFamily: theme.fonts.secondary }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce mt-16">
          <div className="w-6 h-10 border-2 rounded-full mx-auto" 
               style={{ borderColor: theme.textSecondary }}>
            <div className="w-1 h-3 rounded-full mx-auto mt-2 animate-pulse" 
                 style={{ backgroundColor: theme.textSecondary }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};