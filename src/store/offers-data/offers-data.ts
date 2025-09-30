import { createSlice } from '@reduxjs/toolkit';
import { TypeOffer, TypeFullOffer } from '../../types/offer';
import { NameSpace } from '../../const';
import { fetchOffersAction, fetchOfferById } from '../api-actions';

type DataState = {
  offers: TypeOffer[];
  allOffers: TypeOffer[];
  isOffersDataLoading: boolean;
  offer: TypeFullOffer | null;
  isOfferDataLoading: boolean;
};

const initialState: DataState = {
  offers: [],
  allOffers: [],
  isOffersDataLoading: false,
  offer: null,
  isOfferDataLoading: true,
};

export const dataSlice = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferById.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOfferById.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferDataLoading = false;
      })
      .addCase(fetchOfferById.rejected, (state) => {
        state.isOfferDataLoading = false;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.allOffers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      });
  },
});
