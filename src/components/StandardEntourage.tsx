import React from 'react';
import { Crown, Users, Flower2, Heart } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { ThemedSection } from './themed/ThemedSection';
import { ThemedCard } from './themed/ThemedCard';
import { WeddingConfig } from '../types/wedding';

interface StandardEntourageProps {
  config: WeddingConfig;
  themeId: string;
}

export const StandardEntourage: React.FC<StandardEntourageProps> = ({ config, themeId }) => {
  const theme = useTheme(themeId);

  // Standardized wedding party structure
  const entourageStructure = [
    {
      title: 'Principal Sponsors',
      subtitle: 'Ninong & Ninang',
      members: config.entourage.principalSponsors || [
        'Mr. & Mrs. Roberto Santos',
        'Mr. & Mrs. Miguel Rodriguez',
        'Mr. & Mrs. Antonio Cruz'
      ],
      icon: Crown,
      color: theme.primary,
      description: 'Our beloved mentors and guides'
    },
    {
      title: 'Parents',
      subtitle: 'Our Foundation',
      members: [
        ...config.entourage.brideParents.map(parent => `${parent} (Parents of the Bride)`),
        ...config.entourage.groomParents.map(parent => `${parent} (Parents of the Groom)`)
      ],
      icon: Heart,
      color: theme.secondary,
      description: 'The ones who raised us with love'
    },
    {
      title: 'Maid of Honor & Best Man',
      subtitle: 'Our Closest Friends',
      members: [
        config.entourage.maidOfHonor || 'Sarah Martinez (Maid of Honor)',
        config.entourage.bestMan || 'Michael Davis (Best Man)'
      ],
      icon: Users,
      color: theme.accent,
      description: 'Standing by our side on this special day'
    },
    {
      title: 'Bridesmaids',
      subtitle: 'Sisters of the Heart',
      members: config.entourage.bridesmaids,
      icon: Flower2,
      color: theme.primary,
      description: 'Beautiful souls who light up our lives'
    },
    {
      title: 'Groomsmen',
      subtitle: 'Brothers in Arms',
      members: config.entourage.groomsmen,
      icon: Users,
      color: theme.secondary,
      description: 'Loyal friends who stand with us'
    },
    {
      title: 'Flower Girl & Ring Bearer',
      subtitle: 'Our Little Angels',
      members: [
        config.entourage.flowerGirl || 'Isabella Rose Santos (Flower Girl)',
        config.entourage.ringBearer || 'Gabriel Miguel Cruz (Ring Bearer)'
      ],
      icon: Flower2,
      color: theme.accent,
      description: 'Adding magic to our ceremony'
    }
  ];

  const getThemeSpecificTitle = () => {
    switch (themeId) {
      case 'retro-gamer':
        return 'PLAYER SELECT - WEDDING PARTY';
      case 'dating-app':
        return 'Our Squad 💕';
      case 'movie-poster':
        return 'STARRING IN OUR LOVE STORY';
      case 'filipiniana':
        return 'Ang Aming Kasama sa Kasal';
      case 'love-letter':
        return 'Dearest Friends & Family';
      default:
        return 'Our Wedding Party';
    }
  };

  return (
    <ThemedSection themeId={themeId} variant="secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-light mb-4"
            style={{ 
              color: theme.primary, 
              fontFamily: theme.fonts.primary,
              textShadow: themeId === 'retro-gamer' ? '2px 2px 0px #000000' : 'none'
            }}
          >
            {getThemeSpecificTitle()}
          </h2>
          <p 
            className="text-xl"
            style={{ 
              color: theme.textSecondary,
              fontFamily: theme.fonts.secondary
            }}
          >
            The special people who will be by our side
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entourageStructure.map((group, groupIndex) => {
            const Icon = group.icon;
            
            return (
              <ThemedCard key={groupIndex} themeId={themeId} className="text-center">
                <div className="mb-6">
                  <div 
                    className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                      themeId === 'retro-gamer' ? 'border-2 border-current' : 'shadow-lg'
                    }`}
                    style={{ 
                      backgroundColor: themeId === 'retro-gamer' ? 'transparent' : `${group.color}15`,
                      borderColor: themeId === 'retro-gamer' ? group.color : 'transparent'
                    }}
                  >
                    <Icon size={24} style={{ color: group.color }} />
                  </div>
                  <h3 
                    className="text-2xl font-semibold mb-2"
                    style={{ 
                      color: group.color,
                      fontFamily: theme.fonts.primary
                    }}
                  >
                    {group.title}
                  </h3>
                  <p 
                    className="text-sm mb-4 opacity-75"
                    style={{ fontFamily: theme.fonts.secondary }}
                  >
                    {group.subtitle}
                  </p>
                  <p 
                    className="text-sm mb-6 italic"
                    style={{ 
                      color: theme.textSecondary,
                      fontFamily: theme.fonts.secondary
                    }}
                  >
                    {group.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {group.members.map((member, memberIndex) => (
                    <div 
                      key={memberIndex}
                      className={`p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                        themeId === 'retro-gamer' ? 'border border-current' : 'shadow-md'
                      }`}
                      style={{ 
                        background: themeId === 'retro-gamer' 
                          ? 'transparent' 
                          : `${group.color}10`,
                        borderColor: themeId === 'retro-gamer' ? group.color : 'transparent'
                      }}
                    >
                      <div 
                        className="font-medium"
                        style={{ 
                          color: theme.text,
                          fontFamily: theme.fonts.secondary
                        }}
                      >
                        {member}
                      </div>
                    </div>
                  ))}
                </div>
              </ThemedCard>
            );
          })}
        </div>
      </div>
    </ThemedSection>
  );
};