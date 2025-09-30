import { createSlice } from '@reduxjs/toolkit';
import { Review } from '../../types/offer';
import { NameSpace } from '../../const';
import { fetchReviewsById } from '../api-actions';

type ReviewsState = {
  reviews: Review[];
  isReviewsDataLoading: boolean;
};

const initialState: ReviewsState = {
  reviews: [],
  isReviewsDataLoading: true,
};

export const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsById.pending, (state) => {
        state.isReviewsDataLoading = false;
      })
      .addCase(fetchReviewsById.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsDataLoading = true;
      });
  },
});
