export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type DetailedOfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: [string];
  host: HostType;
  images: [string];
  maxAdults: number;
}


export type CityType = {
  name: string;
  location: LocationType;
}

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type HostType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type UserReviewsType = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
}

export type UserType ={
  name: string;
  avatarUrl: string;
}

export type ReviewType = Pick<UserReviewsType, 'rating' | 'comment'>
