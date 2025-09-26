import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { TypeOffer, TypeFullOffer, Review} from '../types/offer.js';
import {loadOffers, setError, setOffersDataLoadingStatus, setOfferDataLoadingStatus, loadOffer, setReviewsDataLoadingStatus, loadReviews } from './action';
import {APIRoute, TIMEOUT_SHOW_ERROR} from '../const';
import {store} from './';

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<TypeOffer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchOfferById = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferById',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOfferDataLoadingStatus(true));
    try {
      const {data} = await api.get<TypeFullOffer>(`${APIRoute.Offers}/${offerId}`);
      dispatch(loadOffer(data));
    } catch (error) {
      dispatch(setError('Failed to load offer'));
    } finally {
      dispatch(setOfferDataLoadingStatus(false));
    }
  },
);

export const fetchReviewsById = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewsById',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setReviewsDataLoadingStatus(true));
    try {
      const {data} = await api.get<Review[]>(`/comments/${offerId}`);
      dispatch(loadReviews(data));
    } catch (error) {
      dispatch(setError('Failed to load reviews'));
    } finally {
      dispatch(setReviewsDataLoadingStatus(false));
    }
  },
);
