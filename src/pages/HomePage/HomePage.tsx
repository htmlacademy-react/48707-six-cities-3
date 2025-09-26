import { TypeOffer, TypeCity } from '../../types/offer';
import ListOffers from '../ListOffers/ListOffers';
import Map from '../../components/Map/Map';
import ListCity from '../City/ListCity';

type MainProps = {
  offers: TypeOffer[];
  city: TypeCity;
  selectedPoint?: TypeOffer['location'];
  onListItemHover: (listItemName: string) => void;
  cities: TypeCity[];
  onListItemLeave: () => void;
};

function HomePage({
  offers,
  city,
  selectedPoint,
  onListItemHover,
  onListItemLeave,
  cities,
}: MainProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ListCity cities={cities} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {offers.length} places to stay in {city.name}
            </b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
            <ListOffers offers={offers} onListItemHover={(id) => onListItemHover(id)} onListItemLeave={onListItemLeave}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                key={city.id}
                city={city}
                points={offers.map((offer) => offer.location)}
                selectedPoint={selectedPoint}
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
