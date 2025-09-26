import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffersByCity, loadOffers, setError, setOffersDataLoadingStatus, getCitiesFromOffers, loadOffer, setOfferDataLoadingStatus, loadReviews, setReviewsDataLoadingStatus } from './action';
import { TypeOffer, TypeCity } from '../types/offer.ts';
import { State } from '../types/state';

const initialState: State = {
  city: 'Paris',
  offers: [],
  allOffers: [],
  cities: [],
  error: null,
  isOffersDataLoading: false,
  offer: null,
  isOfferDataLoading: true,
  reviews: [],
  isReviewsDataLoading: true,
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
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
    });
});

export {reducer};
