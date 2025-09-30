import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { dataSlice } from './offers-data/offers-data';
import { offerSlice } from './offers-process/offers-process';
import { reviewsSlice } from './reviews-process/reviews-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Data]: dataSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
});
