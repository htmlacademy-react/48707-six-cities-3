import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { TypeFullOffer } from '../../types/offer';

export const getOffer = (state: State): TypeFullOffer | null =>
  state[NameSpace.Data]?.offer || null;

export const getIsOfferDataLoading = (state: State): boolean =>
  state[NameSpace.Data].isOfferDataLoading;
