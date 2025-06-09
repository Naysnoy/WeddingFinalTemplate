import { WeddingConfig } from '../types/wedding';

export const weddingConfig: WeddingConfig = {
  couple: {
    bride: "Nicole Anne",
    groom: "Ali"
  },
  weddingDate: "2024-06-15T16:00:00",
  story: {
    title: "Our Love Story",
    content: "We first met at a coffee shop in downtown, where Alex accidentally spilled coffee on Isabella's favorite book. What started as an embarrassing moment turned into hours of conversation and laughter. Three years later, we're ready to say 'I do' and begin our forever adventure together."
  },
  timeline: {
    arrival: "3:30 PM",
    ceremony: "4:00 PM", 
    reception: "5:30 PM",
    dinner: "7:00 PM"
  },
  venues: {
    ceremony: {
      name: "Rosewood Garden Chapel",
      address: "123 Garden Lane, Maplewood, CA 90210",
      coordinates: { lat: 34.0522, lng: -118.2437 },
      photo: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    reception: {
      name: "Grand Ballroom at The Heritage",
      address: "456 Celebration Ave, Maplewood, CA 90210", 
      coordinates: { lat: 34.0522, lng: -118.2437 },
      photo: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  },
  media: {
    preWeddingVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    photos: [
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  entourage: {
    brideParents: ["Robert & Maria Rodriguez"],
    groomParents: ["David & Patricia Johnson"],
    bridesmaids: ["Sarah Martinez", "Emily Chen", "Rachel Thompson"],
    groomsmen: ["Michael Davis", "James Wilson", "Christopher Lee"]
  },
  dressCode: {
    colors: ["#6B7280", "#3B82F6", "#FFFFFF"],
    description: "Semi-formal attire in shades of blue, gray, and white"
  },
  hashtag: "#AlexAndIsabella2024",
  giftNote: "Your presence is the greatest gift, but if you wish to honor us with something special, we've registered at [Registry Link]"
};