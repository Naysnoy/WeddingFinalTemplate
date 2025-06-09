import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { WeddingConfig } from '../types/wedding';

interface GalleryProps {
  config: WeddingConfig;
}

export const Gallery: React.FC<GalleryProps> = ({ config }) => {
  const theme = useTheme(config.dressCode.colors);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % config.media.photos.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + config.media.photos.length) % config.media.photos.length);
  };

  return (
    <section className="py-20 px-4" style={{ background: theme.gradients.hero }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Camera className="mr-3" style={{ color: theme.primary }} size={32} />
            <h2 className="text-4xl md:text-5xl font-light text-gray-800">
              Photo Gallery
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Capturing moments of our love story
          </p>
        </div>

        {/* Main Gallery */}
        <div className="relative mb-8">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={config.media.photos[currentIndex]}
              alt={`Wedding photo ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
          >
            <ChevronLeft size={24} style={{ color: theme.primary }} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
          >
            <ChevronRight size={24} style={{ color: theme.primary }} />
          </button>
        </div>

        {/* Thumbnail navigation */}
        <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
          {config.media.photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-4 ring-white shadow-xl scale-110' 
                  : 'hover:scale-105 shadow-lg'
              }`}
              style={{ 
                ringColor: index === currentIndex ? theme.primary : 'transparent'
              }}
            >
              <img
                src={photo}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Photo counter */}
        <div className="text-center mt-6">
          <span className="text-gray-600">
            {currentIndex + 1} of {config.media.photos.length}
          </span>
        </div>
      </div>
    </section>
  );
};