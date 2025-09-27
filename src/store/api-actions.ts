import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { TypeOffer, TypeFullOffer, Review} from '../types/offer.js';
import {loadOffers, setOffersDataLoadingStatus, setOfferDataLoadingStatus, loadOffer, setReviewsDataLoadingStatus, loadReviews, requireAuthorization, redirectToRoute, getUserData } from './action';
import {APIRoute, AuthorizationStatus, AppRoute } from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {saveToken, dropToken} from '../services/token';
import { toast } from 'react-toastify';

type AxiosError = {
  response?: {
    status: number;
    data?: {
      message?: string;
    };
  };
  message?: string;
};

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
    } finally {
      dispatch(setReviewsDataLoadingStatus(false));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(getUserData(data));
    } catch(error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401) {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
        dispatch(getUserData(null));
      } else {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
        dispatch(getUserData(null));
      }
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(getUserData(data));
      dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401) {
        toast.error('Неверный email или пароль');
      } else if (axiosError.response?.status === 400) {
        toast.error('Некорректные данные для входа');
      } else {
        toast.error('Ошибка соединения. Попробуйте позже.');
      }
      throw error;
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(getUserData(null));
  },
);
