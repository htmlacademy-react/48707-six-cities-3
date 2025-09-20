import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffersByCity} from './action';
import { offers } from '../mocks/offers';
import { TypeOffer } from '../types/offer.ts';
import { State } from '../types/state';

const initialState: State = {
  city: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffersByCity, (state) => {
      state.offers = offers.filter((offer: TypeOffer) => offer.city === state.city);
    });
});

export {reducer};
