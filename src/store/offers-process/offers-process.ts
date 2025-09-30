import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeCity, TypeOffer } from '../../types/offer';
import { NameSpace } from '../../const';

type DataState = {
  city: string;
  offers: TypeOffer[];
  allOffers: TypeOffer[];
  cities: TypeCity[];
};

const initialState: DataState = {
  city: 'Paris',
  offers: [],
  allOffers: [],
  cities: [],
};
export const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    getOffersByCity: (state) => {
      if (state.allOffers.length > 0) {
        state.offers = state.allOffers.filter((offer: TypeOffer) =>
          offer.city.name === state.city
        );
      } else {
        state.offers = [];
      }
    },
    getCitiesFromOffers: (state) => {
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
    },
    setAllOffers: (state, action: PayloadAction<TypeOffer[]>) => {
      state.allOffers = action.payload;
    }
  },
});

export const {changeCity, getOffersByCity, getCitiesFromOffers, setAllOffers} = offerSlice.actions;
