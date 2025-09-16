import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../PrivateRoute/PrivateRoute.tsx';
import Main from '../../pages/HomePage/HomePage.tsx';
import Login from '../../pages/Login/Login.tsx';
import Favorites from '../../pages/Favorites/Favorites.tsx';
import Offer from '../../pages/Offer/Offer.tsx';
import NotFound from '../../pages/NotFound/NotFound.tsx';
import { TypeOffer } from '../../types/offer.ts';

type AppScreenProps = {
  numberOfRentalOffers: number;
  offers: TypeOffer[];
};

function App({ numberOfRentalOffers, offers }: AppScreenProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<
    TypeOffer['location'] | undefined
  >(undefined);

  const city =
    offers.length > 0 ? offers[0].city :
      {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 12,
        },
      };

  const handleListItemHover = (listItemName: string) => {
    const currentPoint = offers.find((offer) => offer.title === listItemName)?.location;
    setSelectedPoint(currentPoint);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <Main
              numberOfRentalOffers={numberOfRentalOffers}
              offers={offers}
              city={city}
              selectedPoint={selectedPoint}
              onListItemHover={handleListItemHover}
            />
          }
        />
        <Route path={AppRoute.Offer} element={<Offer offers={offers} />} />

        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
