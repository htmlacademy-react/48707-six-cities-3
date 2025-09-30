import {store} from '../store/index.js';
import { TypeOffer, TypeCity, TypeFullOffer, Review } from './offer';
import { UserData } from './user-data';
import { AuthorizationStatus } from '../const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type DataState = {
  offers: TypeOffer[];
  allOffers: TypeOffer[];
  isOffersDataLoading: boolean;
  offer: TypeFullOffer | null;
  isOfferDataLoading: boolean;
};

export type OfferState = {
  city: string;
  offers: TypeOffer[];
  allOffers: TypeOffer[];
  cities: TypeCity[];
};

export type ReviewsState = {
  reviews: Review[];
  isReviewsDataLoading: boolean;
};
