import React from 'react';
import { Play } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { WeddingConfig } from '../types/wedding';

interface VideoSectionProps {
  config: WeddingConfig;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ config }) => {
  const theme = useTheme(config.dressCode.colors);

  if (!config.media.preWeddingVideo) {
    return null;
  }

  return (
    <section className="py-20 px-4" style={{ background: theme.gradients.hero }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Our Pre-Wedding Story
          </h2>
          <p className="text-xl text-gray-600">
            A glimpse into our journey together
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
          <div className="aspect-video bg-black">
            <iframe
              src={config.media.preWeddingVideo}
              title="Pre-wedding Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Video overlay with play button */}
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="w-20 h-20 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
              <Play size={32} style={{ color: theme.primary }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};