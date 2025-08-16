import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {Setting} from './const.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      numberOfRentalOffers = {Setting.numberOfRentalOffers}
    />
  </React.StrictMode>,
);
