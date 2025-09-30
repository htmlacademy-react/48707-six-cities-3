import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { TypeOffer, TypeFullOffer, Review} from '../types/offer.js';
import {redirectToRoute } from './action';
import {APIRoute, AppRoute } from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {saveToken, dropToken} from '../services/token';
import { toast } from 'react-toastify';
import { setAllOffers } from './offers-process/offers-process.js';

type AxiosError = {
  response?: {
    status: number;
    data?: {
      message?: string;
    };
  };
  message?: string;
};

export const fetchOffersAction = createAsyncThunk<TypeOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TypeOffer[]>(APIRoute.Offers);
    dispatch(setAllOffers(data));
    return data;
  },
);

export const fetchOfferById = createAsyncThunk<TypeFullOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferById',
  async (offerId, { extra: api}) => {
    const {data} = await api.get<TypeFullOffer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchReviewsById = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewsById',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Review[]>(`/comments/${offerId}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      return data;
    } catch(error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401) {
        toast.error('Вы не авторизованы');
      } else {
        toast.error('Ошибка соединения. Попробуйте позже.');
      }
      throw error;
    }
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Root));
      return data;
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
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
