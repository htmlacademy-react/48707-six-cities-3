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
import { TypeOffer } from '../../types/offer.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import { getOffersByCity, getCitiesFromOffers, changeCity } from '../../store/action';
import LoadingScreen from '../../pages/Spinner/Spinner.tsx';

function App(): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<TypeOffer['location']>();
  const dispatch = useAppDispatch();
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const city = useAppSelector((state) => state.city);
  const cities = useAppSelector((state) => state.cities);
  const offers = useAppSelector((state) => state.offers);
  const allOffers = useAppSelector((state) => state.allOffers);

  useEffect(() => {
    if (allOffers.length > 0 && cities.length === 0) {
      dispatch(getCitiesFromOffers());
    }
  }, [allOffers, cities.length, dispatch]);

  useEffect(() => {
    dispatch(getOffersByCity());
  }, [city, allOffers, dispatch]);

  useEffect(() => {
    if (cities.length > 0 && !cities.some((c) => c.name === city)) {
      dispatch(changeCity(cities[0].name));
    }
  }, [cities, city, dispatch]);

  if (isOffersDataLoading) {
    return <LoadingScreen />;
  }

  const dataCity = cities.find((item) => item.name === city) ||
                  (cities.length > 0 ? cities[0] : null);

  const handleListItemHover = (listItemId: string) => {
    const currentPoint = offers.find(
      (offer) => offer.id === listItemId
    )?.location;
    setSelectedPoint(currentPoint);
  };

  const handleListItemLeave = () => {
    setSelectedPoint(undefined);
  };

  const getComponentHomePage = (items: TypeOffer[]) => {
    if (!dataCity) {
      return <HomePageEmpty />;
    }

    return items.length > 0 ? (
      <Main
        offers={items}
        city={dataCity}
        selectedPoint={selectedPoint}
        onListItemHover={handleListItemHover}
        cities={cities}
        onListItemLeave={handleListItemLeave}
      />
    ) : (
      <HomePageEmpty />
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={getComponentHomePage(offers)} />
        <Route path={AppRoute.Offer} element={<Offer />} />

        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
