export interface WeddingConfig {
  couple: {
    bride: string;
    groom: string;
  };
  weddingDate: string;
  story: {
    title: string;
    content: string;
  };
  timeline: {
    arrival: string;
    ceremony: string;
    reception: string;
    dinner: string;
  };
  venues: {
    ceremony: {
      name: string;
      address: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      photo?: string;
    };
    reception: {
      name: string;
      address: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      photo?: string;
    };
  };
  media: {
    preWeddingVideo?: string;
    photos: string[];
  };
  entourage: {
    brideParents: string[];
    groomParents: string[];
    bridesmaids: string[];
    groomsmen: string[];
  };
  dressCode: {
    colors: string[];
    description: string;
  };
  hashtag?: string;
  giftNote?: string;
}

export interface RSVPResponse {
  name: string;
  email: string;
  phone: string;
  attendance: 'yes' | 'no' | 'maybe';
  guestCount: number;
  dietaryRestrictions?: string;
  message?: string;
}