import React from 'react';
import { BookOpen } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { WeddingConfig } from '../types/wedding';

interface OurStoryProps {
  config: WeddingConfig;
}

export const OurStory: React.FC<OurStoryProps> = ({ config }) => {
  const theme = useTheme(config.dressCode.colors);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="mr-3\" style={{ color: theme.primary }} size={32} />
            <h2 className="text-4xl md:text-5xl font-light text-gray-800">
              {config.story.title}
            </h2>
          </div>
        </div>

        <div 
          className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-12 shadow-2xl relative overflow-hidden"
          style={{ background: theme.gradients.card }}
        >
          {/* Decorative elements */}
          <div className="absolute top-6 left-6 w-12 h-12 rounded-full opacity-20"
               style={{ backgroundColor: theme.primary }}></div>
          <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full opacity-20"
               style={{ backgroundColor: theme.secondary }}></div>

          <div className="relative z-10">
            <div className="text-6xl text-gray-300 mb-4">"</div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8 font-light">
              {config.story.content}
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-right">
                <div className="text-2xl font-light" style={{ color: theme.primary }}>
                  {config.couple.bride}
                </div>
              </div>
              <div className="w-12 h-px" style={{ backgroundColor: theme.secondary }}></div>
              <div className="text-left">
                <div className="text-2xl font-light" style={{ color: theme.primary }}>
                  {config.couple.groom}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};