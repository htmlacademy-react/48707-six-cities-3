import { TypeCity } from '../../types/offer';

type CityProps = {
  city: TypeCity;
  onClick: (city: TypeCity) => void;
};

function City({ city, onClick }: CityProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className="locations__item-link tabs__item"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClick(city);
        }}
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}

export default City;
