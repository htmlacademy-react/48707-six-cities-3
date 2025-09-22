import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('city/changeCity', (value:string) =>
  ({
    payload: value
  })
);
export const getOffersByCity = createAction('offers/getOffersByCity');
