import {createAction} from '@reduxjs/toolkit';
import { TypeOffer, TypeFullOffer, Review } from '../types/offer';
import {AppRoute, AuthorizationStatus} from '../const';
import {UserData} from '../types/user-data';

export const changeCity = createAction('city/changeCity', (value:string) =>
  ({
    payload: value
  })
);

export const getCitiesFromOffers = createAction('offers/getCitiesFromOffers');
export const getOffersByCity = createAction('offers/getOffersByCity');
export const loadOffers = createAction<TypeOffer[]>('offers/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const loadOffer = createAction<TypeFullOffer>('offer/loadOffer');
export const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');
export const loadReviews = createAction<Review[]>('reviews/loadReviews');
export const setReviewsDataLoadingStatus = createAction<boolean>('reviews/setReviewsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const getUserData = createAction<UserData | null>('user/getUserData');
export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');

