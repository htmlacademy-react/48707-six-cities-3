import {store} from '../store/index.js';
import { TypeOffer } from './offer';

export type State = {
  city: string;
  offers: TypeOffer[];
};

export type AppDispatch = typeof store.dispatch;
