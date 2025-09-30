import { Route, Routes } from 'react-router-dom';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../PrivateRoute/PrivateRoute.tsx';
import Main from '../../pages/HomePage/HomePage.tsx';
import HomePageEmpty from '../../pages/HomePage/HomePageEmpty.tsx';
import Login from '../../pages/Login/Login.tsx';
import Favorites from '../../pages/Favorites/Favorites.tsx';
import Offer from '../../pages/Offer/Offer.tsx';
import NotFound from '../../pages/NotFound/NotFound.tsx';
import { TypeOffer } from '../../types/offer.ts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/Spinner/Spinner.tsx';
import HistoryRouter from '../HistoryRoute/HistoryRoute.tsx';
import browserHistory from '../../browser-history';
import Header from '../../pages/Header/Header.tsx';
import { checkAuthAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/user-selectors';
import { getCity, getCities, getOffers, getAllOffers, getIsOffersDataLoading } from '../../store/offers-data/offers-selectors';
import { getOffersByCity, getCitiesFromOffers, changeCity } from '../../store/offers-process/offers-process.ts';

function App(): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<TypeOffer['location']>();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);
  const city = useAppSelector(getCity);
  const citiesFromSelector = useAppSelector(getCities);
  const offersFromSelector = useAppSelector(getOffers);
  const allOffersFromSelector = useAppSelector(getAllOffers);

  const cities = useMemo(() => citiesFromSelector || [], [citiesFromSelector]);
  const offers = useMemo(() => offersFromSelector || [], [offersFromSelector]);
  const allOffers = useMemo(() => allOffersFromSelector || [], [allOffersFromSelector]);

  const dispatch = useAppDispatch();

  const dataCity = useMemo(() =>
    cities.find((item) => item.name === city) || (cities.length > 0 ? cities[0] : null),
  [cities, city]);

  const handleListItemHover = useCallback((listItemId: string) => {
    const currentPoint = offers.find((offer) => offer.id === listItemId)?.location;
    setSelectedPoint(currentPoint);
  }, [offers]);

  const handleListItemLeave = useCallback(() => {
    setSelectedPoint(undefined);
  }, []);

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

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

  const isLoading = authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading;

  if (isLoading) {
    return <LoadingScreen />;
  }

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
    <HistoryRouter history={browserHistory}>
      <Header />
      <Routes>
        <Route path={AppRoute.Root} element={getComponentHomePage(offers)} />
        <Route path={AppRoute.Offer} element={<Offer />} />

        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
