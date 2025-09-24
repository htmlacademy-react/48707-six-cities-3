import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import ErrorMessage from './components/Error/error-message';
import {fetchOfferAction} from './store/api-actions';

store.dispatch(fetchOfferAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App/>
    </Provider>
  </React.StrictMode>
);
