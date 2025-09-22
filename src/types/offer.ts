export type Review = {
  id: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  rating: number;
  comment: string;
  date: string;
};

export type TypeOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  images: string[];
  description: string;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  city: string; // Упрощено до строки с названием города
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
    title: string;
  };
  reviews: Review[];
};

export type TypeCity = {
  id: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};
