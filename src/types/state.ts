import {store} from '../store/index.js';
import { TypeOffer, TypeCity, TypeFullOffer, Review } from './offer';

export type State = {
  city: string;
  offers: TypeOffer[];
  allOffers: TypeOffer[];
  cities: TypeCity[];
  error: string | null;
  isOffersDataLoading: boolean;
  offer: TypeFullOffer | null;
  isOfferDataLoading: boolean;
   reviews: Review[];
  isReviewsDataLoading: boolean;
};

export type AppDispatch = typeof store.dispatch;
