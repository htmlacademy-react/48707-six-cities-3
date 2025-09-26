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
  previewImage: string;
  city: TypeCity;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
    title: string;
  };
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

export type TypeFullOffer = TypeOffer & {
  description: string;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  reviews: Review[];
  images: string[];
}
