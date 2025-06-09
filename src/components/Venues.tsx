import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { WeddingConfig } from '../types/wedding';

interface VenuesProps {
  config: WeddingConfig;
}

export const Venues: React.FC<VenuesProps> = ({ config }) => {
  const theme = useTheme(config.dressCode.colors);

  const openGoogleMaps = (lat: number, lng: number, name: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${encodeURIComponent(name)}`;
    window.open(url, '_blank');
  };

  const venues = [
    {
      title: 'Ceremony',
      venue: config.venues.ceremony,
      gradient: 'from-pink-100 to-purple-100'
    },
    {
      title: 'Reception',
      venue: config.venues.reception,
      gradient: 'from-blue-100 to-indigo-100'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Venue Details
          </h2>
          <p className="text-xl text-gray-600">
            Beautiful locations for our special celebration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {venues.map((venueInfo, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              {/* Venue Photo */}
              {venueInfo.venue.photo && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={venueInfo.venue.photo}
                    alt={`${venueInfo.venue.name} - ${venueInfo.title}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              
              <div className="p-8 relative">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 transform translate-x-16 -translate-y-16"
                     style={{ backgroundColor: theme.primary }}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <MapPin className="mr-3" style={{ color: theme.primary }} size={28} />
                    <h3 className="text-3xl font-light text-gray-800">
                      {venueInfo.title}
                    </h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-2xl font-semibold mb-3" style={{ color: theme.primary }}>
                      {venueInfo.venue.name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {venueInfo.venue.address}
                    </p>
                  </div>

                  <button
                    onClick={() => openGoogleMaps(
                      venueInfo.venue.coordinates.lat, 
                      venueInfo.venue.coordinates.lng, 
                      venueInfo.venue.name
                    )}
                    className="inline-flex items-center px-8 py-4 rounded-2xl text-white font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 transform"
                    style={{ backgroundColor: theme.primary }}
                  >
                    <Navigation className="mr-2" size={20} />
                    View on Google Maps
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};