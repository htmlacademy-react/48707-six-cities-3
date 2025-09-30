import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { TypeOffer, TypeCity, TypeFullOffer } from '../../types/offer';

export const getCity = (state: State): string =>
  state[NameSpace.Offer]?.city || 'Paris';

export const getOffers = (state: State): TypeOffer[] =>
  state[NameSpace.Offer]?.offers || [];

export const getAllOffers = (state: State): TypeOffer[] =>
  state[NameSpace.Data]?.allOffers || [];

export const getCities = (state: State): TypeCity[] =>
  state[NameSpace.Offer]?.cities || [];

export const getIsOffersDataLoading = (state: State): boolean =>
  state[NameSpace.Data]?.isOffersDataLoading || false;

export const getOffer = (state: State): TypeFullOffer | null =>
  state[NameSpace.Data]?.offer || null;

export const getIsOfferDataLoading = (state: State): boolean =>
  state[NameSpace.Data]?.isOfferDataLoading || false;
