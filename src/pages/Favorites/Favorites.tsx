import { TypeOffer } from '../../types/offer';
import ListFavoriteGroups from './ListFavoriteGroups';

type FavoritesProps = {
  offers: TypeOffer[];
};

const groupOffersByCity = (offers: TypeOffer[]): Record<string, TypeOffer[]> =>
  offers.reduce((acc: Record<string, TypeOffer[]>, offer: TypeOffer) => {
    const cityName = offer.city.name;

    if (!acc[cityName]) {
      acc[cityName] = [];
    }

    acc[cityName].push(offer);
    return acc;
  }, {});

function Favorites({offers }: FavoritesProps): JSX.Element {
  const favoritesOffers = offers.filter((item) => item.isFavorite);
  const favoritesOffersGroupByCity = groupOffersByCity(favoritesOffers);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {
              Object.entries(favoritesOffersGroupByCity).map(([cityName, cityOffers]) =>
                (
                  <ListFavoriteGroups
                    key={cityName}
                    cityName={cityName}
                    offers={cityOffers}
                  />
                )
              )
            }
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
