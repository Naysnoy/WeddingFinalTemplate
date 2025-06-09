import React from 'react';
import { Gift, Hash } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { WeddingConfig } from '../types/wedding';

interface GiftNoteProps {
  config: WeddingConfig;
}

export const GiftNote: React.FC<GiftNoteProps> = ({ config }) => {
  const theme = useTheme(config.dressCode.colors);

  if (!config.giftNote && !config.hashtag) {
    return null;
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Gift Note */}
          {config.giftNote && (
            <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 transform translate-x-10 -translate-y-10"
                   style={{ backgroundColor: theme.primary }}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Gift className="mr-3" style={{ color: theme.primary }} size={28} />
                  <h3 className="text-3xl font-light text-gray-800">
                    Gift Note
                  </h3>
                </div>
                
                <div className="text-gray-700 leading-relaxed">
                  <p className="text-lg">{config.giftNote}</p>
                </div>
              </div>
            </div>
          )}

          {/* Hashtag */}
          {config.hashtag && (
            <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10 transform -translate-x-12 translate-y-12"
                   style={{ backgroundColor: theme.secondary }}></div>
              
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center mb-6">
                  <Hash className="mr-3" style={{ color: theme.secondary }} size={28} />
                  <h3 className="text-3xl font-light text-gray-800">
                    Wedding Hashtag
                  </h3>
                </div>
                
                <div className="text-4xl font-light mb-4" style={{ color: theme.secondary }}>
                  {config.hashtag}
                </div>
                
                <p className="text-gray-600">
                  Share your photos and memories with our special hashtag on social media!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};