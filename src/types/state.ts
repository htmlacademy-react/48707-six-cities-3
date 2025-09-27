import {store} from '../store/index.js';
import { TypeOffer, TypeCity, TypeFullOffer, Review } from './offer';
import { UserData } from './user-data.js';
import { AuthorizationStatus } from '../const.js';

export type State = {
  city: string;
  offers: TypeOffer[];
  allOffers: TypeOffer[];
  cities: TypeCity[];
  isOffersDataLoading: boolean;
  offer: TypeFullOffer | null;
  isOfferDataLoading: boolean;
  reviews: Review[];
  isReviewsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type AppDispatch = typeof store.dispatch;
