import React from 'react';
import { Clock, Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { WeddingConfig } from '../types/wedding';

interface TimelineProps {
  config: WeddingConfig;
}

export const Timeline: React.FC<TimelineProps> = ({ config }) => {
  const theme = useTheme(config.dressCode.colors);

  const timelineItems = [
    { 
      time: config.timeline.arrival, 
      event: 'Guest Arrival', 
      icon: MapPin,
      description: 'Welcome drinks and mingling'
    },
    { 
      time: config.timeline.ceremony, 
      event: 'Wedding Ceremony', 
      icon: Calendar,
      description: 'The moment we become one'
    },
    { 
      time: config.timeline.reception, 
      event: 'Cocktail Reception', 
      icon: Clock,
      description: 'Celebration begins with drinks'
    },
    { 
      time: config.timeline.dinner, 
      event: 'Wedding Dinner', 
      icon: Clock,
      description: 'Feast and festivities'
    }
  ];

  return (
    <section className="py-20 px-4" style={{ background: theme.gradients.hero }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Wedding Timeline
          </h2>
          <p className="text-xl text-gray-600">
            Join us for a day filled with love, laughter, and celebration
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 rounded-full"
               style={{ backgroundColor: theme.primary }}></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4"
                           style={{ backgroundColor: `${theme.primary}15` }}>
                        <Icon size={24} style={{ color: theme.primary }} />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        {item.event}
                      </h3>
                      <div className="text-3xl font-light mb-3" style={{ color: theme.primary }}>
                        {item.time}
                      </div>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg"
                         style={{ backgroundColor: theme.primary }}></div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};