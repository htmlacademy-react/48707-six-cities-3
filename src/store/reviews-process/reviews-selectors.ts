import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Review } from '../../types/offer';

export const getReviews = (state: State): Review[] =>
  state[NameSpace.Reviews].reviews;

export const getIsReviewsDataLoading = (state: State): boolean =>
  state[NameSpace.Reviews].isReviewsDataLoading;
