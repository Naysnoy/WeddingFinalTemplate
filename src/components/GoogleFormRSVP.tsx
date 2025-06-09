import React from 'react';
import { ExternalLink, Heart, Calendar, Users } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { ThemedSection } from './themed/ThemedSection';
import { ThemedCard } from './themed/ThemedCard';
import { WeddingConfig } from '../types/wedding';

interface GoogleFormRSVPProps {
  config: WeddingConfig;
  themeId: string;
}

export const GoogleFormRSVP: React.FC<GoogleFormRSVPProps> = ({ config, themeId }) => {
  const theme = useTheme(themeId);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdbkY1_5uJ6kssfbyelRxlhPvHewSjhRnD39Csf4LOKrvZ5BQ/viewform?usp=header";

  const getThemeSpecificTitle = () => {
    switch (themeId) {
      case 'retro-gamer':
        return 'PRESS START TO RSVP';
      case 'dating-app':
        return 'Swipe Right to RSVP 💕';
      case 'movie-poster':
        return 'RESERVE YOUR SEAT';
      case 'filipiniana':
        return 'Pakiconfirm ang Inyong Pagdalo';
      case 'love-letter':
        return 'Please Reply to Our Invitation';
      default:
        return 'RSVP';
    }
  };

  const getThemeSpecificDescription = () => {
    switch (themeId) {
      case 'retro-gamer':
        return 'Join our party! Click the button below to confirm your attendance.';
      case 'dating-app':
        return 'We matched! Now let us know if you\'ll be joining our celebration.';
      case 'movie-poster':
        return 'Don\'t miss the premiere of our love story. Reserve your seat now.';
      case 'filipiniana':
        return 'Makakasama namin kayo sa aming masayang pagdiriwang.';
      case 'love-letter':
        return 'Your presence would make our special day even more meaningful.';
      default:
        return 'Please let us know if you\'ll be joining our celebration';
    }
  };

  const getThemeSpecificButtonText = () => {
    switch (themeId) {
      case 'retro-gamer':
        return 'START GAME';
      case 'dating-app':
        return 'Match & RSVP';
      case 'movie-poster':
        return 'GET TICKETS';
      case 'filipiniana':
        return 'Mag-RSVP';
      case 'love-letter':
        return 'Send Reply';
      default:
        return 'Open RSVP Form';
    }
  };

  return (
    <ThemedSection themeId={themeId} variant="accent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 
            className="text-4xl md:text-5xl font-light mb-4"
            style={{ 
              color: themeId === 'movie-poster' ? '#FFD700' : theme.primary,
              fontFamily: theme.fonts.primary,
              textShadow: themeId === 'retro-gamer' ? '2px 2px 0px #000000' : 'none'
            }}
          >
            {getThemeSpecificTitle()}
          </h2>
          <p 
            className="text-xl mb-8"
            style={{ 
              color: themeId === 'dating-app' || themeId === 'movie-poster' ? '#FFFFFF' : theme.textSecondary,
              fontFamily: theme.fonts.secondary
            }}
          >
            {getThemeSpecificDescription()}
          </p>
        </div>

        <ThemedCard themeId={themeId} className="max-w-2xl mx-auto">
          <div className="text-center">
            {/* Theme-specific icons */}
            <div className="mb-8">
              {themeId === 'retro-gamer' && (
                <div className="text-6xl mb-4">🎮</div>
              )}
              {themeId === 'dating-app' && (
                <div className="text-6xl mb-4">💕</div>
              )}
              {themeId === 'movie-poster' && (
                <div className="text-6xl mb-4">🎬</div>
              )}
              {themeId === 'filipiniana' && (
                <div className="text-6xl mb-4">🌺</div>
              )}
              {themeId === 'love-letter' && (
                <div className="text-6xl mb-4">💌</div>
              )}
              {!['retro-gamer', 'dating-app', 'movie-poster', 'filipiniana', 'love-letter'].includes(themeId) && (
                <Heart size={48} className="mx-auto mb-4" style={{ color: theme.primary }} />
              )}
            </div>

            {/* RSVP Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Calendar size={24} className="mx-auto mb-2" style={{ color: theme.primary }} />
                <p className="text-sm font-medium" style={{ fontFamily: theme.fonts.secondary }}>
                  Wedding Date
                </p>
                <p className="text-lg" style={{ color: theme.primary, fontFamily: theme.fonts.primary }}>
                  {new Date(config.weddingDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
              
              <div className="text-center">
                <Users size={24} className="mx-auto mb-2" style={{ color: theme.primary }} />
                <p className="text-sm font-medium" style={{ fontFamily: theme.fonts.secondary }}>
                  Ceremony
                </p>
                <p className="text-lg" style={{ color: theme.primary, fontFamily: theme.fonts.primary }}>
                  {config.timeline.ceremony}
                </p>
              </div>
              
              <div className="text-center">
                <Heart size={24} className="mx-auto mb-2" style={{ color: theme.primary }} />
                <p className="text-sm font-medium" style={{ fontFamily: theme.fonts.secondary }}>
                  Reception
                </p>
                <p className="text-lg" style={{ color: theme.primary, fontFamily: theme.fonts.primary }}>
                  {config.timeline.reception}
                </p>
              </div>
            </div>

            {/* Google Form Button */}
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 transform ${
                themeId === 'retro-gamer' 
                  ? 'border-2 border-current hover:bg-current hover:text-black' 
                  : 'rounded-2xl hover:shadow-xl'
              }`}
              style={{ 
                backgroundColor: themeId === 'retro-gamer' ? 'transparent' : theme.primary,
                color: themeId === 'retro-gamer' ? theme.primary : '#FFFFFF',
                borderColor: themeId === 'retro-gamer' ? theme.primary : 'transparent',
                fontFamily: theme.fonts.primary
              }}
            >
              <ExternalLink className="mr-2" size={20} />
              {getThemeSpecificButtonText()}
            </a>

            <p 
              className="text-sm mt-4 opacity-75"
              style={{ 
                color: theme.textSecondary,
                fontFamily: theme.fonts.secondary
              }}
            >
              Opens in a new window • Powered by Google Forms
            </p>
          </div>
        </ThemedCard>
      </div>
    </ThemedSection>
  );
};