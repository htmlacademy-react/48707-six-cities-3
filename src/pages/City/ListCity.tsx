import City from './City';
import { TypeCity } from '../../types/offer';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';

type CitiesProps = {
  cities: TypeCity[];
};

function ListCity({ cities }: CitiesProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City
          key={city.name}
          city={city}
          onClick={(selectedCity) => dispatch(changeCity(selectedCity.name))}
        />
      ))}
    </ul>
  );
}

export default ListCity;
