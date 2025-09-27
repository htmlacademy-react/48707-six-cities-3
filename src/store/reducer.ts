import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffersByCity, loadOffers, setOffersDataLoadingStatus, getCitiesFromOffers, loadOffer, setOfferDataLoadingStatus, loadReviews, setReviewsDataLoadingStatus,requireAuthorization, getUserData } from './action';
import { TypeOffer, TypeCity } from '../types/offer.ts';
import { State } from '../types/state';
import { AuthorizationStatus } from '../const.tsx';

const initialState: State = {
  city: 'Paris',
  offers: [],
  allOffers: [],
  cities: [],
  isOffersDataLoading: false,
  offer: null,
  isOfferDataLoading: true,
  reviews: [],
  isReviewsDataLoading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.allOffers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(getOffersByCity, (state) => {
      if (state.allOffers.length > 0) {
        state.offers = state.allOffers.filter((offer: TypeOffer) =>
          offer.city.name === state.city
        );
      } else {
        state.offers = [];
      }
    })
    .addCase(getCitiesFromOffers, (state) => {
      if (state.allOffers.length > 0) {
        const uniqueCitiesMap = new Map<string, TypeCity>();

        state.allOffers.forEach((offer) => {
          const cityName = offer.city.name;
          if (!uniqueCitiesMap.has(cityName)) {
            uniqueCitiesMap.set(cityName, offer.city);
          }
        });
        state.cities = Array.from(uniqueCitiesMap.values());

        if (state.cities.length > 0 && !state.cities.some((c) => c.name === state.city)) {
          state.city = state.cities[0].name;
        }
      } else {
        state.cities = [];
      }
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setReviewsDataLoadingStatus, (state, action) => {
      state.isReviewsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export {reducer};
