import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../PrivateRoute/PrivateRoute.tsx';
import Main from '../../pages/HomePage/HomePage.tsx';
import HomePageEmpty from '../../pages/HomePage/HomePageEmpty.tsx';
import Login from '../../pages/Login/Login.tsx';
import Favorites from '../../pages/Favorites/Favorites.tsx';
import Offer from '../../pages/Offer/Offer.tsx';
import NotFound from '../../pages/NotFound/NotFound.tsx';
import { TypeOffer, TypeCity } from '../../types/offer.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import { getOffersByCity } from '../../store/action';

type AppScreenProps = {
  cities: TypeCity[];
};

function App({ cities }: AppScreenProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<TypeOffer['location']>();

  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);

  useEffect(() => {
    dispatch(getOffersByCity());
  }, [city, dispatch]);

  const offers = useAppSelector((state) => state.offers);
  const dataCity = cities.find((item) => item.name === city) || cities[0];

  const handleListItemHover = (listItemName: string) => {
    const currentPoint = offers.find(
      (offer) => offer.title === listItemName
    )?.location;
    setSelectedPoint(currentPoint);
  };

  const getComponentHomePage = (items: TypeOffer[]) =>
    items.length > 0 ? (
      <Main
        offers={items}
        city={dataCity}
        selectedPoint={selectedPoint}
        onListItemHover={handleListItemHover}
        cities={cities}
      />
    ) : (
      <HomePageEmpty />
    );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={getComponentHomePage(offers)} />
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
