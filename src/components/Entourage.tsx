import React from 'react';
import { Users, Crown, Flower2 } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { WeddingConfig } from '../types/wedding';

interface EntourageProps {
  config: WeddingConfig;
}

export const Entourage: React.FC<EntourageProps> = ({ config }) => {
  const theme = useTheme(config.dressCode.colors);

  const entourageGroups = [
    {
      title: 'Parents of the Bride',
      members: config.entourage.brideParents,
      icon: Crown,
      color: theme.primary
    },
    {
      title: 'Parents of the Groom',
      members: config.entourage.groomParents,
      icon: Crown,
      color: theme.secondary
    },
    {
      title: 'Bridesmaids',
      members: config.entourage.bridesmaids,
      icon: Flower2,
      color: theme.accent
    },
    {
      title: 'Groomsmen',
      members: config.entourage.groomsmen,
      icon: Users,
      color: theme.primary
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Our Wedding Party
          </h2>
          <p className="text-xl text-gray-600">
            The special people who will be by our side
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {entourageGroups.map((group, groupIndex) => {
            const Icon = group.icon;
            
            return (
              <div key={groupIndex} className="text-center">
                <div className="mb-6">
                  <div 
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: `${group.color}15` }}
                  >
                    <Icon size={24} style={{ color: group.color }} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    {group.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {group.members.map((member, memberIndex) => (
                    <div 
                      key={memberIndex}
                      className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-lg font-medium text-gray-800">
                        {member}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};