import React from 'react';
import { Palette, Shirt } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { WeddingConfig } from '../types/wedding';

interface DressCodeProps {
  config: WeddingConfig;
}

export const DressCode: React.FC<DressCodeProps> = ({ config }) => {
  const theme = useTheme(config.dressCode.colors);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Shirt className="mr-3\" style={{ color: theme.primary }} size={32} />
            <h2 className="text-4xl md:text-5xl font-light text-gray-800">
              Dress Code
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Help us create a beautiful, cohesive celebration
          </p>
        </div>

        <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-24 h-24 rounded-full opacity-10 transform -translate-x-12 -translate-y-12"
               style={{ backgroundColor: theme.primary }}></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full opacity-10 transform translate-x-16 translate-y-16"
               style={{ backgroundColor: theme.secondary }}></div>

          <div className="relative z-10">
            {/* Color palette circles */}
            <div className="flex justify-center items-center space-x-6 mb-8">
              <Palette size={24} style={{ color: theme.primary }} />
              {config.dressCode.colors.map((color, index) => (
                <div key={index} className="relative">
                  <div
                    className="w-16 h-16 rounded-full shadow-lg border-4 border-white hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: color }}
                  ></div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 font-medium">
                    {color.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.primary }}>
                Attire Guidelines
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {config.dressCode.description}
              </p>
            </div>

            <div className="mt-8 p-6 bg-white/50 rounded-2xl">
              <p className="text-gray-600 italic">
                "We can't wait to celebrate with you in style! Please feel comfortable and dress within our color palette."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};