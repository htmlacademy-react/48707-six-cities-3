import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import { Setting } from './const.tsx';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      numberOfRentalOffers = {Setting.numberOfRentalOffers}
      offers = {offers}
    />
  </React.StrictMode>
);
